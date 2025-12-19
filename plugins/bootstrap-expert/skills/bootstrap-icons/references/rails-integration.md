# Rails 8 Integration for Bootstrap Icons

Reference for integrating Bootstrap Icons with Rails 8's Propshaft asset pipeline.

## Quick Decision Guide

| Approach | Node.js Required? | Best For |
|----------|-------------------|----------|
| Source files + dartsass-rails | No | Full control, Sass customization |
| Propshaft static CSS | No | Simplest no-Node.js setup |
| CDN | No | Quick start, prototypes |
| bootstrap-icons gem | No | Inline SVG with Ruby helpers |
| cssbundling-rails | Yes | Projects already using Node.js |

## Source Files + dartsass-rails (Recommended)

Build Bootstrap Icons directly into the Rails asset pipeline using source files and Dart Sass. No Node.js required.

### 1. Add dartsass-rails

```ruby
# Gemfile
gem "dartsass-rails"
```

```bash
bundle install
rails dartsass:install
```

dartsass-rails downloads a standalone Dart Sass binary—no Node.js needed.

### 2. Download Bootstrap Icons Source

Download the latest release from [GitHub](https://github.com/twbs/icons/releases):

```bash
# Download and extract
curl -L https://github.com/twbs/icons/archive/refs/tags/v1.13.1.tar.gz | tar -xz

# Or download ZIP manually from:
# https://github.com/twbs/icons/releases
```

### 3. Copy Files to Rails

```bash
# Create directories
mkdir -p vendor/assets/stylesheets/bootstrap-icons
mkdir -p app/assets/fonts

# Copy Sass source
cp icons-1.13.1/font/bootstrap-icons.scss vendor/assets/stylesheets/bootstrap-icons/
cp -r icons-1.13.1/font/fonts/* app/assets/fonts/

# Clean up
rm -rf icons-1.13.1
```

Final structure:

```
app/
└── assets/
    └── fonts/
        ├── bootstrap-icons.woff
        └── bootstrap-icons.woff2
vendor/
└── assets/
    └── stylesheets/
        └── bootstrap-icons/
            └── bootstrap-icons.scss
```

### 4. Configure Asset Paths

```ruby
# config/initializers/assets.rb
Rails.application.config.assets.paths << Rails.root.join("app/assets/fonts")
```

### 5. Import in Sass

```scss
// app/assets/stylesheets/application.scss

// Set font path BEFORE import (relative to compiled CSS location)
$bootstrap-icons-font-dir: "/assets";

@import "bootstrap-icons/bootstrap-icons";
```

### 6. Verify Setup

```bash
bin/rails dartsass:build
bin/rails server
```

Check that icons render: `<i class="bi bi-heart-fill"></i>`

## Propshaft with Static CSS (No Sass)

For projects not using Sass, serve pre-compiled CSS directly.

### Setup

1. Download from [GitHub releases](https://github.com/twbs/icons/releases)

2. Copy files:

```
vendor/
└── assets/
    ├── stylesheets/
    │   └── bootstrap-icons.min.css
    └── fonts/
        ├── bootstrap-icons.woff
        └── bootstrap-icons.woff2
```

3. Edit CSS font paths (Propshaft flattens directories):

```css
/* vendor/assets/stylesheets/bootstrap-icons.min.css */
/* Find and replace: url("./fonts/ → url(" */
```

4. Configure asset paths:

```ruby
# config/initializers/assets.rb
Rails.application.config.assets.paths << Rails.root.join("vendor/assets/fonts")
```

5. Add to layout:

```erb
<%= stylesheet_link_tag "bootstrap-icons.min.css" %>
```

## CDN

Simplest approach—add to layout with no configuration:

```erb
<%# app/views/layouts/application.html.erb %>
<%= stylesheet_link_tag "https://cdn.jsdelivr.net/npm/bootstrap-icons@1.13.1/font/bootstrap-icons.min.css",
    integrity: "sha384-CK2SzKma4jA5H/MXDUU7i1TqZlCFaD4T01vtyDFvPlD97JQyS+IsSh1nI2EFbpyk",
    crossorigin: "anonymous" %>
```

## bootstrap-icons Gem (Inline SVG)

For inline SVG icons without font files.

```ruby
# Gemfile
gem "bootstrap-icons"
```

```erb
<%# In views %>
<%= bootstrap_icon "heart" %>
<%= bootstrap_icon "heart-fill", width: 24, height: 24, class: "text-danger" %>
```

**Benefits:** No font files, SVG renders inline, full control over attributes.

## cssbundling-rails (Node.js)

For projects already using Node.js tooling.

```bash
rails new myapp --css bootstrap
npm install bootstrap-icons
```

```scss
// app/assets/stylesheets/application.bootstrap.scss
@import 'bootstrap/scss/bootstrap';
@import 'bootstrap-icons/font/bootstrap-icons';
```

## Troubleshooting

### Icons Display as Squares

**Cause:** Font files not loading (404 errors)

**Fix:**
1. Check browser Network tab for `.woff`/`.woff2` requests
2. Verify files exist in `app/assets/fonts/` or `vendor/assets/fonts/`
3. Ensure asset path is configured in `config/initializers/assets.rb`
4. Check `$bootstrap-icons-font-dir` matches your setup

### "Asset not found" Errors

**Cause:** Propshaft can't find font files

**Fix:**
```ruby
# config/initializers/assets.rb
Rails.application.config.assets.paths << Rails.root.join("app/assets/fonts")
```

### Fonts Work in Dev, Fail in Production

**Cause:** Font path doesn't account for asset fingerprinting

**Fix:** Use absolute path from root:
```scss
$bootstrap-icons-font-dir: "/assets";
```

Or use `asset-url()` helper if your Sass setup supports it.

### dartsass:build Fails

**Cause:** Sass can't find import

**Fix:** Ensure `vendor/assets/stylesheets` is in the load path:
```ruby
# config/initializers/dartsass.rb
Rails.application.config.dartsass.builds = {
  "application.scss" => "application.css"
}
```

Check that `bootstrap-icons.scss` is in `vendor/assets/stylesheets/bootstrap-icons/`.
