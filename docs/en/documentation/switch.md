# Switch

The switch component is used to toggle between two states, exposing the current state via `value`.

## Importing Components

```html
<l-m src="https://punch-ui-v2.pages.dev/packages/switch/switch.html"></l-m>
```

## Basic Usage

The switch component no longer uses a `checked` attribute. State is expressed through `value` together with `checked-value` / `unchecked-value`. Use `default-value` to set the initial value.

<o-playground name="Switch Basic Usage" style="--editor-height: 300px">
  <code path="demo.html" preview active>
    <template>
      <link rel="stylesheet" href="https://punch-ui-v2.pages.dev/packages/css/pui-global.css" />
      <l-m src="https://punch-ui-v2.pages.dev/packages/switch/switch.html"></l-m>
      <div style="padding: 20px;">
        <p-switch>Default Switch</p-switch>
        <p-switch default-value="on">Checked</p-switch>
      </div>
    </template>
  </code>
</o-playground>

## Dimensions

Set the switch size using the `size` property:

<o-playground name="Switch Sizes" style="--editor-height: 350px">
  <code path="demo.html" preview active>
    <template>
      <link rel="stylesheet" href="https://punch-ui-v2.pages.dev/packages/css/pui-global.css" />
      <l-m src="https://punch-ui-v2.pages.dev/packages/switch/switch.html"></l-m>
      <div style="padding: 20px;">
        <p-switch size="xs">XS</p-switch>
        <p-switch size="s">Small</p-switch>
        <p-switch>Medium</p-switch>
        <p-switch size="l">Large</p-switch>
        <p-switch size="xl">XL</p-switch>
      </div>
    </template>
  </code>
</o-playground>

## Colors

Set switch color via the `color` property:

<o-playground name="Switch Colors" style="--editor-height: 350px">
  <code path="demo.html" preview active>
    <template>
      <link rel="stylesheet" href="https://punch-ui-v2.pages.dev/packages/css/pui-global.css" />
      <l-m src="https://punch-ui-v2.pages.dev/packages/switch/switch.html"></l-m>
      <div style="padding: 20px;">
        <p-switch color="primary" default-value="on">Primary</p-switch>
        <p-switch color="error" default-value="on">Error</p-switch>
        <p-switch color="success" default-value="on">Success</p-switch>
      </div>
    </template>
  </code>
</o-playground>

## Status

<o-playground name="Switch State" style="--editor-height: 350px">
  <code path="demo.html" preview active>
    <template>
      <link rel="stylesheet" href="https://punch-ui-v2.pages.dev/packages/css/pui-global.css" />
      <l-m src="https://punch-ui-v2.pages.dev/packages/switch/switch.html"></l-m>
      <div style="padding: 20px;">
        <p-switch default-value="on">Checked</p-switch>
        <p-switch>Unchecked</p-switch>
        <p-switch disabled>Disabled</p-switch>
      </div>
    </template>
  </code>
</o-playground>

## Form Integration

### Custom Value

Use the `checked-value` and `unchecked-value` attributes to customize the checked/unchecked values:

<o-playground name="Switch with Custom Values" style="--editor-height: 350px">
  <code path="demo.html" preview active>
    <template>
      <link rel="stylesheet" href="https://punch-ui-v2.pages.dev/packages/css/pui-global.css" />
      <l-m src="https://punch-ui-v2.pages.dev/packages/switch/switch.html"></l-m>
      <div style="padding: 20px;">
        <p-switch 
          name="status" 
          checked-value="enabled" 
          unchecked-value="disabled"
          default-value="enabled"
        >
          Status Switch
        </p-switch>
      </div>
    </template>
  </code>
</o-playground>

### Default Values

Use the `default-value` attribute to set the initial value (the only entry point for the initial checked state):

<o-playground name="Default value" style="--editor-height: 350px">
  <code path="demo.html" preview active>
    <template>
      <link rel="stylesheet" href="https://punch-ui-v2.pages.dev/packages/css/pui-global.css" />
      <l-m src="https://punch-ui-v2.pages.dev/packages/switch/switch.html"></l-m>
      <div style="padding: 20px;">
        <p-switch 
          name="theme" 
          checked-value="dark" 
          unchecked-value="light"
          default-value="dark"
        >
          Dark mode
        </p-switch>
      </div>
    </template>
  </code>
</o-playground>

## Interactive Features

### Auto Focus

Use the `autofocus` attribute to automatically focus the switch on page load:

<o-playground name="autofocus" style="--editor-height: 300px">
  <code path="demo.html" preview active>
    <template>
      <link rel="stylesheet" href="https://punch-ui-v2.pages.dev/packages/css/pui-global.css" />
      <l-m src="https://punch-ui-v2.pages.dev/packages/switch/switch.html"></l-m>
      <div style="padding: 20px;">
        <p-switch autofocus>autofocus</p-switch>
      </div>
    </template>
  </code>
