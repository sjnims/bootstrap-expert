---
name: bootstrap-components
description: This skill should be used when the user asks about Bootstrap components, Bootstrap accordion, Bootstrap alerts, Bootstrap badges, Bootstrap breadcrumb, Bootstrap buttons, Bootstrap button groups, Bootstrap cards, Bootstrap carousel, Bootstrap close button, Bootstrap collapse, Bootstrap dropdowns, Bootstrap list group, Bootstrap modal, Bootstrap navbar, Bootstrap navs and tabs, Bootstrap offcanvas, Bootstrap pagination, Bootstrap placeholders, Bootstrap popovers, Bootstrap progress, Bootstrap scrollspy, Bootstrap spinners, Bootstrap toasts, Bootstrap tooltips, or needs help implementing any Bootstrap UI component.
---

# Bootstrap 5.3 Components

Bootstrap provides ready-to-use UI components for building interfaces. This skill covers all major components with usage patterns and best practices.

## Accordion

Collapsible content panels:

```html
<div class="accordion" id="accordionExample">
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne">
        Accordion Item #1
      </button>
    </h2>
    <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
      <div class="accordion-body">Content for first item.</div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo">
        Accordion Item #2
      </button>
    </h2>
    <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div class="accordion-body">Content for second item.</div>
    </div>
  </div>
</div>

<!-- Flush (no borders) -->
<div class="accordion accordion-flush">...</div>

<!-- Always open (no parent) -->
<div id="collapseOne" class="accordion-collapse collapse show">...</div>
```

## Alerts

Contextual feedback messages:

```html
<div class="alert alert-primary" role="alert">A primary alert</div>
<div class="alert alert-success" role="alert">A success alert</div>
<div class="alert alert-danger" role="alert">A danger alert</div>
<div class="alert alert-warning" role="alert">A warning alert</div>

<!-- With link -->
<div class="alert alert-info">
  Check <a href="#" class="alert-link">this link</a>.
</div>

<!-- With heading and content -->
<div class="alert alert-success">
  <h4 class="alert-heading">Well done!</h4>
  <p>You successfully completed the task.</p>
  <hr>
  <p class="mb-0">Additional information here.</p>
</div>

<!-- Dismissible -->
<div class="alert alert-warning alert-dismissible fade show" role="alert">
  Dismissible alert!
  <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>
```

## Badges

Labels and counters:

```html
<span class="badge bg-primary">Primary</span>
<span class="badge bg-secondary">Secondary</span>
<span class="badge bg-success">Success</span>
<span class="badge bg-danger">Danger</span>
<span class="badge bg-warning text-dark">Warning</span>
<span class="badge bg-info text-dark">Info</span>

<!-- Pill badges -->
<span class="badge rounded-pill bg-primary">Pill</span>

<!-- As button counter -->
<button class="btn btn-primary">
  Notifications <span class="badge bg-secondary">4</span>
</button>

<!-- Positioned -->
<button class="btn btn-primary position-relative">
  Inbox
  <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
    99+
    <span class="visually-hidden">unread messages</span>
  </span>
</button>
```

## Breadcrumb

Navigation hierarchy:

```html
<nav aria-label="breadcrumb">
  <ol class="breadcrumb">
    <li class="breadcrumb-item"><a href="#">Home</a></li>
    <li class="breadcrumb-item"><a href="#">Library</a></li>
    <li class="breadcrumb-item active" aria-current="page">Data</li>
  </ol>
</nav>

<!-- Custom divider -->
<nav style="--bs-breadcrumb-divider: '>';">
  <ol class="breadcrumb">...</ol>
</nav>
```

## Buttons

```html
<!-- Variants -->
<button class="btn btn-primary">Primary</button>
<button class="btn btn-secondary">Secondary</button>
<button class="btn btn-success">Success</button>
<button class="btn btn-danger">Danger</button>
<button class="btn btn-warning">Warning</button>
<button class="btn btn-info">Info</button>
<button class="btn btn-light">Light</button>
<button class="btn btn-dark">Dark</button>
<button class="btn btn-link">Link</button>

<!-- Outline variants -->
<button class="btn btn-outline-primary">Outline Primary</button>

<!-- Sizes -->
<button class="btn btn-lg btn-primary">Large</button>
<button class="btn btn-sm btn-primary">Small</button>

<!-- Block button -->
<div class="d-grid">
  <button class="btn btn-primary">Block button</button>
</div>

<!-- States -->
<button class="btn btn-primary" disabled>Disabled</button>
<button class="btn btn-primary active">Active</button>
```

## Button Group

