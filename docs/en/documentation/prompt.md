# Prompt Input Box

Prompt is used to display an input dialog box that lets the user enter text. It is suitable for scenarios where user input is required.

## Introduction

```javascript
import prompt from 'https://punch-ui-v2.pages.dev/packages/util/prompt.js';
```

## Basic Usage

<o-playground name="Prompt Basic Usage" style="--editor-height: 400px">
  <code path="demo.html" active>
    <template page>
      <link rel="stylesheet" href="https://punch-ui-v2.pages.dev/packages/css/pui-global.css" />
      <l-m src="https://punch-ui-v2.pages.dev/packages/button/button.html"></l-m>
      <script type="module">
        import prompt from 'https://punch-ui-v2.pages.dev/packages/util/prompt.js';
        import toast from 'https://punch-ui-v2.pages.dev/packages/util/toast.js';
        export default async () => {
          return {
            proto: {
              async showPrompt() {
                const result = await prompt('Please enter your name:');
                if (result !== null) {
                  toast(`Hello, ${result}!`);
                }
              }
            }
          };
        };
      </script>
      <div style="padding: 20px; text-align: center;">
        <p-button color="primary" on:click="showPrompt">Enter Name</p-button>
      </div>
    </template>
  </code>
</o-playground>

## Complete Parameter Example

<o-playground name="Prompt Full Parameters" style="--editor-height: 500px">
  <code path="demo.html" active>
    <template page>
      <link rel="stylesheet" href="https://punch-ui-v2.pages.dev/packages/css/pui-global.css" />
      <l-m src="https://punch-ui-v2.pages.dev/packages/button/button.html"></l-m>
      <script type="module">
        import prompt from 'https://punch-ui-v2.pages.dev/packages/util/prompt.js';
        import toast from 'https://punch-ui-v2.pages.dev/packages/util/toast.js';
        export default async () => {
          return {
            proto: {
              async showFullPrompt() {
                const result = await prompt({
                  title: 'Edit username',
                  message: 'Please enter new username:',
                  label: 'Username',
                  placeholder: 'Enter username',
                  value: 'Current User',
                  yes: 'Save',
                  cancel: 'Cancel'
                });
                if (result !== null) {
                  toast(`Username changed to:${result}`);
                }
              }
            }
          };
        };
      </script>
      <div style="padding: 20px; text-align: center;">
        <p-button color="primary" on:click="showFullPrompt">Edit username</p-button>
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
| label | `string` | `''` | Input label |
| placeholder | `string` | `''` | Input placeholder |
| value | `string` | `''` | Default value of the input |
| yes | `string` | `'Yes'` | Confirm button text |
| cancel | `string` | `'Cancel'` | Cancel button text |### Return Value

Return a Promise:- resolve is the text entered by the user (string)
- resolve being `null` indicates the user clicked cancel

### Example

```javascript
// Basic usage
const name = await prompt('Please enter your name:');
if (name !== null) {
  console.log('User input:', name);
}

// Full parameters
const result = await prompt({
  title: 'Modify Username',
  message: 'Please enter a new username:',
  label: 'Username',
  placeholder: 'Enter username',
  value: 'Current User',
  yes: 'Save',
  cancel: 'Cancel'
});
```