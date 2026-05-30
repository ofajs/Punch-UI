# Toast

Toast is used to display brief notification messages that disappear automatically. Suitable for scenarios such as operation feedback, status prompts, etc.

## Introduction

```javascript
import toast from 'https://punch-ui-v2.pages.dev/packages/util/toast.js';
```

## Basic Usage

<o-playground name="Toast Basic Usage" style="--editor-height: 400px">
  <code path="demo.html" active>
    <template page>
      <link rel="stylesheet" href="https://punch-ui-v2.pages.dev/packages/css/pui-global.css" />
      <l-m src="https://punch-ui-v2.pages.dev/packages/button/button.html"></l-m>
      <div style="padding: 20px; text-align: center;">
        <p-button color="primary" on:click="showToast">Show Toast</p-button>
      </div>
      <script type="module">
        import toast from 'https://punch-ui-v2.pages.dev/packages/util/toast.js';
        export default async () => {
          return {
            proto: {
              showToast() {
                toast('Operation successful!');
              }
            }
          };
        };
      </script>
    </template>
  </code>
</o-playground>

## With Configuration Options

<o-playground name="Toast Configuration Options" style="--editor-height: 500px">
  <code path="demo.html" active>
    <template page>
      <link rel="stylesheet" href="https://punch-ui-v2.pages.dev/packages/css/pui-global.css" />
      <l-m src="https://punch-ui-v2.pages.dev/packages/button/button.html"></l-m>
      <script type="module">
        import toast from 'https://punch-ui-v2.pages.dev/packages/util/toast.js';
        export default async () => {
          return {
            proto: {
              showSuccessToast() {
                toast({
                  message: 'Save successful!',
                  duration: 3000,
                  color: 'success'
                });
              },
              showErrorToast() {
                toast({
                  message: 'Operation failed!',
                  duration: 3000,
                  color: 'error'
                });
              }
            }
          };
        };
      </script>
      <div style="padding: 20px; text-align: center;">
        <p-button color="success" on:click="showSuccessToast">Success Toast</p-button>
        <p-button color="error" on:click="showErrorToast" style="margin-left: 10px;">Error Toast</p-button>
      </div>
    </template>
  </code>
</o-playground>

## API

### Parameters

| Parameter | Type | Default | Description |
|------|------|--------|------|
| message | `string` | - | Prompt message content |
| duration | `number` | `3000` | Display duration (milliseconds), set to 0 to disable auto-close |
| color | `string` | `'primary'` | Prompt color: `primary`, `success`, `error`, `neutral` |### Return Value

Return an object containing:- `close` - method to close the prompt
- `el` - reference to the prompt element

### Example

```javascript
// Basic usage
toast('Operation successful');

// With configuration
toast({
  message: 'File uploaded successfully',
  duration: 5000,
  color: 'success'
});

// Manual close
const toastInstance = toast('Processing...');
setTimeout(() => {
  toastInstance.close();
}, 2000);
```