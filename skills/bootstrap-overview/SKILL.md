---
name: bootstrap-overview
description: This skill should be used when the user asks about Bootstrap 5 getting started, Bootstrap installation, Bootstrap CDN setup, Bootstrap npm installation, Bootstrap project setup, Bootstrap starter template, Bootstrap browser support, Bootstrap version compatibility, Bootstrap RTL support, Bootstrap Vite setup, Bootstrap Parcel setup, Bootstrap Webpack setup, Bootstrap accessibility, Bootstrap WCAG compliance, Bootstrap screen reader support, Bootstrap visually-hidden class, Bootstrap reduced motion, Bootstrap RFS, Bootstrap responsive font sizes, Bootstrap fluid typography, or needs help setting up a new Bootstrap project.
---

# Bootstrap 5.3 Overview

Bootstrap 5.3.8 is a powerful front-end framework for building responsive, mobile-first websites. This skill covers installation, project setup, and foundational concepts.

## Quick Start Options

### CDN (Fastest Setup)

For prototyping or simple projects, use CDN links. Include CSS in `<head>` and JS before closing `</body>`:

```html
<!-- CSS -->
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-sRIl4kxILFvY47J16cr9ZwB07vP4J8+LH7qKQnuqkuIAvNWLzeN8tE5YBujZqJLB" crossorigin="anonymous">

<!-- JavaScript Bundle with Popper -->
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/js/bootstrap.bundle.min.js" integrity="sha384-FKyoEForCGlyvwx9Hj09JcYn3nv7wiPVlz7YYwJrWVcXK/BmnVDxM+D2scQbITxI" crossorigin="anonymous"></script>
```

Always use `bootstrap.bundle.min.js` (includes Popper.js) unless separately managing Popper.

### Package Manager Installation

**npm:**
```bash
npm install bootstrap@5.3.8
```

**yarn:**
```bash
yarn add bootstrap@5.3.8
```

**pnpm:**
```bash
pnpm add bootstrap@5.3.8
```

After installation, import in JavaScript:
```javascript
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
// Or import specific components
import { Modal, Tooltip } from 'bootstrap';
```

## Starter Template

Every Bootstrap page requires this minimal structure:

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Bootstrap Demo</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-sRIl4kxILFvY47J16cr9ZwB07vP4J8+LH7qKQnuqkuIAvNWLzeN8tE5YBujZqJLB" crossorigin="anonymous">
  </head>
  <body>
    <h1>Hello, Bootstrap!</h1>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/js/bootstrap.bundle.min.js" integrity="sha384-FKyoEForCGlyvwx9Hj09JcYn3nv7wiPVlz7YYwJrWVcXK/BmnVDxM+D2scQbITxI" crossorigin="anonymous"></script>
  </body>
</html>
```

**Critical requirements:**
- `<!doctype html>` declaration for proper rendering
- Responsive viewport meta tag with `width=device-width, initial-scale=1`
- CSS loaded in `<head>`, JavaScript before `</body>`

## Build Tool Integration

For production applications, integrate Bootstrap with build tools for tree-shaking and optimization.

### Vite Setup

```bash
npm create vite@latest my-project -- --template vanilla
cd my-project
npm install bootstrap @popperjs/core
npm install -D sass
```

Import in main.js:
```javascript
import './scss/styles.scss';
import * as bootstrap from 'bootstrap';
```

Create `src/scss/styles.scss`:
```scss
// Import Bootstrap
@import "bootstrap/scss/bootstrap";
```

### Parcel Setup

```bash
mkdir my-project && cd my-project
npm init -y
npm install bootstrap @popperjs/core
npm install -D parcel sass
```

### Webpack Setup

See `references/build-tools.md` for complete Webpack configuration.

## JavaScript Components

Bootstrap 5 components can be initialized two ways:

### Data Attributes (No JavaScript Required)

```html
<button type="button" class="btn btn-primary"
        data-bs-toggle="modal" data-bs-target="#myModal">
  Open Modal
</button>
```

### Programmatic Initialization

```javascript
// Get element
const myModal = document.getElementById('myModal');

// Create instance
const modal = new bootstrap.Modal(myModal, {
  keyboard: false,
  backdrop: 'static'
});

// Use methods
modal.show();
modal.hide();
modal.toggle();
modal.dispose();
```

### Component Methods Pattern

All components follow consistent patterns:
- `getInstance()` - Get existing instance
- `getOrCreateInstance()` - Get or create instance
- `dispose()` - Destroy instance and clean up
- Component-specific methods (show, hide, toggle, etc.)

### JavaScript Events

Bootstrap components emit custom events at key moments in their lifecycle:

```javascript
const myModal = document.getElementById('myModal');

