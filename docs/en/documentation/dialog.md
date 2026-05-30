# Dialog

Dialog components provide an elegant modal interaction experience, built-in mobile adaptive mechanisms, and support rich custom style options.

The component has built-in responsive design and can intelligently recognize the device screen size. In a small screen environment on mobile devices, the dialog automatically switches to a drawer-style interaction that slides in from the bottom, providing an operation experience more in line with mobile user habits.

## Importing Components

```html
<l-m src="https://punch-ui-v2.pages.dev/packages/dialog/dialog.html"></l-m>
```

## Basic Usage

<o-playground name="Dialog Basic Usage" style="--editor-height: 500px">
  <code path="demo.html" active>
    <template page>
      <link rel="stylesheet" href="https://punch-ui-v2.pages.dev/packages/css/pui-global.css" />
      <l-m src="https://punch-ui-v2.pages.dev/packages/button/button.html"></l-m>
      <l-m src="https://punch-ui-v2.pages.dev/packages/dialog/dialog.html"></l-m>
      <div style="padding: 20px;">
        <p-button on:click="demoDialogOpen = true">
          Open Dialog
        </p-button>
        <p-dialog auto-close sync:open="demoDialogOpen">
          <span slot="title">Dialog Title</span>
          <div>
            <p>This is a dialog example.</p>
            <p>Click the mask layer to close the dialog.</p>
          </div>
          <div slot="bottom">
            <p-button color="primary" on:click="demoDialogOpen = false">OK</p-button>
            <p-button variant="text" on:click="demoDialogOpen = false">Cancel</p-button>
          </div>
        </p-dialog>
      </div>
      <script>
        export default {
          data: {
            demoDialogOpen: false
          }
        };
      </script>
    </template>
  </code>
</o-playground>

## Dialog with Form

Form components can be placed in the dialog box:

<o-playground name="Dialog with Form" style="--editor-height: 500px">
  <code path="demo.html" active>
    <template page>
      <link rel="stylesheet" href="https://punch-ui-v2.pages.dev/packages/css/pui-global.css" />
      <l-m src="https://punch-ui-v2.pages.dev/packages/button/button.html"></l-m>
      <l-m src="https://punch-ui-v2.pages.dev/packages/input/input.html"></l-m>
      <l-m src="https://punch-ui-v2.pages.dev/packages/dialog/dialog.html"></l-m>
      <div style="padding: 20px;">
        <p-button on:click="formOpen = true">Open Form Dialog</p-button>
        <p-dialog sync:open="formOpen">
          <span slot="title">User Information</span>
          <div>
            <p-input style="display: block; margin: 8px 0;">
              <span slot="label">Username</span>
            </p-input>
            <p-input style="display: block; margin: 8px 0;">
              <span slot="label">Email</span>
            </p-input>
          </div>
          <div slot="bottom">
            <p-button color="primary" on:click="formOpen = false">Submit</p-button>
            <p-button variant="text" on:click="formOpen = false">Close</p-button>
          </div>
        </p-dialog>
      </div>
      <script>
        export default {
          data: {
            formOpen: false
          }
        };
      </script>
    </template>
  </code>
</o-playground>

## Autofocus

When the dialog box opens, it can automatically focus on the input box：

<o-playground name="Auto Focus" style="--editor-height: 500px">
  <code path="demo.html" active>
    <template page>
      <link rel="stylesheet" href="https://punch-ui-v2.pages.dev/packages/css/pui-global.css" />
      <l-m src="https://punch-ui-v2.pages.dev/packages/button/button.html"></l-m>
      <l-m src="https://punch-ui-v2.pages.dev/packages/input/input.html"></l-m>
      <l-m src="https://punch-ui-v2.pages.dev/packages/dialog/dialog.html"></l-m>
      <div style="padding: 20px;">
        <p-button on:click="autofocusOpen = true">Open Auto-Focus Dialog</p-button>
        <p-dialog sync:open="autofocusOpen" auto-close>
          <span slot="title">Quick Input</span>
          <div>
            <p-input autofocus style="display: block; margin: 8px 0;">
              <span slot="label">Input Content</span>
            </p-input>
          </div>
          <div slot="bottom">
            <p-button color="primary" on:click="autofocusOpen = false">Done</p-button>
          </div>
        </p-dialog>
      </div>
      <script>
        export default {
          data: {
            autofocusOpen: false
          }
        };
      </script>
    </template>
  </code>
