---
name: bootstrap-components
description: This skill should be used when the user asks about Bootstrap components, Bootstrap accordion, Bootstrap alerts, Bootstrap badges, Bootstrap breadcrumb, Bootstrap buttons, Bootstrap button groups, Bootstrap cards, Bootstrap carousel, Bootstrap close button, Bootstrap collapse, Bootstrap dropdowns, Bootstrap list group, Bootstrap modal, Bootstrap navbar, Bootstrap navs and tabs, Bootstrap offcanvas, Bootstrap pagination, Bootstrap placeholders, Bootstrap popovers, Bootstrap progress, Bootstrap scrollspy, Bootstrap spinners, Bootstrap toasts, Bootstrap tooltips, or needs help implementing any Bootstrap UI component.
---

# Bootstrap 5.3 Components

Bootstrap provides ready-to-use UI components for building interfaces. This skill covers all major components with usage patterns, JavaScript initialization requirements, and accessibility best practices.

**JavaScript Initialization Overview:** Some components work purely with data attributes, while others require JavaScript initialization. Components marked with **Requires JS** below won't function without explicit initialization.

| Component | Requires JS Init | Data Attributes Only |
|-----------|------------------|----------------------|
| Tooltip | Yes | No |
| Popover | Yes | No |
| Toast | Yes (to show) | No |
| Scrollspy | Optional | Yes |
| Modal | Optional | Yes |
| Carousel | Optional | Yes |
| Collapse | Optional | Yes |
| Dropdown | Optional | Yes |

## Accordion

To create collapsible content panels that show one section at a time, use the accordion component. Accordions are ideal for FAQs, settings panels, or any content that benefits from progressive disclosure.

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

<!-- Flush variant (removes outer borders) -->
<div class="accordion accordion-flush">...</div>

<!-- Always open (remove data-bs-parent to allow multiple open panels) -->
<div id="collapseOne" class="accordion-collapse collapse show">...</div>
```

**Accessibility:** The accordion button automatically manages `aria-expanded` state. Ensure each `accordion-collapse` has a unique `id` that matches its trigger's `data-bs-target`.

## Alerts

To display contextual feedback messages, use the alert component with contextual color variants. Alerts communicate success, warnings, errors, or informational messages to users.

```html
<div class="alert alert-primary" role="alert">A primary alert</div>
<div class="alert alert-success" role="alert">A success alert</div>
<div class="alert alert-danger" role="alert">A danger alert</div>
<div class="alert alert-warning" role="alert">A warning alert</div>

<!-- With styled link -->
<div class="alert alert-info" role="alert">
  Check <a href="#" class="alert-link">this link</a>.
</div>

<!-- With heading and structured content -->
<div class="alert alert-success" role="alert">
  <h4 class="alert-heading">Well done!</h4>
  <p>You successfully completed the task.</p>
  <hr>
  <p class="mb-0">Additional information here.</p>
</div>

<!-- Dismissible alert -->
<div class="alert alert-warning alert-dismissible fade show" role="alert">
  Dismissible alert!
  <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>
```

**Accessibility:** Always include `role="alert"` for important messages. For dismissible alerts, the close button must have `aria-label="Close"`. Screen readers announce alerts automatically when they appear in the DOM.

## Badges

To add labels, counters, or status indicators to elements, use the badge component. Badges work well for notification counts, status labels, or categorization tags.

```html
<span class="badge bg-primary">Primary</span>
<span class="badge bg-secondary">Secondary</span>
<span class="badge bg-success">Success</span>
<span class="badge bg-danger">Danger</span>
<span class="badge bg-warning text-dark">Warning</span>
<span class="badge bg-info text-dark">Info</span>

<!-- Pill badges (fully rounded) -->
<span class="badge rounded-pill bg-primary">Pill</span>

<!-- As button counter -->
<button class="btn btn-primary">
  Notifications <span class="badge bg-secondary">4</span>
</button>

<!-- Positioned notification badge -->
<button class="btn btn-primary position-relative">
  Inbox
  <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
    99+
    <span class="visually-hidden">unread messages</span>
  </span>
