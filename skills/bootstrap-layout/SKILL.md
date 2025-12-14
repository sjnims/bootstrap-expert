---
name: bootstrap-layout
description: This skill should be used when the user asks about Bootstrap grid system, Bootstrap containers, Bootstrap breakpoints, Bootstrap columns, Bootstrap rows, Bootstrap gutters, Bootstrap responsive layout, Bootstrap flexbox utilities, Bootstrap CSS Grid, Bootstrap z-index, how to create responsive layouts with Bootstrap, how to use Bootstrap grid, Bootstrap column sizing, Bootstrap auto-layout columns, or needs help with Bootstrap page layout and responsiveness.
---

# Bootstrap 5.3 Layout System

Bootstrap's layout system is built on flexbox and provides a powerful 12-column grid for creating responsive layouts. This skill covers containers, the grid system, breakpoints, and layout utilities.

## Breakpoints

Bootstrap's responsive design uses six default breakpoints:

| Breakpoint | Class infix | Dimensions |
|------------|-------------|------------|
| Extra small | None | <576px |
| Small | `sm` | ≥576px |
| Medium | `md` | ≥768px |
| Large | `lg` | ≥992px |
| Extra large | `xl` | ≥1200px |
| Extra extra large | `xxl` | ≥1400px |

Breakpoints apply at the specified width **and up** (mobile-first).

## Containers

Containers are the fundamental building block for layouts.

### Container Types

```html
<!-- Fixed-width container (max-width at each breakpoint) -->
<div class="container">...</div>

<!-- Full-width container (100% at all breakpoints) -->
<div class="container-fluid">...</div>

<!-- Responsive containers (100% until specified breakpoint) -->
<div class="container-sm">100% until sm, then fixed</div>
<div class="container-md">100% until md, then fixed</div>
<div class="container-lg">100% until lg, then fixed</div>
<div class="container-xl">100% until xl, then fixed</div>
<div class="container-xxl">100% until xxl, then fixed</div>
```

### Container Max-Widths

| | xs<br><576px | sm<br>≥576px | md<br>≥768px | lg<br>≥992px | xl<br>≥1200px | xxl<br>≥1400px |
|---|---|---|---|---|---|---|
| `.container` | 100% | 540px | 720px | 960px | 1140px | 1320px |
| `.container-sm` | 100% | 540px | 720px | 960px | 1140px | 1320px |
| `.container-md` | 100% | 100% | 720px | 960px | 1140px | 1320px |
| `.container-lg` | 100% | 100% | 100% | 960px | 1140px | 1320px |
| `.container-fluid` | 100% | 100% | 100% | 100% | 100% | 100% |

## Grid System

The grid uses a series of containers, rows, and columns.

### Basic Structure

```html
<div class="container">
  <div class="row">
    <div class="col">Column 1</div>
    <div class="col">Column 2</div>
    <div class="col">Column 3</div>
  </div>
</div>
```

### Equal-Width Columns

```html
<div class="row">
  <div class="col">1 of 2</div>
  <div class="col">2 of 2</div>
</div>

<div class="row">
  <div class="col">1 of 3</div>
  <div class="col">2 of 3</div>
  <div class="col">3 of 3</div>
</div>
```

### Specific Column Widths

Use `.col-{number}` for specific widths (1-12):

```html
<div class="row">
  <div class="col-8">8 columns wide</div>
  <div class="col-4">4 columns wide</div>
</div>

<div class="row">
  <div class="col-3">3 columns</div>
  <div class="col-6">6 columns</div>
  <div class="col-3">3 columns</div>
</div>
```

### Responsive Columns

Combine breakpoint infixes for responsive behavior:

```html
<!-- Stack on mobile, side-by-side on md+ -->
<div class="row">
  <div class="col-12 col-md-6">Left on md+</div>
  <div class="col-12 col-md-6">Right on md+</div>
</div>

<!-- Different widths at different breakpoints -->
<div class="row">
  <div class="col-12 col-sm-6 col-lg-4">Responsive column</div>
</div>
```

### Auto-Layout Columns

```html
<!-- One column width set, others auto -->
<div class="row">
  <div class="col">Auto</div>
  <div class="col-6">6 columns</div>
  <div class="col">Auto</div>
</div>

<!-- Variable width content -->
<div class="row justify-content-center">
  <div class="col-auto">Variable width content</div>
</div>
```

