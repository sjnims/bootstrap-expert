# Security Policy

## Supported Versions

This plugin has not yet had an official release. Security updates will be applied to:

| Version | Supported          |
| ------- | ------------------ |
| 0.1.x   | :white_check_mark: |

## Reporting a Vulnerability

**Please do not report security vulnerabilities through public GitHub issues.**

Instead, please report them using one of the following methods:

### Preferred: GitHub Private Vulnerability Reporting

1. Go to the [Security Advisories](https://github.com/sjnims/bootstrap-expert/security/advisories) page
2. Click "Report a vulnerability"
3. Fill out the advisory details form

This is the preferred method as it allows us to work with you privately to fix the issue before public disclosure.

### Alternative: Email

If you prefer, you can also email security concerns to: **<sjnims@gmail.com>**

Please include:

- Type of issue (e.g., code injection, cross-site scripting, etc.)
- Full paths of source file(s) related to the issue
- Location of the affected source code (tag/branch/commit or direct URL)
- Step-by-step instructions to reproduce the issue
- Proof-of-concept or exploit code (if possible)
- Impact of the issue, including how an attacker might exploit it

## What to Expect

After you submit a vulnerability report, you can expect:

1. **Acknowledgment**: We'll acknowledge receipt of your report within 48 hours
2. **Initial Assessment**: We'll assess the issue and determine its severity within 5 business days
3. **Regular Updates**: We'll keep you informed about our progress
4. **Fix Timeline**: We aim to release a fix within 30 days for critical issues, 90 days for others
5. **Credit**: With your permission, we'll credit you in the security advisory and release notes

## Security Update Process

When a security vulnerability is confirmed:

1. We'll develop and test a fix
2. We'll prepare a security advisory
3. We'll coordinate disclosure timing with you
4. We'll release the fix and publish the advisory
5. We'll update this SECURITY.md if needed

## Security Best Practices for Users

### For Plugin Users

1. **Keep Updated**: Always use the latest version of the plugin
2. **Review Commands**: Review what the `/bootstrap-expert:component` command does before running it
3. **Verify Output**: Always review generated Bootstrap code before using in production
4. **Use Trusted Sources**: Only load Bootstrap CSS/JS from official CDN or npm packages

### For Contributors

1. **No Secrets in Code**: Never commit API keys, tokens, or credentials
2. **Code Review**: All changes go through pull request review
3. **Linting**: Run `markdownlint`, `htmlhint`, and `yamllint` before committing to catch potential issues
4. **Test Locally**: Always test with `claude --plugin-dir .` before pushing

## Known Security Mitigations

### Shell Pattern Escaping with [BANG] Placeholder

**Issue**: [Claude Code #12781](https://github.com/anthropics/claude-code/issues/12781)

Due to a Claude Code issue, inline bash execution patterns (exclamation mark followed by backtick) inside fenced code blocks can be executed when skills are loaded—even when they appear as documentation examples.

**Mitigation**: This plugin uses a `[BANG]` placeholder instead of `!` in skill documentation that shows bash execution patterns.

```markdown
<!-- UNSAFE - may execute during skill load -->
Current branch: !`git branch --show-current`

<!-- SAFE - displays as documentation only -->
Current branch: [BANG]`git branch --show-current`
```

**For maintainers**:

- Do NOT "fix" `[BANG]` back to `!` - this is intentional
- When adding new documentation with bash patterns, use `[BANG]`
- Audit command: `rg '!\`' skills/ --glob '*.md' | rg -v '\[BANG\]'`
- See [CONTRIBUTING.md](CONTRIBUTING.md) for documentation guidelines

## Scope

This security policy applies to:

- The Bootstrap Expert Claude Code plugin
- All components: commands, skills, and the agent
- Documentation that affects security

## Out of Scope

The following are **not** covered by this security policy:

- Vulnerabilities in Claude Code itself (report to Anthropic)
- Vulnerabilities in Bootstrap framework (report to Bootstrap team)
- Vulnerabilities in Bootstrap Icons (report to Bootstrap team)
- Third-party integrations not maintained by this project

## Security Disclosure Policy

We follow **coordinated disclosure**:

- We'll work with you to understand and fix the issue
- We'll agree on a disclosure timeline (typically 90 days)
- We'll credit you (if you wish) when we publish the advisory
- We ask that you don't publicly disclose until we've released a fix

## Recognition

We appreciate the security research community's efforts to improve the security of this plugin. Security researchers who responsibly disclose vulnerabilities will be:

- Acknowledged in the security advisory (if they wish)
- Credited in release notes
- Listed in this file's Hall of Fame (if they wish)

### Hall of Fame

_No security issues have been reported yet._

## Contact

- **Security Issues**: Use [GitHub Private Vulnerability Reporting](https://github.com/sjnims/bootstrap-expert/security/advisories) or email <sjnims@gmail.com>
- **General Questions**: Open an issue using our [question template](https://github.com/sjnims/bootstrap-expert/issues/new/choose)
- **Maintainer**: Steve Nims ([@sjnims](https://github.com/sjnims))

## Additional Resources

- [Bootstrap Security](https://getbootstrap.com/docs/5.3/getting-started/introduction/#community)
- [Claude Code Security](https://claude.ai/code)
- [Responsible Disclosure](https://en.wikipedia.org/wiki/Responsible_disclosure)

---

**Note:** _This security policy was last updated: December 2025_
