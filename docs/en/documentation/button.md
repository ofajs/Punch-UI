# Button

The button component is one of the most commonly used components in Punch-UI, offering a variety of styles, sizes, and color choices.

## Importing Components

```html
<l-m src="https://punch-ui-v2.pages.dev/packages/button/button.html"></l-m>
```

## Basic Usage

<o-playground name="Button Basic Usage" style="--editor-height: 300px">
  <code path="demo.html" preview active>
    <template>
      <link rel="stylesheet" href="https://punch-ui-v2.pages.dev/packages/css/pui-global.css" />
      <l-m src="https://punch-ui-v2.pages.dev/packages/button/button.html"></l-m>
      <div style="padding: 20px;">
        <p-button>Default Button</p-button>
      </div>
    </template>
  </code>
</o-playground>

## Button Variants

Set button style via the `variant` property:

<o-playground name="Button Variants" style="--editor-height: 350px">
  <code path="demo.html" preview active>
    <template>
      <link rel="stylesheet" href="https://punch-ui-v2.pages.dev/packages/css/pui-global.css" />
      <l-m src="https://punch-ui-v2.pages.dev/packages/button/button.html"></l-m>
      <div style="padding: 20px;">
        <p-button variant="filled">Filled Button</p-button>
        <p-button variant="outlined">Outlined Button</p-button>
        <p-button variant="text">Text Button</p-button>
      </div>
    </template>
  </code>
</o-playground>

## Dimensions

Set button size via the `size` attribute:

<o-playground name="Button Size" style="--editor-height: 350px">
  <code path="demo.html" preview active>
    <template>
      <link rel="stylesheet" href="https://punch-ui-v2.pages.dev/packages/css/pui-global.css" />
      <l-m src="https://punch-ui-v2.pages.dev/packages/button/button.html"></l-m>
      <div style="padding: 20px;">
        <p-button size="xs">Extra Small</p-button>
        <p-button size="s">Small</p-button>
        <p-button>Default</p-button>
        <p-button size="l">Large</p-button>
        <p-button size="xl">Extra Large</p-button>
      </div>
    </template>
  </code>
</o-playground>

## Colors

Set the button color through the `color` attribute:

<o-playground name="Button Color" style="--editor-height: 350px">
  <code path="demo.html" preview active>
    <template>
      <link rel="stylesheet" href="https://punch-ui-v2.pages.dev/packages/css/pui-global.css" />
      <l-m src="https://punch-ui-v2.pages.dev/packages/button/button.html"></l-m>
      <div style="padding: 20px;">
        <p-button>Default</p-button>
        <p-button color="primary">Primary</p-button>
        <p-button color="error">Error</p-button>
        <p-button color="success">Success</p-button>
        <p-button color="neutral">Neutral</p-button>
      </div>
    </template>
  </code>
</o-playground>

## Icon Button

Add the `icon` attribute to make the button a circular icon button:

<o-playground name="Icon Button" style="--editor-height: 300px">
  <code path="demo.html" preview active>
    <template>
      <link rel="stylesheet" href="https://punch-ui-v2.pages.dev/packages/css/pui-global.css" />
      <l-m src="https://punch-ui-v2.pages.dev/packages/button/button.html"></l-m>
      <div style="padding: 20px;">
        <p-button icon>+</p-button>
        <p-button icon size="s">-</p-button>
        <p-button icon size="l">×</p-button>
      </div>
    </template>
  </code>
</o-playground>

## With Prefix/Suffix

Use the `prefix` and `suffix` slots to add icons or text:

<o-playground name="Buttons with Prefix/Suffix" style="--editor-height: 300px">
  <code path="demo.html" preview active>
    <template>
      <link rel="stylesheet" href="https://punch-ui-v2.pages.dev/packages/css/pui-global.css" />
      <l-m src="https://punch-ui-v2.pages.dev/packages/button/button.html"></l-m>
      <div style="padding: 20px;">
        <p-button>
          <span slot="prefix">🔍</span>
          Search
        </p-button>
        <p-button>
          Settings
          <span slot="suffix">⚙️</span>
        </p-button>
      </div>
    </template>
  </code>
