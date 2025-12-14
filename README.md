# Bootstrap Expert Plugin

[![Bootstrap](https://img.shields.io/badge/Bootstrap-5.3.8-7952B3?logo=bootstrap&logoColor=white)](https://getbootstrap.com/)
[![Bootstrap Icons](https://img.shields.io/badge/Bootstrap%20Icons-1.13.x-7952B3?logo=bootstrap&logoColor=white)](https://icons.getbootstrap.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)
[![Claude Code](https://img.shields.io/badge/Claude%20Code-Plugin-5A67D8)](https://claude.ai/code)

A comprehensive Claude Code plugin for Bootstrap 5.3.8 and Bootstrap Icons front-end development.

## Table of Contents

- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Quick Start](#quick-start)
- [Skills](#skills)
- [Commands](#commands)
- [Agent](#agent)
- [Bootstrap Version](#bootstrap-version)
- [Contributing](#contributing)
- [License](#license)

## Features

- **9 Specialized Skills** - Deep expertise aligned with Bootstrap's documentation structure
- **Component Generator** - Interactive command to generate Bootstrap components
- **Proactive Agent** - Autonomous assistant for Bootstrap development tasks

## Prerequisites

- [Claude Code](https://claude.ai/code) installed and configured

## Installation

### Local Development

```bash
claude --plugin-dir /path/to/bootstrap-expert
```

### Project Installation

Copy to your project's `.claude-plugin/` directory.

## Quick Start

Once the plugin is loaded, you can:

1. **Ask Bootstrap questions** - Skills load automatically based on your question:

   ```text
   "How do I create a responsive navbar?"
   "What's the Bootstrap grid system?"
   "How do I add form validation?"
   ```

2. **Generate components** - Use the command to create Bootstrap components:

   ```text
   /bootstrap-expert:component navbar
   /bootstrap-expert:component modal --centered --scrollable
   /bootstrap-expert:component card --with-image --horizontal
   ```

3. **Get proactive help** - The agent triggers automatically when you're working on Bootstrap-related tasks.

## Skills

| Skill | Description |
|-------|-------------|
| `bootstrap-overview` | Getting started, installation, project setup, browser support |
| `bootstrap-customize` | Sass variables, CSS custom properties, theming, color modes |
| `bootstrap-layout` | Grid system, containers, breakpoints, columns, CSS Grid |
| `bootstrap-content` | Typography, images, tables, figures, Reboot |
| `bootstrap-forms` | Form controls, validation, input groups, floating labels |
| `bootstrap-components` | All UI components (modals, navbars, cards, accordions, etc.) |
| `bootstrap-helpers` | Clearfix, ratios, stacks, stretched links, visually hidden |
| `bootstrap-utilities` | Spacing, colors, display, flex, position, sizing, text |
| `bootstrap-icons` | Icons library installation, usage, styling, accessibility |

## Commands

### `/bootstrap-expert:component [component-name]`

Generate Bootstrap component code interactively or with full arguments.

**Interactive mode:**

```text
/bootstrap-expert:component navbar
```

**With arguments:**

```text
/bootstrap-expert:component navbar --dark --fixed-top --with-search
```

**Supported components:**

- `navbar` - Navigation bars with various configurations
- `modal` - Modal dialogs with customizable options
- `card` - Card layouts with images, headers, footers
- `accordion` - Collapsible content panels
- `carousel` - Image/content sliders
- `dropdown` - Dropdown menus
- `tabs` / `nav-tabs` - Tabbed navigation
- `form` - Form layouts with validation
- `table` - Responsive data tables
- `alert` - Alert messages
- `toast` - Toast notifications
- `offcanvas` - Offcanvas sidebars
- `pagination` - Page navigation
- `breadcrumb` - Breadcrumb navigation
- `button-group` - Grouped buttons
- `list-group` - List items with actions
- `progress` - Progress bars
- `spinner` - Loading indicators

## Agent

The `bootstrap-expert` agent triggers proactively when Bootstrap-related work is detected, helping with:

- **Component Implementation** - Guidance on implementing Bootstrap components correctly
- **Layout Troubleshooting** - Solving grid system and responsive design issues
- **Accessibility** - Ensuring components meet WCAG guidelines with proper ARIA attributes
- **Code Review** - Reviewing Bootstrap code for best practices and optimization
- **Migration Help** - Assistance upgrading from older Bootstrap versions

**Example triggers:**

- Creating or editing HTML files with Bootstrap classes
- Discussing responsive layouts or breakpoints
- Working with Bootstrap JavaScript components
- Asking about Bootstrap customization or theming

## Bootstrap Version

This plugin targets **Bootstrap 5.3.8** and **Bootstrap Icons 1.13.x**.

All generated code, class names, and documentation align with these versions. When Bootstrap releases updates, this plugin will be updated accordingly.

## Contributing

Contributions are welcome! Please read our [Contributing Guide](CONTRIBUTING.md) before submitting a Pull Request.

For security issues, please see our [Security Policy](SECURITY.md).

## License

MIT - see [LICENSE](LICENSE) for details.
