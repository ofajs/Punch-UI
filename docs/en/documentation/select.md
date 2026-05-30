# Select Selector

Dropdown selector component, supports single and multiple selection.

## Importing Components

```html
<l-m src="https://punch-ui-v2.pages.dev/packages/select/select.html"></l-m>
```

## Basic Usage

<o-playground name="Select Basic Usage" style="--editor-height: 350px">
  <code path="demo.html" preview active>
    <template>
      <link rel="stylesheet" href="https://punch-ui-v2.pages.dev/packages/css/pui-global.css" />
      <l-m src="https://punch-ui-v2.pages.dev/packages/select/select.html"></l-m>
      <l-m src="https://punch-ui-v2.pages.dev/packages/select/option.html"></l-m>
      <div style="padding: 20px;">
        <p-select placeholder="Please select" style="width: 200px;">
          <p-option value="1">Option 1</p-option>
          <p-option value="2">Option 2</p-option>
          <p-option value="3">Option 3</p-option>
        </p-select>
      </div>
    </template>
  </code>
</o-playground>

## Variant Styles

Set the selector style via the `variant` attribute:

<o-playground name="Select variants" style="--editor-height: 350px">
  <code path="demo.html" preview active>
    <template>
      <link rel="stylesheet" href="https://punch-ui-v2.pages.dev/packages/css/pui-global.css" />
      <l-m src="https://punch-ui-v2.pages.dev/packages/select/select.html"></l-m>
      <l-m src="https://punch-ui-v2.pages.dev/packages/select/option.html"></l-m>
      <div style="padding: 20px;">
        <p-select style="width: 150px;">
          <span slot="label">Outlined (default)</span>
          <p-option value="1">Option 1</p-option>
          <p-option value="2">Option 2</p-option>
        </p-select>
        <p-select variant="filled" style="margin-top: 16px; width: 150px;">
          <span slot="label">Filled</span>
          <p-option value="1">Option 1</p-option>
          <p-option value="2">Option 2</p-option>
        </p-select>
      </div>
    </template>
  </code>
</o-playground>

## Dimensions

Set the selector size via the `size` attribute:

<o-playground name="Select Size" style="--editor-height: 500px">
  <code path="demo.html" preview active>
    <template>
      <link rel="stylesheet" href="https://punch-ui-v2.pages.dev/packages/css/pui-global.css" />
      <l-m src="https://punch-ui-v2.pages.dev/packages/select/select.html"></l-m>
      <l-m src="https://punch-ui-v2.pages.dev/packages/select/option.html"></l-m>
      <div style="padding: 20px;">
        <p-select size="xs" style="width: 150px;">
          <span slot="label">Extra Small (xs)</span>
          <p-option value="1">Option 1</p-option>
        </p-select>
        <p-select size="s" style="margin-top: 16px; width: 150px;">
          <span slot="label">Small (s)</span>
          <p-option value="1">Option 1</p-option>
        </p-select>
        <p-select style="margin-top: 16px; width: 150px;">
          <span slot="label">Default</span>
          <p-option value="1">Option 1</p-option>
        </p-select>
        <p-select size="l" style="margin-top: 16px; width: 150px;">
          <span slot="label">Large (l)</span>
          <p-option value="1">Option 1</p-option>
        </p-select>
        <p-select size="xl" style="margin-top: 16px; width: 150px;">
          <span slot="label">Extra Large (xl)</span>
          <p-option value="1">Option 1</p-option>
        </p-select>
      </div>
    </template>
  </code>
</o-playground>

## Colors

Set the selector color through the `color` property:

<o-playground name="Select Color" style="--editor-height: 500px">
  <code path="demo.html" preview active>
    <template>
      <link rel="stylesheet" href="https://punch-ui-v2.pages.dev/packages/css/pui-global.css" />
      <l-m src="https://punch-ui-v2.pages.dev/packages/select/select.html"></l-m>
      <l-m src="https://punch-ui-v2.pages.dev/packages/select/option.html"></l-m>
      <div style="padding: 20px;">
        <p-select color="primary" style="width: 200px;">
          <span slot="label">Primary Color</span>
          <p-option value="1">Option 1</p-option>
        </p-select>
        <p-select color="success" style="margin-top: 16px; width: 200px;">
          <span slot="label">Success Color</span>
          <p-option value="1">Option 1</p-option>
        </p-select>
        <p-select color="neutral" style="margin-top: 16px; width: 200px;">
          <span slot="label">Neutral Color</span>
          <p-option value="1">Option 1</p-option>
        </p-select>
        <p-select color="error" style="margin-top: 16px; width: 200px;">
          <span slot="label">Error Color</span>
          <p-option value="1">Option 1</p-option>
        </p-select>
      </div>
    </template>
  </code>
</o-playground>

## Prefix and Suffix

Use the `prefix` and `suffix` slots to add a prefix or suffix:

<o-playground name="Select with Prefix/Suffix" style="--editor-height: 400px">
  <code path="demo.html" preview active>
    <template>
      <link rel="stylesheet" href="https://punch-ui-v2.pages.dev/packages/css/pui-global.css" />
      <l-m src="https://punch-ui-v2.pages.dev/packages/select/select.html"></l-m>
      <l-m src="https://punch-ui-v2.pages.dev/packages/select/option.html"></l-m>
      <div style="padding: 20px;">
        <p-select style="width: 200px;">
          <span slot="prefix">🌐</span>
          <span slot="label">Language</span>
          <p-option value="en">English</p-option>
          <p-option value="zh">Chinese</p-option>
        </p-select>
        <p-select style="margin-top: 16px; width: 200px;">
          <span slot="label">Currency</span>
          <span slot="suffix">💰</span>
          <p-option value="usd">USD</p-option>
          <p-option value="eur">EUR</p-option>
        </p-select>
      </div>
    </template>
  </code>
