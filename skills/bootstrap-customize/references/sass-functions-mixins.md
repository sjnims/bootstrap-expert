# Sass Functions and Mixins Reference

Bootstrap 5.3 provides utility functions and mixins for color manipulation, accessibility, responsive design, and component generation.

## Color Functions

### tint-color($color, $weight)

Lightens a color by mixing it with white. More predictable than Sass's native `lighten()`.

```scss
// Lighten primary by 10%
$light-primary: tint-color($primary, 10%);

// Common weights: 10%, 20%, 40%, 60%, 80%
$primary-100: tint-color($primary, 80%);
$primary-200: tint-color($primary, 60%);
$primary-300: tint-color($primary, 40%);
```

**Parameters:**

- `$color` - Any valid Sass color
- `$weight` - Percentage (0%-100%) of white to mix

---

### shade-color($color, $weight)

Darkens a color by mixing it with black. More predictable than Sass's native `darken()`.

```scss
// Darken primary by 20%
$dark-primary: shade-color($primary, 20%);

// Create darker variants
$primary-700: shade-color($primary, 40%);
$primary-800: shade-color($primary, 60%);
$primary-900: shade-color($primary, 80%);
```

**Parameters:**

- `$color` - Any valid Sass color
- `$weight` - Percentage (0%-100%) of black to mix

---

### shift-color($color, $weight)

Combines tint and shade: positive weight shades (darkens), negative weight tints (lightens).

```scss
// Darken with positive weight
$darker: shift-color($primary, 25%);

// Lighten with negative weight
$lighter: shift-color($primary, -25%);

// Useful for hover states
.btn-custom {
  background-color: $primary;

  &:hover {
    background-color: shift-color($primary, 15%);
  }
}
```

**Parameters:**

- `$color` - Any valid Sass color
- `$weight` - Positive to shade, negative to tint

---

### color-contrast($color)

Returns an accessible contrast color (`#fff`, `#212529`, or `#000`) for text on the given background. Uses WCAG contrast ratio algorithm.

```scss
// Auto-select readable text color
.custom-badge {
  background-color: $success;
  color: color-contrast($success); // Returns #fff
}

// Generate theme color swatches
@each $name, $color in $theme-colors {
  .swatch-#{$name} {
    background-color: $color;
    color: color-contrast($color);
  }
}
```

**Parameters:**

- `$color` - Background color to calculate contrast against

**Returns:** `#fff` (white), `#212529` (dark), or `#000` (black)

---

### escape-svg($svg)

Escapes `<`, `>`, and `#` characters for SVG background images in data URIs.

```scss
// Escape custom SVG for background
$custom-icon: escape-svg('<svg xmlns="http://www.w3.org/2000/svg">...</svg>');

.icon {
  background-image: url("data:image/svg+xml,#{$custom-icon}");
}
```

**Note:** Data URIs must be quoted when using this function.

---

### add($value1, $value2)

CSS `calc()` wrapper that handles unitless `0` values, which would otherwise cause errors.

```scss
// Safe calculation even if $extra is 0
$total-padding: add(1rem, $extra);

// Equivalent to calc(1rem + 0) without the error
.element {
  padding: add($base-padding, $optional-padding);
}
```

---

### subtract($value1, $value2)

CSS `calc()` wrapper for subtraction that handles unitless `0` values.

```scss
// Works even if $border-width is 0
$inner-radius: subtract($border-radius, $border-width);

// Bootstrap uses this for inner border-radius calculations
.card-inner {
  border-radius: subtract($card-border-radius, $card-border-width);
}
```

**Example - Valid vs Invalid:**

```scss
// When $border-width: 1px
border-radius: calc(0.25rem - 1px);   // Valid
border-radius: subtract(0.25rem, 1px); // Also valid

// When $border-width: 0
border-radius: calc(0.25rem - 0);     // Invalid, browser error
border-radius: subtract(0.25rem, 0);  // Valid, outputs 0.25rem
```

---

## Responsive Breakpoint Mixins

### media-breakpoint-up($breakpoint)

Apply styles at the specified breakpoint and above (min-width).

```scss
.sidebar {
  display: none;

  @include media-breakpoint-up(md) {
    display: block;
    width: 250px;
  }

  @include media-breakpoint-up(lg) {
    width: 300px;
  }
}
```

**Compiles to:**

| Breakpoint | Media Query |
|------------|-------------|
| `sm` | `@media (min-width: 576px)` |
| `md` | `@media (min-width: 768px)` |
| `lg` | `@media (min-width: 992px)` |
| `xl` | `@media (min-width: 1200px)` |
| `xxl` | `@media (min-width: 1400px)` |

---

### media-breakpoint-down($breakpoint)

Apply styles below the specified breakpoint (max-width minus 0.02px).

```scss
.mobile-nav {
  @include media-breakpoint-down(md) {
    position: fixed;
    bottom: 0;
    width: 100%;
  }
}
```

**Compiles to:**

