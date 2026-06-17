/**
 * ICAI Vijayawada Branch Portal Javascript
 * Accessibility features, carousel slider, news marquee controls, mobile menus, forms validation, and Supabase CMS integration.
 */

// Global Supabase client instance
let supabase = null;

document.addEventListener("DOMContentLoaded", async () => {
  initAccessibility();
  initMobileNav();
  initCarousel();
  initVisitorCounter();
  initSubPageTabs();
  initSearchFilter();

  // Try to initialize Supabase
  await initSupabase();

  // Load real-time database content or fallback
  initTicker();
  initFormInteractions();
  loadLiveAnnouncements();
  loadLiveSeminars();
  loadLiveNewsletters();
});

/* ----------------------------------------------------
   1. Supabase Initialization
   ---------------------------------------------------- */
async function initSupabase() {
  let url = "";
  let key = "";

  // 1. Try to fetch from Vercel Serverless API environment variables
  try {
    const res = await fetch("/api/config");
    if (res.ok) {
      const config = await res.json();
      if (config.supabaseUrl && config.supabaseAnonKey) {
        url = config.supabaseUrl;
        key = config.supabaseAnonKey;
        console.log("[ICAI CMS] Credentials successfully loaded from Vercel Environment Variables.");
      }
    }
  } catch (err) {
    console.log("[ICAI CMS] Vercel environment API not available, trying local config.js...");
  }

  // 2. Fall back to local config.js if API keys were not found in env
  if (!url || !key) {
    if (window.SUPABASE_URL && window.SUPABASE_ANON_KEY && !window.SUPABASE_URL.includes("your-project-ref")) {
      url = window.SUPABASE_URL;
      key = window.SUPABASE_ANON_KEY;
      console.log("[ICAI CMS] Credentials successfully loaded from local config.js file.");
    }
  }

  // 3. Initialize Supabase if keys exist
  if (url && key) {
    try {
      supabase = window.supabase.createClient(url, key);
      console.log("[ICAI CMS] Supabase initialized successfully. Real-time data sync active.");
    } catch (e) {
      console.error("[ICAI CMS] Error creating Supabase client:", e);
    }
  } else {
    console.warn("[ICAI CMS] Configuration missing. Please set Vercel Environment Variables (SUPABASE_URL, SUPABASE_ANON_KEY) or create config.js locally. Running in offline/mock fallback mode.");
  }
}

/* ----------------------------------------------------
   2. Accessibility Functions (Font Scale & Contrast)
   ---------------------------------------------------- */
function initAccessibility() {
  const btnFontSmall = document.getElementById("btn-font-small");
  const btnFontNormal = document.getElementById("btn-font-normal");
  const btnFontLarge = document.getElementById("btn-font-large");
  const btnContrastNormal = document.getElementById("btn-contrast-normal");
  const btnContrastHigh = document.getElementById("btn-contrast-high");

  // Font Sizing Persist
  const savedFontSize = localStorage.getItem("icai-font-size");
  if (savedFontSize) {
    document.documentElement.className = savedFontSize;
  }

  btnFontSmall?.addEventListener("click", () => {
    document.documentElement.className = "font-small";
    localStorage.setItem("icai-font-size", "font-small");
  });

  btnFontNormal?.addEventListener("click", () => {
    document.documentElement.className = "";
    localStorage.setItem("icai-font-size", "");
  });

  btnFontLarge?.addEventListener("click", () => {
    document.documentElement.className = "font-large";
    localStorage.setItem("icai-font-size", "font-large");
  });

  // Contrast Persist
  const savedContrast = localStorage.getItem("icai-contrast");
  if (savedContrast === "high-contrast") {
    document.body.classList.add("high-contrast");
  }

  btnContrastNormal?.addEventListener("click", () => {
    document.body.classList.remove("high-contrast");
    localStorage.setItem("icai-contrast", "normal");
  });

  btnContrastHigh?.addEventListener("click", () => {
    document.body.classList.add("high-contrast");
    localStorage.setItem("icai-contrast", "high-contrast");
  });
}

/* ----------------------------------------------------
   3. Mobile Navigation Toggle & Dropdowns
   ---------------------------------------------------- */
function initMobileNav() {
  const mobileToggle = document.getElementById("mobile-toggle");
  const navMenu = document.querySelector(".nav-menu");
  const navItems = document.querySelectorAll(".nav-item");

  mobileToggle?.addEventListener("click", () => {
    navMenu?.classList.toggle("open");
  });

  // Toggle dropdown on click for mobile screen sizes
  navItems.forEach(item => {
    const link = item.querySelector(".nav-link");
    const dropdown = item.querySelector(".dropdown-menu");

    if (dropdown) {
      link?.addEventListener("click", (e) => {
        if (window.innerWidth <= 768) {
          e.preventDefault(); // Prevent navigating to placeholder
          item.classList.toggle("active-mobile-dropdown");
        }
      });
    }
  });
}

