# Design System: ICAI Pune
**Website URL:** https://www.puneicai.org/

## 1. Executive Summary
The design system of **ICAI Pune** is built around the identity of the Institute of Chartered Accountants of India (ICAI). It features a formal, institutional aesthetic using deep corporate blues combined with accent golds and greens. It is designed to host dense information hierarchies for chartered accountants, students, and the public.

## 2. Brand Colors
- **Primary Color (Corporate Blue)**: `#27277c` - Used for header, navigation background, and core brand components.
- **Secondary Color (Branch Accent)**: `#a8a8a8` - Used for subheadings, active state links, and auxiliary tags.
- **Accent Color (Action/Highlight)**: `#f6f7f9` - Used for important buttons, alerts, notifications, and key calls to action.
- **Background Color**: `#ffffff` - Used as the primary canvas for readability.
- **Body Text Color**: `#333333` - Standard text color for body paragraphs and descriptions.

## 3. Typography Scale
- **H2**: font-family: `Lato, sans-serif`, size: `36px`, weight: `700`, color: `#323232`
- **H3**: font-family: `Lato, sans-serif`, size: `30px`, weight: `700`, color: `#111111`
- **H4**: font-family: `Lato, sans-serif`, size: `24px`, weight: `700`, color: `#ffffff`
- **H5**: font-family: `Lato, sans-serif`, size: `18px`, weight: `700`, color: `#111111`
- **H6**: font-family: `Lato, sans-serif`, size: `16px`, weight: `400`, color: `#111111`
- **P**: font-family: `Lato, sans-serif`, size: `17px`, weight: `400`, color: `#343131`
- **A**: font-family: `Lato, sans-serif`, size: `16px`, weight: `400`, color: `#007bff`


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
  - Main Links: `Home`, `About Pune Branch`, `Members`, `Pune Member's Newsletter`, `Members Noticeboard`, `ICAI Members Section`, `Members Query Contact`, `Students`
  - Hover Transition: Subtle color transition to light gray or gold on hover.

## 7. Footer Structure
- **Columns**: Multicolumn layout including Branch Info, Links, Important Sites, and Contact Us.
- **Footer Links**: `The Institute Of Chartered Accountants Of India`, `Pune Branch of WIRC of ICAI
                                    ICAI Bhawan, Plot No. 8,
                                    Near Mahavir Electronics,
                                    Parshwanath Nagar, Bibwewadi,
                                    Pune - 411 037, Maharashtra, India.`, `Check CPE Hours`, `Post Qualification Courses`, `Notice Board`, `Members FAQ's`, `WICASA`, `WICASA Managing
                                        Committee`, `ICITSS`, `Student Noticeboard`
- **Copyright Area**: ``

## 8. UI Components Inventory
- **Buttons**:
- **Primary Button 1**: Tag: `button`, bg: `#6c757d`, color: `#ffffff`, radius: `4px`, padding: `6px 12px`
- **Primary Button 2**: Tag: `button`, bg: `#6c757d`, color: `#ffffff`, radius: `4px`, padding: `6px 12px`
- **Primary Button 3**: Tag: `button`, bg: `#6c757d`, color: `#ffffff`, radius: `4px`, padding: `6px 12px`
- **Primary Button 4**: Tag: `button`, bg: `#010165`, color: `#ffffff`, radius: `4px`, padding: `6px 12px`
- **Primary Button 5**: Tag: `button`, bg: `#010165`, color: `#ffffff`, radius: `4px`, padding: `6px 12px`
- **Primary Button 6**: Tag: `button`, bg: `#010165`, color: `#ffffff`, radius: `4px`, padding: `6px 12px`
- **Primary Button 7**: Tag: `button`, bg: `#010165`, color: `#ffffff`, radius: `4px`, padding: `6px 12px`
- **Primary Button 8**: Tag: `button`, bg: `#010165`, color: `#ffffff`, radius: `4px`, padding: `6px 12px`
- **Primary Button 9**: Tag: `button`, bg: `#010165`, color: `#ffffff`, radius: `4px`, padding: `6px 12px`
- **Primary Button 10**: Tag: `button`, bg: `#010165`, color: `#ffffff`, radius: `4px`, padding: `6px 12px`

- **Cards/Panels**:
  - Background: `#ffffff` or light tint of primary color.
  - Border-radius: `3px` or `4px` for subtle rounded corners.
  - Shadows: Soft box shadow `0px 2px 5px rgba(0,0,0,0.1)` on elevated content cards.

## 9. Forms Inventory
- **Form 1**: ID: ``, Class: `search-model-form`, Fields: 1
  - Field `` (text): placeholder: "Search here....."


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
