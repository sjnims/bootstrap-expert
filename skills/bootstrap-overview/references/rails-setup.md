# Ruby on Rails 8 Integration

Complete setup guides for integrating Bootstrap 5.3.8 and Bootstrap Icons 1.13.x with Ruby on Rails 8.

Rails 8 introduces Propshaft as the default asset pipeline, replacing Sprockets. This guide covers multiple integration approaches depending on your project requirements.

## Approach Comparison

| Approach | CSS | JavaScript | Node.js | Best For |
|----------|-----|------------|---------|----------|
| Importmaps + bootstrap gem | Sass via dartsass-rails | Importmaps | No | Simplicity, no build step |
| cssbundling-rails | Sass via Node | esbuild/rollup | Yes | Full control, tree-shaking |
| CDN only | CDN link | CDN script | No | Prototyping, simple apps |

---

## Approach 1: Importmaps + Bootstrap Gem (Recommended)

This approach requires no Node.js and uses Rails' native importmaps for JavaScript.

### New Application Setup

```bash
# Create new Rails 8 app (uses Propshaft by default)
rails new myapp
cd myapp

# Add required gems
bundle add bootstrap -v "~> 5.3.8"
bundle add dartsass-rails

# Install Dart Sass
bin/rails dartsass:install
```

### Existing Application Setup

**Gemfile:**

```ruby
# Bootstrap and Sass support
gem "bootstrap", "~> 5.3.8"
gem "dartsass-rails"

# Propshaft is default in Rails 8
# If upgrading from Rails 7, replace sprockets-rails:
# gem "propshaft"
```

Run installation:

```bash
bundle install
bin/rails dartsass:install
```

### Configure Importmaps

**config/importmap.rb:**

```ruby
# Pin Bootstrap and Popper.js
pin "bootstrap", to: "bootstrap.min.js", preload: true
pin "@popperjs/core", to: "popper.js", preload: true
```

### Configure Asset Precompilation

**config/initializers/assets.rb:**

```ruby
# Ensure Bootstrap JS files are precompiled
Rails.application.config.assets.precompile += %w[bootstrap.min.js popper.js]
```

### Setup Stylesheets

Rename `app/assets/stylesheets/application.css` to `application.scss`:

```bash
mv app/assets/stylesheets/application.css app/assets/stylesheets/application.scss
```

**app/assets/stylesheets/application.scss:**

```scss
// Custom variables must be imported BEFORE Bootstrap
@import "custom_variables";

// Import Bootstrap
@import "bootstrap";

// Custom styles AFTER Bootstrap
@import "custom_styles";
```

**app/assets/stylesheets/_custom_variables.scss:**

```scss
// Override Bootstrap variables before importing Bootstrap
$primary: #0d6efd;
$secondary: #6c757d;
$enable-rounded: true;
$enable-shadows: false;

// Custom theme colors
$custom-colors: (
  "brand": #900
);
```

**app/assets/stylesheets/_custom_styles.scss:**

```scss
// Custom styles after Bootstrap is loaded
.navbar-brand {
  font-weight: 700;
}
```

### Setup JavaScript

**app/javascript/application.js:**

```javascript
// Configure your import map in config/importmap.rb
import "@hotwired/turbo-rails"
import "controllers"

// Import Popper.js first (required by Bootstrap)
import "@popperjs/core"

// Import Bootstrap
import "bootstrap"
```

### Application Layout

**app/views/layouts/application.html.erb:**

```erb
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title><%= content_for(:title) || "MyApp" %></title>
    <meta name="turbo-cache-control" content="no-preview">

    <%= csrf_meta_tags %>
    <%= csp_meta_tag %>

    <%= stylesheet_link_tag "application", "data-turbo-track": "reload" %>
    <%= javascript_importmap_tags %>
  </head>

  <body>
    <%= render "shared/navbar" %>

    <main class="container py-4">
      <%= render "shared/flash" %>
      <%= yield %>
    </main>

    <%= render "shared/footer" %>
  </body>
</html>
```

---

## Approach 2: cssbundling-rails (Full Node.js Setup)

