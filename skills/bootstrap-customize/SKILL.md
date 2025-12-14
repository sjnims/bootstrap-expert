---
name: bootstrap-customize
description: This skill should be used when the user asks "how do I customize Bootstrap", "how to create a custom Bootstrap theme", "what Sass variables can I override", "how to implement dark mode in Bootstrap", "how to change Bootstrap colors", "how to override Bootstrap defaults", "how to add custom colors to Bootstrap", "how to enable Bootstrap shadows", "how to compile Bootstrap Sass", or needs help with Bootstrap theming, Sass variable overrides, CSS custom properties, or color mode implementation.
---

# Bootstrap 5.3 Customization

Bootstrap 5.3 provides powerful customization through Sass variables, CSS custom properties, and a comprehensive theming system including built-in color modes.

## Customization Methods

### 1. CSS Custom Properties (Runtime)

Modify styles without recompiling. Override at any level:

```css
/* Global override */
:root {
  --bs-primary: #0074d9;
  --bs-primary-rgb: 0, 116, 217;
  --bs-body-font-family: 'Inter', sans-serif;
}

/* Component-level override */
.my-card {
  --bs-card-bg: #f0f0f0;
  --bs-card-border-color: transparent;
}

/* Local scope override */
.custom-button {
  --bs-btn-bg: #custom-color;
  --bs-btn-border-color: #custom-color;
  --bs-btn-hover-bg: #darker-custom;
}
```

### 2. Sass Variables (Compile-time)

For comprehensive theming, override Sass variables before importing Bootstrap:

```scss
// 1. Include functions first
@import "bootstrap/scss/functions";

// 2. Override default variables
$primary: #0074d9;
$secondary: #7fdbff;
$font-family-base: 'Inter', sans-serif;
$border-radius: 0.5rem;
$enable-shadows: true;

// 3. Import Bootstrap
@import "bootstrap/scss/bootstrap";
```

**Order matters:** Variables must be set after functions but before other Bootstrap imports.

## Color System

### Theme Colors

Eight default theme colors with Sass maps and CSS properties:

```scss
$theme-colors: (
  "primary":   $primary,
  "secondary": $secondary,
  "success":   $success,
  "info":      $info,
  "warning":   $warning,
  "danger":    $danger,
  "light":     $light,
  "dark":      $dark
);
```

### Adding Custom Colors

```scss
// Add to theme-colors map
$custom-colors: (
  "custom": #900,
  "brand": #1a73e8
);

// Merge with defaults
$theme-colors: map-merge($theme-colors, $custom-colors);
```

This generates all utilities: `.bg-custom`, `.text-brand`, `.btn-custom`, etc.

### Removing Colors

```scss
$theme-colors: map-remove($theme-colors, "info", "light");
```

> **Warning:** The `primary`, `success`, and `danger` keys are **required** and cannot be removed. They're used by Bootstrap's core styles for links, form validation, and other components. Removing them will cause Sass compilation errors.

**Safe to remove:** `secondary`, `info`, `warning`, `light`, `dark`

**Cannot remove:** `primary`, `success`, `danger`

## Color Modes (Dark/Light)

Bootstrap 5.3 includes built-in dark mode support.

### Enabling Color Modes

Set `data-bs-theme` attribute on `<html>` or any element:

```html
<!-- Light mode (default) -->
<html lang="en" data-bs-theme="light">

<!-- Dark mode -->
<html lang="en" data-bs-theme="dark">

<!-- Per-component -->
<div data-bs-theme="dark">
  <div class="card">Dark card in light page</div>
</div>
```

### JavaScript Toggle

```javascript
const toggleTheme = () => {
  const html = document.documentElement;
  const current = html.getAttribute('data-bs-theme');
  html.setAttribute('data-bs-theme', current === 'dark' ? 'light' : 'dark');
};

// With system preference
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
document.documentElement.setAttribute('data-bs-theme',
  prefersDark.matches ? 'dark' : 'light'
);

// Listen for system changes
prefersDark.addEventListener('change', (e) => {
  document.documentElement.setAttribute('data-bs-theme',
    e.matches ? 'dark' : 'light'
  );
});
```

### Custom Color Mode Colors

Override colors per mode:

```scss
// Light mode colors
:root,
[data-bs-theme="light"] {
  --bs-body-bg: #ffffff;
  --bs-body-color: #212529;
}

// Dark mode colors
[data-bs-theme="dark"] {
  --bs-body-bg: #1a1a2e;
  --bs-body-color: #e1e1e1;
  --bs-primary: #6ea8fe;
}
```

## Sass Functions

Bootstrap provides utility functions for color manipulation and accessibility:

