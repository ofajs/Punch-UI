# Checkbox

Checkbox component, supports single and combined use.

## Importing Components

```html
<l-m src="https://punch-ui-v2.pages.dev/packages/checkbox/checkbox.html"></l-m>
```

## Basic Usage

<o-playground name="Checkbox Basic Usage" style="--editor-height: 300px">
  <code path="demo.html" preview active>
    <template>
      <link rel="stylesheet" href="https://punch-ui-v2.pages.dev/packages/css/pui-global.css" />
      <l-m src="https://punch-ui-v2.pages.dev/packages/checkbox/checkbox.html"></l-m>
      <div style="padding: 20px;">
        <p-checkbox>Checkbox</p-checkbox>
        <p-checkbox checked>Checked</p-checkbox>
      </div>
    </template>
  </code>
</o-playground>

::: warning Note
If you only need a single toggle selection, it is recommended to use the [Switch component](./switch.md), which provides a better toggle interaction experience.
:::

## Dimensions

Set the checkbox size using the `size` attribute:

<o-playground name="Checkbox Size" style="--editor-height: 350px">
  <code path="demo.html" preview active>
    <template>
      <link rel="stylesheet" href="https://punch-ui-v2.pages.dev/packages/css/pui-global.css" />
      <l-m src="https://punch-ui-v2.pages.dev/packages/checkbox/checkbox.html"></l-m>
      <div style="padding: 20px;">
        <p-checkbox size="xs" checked>XS</p-checkbox>
        <p-checkbox size="s" checked>Small</p-checkbox>
        <p-checkbox checked>Medium</p-checkbox>
        <p-checkbox size="l" checked>Large</p-checkbox>
        <p-checkbox size="xl" checked>XL</p-checkbox>
      </div>
    </template>
  </code>
</o-playground>

## Colors

Set the checkbox color via the `color` property:

<o-playground name="Checkbox Colors" style="--editor-height: 350px">
  <code path="demo.html" preview active>
    <template>
      <link rel="stylesheet" href="https://punch-ui-v2.pages.dev/packages/css/pui-global.css" />
      <l-m src="https://punch-ui-v2.pages.dev/packages/checkbox/checkbox.html"></l-m>
      <div style="padding: 20px;">
        <p-checkbox color="primary" checked>Primary</p-checkbox>
        <p-checkbox color="success" checked>Success</p-checkbox>
        <p-checkbox color="error" checked>Error</p-checkbox>
        <p-checkbox color="neutral" checked>Neutral</p-checkbox>
      </div>
    </template>
  </code>
</o-playground>

## Status

<o-playground name="Checkbox State" style="--editor-height: 400px">
  <code path="demo.html" preview active>
    <template>
      <link rel="stylesheet" href="https://punch-ui-v2.pages.dev/packages/css/pui-global.css" />
      <l-m src="https://punch-ui-v2.pages.dev/packages/checkbox/checkbox.html"></l-m>
      <div style="padding: 20px;">
        <p-checkbox>Default</p-checkbox>
        <p-checkbox variant="tonal">Tonal</p-checkbox>
        <p-checkbox checked>Checked</p-checkbox>
        <p-checkbox disabled>Disabled</p-checkbox>
        <p-checkbox indeterminate>Indeterminate</p-checkbox>
      </div>
    </template>
  </code>
</o-playground>

## Checkbox Group

Manage multiple checkboxes using a checkbox group, setting default checked items through the `checked` attribute:

<o-playground name="Checkbox Group" style="--editor-height: 400px">
  <code path="demo.html" preview active>
    <template>
      <link rel="stylesheet" href="https://punch-ui-v2.pages.dev/packages/css/pui-global.css" />
      <l-m src="https://punch-ui-v2.pages.dev/packages/checkbox/checkbox.html"></l-m>
      <l-m src="https://punch-ui-v2.pages.dev/packages/checkbox/group.html"></l-m>
      <div style="padding: 20px;">
        <p-checkbox-group>
          <p-checkbox value="1">Option 1</p-checkbox>
          <p-checkbox value="2" checked>Option 2</p-checkbox>
          <p-checkbox value="3" checked>Option 3</p-checkbox>
        </p-checkbox-group>
      </div>
    </template>
  </code>
</o-playground>

## Get Value

### Single Checkbox

Get or set the checked state of a single checkbox through the `checked` attribute:

<o-playground name="Single Checkbox Get Value" style="--editor-height: 400px">
  <code path="demo.html" preview active>
    <template>
      <link rel="stylesheet" href="https://punch-ui-v2.pages.dev/packages/css/pui-global.css" />
      <l-m src="https://punch-ui-v2.pages.dev/packages/button/button.html"></l-m>
      <l-m src="https://punch-ui-v2.pages.dev/packages/checkbox/checkbox.html"></l-m>
      <div style="padding: 20px;">
        <p-checkbox id="agree-checkbox">Agree to Terms</p-checkbox>
        <p-button style="margin-top: 16px;" id="check-btn">Check Status</p-button>
        <p style="margin-top: 16px;">Selected Status: <span id="status-display"></span></p>
      </div>
      <script>
        $('#check-btn').on('click', () => {
          const isChecked = $('#agree-checkbox').checked;
          $('#status-display').text = isChecked ? 'Checked' : 'Unchecked';
        });
      </script>
    </template>
  </code>
