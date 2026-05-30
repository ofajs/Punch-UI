# Input

The input box component is used to receive text information entered by the user, supporting various styles and sizes.

## Importing Components

```html
<l-m src="https://punch-ui-v2.pages.dev/packages/input/input.html"></l-m>
```

## Basic Usage

<o-playground name="Input Basic Usage" style="--editor-height: 300px">
  <code path="demo.html" preview active>
    <template>
      <link rel="stylesheet" href="https://punch-ui-v2.pages.dev/packages/css/pui-global.css" />
      <l-m src="https://punch-ui-v2.pages.dev/packages/input/input.html"></l-m>
      <div style="padding: 20px; max-width: 400px;">
        <p-input placeholder="Please enter content"></p-input>
      </div>
    </template>
  </code>
</o-playground>

## With Labels

Use the `label` slot to add a label:

<o-playground name="Input with Label" style="--editor-height: 350px">
  <code path="demo.html" preview active>
    <template>
      <link rel="stylesheet" href="https://punch-ui-v2.pages.dev/packages/css/pui-global.css" />
      <l-m src="https://punch-ui-v2.pages.dev/packages/input/input.html"></l-m>
      <div style="padding: 20px; max-width: 400px;">
        <p-input>
          <span slot="label">Username</span>
        </p-input>
      </div>
    </template>
  </code>
</o-playground>

## Dimensions

Set the input box size through the `size` attribute:

<o-playground name="Input Size" style="--editor-height: 400px">
  <code path="demo.html" preview active>
    <template>
      <link rel="stylesheet" href="https://punch-ui-v2.pages.dev/packages/css/pui-global.css" />
      <l-m src="https://punch-ui-v2.pages.dev/packages/input/input.html"></l-m>
      <div style="padding: 20px; max-width: 400px;">
        <p-input size="xs">
          <span slot="label">Extra Small</span>
        </p-input>
        <p-input size="s">
          <span slot="label">Small</span>
        </p-input>
        <p-input>
          <span slot="label">Default</span>
        </p-input>
        <p-input size="l">
          <span slot="label">Large</span>
        </p-input>
        <p-input size="xl">
          <span slot="label">Extra Large</span>
        </p-input>
      </div>
    </template>
  </code>
</o-playground>

## Colors

Set the input box color through the `color` property:

<o-playground name="Input Color" style="--editor-height: 400px">
  <code path="demo.html" preview active>
    <template>
      <link rel="stylesheet" href="https://punch-ui-v2.pages.dev/packages/css/pui-global.css" />
      <l-m src="https://punch-ui-v2.pages.dev/packages/input/input.html"></l-m>
      <div style="padding: 20px; max-width: 400px;">
        <p-input>
          <span slot="label">Default</span>
        </p-input>
        <p-input color="primary">
          <span slot="label">Primary</span>
        </p-input>
        <p-input color="success">
          <span slot="label">Success</span>
        </p-input>
        <p-input color="error">
          <span slot="label">Error</span>
        </p-input>
      </div>
    </template>
  </code>
</o-playground>

## Input Type

### Password input

<o-playground name="Password Input" style="--editor-height: 300px">
  <code path="demo.html" preview active>
    <template>
      <link rel="stylesheet" href="https://punch-ui-v2.pages.dev/packages/css/pui-global.css" />
      <l-m src="https://punch-ui-v2.pages.dev/packages/input/input.html"></l-m>
      <div style="padding: 20px; max-width: 400px;">
        <p-input type="password">
          <span slot="label">Password</span>
        </p-input>
      </div>
    </template>
  </code>
</o-playground>

### Email Input

<o-playground name="Email Input" style="--editor-height: 300px">
  <code path="demo.html" preview active>
    <template>
      <link rel="stylesheet" href="https://punch-ui-v2.pages.dev/packages/css/pui-global.css" />
      <l-m src="https://punch-ui-v2.pages.dev/packages/input/input.html"></l-m>
      <div style="padding: 20px; max-width: 400px;">
        <p-input type="email">
          <span slot="label">Email</span>
        </p-input>
      </div>
    </template>
  </code>
</o-playground>

## Prefix and Suffix

Use the `prefix` and `suffix` slots to add a prefix or suffix:

<o-playground name="Input with prefix/suffix" style="--editor-height: 350px">
  <code path="demo.html" preview active>
    <template>
      <link rel="stylesheet" href="https://punch-ui-v2.pages.dev/packages/css/pui-global.css" />
      <l-m src="https://punch-ui-v2.pages.dev/packages/input/input.html"></l-m>
      <div style="padding: 20px; max-width: 400px;">
        <p-input>
          <span slot="prefix">+86</span>
          <span slot="label">Phone Number</span>
        </p-input>
        <p-input style="margin-top: 16px;">
          <span slot="suffix">.com</span>
          <span slot="label">Website</span>
        </p-input>
      </div>
    </template>
  </code>
</o-playground>

## Variant Styles

Set the input box style via the `variant` attribute:

<o-playground name="Input Variants" style="--editor-height: 350px">
  <code path="demo.html" preview active>
    <template>
      <link rel="stylesheet" href="https://punch-ui-v2.pages.dev/packages/css/pui-global.css" />
      <l-m src="https://punch-ui-v2.pages.dev/packages/input/input.html"></l-m>
      <div style="padding: 20px; max-width: 400px;">
        <p-input>
          <span slot="label">Outlined (Default)</span>
        </p-input>
        <p-input variant="filled" style="margin-top: 16px;">
          <span slot="label">Filled</span>
        </p-input>
      </div>
    </template>
  </code>
</o-playground>

## Autofocus

Use the `autofocus` attribute to make an input field automatically get focus when the page loads:

<o-playground name="Auto Focus" style="--editor-height: 300px">
  <code path="demo.html" preview active>
    <template>
      <link rel="stylesheet" href="https://punch-ui-v2.pages.dev/packages/css/pui-global.css" />
      <l-m src="https://punch-ui-v2.pages.dev/packages/input/input.html"></l-m>
      <div style="padding: 20px; max-width: 400px;">
        <p-input autofocus>
          <span slot="label">Autofocus</span>
        </p-input>
      </div>
    </template>
  </code>
</o-playground>

## Floating Label

Use the `hang-label` attribute to keep the label always floating above the input box:

<o-playground name="Floating Label" style="--editor-height: 300px">
  <code path="demo.html" preview active>
    <template>
      <link rel="stylesheet" href="https://punch-ui-v2.pages.dev/packages/css/pui-global.css" />
      <l-m src="https://punch-ui-v2.pages.dev/packages/input/input.html"></l-m>
      <div style="padding: 20px; max-width: 400px;">
        <p-input hang-label>
          <span slot="label">Floating Label</span>
        </p-input>
      </div>
    </template>
  </code>
</o-playground>

## Default Values

Use the `default-value` attribute to set the initial value of the input box:

<o-playground name="Default Value" style="--editor-height: 300px">
  <code path="demo.html" preview active>
    <template>
      <link rel="stylesheet" href="https://punch-ui-v2.pages.dev/packages/css/pui-global.css" />
      <l-m src="https://punch-ui-v2.pages.dev/packages/input/input.html"></l-m>
      <div style="padding: 20px; max-width: 400px;">
        <p-input default-value="John Doe">
          <span slot="label">Default Value</span>
        </p-input>
      </div>
    </template>
  </code>
</o-playground>

## Maximum Length

Use the `maxlength` attribute to limit the maximum number of characters entered:

<o-playground name="Max Length" style="--editor-height: 300px">
  <code path="demo.html" preview active>
    <template>
      <link rel="stylesheet" href="https://punch-ui-v2.pages.dev/packages/css/pui-global.css" />
      <l-m src="https://punch-ui-v2.pages.dev/packages/input/input.html"></l-m>
      <div style="padding: 20px; max-width: 400px;">
        <p-input maxlength="10">
          <span slot="label">At most 10 characters</span>
        </p-input>
      </div>
    </template>
  </code>
</o-playground>

## Form Properties

Use the `name` attribute to set the field name for form submission:

<o-playground name="Form Properties" style="--editor-height: 300px">
  <code path="demo.html" preview active>
    <template>
      <link rel="stylesheet" href="https://punch-ui-v2.pages.dev/packages/css/pui-global.css" />
      <l-m src="https://punch-ui-v2.pages.dev/packages/input/input.html"></l-m>
      <div style="padding: 20px; max-width: 400px;">
        <p-input name="username">
          <span slot="label">Username</span>
        </p-input>
      </div>
    </template>
  </code>
</o-playground>

## Custom Styles

### Using Inline Styles

<o-playground name="Custom Style" style="--editor-height: 300px">
  <code path="demo.html" preview active>
    <template>
      <link rel="stylesheet" href="https://punch-ui-v2.pages.dev/packages/css/pui-global.css" />
      <l-m src="https://punch-ui-v2.pages.dev/packages/input/input.html"></l-m>
      <div style="padding: 20px; max-width: 400px;">
        <p-input style="border-radius: 30px">
          <span slot="label">Custom Border Radius</span>
        </p-input>
      </div>
    </template>
  </code>
</o-playground>

### Using CSS Part

Use the `::part()` selector to customize the internal style of the input box:

<o-playground name="CSS Part Custom" style="--editor-height: 350px">
  <code path="demo.html" preview active>
    <template>
      <link rel="stylesheet" href="https://punch-ui-v2.pages.dev/packages/css/pui-global.css" />
      <l-m src="https://punch-ui-v2.pages.dev/packages/input/input.html"></l-m>
      <style>
        .custom-input::part(input) {
          color: red;
        }
      </style>
      <div style="padding: 20px; max-width: 400px;">
        <p-input class="custom-input" color="error">
          <span slot="label" style="color: red">Custom Style</span>
        </p-input>
      </div>
    </template>
  </code>
</o-playground>

## Programmatic Control

Controlling input focus via JavaScript:

