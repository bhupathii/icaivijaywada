---
name: ICAI Ahmedabad
url: https://icaiahmedabad.com/
colors:
  primary: '#27277c'
  secondary: '#d7e982'
  accent: '#ff9c00'
  background: '#ffffff'
  background-dark: '#000000'
  surface: '#e0e0e0'
  text-primary: '#373737'
  text-inverse: '#ffffff'
  text-secondary: '#95aa32'
  text-accent-dark: '#15156d'
  text-link-hover: '#23527c'
  text-footer-hover: '#bebebe'
  button-primary-hover: '#e68a00'
  button-info-hover: '#31b0d5'
  input-disabled-bg: '#eeeeee'
  border: '#e0e0e0'
  shadow-color: '#d7d7d7'
typography:
  display:
    family: 'Oswald'
    size: 28px
    weight: 400
    line-height: 1.2
  heading-lg:
    family: 'Oswald'
    size: 25px
    weight: 400
    line-height: 1.2
  heading-md:
    family: 'Oswald'
    size: 19px
    weight: 400
    line-height: 1.2
  heading-sm:
    family: 'Oswald'
    size: 18px
    weight: 400
    line-height: 1.2
  body:
    family: 'Helvetica Neue'
    size: 14px
    weight: 400
    line-height: 1.5
  caption:
    family: 'Helvetica Neue'
    size: 12px
    weight: 400
    line-height: 1.5
  button-text:
    family: 'Helvetica Neue'
    size: 10px
    weight: 600
    line-height: 1.2
spacing:
  base: 4px
  scale: [0, 4, 8, 12, 16, 20, 24, 32, 40, 48, 80]
radius:
  sm: 2px
  md: 3px
elevation:
  card: '0px 2px 5px 0px rgba(215, 215, 215, 1)'
  z-index-1: 1
  z-index-2: 2
  z-index-nav: 10
  z-index-slider: 20
  z-index-loader: 999999
motion:
  duration-fast: '0.15s'
  duration-base: '0.2s'
  duration-slow: '0.6s'
  easing-linear: 'linear'
  easing-standard: 'ease-in-out'
  easing-decelerate: 'ease-out'
components:
  button-primary:
    bg: '{colors.accent}'
    text: '{colors.text-inverse}'
    radius: '{radius.sm}'
    padding: '8px 13px'
    font-weight: 600
    font-size: 10px
  card:
    bg: '{colors.background}'
    radius: '{radius.md}'
    shadow: '{elevation.card}'
---

# Design System Inspired by ICAI Ahmedabad

## 1. Visual Theme & Atmosphere
The ICAI Ahmedabad design system projects a formal and institutional aesthetic, grounded in a deep blue (`#27277c`) and a contrasting light green (`#d7e982`). The primary call-to-action color, a bright orange (`#ff9c00`), provides clear visual cues against the otherwise muted palette. Typography relies on the structured `Oswald` font for headings, such as the "Chairman's Message" at 28px, and the highly legible `Helvetica Neue` for body content, typically at 14px, ensuring clarity across informational sections. The layout is clean and grid-based, utilizing ample `40px` and `80px` vertical spacing to delineate content blocks.

The visual experience is enhanced by subtle CSS animations and transitions, such as the `transform: scale(1.1)` on hover for interactive info boxes, and `0.2s ease-in-out` transitions on image thumbnails, adding a touch of interactivity without being distracting. The use of FontAwesome icons provides visual shorthand, while card elements feature a soft `0px 2px 5px 0px rgba(215, 215, 215, 1)` shadow for subtle depth.

**Key Characteristics**
-   **Primary Blue**: `#27277c` for branding, navigation, and links.
-   **Accent Green**: `#d7e982` for background highlights and event categories.
-   **CTA Orange**: `#ff9c00` for clear, actionable buttons.
-   **Structured Type**: `Oswald` for headings, `Helvetica Neue` for body text.
-   **Subtle Depth**: `rgb(215, 215, 215) 0px 2px 5px` shadow on cards.
-   **Ample Whitespace**: Generous `40px` and `80px` section padding.
-   **Micro-interactions**: `scale(1.1)` transform on interactive elements.

