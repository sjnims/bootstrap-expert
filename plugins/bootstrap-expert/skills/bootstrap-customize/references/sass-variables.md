# Complete Sass Variables Reference

Comprehensive list of Bootstrap 5.3 Sass variables organized by category.

## Color Variables

### Grays

```scss
$white:    #fff;
$gray-100: #f8f9fa;
$gray-200: #e9ecef;
$gray-300: #dee2e6;
$gray-400: #ced4da;
$gray-500: #adb5bd;
$gray-600: #6c757d;
$gray-700: #495057;
$gray-800: #343a40;
$gray-900: #212529;
$black:    #000;
```

### Theme Colors

```scss
$blue:    #0d6efd;
$indigo:  #6610f2;
$purple:  #6f42c1;
$pink:    #d63384;
$red:     #dc3545;
$orange:  #fd7e14;
$yellow:  #ffc107;
$green:   #198754;
$teal:    #20c997;
$cyan:    #0dcaf0;

$primary:   $blue;
$secondary: $gray-600;
$success:   $green;
$info:      $cyan;
$warning:   $yellow;
$danger:    $red;
$light:     $gray-100;
$dark:      $gray-900;
```

### Color Maps

```scss
$colors: (
  "blue":    $blue,
  "indigo":  $indigo,
  "purple":  $purple,
  "pink":    $pink,
  "red":     $red,
  "orange":  $orange,
  "yellow":  $yellow,
  "green":   $green,
  "teal":    $teal,
  "cyan":    $cyan,
  "black":   $black,
  "white":   $white,
  "gray":    $gray-600,
  "gray-dark": $gray-800
);

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

$grays: (
  "100": $gray-100,
  "200": $gray-200,
  "300": $gray-300,
  "400": $gray-400,
  "500": $gray-500,
  "600": $gray-600,
  "700": $gray-700,
  "800": $gray-800,
  "900": $gray-900
);
```

---

## Spacing

```scss
$spacer: 1rem;

$spacers: (
  0: 0,
  1: $spacer * .25,   // 4px
  2: $spacer * .5,    // 8px
  3: $spacer,         // 16px
  4: $spacer * 1.5,   // 24px
  5: $spacer * 3      // 48px
);

// Add custom spacers
$spacers: map-merge($spacers, (
  6: $spacer * 4,     // 64px
  7: $spacer * 5      // 80px
));
```

---

## Typography

### Font Families

```scss
$font-family-sans-serif: system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", "Noto Sans", "Liberation Sans", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
$font-family-monospace: SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
$font-family-base: var(--bs-font-sans-serif);
$font-family-code: var(--bs-font-monospace);
```

### Font Sizes

```scss
$font-size-root: null; // Assumes browser default (16px)
$font-size-base: 1rem;
$font-size-sm: $font-size-base * .875;   // 14px
$font-size-lg: $font-size-base * 1.25;   // 20px

$font-sizes: (
  1: $h1-font-size,  // 2.5rem
  2: $h2-font-size,  // 2rem
  3: $h3-font-size,  // 1.75rem
  4: $h4-font-size,  // 1.5rem
  5: $h5-font-size,  // 1.25rem
  6: $h6-font-size   // 1rem
);
```

### Font Weights

```scss
$font-weight-lighter: lighter;
$font-weight-light: 300;
$font-weight-normal: 400;
$font-weight-medium: 500;
$font-weight-semibold: 600;
$font-weight-bold: 700;
$font-weight-bolder: bolder;
$font-weight-base: $font-weight-normal;
```

### Headings

```scss
$h1-font-size: $font-size-base * 2.5;   // 40px
$h2-font-size: $font-size-base * 2;     // 32px
$h3-font-size: $font-size-base * 1.75;  // 28px
$h4-font-size: $font-size-base * 1.5;   // 24px
$h5-font-size: $font-size-base * 1.25;  // 20px
$h6-font-size: $font-size-base;         // 16px

$headings-margin-bottom: $spacer * .5;
$headings-font-family: null;
$headings-font-style: null;
$headings-font-weight: 500;
$headings-line-height: 1.2;
$headings-color: inherit;
```

### Display Headings

