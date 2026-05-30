# List

List item component, supporting prefix, suffix and collapsible functionality.

## Importing Components

```html
<l-m src="https://punch-ui-v2.pages.dev/packages/list/list.html"></l-m>
```

## Basic Usage

<o-playground name="List Basic Usage" style="--editor-height: 350px">
  <code path="demo.html" preview active>
    <template>
      <link rel="stylesheet" href="https://punch-ui-v2.pages.dev/packages/css/pui-global.css" />
      <l-m src="https://punch-ui-v2.pages.dev/packages/list/list.html"></l-m>
      <l-m src="https://punch-ui-v2.pages.dev/packages/list/list-item.html"></l-m>
      <div style="padding: 20px; max-width: 400px;">
        <p-list>
          <p-list-item>List item 1</p-list-item>
          <p-list-item>List item 2</p-list-item>
          <p-list-item>List item 3</p-list-item>
        </p-list>
      </div>
    </template>
  </code>
</o-playground>

## With Prefix Icon

Use the `prefix` slot to add a prefix icon:

<o-playground name="List with prefix icons" style="--editor-height: 400px">
  <code path="demo.html" preview active>
    <template>
      <link rel="stylesheet" href="https://punch-ui-v2.pages.dev/packages/css/pui-global.css" />
      <l-m src="https://punch-ui-v2.pages.dev/packages/list/list.html"></l-m>
      <l-m src="https://punch-ui-v2.pages.dev/packages/list/list-item.html"></l-m>
      <div style="padding: 20px; max-width: 400px;">
        <p-list>
          <p-list-item>
            <span slot="prefix" style="width: 40px; height: 40px; border-radius: 50%; background-color: var(--md-sys-color-primary-container); color: var(--md-sys-color-on-primary-container); display: flex; align-items: center; justify-content: center;">A</span>
            Username
            <div secondary>user@example.com</div>
          </p-list-item>
          <p-list-item>
            <span slot="prefix" style="width: 40px; height: 40px; border-radius: 50%; background-color: var(--md-sys-color-tertiary-container); color: var(--md-sys-color-on-tertiary-container); display: flex; align-items: center; justify-content: center;">B</span>
            Another user
            <div secondary>another@example.com</div>
          </p-list-item>
        </p-list>
      </div>
    </template>
  </code>
</o-playground>

## with suffix

Use the `suffix` slot to add suffix content:

<o-playground name="List with Suffix" style="--editor-height: 350px">
  <code path="demo.html" preview active>
    <template>
      <link rel="stylesheet" href="https://punch-ui-v2.pages.dev/packages/css/pui-global.css" />
      <l-m src="https://punch-ui-v2.pages.dev/packages/list/list.html"></l-m>
      <l-m src="https://punch-ui-v2.pages.dev/packages/list/list-item.html"></l-m>
      <div style="padding: 20px; max-width: 400px;">
        <p-list>
          <p-list-item>
            <span slot="prefix" style="width: 40px; height: 40px; border-radius: 50%; background-color: var(--md-sys-color-tertiary-container); color: var(--md-sys-color-on-tertiary-container); display: flex; align-items: center; justify-content: center;">C</span>
            List Item
            <span slot="suffix" style="color: var(--md-sys-color-on-surface-variant)">›</span>
          </p-list-item>
          <p-list-item>
            <span slot="prefix">📁</span>
            Folder
            <span slot="suffix">12 files</span>
          </p-list-item>
        </p-list>
      </div>
    </template>
  </code>
</o-playground>

## Collapsible List

Use the `collapsible` attribute to make list items collapsible, and the `expanded` attribute to control the expanded state:

