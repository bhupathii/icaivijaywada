/**
 * ICAI Vijayawada Branch Portal Javascript
 * Accessibility features, carousel slider, news marquee controls, mobile menus, and forms validation.
 */

document.addEventListener("DOMContentLoaded", () => {
  initAccessibility();
  initMobileNav();
  initCarousel();
  initTicker();
  initVisitorCounter();
  initFormInteractions();
  initSubPageTabs();
  initSearchFilter();
});

/* ----------------------------------------------------
   1. Accessibility Functions (Font Scale & Contrast)
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
   2. Mobile Navigation Toggle & Dropdowns
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
   3. Carousel / Slide Transition Control
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
   4. Ticker Play/Pause (Accessibility Friendly)
   ---------------------------------------------------- */
function initTicker() {
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
}

/* ----------------------------------------------------
   5. Visitor Counter Logic (Persistent localStorage)
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
   6. Form Validation & Simulation Interactions
   ---------------------------------------------------- */
function initFormInteractions() {
  // Query Form Contact Page
  const queryForm = document.getElementById("query-form");
  queryForm?.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("query-name")?.value;
    const email = document.getElementById("query-email")?.value;
    const msg = document.getElementById("query-message")?.value;

    if (!name || !email || !msg) {
      alert("Please fill all mandatory fields.");
      return;
    }

    // Generate random reference code
    const ticketNo = "VIJ-QRY-" + Math.floor(100000 + Math.random() * 900000);
    alert(`Thank you, ${name}! Your query is successfully submitted.\nReference Ticket No: ${ticketNo}\nOur desk will get back to you shortly.`);
    queryForm.reset();
  });

  // Event Register buttons
  const regButtons = document.querySelectorAll(".cpe-btn");
  regButtons.forEach(btn => {
    btn.addEventListener("click", (e) => {
      const topic = e.target.getAttribute("data-topic") || "Seminar";
      const referenceNo = "CPE-REG-" + Math.floor(1000 + Math.random() * 9000);
      alert(`Registration Successful!\nEvent: ${topic}\nYour Reservation ID is: ${referenceNo}\nAn confirmation email has been sent to your registered ICAI address.`);
    });
  });
}

/* ----------------------------------------------------
   7. Sub-page Navigation Tabs
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
   8. Search & Table Row Filters
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