## 2. Color Palette & Roles

-   **Primary**
    -   `primary`: `#27277c` (Deep Blue) — Dominant brand color, used for the top navigation bar, main headings, and primary links. It conveys professionalism and stability.
    -   `secondary`: `#d7e982` (Light Green) — Used as a background accent for event listings and secondary content blocks, providing a fresh contrast to the deep blue.
    -   `accent`: `#ff9c00` (Orange) — Employed for critical call-to-action buttons and interactive elements to draw immediate attention.

-   **Interactive**
    -   `button-primary-hover`: `#e68a00` (Darker Orange) — The hover state for primary action buttons, providing visual feedback (inferred from screenshot).
    -   `button-info-hover`: `#31b0d5` (Light Blue) — Used for specific informational buttons, indicating interactivity.
    -   `text-link-hover`: `#23527c` (Blue) — The hover state for standard text links, a slightly darker shade of the primary blue.
    -   `text-footer-hover`: `#bebebe` (Light Gray) — Used for links within the footer, offering a subtle highlight.

-   **Neutral Scale**
    -   `background`: `#ffffff` (White) — The predominant background color for the main content area, ensuring high readability.
    -   `background-dark`: `#000000` (Black) — Used as the background for the footer section, providing a strong visual anchor.
    -   `surface`: `#e0e0e0` (Light Gray) — Utilized for subtle dividers, borders, and as the base color for card shadows.
    -   `text-primary`: `#373737` (Dark Gray) — The primary color for body text, offering excellent contrast on white backgrounds.
    -   `text-inverse`: `#ffffff` (White) — Used for text placed on dark backgrounds, such as the primary blue navigation or the black footer.
    -   `text-secondary`: `#95aa32` (Muted Green) — Applied to secondary links and less prominent textual information, like event details or meta-information.
    -   `text-accent-dark`: `#15156d` (Darker Blue) — Used for text that needs to stand out on the light green accent background, maintaining readability.
    -   `input-disabled-bg`: `#eeeeee` (Light Gray) — The background color for disabled input fields.

## 3. Typography Rules

-   **Font Family**:
    -   Primary Headings: `'Oswald', sans-serif`
    -   Body Text: `'Helvetica Neue', Helvetica, Arial, sans-serif`
    -   Monospace for Code: `'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, Courier, monospace` (inferred)
    -   Icons: `'FontAwesome'`

-   **Hierarchy**:
    -   **Display/H1**: `Oswald` `28px` `400` · line-height `1.2` · tracking `none` · Used for prominent page titles and main section headers.
    -   **H2**: `Oswald` `25px` `400` · line-height `1.2` · tracking `none` · Applied to secondary section titles, such as "Upcoming Events".
    -   **H3**: `Oswald` `19px` `400` · line-height `1.2` · tracking `none` · Used for sub-sections or important callouts.
    -   **H4**: `Oswald` `18px` `400` · line-height `1.2` · tracking `none` · Used for smaller sub-headings or prominent links.
    -   **Body**: `Helvetica Neue` `14px` `400` · line-height `1.5` · tracking `none` · Standard text for paragraphs and descriptive content.
    -   **Caption**: `Helvetica Neue` `12px` `400` · line-height `1.5` · tracking `none` · Used for meta-information, dates, and small descriptive text.
    -   **Button Text**: `Helvetica Neue` `10px` `600` · line-height `1.2` · tracking `none` · Specific styling for call-to-action buttons.
    -   **Code/Mono**: `SFMono-Regular` `14px` `400` · line-height `1.5` · tracking `none` · For displaying code snippets or technical data (inferred).