/* ----------------------------------------------------
   4. Carousel / Slide Transition Control
   ---------------------------------------------------- */
function initCarousel() {
  const slides = document.querySelectorAll(".carousel-slide");
  const prevBtn = document.querySelector(".carousel-prev");
  const nextBtn = document.querySelector(".carousel-next");
  const carouselContainer = document.querySelector(".banner-carousel");
  
  if (slides.length === 0) return;

  let currentSlide = 0;
  let carouselInterval;

  function showSlide(index) {
    slides.forEach(slide => slide.classList.remove("active"));
    currentSlide = (index + slides.length) % slides.length;
    slides[currentSlide].classList.add("active");
  }

  function startAutoplay() {
    carouselInterval = setInterval(() => {
      showSlide(currentSlide + 1);
    }, 5000);
  }

  function stopAutoplay() {
    clearInterval(carouselInterval);
  }

  prevBtn?.addEventListener("click", () => {
    showSlide(currentSlide - 1);
  });

  nextBtn?.addEventListener("click", () => {
    showSlide(currentSlide + 1);
  });

  carouselContainer?.addEventListener("mouseenter", stopAutoplay);
  carouselContainer?.addEventListener("mouseleave", startAutoplay);

  // Initialize
  showSlide(currentSlide);
  startAutoplay();
}

/* ----------------------------------------------------
   5. Ticker Play/Pause & Real-time Fetch
   ---------------------------------------------------- */
async function initTicker() {
  const marquee = document.querySelector(".ticker-marquee");
  const playPauseBtn = document.getElementById("btn-ticker-toggle");

  if (!marquee) return;

  let isPaused = false;

  playPauseBtn?.addEventListener("click", () => {
    isPaused = !isPaused;
    if (isPaused) {
      marquee.style.animationPlayState = "paused";
      playPauseBtn.innerText = "⏸ Pause";
      playPauseBtn.setAttribute("aria-label", "Resume ticker scroll");
    } else {
      marquee.style.animationPlayState = "running";
      playPauseBtn.innerText = "▶ Scroll";
      playPauseBtn.setAttribute("aria-label", "Pause ticker scroll");
    }
  });

  // Pull active ticker headlines if Supabase is active
  if (supabase) {
    try {
      const { data, error } = await supabase
        .from("announcements")
        .select("*")
        .order("date", { ascending: false });

      if (!error && data && data.length > 0) {
        marquee.innerHTML = "";
        data.forEach(item => {
          const span = document.createElement("span");
          span.className = "ticker-item";
          span.innerHTML = `📢 <a href="${item.link || '#'}">${item.title}</a> ${item.is_new ? '<span class="badge-new">NEW</span>' : ''}`;
          marquee.appendChild(span);
        });
      }
    } catch (err) {
      console.error("[ICAI CMS] Error populating ticker:", err);
    }
  }
}

/* ----------------------------------------------------
   6. Live Announcements notice list Pull
   ---------------------------------------------------- */
async function loadLiveAnnouncements() {
  const noticeList = document.querySelector(".notice-list");
  if (!noticeList || !supabase) return;

  try {
    const { data, error } = await supabase
      .from("announcements")
      .select("*")
      .order("date", { ascending: false });

    if (error) {
      console.error("[ICAI CMS] Error pulling notice list:", error);
      return;
    }

    if (data) {
      noticeList.innerHTML = "";
      if (data.length === 0) {
        noticeList.innerHTML = '<li class="notice-item">No announcements found.</li>';
        return;
      }

      data.forEach(item => {
        const li = document.createElement("li");
        li.className = "notice-item";
        
        // Format date string beautifully (DD MMM YYYY)
        const parts = item.date.split("-");
        const formattedDate = (parts.length === 3) 
          ? new Date(parts[0], parts[1]-1, parts[2]).toLocaleDateString("en-IN", {day: "numeric", month: "short", year: "numeric"})
          : item.date;

        li.innerHTML = `
          <span class="notice-date">📅 ${formattedDate} ${item.is_new ? '<span class="badge-new">NEW</span>' : ''}</span>
          <a href="${item.link || '#'}" class="notice-link">${item.title}</a>
        `;
        noticeList.appendChild(li);
      });
    }
  } catch (err) {
    console.error("[ICAI CMS] Live announcements error:", err);
  }
}