This approach provides full control over the build process with tree-shaking support.

### New Application Setup

```bash
# Create app with Bootstrap CSS bundling
rails new myapp --css bootstrap
cd myapp
```

This automatically installs cssbundling-rails, jsbundling-rails, and configures esbuild.

### Existing Application Setup

```bash
# Add CSS bundling gem
bundle add cssbundling-rails

# Run Bootstrap installer
bin/rails css:install:bootstrap
```

### File Structure

After installation, your asset structure will be:

```
myapp/
├── app/
│   ├── assets/
│   │   ├── builds/              # Compiled output (gitignored)
│   │   │   └── application.css
│   │   └── stylesheets/
│   │       └── application.bootstrap.scss
│   └── javascript/
│       └── application.js
├── package.json
└── Procfile.dev
```

### Stylesheet Configuration

**app/assets/stylesheets/application.bootstrap.scss:**

```scss
// Custom variables (before Bootstrap)
$primary: #0d6efd;
$enable-rounded: true;

// Import Bootstrap
@import "bootstrap/scss/bootstrap";

// Custom styles (after Bootstrap)
.custom-component {
  @include make-container();
}
```

### JavaScript Configuration

**app/javascript/application.js:**

```javascript
// Entry point for the build script
import "@hotwired/turbo-rails"
import "controllers"
import * as bootstrap from "bootstrap"

// Initialize tooltips
document.addEventListener("turbo:load", () => {
  const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
  tooltipTriggerList.forEach(el => new bootstrap.Tooltip(el))
})
```

### Development Server

Use the Procfile for development:

**Procfile.dev:**

```
web: bin/rails server
css: yarn build:css --watch
js: yarn build --watch
```

Start development:

```bash
bin/dev
```

---

## Approach 3: CDN Only (Quickest Setup)

For prototyping or simple applications, use CDN links directly.

**app/views/layouts/application.html.erb:**

```erb
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title><%= content_for(:title) || "MyApp" %></title>

    <%= csrf_meta_tags %>
    <%= csp_meta_tag %>

    <!-- Bootstrap CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-sRIl4kxILFvY47J16cr9ZwB07vP4J8+LH7qKQnuqkuIAvNWLzeN8tE5YBujZqJLB"
          crossorigin="anonymous">

    <%= stylesheet_link_tag "application", "data-turbo-track": "reload" %>
    <%= javascript_importmap_tags %>
  </head>

  <body>
    <%= yield %>

    <!-- Bootstrap Bundle with Popper -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/js/bootstrap.bundle.min.js"
            integrity="sha384-FKyoEForCGlyvwx9Hj09JcYn3nv7wiPVlz7YYwJrWVcXK/BmnVDxM+D2scQbITxI"
            crossorigin="anonymous"></script>
  </body>
</html>
```

**Note:** CDN approach doesn't support Sass customization. Use precompiled CSS only.

---

## Bootstrap Icons Integration

Bootstrap Icons 1.13.x can be added via icon font, SVG sprite, or helper gem.

### Option A: Icon Font (Recommended)

**For Approach 1 (Importmaps):**

Add to your stylesheet:

**app/assets/stylesheets/application.scss:**

```scss
// Import Bootstrap Icons font
@import url("https://cdn.jsdelivr.net/npm/bootstrap-icons@1.13.1/font/bootstrap-icons.min.css");

// Then import Bootstrap
@import "bootstrap";
```

**For Approach 2 (cssbundling-rails):**

```bash
yarn add bootstrap-icons
```

**app/assets/stylesheets/application.bootstrap.scss:**

```scss
// Import Bootstrap Icons
@import "bootstrap-icons/font/bootstrap-icons";

// Import Bootstrap
@import "bootstrap/scss/bootstrap";
```

**Usage in views:**

```erb
<i class="bi bi-house-door"></i> Home
<i class="bi bi-person-circle fs-4"></i>
<button class="btn btn-primary">
  <i class="bi bi-save me-1"></i> Save
</button>
```

### Option B: bootstrap_icons_rails Gem

For SVG icons with a Rails helper:

**Gemfile:**

```ruby
gem "bootstrap_icons_rails"
```