</o-playground>

### Keyboard Operation

Switch supports keyboard operation:
- **Space** - Toggle switch state
- **Enter** - Toggle switch state

<o-playground name="Keyboard Operation" style="--editor-height: 300px">
  <code path="demo.html" preview active>
    <template>
      <link rel="stylesheet" href="https://punch-ui-v2.pages.dev/packages/css/pui-global.css" />
      <l-m src="https://punch-ui-v2.pages.dev/packages/switch/switch.html"></l-m>
      <div style="padding: 20px;">
        <p-switch>Operate with keyboard</p-switch>
      </div>
    </template>
  </code>
</o-playground>

### Programmatic Control

Control switch state via JavaScript by writing to `value`:

<o-playground name="Programmatic Control" style="--editor-height: 400px">
  <code path="demo.html" preview active>
    <template>
      <link rel="stylesheet" href="https://punch-ui-v2.pages.dev/packages/css/pui-global.css" />
      <l-m src="https://punch-ui-v2.pages.dev/packages/button/button.html"></l-m>
      <l-m src="https://punch-ui-v2.pages.dev/packages/switch/switch.html"></l-m>
      <div style="padding: 20px;">
        <p-switch id="my-switch">Programmatic Control</p-switch>
        <p-button style="margin-top: 16px;" on:click="const sw = this.$('#my-switch'); sw.value = sw.value === 'on' ? 'off' : 'on';">Toggle State</p-button>
      </div>
    </template>
  </code>
</o-playground>

## Variant Styles

Use the `variant` attribute to set different styles:

<o-playground name="Variant Styles" style="--editor-height: 350px">
  <code path="demo.html" preview active>
    <template>
      <link rel="stylesheet" href="https://punch-ui-v2.pages.dev/packages/css/pui-global.css" />
      <l-m src="https://punch-ui-v2.pages.dev/packages/switch/switch.html"></l-m>
      <div style="padding: 20px;">
        <p-switch variant="filled" default-value="on">Filled</p-switch>
        <p-switch variant="outlined" default-value="on">Outlined</p-switch>
        <p-switch variant="text" default-value="on">Text</p-switch>
      </div>
    </template>
  </code>
</o-playground>

## Method

The switch component provides the following methods:

- `focus()` - gives focus to the switch

<o-playground name="Method" style="--editor-height: 400px">
  <code path="demo.html" preview active>
    <template>
      <link rel="stylesheet" href="https://punch-ui-v2.pages.dev/packages/css/pui-global.css" />
      <l-m src="https://punch-ui-v2.pages.dev/packages/button/button.html"></l-m>
      <l-m src="https://punch-ui-v2.pages.dev/packages/switch/switch.html"></l-m>
      <div style="padding: 20px;">
        <p-switch id="focus-switch">Focus Switch</p-switch>
        <p-button style="margin-top: 16px;" on:click="this.$('#focus-switch').focus()">Focus</p-button>
      </div>
    </template>
  </code>
</o-playground>

## Animation Effects

The switch component includes the following animation effects:
- **Slider Movement** - Smooth sliding animation
- **Check Mark** - Shows check animation when selected
- **Border Fill** - Border fill animation when selected

<o-playground name="Animation Effect" style="--editor-height: 300px">
  <code path="demo.html" preview active>
    <template>
      <link rel="stylesheet" href="https://punch-ui-v2.pages.dev/packages/css/pui-global.css" />
      <l-m src="https://punch-ui-v2.pages.dev/packages/switch/switch.html"></l-m>
      <div style="padding: 20px;">
        <p-switch default-value="on">Animation Effect</p-switch>
      </div>
    </template>
  </code>
</o-playground>

## Get Value

### Get via value attribute

Use the `value` attribute to get the switch's current value (equals `checked-value` or `unchecked-value`):

<o-playground name="Get Value" style="--editor-height: 400px">
  <code path="demo.html" preview active>
    <template>
      <link rel="stylesheet" href="https://punch-ui-v2.pages.dev/packages/css/pui-global.css" />
      <l-m src="https://punch-ui-v2.pages.dev/packages/button/button.html"></l-m>
      <l-m src="https://punch-ui-v2.pages.dev/packages/switch/switch.html"></l-m>
      <div style="padding: 20px;">
        <p-switch id="theme-switch">Dark Mode</p-switch>
        <p-button style="margin-top: 16px;" id="get-value-btn">Get Status</p-button>
        <p style="margin-top: 16px;">Current Status: <span id="status-display"></span></p>
      </div>
      <script>
        $('#get-value-btn').on('click', () => {
          const value = $('#theme-switch').value;
          $('#status-display').text = value === 'on' ? 'Enabled' : 'Disabled';
        });
      </script>
    </template>
  </code>