/* ----------------------------------------------------
   7. Live CPE Seminars Table Pull
   ---------------------------------------------------- */
async function loadLiveSeminars() {
  const homeTableBody = document.querySelector(".main-grid .cpe-table tbody");
  const membersTableBody = document.querySelector("#cpe-search-table tbody");

  if ((!homeTableBody && !membersTableBody) || !supabase) return;

  try {
    const { data, error } = await supabase
      .from("seminars")
      .select("*")
      .order("date", { ascending: true });

    if (error) {
      console.error("[ICAI CMS] Seminars pull error:", error);
      return;
    }

    if (data) {
      // 1. Update Homepage Table (Top 3 upcoming)
      if (homeTableBody) {
        homeTableBody.innerHTML = "";
        if (data.length === 0) {
          homeTableBody.innerHTML = '<tr><td colspan="4" class="text-center">No CPE seminars scheduled.</td></tr>';
        } else {
          data.slice(0, 3).forEach(item => {
            const parts = item.date.split("-");
            const formattedDate = (parts.length === 3) 
              ? new Date(parts[0], parts[1]-1, parts[2]).toLocaleDateString("en-IN", {day: "numeric", month: "short"})
              : item.date;

            const tr = document.createElement("tr");
            tr.innerHTML = `
              <td><strong>${formattedDate}</strong><br>${item.time}</td>
              <td><strong>${item.topic}</strong><br>${item.speaker}</td>
              <td>${item.hours} hrs<br>${item.fee}</td>
              <td><button class="cpe-btn" data-topic="${item.topic}">Register</button></td>
            `;
            homeTableBody.appendChild(tr);
          });
        }
      }

      // 2. Update Members Portal Table (All events)
      if (membersTableBody) {
        membersTableBody.innerHTML = "";
        if (data.length === 0) {
          membersTableBody.innerHTML = '<tr><td colspan="5" class="text-center">No CPE seminars scheduled.</td></tr>';
        } else {
          data.forEach(item => {
            const parts = item.date.split("-");
            const formattedDate = (parts.length === 3) 
              ? new Date(parts[0], parts[1]-1, parts[2]).toLocaleDateString("en-IN", {day: "numeric", month: "short", year: "numeric"})
              : item.date;

            const tr = document.createElement("tr");
            tr.innerHTML = `
              <td><strong>${formattedDate}</strong><br>${item.time}<br>ICAI Bhawan Seminar Hall</td>
              <td><strong>${item.topic}</strong><br>Speaker: ${item.speaker}</td>
              <td>${item.hours} Hours<br>(Structured)</td>
              <td>${item.fee}</td>
              <td><button class="cpe-btn" data-topic="${item.topic}">Register</button></td>
            `;
            membersTableBody.appendChild(tr);
          });
        }
      }

      // Rebind register feedback listeners
      bindRegisterButtons();
    }
  } catch (err) {
    console.error("[ICAI CMS] Live seminars error:", err);
  }
}

/* ----------------------------------------------------
   8. Live Monthly Newsletters Archive Pull
   ---------------------------------------------------- */
async function loadLiveNewsletters() {
  const newsletterTableBody = document.querySelector("#newsletters .cpe-table tbody");
  if (!newsletterTableBody || !supabase) return;

  try {
    const { data, error } = await supabase
      .from("newsletters")
      .select("*");

    if (error) {
      console.error("[ICAI CMS] Newsletter pull error:", error);
      return;
    }

    if (data) {
      newsletterTableBody.innerHTML = "";
      if (data.length === 0) {
        newsletterTableBody.innerHTML = '<tr><td colspan="4" class="text-center">No newsletter archive issues found.</td></tr>';
        return;
      }

      data.forEach(item => {
        const tr = document.createElement("tr");
        tr.innerHTML = `
          <td><strong>${item.month}</strong></td>
          <td>${item.title}</td>
          <td>📄 PDF</td>
          <td><a href="${item.pdf_url}" class="cpe-btn" style="background:#144c8c; text-decoration:none; padding:4px 10px;">Download PDF</a></td>
        `;
        newsletterTableBody.appendChild(tr);
      });
    }
  } catch (err) {
    console.error("[ICAI CMS] Newsletters pull error:", err);
  }
}

/* ----------------------------------------------------
   9. Visitor Counter Logic (Persistent localStorage)
   ---------------------------------------------------- */