</button>
```

**Accessibility:** When using badges as counters, include `visually-hidden` text to provide context for screen readers. The visible badge alone ("99+") lacks context without the hidden "unread messages" text.

## Breadcrumb

To show navigation hierarchy and help users understand their location within a site, use the breadcrumb component. Breadcrumbs improve navigation UX on multi-level sites.

```html
<nav aria-label="breadcrumb">
  <ol class="breadcrumb">
    <li class="breadcrumb-item"><a href="#">Home</a></li>
    <li class="breadcrumb-item"><a href="#">Library</a></li>
    <li class="breadcrumb-item active" aria-current="page">Data</li>
  </ol>
</nav>

<!-- Custom divider using CSS variable -->
<nav style="--bs-breadcrumb-divider: '>';" aria-label="breadcrumb">
  <ol class="breadcrumb">...</ol>
</nav>
```

**Accessibility:** Wrap breadcrumbs in a `<nav>` element with `aria-label="breadcrumb"`. Mark the current page with `aria-current="page"` on the active item.

## Buttons

To create interactive button elements, use the button component with contextual color variants. Buttons trigger actions and should clearly indicate their purpose.

```html
<!-- Contextual variants -->
<button class="btn btn-primary">Primary</button>
<button class="btn btn-secondary">Secondary</button>
<button class="btn btn-success">Success</button>
<button class="btn btn-danger">Danger</button>
<button class="btn btn-warning">Warning</button>
<button class="btn btn-info">Info</button>
<button class="btn btn-light">Light</button>
<button class="btn btn-dark">Dark</button>
<button class="btn btn-link">Link</button>

<!-- Outline variants (transparent background) -->
<button class="btn btn-outline-primary">Outline Primary</button>

<!-- Sizes -->
<button class="btn btn-lg btn-primary">Large</button>
<button class="btn btn-sm btn-primary">Small</button>

<!-- Block button (full width) -->
<div class="d-grid">
  <button class="btn btn-primary">Block button</button>
</div>

<!-- States -->
<button class="btn btn-primary" disabled>Disabled</button>
<button class="btn btn-primary active">Active</button>
```

**Accessibility:** Use `<button>` elements for actions and `<a>` elements for navigation. For disabled buttons, the `disabled` attribute prevents interaction and announces the disabled state to screen readers.

## Button Group

To group related buttons together visually and semantically, use the button group component. Button groups are useful for toolbars, segmented controls, or related action sets.

```html
<div class="btn-group" role="group" aria-label="Basic example">
  <button type="button" class="btn btn-primary">Left</button>
  <button type="button" class="btn btn-primary">Middle</button>
  <button type="button" class="btn btn-primary">Right</button>
</div>

<!-- Toolbar (multiple button groups) -->
<div class="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">
  <div class="btn-group me-2" role="group" aria-label="First group">...</div>
  <div class="btn-group" role="group" aria-label="Second group">...</div>
</div>

<!-- Vertical button group -->
<div class="btn-group-vertical" role="group" aria-label="Vertical button group">...</div>
```

**Accessibility:** Always include `role="group"` and `aria-label` on button groups to describe their purpose. For toolbars, use `role="toolbar"` on the container.

## Cards

To create flexible content containers with headers, footers, images, and various content types, use the card component. Cards are versatile building blocks for displaying related content.

```html
<div class="card" style="width: 18rem;">
  <img src="..." class="card-img-top" alt="Card image description">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>

<!-- Card with header and footer -->
<div class="card">
  <div class="card-header">Featured</div>
  <div class="card-body">
    <h5 class="card-title">Special title</h5>
    <p class="card-text">Content</p>
  </div>
  <div class="card-footer text-muted">2 days ago</div>
</div>

<!-- Card with list group -->
<div class="card">
  <div class="card-header">Featured</div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">Item 1</li>
    <li class="list-group-item">Item 2</li>
  </ul>
</div>

<!-- Card grid layout -->
<div class="row row-cols-1 row-cols-md-3 g-4">
  <div class="col">
    <div class="card h-100">...</div>
  </div>
</div>
```

**Accessibility:** Always provide meaningful `alt` text for card images. Use semantic heading elements (`<h5>`, `<h6>`) for card titles to maintain document outline.

## Carousel

To create an image slideshow with optional controls and indicators, use the carousel component. Carousels cycle through content automatically or on user interaction.

```html
<div id="carouselExample" class="carousel slide">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="..." class="d-block w-100" alt="First slide description">
    </div>
    <div class="carousel-item">
      <img src="..." class="d-block w-100" alt="Second slide description">
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