-   **Principles**
    -   Headings use the `Oswald` font to establish a clear, institutional tone, always set at a `400` weight.
    -   Body text relies on `Helvetica Neue` at `14px` for optimal readability and a neutral, professional feel.
    -   A strong visual hierarchy is maintained by distinct font sizes and consistent line heights (`1.2` for headings, `1.5` for body).
    -   Key interactive elements like buttons use `Helvetica Neue` at `10px` with a `600` weight for emphasis and clarity.
    -   Contrast is prioritized, ensuring `text-primary` (`#373737`) on `background` (`#ffffff`) achieves AAA accessibility.

## 4. Component Stylings

### Buttons

**Primary Button**
A bold, orange button for primary calls to action, providing clear visual prominence. On hover, the background darkens slightly, and on activation, an inner shadow indicates interaction. Disabled buttons appear desaturated and non-interactive.

```css
.button-primary {
  background-color: var(--colors-accent, #ff9c00);
  color: var(--colors-text-inverse, #ffffff);
  font-family: var(--typography-button-text-family, 'Helvetica Neue');
  font-size: var(--typography-button-text-size, 10px);
  font-weight: var(--typography-button-text-weight, 600);
  padding: 8px 13px;
  border: none;
  border-radius: var(--radius-sm, 2px);
  cursor: pointer;
  transition: background-color var(--motion-duration-base, 0.2s) var(--motion-easing-standard, ease-in-out);
}

.button-primary:hover {
  background-color: var(--colors-button-primary-hover, #e68a00); /* inferred from screenshot */
}

.button-primary:active {
  background-color: var(--colors-button-primary-hover, #e68a00); /* inferred from screenshot */
  box-shadow: rgba(0, 0, 0, 0.125) 0px 3px 5px inset;
}

.button-primary:disabled {
  opacity: 0.65;
  cursor: not-allowed;
  box-shadow: none;
}
```

**Secondary Button**
(None explicitly observed in source. Omitted.)

**Ghost Button**
(None explicitly observed in source. Omitted.)

### Cards & Containers

**Standard Card**
White background cards with a subtle light gray shadow, used for content grouping like event listings or messages. On hover, cards subtly scale up, indicating interactivity.

```css
.card {
  background-color: var(--colors-background, #ffffff);
  border: 1px solid var(--colors-surface, #e0e0e0); /* inferred from screenshot */
  border-radius: var(--radius-md, 3px);
  box-shadow: var(--elevation-card, 0px 2px 5px 0px rgba(215, 215, 215, 1));
  padding: 20px; /* inferred from screenshot */
  transition: transform var(--motion-duration-base, 0.2s) var(--motion-easing-standard, ease-in-out);
}

.card:hover {
  transform: scale(1.02); /* inferred from .info-box:hover transform */
  box-shadow: 0px 4px 8px 0px rgba(215, 215, 215, 0.75); /* inferred from screenshot */
}
```

### Inputs & Forms

**Text Input**
Standard text input fields with a light gray border. Focus state is indicated by a subtle box shadow, and disabled inputs have a light gray background.

```css
.input-text {
  background-color: var(--colors-background, #ffffff);
  color: var(--colors-text-primary, #373737);
  font-family: var(--typography-body-family, 'Helvetica Neue');
  font-size: var(--typography-body-size, 14px);
  font-weight: var(--typography-body-weight, 400);
  padding: 8px 12px; /* inferred from screenshot */
  border: 1px solid var(--colors-surface, #e0e0e0);
  border-radius: var(--radius-sm, 2px);
  transition: border-color var(--motion-duration-fast, 0.15s) var(--motion-easing-standard, ease-in-out),
              box-shadow var(--motion-duration-fast, 0.15s) var(--motion-easing-standard, ease-in-out);
}

.input-text:focus {
  border-color: var(--colors-primary, #27277c); /* inferred from screenshot */
  box-shadow: var(--colors-shadow-color, #d7d7d7) 0px 1px 2px;
  outline: none;
}

.input-text:disabled {
  background-color: var(--colors-input-disabled-bg, #eeeeee);
  opacity: 1;
  cursor: not-allowed;
}
```

