# Alert Warning Box

Alert is used to display a warning dialog with only a confirm button. It is suitable for scenarios such as important information prompts and operation result notifications.

## Introduction

```javascript
import alert from 'https://punch-ui-v2.pages.dev/packages/util/alert.js';
```

## Basic Usage

<o-playground name="Alert Basic Usage" style="--editor-height: 400px">
  <code path="demo.html" active>
    <template page>
      <link rel="stylesheet" href="https://punch-ui-v2.pages.dev/packages/css/pui-global.css" />
      <l-m src="https://punch-ui-v2.pages.dev/packages/button/button.html"></l-m>
      <script type="module">
        import alert from 'https://punch-ui-v2.pages.dev/packages/util/alert.js';
        export default async () => {
          return {
            proto: {
              async showAlert() {
                await alert('This is a warning message');
              }
            }
          };
        };
      </script>
      <div style="padding: 20px; text-align: center;">
        <p-button color="primary" on:click="showAlert">Show Alert</p-button>
      </div>
    </template>
  </code>
</o-playground>

## With Title and Custom Button

<o-playground name="Alert Custom" style="--editor-height: 500px">
  <code path="demo.html" active>
    <template page>
      <link rel="stylesheet" href="https://punch-ui-v2.pages.dev/packages/css/pui-global.css" />
      <l-m src="https://punch-ui-v2.pages.dev/packages/button/button.html"></l-m>
      <script type="module">
        import alert from 'https://punch-ui-v2.pages.dev/packages/util/alert.js';
        export default async () => {
          return {
            proto: {
              async showCustomAlert() {
                await alert({
                  title: 'Tip',
                  message: 'Operation completed',
                  ok: 'Got it'
                });
              }
            }
          };
        };
      </script>
      <div style="padding: 20px; text-align: center;">
        <p-button color="primary" on:click="showCustomAlert">Custom Alert</p-button>
      </div>
    </template>
  </code>
</o-playground>

## API

### Parameters

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| title | `string` | `'Prompt'` | Dialog title |
| message | `string` | - | Prompt message content |
| ok | `string` | `'OK'` | Confirm button text |### Return Value

Returns a Promise that resolves after the user clicks the confirm button.

### Example

```javascript
// Basic usage
await alert('This is an alert message');

// With configuration
await alert({
  title: 'Notice',
  message: 'Operation completed',
  ok: 'Got it'
});
```