```html
<div class="btn-group" role="group" aria-label="Basic example">
  <button type="button" class="btn btn-primary">Left</button>
  <button type="button" class="btn btn-primary">Middle</button>
  <button type="button" class="btn btn-primary">Right</button>
</div>

<!-- Toolbar -->
<div class="btn-toolbar" role="toolbar">
  <div class="btn-group me-2">...</div>
  <div class="btn-group">...</div>
</div>

<!-- Vertical -->
<div class="btn-group-vertical">...</div>
```

## Cards

Flexible content containers:

```html
<div class="card" style="width: 18rem;">
  <img src="..." class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>

<!-- Card with header/footer -->
<div class="card">
  <div class="card-header">Featured</div>
  <div class="card-body">
    <h5 class="card-title">Special title</h5>
    <p class="card-text">Content</p>
  </div>
  <div class="card-footer text-muted">2 days ago</div>
</div>

<!-- List group in card -->
<div class="card">
  <div class="card-header">Featured</div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">Item 1</li>
    <li class="list-group-item">Item 2</li>
  </ul>
</div>

<!-- Card grid -->
<div class="row row-cols-1 row-cols-md-3 g-4">
  <div class="col">
    <div class="card h-100">...</div>
  </div>
</div>
```

## Carousel

Slideshow component:

```html
<div id="carouselExample" class="carousel slide">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="..." class="d-block w-100" alt="...">
    </div>
    <div class="carousel-item">
      <img src="..." class="d-block w-100" alt="...">
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>

<!-- With indicators -->
<div class="carousel-indicators">
  <button type="button" data-bs-target="#carouselExample" data-bs-slide-to="0" class="active"></button>
  <button type="button" data-bs-target="#carouselExample" data-bs-slide-to="1"></button>
</div>

<!-- With captions -->
<div class="carousel-item">
  <img src="..." class="d-block w-100" alt="...">
  <div class="carousel-caption d-none d-md-block">
    <h5>Slide label</h5>
    <p>Description text.</p>
  </div>
</div>

<!-- Autoplay -->
<div class="carousel slide" data-bs-ride="carousel">...</div>
```

## Close Button

Generic close button for dismissing content:

```html
<!-- Basic close button -->
<button type="button" class="btn-close" aria-label="Close"></button>

<!-- Disabled state -->
<button type="button" class="btn-close" disabled aria-label="Close"></button>

<!-- White variant (for dark backgrounds) -->
<div class="bg-dark p-3">
  <button type="button" class="btn-close btn-close-white" aria-label="Close"></button>
</div>

<!-- Used in alert -->
<div class="alert alert-warning alert-dismissible fade show" role="alert">
  Alert content
  <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>

<!-- Used in modal header -->
<div class="modal-header">
  <h5 class="modal-title">Modal title</h5>
  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
</div>

<!-- Used in toast header -->
<div class="toast-header">
  <strong class="me-auto">Toast title</strong>
  <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
</div>

<!-- Used in offcanvas -->
<div class="offcanvas-header">
  <h5 class="offcanvas-title">Offcanvas title</h5>
  <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
</div>
```

## Collapse

Toggle content visibility:

```html
<button class="btn btn-primary" data-bs-toggle="collapse" data-bs-target="#collapseExample">
  Toggle
</button>
<div class="collapse" id="collapseExample">
  <div class="card card-body">
    Collapsible content here.
  </div>
</div>

<!-- Horizontal collapse -->
<div class="collapse collapse-horizontal" id="collapseWidthExample">
  <div class="card card-body" style="width: 300px;">
    Horizontal content
  </div>
</div>
```

## Dropdowns

```html
<div class="dropdown">
  <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown">
    Dropdown button
  </button>
  <ul class="dropdown-menu">
    <li><a class="dropdown-item" href="#">Action</a></li>
    <li><a class="dropdown-item" href="#">Another action</a></li>
    <li><hr class="dropdown-divider"></li>
    <li><a class="dropdown-item" href="#">Separated link</a></li>
  </ul>
</div>

<!-- Directions -->
<div class="dropup">...</div>
<div class="dropend">...</div>
<div class="dropstart">...</div>

<!-- Dark dropdown -->
<ul class="dropdown-menu dropdown-menu-dark">...</ul>

<!-- With headers -->
<li><h6 class="dropdown-header">Header</h6></li>

<!-- Disabled item -->
<li><a class="dropdown-item disabled" href="#">Disabled</a></li>
```

## List Group