<!-- With slide indicators -->
<div class="carousel-indicators">
  <button type="button" data-bs-target="#carouselExample" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
  <button type="button" data-bs-target="#carouselExample" data-bs-slide-to="1" aria-label="Slide 2"></button>
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

**JavaScript (optional):** Control carousel programmatically:

```javascript
const carousel = new bootstrap.Carousel('#carouselExample', {
  interval: 5000,  // Time between slides (ms)
  wrap: true,      // Cycle continuously
  pause: 'hover'   // Pause on mouse hover
});

// Methods
carousel.next();
carousel.prev();
carousel.pause();
```

**Accessibility:** Provide descriptive `alt` text for all images. Include `visually-hidden` text in controls. Consider users who prefer reduced motion by respecting `prefers-reduced-motion` media query (Bootstrap handles this automatically).

## Close Button

To create a generic dismiss button for alerts, modals, toasts, and other dismissible content, use the close button component. Close buttons provide consistent dismissal UI across components.

```html
<!-- Basic close button -->
<button type="button" class="btn-close" aria-label="Close"></button>

<!-- Disabled state -->
<button type="button" class="btn-close" disabled aria-label="Close"></button>

<!-- White variant for dark backgrounds -->
<div class="bg-dark p-3">
  <button type="button" class="btn-close btn-close-white" aria-label="Close"></button>
</div>

<!-- In alert -->
<div class="alert alert-warning alert-dismissible fade show" role="alert">
  Alert content
  <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>

<!-- In modal header -->
<div class="modal-header">
  <h5 class="modal-title">Modal title</h5>
  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
</div>

<!-- In toast header -->
<div class="toast-header">
  <strong class="me-auto">Toast title</strong>
  <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
</div>
```

**Accessibility:** Always include `aria-label="Close"` since the button has no visible text. The `data-bs-dismiss` attribute specifies which parent component to dismiss.

## Collapse

To toggle the visibility of content with smooth animations, use the collapse component. Collapse is useful for expandable sections, show/hide functionality, and accordion-like behavior.

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
<button class="btn btn-primary" data-bs-toggle="collapse" data-bs-target="#collapseWidthExample">
  Toggle width
</button>
<div class="collapse collapse-horizontal" id="collapseWidthExample">
  <div class="card card-body" style="width: 300px;">
    Horizontal content
  </div>
</div>

<!-- Multiple targets -->
<button class="btn btn-primary" data-bs-toggle="collapse" data-bs-target=".multi-collapse">
  Toggle both
</button>
<div class="collapse multi-collapse" id="multiCollapseOne">First content</div>
<div class="collapse multi-collapse" id="multiCollapseTwo">Second content</div>
```

**JavaScript (optional):** Control collapse programmatically:

```javascript
const collapse = new bootstrap.Collapse('#collapseExample', {
  toggle: false  // Don't toggle on init
});

collapse.show();
collapse.hide();
collapse.toggle();
```

**Accessibility:** The trigger element automatically manages `aria-expanded` state. Ensure the `data-bs-target` matches the collapse element's `id`.

## Dropdowns

To create toggleable contextual menus for displaying lists of links and actions, use the dropdown component. Dropdowns work via data attributes or JavaScript.

```html
<div class="dropdown">
  <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    Dropdown button
  </button>
  <ul class="dropdown-menu">
    <li><a class="dropdown-item" href="#">Action</a></li>
    <li><a class="dropdown-item" href="#">Another action</a></li>
    <li><hr class="dropdown-divider"></li>
    <li><a class="dropdown-item" href="#">Separated link</a></li>
  </ul>
</div>

<!-- Direction variants -->
<div class="dropup">...</div>    <!-- Opens upward -->
<div class="dropend">...</div>   <!-- Opens to the right -->
<div class="dropstart">...</div> <!-- Opens to the left -->

<!-- Dark dropdown menu -->
<ul class="dropdown-menu dropdown-menu-dark">...</ul>

<!-- With headers -->
<li><h6 class="dropdown-header">Header</h6></li>

