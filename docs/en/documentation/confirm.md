# Confirm Dialog

Confirm is used to display a confirmation dialog， which contains confirm and cancel buttons。 It is suitable for operation scenarios that require user confirmation。

## Introduction

```javascript
import confirm from 'https://punch-ui-v2.pages.dev/packages/util/confirm.js';
```

## Basic Usage

<o-playground name="Confirm Basic Usage" style="--editor-height: 400px">
  <code path="demo.html" active>
    <template page>
      <link rel="stylesheet" href="https://punch-ui-v2.pages.dev/packages/css/pui-global.css" />
      <l-m src="https://punch-ui-v2.pages.dev/packages/button/button.html"></l-m>
      <script type="module">
        import confirm from 'https://punch-ui-v2.pages.dev/packages/util/confirm.js';
        import toast from 'https://punch-ui-v2.pages.dev/packages/util/toast.js';
        export default async () => {
          return {
            proto: {
              async showConfirm() {
                const result = await confirm('Are you sure you want to delete?');
                if (result) {
                  toast('Deleted');
                } else {
                  toast('Cancelled');
                }
              }
            }
          };
        };
      </script>
      <div style="padding: 20px; text-align: center;">
        <p-button color="error" on:click="showConfirm">Delete</p-button>
      </div>
    </template>
  </code>
</o-playground>

## Complete Parameter Example

<o-playground name="Confirm Full Parameters" style="--editor-height: 500px">
  <code path="demo.html" active>
    <template page>
      <link rel="stylesheet" href="https://punch-ui-v2.pages.dev/packages/css/pui-global.css" />
      <l-m src="https://punch-ui-v2.pages.dev/packages/button/button.html"></l-m>
      <script type="module">
        import confirm from 'https://punch-ui-v2.pages.dev/packages/util/confirm.js';
        import toast from 'https://punch-ui-v2.pages.dev/packages/util/toast.js';
        export default async () => {
          return {
            proto: {
              async showFullConfirm() {
                const result = await confirm({
                  title: 'Delete Confirmation',
                  message: 'This action will permanently delete the file and cannot be undone. Are you sure you want to continue?',
                  yes: 'Confirm Delete',
                  cancel: 'Think Again'
                });
                if (result) {
                  toast('File deleted');
                } else {
                  toast('Operation cancelled');
                }
              }
            }
          };
        };
      </script>
      <div style="padding: 20px; text-align: center;">
        <p-button color="error" on:click="showFullConfirm">Delete File</p-button>
      </div>
    </template>
  </code>
</o-playground>

## API

### Parameters

| Parameter | Type | Default | Description |
|------|------|--------|------|
| title | `string` | `''` | Dialog title |
| message | `string` | - | Prompt message content |
| yes | `string` | `'Yes'` | Confirm button text |
| cancel | `string` | `'Cancel'` | Cancel button text |### Return Value

Returns a Promise, which resolves to `true` if the user clicks confirm, and `false` if the user clicks cancel.

### Example

```javascript
// Basic Usage
const result = await confirm('Are you sure you want to delete?');
if (result) {
  console.log('User confirmed deletion');
} else {
  console.log('User cancelled deletion');
}

// Full Parameters
const result = await confirm({
  title: 'Delete Confirmation',
  message: 'This action will permanently delete the file and cannot be recovered. Are you sure you want to continue?',
  yes: 'Confirm Delete',
  cancel: 'Think Again'
});
```