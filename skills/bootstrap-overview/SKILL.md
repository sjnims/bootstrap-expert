---
name: bootstrap-overview
description: This skill should be used when the user asks about Bootstrap 5 getting started, Bootstrap installation, Bootstrap CDN setup, Bootstrap npm installation, Bootstrap project setup, Bootstrap starter template, Bootstrap browser support, Bootstrap version compatibility, Bootstrap RTL support, Bootstrap Vite setup, Bootstrap Parcel setup, Bootstrap Webpack setup, or needs help setting up a new Bootstrap project.
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

Bootstrap 5.3 supports:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- iOS Safari (latest)
- Android Chrome (latest)

**Not supported:** Internet Explorer (any version).

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
- **Popper.js** (included in `bootstrap.bundle.js`) - For dropdowns, popovers, tooltips
- No jQuery dependency (removed in Bootstrap 5)

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

Bootstrap is built mobile-first. Base styles target mobile devices, with responsive enhancements applied via media queries at larger breakpoints.

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
- `.container` - Fixed-width, responsive
- `.container-fluid` - Full-width always
- `.container-{breakpoint}` - Full-width until breakpoint

## Additional Resources

For detailed build tool configurations, see:
- `references/build-tools.md` - Complete Vite, Parcel, and Webpack setup guides
- `references/javascript-api.md` - Full JavaScript component API reference

For starter templates, see:
- `examples/starter-template.html` - Basic HTML starter
- `examples/vite-setup.md` - Vite project structure