<!-- Disabled item -->
<li><a class="dropdown-item disabled" href="#" aria-disabled="true">Disabled</a></li>
```

**Accessibility:** The trigger button must have `aria-expanded` attribute (Bootstrap manages this automatically). Disabled items should include `aria-disabled="true"`. Keyboard navigation is built-in: Arrow keys navigate, Enter selects, Escape closes.

## List Group

To display a series of content items as a flexible and powerful list, use the list group component. List groups handle lists of links, buttons, or custom content with optional actions.

```html
<ul class="list-group">
  <li class="list-group-item">An item</li>
  <li class="list-group-item active" aria-current="true">Active item</li>
  <li class="list-group-item disabled" aria-disabled="true">Disabled item</li>
</ul>

<!-- Actionable items (links or buttons) -->
<div class="list-group">
  <a href="#" class="list-group-item list-group-item-action active" aria-current="true">Active link</a>
  <a href="#" class="list-group-item list-group-item-action">Link</a>
  <button type="button" class="list-group-item list-group-item-action">Button</button>
</div>

<!-- Flush variant (no outer borders) -->
<ul class="list-group list-group-flush">...</ul>

<!-- Horizontal layout -->
<ul class="list-group list-group-horizontal">...</ul>

<!-- With badges -->
<li class="list-group-item d-flex justify-content-between align-items-center">
  Item
  <span class="badge bg-primary rounded-pill">14</span>
</li>

<!-- Contextual colors -->
<li class="list-group-item list-group-item-primary">Primary item</li>
<li class="list-group-item list-group-item-danger">Danger item</li>
```

**Accessibility:** Use `aria-current="true"` on the active item. For disabled items, include `aria-disabled="true"`. Use `<ul>` for static lists, `<div>` for actionable items.

## Modal

To display dialog boxes, confirmations, or focused content that requires user interaction, use the modal component. Modals overlay the page and trap focus within themselves.

```html
<!-- Trigger button -->
<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
  Launch modal
</button>

<!-- Modal structure -->
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

<!-- Size variants -->
<div class="modal-dialog modal-sm">...</div>  <!-- 300px -->
<div class="modal-dialog modal-lg">...</div>  <!-- 800px -->
<div class="modal-dialog modal-xl">...</div>  <!-- 1140px -->

<!-- Vertically centered -->
<div class="modal-dialog modal-dialog-centered">...</div>

<!-- Scrollable body -->
<div class="modal-dialog modal-dialog-scrollable">...</div>

