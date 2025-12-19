# Bootstrap JavaScript API Reference

Complete reference for Bootstrap 5.3 JavaScript components and their APIs.

## Component Initialization

### Data Attributes (Declarative)

Most components can be initialized without JavaScript using `data-bs-*` attributes:

```html
<!-- Modal trigger -->
<button data-bs-toggle="modal" data-bs-target="#myModal">Open</button>

<!-- Collapse trigger -->
<button data-bs-toggle="collapse" data-bs-target="#myCollapse">Toggle</button>

<!-- Dropdown trigger -->
<button data-bs-toggle="dropdown">Dropdown</button>

<!-- Tab trigger -->
<button data-bs-toggle="tab" data-bs-target="#tab1">Tab 1</button>

<!-- Tooltip (requires initialization) -->
<button data-bs-toggle="tooltip" title="Tooltip text">Hover</button>
```

### JavaScript Initialization

```javascript
// Constructor pattern
const modal = new bootstrap.Modal('#myModal', {
  keyboard: true,
  backdrop: true
});

// Get existing instance
const existingModal = bootstrap.Modal.getInstance('#myModal');

// Get or create instance
const modalInstance = bootstrap.Modal.getOrCreateInstance('#myModal');
```

## Common Methods

All components share these static methods:

| Method | Description |
|--------|-------------|
| `getInstance(element)` | Get component instance from element |
| `getOrCreateInstance(element, options)` | Get existing or create new instance |

All instances share:

| Method | Description |
|--------|-------------|
| `dispose()` | Destroy component instance and remove event listeners |

---

## Alert

```javascript
const alertEl = document.getElementById('myAlert');
const alert = new bootstrap.Alert(alertEl);

// Methods
alert.close();  // Closes the alert
alert.dispose(); // Destroys instance
```

**Events:**
- `close.bs.alert` - Fires when close is called
- `closed.bs.alert` - Fires when alert is closed and transitions complete

---

## Button

```javascript
const button = document.getElementById('myButton');
const bsButton = new bootstrap.Button(button);

// Methods
bsButton.toggle(); // Toggle active state
```

---

## Carousel

```javascript
const carousel = new bootstrap.Carousel('#myCarousel', {
  interval: 5000,    // Auto-advance interval (ms), false to disable
  keyboard: true,    // Keyboard navigation
  pause: 'hover',    // Pause on hover ('hover', false)
  ride: false,       // Auto-start ('carousel', true, false)
  touch: true,       // Touch swipe support
  wrap: true         // Continuous cycling
});

// Methods
carousel.cycle();       // Start cycling
carousel.pause();       // Stop cycling
carousel.prev();        // Go to previous
carousel.next();        // Go to next
carousel.to(2);         // Go to specific slide (0-indexed)
```

**Events:**
- `slide.bs.carousel` - Fires before slide transition
- `slid.bs.carousel` - Fires after slide transition

---

## Collapse

```javascript
const collapse = new bootstrap.Collapse('#myCollapse', {
  toggle: true,    // Toggle on initialization
  parent: null     // Parent selector for accordion behavior
});

// Methods
collapse.show();
collapse.hide();
collapse.toggle();
```

**Events:**
- `show.bs.collapse`, `shown.bs.collapse`
- `hide.bs.collapse`, `hidden.bs.collapse`

---

## Dropdown

```javascript
const dropdown = new bootstrap.Dropdown('#myDropdown', {
  autoClose: true,      // true, 'inside', 'outside', false
  boundary: 'clippingParents',
  display: 'dynamic',   // 'dynamic' or 'static'
  offset: [0, 2],       // [skidding, distance]
  popperConfig: null,   // Custom Popper.js config
  reference: 'toggle'   // 'toggle', 'parent', or element
});

// Methods
dropdown.show();
dropdown.hide();
dropdown.toggle();
dropdown.update();  // Update position
```

**Events:**
- `show.bs.dropdown`, `shown.bs.dropdown`
- `hide.bs.dropdown`, `hidden.bs.dropdown`

---

## Modal

```javascript
const modal = new bootstrap.Modal('#myModal', {
  backdrop: true,    // true, false, 'static' (no close on click)
  focus: true,       // Focus modal on open
  keyboard: true     // Close on Escape key
});

// Methods
modal.show();
modal.hide();
modal.toggle();
modal.handleUpdate();  // Readjust position
```

**Events:**
- `show.bs.modal` - Before modal shows
- `shown.bs.modal` - After modal is shown
- `hide.bs.modal` - Before modal hides
- `hidden.bs.modal` - After modal is hidden
- `hidePrevented.bs.modal` - When hide is prevented (static backdrop)

**Event example:**
```javascript
const myModal = document.getElementById('myModal');
myModal.addEventListener('hidden.bs.modal', event => {
  // Do something after modal closes
});
```

---

## Offcanvas

