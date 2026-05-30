# Textarea Multi-line Text

Multi-line text input box component, supports responsive height and form integration.

## Importing Components

```html
<l-m src="https://punch-ui-v2.pages.dev/packages/textarea/textarea.html"></l-m>
```

## Basic Usage

<o-playground name="Textarea Basic Usage" style="--editor-height: 300px">
  <code path="demo.html" preview active>
    <template>
      <link rel="stylesheet" href="https://punch-ui-v2.pages.dev/packages/css/pui-global.css" />
      <l-m src="https://punch-ui-v2.pages.dev/packages/textarea/textarea.html"></l-m>
      <div style="padding: 20px; max-width: 400px;">
        <p-textarea placeholder="Please enter content"></p-textarea>
      </div>
    </template>
  </code>
</o-playground>

## With Labels

<o-playground name="Textarea with Label" style="--editor-height: 350px">
  <code path="demo.html" preview active>
    <template>
      <link rel="stylesheet" href="https://punch-ui-v2.pages.dev/packages/css/pui-global.css" />
      <l-m src="https://punch-ui-v2.pages.dev/packages/textarea/textarea.html"></l-m>
      <div style="padding: 20px; max-width: 400px;">
        <p-textarea>
          <span slot="label">Message</span>
        </p-textarea>
      </div>
    </template>
  </code>
</o-playground>

## Variant Styles

Set the input box style via the `variant` attribute:

<o-playground name="Textarea Variants" style="--editor-height: 350px">
  <code path="demo.html" preview active>
    <template>
      <link rel="stylesheet" href="https://punch-ui-v2.pages.dev/packages/css/pui-global.css" />
      <l-m src="https://punch-ui-v2.pages.dev/packages/textarea/textarea.html"></l-m>
      <div style="padding: 20px; max-width: 400px;">
        <p-textarea>
          <span slot="label">Outlined (default)</span>
        </p-textarea>
        <p-textarea variant="filled" style="margin-top: 16px;">
          <span slot="label">Filled</span>
        </p-textarea>
      </div>
    </template>
  </code>
</o-playground>

## Dimensions

Set the input box size through the `size` attribute:

<o-playground name="Textarea Sizes" style="--editor-height: 500px">
  <code path="demo.html" preview active>
    <template>
      <link rel="stylesheet" href="https://punch-ui-v2.pages.dev/packages/css/pui-global.css" />
      <l-m src="https://punch-ui-v2.pages.dev/packages/textarea/textarea.html"></l-m>
      <div style="padding: 20px; max-width: 400px;">
        <p-textarea size="xs">
          <span slot="label">Extra Small</span>
        </p-textarea>
        <p-textarea size="s" style="margin-top: 16px;">
          <span slot="label">Small</span>
        </p-textarea>
        <p-textarea size="m" style="margin-top: 16px;">
          <span slot="label">Medium (Default)</span>
        </p-textarea>
        <p-textarea size="l" style="margin-top: 16px;">
          <span slot="label">Large</span>
        </p-textarea>
        <p-textarea size="xl" style="margin-top: 16px;">
          <span slot="label">Extra Large</span>
        </p-textarea>
      </div>
    </template>
  </code>
</o-playground>

## Colors

Set the input box color through the `color` property:

<o-playground name="Textarea Color" style="--editor-height: 500px">
  <code path="demo.html" preview active>
    <template>
      <link rel="stylesheet" href="https://punch-ui-v2.pages.dev/packages/css/pui-global.css" />
      <l-m src="https://punch-ui-v2.pages.dev/packages/textarea/textarea.html"></l-m>
      <div style="padding: 20px; max-width: 400px;">
        <p-textarea color="primary">
          <span slot="label">Primary Color</span>
        </p-textarea>
        <p-textarea color="success" style="margin-top: 16px;">
          <span slot="label">Success Color</span>
        </p-textarea>
        <p-textarea color="neutral" style="margin-top: 16px;">
          <span slot="label">Neutral Color</span>
        </p-textarea>
        <p-textarea color="error" style="margin-top: 16px;">
          <span slot="label">Error Color</span>
        </p-textarea>
      </div>
    </template>
  </code>
</o-playground>