<!-- Static backdrop (can't close by clicking outside) -->
<div class="modal" data-bs-backdrop="static" data-bs-keyboard="false">...</div>
```

**JavaScript (optional):** Control modal programmatically:

```javascript
const modal = new bootstrap.Modal('#exampleModal', {
  backdrop: true,    // Show backdrop
  keyboard: true,    // Close on Escape
  focus: true        // Focus modal on open
});

modal.show();
modal.hide();
modal.toggle();

// Events
document.getElementById('exampleModal').addEventListener('shown.bs.modal', () => {
  // Modal is fully visible
});
```

**Accessibility:** Modals must have `aria-labelledby` pointing to the modal title's `id`. Include `aria-hidden="true"` initially. Bootstrap handles focus trapping automatically—focus stays within the modal until closed.

## Navbar

To create a responsive navigation header with branding, links, and collapsible content, use the navbar component. Navbars adapt to mobile screens with a hamburger toggle.

```html
<nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
      aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
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
          <a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown" aria-expanded="false">Dropdown</a>
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

<!-- Placement options -->
<nav class="navbar fixed-top">...</nav>    <!-- Fixed to viewport top -->
<nav class="navbar fixed-bottom">...</nav> <!-- Fixed to viewport bottom -->
<nav class="navbar sticky-top">...</nav>   <!-- Sticks after scrolling past -->
```

**Accessibility:** Include `aria-label="Toggle navigation"` on the toggler button. Mark the current page with `aria-current="page"`. The toggler manages `aria-expanded` automatically.

## Navs and Tabs

To create base navigation with multiple visual styles (tabs, pills, underlines), use the nav component. Navs handle both navigation and tabbed content interfaces.

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
<ul class="nav nav-tabs">...</ul>

<!-- Pills style -->
<ul class="nav nav-pills">...</ul>

<!-- Underline style -->
<ul class="nav nav-underline">...</ul>

<!-- Fill (equal width) and justify (full width) -->
<ul class="nav nav-pills nav-fill">...</ul>
<ul class="nav nav-pills nav-justified">...</ul>

<!-- Vertical orientation -->
<ul class="nav flex-column">...</ul>

<!-- Tabs with content panels -->
<ul class="nav nav-tabs" id="myTab" role="tablist">
  <li class="nav-item" role="presentation">
    <button class="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home-pane"
      type="button" role="tab" aria-controls="home-pane" aria-selected="true">Home</button>
  </li>
  <li class="nav-item" role="presentation">
    <button class="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile-pane"
      type="button" role="tab" aria-controls="profile-pane" aria-selected="false">Profile</button>
  </li>
</ul>
<div class="tab-content" id="myTabContent">
  <div class="tab-pane fade show active" id="home-pane" role="tabpanel" aria-labelledby="home-tab" tabindex="0">
    Home content...
  </div>
  <div class="tab-pane fade" id="profile-pane" role="tabpanel" aria-labelledby="profile-tab" tabindex="0">
    Profile content...
  </div>
</div>
```

**Accessibility:** For tabs, use proper ARIA roles: `role="tablist"` on container, `role="presentation"` on `<li>`, `role="tab"` on buttons, `role="tabpanel"` on content panes. Include `aria-selected`, `aria-controls`, and `aria-labelledby` as shown.

## Offcanvas

To create hidden sidebars that slide in from the edge of the viewport, use the offcanvas component. Offcanvas panels work well for mobile navigation, filters, or secondary content.

```html
<button class="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample"
  aria-controls="offcanvasExample">
  Toggle offcanvas
</button>

<div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
  <div class="offcanvas-header">
    <h5 class="offcanvas-title" id="offcanvasExampleLabel">Offcanvas</h5>
    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body">
    Content here.
  </div>
</div>

<!-- Placement variants -->
<div class="offcanvas offcanvas-start">...</div>  <!-- Left (default) -->
<div class="offcanvas offcanvas-end">...</div>    <!-- Right -->
<div class="offcanvas offcanvas-top">...</div>    <!-- Top -->
<div class="offcanvas offcanvas-bottom">...</div> <!-- Bottom -->

<!-- Static backdrop (no dismiss on outside click) -->
<div class="offcanvas" data-bs-backdrop="static">...</div>

<!-- Enable body scrolling while open -->
<div class="offcanvas" data-bs-scroll="true">...</div>
```

**JavaScript (optional):** Control offcanvas programmatically:

```javascript
const offcanvas = new bootstrap.Offcanvas('#offcanvasExample');

offcanvas.show();
offcanvas.hide();
offcanvas.toggle();
```

**Accessibility:** Include `aria-labelledby` pointing to the title's `id`. The trigger must have `aria-controls` matching the offcanvas `id`. Focus is trapped within the offcanvas when open.

## Pagination

To create navigation for paginated content (search results, tables, lists), use the pagination component. Pagination helps users navigate through pages of content.

```html
<nav aria-label="Page navigation">
  <ul class="pagination">
    <li class="page-item">
      <a class="page-link" href="#" aria-label="Previous">
        <span aria-hidden="true">&laquo;</span>
      </a>
    </li>
    <li class="page-item"><a class="page-link" href="#">1</a></li>
    <li class="page-item active" aria-current="page"><a class="page-link" href="#">2</a></li>
    <li class="page-item"><a class="page-link" href="#">3</a></li>
    <li class="page-item">
      <a class="page-link" href="#" aria-label="Next">
        <span aria-hidden="true">&raquo;</span>
      </a>
    </li>
  </ul>
</nav>

<!-- Disabled state for unavailable pages -->
<li class="page-item disabled">
  <a class="page-link" href="#" tabindex="-1" aria-disabled="true">Previous</a>
</li>

<!-- Size variants -->
<ul class="pagination pagination-lg">...</ul>
<ul class="pagination pagination-sm">...</ul>

<!-- Alignment -->
<ul class="pagination justify-content-center">...</ul>
<ul class="pagination justify-content-end">...</ul>
```

**Accessibility:** Wrap in `<nav>` with descriptive `aria-label`. Mark current page with `aria-current="page"`. For prev/next arrows, use `aria-label` on the link and `aria-hidden="true"` on decorative icons.

## Placeholders

To show loading states with animated placeholder elements while content loads, use the placeholder component. Placeholders indicate that content is being fetched or processed.

```html
<!-- Basic placeholder text -->
<p class="placeholder-glow">
  <span class="placeholder col-6"></span>
</p>

<!-- Card skeleton -->
<div class="card" aria-hidden="true">
  <div class="card-body">
    <h5 class="card-title placeholder-glow">
      <span class="placeholder col-6"></span>
    </h5>
    <p class="card-text placeholder-glow">
      <span class="placeholder col-7"></span>
      <span class="placeholder col-4"></span>
      <span class="placeholder col-4"></span>
      <span class="placeholder col-6"></span>
    </p>
    <a class="btn btn-primary disabled placeholder col-6" aria-disabled="true"></a>
  </div>
</div>

<!-- Size variants -->
<span class="placeholder col-12"></span>
<span class="placeholder placeholder-lg col-12"></span>
<span class="placeholder placeholder-sm col-12"></span>
<span class="placeholder placeholder-xs col-12"></span>

<!-- Color variants -->
<span class="placeholder col-12 bg-primary"></span>
<span class="placeholder col-12 bg-secondary"></span>
<span class="placeholder col-12 bg-success"></span>

<!-- Animation styles -->
<p class="placeholder-glow">  <!-- Pulsing glow -->
  <span class="placeholder col-12"></span>
</p>
<p class="placeholder-wave">  <!-- Wave animation -->
  <span class="placeholder col-12"></span>
</p>
```

**Accessibility:** Add `aria-hidden="true"` to placeholder containers since they contain no meaningful content. Replace placeholders with actual content once loaded.

## Popovers

To display rich overlay content triggered by click or hover, use the popover component. Popovers can contain titles, text, and HTML content.

**Requires JavaScript initialization.** Popovers will not work without explicit initialization.

```html
<!-- Basic popover -->
<button type="button" class="btn btn-lg btn-danger" data-bs-toggle="popover"
  title="Popover title" data-bs-content="And here's some amazing content.">
  Click to toggle popover
</button>

<!-- Placement directions -->
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

<!-- Dismiss on next click (focus trigger) -->
<a tabindex="0" class="btn btn-lg btn-danger" role="button" data-bs-toggle="popover"
  data-bs-trigger="focus" title="Dismissible popover"
  data-bs-content="Click anywhere else to dismiss.">
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

**JavaScript initialization (required):**

```javascript
// Initialize all popovers on the page
const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]');
const popoverList = [...popoverTriggerList].map(el => new bootstrap.Popover(el));

