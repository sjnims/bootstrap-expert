---
name: bootstrap-content
description: This skill should be used when the user asks about Bootstrap typography, Bootstrap headings, Bootstrap display headings, Bootstrap lead text, Bootstrap text alignment, Bootstrap text transform, Bootstrap text-lowercase, Bootstrap text-uppercase, Bootstrap text-capitalize, Bootstrap monospace font, Bootstrap font-monospace, Bootstrap text-reset, Bootstrap secondary heading text, Bootstrap RFS, Bootstrap responsive font sizes, Bootstrap images, Bootstrap responsive images, Bootstrap figures, Bootstrap tables, Bootstrap Reboot, Bootstrap blockquotes, Bootstrap lists, Bootstrap code blocks, Bootstrap inline code, Bootstrap kbd element, Bootstrap keyboard input styling, Bootstrap var element, Bootstrap samp element, Bootstrap address element, Bootstrap horizontal rules, Bootstrap abbreviations, or needs help with Bootstrap text and content styling.
---

# Bootstrap 5.3 Content

Bootstrap provides typography, image, table, and other content styles built on top of Reboot, a normalized baseline.

## Typography

### Headings

Standard HTML headings with Bootstrap styling:

```html
<h1>h1. Bootstrap heading</h1>  <!-- 2.5rem -->
<h2>h2. Bootstrap heading</h2>  <!-- 2rem -->
<h3>h3. Bootstrap heading</h3>  <!-- 1.75rem -->
<h4>h4. Bootstrap heading</h4>  <!-- 1.5rem -->
<h5>h5. Bootstrap heading</h5>  <!-- 1.25rem -->
<h6>h6. Bootstrap heading</h6>  <!-- 1rem -->

<!-- Heading classes for non-heading elements -->
<p class="h1">h1 styled paragraph</p>
<p class="h3">h3 styled paragraph</p>
```

### Display Headings

Larger, more opinionated headings:

```html
<h1 class="display-1">Display 1</h1>  <!-- 5rem -->
<h1 class="display-2">Display 2</h1>  <!-- 4.5rem -->
<h1 class="display-3">Display 3</h1>  <!-- 4rem -->
<h1 class="display-4">Display 4</h1>  <!-- 3.5rem -->
<h1 class="display-5">Display 5</h1>  <!-- 3rem -->
<h1 class="display-6">Display 6</h1>  <!-- 2.5rem -->
```

### Lead Text

Make a paragraph stand out:

```html
<p class="lead">
  This is a lead paragraph. It stands out from regular paragraphs.
</p>
```

### Inline Text Elements

```html
<mark>Highlighted text</mark>
<del>Deleted text</del>
<s>Strikethrough (no longer accurate)</s>
<ins>Inserted text</ins>
<u>Underlined text</u>
<small>Fine print</small>
<strong>Bold text</strong>
<em>Italicized text</em>
```

### Text Utilities

```html
<!-- Font size -->
<p class="fs-1">fs-1 text (2.5rem)</p>
<p class="fs-2">fs-2 text (2rem)</p>
<p class="fs-3">fs-3 text (1.75rem)</p>
<p class="fs-4">fs-4 text (1.5rem)</p>
<p class="fs-5">fs-5 text (1.25rem)</p>
<p class="fs-6">fs-6 text (1rem)</p>

<!-- Font weight -->
<p class="fw-bold">Bold text</p>
<p class="fw-bolder">Bolder text</p>
<p class="fw-semibold">Semibold text</p>
<p class="fw-medium">Medium text</p>
<p class="fw-normal">Normal text</p>
<p class="fw-light">Light text</p>
<p class="fw-lighter">Lighter text</p>

<!-- Font style -->
<p class="fst-italic">Italic text</p>
<p class="fst-normal">Normal style text</p>

<!-- Line height -->
<p class="lh-1">Line height 1</p>
<p class="lh-sm">Small line height (1.25)</p>
<p class="lh-base">Base line height (1.5)</p>
<p class="lh-lg">Large line height (2)</p>

<!-- Text decoration -->
<p class="text-decoration-underline">Underlined</p>
<p class="text-decoration-line-through">Line through</p>
<p class="text-decoration-none">No decoration</p>
```

### Text Alignment

```html
<p class="text-start">Left aligned (LTR)</p>
<p class="text-center">Center aligned</p>
<p class="text-end">Right aligned (LTR)</p>

<!-- Responsive alignment -->
<p class="text-sm-start text-md-center text-lg-end">
  Responsive alignment
</p>
```

### Text Wrapping and Overflow

```html
<p class="text-wrap">Wrapping text</p>
<p class="text-nowrap">No wrap text</p>
<p class="text-truncate" style="max-width: 200px;">
  Truncated text with ellipsis...
</p>
<p class="text-break">Break long words</p>
```

### Blockquotes

```html
<figure>
  <blockquote class="blockquote">
    <p>A well-known quote, contained in a blockquote element.</p>
  </blockquote>
  <figcaption class="blockquote-footer">
    Someone famous in <cite title="Source Title">Source Title</cite>
  </figcaption>
</figure>
```

### Lists

```html
<!-- Unstyled list -->
<ul class="list-unstyled">
  <li>No bullets</li>
  <li>On this list</li>
</ul>

<!-- Inline list -->
<ul class="list-inline">
  <li class="list-inline-item">First</li>
  <li class="list-inline-item">Second</li>
  <li class="list-inline-item">Third</li>
</ul>
```

### Text Transform

```html
<p class="text-lowercase">LOWERCASED TEXT</p>
<p class="text-uppercase">uppercased text</p>
<p class="text-capitalize">capitalized text</p>
```