```scss
$display-font-sizes: (
  1: 5rem,
  2: 4.5rem,
  3: 4rem,
  4: 3.5rem,
  5: 3rem,
  6: 2.5rem
);

$display-font-family: null;
$display-font-style: null;
$display-font-weight: 300;
$display-line-height: $headings-line-height;
```

### Line Heights

```scss
$line-height-base: 1.5;
$line-height-sm: 1.25;
$line-height-lg: 2;
```

---

## Body

```scss
$body-text-align: null;
$body-color: $gray-900;
$body-bg: $white;
$body-secondary-color: rgba($body-color, .75);
$body-secondary-bg: $gray-200;
$body-tertiary-color: rgba($body-color, .5);
$body-tertiary-bg: $gray-100;
$body-emphasis-color: $black;
```

---

## Links

```scss
$link-color: $primary;
$link-decoration: underline;
$link-shade-percentage: 20%;
$link-hover-color: shift-color($link-color, $link-shade-percentage);
$link-hover-decoration: null;
```

---

## Borders

```scss
$border-width: 1px;
$border-widths: (
  1: 1px,
  2: 2px,
  3: 3px,
  4: 4px,
  5: 5px
);
$border-style: solid;
$border-color: $gray-300;
$border-color-translucent: rgba($black, .175);

$border-radius: .375rem;
$border-radius-sm: .25rem;
$border-radius-lg: .5rem;
$border-radius-xl: 1rem;
$border-radius-xxl: 2rem;
$border-radius-pill: 50rem;
```

---

## Shadows

```scss
$box-shadow: 0 .5rem 1rem rgba($black, .15);
$box-shadow-sm: 0 .125rem .25rem rgba($black, .075);
$box-shadow-lg: 0 1rem 3rem rgba($black, .175);
$box-shadow-inset: inset 0 1px 2px rgba($black, .075);
```

---

## Grid

```scss
$grid-columns: 12;
$grid-gutter-width: 1.5rem;
$grid-row-columns: 6;

$container-max-widths: (
  sm: 540px,
  md: 720px,
  lg: 960px,
  xl: 1140px,
  xxl: 1320px
);

$container-padding-x: $grid-gutter-width;
```

---

## Breakpoints

```scss
$grid-breakpoints: (
  xs: 0,
  sm: 576px,
  md: 768px,
  lg: 992px,
  xl: 1200px,
  xxl: 1400px
);
```

---

## Transitions

```scss
$transition-base: all .2s ease-in-out;
$transition-fade: opacity .15s linear;
$transition-collapse: height .35s ease;
$transition-collapse-width: width .35s ease;
```

---

## Z-Index

```scss
$zindex-dropdown: 1000;
$zindex-sticky: 1020;
$zindex-fixed: 1030;
$zindex-offcanvas-backdrop: 1040;
$zindex-offcanvas: 1045;
$zindex-modal-backdrop: 1050;
$zindex-modal: 1055;
$zindex-popover: 1070;
$zindex-tooltip: 1080;
$zindex-toast: 1090;
```

---

## Component Variables

### Buttons

```scss
$btn-padding-y: .375rem;
$btn-padding-x: .75rem;
$btn-font-family: null;
$btn-font-size: $font-size-base;
$btn-line-height: $line-height-base;
$btn-white-space: null;
$btn-padding-y-sm: .25rem;
$btn-padding-x-sm: .5rem;
$btn-font-size-sm: $font-size-sm;
$btn-padding-y-lg: .5rem;
$btn-padding-x-lg: 1rem;
$btn-font-size-lg: $font-size-lg;
$btn-border-width: $border-width;
$btn-font-weight: $font-weight-normal;
$btn-box-shadow: inset 0 1px 0 rgba($white, .15), 0 1px 1px rgba($black, .075);
$btn-focus-width: .25rem;
$btn-focus-box-shadow: 0 0 0 $btn-focus-width rgba($primary, .25);
$btn-disabled-opacity: .65;
$btn-active-box-shadow: inset 0 3px 5px rgba($black, .125);
$btn-link-color: var(--bs-link-color);
$btn-link-hover-color: var(--bs-link-hover-color);
$btn-link-disabled-color: $gray-600;
$btn-border-radius: $border-radius;
$btn-border-radius-sm: $border-radius-sm;
$btn-border-radius-lg: $border-radius-lg;
$btn-transition: color .15s ease-in-out, background-color .15s ease-in-out, border-color .15s ease-in-out, box-shadow .15s ease-in-out;
```

