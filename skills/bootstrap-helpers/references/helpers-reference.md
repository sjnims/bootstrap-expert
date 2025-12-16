# Helpers Reference

Complete reference for Bootstrap 5.3 helper classes.

## Clearfix

| Class | Description |
|-------|-------------|
| `.clearfix` | Clear floats within container |

## Color & Background

| Class | Description |
|-------|-------------|
| `.text-bg-primary` | Primary background with contrasting text |
| `.text-bg-secondary` | Secondary background with contrasting text |
| `.text-bg-success` | Success background with contrasting text |
| `.text-bg-danger` | Danger background with contrasting text |
| `.text-bg-warning` | Warning background with contrasting text |
| `.text-bg-info` | Info background with contrasting text |
| `.text-bg-light` | Light background with contrasting text |
| `.text-bg-dark` | Dark background with contrasting text |

## Colored Links

| Class | Description |
|-------|-------------|
| `.link-primary` | Primary colored link |
| `.link-secondary` | Secondary colored link |
| `.link-success` | Success colored link |
| `.link-danger` | Danger colored link |
| `.link-warning` | Warning colored link |
| `.link-info` | Info colored link |
| `.link-light` | Light colored link |
| `.link-dark` | Dark colored link |
| `.link-body-emphasis` | Body emphasis colored link |

### Link Opacity

| Class | Opacity |
|-------|---------|
| `.link-opacity-10` | 10% |
| `.link-opacity-25` | 25% |
| `.link-opacity-50` | 50% |
| `.link-opacity-75` | 75% |
| `.link-opacity-100` | 100% |
| `.link-opacity-10-hover` | 10% on hover |
| `.link-opacity-25-hover` | 25% on hover |
| `.link-opacity-50-hover` | 50% on hover |
| `.link-opacity-75-hover` | 75% on hover |
| `.link-opacity-100-hover` | 100% on hover |

### Link Underline

| Class | Description |
|-------|-------------|
| `.link-underline-primary` | Primary underline color |
| `.link-underline-{color}` | Other color underlines |
| `.link-underline-opacity-0` | No underline |
| `.link-underline-opacity-10` | 10% underline opacity |
| `.link-underline-opacity-25` | 25% underline opacity |
| `.link-underline-opacity-50` | 50% underline opacity |
| `.link-underline-opacity-75` | 75% underline opacity |
| `.link-underline-opacity-100` | 100% underline opacity |
| `.link-underline-opacity-0-hover` | No underline on hover |
| `.link-underline-opacity-10-hover` | 10% underline opacity on hover |
| `.link-underline-opacity-25-hover` | 25% underline opacity on hover |
| `.link-underline-opacity-50-hover` | 50% underline opacity on hover |
| `.link-underline-opacity-75-hover` | 75% underline opacity on hover |
| `.link-underline-opacity-100-hover` | 100% underline opacity on hover |

### Link Offset

| Class | Offset |
|-------|--------|
| `.link-offset-1` | 0.125em offset |
| `.link-offset-2` | 0.25em offset |
| `.link-offset-3` | 0.375em offset |
| `.link-offset-1-hover` | 0.125em offset on hover |
| `.link-offset-2-hover` | 0.25em offset on hover |
| `.link-offset-3-hover` | 0.375em offset on hover |

## Focus Ring

| Class | Description |
|-------|-------------|
| `.focus-ring` | Custom focus ring |
| `.focus-ring-primary` | Primary focus ring |
| `.focus-ring-secondary` | Secondary focus ring |
| `.focus-ring-success` | Success focus ring |
| `.focus-ring-danger` | Danger focus ring |
| `.focus-ring-warning` | Warning focus ring |
| `.focus-ring-info` | Info focus ring |
| `.focus-ring-light` | Light focus ring |
| `.focus-ring-dark` | Dark focus ring |

CSS variable: `--bs-focus-ring-color`

## Icon Link

| Class | Description |
|-------|-------------|
| `.icon-link` | Base icon link styling |
| `.icon-link-hover` | Add hover animation |

CSS variable: `--bs-icon-link-transform`

## Position

### Fixed

| Class | Description |
|-------|-------------|
| `.fixed-top` | Fixed to viewport top |
| `.fixed-bottom` | Fixed to viewport bottom |

### Sticky

| Class | Description |
|-------|-------------|
| `.sticky-top` | Sticky to top (all breakpoints) |
| `.sticky-sm-top` | Sticky to top on sm+ |
| `.sticky-md-top` | Sticky to top on md+ |
| `.sticky-lg-top` | Sticky to top on lg+ |
| `.sticky-xl-top` | Sticky to top on xl+ |
| `.sticky-xxl-top` | Sticky to top on xxl+ |
| `.sticky-bottom` | Sticky to bottom |
| `.sticky-{breakpoint}-bottom` | Responsive sticky bottom |

## Ratio

| Class | Aspect Ratio |
|-------|--------------|
| `.ratio` | Base class (required) |
| `.ratio-1x1` | 1:1 (square) |
| `.ratio-4x3` | 4:3 |
| `.ratio-16x9` | 16:9 (default) |
| `.ratio-21x9` | 21:9 |

CSS variable: `--bs-aspect-ratio`

## Stacks

| Class | Description |
|-------|-------------|
| `.vstack` | Vertical stack (flex-column) |
| `.hstack` | Horizontal stack (flex-row) |
| `.gap-{0-5}` | Gap between items |

## Stretched Link

| Class | Description |
|-------|-------------|
| `.stretched-link` | Make link stretch to parent |

Parent must have `position: relative`.

## Text Truncation

| Class | Description |
|-------|-------------|
| `.text-truncate` | Truncate with ellipsis |

Requires `display: block` or `display: inline-block` and fixed width.

## Vertical Rule

| Class | Description |
|-------|-------------|
| `.vr` | Vertical divider |

## Visually Hidden

| Class | Description |
|-------|-------------|
| `.visually-hidden` | Hide visually, keep accessible |
| `.visually-hidden-focusable` | Show when focused (skip links) |

## Common Patterns

### Skip Link

```html
<a class="visually-hidden-focusable" href="#main">
  Skip to main content
</a>
```

### Accessible Icon Button

```html
<button type="button" class="btn btn-primary">
  <svg class="bi" aria-hidden="true">...</svg>
  <span class="visually-hidden">Close</span>
</button>
```

### Clickable Card

```html
<div class="card">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <a href="#" class="stretched-link">Go somewhere</a>
  </div>
</div>
```

### Responsive Video

```html
<div class="ratio ratio-16x9">
  <iframe src="https://youtube.com/embed/..." allowfullscreen></iframe>
</div>
```

### Inline Form with Stack

```html
<form class="hstack gap-3">
  <input class="form-control" type="text" placeholder="Search...">
  <button type="submit" class="btn btn-primary">Search</button>
</form>
```
