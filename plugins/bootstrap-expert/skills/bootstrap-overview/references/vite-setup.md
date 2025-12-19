# Vite + Bootstrap 5.3 Project Setup

Complete project structure for a Bootstrap 5.3 project with Vite.

## Quick Start Commands

```bash
# Create and setup project
npm create vite@latest my-bootstrap-app -- --template vanilla
cd my-bootstrap-app
npm install bootstrap @popperjs/core
npm install -D sass

# Create directory structure
mkdir -p src/scss

# Start development server
npm run dev
```

## Project Structure

```
my-bootstrap-app/
├── index.html
├── package.json
├── vite.config.js
├── src/
│   ├── main.js
│   └── scss/
│       ├── styles.scss
│       └── _variables.scss
└── public/
    └── (static assets)
```

## File Contents

### package.json

```json
{
  "name": "my-bootstrap-app",
  "private": true,
  "version": "0.1.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  },
  "devDependencies": {
    "sass": "^1.69.0",
    "vite": "^5.0.0"
  },
  "dependencies": {
    "@popperjs/core": "^2.11.8",
    "bootstrap": "^5.3.8"
  }
}
```

### vite.config.js

```javascript
import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
  root: path.resolve(__dirname, 'src'),
  publicDir: '../public',
  build: {
    outDir: '../dist',
    emptyOutDir: true,
  },
  server: {
    port: 3000,
    hot: true,
  },
  resolve: {
    alias: {
      '~bootstrap': path.resolve(__dirname, 'node_modules/bootstrap'),
    },
  },
});
```

### index.html (in project root)

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Bootstrap + Vite</title>
  </head>
  <body>
    <div class="container py-5">
      <h1 class="mb-4">Bootstrap + Vite</h1>

      <div class="row g-3">
        <div class="col-md-6">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Card Component</h5>
              <p class="card-text">A sample Bootstrap card.</p>
              <button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                Open Modal
              </button>
            </div>
          </div>
        </div>

        <div class="col-md-6">
          <button class="btn btn-secondary" data-bs-toggle="tooltip" title="Tooltip example">
            Hover for Tooltip
          </button>
        </div>
      </div>

      <!-- Modal -->
      <div class="modal fade" id="exampleModal" tabindex="-1">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">Modal Title</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
            </div>
            <div class="modal-body">
              <p>Modal body content goes here.</p>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="button" class="btn btn-primary">Save changes</button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <script type="module" src="./main.js"></script>
  </body>
</html>
```

### src/main.js

```javascript
// Import custom styles
import './scss/styles.scss';

// Import Bootstrap JS
import * as bootstrap from 'bootstrap';

// Initialize tooltips
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
tooltipTriggerList.forEach(el => new bootstrap.Tooltip(el));

// Initialize popovers
const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]');
popoverTriggerList.forEach(el => new bootstrap.Popover(el));

console.log('Bootstrap version:', bootstrap.Modal.VERSION);
```

### src/scss/styles.scss

```scss
// 1. Include functions first
@import "~bootstrap/scss/functions";

// 2. Include custom variable overrides
@import "variables";

// 3. Include remainder of required Bootstrap stylesheets
@import "~bootstrap/scss/variables";
@import "~bootstrap/scss/variables-dark";

// 4. Include any default map overrides here

// 5. Include remainder of required parts
@import "~bootstrap/scss/maps";
@import "~bootstrap/scss/mixins";
@import "~bootstrap/scss/root";

// 6. Include any optional Bootstrap CSS as needed
@import "~bootstrap/scss/utilities";
@import "~bootstrap/scss/reboot";
@import "~bootstrap/scss/type";
@import "~bootstrap/scss/images";
@import "~bootstrap/scss/containers";
@import "~bootstrap/scss/grid";
@import "~bootstrap/scss/tables";
@import "~bootstrap/scss/forms";
@import "~bootstrap/scss/buttons";
@import "~bootstrap/scss/transitions";
@import "~bootstrap/scss/dropdown";
@import "~bootstrap/scss/button-group";
@import "~bootstrap/scss/nav";
@import "~bootstrap/scss/navbar";
@import "~bootstrap/scss/card";
@import "~bootstrap/scss/accordion";
@import "~bootstrap/scss/breadcrumb";
@import "~bootstrap/scss/pagination";
@import "~bootstrap/scss/badge";
@import "~bootstrap/scss/alert";
@import "~bootstrap/scss/progress";
@import "~bootstrap/scss/list-group";
@import "~bootstrap/scss/close";
@import "~bootstrap/scss/toasts";
@import "~bootstrap/scss/modal";
@import "~bootstrap/scss/tooltip";
@import "~bootstrap/scss/popover";
@import "~bootstrap/scss/carousel";
@import "~bootstrap/scss/spinners";
@import "~bootstrap/scss/offcanvas";
@import "~bootstrap/scss/placeholders";

// Helpers
@import "~bootstrap/scss/helpers";

// Utilities API (generates utility classes)
@import "~bootstrap/scss/utilities/api";

// 7. Add custom styles below
body {
  // Custom body styles
}
```

### src/scss/_variables.scss

```scss
// Custom color scheme
$primary: #0d6efd;
$secondary: #6c757d;
$success: #198754;
$info: #0dcaf0;
$warning: #ffc107;
$danger: #dc3545;
$light: #f8f9fa;
$dark: #212529;

// Custom theme colors (will merge with defaults)
$custom-colors: (
  "custom-color": #900
);

// Options
$enable-rounded: true;
$enable-shadows: false;
$enable-gradients: false;
$enable-transitions: true;
$enable-reduced-motion: true;
$enable-grid-classes: true;
$enable-container-classes: true;
$enable-caret: true;
$enable-button-pointers: true;
$enable-rfs: true;
$enable-validation-icons: true;
$enable-negative-margins: false;
$enable-deprecation-messages: true;
$enable-important-utilities: true;
$enable-dark-mode: true;
$color-mode-type: data;

// Spacing
$spacer: 1rem;

// Body
$body-bg: $light;
$body-color: $dark;

// Typography
$font-family-sans-serif: system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", sans-serif;
$font-size-base: 1rem;
$line-height-base: 1.5;

// Border radius
$border-radius: 0.375rem;
$border-radius-sm: 0.25rem;
$border-radius-lg: 0.5rem;
```

## Build for Production

```bash
npm run build
```

Output will be in the `dist/` directory, ready for deployment.