<o-playground name="Collapsible List" style="--editor-height: 500px">
  <code path="demo.html" preview active>
    <template>
      <link rel="stylesheet" href="https://punch-ui-v2.pages.dev/packages/css/pui-global.css" />
      <l-m src="https://punch-ui-v2.pages.dev/packages/list/list.html"></l-m>
      <l-m src="https://punch-ui-v2.pages.dev/packages/list/list-item.html"></l-m>
      <div style="padding: 20px; max-width: 400px;">
        <p-list>
          <p-list-item collapsible expanded>
            <span slot="prefix">📁</span>
            Expandable Folder
            <div secondary>Click to Expand/Collapse</div>
            <p-list slot="sublist">
              <p-list-item>
                <span slot="prefix">📄</span>
                Subitem 1
              </p-list-item>
              <p-list-item>
                <span slot="prefix">📄</span>
                Subitem 2
              </p-list-item>
            </p-list>
          </p-list-item>
          <p-list-item>
            <span slot="prefix">📄</span>
            Normal List Item
          </p-list-item>
        </p-list>
      </div>
    </template>
  </code>
</o-playground>

## Clickable Collapsible Item

Add the `button` attribute to make the collapsible item clickable and show a ripple effect:

<o-playground name="Clickable Collapsible Item" style="--editor-height: 500px">
  <code path="demo.html" preview active>
    <template>
      <link rel="stylesheet" href="https://punch-ui-v2.pages.dev/packages/css/pui-global.css" />
      <l-m src="https://punch-ui-v2.pages.dev/packages/list/list.html"></l-m>
      <l-m src="https://punch-ui-v2.pages.dev/packages/list/list-item.html"></l-m>
      <div style="padding: 20px; max-width: 400px;">
        <p-list>
          <p-list-item collapsible expanded button>
            <span slot="prefix">📁</span>
            Clickable Collapsible Item
            <div secondary>Click to expand/collapse</div>
            <p-list slot="sublist">
              <p-list-item>
                <span slot="prefix">📄</span>
                Sub-item 1
              </p-list-item>
              <p-list-item>
                <span slot="prefix">📄</span>
                Sub-item 2
              </p-list-item>
            </p-list>
          </p-list-item>
        </p-list>
      </div>
    </template>
  </code>
</o-playground>

## Custom Expand Icon

Use the `expand-icon` slot to customize the expand/collapse icon:

<o-playground name="Custom Expand Icon" style="--editor-height: 500px">
  <code path="demo.html" preview active>
    <template>
      <link rel="stylesheet" href="https://punch-ui-v2.pages.dev/packages/css/pui-global.css" />
      <l-m src="https://punch-ui-v2.pages.dev/packages/list/list.html"></l-m>
      <l-m src="https://punch-ui-v2.pages.dev/packages/list/list-item.html"></l-m>
      <div style="padding: 20px; max-width: 400px;">
        <p-list>
          <p-list-item collapsible expanded>
            <span slot="prefix">📁</span>
            Custom Icon
            <span slot="expand-icon">▼</span>
            <p-list slot="sublist">
              <p-list-item>
                <span slot="prefix">📄</span>
                Sub-item 1
              </p-list-item>
              <p-list-item>
                <span slot="prefix">📄</span>
                Sub-item 2
              </p-list-item>
            </p-list>
          </p-list-item>
        </p-list>
      </div>
    </template>
  </code>
</o-playground>

## Activation Status

Use the `active` property to set the activation state of the list item:

<o-playground name="Active state" style="--editor-height: 400px">
  <code path="demo.html" preview active>
    <template>
      <link rel="stylesheet" href="https://punch-ui-v2.pages.dev/packages/css/pui-global.css" />
      <l-m src="https://punch-ui-v2.pages.dev/packages/list/list.html"></l-m>
      <l-m src="https://punch-ui-v2.pages.dev/packages/list/list-item.html"></l-m>
      <style>
        .avatar {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background-color: var(--md-sys-color-primary-container);
          color: var(--md-sys-color-on-primary-container);
          display: flex;
          align-items: center;
          justify-content: center;
        }
      </style>
      <div style="padding: 20px; max-width: 400px;">
        <p-list>
          <p-list-item>
            <span slot="prefix" class="avatar">A</span>
            Normal list item
          </p-list-item>
          <p-list-item active>
            <span slot="prefix" class="avatar">B</span>
            Active state
            <div secondary>Currently selected item</div>
          </p-list-item>
          <p-list-item>
            <span slot="prefix" class="avatar">C</span>
            Normal list item
          </p-list-item>
        </p-list>
      </div>
    </template>
  </code>
