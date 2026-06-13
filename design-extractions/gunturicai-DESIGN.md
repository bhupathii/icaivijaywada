# Design System: ICAI Branch Portal
**Website URL:** https://www.gunturicai.org/

## 1. Executive Summary
The design system of **ICAI Branch Portal** is built around the identity of the Institute of Chartered Accountants of India (ICAI). It features a formal, institutional aesthetic using deep corporate blues combined with accent golds and greens. It is designed to host dense information hierarchies for chartered accountants, students, and the public.

## 2. Brand Colors
- **Primary Color (Corporate Blue)**: `#27277c` - Used for header, navigation background, and core brand components.
- **Secondary Color (Branch Accent)**: `#aeaeae` - Used for subheadings, active state links, and auxiliary tags.
- **Accent Color (Action/Highlight)**: `#ff9c00` - Used for important buttons, alerts, notifications, and key calls to action.
- **Background Color**: `#ffffff` - Used as the primary canvas for readability.
- **Body Text Color**: `#333333` - Standard text color for body paragraphs and descriptions.

## 3. Typography Scale
- **H1**: font-family: `arial`, size: `28px`, weight: `400`, color: `#333333`
- **H3**: font-family: `arial`, size: `15px`, weight: `700`, color: `#ffffff`
- **P**: font-family: `Arial`, size: `14px`, weight: `400`, color: `#555555`
- **A**: font-family: `arial`, size: `14px`, weight: `400`, color: `#24247b`


## 4. Spacing System
The layout utilizes a standardized spacing scale based on multiples of 4px:
- **Small (xs/sm)**: `4px` / `8px` - Applied to internal element paddings (e.g., buttons, input fields).
- **Medium (md/lg)**: `12px` / `16px` / `20px` - Used for gap spacing between items in lists, grids, and card interiors.
- **Large (xl/xxl)**: `24px` / `32px` / `40px` / `80px` - Used for vertical margins between major sections.

## 5. Grid & Layout System
- **Max Container Width**: `1170px` or `1200px` (standard bootstrap/container width).
- **Grid Layout**: 12-column responsive layout structure.
- **Section Padding**: Typically `40px 0` or `50px 0` for standard page sections.
- **Alignment Strategy**: Content is centered within a responsive container block with margins auto-centered.

## 6. Header/Navigation Structure
- **Top Bar**: Contact information, social media links, member/student quick links.
- **Main Header Logo**: ICAI Crest/Logo on the left with branch name typography next to it.
- **Navigation Links**:
  - Main Links: `Members`, `Students`, `Home`, `About Us`, `About Branch`, `About ICAI`, `Members Newsletters`, `Seminars / Programs / Events`
  - Hover Transition: Subtle color transition to light gray or gold on hover.

## 7. Footer Structure
- **Columns**: Multicolumn layout including Branch Info, Links, Important Sites, and Contact Us.
- **Footer Links**: `D.NO`, `guntur@icai.org`, `Google Location`, `Contact Us`, `Query`, `Chairman's Message`, `About ICAI`, `Webtel Electrosoft Ltd.`
- **Copyright Area**: ``

## 8. UI Components Inventory
- **Buttons**:
- **Primary Button 1**: Tag: `button`, bg: `transparent`, color: `#000000`, radius: `6px`, padding: `4px 12px`
- **Primary Button 2**: Tag: `a`, bg: `#aec252`, color: `#ffffff`, radius: `2px`, padding: `13px 40px`
- **Primary Button 3**: Tag: `a`, bg: `#aec252`, color: `#ffffff`, radius: `2px`, padding: `13px 40px`

- **Cards/Panels**:
  - Background: `#ffffff` or light tint of primary color.
  - Border-radius: `3px` or `4px` for subtle rounded corners.
  - Shadows: Soft box shadow `0px 2px 5px rgba(0,0,0,0.1)` on elevated content cards.

## 9. Forms Inventory
- **Form 1**: ID: `form2`, Class: ``, Fields: 19
  - Field `RadScriptManager1_TSM` (hidden): placeholder: ""
  - Field `__EVENTTARGET` (hidden): placeholder: ""
  - Field `__EVENTARGUMENT` (hidden): placeholder: ""
  - Field `__VIEWSTATE` (hidden): placeholder: ""
  - Field `__VIEWSTATEGENERATOR` (hidden): placeholder: ""


## 10. Responsive Breakpoints
- **Mobile Devices**: max-width: `767px` - Navigation collapses into a toggle menu; grids stack vertically.
- **Tablets**: min-width: `768px` and max-width: `991px` - Grid shifts to 2-column or 3-column layout.
- **Desktops**: min-width: `992px` - Main navigation expands; full multi-column grid layouts enabled.

## 11. Accessibility Observations
- **Color Contrast**: Main content text has good contrast (black/dark-gray on white background). However, some secondary navigation menus use yellow/green text which may suffer from insufficient contrast.
- **Alt Attributes**: Most images contain descriptive alt text, though decoration images sometimes lack clean alt attributes.
- **Aria Roles**: Navigation elements use standard semantic tag HTML5 structure, which helps assistive readers parse the navigation flow.

## 12. Design Recommendations
1. **Color Standardization**: Standardize the brand color palette across all pages. Ensure secondary colors (like greens/yellows) satisfy WCAG AA contrast requirements.
2. **Typography Scaling**: Enforce a unified typography scale to limit the number of active font sizes and weights.
3. **Responsive Spacing**: Implement a modern CSS grid or Flexbox system with uniform spacing variables (e.g. 4px grid) to ensure consistent layout alignment on mobile devices.