## Prefix and Suffix

Use the `prefix` and `suffix` slots to add prefix/suffix content:

<o-playground name="Textarea with Prefix/Suffix" style="--editor-height: 350px">
  <code path="demo.html" preview active>
    <template>
      <link rel="stylesheet" href="https://punch-ui-v2.pages.dev/packages/css/pui-global.css" />
      <l-m src="https://punch-ui-v2.pages.dev/packages/textarea/textarea.html"></l-m>
      <div style="padding: 20px; max-width: 400px;">
        <p-textarea>
          <span slot="label">Message</span>
          <span slot="prefix">📝</span>
        </p-textarea>
      </div>
    </template>
  </code>
</o-playground>

## Placeholder

Use the `placeholder` attribute to set placeholder text:

<o-playground name="Placeholder" style="--editor-height: 350px">
  <code path="demo.html" preview active>
    <template>
      <link rel="stylesheet" href="https://punch-ui-v2.pages.dev/packages/css/pui-global.css" />
      <l-m src="https://punch-ui-v2.pages.dev/packages/textarea/textarea.html"></l-m>
      <div style="padding: 20px; max-width: 400px;">
        <p-textarea placeholder="Enter your message...">
          <span slot="label">Message</span>
        </p-textarea>
      </div>
    </template>
  </code>
</o-playground>

## Autofocus

Use the `autofocus` attribute to make an input field automatically get focus when the page loads:

<o-playground name="Autofocus" style="--editor-height: 350px">
  <code path="demo.html" preview active>
    <template>
      <link rel="stylesheet" href="https://punch-ui-v2.pages.dev/packages/css/pui-global.css" />
      <l-m src="https://punch-ui-v2.pages.dev/packages/textarea/textarea.html"></l-m>
      <div style="padding: 20px; max-width: 400px;">
        <p-textarea autofocus>
          <span slot="label">Autofocus</span>
        </p-textarea>
      </div>
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
      <l-m src="https://punch-ui-v2.pages.dev/packages/textarea/textarea.html"></l-m>
      <div style="padding: 20px; max-width: 400px;">
        <p-textarea id="message-textarea">
          <span slot="label">Message Content</span>
        </p-textarea>
        <p-button style="margin-top: 16px;" id="get-value-btn">Get Value</p-button>
        <p style="margin-top: 16px;">Current Value: <span id="value-display"></span></p>
      </div>
      <script>
        $('#get-value-btn').on('click', () => {
          $('#value-display').text = $('#message-textarea').value;
        });
      </script>
    </template>
  </code>
</o-playground>

### Listening for Input Events

By listening to the `input` event, get the input value in real time:

<o-playground name="Listening to input events" style="--editor-height: 400px">
  <code path="demo.html" preview active>
    <template>
      <link rel="stylesheet" href="https://punch-ui-v2.pages.dev/packages/css/pui-global.css" />
      <l-m src="https://punch-ui-v2.pages.dev/packages/textarea/textarea.html"></l-m>
      <div style="padding: 20px; max-width: 400px;">
        <p-textarea id="realtime-textarea">
          <span slot="label">Real-time input</span>
        </p-textarea>
        <p style="margin-top: 16px;">Real-time value: <span id="realtime-display"></span></p>
      </div>
      <script>
        $('#realtime-textarea').on('input', () => {
          $('#realtime-display').text = $('#realtime-textarea').value;
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
      <l-m src="https://punch-ui-v2.pages.dev/packages/textarea/textarea.html"></l-m>
      <div style="padding: 20px; max-width: 400px;">
        <p-textarea sync:value="message">
          <span slot="label">Message Content</span>
        </p-textarea>
        <p style="margin-top: 16px;">Current value: {{ message }}</p>
      </div>
      <script>
        export default {
          data: {
            message: 'Default message content'
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
| `placeholder` | Placeholder text | `string` | - |
| `disabled` | Whether disabled | `boolean` | `false` |
| `value` | Input value | `string` | - |
| `default-value` | Default value | `string` | - |
| `rows` | Number of rows | `number` | - |### Slot

| Slot Name | Description |
|----------|-------------|
| `default` | Text field content |
| `label` | Label text |### Events

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