### Monospace Font

```html
<p class="font-monospace">This is in monospace</p>
```

### Reset Color

```html
<!-- Inherit color from parent instead of link styling -->
<p class="text-muted">
  Muted text with a <a href="#" class="text-reset">reset link</a>.
</p>
```

### Customizing Headings

Add secondary, faded text to headings:

```html
<h3>
  Fancy display heading
  <small class="text-body-secondary">With faded secondary text</small>
</h3>

<h1 class="display-4">
  Display heading
  <small class="text-body-secondary">Secondary text</small>
</h1>
```

### Responsive Font Sizes

Bootstrap 5 enables RFS (Responsive Font Sizes) by default. This automatically scales `font-size` based on viewport dimensions, preventing text from becoming too large or too small on different devices. RFS applies to headings, display headings, and lead text.

## Reboot

Bootstrap Reboot normalizes default browser styles for consistent cross-browser rendering. Beyond the typography elements above, Reboot styles several important HTML elements.

### Code Elements

```html
<!-- Inline code -->
<p>Use <code>&lt;section&gt;</code> for page sections.</p>

<!-- Code blocks (use pre for preformatted text) -->
<pre><code>&lt;p&gt;Sample text here...&lt;/p&gt;
&lt;p&gt;And another line.&lt;/p&gt;</code></pre>

<!-- Variables -->
<var>y</var> = <var>m</var><var>x</var> + <var>b</var>

<!-- User input (keyboard) -->
<p>Press <kbd>Ctrl</kbd> + <kbd>C</kbd> to copy.</p>
<p>Or type <kbd>cd</kbd> to change directory.</p>

<!-- Nested kbd for key combinations -->
<kbd><kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>P</kbd></kbd>

<!-- Sample output -->
<samp>This text is meant to be sample output from a program.</samp>
```

### Address

```html
<address>
  <strong>Company Name</strong><br>
  123 Main Street<br>
  City, State 12345<br>
  <abbr title="Phone">P:</abbr> (123) 456-7890
</address>

<address>
  <strong>Full Name</strong><br>
  <a href="mailto:email@example.com">email@example.com</a>
</address>
```

### Horizontal Rules

```html
<!-- Basic horizontal rule -->
<hr>

<!-- Styled with border utilities -->
<hr class="border border-danger border-2 opacity-50">
<hr class="border border-primary border-3 opacity-75">

<!-- With margins -->
<hr class="my-5">
```

### Abbreviations

```html
<p><abbr title="Hypertext Markup Language">HTML</abbr> is the foundation of the web.</p>

<!-- Slightly smaller font size -->
<p><abbr title="Cascading Style Sheets" class="initialism">CSS</abbr> for styling.</p>
```

## Images

### Responsive Images

```html
<img src="..." class="img-fluid" alt="Responsive image">
```

### Image Thumbnails

```html
<img src="..." class="img-thumbnail" alt="Thumbnail">
```

### Aligning Images

```html
<img src="..." class="float-start" alt="Left aligned">
<img src="..." class="float-end" alt="Right aligned">

<!-- Centered block image -->
<img src="..." class="d-block mx-auto" alt="Centered">
```

### Picture Element

```html
<picture>
  <source srcset="large.jpg" media="(min-width: 992px)">
  <source srcset="medium.jpg" media="(min-width: 768px)">
  <img src="small.jpg" class="img-fluid" alt="Responsive">
</picture>
```

## Figures

```html
<figure class="figure">
  <img src="..." class="figure-img img-fluid rounded" alt="...">
  <figcaption class="figure-caption">A caption for the image.</figcaption>
</figure>

<!-- Right-aligned caption -->
<figure class="figure">
  <img src="..." class="figure-img img-fluid rounded" alt="...">
  <figcaption class="figure-caption text-end">Right-aligned caption.</figcaption>
</figure>
```

## Tables

### Basic Table

```html
<table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">Email</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>John</td>
      <td>john@example.com</td>
    </tr>
  </tbody>
</table>
```

### Table Variants

```html
<table class="table table-primary">...</table>
<table class="table table-secondary">...</table>
<table class="table table-success">...</table>
<table class="table table-danger">...</table>
<table class="table table-warning">...</table>
<table class="table table-info">...</table>
<table class="table table-light">...</table>
<table class="table table-dark">...</table>
```

### Table Styles

```html
<!-- Striped rows -->
<table class="table table-striped">...</table>

<!-- Striped columns -->
<table class="table table-striped-columns">...</table>

<!-- Hoverable rows -->
<table class="table table-hover">...</table>

<!-- Active rows/cells -->
<tr class="table-active">...</tr>

<!-- Bordered -->
<table class="table table-bordered">...</table>

<!-- Borderless -->
<table class="table table-borderless">...</table>

<!-- Small table -->
<table class="table table-sm">...</table>

<!-- Combine styles -->
<table class="table table-striped table-hover table-bordered">...</table>
```

### Responsive Tables

```html
<!-- Always responsive -->
<div class="table-responsive">
  <table class="table">...</table>
</div>

<!-- Responsive at breakpoint -->
<div class="table-responsive-md">
  <table class="table">...</table>
</div>
```

### Vertical Alignment

```html
<table class="table align-middle">
  <tr class="align-bottom">
    <td class="align-top">...</td>
  </tr>
</table>
```

See `references/typography-reference.md` for complete text utilities.

For content examples, see:

- `examples/tables.html` - Table styling examples
- `examples/reboot-elements.html` - Code, address, and hr styling examples