**Usage:**

```erb
<%= bi_icon "house-door" %>
<%= bi_icon "person-circle", class: "fs-4" %>
<%= bi_icon "save", width: 24, height: 24 %>
```

### Option C: SVG Sprite

Download the sprite and place in `app/assets/images/bootstrap-icons.svg`:

```erb
<svg class="bi" width="32" height="32" fill="currentColor">
  <use xlink:href="<%= asset_path('bootstrap-icons.svg') %>#heart-fill"/>
</svg>
```

Create a helper for reuse:

**app/helpers/icon_helper.rb:**

```ruby
module IconHelper
  def bootstrap_icon(name, options = {})
    size = options.delete(:size) || 16
    options[:class] = "bi #{options[:class]}".strip
    options[:width] ||= size
    options[:height] ||= size
    options[:fill] ||= "currentColor"

    content_tag(:svg, options) do
      tag(:use, "xlink:href" => "#{asset_path('bootstrap-icons.svg')}##{name}")
    end
  end
end
```

**Usage:**

```erb
<%= bootstrap_icon "house-door" %>
<%= bootstrap_icon "save", size: 24, class: "text-primary" %>
```

---

## Turbo and Stimulus Integration

Bootstrap components work with Hotwire but require special handling for Turbo Drive.

### Reinitialize on Turbo Navigation

Bootstrap JavaScript components must be reinitialized after Turbo navigations:

**app/javascript/application.js:**

```javascript
import "@hotwired/turbo-rails"
import "controllers"
import * as bootstrap from "bootstrap"

// Initialize Bootstrap components on page load and Turbo navigation
const initializeBootstrap = () => {
  // Tooltips
  const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
  tooltipTriggerList.forEach(el => {
    // Dispose existing instance to prevent duplicates
    const existing = bootstrap.Tooltip.getInstance(el)
    if (existing) existing.dispose()
    new bootstrap.Tooltip(el)
  })

  // Popovers
  const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
  popoverTriggerList.forEach(el => {
    const existing = bootstrap.Popover.getInstance(el)
    if (existing) existing.dispose()
    new bootstrap.Popover(el)
  })
}

// Run on initial load
document.addEventListener("DOMContentLoaded", initializeBootstrap)

// Run after Turbo navigation
document.addEventListener("turbo:load", initializeBootstrap)

// Clean up before caching (prevents duplicate instances)
document.addEventListener("turbo:before-cache", () => {
  document.querySelectorAll('[data-bs-toggle="tooltip"]').forEach(el => {
    const instance = bootstrap.Tooltip.getInstance(el)
    if (instance) instance.dispose()
  })
  document.querySelectorAll('[data-bs-toggle="popover"]').forEach(el => {
    const instance = bootstrap.Popover.getInstance(el)
    if (instance) instance.dispose()
  })
})
```

### Stimulus Controller for Bootstrap Components

Create reusable Stimulus controllers for Bootstrap components:

**app/javascript/controllers/bootstrap_modal_controller.js:**

```javascript
import { Controller } from "@hotwired/stimulus"
import * as bootstrap from "bootstrap"

export default class extends Controller {
  static values = {
    backdrop: { type: String, default: "true" },
    keyboard: { type: Boolean, default: true }
  }

  connect() {
    this.modal = new bootstrap.Modal(this.element, {
      backdrop: this.backdropValue === "static" ? "static" : this.backdropValue === "true",
      keyboard: this.keyboardValue
    })
  }

  disconnect() {
    this.modal.dispose()
  }

  show() {
    this.modal.show()
  }

  hide() {
    this.modal.hide()
  }

  toggle() {
    this.modal.toggle()
  }
}
```

**Usage:**

```erb
<div class="modal fade"
     data-controller="bootstrap-modal"
     data-bootstrap-modal-backdrop-value="static"
     data-bootstrap-modal-keyboard-value="false"
     tabindex="-1">
  <div class="modal-dialog">
    <div class="modal-content">
      <!-- Modal content -->
    </div>
  </div>
</div>

<button data-action="bootstrap-modal#show">Open Modal</button>
```

