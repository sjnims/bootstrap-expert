---
name: bootstrap-forms
description: This skill should be used when the user asks about Bootstrap forms, Bootstrap form controls, Bootstrap input fields, Bootstrap select, Bootstrap checkboxes, Bootstrap radio buttons, Bootstrap switches, Bootstrap range inputs, Bootstrap input groups, Bootstrap floating labels, Bootstrap form validation, Bootstrap form layout, how to create Bootstrap forms, needs help with form styling and validation in Bootstrap, wants to create a form, add form validation, style form inputs, make an inline form, add floating labels to inputs, create a login form, build a registration form, or validate user input.
---

# Bootstrap 5.3 Forms

Bootstrap provides comprehensive form styling including controls, layouts, validation states, and input groups.

## Form Controls

### Text Inputs

```html
<div class="mb-3">
  <label for="email" class="form-label">Email address</label>
  <input type="email" class="form-control" id="email" placeholder="name@example.com">
</div>

<div class="mb-3">
  <label for="password" class="form-label">Password</label>
  <input type="password" class="form-control" id="password">
</div>
```

### Sizing

To match input size with surrounding elements or emphasize important fields, use sizing classes. Use `.form-control-lg` for hero sections or primary CTAs. Use `.form-control-sm` for compact UIs like toolbars or inline forms.

```html
<input class="form-control form-control-lg" type="text" placeholder="Large input">
<input class="form-control" type="text" placeholder="Default input">
<input class="form-control form-control-sm" type="text" placeholder="Small input">
```

### Disabled and Readonly

Use `disabled` for fields users cannot interact with at all. Use `readonly` when values should be visible and selectable but not editable. Use `.form-control-plaintext` with `readonly` to display values without form styling.

```html
<input class="form-control" type="text" disabled value="Disabled input">
<input class="form-control" type="text" readonly value="Readonly input">
<input class="form-control-plaintext" type="text" readonly value="Readonly plain text">
```

### File Input

```html
<div class="mb-3">
  <label for="file" class="form-label">Upload file</label>
  <input class="form-control" type="file" id="file">
</div>

<!-- Multiple files -->
<input class="form-control" type="file" multiple>
```

### Color Picker

```html
<div class="mb-3">
  <label for="color" class="form-label">Color picker</label>
  <input type="color" class="form-control form-control-color" id="color" value="#0d6efd">
</div>
```

### Textarea

```html
<div class="mb-3">
  <label for="textarea" class="form-label">Comments</label>
  <textarea class="form-control" id="textarea" rows="3"></textarea>
</div>
```

## Select

```html
<select class="form-select">
  <option selected>Choose an option</option>
  <option value="1">Option One</option>
  <option value="2">Option Two</option>
  <option value="3">Option Three</option>
</select>

<!-- Multiple select -->
<select class="form-select" multiple>
  <option value="1">One</option>
  <option value="2">Two</option>
  <option value="3">Three</option>
</select>

<!-- Sizing -->
<select class="form-select form-select-lg">...</select>
<select class="form-select form-select-sm">...</select>
```

## Checkboxes and Radios

### Checkboxes

```html
<div class="form-check">
  <input class="form-check-input" type="checkbox" id="check1">
  <label class="form-check-label" for="check1">Default checkbox</label>
</div>
<div class="form-check">
  <input class="form-check-input" type="checkbox" id="check2" checked>
  <label class="form-check-label" for="check2">Checked checkbox</label>
</div>
```

### Radios

```html
<div class="form-check">
  <input class="form-check-input" type="radio" name="radios" id="radio1" checked>
  <label class="form-check-label" for="radio1">First radio</label>
</div>
<div class="form-check">
  <input class="form-check-input" type="radio" name="radios" id="radio2">
  <label class="form-check-label" for="radio2">Second radio</label>
</div>
```

### Switches

Prefer switches over checkboxes for on/off settings that take effect immediately, like enabling notifications or toggling dark mode. Use checkboxes for multi-select options or when changes require a submit action.