| Breakpoint | Media Query |
|------------|-------------|
| `sm` | `@media (max-width: 575.98px)` |
| `md` | `@media (max-width: 767.98px)` |
| `lg` | `@media (max-width: 991.98px)` |
| `xl` | `@media (max-width: 1199.98px)` |
| `xxl` | `@media (max-width: 1399.98px)` |

---

### media-breakpoint-only($breakpoint)

Target a single breakpoint range only.

```scss
.tablet-specific {
  @include media-breakpoint-only(md) {
    // Only applies between 768px and 991.98px
    padding: 2rem;
  }
}
```

---

### media-breakpoint-between($lower, $upper)

Target a range spanning multiple breakpoints.

```scss
.mid-range {
  @include media-breakpoint-between(sm, lg) {
    // Applies from 576px to 991.98px
    font-size: 1.1rem;
  }
}
```

---

## Color Mode Mixin

### color-scheme($name)

Shorthand for `prefers-color-scheme` media query.

```scss
.adaptive-element {
  background-color: #ffffff;
  color: #212529;

  @include color-scheme(dark) {
    background-color: #1a1a2e;
    color: #e1e1e1;
  }
}
```

**Compiles to:**

```css
.adaptive-element {
  background-color: #ffffff;
  color: #212529;
}

@media (prefers-color-scheme: dark) {
  .adaptive-element {
    background-color: #1a1a2e;
    color: #e1e1e1;
  }
}
```

---

## Button Mixins

### button-variant()

Generate button color variants with hover, active, and disabled states.

```scss
// Signature
@mixin button-variant(
  $background,
  $border,
  $color: color-contrast($background),
  $hover-background: shade-color($background, 15%),
  $hover-border: shade-color($border, 20%),
  $hover-color: color-contrast($hover-background),
  $active-background: shade-color($background, 20%),
  $active-border: shade-color($border, 25%),
  $active-color: color-contrast($active-background),
  $disabled-background: $background,
  $disabled-border: $border,
  $disabled-color: color-contrast($disabled-background)
)
```

**Usage:**

```scss
// Simple custom button
.btn-custom {
  @include button-variant($purple, $purple);
}

// With custom hover colors
.btn-brand {
  @include button-variant(
    $background: #1a73e8,
    $border: #1a73e8,
    $hover-background: #1557b0,
    $hover-border: #1557b0
  );
}
```

---

### button-outline-variant()

Generate outline button variants.

```scss
@mixin button-outline-variant(
  $color,
  $color-hover: color-contrast($color),
  $active-background: $color,
  $active-border: $color,
  $active-color: color-contrast($active-background)
)
```

**Usage:**

```scss
.btn-outline-custom {
  @include button-outline-variant($purple);
}
```

---

## Utility Mixins

### transition()

Apply Bootstrap's standard transition.

```scss
.smooth-element {
  @include transition($transition-base);
}

// Custom transition
.custom-transition {
  @include transition(transform 0.3s ease, opacity 0.2s ease);
}
```

---

### box-shadow()

Apply box shadow respecting `$enable-shadows` option.

```scss
.shadowed {
  @include box-shadow($box-shadow);
}
```

---

### border-radius()

Apply border radius respecting `$enable-rounded` option.

```scss
.rounded-element {
  @include border-radius($border-radius-lg);
}
```

---

## Practical Examples

### Custom Theme with Functions

```scss
@import "bootstrap/scss/functions";

// Define base brand color
$brand: #6366f1;

// Generate full color scale using functions
$brand-100: tint-color($brand, 80%);
$brand-200: tint-color($brand, 60%);
$brand-300: tint-color($brand, 40%);
$brand-400: tint-color($brand, 20%);
$brand-500: $brand;
$brand-600: shade-color($brand, 20%);
$brand-700: shade-color($brand, 40%);
$brand-800: shade-color($brand, 60%);
$brand-900: shade-color($brand, 80%);

// Override primary
$primary: $brand;

@import "bootstrap/scss/bootstrap";

// Custom component using brand colors
.brand-card {
  background-color: $brand-100;
  border-color: $brand-300;
  color: color-contrast($brand-100);

  .brand-card-header {
    background-color: $brand;
    color: color-contrast($brand);
  }
}
```

### Responsive Component

```scss
.feature-grid {
  display: grid;
  gap: 1rem;
  grid-template-columns: 1fr;

  @include media-breakpoint-up(sm) {
    grid-template-columns: repeat(2, 1fr);
  }

  @include media-breakpoint-up(lg) {
    grid-template-columns: repeat(3, 1fr);
    gap: 1.5rem;
  }

  @include media-breakpoint-up(xl) {
    grid-template-columns: repeat(4, 1fr);
  }
}
```

### Dark Mode Aware Component

```scss
.info-box {
  padding: map-get($spacers, 3);
  background-color: tint-color($info, 80%);
  border: 1px solid tint-color($info, 40%);
  color: shade-color($info, 40%);
  border-radius: $border-radius;

  @include color-scheme(dark) {
    background-color: shade-color($info, 60%);
    border-color: shade-color($info, 40%);
    color: tint-color($info, 80%);
  }
}
```