</o-playground>

### Get Custom Value

When `checked-value` and `unchecked-value` are set, get the current value through the `value` attribute:

<o-playground name="Get Custom Value" style="--editor-height: 400px">
  <code path="demo.html" preview active>
    <template>
      <link rel="stylesheet" href="https://punch-ui-v2.pages.dev/packages/css/pui-global.css" />
      <l-m src="https://punch-ui-v2.pages.dev/packages/button/button.html"></l-m>
      <l-m src="https://punch-ui-v2.pages.dev/packages/switch/switch.html"></l-m>
      <div style="padding: 20px;">
        <p-switch 
          id="status-switch"
          checked-value="enabled" 
          unchecked-value="disabled"
          default-value="enabled"
        >
          Status Switch
        </p-switch>
        <p-button style="margin-top: 16px;" id="get-custom-btn">Get Value</p-button>
        <p style="margin-top: 16px;">Current value: <span id="custom-value-display"></span></p>
      </div>
      <script>
        $('#get-custom-btn').on('click', () => {
          const value = $('#status-switch').value;
          $('#custom-value-display').text = value;
        });
      </script>
    </template>
  </code>
</o-playground>

### Monitor change events

Get the switch state in real time by listening to the `change` event:

<o-playground name="Listen to Change Events" style="--editor-height: 400px">
  <code path="demo.html" preview active>
    <template>
      <link rel="stylesheet" href="https://punch-ui-v2.pages.dev/packages/css/pui-global.css" />
      <l-m src="https://punch-ui-v2.pages.dev/packages/switch/switch.html"></l-m>
      <div style="padding: 20px;">
        <p-switch id="realtime-switch">Realtime listening</p-switch>
        <p style="margin-top: 16px;">Current status: <span id="realtime-display"></span></p>
      </div>
      <script>
        $('#realtime-switch').on('change', () => {
          const value = $('#realtime-switch').value;
          $('#realtime-display').text = value === 'on' ? 'Enabled' : 'Disabled';
        });
      </script>
    </template>
  </code>
</o-playground>

### Two-way binding in components or page modules

Use ofa.js's data binding feature:

<o-playground name="Get Value" style="--editor-height: 400px">
  <code path="demo.html" active>
    <template page>
      <link rel="stylesheet" href="https://punch-ui-v2.pages.dev/packages/css/pui-global.css" />
      <l-m src="https://punch-ui-v2.pages.dev/packages/switch/switch.html"></l-m>
      <div style="padding: 20px;">
        <p-switch 
          sync:value="status"
          checked-value="on"
          unchecked-value="off"
        >
          Dark Mode
        </p-switch>
        <p style="margin-top: 16px;">Current Status: {{ status }}</p>
      </div>
      <script>
        export default {
          data: {
            status: 'on'
          }
        };
      </script>
    </template>
  </code>
</o-playground>

When using two-way binding in a component or page module, **bind the `value` attribute** together with `checked-value` and `unchecked-value`.

## Accessibility Support

The switch component provides the following accessibility support:
- Supports keyboard navigation and operation
- Provides focus state indication
- Supports screen readers

<o-playground name="Accessibility Support" style="--editor-height: 300px">
  <code path="demo.html" preview active>
    <template>
      <link rel="stylesheet" href="https://punch-ui-v2.pages.dev/packages/css/pui-global.css" />
      <l-m src="https://punch-ui-v2.pages.dev/packages/switch/switch.html"></l-m>
      <div style="padding: 20px;">
        <p-switch>Accessible Switch</p-switch>
      </div>
    </template>
  </code>
</o-playground>

## API

### Attributes

| Attribute | Description | Type | Default |
|------|------|------|--------|
| `value` | Current value (equals `checked-value` or `unchecked-value`) | `string` | - |
| `size` | Switch size | `xs` \| `s` \| `l` \| `xl` | - |
| `color` | Switch color | `primary` \| `error` \| `success` | `primary` |
| `disabled` | Whether disabled | `boolean` | `false` |
| `name` | Form name | `string` | - |
| `checked-value` | Value when selected | `string` | `on` |
| `unchecked-value` | Value when not selected | `string` | `off` |
| `default-value` | Default value | `string` | - |

### Events

| Event Name | Description |
|--------|------|
| `change` | Triggered when the switch state changes |

### Method

| Method Name | Description |
|--------|------|
| `focus()` | Makes the switch gain focus |
