---
name: component
description: Generate Bootstrap 5.3 component code interactively or with arguments
argument-hint: [component-name] [--options]
allowed-tools: Read, Write, Edit, AskUserQuestion
---

# Bootstrap Component Generator

Generate a Bootstrap 5.3 component based on the user's request.

## Component Requested

**Component:** $ARGUMENTS

## Instructions

1. **Identify the component** from the arguments. Supported components include:
   - navbar
   - modal
   - card
   - accordion
   - carousel
   - dropdown
   - tabs / nav-tabs
   - form
   - table
   - alert
   - toast
   - offcanvas
   - pagination
   - breadcrumb
   - button-group
   - list-group
   - progress
   - spinner

2. **If no component specified or component unclear**, use the AskUserQuestion tool to ask which component the user wants to generate.

3. **Parse any options from arguments** such as:
   - `--dark` - Use dark variant
   - `--fixed-top` / `--fixed-bottom` - For navbar positioning
   - `--centered` / `--scrollable` / `--static` - For modal variants
   - `--striped` / `--hover` / `--bordered` - For table variants
   - `--with-icons` - Include Bootstrap Icons
   - `--dismissible` - For alerts/toasts
   - `--animated` - For carousels/progress bars

4. **If options are not specified**, use the AskUserQuestion tool to ask about common configuration options for the specific component. Ask relevant questions based on the component type.

5. **Generate the complete HTML code** for the component following Bootstrap 5.3 best practices:
   - Use semantic HTML elements
   - Include proper ARIA attributes for accessibility
   - Use appropriate class names from Bootstrap 5.3.8
   - Include placeholder content that's easy to customize
   - Add helpful comments where appropriate

6. **Present the code** to the user in a code block, ready to copy and use.

7. **Offer to**:
   - Write the code to a specific file
   - Generate additional variants
   - Explain any Bootstrap classes used

## Example Questions by Component

- **navbar**: Fixed position? Dark/light theme? With search form? Logo/brand text?
- **modal**: Size (sm/default/lg/xl/fullscreen)? Scrollable body? Centered? Static backdrop?
- **card**: With image? Header/footer? Horizontal layout?
- **form**: Floating labels? Inline layout? With validation?
- **table**: Striped? Hoverable? Bordered? Responsive? Dark theme?
- **carousel**: With indicators? With captions? Auto-play? Fade transition?
- **accordion**: Flush style? Always open?

## Output Format

Generate clean, production-ready HTML that:
- Is properly indented
- Uses Bootstrap 5.3.8 classes correctly
- Includes data-bs-* attributes for JavaScript components
- Has descriptive placeholder content
- Works standalone or can be integrated into existing markup

## Production Notes

When generating standalone templates with CDN links, include:
- `integrity` and `crossorigin="anonymous"` attributes for security (SRI)
- A note about CSP: if using Content Security Policy headers, ensure `cdn.jsdelivr.net` is allowed, or switch to self-hosted Bootstrap files