```html
<div class="form-check form-switch">
  <input class="form-check-input" type="checkbox" role="switch" id="switch1">
  <label class="form-check-label" for="switch1">Default switch</label>
</div>
<div class="form-check form-switch">
  <input class="form-check-input" type="checkbox" role="switch" id="switch2" checked>
  <label class="form-check-label" for="switch2">Checked switch</label>
</div>
```

### Inline

```html
<div class="form-check form-check-inline">
  <input class="form-check-input" type="checkbox" id="inline1">
  <label class="form-check-label" for="inline1">1</label>
</div>
<div class="form-check form-check-inline">
  <input class="form-check-input" type="checkbox" id="inline2">
  <label class="form-check-label" for="inline2">2</label>
</div>
```

## Range

```html
<label for="range" class="form-label">Range slider</label>
<input type="range" class="form-range" id="range">

<!-- With min, max, step -->
<input type="range" class="form-range" min="0" max="100" step="5">
```

## Input Groups

Use input groups to visually attach related elements to form controls. Common patterns include currency symbols, units of measurement, or action buttons alongside inputs.

### Basic

```html
<div class="input-group mb-3">
  <span class="input-group-text">@</span>
  <input type="text" class="form-control" placeholder="Username">
</div>

<div class="input-group mb-3">
  <input type="text" class="form-control" placeholder="Email">
  <span class="input-group-text">@example.com</span>
</div>

<div class="input-group mb-3">
  <span class="input-group-text">$</span>
  <input type="text" class="form-control" placeholder="Amount">
  <span class="input-group-text">.00</span>
</div>
```

### With Buttons

```html
<div class="input-group mb-3">
  <input type="text" class="form-control" placeholder="Search...">
  <button class="btn btn-outline-secondary" type="button">Search</button>
</div>

<div class="input-group mb-3">
  <button class="btn btn-outline-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown">
    Dropdown
  </button>
  <ul class="dropdown-menu">
    <li><a class="dropdown-item" href="#">Action</a></li>
  </ul>
  <input type="text" class="form-control">
</div>
```

### Sizing

```html
<div class="input-group input-group-sm">...</div>
<div class="input-group">...</div>
<div class="input-group input-group-lg">...</div>
```

## Floating Labels

Use floating labels for a cleaner, more compact form design where labels animate into the input on focus. They work best in simple forms like login or signup. Avoid them when you need help text or complex validation messages alongside inputs.

```html
<div class="form-floating mb-3">
  <input type="email" class="form-control" id="floatingEmail" placeholder="name@example.com">
  <label for="floatingEmail">Email address</label>
</div>

<div class="form-floating mb-3">
  <input type="password" class="form-control" id="floatingPassword" placeholder="Password">
  <label for="floatingPassword">Password</label>
</div>

<div class="form-floating">
  <textarea class="form-control" placeholder="Leave a comment" id="floatingTextarea"></textarea>
  <label for="floatingTextarea">Comments</label>
</div>
```

## Form Layout

Choose your layout based on form complexity and available space.

### Vertical (Default)

Use vertical layout for most forms—it's the simplest and works well on mobile. Labels stack above inputs for easy scanning.

```html
<form>
  <div class="mb-3">
    <label for="email" class="form-label">Email</label>
    <input type="email" class="form-control" id="email">
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
```

### Horizontal

Use horizontal layout when you have ample width and want a more compact appearance. Best for settings pages or admin panels with many short fields.

```html
<form>
  <div class="row mb-3">
    <label for="email" class="col-sm-2 col-form-label">Email</label>
    <div class="col-sm-10">
      <input type="email" class="form-control" id="email">
    </div>
  </div>
  <div class="row">
    <div class="col-sm-10 offset-sm-2">
      <button type="submit" class="btn btn-primary">Submit</button>
    </div>
  </div>
</form>
```

### Inline