```javascript
const offcanvas = new bootstrap.Offcanvas('#myOffcanvas', {
  backdrop: true,    // Show backdrop
  keyboard: true,    // Close on Escape
  scroll: false      // Allow body scroll when open
});

// Methods
offcanvas.show();
offcanvas.hide();
offcanvas.toggle();
```

**Events:**
- `show.bs.offcanvas`, `shown.bs.offcanvas`
- `hide.bs.offcanvas`, `hidden.bs.offcanvas`
- `hidePrevented.bs.offcanvas`

---

## Popover

Popovers must be initialized:

```javascript
// Initialize all popovers
const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]');
const popoverList = [...popoverTriggerList].map(el => new bootstrap.Popover(el));

// With options
const popover = new bootstrap.Popover('#myPopover', {
  animation: true,
  container: false,
  content: 'Popover content',
  delay: 0,
  html: false,
  placement: 'right',  // top, bottom, left, right, auto
  selector: false,
  template: '<div class="popover">...</div>',
  title: 'Popover title',
  trigger: 'click',    // click, hover, focus, manual
  offset: [0, 8],
  fallbackPlacements: ['top', 'bottom'],
  boundary: 'clippingParents',
  customClass: '',
  sanitize: true,
  allowList: {...},    // Allowed HTML attributes
  popperConfig: null
});

// Methods
popover.show();
popover.hide();
popover.toggle();
popover.enable();
popover.disable();
popover.toggleEnabled();
popover.update();
popover.setContent({ '.popover-header': 'New Title' });
```

**Events:**
- `show.bs.popover`, `shown.bs.popover`
- `hide.bs.popover`, `hidden.bs.popover`
- `inserted.bs.popover` - After template inserted into DOM

---

## Scrollspy

```javascript
const scrollspy = new bootstrap.ScrollSpy(document.body, {
  target: '#navbar',
  rootMargin: '0px 0px -40%',
  smoothScroll: true,
  threshold: [0.1, 0.5, 1]
});

// Methods
scrollspy.refresh();  // Recalculate positions
scrollspy.dispose();
```

**Events:**
- `activate.bs.scrollspy` - When new item becomes active

---

## Tab

```javascript
const tab = new bootstrap.Tab('#myTab');

// Methods
tab.show();  // Show the tab
```

**Events:**
- `show.bs.tab`, `shown.bs.tab`
- `hide.bs.tab`, `hidden.bs.tab`

**Event properties:**
```javascript
tabEl.addEventListener('shown.bs.tab', event => {
  event.target;        // Newly activated tab
  event.relatedTarget; // Previous active tab
});
```

---

## Toast

```javascript
const toast = new bootstrap.Toast('#myToast', {
  animation: true,
  autohide: true,
  delay: 5000  // Milliseconds
});

// Methods
toast.show();
toast.hide();
toast.isShown();  // Returns boolean
```

**Events:**
- `show.bs.toast`, `shown.bs.toast`
- `hide.bs.toast`, `hidden.bs.toast`

---

## Tooltip

Tooltips must be initialized:

```javascript
// Initialize all tooltips
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
const tooltipList = [...tooltipTriggerList].map(el => new bootstrap.Tooltip(el));

// With options (same as Popover)
const tooltip = new bootstrap.Tooltip('#myTooltip', {
  animation: true,
  container: false,
  delay: 0,
  html: false,
  placement: 'top',
  selector: false,
  template: '<div class="tooltip">...</div>',
  title: 'Tooltip text',
  trigger: 'hover focus',
  offset: [0, 6],
  fallbackPlacements: ['top', 'bottom', 'left', 'right'],
  boundary: 'clippingParents',
  customClass: '',
  sanitize: true,
  popperConfig: null
});

// Methods
tooltip.show();
tooltip.hide();
tooltip.toggle();
tooltip.enable();
tooltip.disable();
tooltip.toggleEnabled();
tooltip.update();
tooltip.setContent({ '.tooltip-inner': 'New text' });
```

---

## Preventing Default Behavior

Many events are cancelable:

```javascript
const modal = document.getElementById('myModal');

modal.addEventListener('hide.bs.modal', event => {
  if (!confirmClose) {
    event.preventDefault(); // Prevent modal from closing
  }
});
```

## Asynchronous Methods

Methods that involve transitions return when the transition starts, not ends. Use events for completion:

```javascript
const modal = new bootstrap.Modal('#myModal');

// This returns immediately
modal.hide();

// Use event for completion
document.getElementById('myModal').addEventListener('hidden.bs.modal', () => {
  // Modal is fully hidden now
});
```

## Selector Engines

Bootstrap uses native `querySelector` and `querySelectorAll`. For jQuery compatibility:

```javascript
// Bootstrap 5 native
const modal = new bootstrap.Modal(document.querySelector('#myModal'));

// If using jQuery
const modal = new bootstrap.Modal($('#myModal')[0]);
```