</o-playground>

## Disabled State

Add the `disabled` attribute to disable list items:

<o-playground name="Disabled state" style="--editor-height: 400px">
  <code path="demo.html" preview active>
    <template>
      <link rel="stylesheet" href="https://punch-ui-v2.pages.dev/packages/css/pui-global.css" />
      <l-m src="https://punch-ui-v2.pages.dev/packages/list/list.html"></l-m>
      <l-m src="https://punch-ui-v2.pages.dev/packages/list/list-item.html"></l-m>
      <style>
        .avatar {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background-color: var(--md-sys-color-primary-container);
          color: var(--md-sys-color-on-primary-container);
          display: flex;
          align-items: center;
          justify-content: center;
        }
      </style>
      <div style="padding: 20px; max-width: 400px;">
        <p-list>
          <p-list-item button>
            <span slot="prefix" class="avatar">A</span>
            Normal list item
          </p-list-item>
          <p-list-item button disabled>
            <span slot="prefix" class="avatar">B</span>
            Disabled list item
            <div secondary>Unable to click</div>
          </p-list-item>
          <p-list-item button disabled>
            <span slot="prefix" class="avatar">C</span>
            Disabled list item
          </p-list-item>
        </p-list>
      </div>
    </template>
  </code>
</o-playground>

## Top Alignment

Use the `align-top` attribute to align the content to the top:

<o-playground name="Top alignment" style="--editor-height: 400px">
  <code path="demo.html" preview active>
    <template>
      <link rel="stylesheet" href="https://punch-ui-v2.pages.dev/packages/css/pui-global.css" />
      <l-m src="https://punch-ui-v2.pages.dev/packages/list/list.html"></l-m>
      <l-m src="https://punch-ui-v2.pages.dev/packages/list/list-item.html"></l-m>
      <style>
        .avatar {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background-color: var(--md-sys-color-primary-container);
          color: var(--md-sys-color-on-primary-container);
          display: flex;
          align-items: center;
          justify-content: center;
        }
      </style>
      <div style="padding: 20px; max-width: 400px;">
        <p-list>
          <p-list-item align-top>
            <span slot="prefix" class="avatar">A</span>
            Two-line list item, content automatically wraps when long, top alignment ensures prefix icon aligns with the first line of text
            <div secondary>Secondary text</div>
          </p-list-item>
          <p-list-item align-top>
            <span slot="prefix" class="avatar">B</span>
            Short text
            <div secondary>Secondary text</div>
          </p-list-item>
        </p-list>
      </div>
    </template>
  </code>
</o-playground>

## Colored Buttons

Use the `color` property to set list item color:

