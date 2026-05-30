# Theme Customization

Punch-UI provides flexible theme customization capabilities, allowing you to customize theme colors through CSS variables.

## Theme Switching

### Automatic Theme Switching

By default, Punch-UI automatically follows the system theme:

```html
<html>
  <!-- Automatically follows system theme -->
  <head>
    <link
      rel="stylesheet"
      href="https://punch-ui-v2.pages.dev/packages/css/pui-global.css"
    />
  </head>
</html>
```

### Manual Theme Switching

You can force a specific theme by adding a class to the `html` element:

```html
<!-- Force light theme -->
<html class="theme-light-mode">
  ...
</html>

<!-- Force dark theme -->
<html class="theme-dark-mode">
  ...
</html>
```

### Custom Theme Toggle Component

<o-playground name="Theme Switch Example" style="--editor-height: 400px">
  <code path="demo.html" preview active>
    <template>
      <link rel="stylesheet" href="https://punch-ui-v2.pages.dev/packages/css/pui-global.css" />
      <l-m src="./theme-switch.html"></l-m>
      <l-m src="https://punch-ui-v2.pages.dev/packages/button/button.html"></l-m>
      <div style="padding: 20px; text-align: center;">
        <h3>Theme Switch</h3>
        <theme-switch></theme-switch>
        <div style="margin-top: 20px;">
          <p-button color="primary">Primary Button</p-button>
          <p-button color="success">Success Button</p-button>
          <p-button color="error">Error Button</p-button>
        </div>
      </div>
    </template>
  </code>
  <code path="theme-switch.html">
    <template component>
      <link
        rel="stylesheet"
        href="https://punch-ui-v2.pages.dev/packages/css/pui-global.css"
      />
      <l-m src="https://punch-ui-v2.pages.dev/packages/switch/switch.html"></l-m>
      <l-m src="https://punch-ui-v2.pages.dev/packages/button/button.html"></l-m>
      <p-switch sync:value="isDark" on:change="toggleTheme"> Dark Mode </p-switch>
      <script>
        export default async () => {
          return {
            tag: "theme-switch",
            data: {
              isDark: window.matchMedia("(prefers-color-scheme: dark)").matches
                ? "on"
                : "off",
            },
            proto: {
              toggleTheme() {
                if (this.isDark === "on") {
                  $("html").classList.remove("theme-light-mode");
                  $("html").classList.add("theme-dark-mode");
                } else {
                  $("html").classList.remove("theme-dark-mode");
                  $("html").classList.add("theme-light-mode");
                }
              },
            },
          };
        };
      </script>
    </template>
  </code>
</o-playground>

## Custom Theme Color

### Overriding CSS Variables

You can customize theme colors by overriding CSS variables:

```html
<style>
  :root {
    /* Custom primary color */
    --md-sys-color-primary: #6750a4;
    --md-sys-color-on-primary: #ffffff;
    --md-sys-color-primary-container: #eaddff;
    --md-sys-color-on-primary-container: #21005d;
  }

  /* Custom colors under dark theme */
  :root.theme-dark-mode {
    --md-sys-color-primary: #d0bcff;
    --md-sys-color-on-primary: #381e72;
    --md-sys-color-primary-container: #4f378b;
    --md-sys-color-on-primary-container: #eaddff;
  }
</style>
```

### Complete Example

<o-playground name="Custom Theme Color" style="--editor-height: 600px">
  <code path="demo.html" preview active>
    <template>
      <link rel="stylesheet" href="https://punch-ui-v2.pages.dev/packages/css/pui-global.css" />
      <l-m src="https://punch-ui-v2.pages.dev/packages/button/button.html"></l-m>
      <style>
        :root {
          /* Custom primary color set to purple */
          --md-sys-color-primary: #6750a4;
          --md-sys-color-on-primary: #ffffff;
          --md-sys-color-primary-container: #eaddff;
          --md-sys-color-on-primary-container: #21005d;
        }
        :root.theme-dark-mode {
          --md-sys-color-primary: #d0bcff;
          --md-sys-color-on-primary: #381e72;
          --md-sys-color-primary-container: #4f378b;
          --md-sys-color-on-primary-container: #eaddff;
        }
        .demo-container {
          padding: 20px;
          max-width: 400px;
          margin: 0 auto;
        }
      </style>
      <div class="demo-container">
        <h3>Custom Purple Theme</h3>
        <p-button color="primary">Custom Primary Button</p-button>
        <p-button variant="outlined" color="primary">Outlined Button</p-button>
      </div>
    </template>
  </code>