</o-playground>

## Click Mask Event

Listening to overlay click events:

<o-playground name="Click Mask Event" style="--editor-height: 500px">
  <code path="demo.html" active>
    <template page>
      <link rel="stylesheet" href="https://punch-ui-v2.pages.dev/packages/css/pui-global.css" />
      <l-m src="https://punch-ui-v2.pages.dev/packages/button/button.html"></l-m>
      <l-m src="https://punch-ui-v2.pages.dev/packages/dialog/dialog.html"></l-m>
      <div style="padding: 20px;">
        <p-button on:click="maskDialogOpen = true">Open Dialog</p-button>
        <p style="margin-top: 8px; color: #666;">Last mask click: {{maskClickMsg}}</p>
        <p-dialog sync:open="maskDialogOpen" on:click-mask="handleMaskClick">
          <span slot="title">Click Mask Demo</span>
          <div>
            <p>Clicking the mask layer (outside the dialog) triggers the click-mask event.</p>
          </div>
          <div slot="bottom">
            <p-button color="primary" on:click="maskDialogOpen = false">Close</p-button>
          </div>
        </p-dialog>
      </div>
      <script>
        export default {
          data: {
            maskDialogOpen: false,
            maskClickMsg: "None"
          },
          proto: {
            handleMaskClick() {
              this.maskClickMsg = new Date().toLocaleTimeString();
              this.maskDialogOpen = false;
            }
          }
        };
      </script>
    </template>
  </code>
</o-playground>

## Color Variants

Use the `color` attribute to set the dialog color:

<o-playground name="Color Variants" style="--editor-height: 500px">
  <code path="demo.html" active>
    <template page>
      <link rel="stylesheet" href="https://punch-ui-v2.pages.dev/packages/css/pui-global.css" />
      <l-m src="https://punch-ui-v2.pages.dev/packages/button/button.html"></l-m>
      <l-m src="https://punch-ui-v2.pages.dev/packages/dialog/dialog.html"></l-m>
      <div style="padding: 20px;">
        <p-button on:click="primaryOpen = true">Primary</p-button>
        <p-button on:click="successOpen = true">Success</p-button>
        <p-button on:click="errorOpen = true">Error</p-button>
        <p-dialog sync:open="primaryOpen" color="primary" auto-close>
          <span slot="title">Primary Color</span>
          <div>
            <p>This is a dialog with Primary color.</p>
          </div>
          <div slot="bottom">
            <p-button color="primary" on:click="primaryOpen = false">Close</p-button>
          </div>
        </p-dialog>
        <p-dialog sync:open="successOpen" color="success" auto-close>
          <span slot="title">Success Color</span>
          <div>
            <p>This is a dialog with Success color.</p>
          </div>
          <div slot="bottom">
            <p-button color="success" on:click="successOpen = false">Close</p-button>
          </div>
        </p-dialog>
        <p-dialog sync:open="errorOpen" color="error" auto-close>
          <span slot="title">Error Color</span>
          <div>
            <p>This is a dialog with Error color.</p>
          </div>
          <div slot="bottom">
            <p-button color="error" on:click="errorOpen = false">Close</p-button>
          </div>
        </p-dialog>
      </div>
      <script>
        export default {
          data: {
            primaryOpen: false,
            successOpen: false,
            errorOpen: false
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
| `variant` | Dialog style | `filled` \| `outlined` \| `tonal` | `tonal` |
| `color` | Dialog color | `primary` \| `error` \| `success` \| `neutral` | `neutral` |
| `open` | Whether to open | `boolean` | `false` |
| `auto-close` | Whether to auto-close when clicking the overlay | `boolean` | `false` |
| `auto-to-mobile-width` | Width threshold to trigger mobile style | `string` | `540px` |### Slot

| Slot Name | Description |
|--------|------|
| `title` | Dialog title |
| `header` | Header content (used with title) |
| `default` | Dialog content |
| `bottom` | Bottom button area |
| `footer` | Footer content (used with bottom) |### Events

| Event Name | Description |
|--------|------|
| `click-mask` | Triggered when the mask layer is clicked |