```html
<ul class="list-group">
  <li class="list-group-item">An item</li>
  <li class="list-group-item active">Active item</li>
  <li class="list-group-item disabled">Disabled item</li>
</ul>

<!-- Links/buttons -->
<div class="list-group">
  <a href="#" class="list-group-item list-group-item-action active">Active link</a>
  <a href="#" class="list-group-item list-group-item-action">Link</a>
</div>

<!-- Flush (no borders) -->
<ul class="list-group list-group-flush">...</ul>

<!-- Horizontal -->
<ul class="list-group list-group-horizontal">...</ul>

<!-- With badges -->
<li class="list-group-item d-flex justify-content-between align-items-center">
  Item
  <span class="badge bg-primary rounded-pill">14</span>
</li>
```

## Modal

```html
<!-- Trigger button -->
<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
  Launch modal
</button>

<!-- Modal -->
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        Modal content here.
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>

<!-- Sizes -->
<div class="modal-dialog modal-sm">...</div>
<div class="modal-dialog modal-lg">...</div>
<div class="modal-dialog modal-xl">...</div>

<!-- Centered -->
<div class="modal-dialog modal-dialog-centered">...</div>

<!-- Scrollable -->
<div class="modal-dialog modal-dialog-scrollable">...</div>

<!-- Static backdrop -->
<div class="modal" data-bs-backdrop="static" data-bs-keyboard="false">...</div>
```

## Navbar

```html
<nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Features</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">Dropdown</a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Action</a></li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</nav>

<!-- Color schemes -->
<nav class="navbar bg-dark" data-bs-theme="dark">...</nav>
<nav class="navbar bg-primary" data-bs-theme="dark">...</nav>

<!-- Placement -->
<nav class="navbar fixed-top">...</nav>
<nav class="navbar fixed-bottom">...</nav>
<nav class="navbar sticky-top">...</nav>
```

## Navs and Tabs

Base navigation component with multiple styles:

```html
<!-- Basic nav -->
<ul class="nav">
  <li class="nav-item">
    <a class="nav-link active" aria-current="page" href="#">Active</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Link</a>
  </li>
  <li class="nav-item">
    <a class="nav-link disabled" aria-disabled="true">Disabled</a>
  </li>
</ul>

<!-- Tabs style -->
<ul class="nav nav-tabs">
  <li class="nav-item">
    <a class="nav-link active" href="#">Active</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Link</a>
  </li>
</ul>

<!-- Pills style -->
<ul class="nav nav-pills">
  <li class="nav-item">
    <a class="nav-link active" href="#">Active</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Link</a>
  </li>
</ul>

<!-- Underline style -->
<ul class="nav nav-underline">
  <li class="nav-item">
    <a class="nav-link active" href="#">Active</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Link</a>
  </li>
</ul>

<!-- Fill/justify -->
<ul class="nav nav-pills nav-fill">...</ul>
<ul class="nav nav-pills nav-justified">...</ul>

<!-- Vertical -->
<ul class="nav flex-column">...</ul>

<!-- Tabs with content -->
<ul class="nav nav-tabs" role="tablist">
  <li class="nav-item" role="presentation">
    <button class="nav-link active" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab">Home</button>
  </li>
  <li class="nav-item" role="presentation">
    <button class="nav-link" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab">Profile</button>
  </li>
</ul>
<div class="tab-content">
  <div class="tab-pane fade show active" id="home" role="tabpanel">Home content...</div>
  <div class="tab-pane fade" id="profile" role="tabpanel">Profile content...</div>
</div>

<!-- Pills with content -->
<ul class="nav nav-pills" role="tablist">
  <li class="nav-item" role="presentation">
    <button class="nav-link active" data-bs-toggle="pill" data-bs-target="#v-home" type="button" role="tab">Home</button>
  </li>
</ul>
```

## Offcanvas

Slide-out sidebars:

```html
<button class="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample">
  Toggle offcanvas
</button>

<div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasExample">
  <div class="offcanvas-header">
    <h5 class="offcanvas-title">Offcanvas</h5>
    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body">
    Content here.
  </div>
</div>

<!-- Placement -->
<div class="offcanvas offcanvas-start">...</div>  <!-- Left -->
<div class="offcanvas offcanvas-end">...</div>    <!-- Right -->
<div class="offcanvas offcanvas-top">...</div>    <!-- Top -->
<div class="offcanvas offcanvas-bottom">...</div> <!-- Bottom -->
```

## Pagination