<o-playground name="Colored Buttons" style="--editor-height: 400px">
  <code path="demo.html" preview active>
    <template>
      <link rel="stylesheet" href="https://punch-ui-v2.pages.dev/packages/css/pui-global.css" />
      <l-m src="https://punch-ui-v2.pages.dev/packages/list/list.html"></l-m>
      <l-m src="https://punch-ui-v2.pages.dev/packages/list/list-item.html"></l-m>
      <style>
        .avatar {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background-color: var(--md-sys-color-primary-container);
          color: var(--md-sys-color-on-primary-container);
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .avatar-error {
          background-color: var(--md-sys-color-error-container);
          color: var(--md-sys-color-on-error-container);
        }
      </style>
      <div style="padding: 20px; max-width: 400px;">
        <p-list>
          <p-list-item button color="primary">
            <span slot="prefix" class="avatar">A</span>
            Primary color
            <div secondary>with tonal background</div>
          </p-list-item>
          <p-list-item button color="error">
            <span slot="prefix" class="avatar avatar-error">B</span>
            Error color
            <div secondary>with tonal background</div>
          </p-list-item>
        </p-list>
      </div>
    </template>
  </code>
</o-playground>

## With Checkbox

Implement a multi-select list using the `p-checkbox` component:

<o-playground name="With Checkbox" style="--editor-height: 500px">
  <code path="demo.html" preview active>
    <template>
      <link rel="stylesheet" href="https://punch-ui-v2.pages.dev/packages/css/pui-global.css" />
      <l-m src="https://punch-ui-v2.pages.dev/packages/list/list.html"></l-m>
      <l-m src="https://punch-ui-v2.pages.dev/packages/list/list-item.html"></l-m>
      <l-m src="https://punch-ui-v2.pages.dev/packages/checkbox/checkbox.html"></l-m>
      <l-m src="https://punch-ui-v2.pages.dev/packages/checkbox/group.html"></l-m>
      <style>
        .avatar {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background-color: var(--md-sys-color-primary-container);
          color: var(--md-sys-color-on-primary-container);
          display: flex;
          align-items: center;
          justify-content: center;
        }
      </style>
      <div style="padding: 20px; max-width: 400px;">
        <p-checkbox-group>
          <p-list>
            <p-list-item button="p-checkbox">
              <span slot="prefix" class="avatar">A</span>
              Clickable item with checkbox
              <div secondary>Click to toggle selection</div>
              <p-checkbox slot="suffix" value="a"></p-checkbox>
            </p-list-item>
            <p-list-item button="p-checkbox">
              <span slot="prefix" class="avatar">B</span>
              Clickable item with checkbox
              <div secondary>Click to toggle selection</div>
              <p-checkbox slot="suffix" value="b" checked></p-checkbox>
            </p-list-item>
          </p-list>
        </p-checkbox-group>
      </div>
    </template>
  </code>
</o-playground>

## With Radio Buttons

Implement a radio list using the `p-radio` component:

<o-playground name="With Radio Buttons" style="--editor-height: 500px">
  <code path="demo.html" preview active>
    <template>
      <link rel="stylesheet" href="https://punch-ui-v2.pages.dev/packages/css/pui-global.css" />
      <l-m src="https://punch-ui-v2.pages.dev/packages/list/list.html"></l-m>
      <l-m src="https://punch-ui-v2.pages.dev/packages/list/list-item.html"></l-m>
      <l-m src="https://punch-ui-v2.pages.dev/packages/radio/radio.html"></l-m>
      <l-m src="https://punch-ui-v2.pages.dev/packages/radio/group.html"></l-m>
      <div style="padding: 20px; max-width: 400px;">
        <p-radio-group>
          <p-list>
            <p-list-item button="p-radio">
              <p-radio slot="prefix" value="a"></p-radio>
              Option A
            </p-list-item>
            <p-list-item button="p-radio">
              <p-radio slot="prefix" value="b" checked></p-radio>
              Option B
            </p-list-item>
            <p-list-item button="p-radio">
              <p-radio slot="prefix" value="c"></p-radio>
              Option C
            </p-list-item>
          </p-list>
        </p-radio-group>
      </div>
    </template>
  </code>
</o-playground>

## Advanced Usage

### Radio List

Implement the single selection functionality of the settings list:

<o-playground name="Single-Select List" style="--editor-height: 500px">
  <code path="demo.html" active>
    <template page>
      <link rel="stylesheet" href="https://punch-ui-v2.pages.dev/packages/css/pui-global.css" />
      <l-m src="https://punch-ui-v2.pages.dev/packages/list/list.html"></l-m>
      <l-m src="https://punch-ui-v2.pages.dev/packages/list/list-item.html"></l-m>
      <style>
        p-list-item {
          background-color: rgba(from var(--md-sys-color-neutral) r g b / 0.1);
          transition: all ease 0.3s;
        }
        p-list-item.active {
          background-color: var(--md-sys-color-primary);
          border-radius: 12px;
        }
        p-list-item.active div {
          color: var(--md-sys-color-on-primary);
        }
      </style>
      <div style="padding: 20px; max-width: 400px;">
        <p-list>
          <p-list-item class:active="selected === 'account'" on:click="selected = 'account'" button>
            <span slot="prefix">👤</span>
            <div>Account Settings</div>
          </p-list-item>
          <p-list-item class:active="selected === 'notifications'" on:click="selected = 'notifications'" button>
            <span slot="prefix">🔔</span>
            <div>Notification Settings</div>
          </p-list-item>
          <p-list-item class:active="selected === 'privacy'" on:click="selected = 'privacy'" button>
            <span slot="prefix">🔒</span>
            <div>Privacy Settings</div>
          </p-list-item>
          <p-list-item class:active="selected === 'help'" on:click="selected = 'help'" button>
            <span slot="prefix">❓</span>
            <div>Help Center</div>
          </p-list-item>
        </p-list>
      </div>
      <script>
        export default {
          data: {
            selected: 'account'
          }
        };
      </script>
    </template>
  </code>
</o-playground>

### Multi-select List

Implement multi-select functionality for category filtering:

<o-playground name="Multi-select List" style="--editor-height: 500px">
  <code path="demo.html" active>
    <template page>
      <link rel="stylesheet" href="https://punch-ui-v2.pages.dev/packages/css/pui-global.css" />
      <l-m src="https://punch-ui-v2.pages.dev/packages/list/list.html"></l-m>
      <l-m src="https://punch-ui-v2.pages.dev/packages/list/list-item.html"></l-m>
      <style>
        p-list-item {
          background-color: rgba(from var(--md-sys-color-neutral) r g b / 0.1);
          transition: all ease 0.3s;
        }
        p-list-item.active {
          background-color: var(--md-sys-color-primary);
          border-radius: 12px;
        }
        p-list-item.active div {
          color: var(--md-sys-color-on-primary);
        }
      </style>
      <div style="padding: 20px; max-width: 400px;">
        <p-list>
          <p-list-item class:active="filters.includes('all')" on:click="toggleFilter('all')" button>
            <span slot="prefix">📁</span>
            <div>All</div>
          </p-list-item>
          <p-list-item class:active="filters.includes('electronics')" on:click="toggleFilter('electronics')" button>
            <span slot="prefix">📱</span>
            <div>Electronics</div>
          </p-list-item>
          <p-list-item class:active="filters.includes('clothing')" on:click="toggleFilter('clothing')" button>
            <span slot="prefix">👕</span>
            <div>Clothing</div>
          </p-list-item>
          <p-list-item class:active="filters.includes('books')" on:click="toggleFilter('books')" button>
            <span slot="prefix">📚</span>
            <div>Books</div>
          </p-list-item>
        </p-list>
        <p style="margin-top: 16px;">Selected: {{ filters }}</p>
      </div>
      <script>
        export default {
          data: {
            filters: ['all']
          },
          proto: {
            toggleFilter(filter) {
              if (this.filters.includes(filter)) {
                if (this.filters.length > 1) {
                  this.filters = this.filters.filter(f => f !== filter);
                }
              } else {
                this.filters = [...this.filters, filter];
              }
            }
          }
        };
      </script>
    </template>
  </code>
</o-playground>

## API

### Properties - p-list-item

| Property | Description | Type | Default |
|------|------|------|--------|
| `collapsible` | Whether it is collapsible | `boolean` | `false` |
| `expanded` | Whether it is expanded | `boolean` | `false` |
| `button` | Whether it is a clickable button (shows ripple effect) | `boolean` \| `string` | `false` |
| `active` | Whether it is active | `boolean` | `false` |
| `disabled` | Whether it is disabled | `boolean` | `false` |
| `align-top` | Whether the content is top-aligned | `boolean` | `false` |
| `color` | List item color | `primary` \| `error` \| `success` \| `neutral` | - |
| `variant` | List item style | `outlined` \| `filled` | - |### Slots - p-list-item

| Slot Name | Description |
|--------|------|
| `default` | Main content, supporting elements with the `secondary` attribute as secondary text |
| `prefix` | Prefix content (such as icons, avatars, etc.) |
| `suffix` | Suffix content (such as badges, action buttons, etc.) |
| `sublist` | Sublist content (for collapsible items) |
| `expand-icon` | Custom expand/collapse icon |### Events - p-list-item

| Event name | Description |
|------------|-------------|
| `click` | Triggered when a list item is clicked |
| `expand` | Triggered when the collapse state changes |### CSS Variables

| Variable Name | Description | Default Value |
|--------|------|--------|
| `--sublist-indent` | Sublist indentation distance | `16px` |