## Row Columns

Control the number of columns per row:

```html
<!-- Always 2 columns per row -->
<div class="row row-cols-2">
  <div class="col">Item 1</div>
  <div class="col">Item 2</div>
  <div class="col">Item 3</div>
  <div class="col">Item 4</div>
</div>

<!-- Responsive: 1 on xs, 2 on sm, 3 on md, 4 on lg -->
<div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4">
  <div class="col">Item</div>
  <!-- More items... -->
</div>
```

## Gutters

Gutters are the gaps between columns. Default is `1.5rem` (24px).

### Horizontal Gutters (gx-*)

```html
<div class="row gx-5">
  <div class="col">Wide horizontal gutters</div>
  <div class="col">Wide horizontal gutters</div>
</div>
```

### Vertical Gutters (gy-*)

```html
<div class="row gy-4">
  <div class="col-6">Vertical gutter when wrapping</div>
  <div class="col-6">Vertical gutter when wrapping</div>
  <div class="col-6">Vertical gutter when wrapping</div>
</div>
```

### Both Gutters (g-*)

```html
<div class="row g-3">
  <div class="col-6">Equal gutters</div>
  <div class="col-6">Equal gutters</div>
</div>

<!-- No gutters -->
<div class="row g-0">
  <div class="col">No gutters</div>
  <div class="col">No gutters</div>
</div>
```

### Responsive Gutters

```html
<div class="row g-2 g-md-4 g-lg-5">
  <div class="col">Responsive gutters</div>
</div>
```

## Column Alignment

### Vertical Alignment

```html
<!-- Align all columns in row -->
<div class="row align-items-start">...</div>
<div class="row align-items-center">...</div>
<div class="row align-items-end">...</div>

<!-- Align individual columns -->
<div class="row">
  <div class="col align-self-start">Top</div>
  <div class="col align-self-center">Middle</div>
  <div class="col align-self-end">Bottom</div>
</div>
```

### Horizontal Alignment

```html
<div class="row justify-content-start">...</div>
<div class="row justify-content-center">...</div>
<div class="row justify-content-end">...</div>
<div class="row justify-content-around">...</div>
<div class="row justify-content-between">...</div>
<div class="row justify-content-evenly">...</div>
```

## Column Ordering

### Order Classes

```html
<div class="row">
  <div class="col order-3">First in DOM, last visually</div>
  <div class="col order-2">Second</div>
  <div class="col order-1">Third in DOM, first visually</div>
</div>

<!-- Responsive ordering -->
<div class="row">
  <div class="col order-md-2">Second on md+</div>
  <div class="col order-md-1">First on md+</div>
</div>
```

### Offset Classes

```html
<!-- Offset by columns -->
<div class="row">
  <div class="col-md-4 offset-md-4">Centered column</div>
</div>

<!-- Margin utilities for offsets -->
<div class="row">
  <div class="col-md-4 ms-auto">Pushed right</div>
</div>
```

## Nesting

Columns can be nested:

```html
<div class="row">
  <div class="col-9">
    Level 1
    <div class="row">
      <div class="col-6">Level 2</div>
      <div class="col-6">Level 2</div>
    </div>
  </div>
</div>
```

## CSS Grid (Alternative)

Bootstrap 5.3 also supports CSS Grid:

```html
<div class="grid">
  <div class="g-col-6">Half width</div>
  <div class="g-col-6">Half width</div>
</div>

<!-- Custom column count -->
<div class="grid" style="--bs-columns: 3;">
  <div class="g-col-1">1/3</div>
  <div class="g-col-2">2/3</div>
</div>
```

## Common Layout Patterns

### Sidebar Layout

```html
<div class="container-fluid">
  <div class="row">
    <nav class="col-md-3 col-lg-2 d-md-block sidebar">
      Sidebar
    </nav>
    <main class="col-md-9 col-lg-10 ms-sm-auto px-md-4">
      Main content
    </main>
  </div>
</div>
```

### Card Grid

```html
<div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
  <div class="col">
    <div class="card h-100">Card 1</div>
  </div>
  <div class="col">
    <div class="card h-100">Card 2</div>
  </div>
  <!-- More cards... -->
</div>
```

See `references/grid-reference.md` for complete grid class reference.

For layout examples, see:

- `examples/responsive-layouts.html` - Responsive layout patterns