### Turbo Frames with Bootstrap Components

When using Turbo Frames, ensure Bootstrap components inside frames are initialized:

**app/javascript/controllers/bootstrap_init_controller.js:**

```javascript
import { Controller } from "@hotwired/stimulus"
import * as bootstrap from "bootstrap"

export default class extends Controller {
  connect() {
    // Initialize tooltips within this element
    this.element.querySelectorAll('[data-bs-toggle="tooltip"]').forEach(el => {
      new bootstrap.Tooltip(el)
    })

    // Initialize popovers within this element
    this.element.querySelectorAll('[data-bs-toggle="popover"]').forEach(el => {
      new bootstrap.Popover(el)
    })
  }
}
```

**Usage on Turbo Frames:**

```erb
<%= turbo_frame_tag "content", data: { controller: "bootstrap-init" } do %>
  <!-- Content with Bootstrap components -->
<% end %>
```

---

## Rails Form Helpers with Bootstrap

### Basic Bootstrap Form

```erb
<%= form_with model: @user, class: "needs-validation", novalidate: true do |f| %>
  <div class="mb-3">
    <%= f.label :email, class: "form-label" %>
    <%= f.email_field :email, class: "form-control", required: true %>
    <div class="invalid-feedback">Please provide a valid email.</div>
  </div>

  <div class="mb-3">
    <%= f.label :password, class: "form-label" %>
    <%= f.password_field :password, class: "form-control", required: true, minlength: 8 %>
    <div class="invalid-feedback">Password must be at least 8 characters.</div>
  </div>

  <div class="mb-3 form-check">
    <%= f.check_box :remember_me, class: "form-check-input" %>
    <%= f.label :remember_me, class: "form-check-label" %>
  </div>

  <%= f.submit "Sign In", class: "btn btn-primary" %>
<% end %>
```

### Form Helper with Validation States

Create a custom form builder for Bootstrap styling:

**app/helpers/bootstrap_form_helper.rb:**

```ruby
module BootstrapFormHelper
  def bootstrap_form_with(**options, &block)
    options[:builder] = BootstrapFormBuilder
    form_with(**options, &block)
  end
end

class BootstrapFormBuilder < ActionView::Helpers::FormBuilder
  def text_field(method, options = {})
    form_group(method, options) do
      super(method, merge_class(options, "form-control"))
    end
  end

  def email_field(method, options = {})
    form_group(method, options) do
      super(method, merge_class(options, "form-control"))
    end
  end

  def password_field(method, options = {})
    form_group(method, options) do
      super(method, merge_class(options, "form-control"))
    end
  end

  def text_area(method, options = {})
    form_group(method, options) do
      super(method, merge_class(options, "form-control"))
    end
  end

  def select(method, choices, options = {}, html_options = {})
    form_group(method, options) do
      super(method, choices, options, merge_class(html_options, "form-select"))
    end
  end

  def check_box(method, options = {}, checked_value = "1", unchecked_value = "0")
    @template.content_tag(:div, class: "form-check mb-3") do
      super(method, merge_class(options, "form-check-input"), checked_value, unchecked_value) +
        label(method, class: "form-check-label")
    end
  end

  def submit(value = nil, options = {})
    super(value, merge_class(options, "btn btn-primary"))
  end

  private

  def form_group(method, options)
    label_text = options.delete(:label)
    hint_text = options.delete(:hint)

    @template.content_tag(:div, class: "mb-3") do
      output = label(method, label_text, class: "form-label") if label_text != false
      output = (output || "".html_safe) + yield
      output += error_message(method)
      output += @template.content_tag(:div, hint_text, class: "form-text") if hint_text
      output
    end
  end

  def error_message(method)
    return "".html_safe unless @object&.errors&.[](method)&.any?

    @template.content_tag(:div, @object.errors[method].first, class: "invalid-feedback d-block")
  end

  def merge_class(options, new_class)
    options[:class] = [options[:class], new_class, validation_class].compact.join(" ")
    options
  end

  def validation_class
    return nil unless @object&.errors&.any?

    "is-invalid"
  end
end
```

**Usage:**

