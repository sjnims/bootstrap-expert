---
name: bootstrap-utilities
description: This skill should be used when the user asks about Bootstrap utilities, Bootstrap spacing utilities, Bootstrap margin utilities, Bootstrap padding utilities, Bootstrap display utilities, Bootstrap flex utilities, Bootstrap text utilities, Bootstrap color utilities, Bootstrap background utilities, Bootstrap border utilities, Bootstrap shadow utilities, Bootstrap sizing utilities, Bootstrap position utilities, Bootstrap visibility utilities, Bootstrap overflow utilities, Bootstrap opacity utilities, or needs help with Bootstrap utility classes.
---

# Bootstrap 5.3 Utilities

Bootstrap provides extensive utility classes for rapid styling without custom CSS. These are generated via the Utilities API and can be customized.

## Spacing Utilities

### Margin (m-) and Padding (p-)

```html
<!-- All sides -->
<div class="m-3">Margin 1rem all sides</div>
<div class="p-3">Padding 1rem all sides</div>

<!-- Specific sides -->
<div class="mt-3">Margin top</div>
<div class="mb-3">Margin bottom</div>
<div class="ms-3">Margin start (left in LTR)</div>
<div class="me-3">Margin end (right in LTR)</div>
<div class="mx-3">Margin horizontal (left + right)</div>
<div class="my-3">Margin vertical (top + bottom)</div>

<!-- Same pattern for padding: pt-, pb-, ps-, pe-, px-, py- -->
<div class="px-3 py-2">Horizontal padding 1rem, vertical 0.5rem</div>
```

### Spacing Scale

| Class | Size |
|-------|------|
| `{m\|p}-0` | 0 |
| `{m\|p}-1` | 0.25rem (4px) |
| `{m\|p}-2` | 0.5rem (8px) |
| `{m\|p}-3` | 1rem (16px) |
| `{m\|p}-4` | 1.5rem (24px) |
| `{m\|p}-5` | 3rem (48px) |
| `{m\|p}-auto` | auto (margin only) |

### Responsive Spacing

```html
<div class="mt-0 mt-md-3 mt-lg-5">
  No margin, 1rem on md, 3rem on lg+
</div>
```

### Gap Utilities (Flexbox/Grid)

```html
<div class="d-flex gap-3">
  <div>Item 1</div>
  <div>Item 2</div>
</div>

<div class="d-grid gap-2">
  <button class="btn btn-primary">Button 1</button>
  <button class="btn btn-primary">Button 2</button>
</div>

<!-- Row and column gaps -->
<div class="d-grid gap-0 row-gap-3 column-gap-3">...</div>
```

## Display Utilities

```html
<div class="d-none">Hidden</div>
<div class="d-inline">Inline</div>
<div class="d-inline-block">Inline-block</div>
<div class="d-block">Block</div>
<div class="d-flex">Flexbox</div>
<div class="d-inline-flex">Inline flex</div>
<div class="d-grid">Grid</div>
<div class="d-table">Table</div>
<div class="d-table-row">Table row</div>
<div class="d-table-cell">Table cell</div>

<!-- Responsive display -->
<div class="d-none d-md-block">Hidden on xs/sm, block on md+</div>
<div class="d-block d-lg-none">Visible until lg</div>

<!-- Print display -->
<div class="d-print-none">Hidden in print</div>
<div class="d-none d-print-block">Only visible in print</div>
```

## Flexbox Utilities

### Direction

```html
<div class="d-flex flex-row">Horizontal</div>
<div class="d-flex flex-row-reverse">Horizontal reversed</div>
<div class="d-flex flex-column">Vertical</div>
<div class="d-flex flex-column-reverse">Vertical reversed</div>
```

### Justify Content

```html
<div class="d-flex justify-content-start">Start</div>
<div class="d-flex justify-content-end">End</div>
<div class="d-flex justify-content-center">Center</div>
<div class="d-flex justify-content-between">Space between</div>
<div class="d-flex justify-content-around">Space around</div>
<div class="d-flex justify-content-evenly">Space evenly</div>
```

### Align Items

```html
<div class="d-flex align-items-start">Top</div>
<div class="d-flex align-items-end">Bottom</div>
<div class="d-flex align-items-center">Center</div>
<div class="d-flex align-items-baseline">Baseline</div>
<div class="d-flex align-items-stretch">Stretch</div>
```

### Align Self

```html
<div class="align-self-start">Top</div>
<div class="align-self-center">Center</div>
<div class="align-self-end">Bottom</div>
```

### Flex Wrap

```html
<div class="d-flex flex-wrap">Wrap</div>
<div class="d-flex flex-nowrap">No wrap</div>
<div class="d-flex flex-wrap-reverse">Wrap reverse</div>
```

### Flex Grow/Shrink

```html
<div class="flex-grow-0">Don't grow</div>
<div class="flex-grow-1">Grow to fill</div>
<div class="flex-shrink-0">Don't shrink</div>
<div class="flex-shrink-1">Can shrink</div>
<div class="flex-fill">Fill available space</div>
```

### Order

