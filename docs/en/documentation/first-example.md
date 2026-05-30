# First Example

Let's create a simple form example to demonstrate the basic usage of Punch-UI.

## Example: User Registration Form

This example will show how to create a user registration form using Punch-UI's form components.

<o-playground name="User Registration Form" style="--editor-height: 600px">
  <code path="demo.html" preview active>
    <template>
      <link rel="stylesheet" href="https://punch-ui-v2.pages.dev/packages/css/pui-global.css" />
      <l-m src="https://punch-ui-v2.pages.dev/packages/input/input.html"></l-m>
      <l-m src="https://punch-ui-v2.pages.dev/packages/button/button.html"></l-m>
      <l-m src="https://punch-ui-v2.pages.dev/packages/radio/radio.html"></l-m>
      <l-m src="https://punch-ui-v2.pages.dev/packages/radio/group.html"></l-m>
      <l-m src="https://punch-ui-v2.pages.dev/packages/checkbox/checkbox.html"></l-m>
      <style>
        .form-container {
          max-width: 400px;
          margin: 40px auto;
          padding: 20px;
        }
        .form-item {
          margin-bottom: 16px;
        }
        .form-label {
          display: block;
          margin-bottom: 8px;
          font-weight: 500;
        }
        .form-actions {
          margin-top: 24px;
        }
      </style>
      <div class="form-container">
        <h2>User Registration</h2>
        <div class="form-item">
          <label class="form-label">Username</label>
          <p-input placeholder="Please enter username" style="width: 100%"></p-input>
        </div>
        <div class="form-item">
          <label class="form-label">Email</label>
          <p-input placeholder="Please enter email" type="email" style="width: 100%"></p-input>
        </div>
        <div class="form-item">
          <label class="form-label">Password</label>
          <p-input placeholder="Please enter password" type="password" style="width: 100%"></p-input>
        </div>
        <div class="form-item">
          <label class="form-label">Gender</label>
          <p-radio-group>
            <p-radio value="male">Male</p-radio>
            <p-radio value="female">Female</p-radio>
            <p-radio value="other">Other</p-radio>
          </p-radio-group>
        </div>
        <div class="form-item">
          <p-checkbox>I have read and agree to the user agreement</p-checkbox>
        </div>
        <div class="form-actions">
          <p-button color="primary" style="width: 100%">Register</p-button>
        </div>
      </div>
    </template>
  </code>
</o-playground>

## Code Analysis

### 1. Import necessary files

First, we need to import ofa.js, global styles, and the required components:

```html
<link rel="stylesheet" href="https://punch-ui-v2.pages.dev/packages/css/pui-global.css" />

<l-m src="https://punch-ui-v2.pages.dev/packages/input/input.html"></l-m>
<l-m src="https://punch-ui-v2.pages.dev/packages/button/button.html"></l-m>
<l-m src="https://punch-ui-v2.pages.dev/packages/radio/radio.html"></l-m>
<l-m src="https://punch-ui-v2.pages.dev/packages/radio/group.html"></l-m>
<l-m src="https://punch-ui-v2.pages.dev/packages/checkbox/checkbox.html"></l-m>
```

### 2. Using Components

Each Punch-UI component is prefixed with `p-`:

- `<p-input>` - Input component
- `<p-button>` - Button component
- `<p-radio>` - Radio button component
- `<p-radio-group>` - Radio group component
- `<p-checkbox>` - Checkbox component

### 3. Component Properties

Components support multiple properties to customize behavior and appearance:

```html
<p-input placeholder="Please enter username" type="email"></p-input>
<p-button color="primary">Register</p-button>
<p-radio-group>
  <p-radio value="male">Male</p-radio>
  <p-radio value="female">Female</p-radio>
</p-radio-group>
```

### 4. Style Customization

You can customize the component style through the `style` attribute or CSS class:

```html
<p-input style="width: 100%"></p-input>
<p-button color="primary" style="width: 100%">Register</p-button>
```

## More Examples

### Button Group Example

<o-playground name="Button Group Example" style="--editor-height: 400px">
  <code path="demo.html" preview active>
    <template>
      <link rel="stylesheet" href="https://punch-ui-v2.pages.dev/packages/css/pui-global.css" />
      <l-m src="https://punch-ui-v2.pages.dev/packages/button/button.html"></l-m>
      <l-m src="https://punch-ui-v2.pages.dev/packages/button/group.html"></l-m>
      <div style="padding: 20px;">
        <h3>Basic Button</h3>
        <p-button>Default Button</p-button>
        <p-button color="primary">Primary Button</p-button>
        <p-button color="success">Success Button</p-button>
        <p-button color="error">Error Button</p-button>
        <h3 style="margin-top: 20px;">Button Group</h3>
        <p-button-group>
          <p-button>Button 1</p-button>
          <p-button>Button 2</p-button>
          <p-button>Button 3</p-button>
        </p-button-group>
      </div>
    </template>
  </code>
</o-playground>

## Next Step

Now that you have understood the basic usage of Punch-UI, you can continue to explore:

- [Color System](../basics/color.md) - Learn about Punch-UI's themes and color system
- [Component Documentation](../components/button.md) - View detailed documentation for each component