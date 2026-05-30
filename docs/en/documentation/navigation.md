# Navigation

The navigation component package provides navigation bar, navigation item, and navigation layout components for building responsive application navigation systems.

## Importing Components

```html
<l-m src="https://punch-ui-v2.pages.dev/packages/navigation/nav-bar.html"></l-m>
```

## Basic Usage - Navigation Bar

<o-playground name="Navigation Basic Usage" style="--editor-height: 400px">
  <code path="demo.html" preview active>
    <template>
      <link rel="stylesheet" href="https://punch-ui-v2.pages.dev/packages/css/pui-global.css" />
      <l-m src="https://punch-ui-v2.pages.dev/packages/navigation/nav-bar.html"></l-m>
      <l-m src="https://punch-ui-v2.pages.dev/packages/navigation/nav-item.html"></l-m>
      <div style="padding: 20px;">
        <p-nav-bar>
          <p-nav-item active>
            <span slot="icon">🏠</span>
            <span>Home</span>
          </p-nav-item>
          <p-nav-item>
            <span slot="icon">📑</span>
            <span>Bookmarks</span>
          </p-nav-item>
          <p-nav-item>
            <span slot="icon">👤</span>
            <span>About</span>
          </p-nav-item>
        </p-nav-bar>
      </div>
    </template>
  </code>
</o-playground>

## Vertical Navigation Bar

<o-playground name="Vertical Navigation Bar" style="--editor-height: 500px">
  <code path="demo.html" preview active>
    <template>
      <link rel="stylesheet" href="https://punch-ui-v2.pages.dev/packages/css/pui-global.css" />
      <l-m src="https://punch-ui-v2.pages.dev/packages/navigation/nav-bar.html"></l-m>
      <l-m src="https://punch-ui-v2.pages.dev/packages/navigation/nav-item.html"></l-m>
      <div style="padding: 20px;">
        <p-nav-bar style="height: 400px; display: inline-flex; flex-direction: column">
          <p-nav-item active>
            <span slot="icon">🏠</span>
            <span>Home</span>
          </p-nav-item>
          <p-nav-item>
            <span slot="icon">⚙️</span>
            <span>Settings</span>
          </p-nav-item>
          <p-nav-item>
            <span slot="icon">👤</span>
            <span>About</span>
          </p-nav-item>
        </p-nav-bar>
      </div>
    </template>
  </code>
</o-playground>

## Tag Parallel Mode

<o-playground name="Label Parallel Mode" style="--editor-height: 400px">
  <code path="demo.html" preview active>
    <template>
      <link rel="stylesheet" href="https://punch-ui-v2.pages.dev/packages/css/pui-global.css" />
      <l-m src="https://punch-ui-v2.pages.dev/packages/navigation/nav-bar.html"></l-m>
      <l-m src="https://punch-ui-v2.pages.dev/packages/navigation/nav-item.html"></l-m>
      <div style="padding: 20px;">
        <p-nav-bar style="--label-parallel: true; padding: 8px 12px;">
          <p-nav-item active>
            <span slot="icon">🏠</span>
            <span>Home</span>
          </p-nav-item>
          <p-nav-item>
            <span slot="icon">👤</span>
            <span>About</span>
          </p-nav-item>
        </p-nav-bar>
      </div>
    </template>
  </code>
</o-playground>

## Disabled State

<o-playground name="Disabled State" style="--editor-height: 400px">
  <code path="demo.html" preview active>
    <template>
      <link rel="stylesheet" href="https://punch-ui-v2.pages.dev/packages/css/pui-global.css" />
      <l-m src="https://punch-ui-v2.pages.dev/packages/navigation/nav-bar.html"></l-m>
      <l-m src="https://punch-ui-v2.pages.dev/packages/navigation/nav-item.html"></l-m>
      <div style="padding: 20px;">
        <p-nav-bar>
          <p-nav-item active>
            <span slot="icon">🏠</span>
            <span>Home</span>
          </p-nav-item>
          <p-nav-item disabled>
            <span slot="icon">⚙️</span>
            <span>Settings</span>
          </p-nav-item>
          <p-nav-item>
            <span slot="icon">👤</span>
            <span>About</span>
          </p-nav-item>
        </p-nav-bar>
      </div>
    </template>
  </code>
</o-playground>

## Nav Layout

`p-nav-layout` is a responsive navigation layout component that automatically adjusts the style and position of the navigation bar based on the container width.

### Auto-fit Window

The component has a built-in container query mechanism, which intelligently adjusts the layout based on the container width:

- **Mobile (< 768px)**: The navigation bar is located at the bottom, using a vertical layout with icons and text arranged vertically.
- **Tablet (768px - 1024px)**: The navigation bar is at the bottom and automatically switches to a tab-inline mode, with icons and text arranged horizontally.
- **Desktop (≥ 1024px)**: The navigation bar automatically moves to the left, using a vertical layout to provide more spacious content display area.

This adaptive design ensures an optimal user experience across different devices without the need to manually write responsive code.

### Import Components

```html
<l-m src="https://punch-ui-v2.pages.dev/packages/navigation/nav-layout.html"></l-m>
```

### Basic Usage

<o-playground name="Navigation Layout" style="--editor-height: 600px">
  <code path="demo.html" active>
    <template page>
      <link rel="stylesheet" href="https://punch-ui-v2.pages.dev/packages/css/pui-global.css" />
      <l-m src="https://punch-ui-v2.pages.dev/packages/navigation/nav-layout.html"></l-m>
      <l-m src="https://punch-ui-v2.pages.dev/packages/navigation/nav-bar.html"></l-m>
      <l-m src="https://punch-ui-v2.pages.dev/packages/navigation/nav-item.html"></l-m>
      <div style="height: 100%;">
        <p-nav-layout>
          <div style="padding: 20px;">
            <o-if :value="active === 'home'">
              <h1>Home</h1>
              <p>This is the home content...</p>
            </o-if>
            <o-if :value="active === 'bookmarks'">
              <h1>Bookmarks</h1>
              <p>This is the bookmarks content...</p>
            </o-if>
            <o-if :value="active === 'about'">
              <h1>About</h1>
              <p>This is the about content...</p>
            </o-if>
          </div>
          <p-nav-bar slot="nav">
            <p-nav-item attr:active="active === 'home'" on:click="active = 'home'">
              <span slot="icon">🏠</span>
              <span>Home</span>
            </p-nav-item>
            <p-nav-item attr:active="active === 'bookmarks'" on:click="active = 'bookmarks'">
              <span slot="icon">📑</span>
              <span>Bookmarks</span>
            </p-nav-item>
            <p-nav-item attr:active="active === 'about'" on:click="active = 'about'">
              <span slot="icon">👤</span>
              <span>About</span>
            </p-nav-item>
          </p-nav-bar>
        </p-nav-layout>
      </div>
      <script>
        export default async () => {
          return {
            data: {
              active: 'home'
            }
          };
        };
      </script>
    </template>
  </code>
</o-playground>

## API

### Properties - p-nav-item

| Property | Description | Type | Default |
|------|------|------|--------|
| `active` | Whether it is active | `boolean` | `false` |
| `disabled` | Whether it is disabled | `boolean` | `false` |### Slots - p-nav-bar

| Slot Name | Description |
|--------|------|
| `default` | Contains p-nav-item elements |### Slot - p-nav-item

| Slot Name | Description |
|------------|-------------|
| `default` | Navigation item text |
| `icon` | Navigation item icon |