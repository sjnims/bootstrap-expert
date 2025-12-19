# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Bootstrap Expert is a Claude Code plugin providing comprehensive Bootstrap 5.3.8 and Bootstrap Icons 1.13.x expertise. It contains 9 specialized skills, 1 slash command, and 1 proactive agent for front-end development assistance.

## Quick Reference

**Current Version**: v0.1.0

| Task | Command |
|------|---------|
| Load plugin | `claude --plugin-dir /path/to/bootstrap-expert` |
| Generate component | `/bootstrap-expert:component navbar` |
| Lint markdown | `markdownlint '**/*.md' --ignore node_modules` |
| Fix markdown | `markdownlint '**/*.md' --ignore node_modules --fix` |
| Lint HTML | `npx htmlhint 'skills/**/examples/*.html'` |
| Lint ERB | `erb_lint --lint-all` |
| Lint YAML | `uvx yamllint -c .yamllint.yml .github/ .claude-plugin/` |
| Check links | `lychee --config .lycheeignore '**/*.md'` |

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

## Architecture

```text
bootstrap-expert/
├── .claude-plugin/
│   └── plugin.json          # Plugin manifest
├── agents/
│   └── bootstrap-expert.md  # Proactive agent for Bootstrap tasks
├── commands/
│   └── bootstrap/
│       └── component.md     # /bootstrap-expert:component generator command
└── skills/                  # 9 skills aligned with Bootstrap docs structure
    ├── bootstrap-overview/  # Installation, setup, starter templates
    ├── bootstrap-customize/ # Sass variables, theming, color modes
    ├── bootstrap-layout/    # Grid system, containers, breakpoints
    ├── bootstrap-content/   # Typography, images, tables
    ├── bootstrap-forms/     # Form controls, validation
    ├── bootstrap-components/# UI components (modals, navbars, cards, etc.)
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
- Allowed HTML: `<p>`, `<img>`, `<example>`, `<commentary>`, `<details>`, `<summary>`, `<strong>`

### HTML Style (from `.htmlhintrc`)

Example HTML files in `skills/**/examples/` are validated with HTMLHint:

- Tag pairs must match (no unclosed tags)
- Attribute values use double quotes
- No duplicate attributes or IDs
- Images require `alt` attributes
- Consistent space indentation
- `doctype-first` disabled (examples are often partials)
- `attr-lowercase` disabled (allows Bootstrap's `data-bs-*` attributes)

### ERB Style (from `.erb_lint.yml`)

Rails ERB example files in `skills/**/examples/` are validated with erb_lint:

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

In skill files, use `[BANG]` instead of `!` to prevent shell execution during skill loading:

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

1. Run `markdownlint '**/*.md' --ignore node_modules` to see errors
2. Auto-fix with `--fix` flag
3. Check `.markdownlint.json` for allowed patterns

### Command Not Found

**Symptoms:** `/bootstrap-expert:component` shows "command not found"

**Solutions:**

1. Ensure plugin is loaded with `--plugin-dir` flag
2. Check command file exists at `commands/bootstrap/component.md`
3. Verify command has valid YAML frontmatter with `name` field

## Version Release Procedure

1. Update version in `.claude-plugin/plugin.json`
2. Update `CHANGELOG.md` with changes
3. Ensure all CI checks pass
4. Create GitHub release with tag matching version (e.g., `v0.1.0`)