- `tint-color($color, $weight)` - Lighten by mixing with white
- `shade-color($color, $weight)` - Darken by mixing with black
- `shift-color($color, $weight)` - Auto tint/shade based on weight sign
- `color-contrast($color)` - Get accessible contrast color for backgrounds

```scss
// Generate color scale
$primary-light: tint-color($primary, 40%);
$primary-dark: shade-color($primary, 20%);

// Auto-contrast text
.custom-badge {
  background-color: $success;
  color: color-contrast($success); // Returns #fff or #212529
}

// Hover states
.btn-custom:hover {
  background-color: shift-color($brand, 15%);
}
```

Additional functions: `escape-svg()` for SVG backgrounds, `add()`/`subtract()` for safe CSS calc operations.

See `references/sass-functions-mixins.md` for complete function and mixin reference.

## Key Sass Variables

### Typography

```scss
$font-family-base: system-ui, -apple-system, sans-serif;
$font-family-monospace: SFMono-Regular, Menlo, monospace;
$font-size-base: 1rem;
$font-size-sm: $font-size-base * 0.875;
$font-size-lg: $font-size-base * 1.25;
$font-weight-normal: 400;
$font-weight-bold: 700;
$line-height-base: 1.5;
$headings-font-family: null; // Inherits $font-family-base
$headings-font-weight: 500;
```

### Spacing

```scss
$spacer: 1rem;
$spacers: (
  0: 0,
  1: $spacer * 0.25,  // 0.25rem
  2: $spacer * 0.5,   // 0.5rem
  3: $spacer,         // 1rem
  4: $spacer * 1.5,   // 1.5rem
  5: $spacer * 3      // 3rem
);
```

### Border Radius

```scss
$border-radius: 0.375rem;
$border-radius-sm: 0.25rem;
$border-radius-lg: 0.5rem;
$border-radius-xl: 1rem;
$border-radius-xxl: 2rem;
$border-radius-pill: 50rem;
```

### Options Flags

```scss
$enable-caret: true;
$enable-rounded: true;
$enable-shadows: false;
$enable-gradients: false;
$enable-transitions: true;
$enable-reduced-motion: true;
$enable-smooth-scroll: true;
$enable-grid-classes: true;
$enable-container-classes: true;
$enable-negative-margins: false;
$enable-dark-mode: true;
$color-mode-type: data; // 'data' or 'media'
```

## Component Customization

### Button Customization

```scss
// Global button variables
$btn-padding-y: 0.5rem;
$btn-padding-x: 1rem;
$btn-font-size: 1rem;
$btn-border-radius: $border-radius;

// Per-variant customization via CSS
.btn-primary {
  --bs-btn-bg: #0074d9;
  --bs-btn-border-color: #0074d9;
  --bs-btn-hover-bg: #0063b8;
  --bs-btn-hover-border-color: #005aa3;
  --bs-btn-active-bg: #005aa3;
  --bs-btn-active-border-color: #00518f;
}
```

### Card Customization

```scss
$card-spacer-y: 1rem;
$card-spacer-x: 1rem;
$card-border-width: 1px;
$card-border-radius: $border-radius;
$card-border-color: rgba(0, 0, 0, 0.125);
$card-bg: $white;
$card-cap-bg: rgba(0, 0, 0, 0.03);
```

### Form Customization

```scss
$input-padding-y: 0.375rem;
$input-padding-x: 0.75rem;
$input-font-size: 1rem;
$input-border-radius: $border-radius;
$input-border-color: $gray-400;
$input-focus-border-color: tint-color($primary, 50%);
$input-focus-box-shadow: 0 0 0 0.25rem rgba($primary, 0.25);
```

## Component Architecture

Bootstrap uses a **base-modifier pattern** for component styling. Understanding this architecture helps you customize existing components and create new ones that integrate seamlessly.

### Base and Modifier Classes

Components start with a base class providing core styling, then modifier classes add variants:

```html
<!-- Base class provides core styling -->
<button class="btn">Base button</button>

<!-- Modifier classes add variants -->
<button class="btn btn-primary">Primary</button>
<button class="btn btn-lg">Large</button>
<button class="btn btn-primary btn-lg">Primary Large</button>
```

### Variant Generation with @each Loops

Bootstrap generates color variants by iterating over `$theme-colors`:

```scss
// How Bootstrap generates .alert-primary, .alert-danger, etc.
@each $state in map-keys($theme-colors) {
  .alert-#{$state} {
    --#{$prefix}alert-color: var(--#{$prefix}#{$state}-text-emphasis);
    --#{$prefix}alert-bg: var(--#{$prefix}#{$state}-bg-subtle);
    --#{$prefix}alert-border-color: var(--#{$prefix}#{$state}-border-subtle);
  }
}
```

**Key insight:** Adding a color to `$theme-colors` automatically generates variants for alerts, buttons, badges, list-groups, and more.