```html
<form class="row row-cols-lg-auto g-3 align-items-center">
  <div class="col-12">
    <input type="text" class="form-control" placeholder="Username">
  </div>
  <div class="col-12">
    <select class="form-select">
      <option selected>Choose...</option>
    </select>
  </div>
  <div class="col-12">
    <button type="submit" class="btn btn-primary">Submit</button>
  </div>
</form>
```

### Grid Layout

```html
<form>
  <div class="row g-3">
    <div class="col-md-6">
      <label for="firstName" class="form-label">First name</label>
      <input type="text" class="form-control" id="firstName">
    </div>
    <div class="col-md-6">
      <label for="lastName" class="form-label">Last name</label>
      <input type="text" class="form-control" id="lastName">
    </div>
    <div class="col-12">
      <label for="address" class="form-label">Address</label>
      <input type="text" class="form-control" id="address">
    </div>
    <div class="col-md-6">
      <label for="city" class="form-label">City</label>
      <input type="text" class="form-control" id="city">
    </div>
    <div class="col-md-4">
      <label for="state" class="form-label">State</label>
      <select id="state" class="form-select">
        <option selected>Choose...</option>
      </select>
    </div>
    <div class="col-md-2">
      <label for="zip" class="form-label">Zip</label>
      <input type="text" class="form-control" id="zip">
    </div>
    <div class="col-12">
      <button type="submit" class="btn btn-primary">Submit</button>
    </div>
  </div>
</form>
```

## Accessibility Essentials

Forms require proper accessibility attributes for screen reader support and WCAG compliance.

### Labels

Always associate labels with inputs using `for` and `id` attributes:

```html
<label for="email" class="form-label">Email address</label>
<input type="email" class="form-control" id="email">
```

For visually hidden labels, use `.visually-hidden`:

```html
<label for="search" class="visually-hidden">Search</label>
<input type="search" class="form-control" id="search" placeholder="Search...">
```

### Help Text

Connect help text to inputs with `aria-describedby`:

```html
<input type="password" class="form-control" id="password" aria-describedby="passwordHelp">
<div id="passwordHelp" class="form-text">Must be 8+ characters.</div>
```

### Validation States

Mark invalid fields for assistive technology:

```html
<input type="email" class="form-control is-invalid" aria-invalid="true" aria-describedby="emailError">
<div id="emailError" class="invalid-feedback">Please enter a valid email.</div>
```

### Required Fields

```html
<input type="text" class="form-control" required aria-required="true">
```

## Validation

### Browser Default

```html
<form class="row g-3 needs-validation" novalidate>
  <div class="col-md-6">
    <label for="validationCustom01" class="form-label">First name</label>
    <input type="text" class="form-control" id="validationCustom01" required>
    <div class="valid-feedback">Looks good!</div>
    <div class="invalid-feedback">Please provide a first name.</div>
  </div>
  <div class="col-12">
    <button class="btn btn-primary" type="submit">Submit form</button>
  </div>
</form>

<script>
// JavaScript for validation
(function () {
  'use strict'
  var forms = document.querySelectorAll('.needs-validation')
  Array.prototype.slice.call(forms).forEach(function (form) {
    form.addEventListener('submit', function (event) {
      if (!form.checkValidity()) {
        event.preventDefault()
        event.stopPropagation()
      }
      form.classList.add('was-validated')
    }, false)
  })
})()
</script>
```

### Validation States

```html
<!-- Valid -->
<input type="text" class="form-control is-valid">
<div class="valid-feedback">Looks good!</div>

<!-- Invalid -->
<input type="text" class="form-control is-invalid">
<div class="invalid-feedback">Please provide a valid value.</div>
```

## Additional Resources

### Reference Files

- `references/form-reference.md` - Complete form class reference

### Example Files

- `examples/validation-form.html` - Form validation patterns
- `examples/floating-labels-form.html` - Signup and login forms with floating labels
- `examples/horizontal-form.html` - Horizontal layouts, sizing, radios, readonly display
- `examples/inline-search-form.html` - Navbar search, filters, toolbars, newsletter forms