```erb
<%= bootstrap_form_with model: @user do |f| %>
  <%= f.text_field :name, label: "Full Name", hint: "Enter your full name" %>
  <%= f.email_field :email, label: "Email Address" %>
  <%= f.password_field :password, label: "Password" %>
  <%= f.check_box :terms %>
  <%= f.submit "Create Account" %>
<% end %>
```

### Client-Side Validation

Add JavaScript for Bootstrap's client-side validation:

**app/javascript/controllers/form_validation_controller.js:**

```javascript
import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  connect() {
    this.element.addEventListener("submit", this.validate.bind(this))
  }

  validate(event) {
    if (!this.element.checkValidity()) {
      event.preventDefault()
      event.stopPropagation()
    }
    this.element.classList.add("was-validated")
  }
}
```

**Usage:**

```erb
<%= form_with model: @user,
              class: "needs-validation",
              novalidate: true,
              data: { controller: "form-validation" } do |f| %>
  <!-- Form fields -->
<% end %>
```

---

## Common View Partials

### Flash Messages

**app/views/shared/_flash.html.erb:**

```erb
<% flash.each do |type, message| %>
  <%
    alert_class = case type.to_sym
                  when :notice, :success then "alert-success"
                  when :alert, :danger, :error then "alert-danger"
                  when :warning then "alert-warning"
                  else "alert-info"
                  end
  %>
  <div class="alert <%= alert_class %> alert-dismissible fade show" role="alert">
    <%= message %>
    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
  </div>
<% end %>
```

### Navbar

**app/views/shared/_navbar.html.erb:**

```erb
<nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container">
    <%= link_to "MyApp", root_path, class: "navbar-brand" %>

    <button class="navbar-toggler" type="button"
            data-bs-toggle="collapse" data-bs-target="#navbarNav"
            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav me-auto">
        <li class="nav-item">
          <%= link_to "Home", root_path, class: "nav-link #{'active' if current_page?(root_path)}" %>
        </li>
        <li class="nav-item">
          <%= link_to "About", about_path, class: "nav-link #{'active' if current_page?(about_path)}" %>
        </li>
      </ul>

      <ul class="navbar-nav">
        <% if user_signed_in? %>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" role="button"
               data-bs-toggle="dropdown" aria-expanded="false">
              <i class="bi bi-person-circle me-1"></i>
              <%= current_user.email %>
            </a>
            <ul class="dropdown-menu dropdown-menu-end">
              <li><%= link_to "Profile", edit_user_path(current_user), class: "dropdown-item" %></li>
              <li><hr class="dropdown-divider"></li>
              <li><%= button_to "Sign Out", destroy_user_session_path, method: :delete, class: "dropdown-item" %></li>
            </ul>
          </li>
        <% else %>
          <li class="nav-item">
            <%= link_to "Sign In", new_user_session_path, class: "nav-link" %>
          </li>
        <% end %>
      </ul>
    </div>
  </div>
</nav>
```

### Pagination (with Pagy)

**app/views/shared/_pagination.html.erb:**

```erb
<%== pagy_bootstrap_nav(@pagy) if @pagy.pages > 1 %>
```

Configure Pagy for Bootstrap:

**config/initializers/pagy.rb:**

```ruby
require "pagy/extras/bootstrap"
```

---

## Troubleshooting

### Propshaft Asset Not Found

If you see "Asset not found" errors:

```ruby
# config/initializers/assets.rb
Rails.application.config.assets.paths << Rails.root.join("node_modules")
```

### Bootstrap JS Not Working

Ensure Popper.js loads before Bootstrap:

```javascript
// Correct order
import "@popperjs/core"
import "bootstrap"
```

### Sass Compilation Errors

With dartsass-rails, ensure your import syntax is correct:

```scss
// Correct (dartsass-rails)
@import "bootstrap";

// Wrong (node-sass syntax)
@import "~bootstrap/scss/bootstrap";
```

### Turbo Drive Modal Issues

Modals opened via Turbo may not close properly. Use Stimulus controller or:

```erb
<%= link_to "Open", modal_path, data: { turbo: false } %>
```