### Forms

```scss
$input-padding-y: .375rem;
$input-padding-x: .75rem;
$input-font-family: null;
$input-font-size: $font-size-base;
$input-font-weight: $font-weight-base;
$input-line-height: $line-height-base;
$input-bg: $body-bg;
$input-disabled-color: null;
$input-disabled-bg: $gray-200;
$input-disabled-border-color: null;
$input-color: $body-color;
$input-border-color: $gray-400;
$input-border-width: $border-width;
$input-box-shadow: inset 0 1px 1px rgba($black, .075);
$input-border-radius: $border-radius;
$input-focus-bg: $input-bg;
$input-focus-border-color: tint-color($component-active-bg, 50%);
$input-focus-color: $input-color;
$input-focus-width: .25rem;
$input-focus-box-shadow: 0 0 0 $input-focus-width rgba($component-active-bg, .25);
$input-placeholder-color: $gray-500;
$input-height: add($input-line-height * 1em, add($input-padding-y * 2, $input-border-width * 2, false));
```

### Cards

```scss
$card-spacer-y: $spacer;
$card-spacer-x: $spacer;
$card-title-spacer-y: $spacer * .5;
$card-title-color: null;
$card-subtitle-color: null;
$card-border-width: $border-width;
$card-border-color: var(--bs-border-color-translucent);
$card-border-radius: $border-radius;
$card-box-shadow: null;
$card-inner-border-radius: subtract($card-border-radius, $card-border-width);
$card-cap-padding-y: $card-spacer-y * .5;
$card-cap-padding-x: $card-spacer-x;
$card-cap-bg: rgba(var(--bs-body-color-rgb), .03);
$card-cap-color: null;
$card-height: null;
$card-color: null;
$card-bg: var(--bs-body-bg);
$card-img-overlay-padding: $spacer;
$card-group-margin: $grid-gutter-width * .5;
```

### Modals

```scss
$modal-inner-padding: $spacer;
$modal-footer-margin-between: .5rem;
$modal-dialog-margin: .5rem;
$modal-dialog-margin-y-sm-up: 1.75rem;
$modal-title-line-height: $line-height-base;
$modal-content-color: null;
$modal-content-bg: var(--bs-body-bg);
$modal-content-border-color: var(--bs-border-color-translucent);
$modal-content-border-width: $border-width;
$modal-content-border-radius: $border-radius-lg;
$modal-content-inner-border-radius: subtract($modal-content-border-radius, $modal-content-border-width);
$modal-content-box-shadow-xs: $box-shadow-sm;
$modal-content-box-shadow-sm-up: $box-shadow;
$modal-backdrop-bg: $black;
$modal-backdrop-opacity: .5;
$modal-header-border-color: var(--bs-border-color);
$modal-header-border-width: $modal-content-border-width;
$modal-header-padding-y: $modal-inner-padding;
$modal-header-padding-x: $modal-inner-padding;
$modal-header-padding: $modal-header-padding-y $modal-header-padding-x;
$modal-footer-border-color: $modal-header-border-color;
$modal-footer-border-width: $modal-header-border-width;
$modal-sm: 300px;
$modal-md: 500px;
$modal-lg: 800px;
$modal-xl: 1140px;
$modal-fade-transform: translate(0, -50px);
$modal-show-transform: none;
$modal-transition: transform .3s ease-out;
$modal-scale-transform: scale(1.02);
```

### Navbar

```scss
$navbar-padding-y: $spacer * .5;
$navbar-padding-x: null;
$navbar-nav-link-padding-x: .5rem;
$navbar-brand-font-size: $font-size-lg;
$nav-link-height: $font-size-base * $line-height-base + $nav-link-padding-y * 2;
$navbar-brand-height: $navbar-brand-font-size * $line-height-base;
$navbar-brand-padding-y: ($nav-link-height - $navbar-brand-height) * .5;
$navbar-brand-margin-end: 1rem;
$navbar-toggler-padding-y: .25rem;
$navbar-toggler-padding-x: .75rem;
$navbar-toggler-font-size: $font-size-lg;
$navbar-toggler-border-radius: $btn-border-radius;
$navbar-toggler-focus-width: $btn-focus-width;
$navbar-toggler-transition: box-shadow .15s ease-in-out;
```
