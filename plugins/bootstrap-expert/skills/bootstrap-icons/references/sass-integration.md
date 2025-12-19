# Sass Integration for Bootstrap Icons

Reference for integrating Bootstrap Icons via Sass in various build environments.

## Quick Start

### CSS Import (Simplest)

```scss
// Import compiled CSS - works everywhere
@import "bootstrap-icons/font/bootstrap-icons.css";
```

### Sass Import (Customizable)

```scss
// Import Sass source - allows variable overrides
@import "bootstrap-icons/font/bootstrap-icons";
```

## Sass Variables

Override these variables **before** importing the Sass file:

| Variable | Default | Description |
|----------|---------|-------------|
| `$bootstrap-icons-font-dir` | `"../fonts"` | Path to font files directory |
| `$bootstrap-icons-font-file` | `"bootstrap-icons"` | Font filename (without extension) |
| `$bootstrap-icons-font` | `"bootstrap-icons"` | CSS font-family name |

```scss
// Example: Custom font path
$bootstrap-icons-font-dir: "/assets/fonts";
@import "bootstrap-icons/font/bootstrap-icons";
```

## Bundler Configuration

### Vite

Vite's Sass compiler has issues with relative URLs in node_modules. Set the font directory explicitly:

```scss
// vite project - styles/main.scss
$bootstrap-icons-font-dir: "bootstrap-icons/font/fonts";
@import "bootstrap-icons/font/bootstrap-icons";
```

Alternative: Use the CSS import which bypasses Sass URL resolution:

```scss
@import "bootstrap-icons/font/bootstrap-icons.css";
```

### Parcel

Same issue as Vite. Apply the same fix:

```scss
// parcel project - src/styles.scss
$bootstrap-icons-font-dir: "bootstrap-icons/font/fonts";
@import "bootstrap-icons/font/bootstrap-icons";
```

### Webpack

Usually works with default asset modules. If fonts don't load:

```javascript
// webpack.config.js
module.exports = {
  module: {
    rules: [
      {
        test: /\.(woff|woff2)$/,
        type: 'asset/resource',
        generator: {
          filename: 'fonts/[name][ext]'
        }
      }
    ]
  }
};
```

### esbuild

Use the CSS import for simplest setup:

```javascript
// build.js
require('esbuild').build({
  entryPoints: ['src/app.js'],
  bundle: true,
  loader: {
    '.woff': 'file',
    '.woff2': 'file',
  },
  outdir: 'dist',
});
```

## Integration with Bootstrap Sass

Import Bootstrap Icons alongside Bootstrap's Sass:

```scss
// 1. Bootstrap functions (required for variables)
@import "bootstrap/scss/functions";

// 2. Your variable overrides
$primary: #0d6efd;

// 3. Bootstrap variables and mixins
@import "bootstrap/scss/variables";
@import "bootstrap/scss/mixins";

// 4. Bootstrap Icons (independent, can go anywhere)
$bootstrap-icons-font-dir: "bootstrap-icons/font/fonts";
@import "bootstrap-icons/font/bootstrap-icons";

// 5. Bootstrap components
@import "bootstrap/scss/root";
@import "bootstrap/scss/reboot";
// ... other Bootstrap imports
```

Bootstrap Icons is independent of Bootstrap's Sass variables. Import order only matters if you're using the same bundler configuration for both.

## CDN Fonts with Local Sass

Use CDN-hosted fonts while keeping Sass for customization:

```scss
// Override font path to use CDN
$bootstrap-icons-font-dir: "https://cdn.jsdelivr.net/npm/bootstrap-icons@1.13.1/font/fonts";
@import "bootstrap-icons/font/bootstrap-icons";
```

## Troubleshooting

### Icons Display as Squares

**Cause**: Font files not loading (404 errors)

**Fix**: Check browser Network tab for font requests. Verify `$bootstrap-icons-font-dir` points to correct location.

### Fonts Load in Dev, Fail in Production

**Cause**: Build process not copying font files to output directory

**Fix**: Ensure bundler is configured to handle `.woff` and `.woff2` files. Check that font paths in compiled CSS match your production URL structure.

### "Can't resolve" or "Module not found" Errors

**Cause**: Bundler can't find the bootstrap-icons package

**Fix**: Verify `bootstrap-icons` is in `package.json` dependencies and `node_modules` exists. Run `npm install`.

### Fonts Load but Icons Wrong

**Cause**: Version mismatch between CSS classes and font files

**Fix**: Ensure you're importing from the same package version. Don't mix CDN CSS with local fonts or vice versa.