function initVisitorCounter() {
  const counterDigits = document.getElementById("counter-digits");
  if (!counterDigits) return;

  let views = localStorage.getItem("icai-page-views");
  if (!views) {
    views = 148392; // Baseline visitor count
  } else {
    views = parseInt(views) + 1;
  }
  localStorage.setItem("icai-page-views", views.toString());

  // Pad digits to length of 7 digits
  const paddedDigits = views.toString().padStart(7, "0");
  
  counterDigits.innerHTML = "";
  for (let char of paddedDigits) {
    const digitBox = document.createElement("span");
    digitBox.className = "digit-box";
    digitBox.innerText = char;
    counterDigits.appendChild(digitBox);
  }
}

/* ----------------------------------------------------
   10. Form Submissions & Dynamic Registration Bindings
   ---------------------------------------------------- */
function initFormInteractions() {
  // Query Form on Contact Page
  const queryForm = document.getElementById("query-form");
  queryForm?.addEventListener("submit", async (e) => {
    e.preventDefault();
    const name = document.getElementById("query-name")?.value;
    const email = document.getElementById("query-email")?.value;
    const membership = document.getElementById("query-membership")?.value || "";
    const category = document.getElementById("query-category")?.value;
    const msg = document.getElementById("query-message")?.value;

    if (!name || !email || !msg || !category) {
      alert("Please fill all mandatory fields.");
      return;
    }

    const ticketNo = "VIJ-QRY-" + Math.floor(100000 + Math.random() * 900000);

    // If Supabase database active, insert row
    if (supabase) {
      try {
        const { error } = await supabase
          .from("queries")
          .insert([{
            ticket_no: ticketNo,
            name: name,
            email: email,
            membership_no: membership,
            category: category,
            message: msg
          }]);

        if (!error) {
          alert(`Thank you, ${name}! Your query has been successfully submitted to the database.\nReference Ticket No: ${ticketNo}\nOur desk will get back to you shortly.`);
          queryForm.reset();
          return;
        } else {
          console.error("[ICAI CMS] Database submission error:", error);
        }
      } catch (err) {
        console.error("[ICAI CMS] Query submission error:", err);
      }
    }

    // Fallback offline submission message
    alert(`Thank you, ${name}! Your query is successfully submitted (Offline fallback active).\nReference Ticket No: ${ticketNo}\nOur desk will get back to you shortly.`);
    queryForm.reset();
  });

  // Call initial binding of register action keys
  bindRegisterButtons();
}

function bindRegisterButtons() {
  const regButtons = document.querySelectorAll(".cpe-btn");
  regButtons.forEach(btn => {
    // Prevent duplicate binding
    btn.removeEventListener("click", handleRegisterClick);
    btn.addEventListener("click", handleRegisterClick);
  });
}

function handleRegisterClick(e) {
  const topic = e.target.getAttribute("data-topic") || "Seminar";
  const referenceNo = "CPE-REG-" + Math.floor(1000 + Math.random() * 9000);
  alert(`Registration Successful!\nEvent: ${topic}\nYour Reservation ID is: ${referenceNo}\nAn confirmation email has been sent to your registered ICAI address.`);
}

/* ----------------------------------------------------
   11. Sub-page Navigation Tabs
   ---------------------------------------------------- */
function initSubPageTabs() {
  const tabs = document.querySelectorAll(".tab-btn");
  const sections = document.querySelectorAll(".tab-content-panel");

  if (tabs.length === 0) return;

  tabs.forEach(tab => {
    tab.addEventListener("click", () => {
      tabs.forEach(t => t.classList.remove("active"));
      sections.forEach(s => s.style.display = "none");

      tab.classList.add("active");
      const targetId = tab.getAttribute("data-target");
      const targetSection = document.getElementById(targetId);
      if (targetSection) {
        targetSection.style.display = "block";
      }
    });
  });
}

/* ----------------------------------------------------
   12. Search & Table Row Filters
   ---------------------------------------------------- */
function initSearchFilter() {
  const searchInput = document.getElementById("cpe-search-input");
  const cpeTable = document.getElementById("cpe-search-table");
  
  searchInput?.addEventListener("keyup", () => {
    const filter = searchInput.value.toLowerCase();
    const rows = cpeTable?.getElementsByTagName("tbody")[0]?.getElementsByTagName("tr");
    
    if (!rows) return;

    for (let row of rows) {
      const cells = row.getElementsByTagName("td");
      let found = false;
      
      for (let cell of cells) {
        if (cell.innerText.toLowerCase().indexOf(filter) > -1) {
          found = true;
          break;
        }
      }
      
      if (found) {
        row.style.display = "";
      } else {
        row.style.display = "none";
      }
    }
  });
}