</o-playground>

## Disabled State

Add the `disabled` attribute to disable the selector:

<o-playground name="Disabled State" style="--editor-height: 350px">
  <code path="demo.html" preview active>
    <template>
      <link rel="stylesheet" href="https://punch-ui-v2.pages.dev/packages/css/pui-global.css" />
      <l-m src="https://punch-ui-v2.pages.dev/packages/select/select.html"></l-m>
      <l-m src="https://punch-ui-v2.pages.dev/packages/select/option.html"></l-m>
      <div style="padding: 20px;">
        <p-select disabled style="width: 200px;">
          <span slot="label">Disabled Selector</span>
          <p-option value="1">Option 1</p-option>
          <p-option value="2">Option 2</p-option>
        </p-select>
      </div>
    </template>
  </code>
</o-playground>

## Get Value

### Get via value attribute in HTML

Use the `value` property to get the value of the selector:

<o-playground name="Get Value" style="--editor-height: 400px">
  <code path="demo.html" preview active>
    <template>
      <link rel="stylesheet" href="https://punch-ui-v2.pages.dev/packages/css/pui-global.css" />
      <l-m src="https://punch-ui-v2.pages.dev/packages/button/button.html"></l-m>
      <l-m src="https://punch-ui-v2.pages.dev/packages/select/select.html"></l-m>
      <l-m src="https://punch-ui-v2.pages.dev/packages/select/option.html"></l-m>
      <div style="padding: 20px;">
        <p-select id="city-select" style="width: 200px;">
          <span slot="label">Select City</span>
          <p-option value="beijing">Beijing</p-option>
          <p-option value="shanghai">Shanghai</p-option>
          <p-option value="guangzhou">Guangzhou</p-option>
        </p-select>
        <p-button style="margin-top: 16px;" id="get-value-btn">Get Value</p-button>
        <p style="margin-top: 16px;">Current value: <span id="value-display"></span></p>
      </div>
      <script>
        $('#get-value-btn').on('click', () => {
          $('#value-display').text = $('#city-select').value;
        });
      </script>
    </template>
  </code>
</o-playground>

### Monitor change events

Listen to the `change` event to get the selected value in real time:

<o-playground name="Listening to change events" style="--editor-height: 400px">
  <code path="demo.html" preview active>
    <template>
      <link rel="stylesheet" href="https://punch-ui-v2.pages.dev/packages/css/pui-global.css" />
      <l-m src="https://punch-ui-v2.pages.dev/packages/select/select.html"></l-m>
      <l-m src="https://punch-ui-v2.pages.dev/packages/select/option.html"></l-m>
      <div style="padding: 20px;">
        <p-select id="realtime-select" style="width: 200px;">
          <span slot="label">Real-time Selection</span>
          <p-option value="apple">Apple</p-option>
          <p-option value="banana">Banana</p-option>
          <p-option value="orange">Orange</p-option>
        </p-select>
        <p style="margin-top: 16px;">Current value: <span id="realtime-display"></span></p>
      </div>
      <script>
        $('#realtime-select').on('change', () => {
          $('#realtime-display').text = $('#realtime-select').value;
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
      <l-m src="https://punch-ui-v2.pages.dev/packages/select/select.html"></l-m>
      <l-m src="https://punch-ui-v2.pages.dev/packages/select/option.html"></l-m>
      <div style="padding: 20px;">
        <p-select sync:value="selectedCity" style="width: 200px;">
          <span slot="label">Select City</span>
          <p-option value="beijing">Beijing</p-option>
          <p-option value="shanghai">Shanghai</p-option>
          <p-option value="guangzhou">Guangzhou</p-option>
        </p-select>
        <p style="margin-top: 16px;">Current value: {{ selectedCity }}</p>
      </div>
      <script>
        export default {
          data: {
            selectedCity: 'shanghai'
          }
        };
      </script>
    </template>
  </code>
</o-playground>

## API

### Properties - p-select

| Property | Description | Type | Default |
|------|------|------|--------|
| `placeholder` | Placeholder text | `string` | - |
| `disabled` | Whether disabled | `boolean` | `false` |
| `value` | Selected value | `string` | - |
| `variant` | Selector style | `outlined` \| `filled` | `outlined` |
| `size` | Selector size | `xs` \| `s` \| `l` \| `xl` | - |
| `color` | Selector color | `primary` \| `error` \| `success` \| `neutral` | - |### Properties - p-option

| Property | Description | Type | Default |
|------|------|------|--------|
| `value` | Value of the option | `string` | - |
| `disabled` | Whether disabled | `boolean` | `false` |### Slot - p-select

| Slot Name | Description |
|--------|------|
| `default` | Option content (p-option component) |
| `label` | Label text |
| `prefix` | Prefix content |
| `suffix` | Suffix content |### Events

| Event Name | Description |
|------------|-------------|
| `change`   | Triggered when the selected value changes |
| `focus`    | Triggered when the selector gains focus |
| `blur`     | Triggered when the selector loses focus |### Method

| Method Name | Description |
|--------|------|
| `focus()` | Makes the selector gain focus |
| `blur()` | Makes the selector lose focus |