```html
<nav aria-label="Page navigation">
  <ul class="pagination">
    <li class="page-item"><a class="page-link" href="#">Previous</a></li>
    <li class="page-item"><a class="page-link" href="#">1</a></li>
    <li class="page-item active"><a class="page-link" href="#">2</a></li>
    <li class="page-item"><a class="page-link" href="#">3</a></li>
    <li class="page-item"><a class="page-link" href="#">Next</a></li>
  </ul>
</nav>

<!-- Sizes -->
<ul class="pagination pagination-lg">...</ul>
<ul class="pagination pagination-sm">...</ul>

<!-- Alignment -->
<ul class="pagination justify-content-center">...</ul>
<ul class="pagination justify-content-end">...</ul>
```

## Placeholders

Loading placeholders for content that hasn't loaded yet:

```html
<!-- Basic placeholder -->
<p class="placeholder-glow">
  <span class="placeholder col-6"></span>
</p>

<!-- Card with placeholders -->
<div class="card">
  <div class="card-body">
    <h5 class="card-title placeholder-glow">
      <span class="placeholder col-6"></span>
    </h5>
    <p class="card-text placeholder-glow">
      <span class="placeholder col-7"></span>
      <span class="placeholder col-4"></span>
      <span class="placeholder col-4"></span>
      <span class="placeholder col-6"></span>
      <span class="placeholder col-8"></span>
    </p>
    <a class="btn btn-primary disabled placeholder col-6" aria-disabled="true"></a>
  </div>
</div>

<!-- Sizing -->
<span class="placeholder col-12"></span>
<span class="placeholder placeholder-lg col-12"></span>
<span class="placeholder placeholder-sm col-12"></span>
<span class="placeholder placeholder-xs col-12"></span>

<!-- Colors -->
<span class="placeholder col-12 bg-primary"></span>
<span class="placeholder col-12 bg-secondary"></span>
<span class="placeholder col-12 bg-success"></span>
<span class="placeholder col-12 bg-danger"></span>

<!-- Animation types -->
<p class="placeholder-glow">
  <span class="placeholder col-12"></span>
</p>
<p class="placeholder-wave">
  <span class="placeholder col-12"></span>
</p>
```

## Popovers

Overlay with rich content, triggered on click:

```html
<!-- Basic popover -->
<button type="button" class="btn btn-lg btn-danger" data-bs-toggle="popover"
  title="Popover title" data-bs-content="And here's some amazing content.">
  Click to toggle popover
</button>

<!-- Directions -->
<button type="button" class="btn btn-secondary" data-bs-toggle="popover"
  data-bs-placement="top" data-bs-content="Top popover">
  Popover on top
</button>
<button type="button" class="btn btn-secondary" data-bs-toggle="popover"
  data-bs-placement="right" data-bs-content="Right popover">
  Popover on right
</button>
<button type="button" class="btn btn-secondary" data-bs-toggle="popover"
  data-bs-placement="bottom" data-bs-content="Bottom popover">
  Popover on bottom
</button>
<button type="button" class="btn btn-secondary" data-bs-toggle="popover"
  data-bs-placement="left" data-bs-content="Left popover">
  Popover on left
</button>

<!-- Dismiss on next click -->
<a tabindex="0" class="btn btn-lg btn-danger" role="button" data-bs-toggle="popover"
  data-bs-trigger="focus" title="Dismissible popover"
  data-bs-content="Click anywhere to dismiss.">
  Dismissible popover
</a>

<!-- Hover trigger -->
<button type="button" class="btn btn-secondary" data-bs-toggle="popover"
  data-bs-trigger="hover focus" data-bs-content="Hover popover">
  Hover me
</button>

<!-- HTML content -->
<button type="button" class="btn btn-secondary" data-bs-toggle="popover"
  data-bs-html="true" title="<em>HTML</em> title"
  data-bs-content="<b>Bold</b> and <u>underlined</u> content.">
  HTML Popover
</button>
```

Popovers require JavaScript initialization:

```javascript
const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]');
const popoverList = [...popoverTriggerList].map(el => new bootstrap.Popover(el));
```

## Progress

```html
<div class="progress" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
  <div class="progress-bar" style="width: 25%"></div>
</div>

<!-- With label -->
<div class="progress">
  <div class="progress-bar" style="width: 25%">25%</div>
</div>

<!-- Colors -->
<div class="progress-bar bg-success" style="width: 25%"></div>
<div class="progress-bar bg-info" style="width: 50%"></div>
<div class="progress-bar bg-warning" style="width: 75%"></div>
<div class="progress-bar bg-danger" style="width: 100%"></div>

<!-- Striped -->
<div class="progress-bar progress-bar-striped" style="width: 50%"></div>

<!-- Animated stripes -->
<div class="progress-bar progress-bar-striped progress-bar-animated" style="width: 75%"></div>
```

## Scrollspy

Automatically update navigation based on scroll position:

```html
<!-- Navbar with scrollspy -->
<nav id="navbar-example" class="navbar bg-body-tertiary px-3 mb-3">
  <a class="navbar-brand" href="#">Navbar</a>
  <ul class="nav nav-pills">
    <li class="nav-item">
      <a class="nav-link" href="#scrollspyHeading1">First</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#scrollspyHeading2">Second</a>
    </li>
    <li class="nav-item dropdown">
      <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#">Dropdown</a>
      <ul class="dropdown-menu">
        <li><a class="dropdown-item" href="#scrollspyHeading3">Third</a></li>
        <li><a class="dropdown-item" href="#scrollspyHeading4">Fourth</a></li>
      </ul>
    </li>
  </ul>
</nav>

<!-- Scrollable content area with data attributes -->
<div data-bs-spy="scroll" data-bs-target="#navbar-example" data-bs-root-margin="0px 0px -40%"
  data-bs-smooth-scroll="true" class="scrollspy-example bg-body-tertiary p-3 rounded-2" tabindex="0">
  <h4 id="scrollspyHeading1">First heading</h4>
  <p>Content for first section...</p>
  <h4 id="scrollspyHeading2">Second heading</h4>
  <p>Content for second section...</p>
  <h4 id="scrollspyHeading3">Third heading</h4>
  <p>Content for third section...</p>
  <h4 id="scrollspyHeading4">Fourth heading</h4>
  <p>Content for fourth section...</p>
</div>

<!-- List group with scrollspy -->
<div class="row">
  <div class="col-4">
    <div id="list-example" class="list-group">
      <a class="list-group-item list-group-item-action" href="#list-item-1">Item 1</a>
      <a class="list-group-item list-group-item-action" href="#list-item-2">Item 2</a>
      <a class="list-group-item list-group-item-action" href="#list-item-3">Item 3</a>
    </div>
  </div>
  <div class="col-8">
    <div data-bs-spy="scroll" data-bs-target="#list-example" data-bs-smooth-scroll="true"
      class="scrollspy-example" tabindex="0">
      <h4 id="list-item-1">Item 1</h4>
      <p>Content...</p>
      <h4 id="list-item-2">Item 2</h4>
      <p>Content...</p>
      <h4 id="list-item-3">Item 3</h4>
      <p>Content...</p>
    </div>
  </div>
</div>
```

Key data attributes:
- `data-bs-spy="scroll"` - Enable scrollspy on element
- `data-bs-target` - Navigation element to highlight
- `data-bs-root-margin` - Intersection Observer rootMargin
- `data-bs-smooth-scroll="true"` - Enable smooth scrolling

## Spinners

```html
<!-- Border spinner -->
<div class="spinner-border" role="status">
  <span class="visually-hidden">Loading...</span>
</div>

<!-- Growing spinner -->
<div class="spinner-grow" role="status">
  <span class="visually-hidden">Loading...</span>
</div>

<!-- Colors -->
<div class="spinner-border text-primary"></div>
<div class="spinner-border text-success"></div>

<!-- Sizes -->
<div class="spinner-border spinner-border-sm"></div>

<!-- In button -->
<button class="btn btn-primary" disabled>
  <span class="spinner-border spinner-border-sm"></span>
  Loading...
</button>
```

## Toasts

```html
<div class="toast" role="alert" aria-live="assertive" aria-atomic="true">
  <div class="toast-header">
    <strong class="me-auto">Bootstrap</strong>
    <small>11 mins ago</small>
    <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
  </div>
  <div class="toast-body">
    Hello, world! This is a toast message.
  </div>
</div>

<!-- Container for stacking -->
<div class="toast-container position-fixed bottom-0 end-0 p-3">
  <div class="toast">...</div>
  <div class="toast">...</div>
</div>
```

Toasts require JavaScript initialization:
```javascript
const toastEl = document.querySelector('.toast');
const toast = new bootstrap.Toast(toastEl);
toast.show();
```

## Tooltips

Tooltips require initialization:

```html
<button type="button" class="btn btn-secondary" data-bs-toggle="tooltip" data-bs-placement="top" title="Tooltip text">
  Hover me
</button>

<!-- Initialize all tooltips -->
<script>
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
const tooltipList = [...tooltipTriggerList].map(el => new bootstrap.Tooltip(el));
</script>

<!-- Placements -->
data-bs-placement="top"
data-bs-placement="right"
data-bs-placement="bottom"
data-bs-placement="left"

<!-- HTML content -->
data-bs-html="true" title="<em>Tooltip</em> <u>with</u> <b>HTML</b>"
```

See `references/components-reference.md` for complete component API reference and `examples/` for component patterns.
