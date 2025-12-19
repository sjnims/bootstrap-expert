# Build Tool Integration

Complete setup guides for integrating Bootstrap 5.3 with modern build tools.

## Vite (Recommended)

Vite offers the fastest development experience with instant hot module replacement.

### Project Setup

```bash
# Create project
npm create vite@latest my-bootstrap-app -- --template vanilla
cd my-bootstrap-app

# Install dependencies
npm install bootstrap @popperjs/core
npm install -D sass

# Start development
npm run dev
```

### File Structure

```
my-bootstrap-app/
├── index.html
├── package.json
├── vite.config.js
├── src/
│   ├── main.js
│   └── scss/
│       ├── styles.scss
│       └── _custom.scss
```

### Configuration

**vite.config.js:**
```javascript
import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
  root: path.resolve(__dirname, 'src'),
  build: {
    outDir: '../dist'
  },
  server: {
    port: 8080,
    hot: true
  },
  resolve: {
    alias: {
      '~bootstrap': path.resolve(__dirname, 'node_modules/bootstrap'),
    }
  }
});
```

**src/scss/styles.scss:**
```scss
// 1. Include functions first (for variable manipulation)
@import "~bootstrap/scss/functions";

// 2. Custom variables (before Bootstrap's variables)
@import "custom";

// 3. Include Bootstrap
@import "~bootstrap/scss/bootstrap";
```

**src/scss/_custom.scss:**
```scss
// Custom variable overrides
$primary: #0074d9;
$enable-rounded: true;
$enable-shadows: true;

// Custom theme colors
$custom-colors: (
  "custom": #900
);
```

**src/main.js:**
```javascript
// Import our custom CSS
import './scss/styles.scss';

// Import Bootstrap JS
import * as bootstrap from 'bootstrap';

// Or import only what you need
// import { Modal, Tooltip, Popover } from 'bootstrap';

// Initialize tooltips
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
const tooltipList = [...tooltipTriggerList].map(el => new bootstrap.Tooltip(el));
```

**index.html:**
```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Bootstrap + Vite</title>
  </head>
  <body>
    <div class="container py-4">
      <h1>Hello, Bootstrap + Vite!</h1>
      <button class="btn btn-primary" data-bs-toggle="tooltip" title="Tooltip text">
        Hover me
      </button>
    </div>
    <script type="module" src="./main.js"></script>
  </body>
</html>
```

---

## Parcel

Parcel offers zero-configuration bundling with automatic transforms.

### Project Setup

```bash
mkdir my-bootstrap-app && cd my-bootstrap-app
npm init -y
npm install bootstrap @popperjs/core
npm install -D parcel
```

### File Structure

```
my-bootstrap-app/
├── package.json
├── src/
│   ├── index.html
│   ├── js/
│   │   └── main.js
│   └── scss/
│       └── styles.scss
```

### Configuration

**package.json:**
```json
{
  "name": "my-bootstrap-app",
  "scripts": {
    "start": "parcel serve src/index.html --open",
    "build": "parcel build src/index.html"
  },
  "devDependencies": {
    "parcel": "^2.0.0"
  },
  "dependencies": {
    "@popperjs/core": "^2.11.0",
    "bootstrap": "^5.3.8"
  }
}
```

**src/index.html:**
```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Bootstrap + Parcel</title>
    <link rel="stylesheet" href="scss/styles.scss">
  </head>
  <body>
    <div class="container py-4">
      <h1>Hello, Bootstrap + Parcel!</h1>
    </div>
    <script type="module" src="js/main.js"></script>
  </body>
</html>
```

**src/scss/styles.scss:**
```scss
// Import all of Bootstrap's CSS
@import "~bootstrap/scss/bootstrap";
```

**src/js/main.js:**
```javascript
// Import Bootstrap JS
import * as bootstrap from 'bootstrap';
```

---

## Webpack

Webpack provides maximum control over the build process.

### Project Setup

```bash
mkdir my-bootstrap-app && cd my-bootstrap-app
npm init -y
npm install bootstrap @popperjs/core
npm install -D webpack webpack-cli webpack-dev-server \
    css-loader sass sass-loader style-loader \
    html-webpack-plugin mini-css-extract-plugin \
    autoprefixer postcss postcss-loader purgecss-webpack-plugin
```

### File Structure

```
my-bootstrap-app/
├── package.json
├── webpack.config.js
├── postcss.config.js
├── src/
│   ├── index.html
│   ├── js/
│   │   └── main.js
│   └── scss/
│       └── styles.scss
└── dist/
```

### Configuration

**webpack.config.js:**
```javascript
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode: 'development',
  entry: './src/js/main.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  devServer: {
    static: path.resolve(__dirname, 'dist'),
    port: 8080,
    hot: true
  },
  plugins: [
    new HtmlWebpackPlugin({ template: './src/index.html' }),
    new MiniCssExtractPlugin()
  ],
  module: {
    rules: [
      {
        test: /\.(scss)$/,
        use: [
          { loader: MiniCssExtractPlugin.loader },
          { loader: 'css-loader' },
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [require('autoprefixer')]
              }
            }
          },
          { loader: 'sass-loader' }
        ]
      }
    ]
  }
};
```

**postcss.config.js:**
```javascript
module.exports = {
  plugins: [
    require('autoprefixer')
  ]
};
```

**package.json scripts:**
```json
{
  "scripts": {
    "start": "webpack serve --open",
    "build": "webpack --mode production"
  }
}
```

---

## Tree Shaking JavaScript

Import only the components you need to reduce bundle size:

```javascript
// Instead of importing everything
// import * as bootstrap from 'bootstrap';

// Import only what you need
import { Alert, Button, Collapse, Modal, Tooltip } from 'bootstrap';

// Initialize specific components
const myModal = new Modal('#myModal');
```

## Tree Shaking CSS with Sass

Import only the Bootstrap modules you need:

```scss
// Required
@import "bootstrap/scss/functions";
@import "bootstrap/scss/variables";
@import "bootstrap/scss/variables-dark";
@import "bootstrap/scss/maps";
@import "bootstrap/scss/mixins";
@import "bootstrap/scss/root";

// Optional - include what you need
@import "bootstrap/scss/reboot";
@import "bootstrap/scss/type";
@import "bootstrap/scss/containers";
@import "bootstrap/scss/grid";
@import "bootstrap/scss/buttons";
@import "bootstrap/scss/forms";
@import "bootstrap/scss/utilities";
@import "bootstrap/scss/utilities/api";
```

## PurgeCSS Integration

Remove unused CSS for smaller bundles:

**webpack.config.js addition:**
```javascript
const { PurgeCSSPlugin } = require('purgecss-webpack-plugin');
const glob = require('glob');

// Add to plugins array:
new PurgeCSSPlugin({
  paths: glob.sync(`${path.join(__dirname, 'src')}/**/*`, { nodir: true }),
  safelist: {
    standard: [/^modal/, /^tooltip/, /^popover/, /^dropdown/, /^collapse/]
  }
})
```

Note: Safelist dynamically added classes from JavaScript components.