### Custom Component with Variants

Apply the same pattern for consistent custom components:

```scss
// Base class
.callout {
  padding: var(--bs-callout-padding, 1rem);
  border-left: 4px solid var(--bs-callout-border-color, currentcolor);
  background: var(--bs-callout-bg, transparent);
}

// Generate variants from theme colors
@each $state, $value in $theme-colors {
  .callout-#{$state} {
    --bs-callout-border-color: var(--bs-#{$state});
    --bs-callout-bg: var(--bs-#{$state}-bg-subtle);
  }
}
```

This generates `.callout-primary`, `.callout-danger`, etc., all inheriting from the base `.callout` styles.

See `references/sass-functions-mixins.md` for `button-variant()` and other mixins that follow this pattern.

## Creating Custom Components

Use Bootstrap's mixins and functions for consistent components:

```scss
.custom-component {
  // Use Bootstrap's spacing
  padding: map-get($spacers, 3);
  margin-bottom: map-get($spacers, 4);

  // Use Bootstrap's colors
  background-color: var(--bs-body-bg);
  color: var(--bs-body-color);
  border: 1px solid var(--bs-border-color);
  border-radius: var(--bs-border-radius);

  // Use Bootstrap's shadows
  @if $enable-shadows {
    box-shadow: $box-shadow-sm;
  }

  // Responsive behavior
  @include media-breakpoint-up(md) {
    padding: map-get($spacers, 4);
  }
}
```

## Optimization

Bootstrap's full bundle is substantial. Use these strategies to reduce production bundle size.

### Lean Sass Imports

Import only the components you use:

```scss
// Required core
@import "bootstrap/scss/functions";
@import "bootstrap/scss/variables";
@import "bootstrap/scss/variables-dark";
@import "bootstrap/scss/maps";
@import "bootstrap/scss/mixins";
@import "bootstrap/scss/root";

// Optional - import only what you use
@import "bootstrap/scss/reboot";
@import "bootstrap/scss/type";
@import "bootstrap/scss/containers";
@import "bootstrap/scss/grid";
@import "bootstrap/scss/buttons";
```

See `examples/selective-imports.scss` for a complete minimal build example.

### Lean JavaScript Imports

Tree-shake Bootstrap JavaScript by importing individual plugins:

```javascript
// Instead of importing everything
// import * as bootstrap from 'bootstrap';

// Import only what you need
import Modal from 'bootstrap/js/dist/modal';
import Dropdown from 'bootstrap/js/dist/dropdown';
import Collapse from 'bootstrap/js/dist/collapse';

// Initialize manually
const modal = new Modal('#myModal');
```

Note: Some plugins have dependencies (e.g., Dropdown requires Popper.js). Check plugin documentation.

### Remove Unused CSS with PurgeCSS

PurgeCSS removes unused styles from your production build:

```javascript
// postcss.config.js
module.exports = {
  plugins: [
    require('@fullhuman/postcss-purgecss')({
      content: ['./src/**/*.html', './src/**/*.js'],
      // Safelist Bootstrap's dynamic classes
      safelist: {
        standard: [/^modal/, /^show/, /^fade/, /^collapse/, /^offcanvas/],
        deep: [/^tooltip/, /^popover/, /^bs-/]
      }
    })
  ]
}
```

Bootstrap dynamically adds classes like `show`, `fade`, `collapsing`. Always safelist these patterns.

### Autoprefixer Configuration

Configure browser support to avoid unnecessary vendor prefixes:

```text
# .browserslistrc
>= 0.5%
last 2 major versions
not dead
not Explorer <= 11
```

This is Bootstrap's default configuration. Adjust based on your audience.

### Production Best Practices

**Minification**: Use minified distribution files in production:

- `bootstrap.min.css` (not `bootstrap.css`)
- `bootstrap.bundle.min.js` (not `bootstrap.bundle.js`)

**Compression**: Enable gzip or Brotli on your server:

```nginx
# nginx.conf
gzip on;
gzip_types text/css application/javascript;
```

**Non-blocking Loading**: Use `defer` for non-critical scripts:

```html
<!-- Critical CSS in head -->
<link rel="stylesheet" href="bootstrap.min.css">

<!-- Scripts at end of body with defer -->
<script src="bootstrap.bundle.min.js" defer></script>
```

**HTTPS**: Always serve Bootstrap over HTTPS. CDN links require secure connections and modern browsers may block mixed content.

See `references/sass-variables.md` for complete variable reference.

For customization examples, see:

- `examples/color-mode-toggle.js` - Dark/light mode toggle implementation
- `examples/custom-theme.scss` - Custom theme Sass file
- `examples/selective-imports.scss` - Minimal Bootstrap build example