<o-playground name="Programmatic Control" style="--editor-height: 400px">
  <code path="demo.html" preview active>
    <template>
      <link rel="stylesheet" href="https://punch-ui-v2.pages.dev/packages/css/pui-global.css" />
      <l-m src="https://punch-ui-v2.pages.dev/packages/button/button.html"></l-m>
      <l-m src="https://punch-ui-v2.pages.dev/packages/input/input.html"></l-m>
      <div style="padding: 20px; max-width: 400px;">
        <p-input id="my-input">
          <span slot="label">Programmatic Control</span>
        </p-input>
        <p-button style="margin-top: 16px;" id="focus-btn">Focus Input</p-button>
      </div>
      <script>
        $('#focus-btn').on('click', () => {
          $('#my-input').focus();
        });
      </script>
    </template>
  </code>
</o-playground>

## Get Value

### Get via value attribute in HTML

Use the `value` attribute to get the value of the input box:

<o-playground name="Get Value" style="--editor-height: 400px">
  <code path="demo.html" preview active>
    <template>
      <link rel="stylesheet" href="https://punch-ui-v2.pages.dev/packages/css/pui-global.css" />
      <l-m src="https://punch-ui-v2.pages.dev/packages/button/button.html"></l-m>
      <l-m src="https://punch-ui-v2.pages.dev/packages/input/input.html"></l-m>
      <div style="padding: 20px; max-width: 400px;">
        <p-input id="username-input">
          <span slot="label">Username</span>
        </p-input>
        <p-button style="margin-top: 16px;" id="get-value-btn">Get Value</p-button>
        <p style="margin-top: 16px;">Current Value: <span id="value-display"></span></p>
      </div>
      <script>
        $('#get-value-btn').on('click', () => {
          $('#value-display').text = $('#username-input').value;
        });
      </script>
    </template>
  </code>
</o-playground>

### Listening for Input Events

By listening to the `input` event, get the input value in real time:

<o-playground name="Monitor Input Events" style="--editor-height: 400px">
  <code path="demo.html" preview active>
    <template>
      <link rel="stylesheet" href="https://punch-ui-v2.pages.dev/packages/css/pui-global.css" />
      <l-m src="https://punch-ui-v2.pages.dev/packages/input/input.html"></l-m>
      <div style="padding: 20px; max-width: 400px;">
        <p-input id="realtime-input">
          <span slot="label">Real-time Input</span>
        </p-input>
        <p style="margin-top: 16px;">Real-time Value: <span id="realtime-display"></span></p>
      </div>
      <script>
        $('#realtime-input').on('input', () => {
          $('#realtime-display').text = $('#realtime-input').value;
        });
      </script>
    </template>
  </code>
</o-playground>

### Two-way binding in components or page modules

Use ofa.js's data binding feature：

<o-playground name="Get Value" style="--editor-height: 400px">
  <code path="demo.html" active>
    <template page>
      <link rel="stylesheet" href="https://punch-ui-v2.pages.dev/packages/css/pui-global.css" />
      <l-m src="https://punch-ui-v2.pages.dev/packages/button/button.html"></l-m>
      <l-m src="https://punch-ui-v2.pages.dev/packages/input/input.html"></l-m>
      <div style="padding: 20px; max-width: 400px;">
        <p-input sync:value="val">
          <span slot="label">Username</span>
        </p-input>
        <p style="margin-top: 16px;">Current value: {{ val }}</p>
      </div>
      <script>
        export default {
          data: {
            val: 'Default Value'
          }
        };
      </script>
    </template>
  </code>
</o-playground>

## API

### Attributes

| Attribute | Description | Type | Default |
|------|------|------|--------|
| `type` | Input type | `text` \| `password` \| `email` \| `number` | `text` |
| `variant` | Input style | `outlined` \| `filled` | `outlined` |
| `size` | Input size | `xs` \| `s` \| `l` \| `xl` | - |
| `color` | Input color | `primary` \| `error` \| `success` \| `neutral` | - |
| `placeholder` | Placeholder text | `string` | - |
| `disabled` | Disabled | `boolean` | `false` |
| `value` | Input value | `string` | - |
| `default-value` | Default value | `string` | - |
| `hang-label` | Floating label | `boolean` | `false` |
| `maxlength` | Maximum input length | `number` | - |
| `name` | Form field name | `string` | - |
| `autofocus` | Auto focus | `boolean` | `false` |### Slot

| Slot Name | Description |
|--------|------|
| `default` | Input box content |
| `label` | Label text |
| `prefix` | Prefix content |
| `suffix` | Suffix content |### Events

| Event | Description |
|--------|------|
| `input` | Triggered when the input content changes |
| `change` | Triggered when the input loses focus and the content has changed |
| `focus` | Triggered when the input gains focus |
| `blur` | Triggered when the input loses focus |### Method

| Method Name | Description |
|--------|------|
| `focus()` | Make the input box gain focus |
| `blur()` | Make the input box lose focus |
| `select()` | Select the text in the input box |