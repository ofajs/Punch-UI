# Color System

Punch-UI uses the color system of Material Design 3, providing a complete palette and theme support.

> 🎯 **Core Principle**: **Always prioritize using semantic color variables (`--md-sys-color-*`)**, avoid directly using palette colors (`--md-ref-palette-*`). Semantic colors automatically adapt to theme switching, ensuring contrast and consistency.

## Importing Styles

```html
<link rel="stylesheet" href="https://punch-ui-v2.pages.dev/packages/css/pui-global.css" />
```

## Theme Switching

Punch-UI supports three theme modes:

### 1. Auto-Follow System (Default)

By default, the theme automatically follows the system settings:

```html
<html>
  <!-- Automatically follow system theme -->
</html>
```

### 2. Force Light Theme

```html
<html class="theme-light-mode">
  <!-- Force light theme -->
</html>
```

### 3. Force Dark Theme

```html
<html class="theme-dark-mode">
  <!-- Force dark theme -->
</html>
```

### Using Theme Switch Component

```html
<l-m src="https://punch-ui-v2.pages.dev/tool/theme-switch/theme-switch.html"></l-m>
<p-theme-switch></p-theme-switch>
```

## Semantic Color Variables

Punch-UI provides a set of semantic color variables that automatically adapt to light and dark themes:

### Main Colors

| Variable Name | Description | Light Theme Example | Dark Theme Example |
|--------|------|-------------|-------------|
| `--md-sys-color-primary` | Primary color | #0060a9 | #a2c9ff |
| `--md-sys-color-on-primary` | Text on primary | #ffffff | #00315b |
| `--md-sys-color-primary-container` | Primary container | #d3e4ff | #004881 |
| `--md-sys-color-on-primary-container` | Text on primary container | #001c38 | #d3e4ff |### Success Color

| Variable Name | Description | Light Theme Example | Dark Theme Example |
|--------|------|-------------|-------------|
| `--md-sys-color-success` | Success color | #3a6a24 | #9fd582 |
| `--md-sys-color-on-success` | Text on success color | #ffffff | #103900 |
| `--md-sys-color-success-container` | Success color container | #baf29c | #22510d |
| `--md-sys-color-on-success-container` | Text on success color container | #062100 | #baf29c |### Error Color

| Variable Name | Description | Light Theme Example | Dark Theme Example |
|--------|------|-------------|-------------|
| `--md-sys-color-error` | Error | #bc1421 | #ffb3ad |
| `--md-sys-color-on-error` | On error | #ffffff | #68000a |
| `--md-sys-color-error-container` | Error container | #ffdad7 | #930013 |
| `--md-sys-color-on-error-container` | On error container | #410004 | #ffdad7 |### Neutral Colors

| Variable name | Description | Light theme example | Dark theme example |
|--------|------|-------------|-------------|
| `--md-sys-color-neutral` | Neutral | #5e5e5e | #c7c6c6 |
| `--md-sys-color-on-neutral` | On neutral | #ffffff | #303031 |
| `--md-sys-color-neutral-container` | Neutral container | #e3e2e2 | #464747 |
| `--md-sys-color-on-neutral-container` | On neutral container | #1b1c1c | #e3e2e2 |### Surface Color

| Variable Name | Description | Light Theme Example | Dark Theme Example |
|--------|------|-------------|-------------|
| `--md-sys-color-surface` | Background color | #faf9f9 | #121414 |
| `--md-sys-color-on-surface` | Text on background | #1b1c1c | #e3e2e2 |
| `--md-sys-color-surface-variant` | Variant background color | #e3e2e2 | #464747 |
| `--md-sys-color-on-surface-variant` | Text on variant background | #464747 | #c7c6c6 |
| `--md-sys-color-inverse-surface` | Inverse background color | #303031 | #e3e2e2 |
| `--md-sys-color-inverse-on-surface` | Text on inverse background | #f2f0f0 | #303031 |## Usage Example

### Use Semantic Colors

```html
<style>
  .custom-button {
    background-color: var(--md-sys-color-primary);
    color: var(--md-sys-color-on-primary);
    border-radius: 8px;
    padding: 10px 20px;
  }
  
  .custom-card {
    background-color: var(--md-sys-color-surface-variant);
    color: var(--md-sys-color-on-surface-variant);
    border-radius: 12px;
    padding: 16px;
  }
  
  .success-message {
    background-color: var(--md-sys-color-success-container);
    color: var(--md-sys-color-on-success-container);
    padding: 12px;
  }
</style>

<button class="custom-button">Custom Button</button>
<div class="custom-card">Custom Card</div>
<div class="success-message">Action successful!</div>
```

### Real-time Example

<o-playground name="Color System Example" style="--editor-height: 500px">
  <code path="demo.html" preview active>
    <template>
      <link rel="stylesheet" href="https://punch-ui-v2.pages.dev/packages/css/pui-global.css" />
      <style>
        .color-demo {
          padding: 20px;
          max-width: 600px;
          margin: 0 auto;
        }
        .color-box {
          padding: 16px;
          margin: 8px 0;
          border-radius: 8px;
        }
        .primary-demo {
          background-color: var(--md-sys-color-primary);
          color: var(--md-sys-color-on-primary);
        }
        .success-demo {
          background-color: var(--md-sys-color-success);
          color: var(--md-sys-color-on-success);
        }
        .error-demo {
          background-color: var(--md-sys-color-error);
          color: var(--md-sys-color-on-error);
        }
        .surface-demo {
          background-color: var(--md-sys-color-surface-variant);
          color: var(--md-sys-color-on-surface-variant);
        }
      </style>
      <div class="color-demo">
        <h2>Semantic Color Examples</h2>
        <div class="color-box primary-demo">
          <strong>Primary Color</strong>
          <p>Used for main actions and important elements</p>
        </div>
        <div class="color-box success-demo">
          <strong>Success Color</strong>
          <p>Used for success status and positive feedback</p>
        </div>
        <div class="color-box error-demo">
          <strong>Error Color</strong>
          <p>Used for error status and warning messages</p>
        </div>
        <div class="color-box surface-demo">
          <strong>Surface Color</strong>
          <p>Used for backgrounds and containers</p>
        </div>
      </div>
    </template>
  </code>
</o-playground>

## Best Practices

### 1. Prioritize the use of semantic colors

✅ **Recommended**:```css
background-color: var(--md-sys-color-primary);
color: var(--md-sys-color-on-primary);
```

❌ **Not recommended**:```css
background-color: var(--md-ref-palette-primary40);
color: #ffffff;
```

### 2. Ensure contrast

When using semantic colors, Punch-UI ensures that the contrast between text and background meets accessibility standards.

### 3. Theme Adaptation

Semantic colors automatically adapt to dark/light themes, no manual processing required.

## Next Step

- [Theme Customization](./theming.md) - Learn how to customize themes and colors