// Initialize with options
const popover = new bootstrap.Popover('#myPopover', {
  placement: 'right',
  trigger: 'hover focus',
  html: true,
  content: '<strong>Rich</strong> content'
});

// Methods
popover.show();
popover.hide();
popover.toggle();
popover.dispose();  // Destroy popover
```

**Accessibility:** Popovers are not ideal for essential information since they may be missed by screen readers. Use for supplementary content only. For dismissible popovers, ensure keyboard users can trigger and dismiss them.

## Progress

To display progress indicators for tasks, uploads, or loading states, use the progress component. Progress bars provide visual feedback on completion status.

```html
<div class="progress" role="progressbar" aria-label="Basic example" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
  <div class="progress-bar" style="width: 25%"></div>
</div>

<!-- With visible label -->
<div class="progress" role="progressbar" aria-label="Example with label" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
  <div class="progress-bar" style="width: 25%">25%</div>
</div>

<!-- Contextual colors -->
<div class="progress-bar bg-success" style="width: 25%"></div>
<div class="progress-bar bg-info" style="width: 50%"></div>
<div class="progress-bar bg-warning" style="width: 75%"></div>
<div class="progress-bar bg-danger" style="width: 100%"></div>

<!-- Striped -->
<div class="progress-bar progress-bar-striped" style="width: 50%"></div>

<!-- Animated stripes -->
<div class="progress-bar progress-bar-striped progress-bar-animated" style="width: 75%"></div>

<!-- Multiple bars (stacked) -->
<div class="progress" role="progressbar" aria-label="Segment example">
  <div class="progress-bar" style="width: 15%"></div>
  <div class="progress-bar bg-success" style="width: 30%"></div>
  <div class="progress-bar bg-info" style="width: 20%"></div>
