# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Bootstrap Expert is a Claude Code plugin providing comprehensive Bootstrap 5.3.8 and Bootstrap Icons 1.13.x expertise. It contains 9 specialized skills, 1 slash command, and 1 proactive agent for front-end development assistance.

## Quick Reference

**Current Version**: v0.1.0 (see [CHANGELOG.md](CHANGELOG.md) for release history)

### Quick Links

| Topic | Location |
|-------|----------|
| Testing locally | [Testing the Plugin](#testing-the-plugin) |
| Version release | [Publishing & Version Management](#publishing--version-management) |
| Linting | [Run All Lints](#run-all-lints) |
| Architecture | [Architecture](#architecture) |
| CI/CD | [CI Workflows](#ci-workflows) |

### Commands

| Task | Command |
|------|---------|
| Load plugin | `claude --plugin-dir /path/to/bootstrap-expert` |
| Generate component | `/bootstrap-expert:component navbar` |
| Lint markdown | `npx markdownlint-cli2 '**/*.md' '#node_modules'` |
| Fix markdown | `npx markdownlint-cli2 '**/*.md' '#node_modules' --fix` |
| Lint HTML | `npx htmlhint 'plugins/**/examples/*.html'` |
| Lint ERB | `erb_lint --lint-all` (requires `gem install erb_lint`) |
| Lint YAML | `pipx run yamllint -c .yamllint.yml .github/ .claude-plugin/ plugins/*/.claude-plugin/` |
| Check links | `lychee --exclude-file .lycheeignore '**/*.md'` |
| Run all lints | See "Run All Lints" section below |

## Testing the Plugin

Test in a separate directory to avoid polluting the development environment:

```bash
mkdir /tmp/test-bootstrap-plugin && cd /tmp/test-bootstrap-plugin && git init
claude --plugin-dir /path/to/bootstrap-expert

# Test the command
/bootstrap-expert:component navbar

# Clean up
rm -rf /tmp/test-bootstrap-plugin
```

## Run All Lints

Run all linters before committing:

```bash
npx markdownlint-cli2 '**/*.md' '#node_modules' && \
npx htmlhint 'plugins/**/examples/*.html' && \
erb_lint --lint-all && \
pipx run yamllint -c .yamllint.yml .github/ .claude-plugin/ plugins/*/.claude-plugin/
```

## Architecture

```text
bootstrap-expert/
├── .claude-plugin/
│   └── marketplace.json       # Marketplace manifest
└── plugins/
    └── bootstrap-expert/
        ├── .claude-plugin/
        │   └── plugin.json    # Plugin manifest
        ├── agents/
        │   └── bootstrap-expert.md  # Proactive agent for Bootstrap tasks
        ├── commands/
        │   └── bootstrap/
        │       └── component.md     # /bootstrap-expert:component generator
        └── skills/                  # 9 skills aligned with Bootstrap docs
            ├── bootstrap-overview/  # Installation, setup, starter templates
            ├── bootstrap-customize/ # Sass variables, theming, color modes
            ├── bootstrap-layout/    # Grid system, containers, breakpoints
            ├── bootstrap-content/   # Typography, images, tables
            ├── bootstrap-forms/     # Form controls, validation
            ├── bootstrap-components/# UI components (modals, navbars, cards)
            ├── bootstrap-helpers/   # Clearfix, ratios, stacks
            ├── bootstrap-utilities/ # Spacing, colors, display, flex
            └── bootstrap-icons/     # Icon library usage
```

### Skill Structure

Each skill directory follows this pattern:

- `SKILL.md` - Core knowledge (1,000-2,200 words)
- `references/` - Detailed documentation
- `examples/` - Code examples and templates

### Component Flow

1. User asks Bootstrap question → Relevant skill loads automatically
2. User runs `/bootstrap-expert:component navbar` → Command prompts for options → Generates code
3. Bootstrap work detected → `bootstrap-expert` agent triggers proactively

## Development Guidelines

### Markdown Style (from `.markdownlint.json`)

- ATX-style headers (`#`, `##`, `###`)
- Dash-style lists (`-`)
- 2-space list indentation
- Fenced code blocks (not indented)
- No line length limits
- Allowed HTML: `<p>`, `<img>`, `<example>`, `<commentary>`, `<details>`, `<summary>`, `<strong>`, `<br>`

### HTML Style (from `.htmlhintrc`)

Example HTML files in `plugins/**/examples/` are validated with HTMLHint:

- Tag pairs must match (no unclosed tags)
- Attribute values use double quotes
- No duplicate attributes or IDs
- Images require `alt` attributes
- Consistent space indentation
- `doctype-first` disabled (examples are often partials)
- `attr-lowercase` disabled (allows Bootstrap's `data-bs-*` attributes)

### ERB Style (from `.erb_lint.yml`)

Rails ERB example files in `plugins/**/examples/` are validated with erb_lint:

- Extra blank lines detected
- Trailing whitespace detected
- Files must end with newline
- Consistent spacing around ERB tags
- Right trim style enforced (`-%>`)
- `ClosingErbTagIndent` disabled (examples contain ERB snippets in comments)

### YAML Style (from `.yamllint.yml`)

YAML configuration files are validated with yamllint:

- 2-space indentation
- No line length limit (workflows have long prompts)
- Document start markers (`---`) not required
- Truthy values allowed (`yes`, `no`, `on`, `off`)

### Ignored Paths (from `.markdownlintignore`)

The following paths are excluded from markdown linting:

- `node_modules/` - npm dependencies
- `.git/` - Git internal files
- `CHANGELOG.md` - Auto-generated content

### Shell Pattern Escaping

In skill files, use `[BANG]` instead of `!` to prevent shell execution during skill loading ([Claude Code #12781](https://github.com/anthropics/claude-code/issues/12781)):

```markdown
<!-- In SKILL.md or references/ -->
Current branch: [BANG]`git branch --show-current`
```

This only applies to skill documentation files, not command files.

### YAML Frontmatter Requirements

**Skills:**

```yaml
---
name: skill-name
description: This skill should be used when the user asks to "trigger phrase"...
---
```

**Commands:**

```yaml
---
name: command-name
description: Brief description
argument-hint: [optional-argument]
allowed-tools: Read, Write, Edit, AskUserQuestion
---
```

**Agents:**

```yaml
---
name: agent-name
description: Use this agent when...
model: inherit
color: cyan
tools: Read, Write, Edit, Grep, Glob
---
```

## CI Workflows

| Workflow | Purpose |
|----------|---------|
| `markdownlint.yml` | Markdown style checks |
| `html-lint.yml` | HTML example validation |
| `erb-lint.yml` | ERB example validation |
| `yaml-lint.yml` | YAML configuration consistency |
| `links.yml` | Broken link detection |
| `component-validation.yml` | Plugin structure validation |
| `version-check.yml` | Version consistency |
| `validate-workflows.yml` | GitHub Actions syntax validation |
| `claude-pr-review.yml` | AI code review |
| `ci-failure-analysis.yml` | Automated CI failure analysis |
| `claude.yml` | Claude Code integration |
| `greet.yml` | Welcome new contributors |
| `stale.yml` | Stale issue/PR management |
| `sync-labels.yml` | Label synchronization |
| `semantic-labeler.yml` | Auto-label PRs by file paths |
| `weekly-maintenance.yml` | Weekly maintenance tasks |

### GitHub Actions SHA Pinning

This repo pins actions by full commit SHA (not version tags) for supply chain security:

```yaml
# Correct - pinned by SHA with version comment
- uses: actions/checkout@8e8c483db84b4bee98b60c0593521ed34d9990e8 # v4.3.0

# Avoid - vulnerable to tag manipulation
- uses: actions/checkout@v4
```

To find the SHA for an action version:

1. Go to the action's GitHub repository
2. Click "Releases" or "Tags"
3. Find the version and copy the full 40-character commit SHA

## Common Mistakes

| Mistake | Solution |
|---------|----------|
| Using `!` in skill docs | Use `[BANG]` placeholder to prevent shell execution |
| Missing trigger phrases | Include specific queries in skill `description` field |
| Large SKILL.md files | Keep 1,000-2,200 words; use `references/` for details |
| Missing frontmatter | Always include `name` and `description` fields |
| Old Bootstrap classes | Verify against Bootstrap 5.3.8 docs; use `data-bs-*` not `data-*` |
| Testing in dev repo | Use `/tmp/test-bootstrap-plugin` to avoid pollution |

## Troubleshooting

### Plugin Not Loading

**Symptoms:** Commands not available, skills not triggering

**Solutions:**

1. Verify plugin path is correct: `claude --plugin-dir /absolute/path/to/bootstrap-expert`
2. Check `plugin.json` exists in `.claude-plugin/` directory
3. Ensure no syntax errors in YAML frontmatter

### Skills Not Triggering

**Symptoms:** Asking Bootstrap questions but skills don't load

**Solutions:**

1. Check skill's `description` field includes trigger phrases matching user queries
2. Verify `SKILL.md` has valid YAML frontmatter
3. Ensure skill name in frontmatter matches directory name

### Markdown Lint Errors

**Symptoms:** CI fails with markdownlint errors

**Solutions:**

1. Run `npx markdownlint-cli2 '**/*.md' '#node_modules'` to see errors
2. Auto-fix with `--fix` flag
3. Check `.markdownlint.json` for allowed patterns

### Command Not Found

**Symptoms:** `/bootstrap-expert:component` shows "command not found"

**Solutions:**

1. Ensure plugin is loaded with `--plugin-dir` flag
2. Check command file exists at `plugins/bootstrap-expert/commands/bootstrap/component.md`
3. Verify command has valid YAML frontmatter with `name` field

## Publishing & Version Management

### Version Files

Version must be synchronized across these files on release:

- `plugins/bootstrap-expert/.claude-plugin/plugin.json` (source of truth)
- `.claude-plugin/marketplace.json` (metadata.version AND plugins[0].version)
- `CLAUDE.md` (Quick Reference section)

```bash
# Verify version consistency
rg '"version"' plugins/bootstrap-expert/.claude-plugin/plugin.json .claude-plugin/marketplace.json
rg 'Current Version.*v[0-9]' CLAUDE.md
```

### Version Release Procedure

When releasing a new version (e.g., v0.x.x), follow this procedure:

#### 1. Create Release Branch

```bash
# Ensure main is up to date
git checkout main
git pull origin main

# Create release branch
git checkout -b release/v0.x.x
```

#### 2. Update Version Numbers

Update version in **all version files** (must match):

- `plugins/bootstrap-expert/.claude-plugin/plugin.json` (source of truth)
- `.claude-plugin/marketplace.json` (metadata.version AND plugins[0].version)
- `CLAUDE.md` (Quick Reference section)

```bash
# Find current version to replace
rg '"version"' plugins/bootstrap-expert/.claude-plugin/plugin.json

# Update all version files, then verify
rg '"version"' plugins/bootstrap-expert/.claude-plugin/plugin.json .claude-plugin/marketplace.json
rg 'Current Version.*v[0-9]' CLAUDE.md
```

#### 3. Update Documentation

- `CHANGELOG.md` - Add release notes following Keep a Changelog format:
  1. Review commits since last release: `git log v0.x.x..HEAD --oneline`
  2. Organize into sections: Added, Changed, Fixed, Security, Performance, Documentation
  3. Group related changes and reference PR numbers
  4. Add version comparison links at bottom of file
- Any other relevant documentation

> **Note**: The README.md version badge updates automatically from GitHub releases.

#### 4. Test and Validate

```bash
# Run all linters
npx markdownlint-cli2 '**/*.md' '#node_modules' && \
npx htmlhint 'plugins/**/examples/*.html' && \
erb_lint --lint-all && \
pipx run yamllint -c .yamllint.yml .github/ .claude-plugin/ plugins/*/.claude-plugin/

# Verify version consistency
rg '"version"' plugins/bootstrap-expert/.claude-plugin/plugin.json .claude-plugin/marketplace.json
rg 'Current Version.*v[0-9]' CLAUDE.md

# Load plugin locally and test (in separate directory)
mkdir /tmp/test-bootstrap-plugin && cd /tmp/test-bootstrap-plugin && git init
claude --plugin-dir /path/to/bootstrap-expert

# Test skills load correctly by asking trigger questions
# Test command: /bootstrap-expert:component navbar
# Test agent triggers appropriately for Bootstrap tasks

# Clean up
rm -rf /tmp/test-bootstrap-plugin
```

#### 5. Commit and Create PR

```bash
# Commit version bump and documentation updates
git add .
git commit -m "chore: prepare release v0.x.x"

# Push release branch
git push origin release/v0.x.x

# Create pull request
gh pr create --title "chore: prepare release v0.x.x" \
  --body "Version bump to v0.x.x

## Changes
- [List major changes]
- [List bug fixes]
- [List documentation updates]

## Checklist
- [x] Version updated in plugin.json, marketplace.json, CLAUDE.md
- [x] CHANGELOG.md updated with release notes
- [x] All linters pass
- [x] Plugin tested locally
"
```

#### 6. Merge and Create Release

After PR review and approval:

```bash
# Merge PR via GitHub UI or:
gh pr merge --squash --delete-branch

# Create GitHub Release (this also creates the tag atomically)
gh release create v0.x.x \
  --target main \
  --title "v0.x.x" \
  --notes-file - <<'EOF'
## Summary

Brief description of the release focus.

## What's Changed

[Copy relevant sections from CHANGELOG.md]

**Full Changelog**: https://github.com/sjnims/bootstrap-expert/compare/v0.x-1.x...v0.x.x
EOF
```

**Note**: Main branch is protected and requires PRs. All version bumps must go through the release branch workflow. The `--target main` flag ensures the tag is created on the correct commit.

**Publishing**: The entire repository acts as a marketplace. The `plugins/bootstrap-expert/` directory is the distributable plugin unit.