// Listen for show event (before animation starts)
myModal.addEventListener('show.bs.modal', event => {
  // Prevent modal from opening if needed
  if (someCondition) {
    event.preventDefault();
  }
});

// Listen for shown event (after animation completes)
myModal.addEventListener('shown.bs.modal', event => {
  // Focus an input or perform other actions
  document.getElementById('myInput').focus();
});
```

Events follow consistent naming: `{action}.bs.{component}` for before transitions and `{action}ed.bs.{component}` for after. Common pairs include `show`/`shown`, `hide`/`hidden`, `slide`/`slid`.

## Accessibility

Bootstrap provides accessible components out of the box, but proper implementation remains the developer's responsibility. Understanding Bootstrap's accessibility features ensures WCAG 2.2 compliance.

### Key Accessibility Features

**Visually Hidden Content:**

Use `.visually-hidden` to hide content visually while keeping it accessible to screen readers:

```html
<p class="text-danger">
  <span class="visually-hidden">Error: </span>
  This field is required
</p>
```

Use `.visually-hidden-focusable` for skip links that appear on keyboard focus:

```html
<a class="visually-hidden-focusable" href="#main-content">
  Skip to main content
</a>
```

**Color Contrast Considerations:**

Bootstrap's default colors may not meet WCAG contrast requirements in all contexts:
- Text requires 4.5:1 contrast ratio (WCAG AA)
- Large text (18pt+) requires 3:1 ratio
- Non-text elements (icons, borders) require 3:1 ratio

Always test color combinations. The default `.text-muted` on light backgrounds may need adjustment for compliance.

**Reduced Motion Support:**

Bootstrap respects the `prefers-reduced-motion` media query:

```css
@media (prefers-reduced-motion: reduce) {
  /* Transitions and animations are disabled or minimized */
}
```

Components like carousels, modals, and collapse automatically reduce or disable animations for users who prefer reduced motion.

### ARIA Implementation

Interactive components include appropriate ARIA attributes:

```html
<!-- Accordion with ARIA -->
<div class="accordion-item">
  <h2 class="accordion-header">
    <button class="accordion-button" type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseOne"
            aria-expanded="true"
            aria-controls="collapseOne">
      Section Title
    </button>
  </h2>
  <div id="collapseOne" class="accordion-collapse collapse show"
       aria-labelledby="headingOne">
    <div class="accordion-body">Content here</div>
  </div>
</div>
```

Bootstrap handles `aria-expanded`, `aria-controls`, and `aria-hidden` automatically for JavaScript-powered components.

### Focus Management

Bootstrap manages focus appropriately for interactive components:
- Modals trap focus within the dialog
- Dropdowns return focus when closed
- Tooltips and popovers are keyboard accessible

For custom implementations, use Bootstrap's focus trap utilities or manage focus manually.

## RFS (Responsive Font Sizes)

RFS is Bootstrap's responsive scaling engine that automatically adjusts font sizes, margins, padding, and other properties based on viewport dimensions.

### How RFS Works

RFS generates `calc()` functions combining `rem` units with viewport width (`vw`) for fluid scaling:

```scss
// Input
.title {
  @include font-size(4rem);
}

// Output
.title {
  font-size: calc(1.525rem + 3.3vw);
}
@media (min-width: 1200px) {
  .title {
    font-size: 4rem;
  }
}
```

Properties scale smoothly between minimum and maximum viewport sizes, then lock at the specified value for larger screens.

### Using RFS Mixins

**Font sizes:**
```scss
.heading {
  @include font-size(2.5rem);
}
```

**Other properties:**
```scss
.card {
  @include padding(2rem);
  @include margin(1.5rem);
  @include rfs(1rem, border-radius);
}
```

### RFS Functions

For properties within media queries or complex calculations:

```scss
.responsive-element {
  @include media-breakpoint-down(lg) {
    padding: rfs-fluid-value(2rem);
    font-size: rfs-fluid-value(1.125rem);
  }
}
```

### Configuration

RFS behavior is controlled via Sass variables:

```scss
$rfs-base-value: 1.25rem;        // Minimum font size
$rfs-unit: rem;                   // Output unit
$rfs-breakpoint: 1200px;          // Max viewport for scaling
$rfs-factor: 10;                  // Scaling intensity
```

Lower `$rfs-factor` values create more dramatic scaling; higher values reduce the effect.

## RTL (Right-to-Left) Support

Bootstrap 5 includes RTL support. To enable:

1. Set `dir="rtl"` on `<html>` element
2. Use RTL stylesheet:

```html
<html lang="ar" dir="rtl">
  <head>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.rtl.min.css" rel="stylesheet" integrity="sha384-CfCrinSRH2IR6a4e6fy2q6ioOX7O6Mtm1L9vRvFZ1trBncWmMePhzvafv7oIcWiW" crossorigin="anonymous">
  </head>