</div>
```

**Accessibility:** Always include `role="progressbar"`, `aria-valuenow`, `aria-valuemin`, `aria-valuemax`, and `aria-label` on the outer `.progress` container. Update `aria-valuenow` dynamically when progress changes.

## Scrollspy

To automatically update navigation based on scroll position, use the scrollspy component. Scrollspy highlights nav items as you scroll through corresponding content sections.

**Works with data attributes**, but JavaScript can enhance functionality.

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

<!-- Scrollable content with scrollspy -->
<div data-bs-spy="scroll" data-bs-target="#navbar-example" data-bs-root-margin="0px 0px -40%"
  data-bs-smooth-scroll="true" class="scrollspy-example p-3 rounded-2" tabindex="0"
  style="height: 300px; overflow-y: scroll;">
  <h4 id="scrollspyHeading1">First heading</h4>
  <p>Content for first section...</p>
  <h4 id="scrollspyHeading2">Second heading</h4>
  <p>Content for second section...</p>
  <h4 id="scrollspyHeading3">Third heading</h4>
  <p>Content for third section...</p>
  <h4 id="scrollspyHeading4">Fourth heading</h4>
  <p>Content for fourth section...</p>
</div>

<!-- List group variant -->
<div class="row">
  <div class="col-4">
    <div id="list-example" class="list-group">
      <a class="list-group-item list-group-item-action" href="#list-item-1">Item 1</a>
      <a class="list-group-item list-group-item-action" href="#list-item-2">Item 2</a>
    </div>
  </div>
  <div class="col-8">
    <div data-bs-spy="scroll" data-bs-target="#list-example" data-bs-smooth-scroll="true"
      class="scrollspy-example" tabindex="0">
      <h4 id="list-item-1">Item 1</h4>
      <p>Content...</p>
      <h4 id="list-item-2">Item 2</h4>
      <p>Content...</p>
    </div>
  </div>
</div>
```

**Key data attributes:**

| Attribute | Purpose |
|-----------|---------|
| `data-bs-spy="scroll"` | Enable scrollspy on this element |
| `data-bs-target` | CSS selector for navigation to update |
| `data-bs-root-margin` | Intersection Observer margin (e.g., "0px 0px -40%") |
| `data-bs-smooth-scroll="true"` | Enable smooth scrolling |

**JavaScript initialization (optional):**

```javascript
const scrollspy = new bootstrap.ScrollSpy(document.body, {
  target: '#navbar-example',
  rootMargin: '0px 0px -40%',
  smoothScroll: true
});

// Refresh after DOM changes
scrollspy.refresh();
```

**Accessibility:** The scrollspy container should have `tabindex="0"` to be keyboard-focusable. Ensure section headings have unique `id` attributes matching nav hrefs.

## Spinners

To indicate loading states with animated spinner indicators, use the spinner component. Spinners show users that an action is processing.

```html
<!-- Border spinner -->
<div class="spinner-border" role="status">
  <span class="visually-hidden">Loading...</span>
</div>

<!-- Growing spinner -->
<div class="spinner-grow" role="status">
  <span class="visually-hidden">Loading...</span>
</div>

<!-- Color variants -->
<div class="spinner-border text-primary" role="status"></div>
<div class="spinner-border text-secondary" role="status"></div>
<div class="spinner-border text-success" role="status"></div>
<div class="spinner-border text-danger" role="status"></div>

<!-- Size variants -->
<div class="spinner-border spinner-border-sm" role="status"></div>
<div class="spinner-grow spinner-grow-sm" role="status"></div>

<!-- In button (loading state) -->
<button class="btn btn-primary" type="button" disabled>
  <span class="spinner-border spinner-border-sm" aria-hidden="true"></span>
  <span class="visually-hidden" role="status">Loading...</span>
</button>

<button class="btn btn-primary" type="button" disabled>
  <span class="spinner-border spinner-border-sm" aria-hidden="true"></span>
  Loading...
</button>
```

**Accessibility:** Include `role="status"` on spinners. Add `visually-hidden` text inside for screen readers. When used in buttons, add `aria-hidden="true"` to the spinner icon if visible text (like "Loading...") is also present.

## Toasts