</o-playground>

## Disabled State

Add the `disabled` attribute to disable the button:

<o-playground name="Disabled State" style="--editor-height: 300px">
  <code path="demo.html" preview active>
    <template>
      <link rel="stylesheet" href="https://punch-ui-v2.pages.dev/packages/css/pui-global.css" />
      <l-m src="https://punch-ui-v2.pages.dev/packages/button/button.html"></l-m>
      <div style="padding: 20px;">
        <p-button disabled>Disabled Button</p-button>
        <p-button variant="outlined" disabled>Disabled Outlined</p-button>
      </div>
    </template>
  </code>
</o-playground>

## Autofocus

Use the `autofocus` attribute to make the button automatically receive focus when the page loads:

<o-playground name="Auto Focus" style="--editor-height: 300px">
  <code path="demo.html" preview active>
    <template>
      <link rel="stylesheet" href="https://punch-ui-v2.pages.dev/packages/css/pui-global.css" />
      <l-m src="https://punch-ui-v2.pages.dev/packages/button/button.html"></l-m>
      <div style="padding: 20px;">
        <p-button autofocus>Auto Focus Button</p-button>
        <p-button>Normal Button</p-button>
      </div>
    </template>
  </code>
</o-playground>

## Button Group

Use button groups to combine multiple buttons together:

<o-playground name="Button Group" style="--editor-height: 400px">
  <code path="demo.html" preview active>
    <template>
      <link rel="stylesheet" href="https://punch-ui-v2.pages.dev/packages/css/pui-global.css" />
      <l-m src="https://punch-ui-v2.pages.dev/packages/button/button.html"></l-m>
      <l-m src="https://punch-ui-v2.pages.dev/packages/button/group.html"></l-m>
      <div style="padding: 20px;">
        <h4>Basic Button Group</h4>
        <p-button-group>
          <p-button>Button 1</p-button>
          <p-button>Button 2</p-button>
          <p-button>Button 3</p-button>
        </p-button-group>
        <h4 style="margin-top: 20px;">Connected Button Group</h4>
        <p-button-group connected>
          <p-button variant="outlined">Home</p-button>
          <p-button variant="outlined">Products</p-button>
          <p-button variant="outlined">About</p-button>
        </p-button-group>
        <h4 style="margin-top: 20px;">Full-width Button Group</h4>
        <p-button-group full-width>
          <p-button>Left</p-button>
          <p-button>Center</p-button>
          <p-button>Right</p-button>
        </p-button-group>
      </div>
    </template>
  </code>
</o-playground>

## Advanced Usage

### Segment Control (Single Select)

Use button groups to implement segmented control, suitable for scenarios such as switching view modes:

<o-playground name="Segmented Control" style="--editor-height: 400px">
  <code path="demo.html" active>
    <template page>
      <link rel="stylesheet" href="https://punch-ui-v2.pages.dev/packages/css/pui-global.css" />
      <l-m src="https://punch-ui-v2.pages.dev/packages/button/button.html"></l-m>
      <l-m src="https://punch-ui-v2.pages.dev/packages/button/group.html"></l-m>
      <div style="padding: 20px;">
        <p-button-group>
          <p-button
            attr:variant="selected === 'day' ? 'filled' : 'outlined'"
            on:click="selected = 'day'"
          >
            Day
          </p-button>
          <p-button
            attr:variant="selected === 'week' ? 'filled' : 'outlined'"
            on:click="selected = 'week'"
          >
            Week
          </p-button>
          <p-button
            attr:variant="selected === 'month' ? 'filled' : 'outlined'"
            on:click="selected = 'month'"
          >
            Month
          </p-button>
        </p-button-group>
      </div>
      <script>
        export default {
          data: {
            selected: 'day'
          }
        };
      </script>
    </template>
  </code>