</o-playground>

## Create Custom Theme

### Step 1: Define Color Variables

Create a CSS file to define your theme colors:

```css
/* custom-theme.css */

/* Light theme */
:root {
  /* Primary */
  --md-sys-color-primary: #0060a9;
  --md-sys-color-on-primary: #ffffff;
  --md-sys-color-primary-container: #d3e4ff;
  --md-sys-color-on-primary-container: #001c38;

  /* Success */
  --md-sys-color-success: #3a6a24;
  --md-sys-color-on-success: #ffffff;
  --md-sys-color-success-container: #baf29c;
  --md-sys-color-on-success-container: #062100;

  /* Error */
  --md-sys-color-error: #bc1421;
  --md-sys-color-on-error: #ffffff;
  --md-sys-color-error-container: #ffdad7;
  --md-sys-color-on-error-container: #410004;

  /* Neutral */
  --md-sys-color-neutral: #5e5e5e;
  --md-sys-color-on-neutral: #ffffff;
  --md-sys-color-neutral-container: #e3e2e2;
  --md-sys-color-on-neutral-container: #1b1c1c;
}

/* Dark theme */
:root.theme-dark-mode {
  /* Primary */
  --md-sys-color-primary: #a2c9ff;
  --md-sys-color-on-primary: #00315b;
  --md-sys-color-primary-container: #004881;
  --md-sys-color-on-primary-container: #d3e4ff;

  /* Success */
  --md-sys-color-success: #9fd582;
  --md-sys-color-on-success: #103900;
  --md-sys-color-success-container: #22510d;
  --md-sys-color-on-success-container: #baf29c;

  /* Error */
  --md-sys-color-error: #ffb3ad;
  --md-sys-color-on-error: #68000a;
  --md-sys-color-error-container: #930013;
  --md-sys-color-on-error-container: #ffdad7;

  /* Neutral */
  --md-sys-color-neutral: #c7c6c6;
  --md-sys-color-on-neutral: #303031;
  --md-sys-color-neutral-container: #464747;
  --md-sys-color-on-neutral-container: #e3e2e2;
}
```

### Step 2: Introduce Custom Theme

Import custom theme styles in your HTML file:

```html
<link
  rel="stylesheet"
  href="https://punch-ui-v2.pages.dev/packages/css/pui-global.css"
/>
<link rel="stylesheet" href="./custom-theme.css" />
```

## Component Style Customization

### Using CSS Part

Some components support customizing internal styles through the CSS Part selector:

```html
<style>
  p-input::part(input) {
    border-radius: 12px;
    font-size: 16px;
  }
</style>

<p-input placeholder="Custom Input"></p-input>
```

### Using Custom Classes

You can also add custom classes to the component to override the styles:

```html
<style>
  .custom-button {
    border-radius: 20px;
    font-weight: bold;
  }
</style>

<p-button class="custom-button" color="primary">Custom Button</p-button>
```

## Best Practices

### 1. Maintain Contrast

When customizing colors, ensure sufficient contrast between text and background to meet accessibility standards.

### 2. Test dark theme

After customizing colors, be sure to test under both dark and light themes to ensure good visual effects.

### 3. Using Color Generation Tools

It is recommended to use the [Material Design Color Tool](https://m3.material.io/theme-builder) to generate a color scheme that meets the specifications.

## Next Step

- [Component Documentation](../components/button.md) - View detailed usage of each component