To display lightweight, dismissible notifications, use the toast component. Toasts appear temporarily and stack when multiple are shown.

**Requires JavaScript to show.** Toasts are hidden by default and must be shown programmatically.

```html
<!-- Basic toast -->
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

<!-- Simple toast (no header) -->
<div class="toast align-items-center" role="alert" aria-live="assertive" aria-atomic="true">
  <div class="d-flex">
    <div class="toast-body">
      Hello, world! This is a toast message.
    </div>
    <button type="button" class="btn-close me-2 m-auto" data-bs-dismiss="toast" aria-label="Close"></button>
  </div>
</div>

<!-- Color variants -->
<div class="toast align-items-center text-bg-primary border-0" role="alert">...</div>

<!-- Toast container for stacking -->
<div class="toast-container position-fixed bottom-0 end-0 p-3">
  <div class="toast">...</div>
  <div class="toast">...</div>
</div>

<!-- Placement options (via container positioning) -->
<div class="toast-container position-fixed top-0 start-50 translate-middle-x p-3">...</div>
<div class="toast-container position-fixed top-0 end-0 p-3">...</div>
```

**JavaScript initialization (required to show):**

```javascript
// Initialize and show a toast
const toastEl = document.querySelector('.toast');
const toast = new bootstrap.Toast(toastEl, {
  autohide: true,    // Auto dismiss
  delay: 5000        // Dismiss after 5 seconds
});
toast.show();

// Show toast triggered by button
document.getElementById('showToastBtn').addEventListener('click', () => {
  const toast = new bootstrap.Toast(document.getElementById('myToast'));
  toast.show();
});

// Methods
toast.show();
toast.hide();
toast.dispose();

// Events
toastEl.addEventListener('shown.bs.toast', () => {
  // Toast is now visible
});
```

**Accessibility:** Include `role="alert"`, `aria-live="assertive"` (for important messages) or `aria-live="polite"` (for less urgent), and `aria-atomic="true"`. Screen readers will announce toast content when shown.

## Tooltips

To add hover hints that provide brief descriptions, use the tooltip component. Tooltips display extra information when users hover or focus on an element.

**Requires JavaScript initialization.** Tooltips will not work without explicit initialization.

```html
<!-- Tooltip triggers -->
<button type="button" class="btn btn-secondary"
  data-bs-toggle="tooltip" data-bs-placement="top" title="Tooltip on top">
  Tooltip on top
</button>
<button type="button" class="btn btn-secondary"
  data-bs-toggle="tooltip" data-bs-placement="right" title="Tooltip on right">
  Tooltip on right
</button>
<button type="button" class="btn btn-secondary"
  data-bs-toggle="tooltip" data-bs-placement="bottom" title="Tooltip on bottom">
  Tooltip on bottom
</button>
<button type="button" class="btn btn-secondary"
  data-bs-toggle="tooltip" data-bs-placement="left" title="Tooltip on left">
  Tooltip on left
</button>

<!-- HTML content in tooltip -->
<button type="button" class="btn btn-secondary"
  data-bs-toggle="tooltip" data-bs-html="true"
  title="<em>Tooltip</em> <u>with</u> <b>HTML</b>">
  Tooltip with HTML
</button>

<!-- Tooltip on disabled button (requires wrapper) -->
<span class="d-inline-block" tabindex="0" data-bs-toggle="tooltip" title="Disabled tooltip">
  <button class="btn btn-primary" type="button" disabled>Disabled button</button>
</span>
```

**JavaScript initialization (required):**

```javascript
// Initialize all tooltips on the page
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
const tooltipList = [...tooltipTriggerList].map(el => new bootstrap.Tooltip(el));

// Initialize with options
const tooltip = new bootstrap.Tooltip('#myTooltip', {
  placement: 'top',
  trigger: 'hover focus',
  html: false,
  delay: { show: 500, hide: 100 }
});

// Methods
tooltip.show();
tooltip.hide();
tooltip.toggle();
tooltip.dispose();
```

**Accessibility:** Tooltips are not announced to all screen readers—avoid putting essential information only in tooltips. Use tooltips for supplementary hints, not critical content. Ensure tooltips are keyboard-accessible (trigger element must be focusable).

---

See `references/components-reference.md` for complete component API reference and `examples/` for component patterns.