**Form Label**
Labels for form fields, using the primary text color and body font size.

```css
.form-label {
  color: var(--colors-text-primary, #373737);
  font-family: var(--typography-body-family, 'Helvetica Neue');
  font-size: var(--typography-body-size, 14px);
  font-weight: var(--typography-body-weight, 400);
  display: block;
  margin-bottom: var(--spacing-4, 4px); /* inferred from screenshot */
}
```

**Checkbox/Radio**
(None observed in source. Omitted.)

### Navigation

**Top Navigation Bar**
A prominent deep blue bar at the top of the page, containing navigation links and contact information.

```css
.nav-top-bar {
  background-color: var(--colors-primary, #27277c);
  color: var(--colors-text-inverse, #ffffff);
  padding: 16px 0; /* inferred from screenshot */
  z-index: var(--elevation-z-index-nav, 10);
  width: 100%;
}
```

**Navigation Link**
White text links within the primary navigation bar. On hover, the text color shifts to a light gray.

```css
.nav-link {
  color: var(--colors-text-inverse, #ffffff);
  font-family: var(--typography-body-family, 'Helvetica Neue');
  font-size: var(--typography-body-size, 14px);
  font-weight: var(--typography-body-weight, 400);
  text-decoration: none;
  padding: 10px 15px; /* inferred from screenshot */
  transition: color var(--motion-duration-fast, 0.15s) var(--motion-easing-linear, linear);
  display: inline-block;
}

.nav-link:hover {
  color: var(--colors-text-footer-hover, #bebebe);
}

.nav-link.active,
.nav-link[aria-current="page"] {
  color: var(--colors-secondary, #d7e982); /* inferred from screenshot */
  font-weight: var(--typography-body-weight, 700); /* inferred from screenshot */
}
```

**Dropdown Menu**
(None explicitly observed in source. Omitted.)

### Links

**Standard Link**
Links primarily use the brand's deep blue color. On hover, they darken slightly, indicating interactivity.

```css
.link-standard {
  color: var(--colors-primary, #27277c);
  text-decoration: none; /* inferred from screenshot */
  transition: color var(--motion-duration-fast, 0.15s) var(--motion-easing-linear, linear);
}

.link-standard:hover {
  color: var(--colors-text-link-hover, #23527c);
  text-decoration: underline; /* inferred from screenshot */
}

.link-standard:visited {
  color: var(--colors-primary, #27277c); /* inferred from screenshot */
}
```

**Secondary Link**
Used for less prominent actions, such as "Readmore..." links, utilizing a muted green color.

```css
.link-secondary {
  color: var(--colors-text-secondary, #95aa32);
  font-family: var(--typography-body-family, 'Helvetica Neue');
  font-size: var(--typography-body-size, 14px);
  font-weight: var(--typography-body-weight, 400);
  text-decoration: none; /* inferred from screenshot */
  transition: color var(--motion-duration-fast, 0.15s) var(--motion-easing-linear, linear);
}

.link-secondary:hover {
  color: var(--colors-text-accent-dark, #15156d); /* inferred from screenshot */
  text-decoration: underline; /* inferred from screenshot */
}

.link-secondary:visited {
  color: var(--colors-text-secondary, #95aa32); /* inferred from screenshot */
}
```

### Badges
(None observed in source.)

## 5. Layout Principles

-   **Spacing System**:
    Base unit `4px` → Scale: `0, 4, 8, 12, 16, 20, 24, 32, 40, 48, 80`
    -   `4px`: Smallest element spacing, e.g., between icon and text.
    -   `8px`: Standard internal padding for buttons and input fields.
    -   `12px`: Spacing between form elements or list items.
    -   `16px`: Vertical padding for navigation bar, minor section breaks.
    -   `20px`: Padding within cards or component groups.
    -   `24px`: Spacing between distinct content blocks.
    -   `32px`: Vertical margin for major content sections.
    -   `40px`: Standard vertical section padding, often for hero sections.
    -   `48px`: Larger vertical separation for distinct content areas.
    -   `80px`: Significant vertical spacing for page divisions or hero top/bottom padding.