</o-playground>

### Checkbox Group Get Value

Get the array of selected values of a checkbox group through the `value` property:

<o-playground name="Checkbox Group Get Value" style="--editor-height: 400px">
  <code path="demo.html" preview active>
    <template>
      <link rel="stylesheet" href="https://punch-ui-v2.pages.dev/packages/css/pui-global.css" />
      <l-m src="https://punch-ui-v2.pages.dev/packages/button/button.html"></l-m>
      <l-m src="https://punch-ui-v2.pages.dev/packages/checkbox/checkbox.html"></l-m>
      <l-m src="https://punch-ui-v2.pages.dev/packages/checkbox/group.html"></l-m>
      <div style="padding: 20px;">
        <p-checkbox-group id="fruits-group">
          <p-checkbox value="apple">Apple</p-checkbox>
          <p-checkbox value="banana" checked>Banana</p-checkbox>
          <p-checkbox value="orange">Orange</p-checkbox>
        </p-checkbox-group>
        <p-button style="margin-top: 16px;" id="get-value-btn">Get Value</p-button>
        <p style="margin-top: 16px;">Current value: <span id="value-display"></span></p>
      </div>
      <script>
        $('#get-value-btn').on('click', () => {
          const values = $('#fruits-group').value;
          $('#value-display').text = JSON.stringify(values);
        });
      </script>
    </template>
  </code>
</o-playground>

### Monitor change events

Real-time retrieval of selected status by listening to the `change` event:

<o-playground name="Listen to change events" style="--editor-height: 400px">
  <code path="demo.html" preview active>
    <template>
      <link rel="stylesheet" href="https://punch-ui-v2.pages.dev/packages/css/pui-global.css" />
      <l-m src="https://punch-ui-v2.pages.dev/packages/checkbox/checkbox.html"></l-m>
      <l-m src="https://punch-ui-v2.pages.dev/packages/checkbox/group.html"></l-m>
      <div style="padding: 20px;">
        <p-checkbox-group id="realtime-group">
          <p-checkbox value="a">Option A</p-checkbox>
          <p-checkbox value="b">Option B</p-checkbox>
          <p-checkbox value="c">Option C</p-checkbox>
        </p-checkbox-group>
        <p style="margin-top: 16px;">Current value: <span id="realtime-display"></span></p>
      </div>
      <script>
        $('#realtime-group').on('change', () => {
          const values = $('#realtime-group').value;
          $('#realtime-display').text = JSON.stringify(values);
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
      <l-m src="https://punch-ui-v2.pages.dev/packages/checkbox/checkbox.html"></l-m>
      <l-m src="https://punch-ui-v2.pages.dev/packages/checkbox/group.html"></l-m>
      <div style="padding: 20px;">
        <p-checkbox-group :value="selectedFruits">
          <p-checkbox value="apple">Apple</p-checkbox>
          <p-checkbox value="banana">Banana</p-checkbox>
          <p-checkbox value="orange">Orange</p-checkbox>
        </p-checkbox-group>
        <p style="margin-top: 16px;">Current Value: {{ selectedFruits }}</p>
      </div>
      <script>
        export default {
          data: {
            selectedFruits: ['apple', 'banana']
          }
        };
      </script>
    </template>
  </code>
</o-playground>

Since `p-checkbox-group`'s `value` is an array object, based on JavaScript's object reference characteristics, directly using `:value` one-way binding can achieve two-way data synchronization, **no need to use `sync:value` syntax**.

When the user selects or deselects a check box, the component internally modifies the content of the array object directly (adding or removing elements). Since the same array object is referenced, the page data will update automatically.

## API

### Properties - p-checkbox

| Property | Description | Type | Default |
|------|------|------|--------|
| `checked` | Whether selected | `boolean` | `false` |
| `disabled` | Whether disabled | `boolean` | `false` |
| `name` | Form name | `string` | - |
| `value` | Value of the checkbox | `string` | - |
| `size` | Checkbox size | `xs` \| `s` \| `l` \| `xl` | - |
| `color` | Checkbox color | `primary` \| `error` \| `success` \| `neutral` | - |
| `variant` | Checkbox variant | `tonal` | - |
| `indeterminate` | Whether in indeterminate state | `boolean` | `false` |### Properties - p-checkbox-group

| Attribute | Description | Type | Default Value |
|------|------|------|--------|
| `value` | Array of selected values | `Array` | `[]` |### Events - p-checkbox

| Event Name | Description |
|--------|------|
| `change` | Triggered when the selected state changes |### Events - p-checkbox-group

| Event Name | Description |
|------------|-------------|
| `change` | Triggered when the selected value changes |### Method - p-checkbox

| Method Name | Description |
|--------|------|
| `focus()` | Makes the checkbox gain focus |