</o-playground>

### Filter chips (multi-select)

Use button groups to implement a multi-select filter:

<o-playground name="Filter Chips" style="--editor-height: 400px">
  <code path="demo.html" active>
    <template page>
      <link rel="stylesheet" href="https://punch-ui-v2.pages.dev/packages/css/pui-global.css" />
      <l-m src="https://punch-ui-v2.pages.dev/packages/button/button.html"></l-m>
      <l-m src="https://punch-ui-v2.pages.dev/packages/button/group.html"></l-m>
      <style>
        p-button {
          transition: all 0.2s ease;
        }
      </style>
      <div style="padding: 20px;">
        <p-button-group>
          <p-button
            attr:color="filters.includes('all') ? 'primary' : 'neutral'"
            :style.border-radius="filters.includes('all') ? '28px' : ''"
            on:click="toggleFilter('all')"
          >
            All
          </p-button>
          <p-button
            attr:color="filters.includes('active') ? 'primary' : 'neutral'"
            :style.border-radius="filters.includes('active') ? '28px' : ''"
            on:click="toggleFilter('active')"
          >
            Active
          </p-button>
          <p-button
            attr:color="filters.includes('completed') ? 'primary' : 'neutral'"
            :style.border-radius="filters.includes('completed') ? '28px' : ''"
            on:click="toggleFilter('completed')"
          >
            Completed
          </p-button>
        </p-button-group>
      </div>
      <script>
        export default {
          data: {
            filters: ['all']
          },
          proto: {
            toggleFilter(filter) {
              const index = this.filters.indexOf(filter);
              if (index > -1) {
                this.filters.splice(index, 1);
              } else {
                this.filters.push(filter);
              }
            }
          }
        };
      </script>
    </template>
  </code>
</o-playground>

### Sort Options

Implement sorting option switching using a button group:

<o-playground name="Sorting Options" style="--editor-height: 400px">
  <code path="demo.html" active>
    <template page>
      <link rel="stylesheet" href="https://punch-ui-v2.pages.dev/packages/css/pui-global.css" />
      <l-m src="https://punch-ui-v2.pages.dev/packages/button/button.html"></l-m>
      <l-m src="https://punch-ui-v2.pages.dev/packages/button/group.html"></l-m>
      <style>
        p-button {
          transition: all 0.2s ease;
        }
      </style>
      <div style="padding: 20px;">
        <p-button-group>
          <p-button
            attr:color="order === 'newest' ? 'primary' : 'neutral'"
            :style.border-radius="order === 'newest' ? '28px' : ''"
            on:click="order = 'newest'"
          >
            Newest
          </p-button>
          <p-button
            attr:color="order === 'oldest' ? 'primary' : 'neutral'"
            :style.border-radius="order === 'oldest' ? '28px' : ''"
            on:click="order = 'oldest'"
          >
            Oldest
          </p-button>
          <p-button
            attr:color="order === 'price' ? 'primary' : 'neutral'"
            :style.border-radius="order === 'price' ? '28px' : ''"
            on:click="order = 'price'"
          >
            Price
          </p-button>
        </p-button-group>
      </div>
      <script>
        export default {
          data: {
            order: 'newest'
          }
        };
      </script>
    </template>
  </code>
</o-playground>

## API

### Attributes

| Property | Description | Type | Default |
|------|------|------|--------|
| `variant` | Button style | `filled` \| `outlined` \| `text` | `filled` |
| `size` | Button size | `xs` \| `s` \| `l` \| `xl` | - |
| `color` | Button color | `primary` \| `error` \| `success` \| `neutral` | - |
| `icon` | Whether it is an icon button | `boolean` | `false` |
| `disabled` | Whether it is disabled | `boolean` | `false` |
| `autofocus` | Whether to autofocus | `boolean` | `false` |### Slot

| Slot Name | Description |
|--------|------|
| `default` | Button content |
| `prefix` | Prefix content |
| `suffix` | Suffix content |