# Installation

Punch-UI is built on ofa.js, and you need to import ofa.js and the global styles before using it.

## Import ofa.js

Add the following script tag in the HTML file:

```html
<script src="https://cdn.jsdelivr.net/gh/ofajs/ofa.js/dist/ofa.min.mjs" type="module"></script>
```

## Import Global Styles

Punch-UI provides global style files, including the theme system and base styles:

```html
<link rel="stylesheet" href="https://punch-ui-v2.pages.dev/packages/css/pui-global.css" />
```

> **Note**: This step is optional. If you do not manually import the global styles, Punch-UI will add them automatically. However, in dark mode, automatic addition may cause a brief "white flash" (sudden transition from white to black) when the page loads. To avoid this visual flicker, it is recommended to manually import the global styles in the `<head>`.

## Importing Components

Use the `l-m` tag to import the required component. For example, to import a button component:

```html
<l-m src="https://punch-ui-v2.pages.dev/packages/button/button.html"></l-m>
```

## Complete Example

Here is a complete HTML example demonstrating how to import ofa.js, global styles, and the button component:

```html
<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Punch-UI Example</title>
  <!-- Import ofa.js -->
  <script src="https://cdn.jsdelivr.net/gh/ofajs/ofa.js/dist/ofa.min.mjs" type="module"></script>
  <!-- Import global styles -->
  <link rel="stylesheet" href="https://punch-ui-v2.pages.dev/packages/css/pui-global.css" />
</head>
<body>
  
  <!-- Import button component -->
  <l-m src="https://punch-ui-v2.pages.dev/packages/button/button.html"></l-m>
  
  <!-- Use component -->
  <p-button color="primary">Click me</p-button>
</body>
</html>
```

## Component CDN Address

Most components can be imported using the following CDN address format:

```
https://punch-ui-v2.pages.dev/packages/[component-name]/[component-file].html
```

> **Note**: This is a general file structure pattern, but not all components strictly follow this rule. For the specific import paths of components, please refer to the documentation of each component.

For example:- Button: `https://punch-ui-v2.pages.dev/packages/button/button.html`
- Button Group: `https://punch-ui-v2.pages.dev/packages/button/group.html`
- Input: `https://punch-ui-v2.pages.dev/packages/input/input.html`
- Select: `https://punch-ui-v2.pages.dev/packages/select/select.html`

## Theme Switching

Punch-UI supports dark/light theme switching. By default, components automatically follow the system theme.

### Auto-Follow System (Default)

```html
<html>
  <!-- Automatically follow system theme -->
</html>
```

### Forced Light Theme

```html
<html class="theme-light-mode">
  <!-- Force light theme -->
</html>
```

### Force Dark Theme

```html
<html class="theme-dark-mode">
  <!-- Force dark theme -->
</html>
```

### Using Theme Switch Component

Punch-UI provides a theme switching component, allowing users to manually switch themes:

```html
<l-m src="https://punch-ui-v2.pages.dev/tool/theme-switch/theme-switch.html"></l-m>
<p-theme-switch></p-theme-switch>
```

## Next Step

- [First Example](./first-example.md) - Create your first Punch-UI application