-   **Grid & Container**
    _Note: container widths and column counts are not extracted from the source. The values below are reasonable defaults inferred from the visible layout density._
    -   Max Width: `1200px` (inferred from screenshot)
    -   Columns: `12` (inferred from common web practices)
    -   Gutter: `24px` (inferred from common web practices)
    -   Section Padding: `40px 0` (inferred from screenshot)

-   **Whitespace Philosophy**:
    The design system employs generous whitespace to create a clean, uncluttered interface that enhances readability and content separation. Ample vertical spacing, particularly `40px` and `80px`, is used between major sections to provide clear visual breaks, while smaller units like `8px` and `12px` ensure internal elements within components are well-aligned and easy to scan. This approach contributes to a professional and organized presentation of information.

-   **Border Radius Scale**:
    -   `sm`: `2px` — Applied to interactive elements such as buttons and input fields for a subtle softening of edges.
    -   `md`: `3px` — Used for larger containers like cards and image thumbnails, providing a slightly more rounded appearance.

## 6. Depth & Elevation

-   **Flat (z-0)**: `none` — Used for static background elements and default text.
-   **Card (z-1)**: `0px 2px 5px 0px rgba(215, 215, 215, 1)` — Applied to content cards and information boxes for a subtle lift from the background.
-   **Interactive (z-2)**: `none` — Used for interactive elements like buttons when in a default state, providing a slight stacking context.
-   **Navbar (z-10)**: `none` — The main navigation bar maintains a higher stacking order to remain visible at the top of the viewport.
-   **Slider (z-20)**: `none` — Elements within the main hero slider are positioned above general content.
-   **Loader (z-999999)**: `none` — Overlays and loading indicators are placed at the highest z-index to ensure visibility above all other content.

**Shadow Philosophy**
The system uses shadows sparingly and subtly, primarily for `card` elements, providing a gentle `0px 2px 5px 0px rgba(215, 215, 215, 1)` lift. Elevation is more often managed through z-index values to control stacking context for navigation, sliders, and loaders, rather than relying on complex shadow effects for depth.

## 7. Do's and Don'ts

### Do's
-   Always use `Oswald` `28px` `400` for main section titles like "Chairman's Message".
-   Ensure body text `#373737` is always on a light background like `#ffffff` for AAA contrast (ratio 11.9).
-   Utilize `#ff9c00` exclusively for Primary Buttons to highlight key calls to action.
-   Apply `0px 2px 5px 0px rgba(215, 215, 215, 1)` shadow only to Cards and similar elevated content containers.
-   Maintain `2px` border-radius for interactive elements such as Buttons and Input fields.
-   Use `Helvetica Neue` `14px` `400` for all standard paragraph text for optimal readability.
-   Provide `16px` vertical padding for the top navigation bar using `colors.primary` (`#27277c`).
-   Allow interactive cards to `scale(1.02)` on hover, indicating an actionable element.
-   Use `#27277c` for standard links, transitioning to `#23527c` on hover.

### Don'ts
-   Never place `#ffffff` text on `#aec252` backgrounds; the 1.97 ratio fails WCAG AA.
-   Avoid using `#d7e982` as a primary call-to-action color, as it lacks sufficient contrast for buttons.
-   Do not introduce custom spacing values; adhere strictly to the `4, 8, 12, 16, 20, 24, 32, 40, 48, 80px` scale.
-   Do not use `Oswald` for body text; reserve it for headings to maintain typographic hierarchy.
-   Avoid applying shadows to elements other than cards, to preserve a clean and flat aesthetic.
-   Do not use `10px` font size for anything other than button text (`Helvetica Neue` `600`).
-   Never use `#95aa32` for primary text; it is reserved for secondary links.
-   Do not use `1px` border-radius; use `2px` for interactive elements or `3px` for cards.