```html
<div class="order-0">First</div>
<div class="order-1">Second</div>
<div class="order-2">Third</div>
<div class="order-first">Very first (-1)</div>
<div class="order-last">Very last (6)</div>
```

## Background Utilities

```html
<div class="bg-primary">Primary</div>
<div class="bg-secondary">Secondary</div>
<div class="bg-success">Success</div>
<div class="bg-danger">Danger</div>
<div class="bg-warning">Warning</div>
<div class="bg-info">Info</div>
<div class="bg-light">Light</div>
<div class="bg-dark">Dark</div>
<div class="bg-body">Body</div>
<div class="bg-body-secondary">Body secondary</div>
<div class="bg-body-tertiary">Body tertiary</div>
<div class="bg-white">White</div>
<div class="bg-black">Black</div>
<div class="bg-transparent">Transparent</div>

<!-- Opacity -->
<div class="bg-primary bg-opacity-75">75%</div>
<div class="bg-primary bg-opacity-50">50%</div>
<div class="bg-primary bg-opacity-25">25%</div>
<div class="bg-primary bg-opacity-10">10%</div>

<!-- Gradient -->
<div class="bg-primary bg-gradient">Gradient</div>
```

## Border Utilities

```html
<!-- Add borders -->
<div class="border">All sides</div>
<div class="border-top">Top</div>
<div class="border-end">End</div>
<div class="border-bottom">Bottom</div>
<div class="border-start">Start</div>

<!-- Remove borders -->
<div class="border-0">No border</div>
<div class="border-top-0">No top border</div>

<!-- Border color -->
<div class="border border-primary">Primary</div>
<div class="border border-success">Success</div>
<div class="border border-danger">Danger</div>

<!-- Border width -->
<div class="border border-1">1px</div>
<div class="border border-2">2px</div>
<div class="border border-3">3px</div>
<div class="border border-4">4px</div>
<div class="border border-5">5px</div>

<!-- Border radius -->
<div class="rounded">Rounded</div>
<div class="rounded-0">No radius</div>
<div class="rounded-1">Small radius</div>
<div class="rounded-2">Default radius</div>
<div class="rounded-3">Large radius</div>
<div class="rounded-4">XL radius</div>
<div class="rounded-5">XXL radius</div>
<div class="rounded-circle">Circle</div>
<div class="rounded-pill">Pill</div>
<div class="rounded-top">Top only</div>
<div class="rounded-end">End only</div>
<div class="rounded-bottom">Bottom only</div>
<div class="rounded-start">Start only</div>
```

## Shadow Utilities

```html
<div class="shadow-none">No shadow</div>
<div class="shadow-sm">Small shadow</div>
<div class="shadow">Regular shadow</div>
<div class="shadow-lg">Large shadow</div>
```

## Sizing Utilities

### Width

```html
<div class="w-25">25% width</div>
<div class="w-50">50% width</div>
<div class="w-75">75% width</div>
<div class="w-100">100% width</div>
<div class="w-auto">Auto width</div>
<div class="mw-100">Max-width 100%</div>
<div class="vw-100">100vw</div>
<div class="min-vw-100">Min 100vw</div>
```

### Height

```html
<div class="h-25">25% height</div>
<div class="h-50">50% height</div>
<div class="h-75">75% height</div>
<div class="h-100">100% height</div>
<div class="h-auto">Auto height</div>
<div class="mh-100">Max-height 100%</div>
<div class="vh-100">100vh</div>
<div class="min-vh-100">Min 100vh</div>
```

## Overflow Utilities

```html
<div class="overflow-auto">Auto</div>
<div class="overflow-hidden">Hidden</div>
<div class="overflow-visible">Visible</div>
<div class="overflow-scroll">Scroll</div>

<div class="overflow-x-auto">Horizontal auto</div>
<div class="overflow-x-hidden">Horizontal hidden</div>
<div class="overflow-y-auto">Vertical auto</div>
<div class="overflow-y-hidden">Vertical hidden</div>
```

## Opacity Utilities

```html
<div class="opacity-100">100%</div>
<div class="opacity-75">75%</div>
<div class="opacity-50">50%</div>
<div class="opacity-25">25%</div>
<div class="opacity-0">0%</div>
```

## Visibility Utilities

```html
<div class="visible">Visible</div>
<div class="invisible">Invisible (takes space)</div>
```

## Z-Index Utilities

```html
<div class="z-n1">-1</div>
<div class="z-0">0</div>
<div class="z-1">1</div>
<div class="z-2">2</div>
<div class="z-3">3</div>
```

## Object Fit Utilities

```html
<img class="object-fit-contain" src="...">
<img class="object-fit-cover" src="...">
<img class="object-fit-fill" src="...">
<img class="object-fit-scale" src="...">
<img class="object-fit-none" src="...">
```

## Interaction Utilities

```html
<div class="user-select-all">Select all on click</div>
<div class="user-select-auto">Default selection</div>
<div class="user-select-none">Cannot select</div>
<div class="pe-none">Pointer events none</div>
<div class="pe-auto">Pointer events auto</div>
```

## Additional Resources

### Reference Files

- `references/utilities-reference.md` - Complete utility class reference
