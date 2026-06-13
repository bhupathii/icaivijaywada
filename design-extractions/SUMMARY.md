# ICAI Websites Design Extraction Summary Report

This summary report compares the design systems across six local branch websites of the Institute of Chartered Accountants of India (ICAI).

## Extraction Matrix

| Website Name | Target URL | Pages Analyzed | Extraction Method | Success/Failure | Key Design Characteristic |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **ICAI Guntur Branch** | `https://www.gunturicai.org/` | Homepage | Playwright Fallback | **Success** | Blue/Gold accents, Arial fonts, table-centric events. |
| **CPE Directorate** | `https://www.cpeicai.org/` | Homepage | Playwright Fallback | **Success** | Institutional dark theme, sans-serif typography. |
| **ICAI SIRC** | `https://sirc-icai.org/` | Homepage | Playwright Fallback | **Success** | Corporate blue base, high-density event navigation links. |
| **ICAI Kochi Branch** | `https://kochiicai.org/` | Homepage | Playwright Fallback | **Success** | Structured grid layout, prominent news updates cards. |
| **ICAI Ahmedabad Branch** | `https://icaiahmedabad.com/` | Homepage | DesignMD CLI | **Success** | Clean modern corporate layout, Oswald/Helvetica. |
| **ICAI Pune Branch** | `https://www.puneicai.org/` | Homepage | Playwright Fallback | **Success** | Lato typography, search bar model forms, high contrast. |

---

## Similarity Observations Across ICAI Branches

1. **Brand Identity & Color Palette Consistency**
   - **Primary Color**: Every single branch analyzed utilizes a **Deep Corporate Blue/Navy** (ranging from `#010165` to `#27277c`) as its primary color, establishing a unified institutional trust and recognition aligned with the national ICAI identity.
   - **Accent Palette**: The secondary accent colors are universally **Gold/Yellow/Orange** (`#ff9c00`) or **Muted Olive Green** (`#aec252`). These accent colors are primarily reserved for prominent buttons (e.g. CPE registration), live ticker notifications, and active menu selections.

2. **Structural Layout Commonality**
   - **Multi-tiered Header**: All sites feature a top utility bar containing social links, email, phone numbers, and quick access buttons (Members/Students portals), followed by a secondary main menu container.
   - **Information Density**: The homepages are structured to present a large volume of resources immediately. Multi-column grids are used to display parallel streams of updates: *Announcements*, *CPE Seminars*, *Upcoming Events*, and *Chairman's Messages*.
   - **Footer Layout**: Footers are universally structured as 3 to 4-column containers containing contact addresses, Google Maps locations, sitemaps, and direct references to official sister portals (e.g., ICAI national, WIRC, SIRC).

3. **Typography Standards**
   - The typography scales rely heavily on standard, highly legible sans-serif fonts such as **Helvetica**, **Arial**, **Lato**, and **Oswald** (for headers).
   - Headings are styled with thick font-weights (700) ranging between `24px` and `36px` to clearly divide the high-density content sections. Body sizes default to standard browser sizes of `14px` to `16px`.

4. **UI Components & Patterns**
   - **Notice Boards & Bulletins**: Lists of hyperlinks with animated scroll bars (tickers) are a staple across almost all branch portals to show active news.
   - **Tables and Calendars**: Custom tabular interfaces are heavily utilized to present CPE program calendars with pricing and hours.
   - **Simple Forms**: Quick search inputs and search bar modules are frequently placed in the headers or notice boards for quick lookup.
