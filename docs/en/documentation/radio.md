# Radio

Radio button component, usually used in combination with radio-group.

## Importing Components

```html
<l-m src="https://punch-ui-v2.pages.dev/packages/radio/radio.html"></l-m>
<l-m src="https://punch-ui-v2.pages.dev/packages/radio/group.html"></l-m>
```

## Basic Usage

Use `p-radio-group` to wrap multiple `p-radio` components:

<o-playground name="Radio Basic Usage" style="--editor-height: 350px">
  <code path="demo.html" preview active>
    <template>
      <link rel="stylesheet" href="https://punch-ui-v2.pages.dev/packages/css/pui-global.css" />
      <l-m src="https://punch-ui-v2.pages.dev/packages/radio/radio.html"></l-m>
      <l-m src="https://punch-ui-v2.pages.dev/packages/radio/group.html"></l-m>
      <div style="padding: 20px;">
        <p-radio-group>
          <p-radio value="male">Male</p-radio>
          <p-radio value="female">Female</p-radio>
        </p-radio-group>
      </div>
    </template>
  </code>
</o-playground>

## Dimensions

Set the radio button size using the `size` attribute:

<o-playground name="Radio Size" style="--editor-height: 350px">
  <code path="demo.html" preview active>
    <template>
      <link rel="stylesheet" href="https://punch-ui-v2.pages.dev/packages/css/pui-global.css" />
      <l-m src="https://punch-ui-v2.pages.dev/packages/radio/radio.html"></l-m>
      <l-m src="https://punch-ui-v2.pages.dev/packages/radio/group.html"></l-m>
      <div style="padding: 20px;">
        <p-radio-group>
          <p-radio size="xs" value="xs">XS</p-radio>
          <p-radio size="s" value="s">Small</p-radio>
          <p-radio value="m">Medium</p-radio>
          <p-radio size="l" value="l">Large</p-radio>
          <p-radio size="xl" value="xl">XL</p-radio>
        </p-radio-group>
      </div>
    </template>
  </code>
</o-playground>

## Colors

Set the radio button color using the `color` property:

<o-playground name="Radio Color" style="--editor-height: 350px">
  <code path="demo.html" preview active>
    <template>
      <link rel="stylesheet" href="https://punch-ui-v2.pages.dev/packages/css/pui-global.css" />
      <l-m src="https://punch-ui-v2.pages.dev/packages/radio/radio.html"></l-m>
      <l-m src="https://punch-ui-v2.pages.dev/packages/radio/group.html"></l-m>
      <div style="padding: 20px;">
        <p-radio-group>
          <p-radio color="primary" value="primary">Primary</p-radio>
          <p-radio color="success" value="success">Success</p-radio>
          <p-radio color="error" value="error">Error</p-radio>
          <p-radio color="neutral" value="neutral">Neutral</p-radio>
        </p-radio-group>
      </div>
    </template>
  </code>
</o-playground>

## Status

<o-playground name="Radio States" style="--editor-height: 400px">
  <code path="demo.html" preview active>
    <template>
      <link rel="stylesheet" href="https://punch-ui-v2.pages.dev/packages/css/pui-global.css" />
      <l-m src="https://punch-ui-v2.pages.dev/packages/radio/radio.html"></l-m>
      <l-m src="https://punch-ui-v2.pages.dev/packages/radio/group.html"></l-m>
      <div style="padding: 20px;">
        <p-radio-group>
          <p-radio value="default">Default</p-radio>
          <p-radio variant="tonal" value="tonal">Tonal</p-radio>
          <p-radio checked value="checked">Checked</p-radio>
          <p-radio disabled value="disabled">Disabled</p-radio>
        </p-radio-group>
      </div>
    </template>
  </code>
</o-playground>

## Initialize default selected item

Use a radio group to manage multiple radio buttons, and set the default selected item via the `checked` attribute:

<o-playground name="Radio Group" style="--editor-height: 400px">
  <code path="demo.html" preview active>
    <template>
      <link rel="stylesheet" href="https://punch-ui-v2.pages.dev/packages/css/pui-global.css" />
      <l-m src="https://punch-ui-v2.pages.dev/packages/radio/radio.html"></l-m>
      <l-m src="https://punch-ui-v2.pages.dev/packages/radio/group.html"></l-m>
      <div style="padding: 20px;">
        <p-radio-group>
          <p-radio value="a">Option A</p-radio>
          <p-radio value="b" checked>Option B</p-radio>
          <p-radio value="c">Option C</p-radio>
        </p-radio-group>
      </div>
    </template>
  </code>
</o-playground>

## Get Value

### Get via value attribute in HTML

Use the `value` attribute to get the value of a radio button group:

<o-playground name="Get Value" style="--editor-height: 400px">
  <code path="demo.html" preview active>
    <template>
      <link rel="stylesheet" href="https://punch-ui-v2.pages.dev/packages/css/pui-global.css" />
      <l-m src="https://punch-ui-v2.pages.dev/packages/button/button.html"></l-m>
      <l-m src="https://punch-ui-v2.pages.dev/packages/radio/radio.html"></l-m>
      <l-m src="https://punch-ui-v2.pages.dev/packages/radio/group.html"></l-m>
      <div style="padding: 20px;">
        <p-radio-group id="gender-group">
          <p-radio value="male">Male</p-radio>
          <p-radio value="female">Female</p-radio>
        </p-radio-group>
        <p-button style="margin-top: 16px;" id="get-value-btn">Get Value</p-button>
        <p style="margin-top: 16px;">Current Value: <span id="value-display"></span></p>
      </div>
      <script>
        $('#get-value-btn').on('click', () => {
          $('#value-display').text = $('#gender-group').value;
        });
      </script>
    </template>
  </code>
</o-playground>

### Monitor change events

Listen to the `change` event to get the selected value in real time:

<o-playground name="Listen to change events" style="--editor-height: 400px">
  <code path="demo.html" preview active>
    <template>
      <link rel="stylesheet" href="https://punch-ui-v2.pages.dev/packages/css/pui-global.css" />
      <l-m src="https://punch-ui-v2.pages.dev/packages/radio/radio.html"></l-m>
      <l-m src="https://punch-ui-v2.pages.dev/packages/radio/group.html"></l-m>
      <div style="padding: 20px;">
        <p-radio-group id="realtime-group">
          <p-radio value="a">Option A</p-radio>
          <p-radio value="b">Option B</p-radio>
          <p-radio value="c">Option C</p-radio>
        </p-radio-group>
        <p style="margin-top: 16px;">Current value: <span id="realtime-display"></span></p>
      </div>
      <script>
        $('#realtime-group').on('change', () => {
          $('#realtime-display').text = $('#realtime-group').value;
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
      <l-m src="https://punch-ui-v2.pages.dev/packages/radio/radio.html"></l-m>
      <l-m src="https://punch-ui-v2.pages.dev/packages/radio/group.html"></l-m>
      <div style="padding: 20px;">
        <p-radio-group sync:value="selectedOption">
          <p-radio value="a">Option A</p-radio>
          <p-radio value="b">Option B</p-radio>
          <p-radio value="c">Option C</p-radio>
        </p-radio-group>
        <p style="margin-top: 16px;">Current Value: {{ selectedOption }}</p>
      </div>
      <script>
        export default {
          data: {
            selectedOption: 'b'
          }
        };
      </script>
    </template>
  </code>
</o-playground>

## API

### Properties - p-radio

| Property | Description | Type | Default |
|------|------|------|--------|
| `checked` | Whether checked | `boolean` | `false` |
| `disabled` | Whether disabled | `boolean` | `false` |
| `value` | The value of the radio | `string` | - |
| `size` | The size of the radio | `xs` \| `s` \| `l` \| `xl` | - |
| `color` | The color of the radio | `primary` \| `error` \| `success` \| `neutral` | - |
| `variant` | The variant of the radio | `tonal` | - |### Properties - p-radio-group

| Property | Description | Type | Default |
|------|------|------|--------|
| `value` | selected value | `string` | - |### Events

| Event Name | Description |
|--------|------|
| `change` | Triggered when the selection state changes |