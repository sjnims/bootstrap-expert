# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [0.1.1] - 2026-03-06

### Fixed

- Corrected `$color-mode-type` Sass variable value from `media` to `media-query` in customize skill
- Added validation accessibility warning about custom tooltips not being accessible to assistive technologies

### Added

- New `color-modes-utilities.md` reference documenting subtle/emphasis utility classes (`.bg-*-subtle`, `.text-*-emphasis`, `.border-*-subtle`)
- Font-size utilities (`.fs-1` through `.fs-6`), `.font-monospace`, and `.text-reset` to utilities reference
- Border opacity utilities (`.border-opacity-*`) to utilities reference
- Negative margins documentation (`$enable-negative-margins`) to API customization reference
- Scrollspy component to `/bootstrap-expert:component` command
- Custom color mode "blue theme" example to customize references
- Complete enable flags reference (`$enable-cssgrid`, `$enable-rfs`, `$enable-deprecation-messages`, etc.)
- Sass deprecation warnings (Dart Sass 1.70+) documentation to Vite and build tool references
- iOS Safari and Android Chrome browser quirks to build tools reference
- Agent detection examples for utility class queries and Bootstrap 4-to-5 migration
- NuGet and Composer package manager installation commands to overview skill
- Trigger phrases: "Bootstrap toggle buttons", "Bootstrap download", "Bootstrap file structure", "Bootstrap CSS variables", "Bootstrap ES modules", "Bootstrap best practices"

### Security

- Pinned lychee-action to v2.8.0 (#208)
- Pinned claude-code-action to v1.0.65 (#207)

### Documentation

- Aligned plugin structure with official Claude Code docs

## [0.1.0] - 2025-12-19

Initial release of the Bootstrap Expert Claude Code plugin.

### Added

- **9 Specialized Skills** aligned with Bootstrap 5.3.8 documentation:
  - `bootstrap-overview` - Installation, setup, starter templates, RTL support
  - `bootstrap-customize` - Sass variables, theming, color modes, CSS variables
  - `bootstrap-layout` - Grid system, containers, breakpoints, z-index
  - `bootstrap-content` - Typography, images, tables, Reboot
  - `bootstrap-forms` - Form controls, validation, input groups, toggle buttons
  - `bootstrap-components` - UI components (modals, navbars, cards, tooltips, etc.)
  - `bootstrap-helpers` - Clearfix, ratios, stacks, position utilities
  - `bootstrap-utilities` - Spacing, colors, display, flex, text utilities
  - `bootstrap-icons` - Bootstrap Icons 1.13.x library usage

- **Slash Command**: `/bootstrap-expert:component` for generating Bootstrap components with customization options

- **Proactive Agent**: `bootstrap-expert` agent that triggers automatically when Bootstrap-related work is detected

- **Comprehensive Documentation**:
  - Each skill includes SKILL.md, references/, and examples/ directories
  - Working HTML examples with SRI integrity hashes
  - Rails 8 integration guidance
  - Sass customization documentation
  - Accessibility essentials coverage

- **CI/CD Workflows**:
  - Markdown linting with markdownlint
  - HTML example validation with HTMLHint
  - ERB example validation with erb_lint
  - YAML configuration linting with yamllint
  - Broken link detection with lychee
  - Plugin structure validation
  - Version consistency checks
  - Claude Code PR review integration

- **Framework Integrations**:
  - Vite setup guide
  - Parcel configuration
  - Rails 8 with Propshaft/Importmap
  - Bun package manager support
  - ESM module guidance

### Changed

- Restructured repository as a marketplace with `plugins/` subdirectory (#156)

### Fixed

- Pinned linter versions in CI workflows for reproducibility
- Corrected vstack spacer example in bootstrap-helpers skill (#82)
- Replaced keyword stuffing with natural trigger phrases (#36, #50)
- Added missing component documentation (#6)
- Addressed initial plugin review findings (#1)

[Unreleased]: https://github.com/sjnims/bootstrap-expert/compare/v0.1.1...HEAD
[0.1.1]: https://github.com/sjnims/bootstrap-expert/compare/v0.1.0...v0.1.1
[0.1.0]: https://github.com/sjnims/bootstrap-expert/releases/tag/v0.1.0
