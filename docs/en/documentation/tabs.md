# Tabs

Tab component, used to switch between different content.

## Importing Components

```html
<l-m src="https://punch-ui-v2.pages.dev/packages/tabs/tab-bar.html"></l-m>
```

## Basic Usage

<o-playground name="Tabs basic usage" style="--editor-height: 400px">
  <code path="demo.html" preview active>
    <template>
      <link rel="stylesheet" href="https://punch-ui-v2.pages.dev/packages/css/pui-global.css" />
      <l-m src="https://punch-ui-v2.pages.dev/packages/tabs/tab-bar.html"></l-m>
      <l-m src="https://punch-ui-v2.pages.dev/packages/tabs/tab-item.html"></l-m>
      <div style="padding: 20px;">
        <p-tab-bar>
          <p-tab-item active>Tab 1</p-tab-item>
          <p-tab-item>Tab 2</p-tab-item>
          <p-tab-item>Tab 3</p-tab-item>
        </p-tab-bar>
      </div>
    </template>
  </code>
</o-playground>

## Label with Icon

Use the `icon` slot to add an icon:

<o-playground name="Tab Bar with Icons" style="--editor-height: 400px">
  <code path="demo.html" preview active>
    <template>
      <link rel="stylesheet" href="https://punch-ui-v2.pages.dev/packages/css/pui-global.css" />
      <l-m src="https://punch-ui-v2.pages.dev/packages/tabs/tab-bar.html"></l-m>
      <l-m src="https://punch-ui-v2.pages.dev/packages/tabs/tab-item.html"></l-m>
      <div style="padding: 20px;">
        <p-tab-bar>
          <p-tab-item active>
            <span slot="icon">🏠</span>
            <span>Home</span>
          </p-tab-item>
          <p-tab-item>
            <span slot="icon">📑</span>
            <span>Bookmarks</span>
          </p-tab-item>
          <p-tab-item>
            <span slot="icon">👤</span>
            <span>About</span>
          </p-tab-item>
        </p-tab-bar>
      </div>
    </template>
  </code>
</o-playground>

## Disabled State

Add the `disabled` attribute to disable the label item:

<o-playground name="Disabled State" style="--editor-height: 400px">
  <code path="demo.html" preview active>
    <template>
      <link rel="stylesheet" href="https://punch-ui-v2.pages.dev/packages/css/pui-global.css" />
      <l-m src="https://punch-ui-v2.pages.dev/packages/tabs/tab-bar.html"></l-m>
      <l-m src="https://punch-ui-v2.pages.dev/packages/tabs/tab-item.html"></l-m>
      <div style="padding: 20px;">
        <p-tab-bar>
          <p-tab-item active>
            <span slot="icon">🏠</span>
            <span>Home</span>
          </p-tab-item>
          <p-tab-item disabled>
            <span slot="icon">⚙️</span>
            <span>Settings</span>
          </p-tab-item>
          <p-tab-item>
            <span slot="icon">👤</span>
            <span>About</span>
          </p-tab-item>
        </p-tab-bar>
      </div>
    </template>
  </code>
</o-playground>

## Scrollable Tab Bar

When there are too many tab items, you can set scrolling:

<o-playground name="Scrollable Tab Bar" style="--editor-height: 400px">
  <code path="demo.html" preview active>
    <template>
      <link rel="stylesheet" href="https://punch-ui-v2.pages.dev/packages/css/pui-global.css" />
      <l-m src="https://punch-ui-v2.pages.dev/packages/tabs/tab-bar.html"></l-m>
      <l-m src="https://punch-ui-v2.pages.dev/packages/tabs/tab-item.html"></l-m>
      <div style="padding: 20px;">
        <p-tab-bar style="overflow-x: auto">
          <p-tab-item active>Tab One</p-tab-item>
          <p-tab-item>Tab Two</p-tab-item>
          <p-tab-item>Tab Three</p-tab-item>
          <p-tab-item>Tab Four</p-tab-item>
          <p-tab-item>Tab Five</p-tab-item>
          <p-tab-item>Tab Six</p-tab-item>
          <p-tab-item>Tab Seven</p-tab-item>
        </p-tab-bar>
      </div>
    </template>
  </code>
</o-playground>

## Using in Page Modules

In the page module, click switching of tabs can be realized through data binding:

<o-playground name="Tab Switching in Page Module" style="--editor-height: 500px">
  <code path="demo.html" active>
    <template page>
      <link rel="stylesheet" href="https://punch-ui-v2.pages.dev/packages/css/pui-global.css" />
      <l-m src="https://punch-ui-v2.pages.dev/packages/tabs/tab-bar.html"></l-m>
      <l-m src="https://punch-ui-v2.pages.dev/packages/tabs/tab-item.html"></l-m>
      <div style="padding: 20px;">
        <p-tab-bar>
          <p-tab-item attr:active="active === 'home'" on:click="active = 'home'">
            <span slot="icon">🏠</span>
            <span>Home</span>
          </p-tab-item>
          <p-tab-item attr:active="active === 'bookmarks'" on:click="active = 'bookmarks'">
            <span slot="icon">📑</span>
            <span>Bookmarks</span>
          </p-tab-item>
          <p-tab-item attr:active="active === 'about'" on:click="active = 'about'">
            <span slot="icon">👤</span>
            <span>About</span>
          </p-tab-item>
        </p-tab-bar>
        <div style="margin-top: 20px; padding: 16px; background-color: var(--md-sys-color-surface-container);">
          Currently selected: {{ active }}
        </div>
      </div>
      <script>
        export default {
          data: {
            active: 'home'
          }
        };
      </script>
    </template>
  </code>
</o-playground>

## API

### Props - p-tab-item

| Property | Description | Type | Default |
|------|------|------|--------|
| `active` | Whether it is active | `boolean` | `false` |
| `disabled` | Whether it is disabled | `boolean` | `false` |### Slots - p-tab-item

| Slot Name | Description |
|--------|------|
| `default` | Label text content |
| `icon` | Icon content |### Event - p-tab-item

| Event Name | Description |
|--------|------|
| `change-active` | Triggered when the active state changes |
| `click` | Triggered when a tab item is clicked（not triggered when disabled）|