## 8. Responsive Behavior
_Note: breakpoints below are measured from the source CSS. These values should be directly applied._

-   **Breakpoints**:
    -   **Mobile Small** (~767px): Content stacks vertically, navigation collapses into a hamburger menu (inferred).
    -   **Tablet** (~768px to 991px): Layout shifts to 2-column or 3-column grids, navigation expands partially.
    -   **Desktop** (~992px to 1199px): Full desktop layout with multi-column grids, navigation fully visible.
    -   **Desktop Large** (~1200px+): Optimized for larger screens, potentially with wider content areas.

-   **Touch Targets**:
    -   Interactive elements like buttons and links should have a minimum touch target size of `44px` by `44px` (inferred from best practices).
    -   Ensure a minimum `12px` clear space around touch targets to prevent accidental taps (inferred from best practices).

-   **Collapsing Strategy**:
    -   **Navigation**: The main navigation links collapse into a mobile-friendly menu below `767px`.
    -   **Cards**: Multi-column card layouts transition to single-column stacking on screens below `768px`.
    -   **Typography**: Heading sizes may scale down on smaller viewports to prevent overflow and improve readability (e.g., `Oswald` `28px` to `20px` on mobile, inferred).
    -   **Padding**: Horizontal padding on sections and containers may reduce from `40px` to `20px` on mobile (inferred).
    -   **Forms**: Form inputs maintain their height but may expand to `100%` width on mobile devices.
    -   **Spacing**: Larger spacing units like `80px` might reduce to `40px` or `32px` on mobile to conserve vertical space (inferred).

## 9. Agent Prompt Guide

-   **Quick Color Reference**
    -   `primary`: `#27277c`
    -   `secondary`: `#d7e982`
    -   `accent`: `#ff9c00`
    -   `background`: `#ffffff`
    -   `background-dark`: `#000000`
    -   `surface`: `#e0e0e0`
    -   `text-primary`: `#373737`
    -   `text-inverse`: `#ffffff`
    -   `text-secondary`: `#95aa32`
    -   `text-accent-dark`: `#15156d`
    -   `text-link-hover`: `#23527c`
    -   `text-footer-hover`: `#bebebe`
    -   `button-primary-hover`: `#e68a00`
    -   `button-info-hover`: `#31b0d5`
    -   `input-disabled-bg`: `#eeeeee`
    -   `border`: `#e0e0e0`
    -   `shadow-color`: `#d7d7d7`

-   **Iteration Guide**:
    1.  Always use `#ff9c00` for primary call-to-action buttons, with `#e68a00` on hover.
    2.  Ensure primary body text is `#373737` on `#ffffff` for AAA contrast.
    3.  Set all main headings in `Oswald` `400` weight, with sizes from `28px` down to `18px`.
    4.  Apply `Helvetica Neue` `14px` `400` for all standard paragraph content.
    5.  Utilize the `4px` spacing base with `[0, 4, 8, 12, 16, 20, 24, 32, 40, 48, 80]` scale for all layout and component spacing.
    6.  Use `2px` border-radius for interactive elements and `3px` for cards.
    7.  Standard cards should have a `0px 2px 5px 0px rgba(215, 215, 215, 1)` shadow and `scale(1.02)` on hover.
    8.  Input fields must include a `#d7d7d7 0px 1px 2px` box-shadow on `:focus` and `#eeeeee` background when `:disabled`.
    9.  Navigation links in the top bar (`#27277c`) should be `#ffffff` and turn `#bebebe` on hover.
    10. Implement transitions with `0.15s` or `0.2s` duration and `ease-in-out` easing for all interactive state changes.
    11. Design responsive layouts to adapt at `767px`, `991px`, and `1199px` breakpoints.
    12. Avoid placing white text on `#aec252` as it fails WCAG AA contrast (ratio 1.97).