</html>
```

Logical properties (`start`/`end`) replace directional ones (`left`/`right`).

## Browser Support

Bootstrap 5.3 supports modern browsers only:

| Browser | Support Level |
|---------|---------------|
| Chrome | Latest 2 versions |
| Firefox | Latest 2 versions |
| Safari | Latest 2 versions |
| Edge | Latest 2 versions |
| iOS Safari | Latest 2 versions |
| Android Chrome | Latest 2 versions |

**Not supported:** Internet Explorer (any version). Bootstrap 5 dropped IE support entirely, enabling modern CSS features like CSS custom properties, flexbox, and grid without fallbacks.

### Mobile Considerations

Bootstrap is designed mobile-first. All components are touch-friendly with appropriate tap targets (minimum 44x44 pixels for interactive elements). Test on actual devices, as browser DevTools cannot fully simulate touch interactions, scroll behavior, or performance characteristics.

## CSS Variables

Bootstrap 5.3 uses CSS custom properties extensively:

```css
:root {
  --bs-blue: #0d6efd;
  --bs-primary: #0d6efd;
  --bs-body-font-family: system-ui, -apple-system, sans-serif;
  --bs-body-font-size: 1rem;
  --bs-body-line-height: 1.5;
}
```

Override at root level or component level:
```css
.my-component {
  --bs-primary: #custom-color;
}
```

## Dependencies

Bootstrap 5.3 JavaScript requires:
- **Popper.js** (included in `bootstrap.bundle.js`) - Required for dropdowns, popovers, tooltips, and any component with positioning
- No jQuery dependency (removed in Bootstrap 5)

Choose the right bundle:
- `bootstrap.bundle.js` - Includes Popper.js (recommended for most projects)
- `bootstrap.js` - Without Popper.js (use when managing Popper separately or not using positioned components)

## File Structure

When installed via npm:
```
node_modules/bootstrap/
├── dist/
│   ├── css/
│   │   ├── bootstrap.css
│   │   ├── bootstrap.min.css
│   │   ├── bootstrap.rtl.css
│   │   └── bootstrap.rtl.min.css
│   └── js/
│       ├── bootstrap.js
│       ├── bootstrap.min.js
│       ├── bootstrap.bundle.js
│       └── bootstrap.bundle.min.js
└── scss/
    ├── bootstrap.scss
    ├── _variables.scss
    └── ...
```

## Key Concepts

### Mobile-First

Bootstrap is built mobile-first. Base styles target mobile devices, with responsive enhancements applied via media queries at larger breakpoints. This approach means:
- Start with mobile layout, add complexity for larger screens
- Use `min-width` media queries (styles apply at breakpoint and up)
- Avoid `max-width` queries unless specifically targeting smaller screens

### Breakpoints

Default responsive breakpoints:
- `xs`: <576px (default, no infix)
- `sm`: ≥576px
- `md`: ≥768px
- `lg`: ≥992px
- `xl`: ≥1200px
- `xxl`: ≥1400px

### Container System

Three container types:
- `.container` - Fixed-width, responsive (changes width at each breakpoint)
- `.container-fluid` - Full-width always (100% at all breakpoints)
- `.container-{breakpoint}` - Full-width until breakpoint, then fixed-width

```html
<div class="container">Fixed-width responsive</div>
<div class="container-fluid">Always 100% width</div>
<div class="container-lg">100% until lg, then fixed</div>
```

Containers provide horizontal padding (`--bs-gutter-x: 1.5rem` by default) and center content within the viewport.

## Additional Resources

For detailed build tool configurations, see:
- `references/build-tools.md` - Complete Vite, Parcel, and Webpack setup guides
- `references/javascript-api.md` - Full JavaScript component API reference

For starter templates, see:
- `examples/starter-template.html` - Basic HTML starter
- `examples/vite-setup.md` - Vite project structure
