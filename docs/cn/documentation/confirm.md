# Confirm 确认框

Confirm 用于显示一个确认对话框，包含确认和取消按钮。适用于需要用户确认的操作场景。

## 引入

```javascript
import confirm from 'https://punch-ui-v2.pages.dev/packages/util/confirm.js';
```

## 基本用法

<o-playground name="Confirm 基本用法" style="--editor-height: 400px">
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
                const result = await confirm('确定要删除吗？');
                if (result) {
                  toast('已删除');
                } else {
                  toast('已取消');
                }
              }
            }
          };
        };
      </script>
      <div style="padding: 20px; text-align: center;">
        <p-button color="error" on:click="showConfirm">删除</p-button>
      </div>
    </template>
  </code>
</o-playground>

## 完整参数示例

<o-playground name="Confirm 完整参数" style="--editor-height: 500px">
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
                  title: '删除确认',
                  message: '此操作将永久删除该文件，无法恢复。确定要继续吗？',
                  yes: '确认删除',
                  cancel: '再想想'
                });
                if (result) {
                  toast('文件已删除');
                } else {
                  toast('已取消操作');
                }
              }
            }
          };
        };
      </script>
      <div style="padding: 20px; text-align: center;">
        <p-button color="error" on:click="showFullConfirm">删除文件</p-button>
      </div>
    </template>
  </code>
</o-playground>

## API

### 参数

| 参数 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| title | `string` | `''` | 对话框标题 |
| message | `string` | - | 提示消息内容 |
| yes | `string` | `'Yes'` | 确认按钮文本 |
| cancel | `string` | `'Cancel'` | 取消按钮文本 |

### 返回值

返回一个 Promise，resolve 为 `true` 表示用户点击了确认，`false` 表示用户点击了取消。

### 示例

```javascript
// 基本用法
const result = await confirm('确定要删除吗？');
if (result) {
  console.log('用户确认删除');
} else {
  console.log('用户取消删除');
}

// 完整参数
const result = await confirm({
  title: '删除确认',
  message: '此操作将永久删除该文件，无法恢复。确定要继续吗？',
  yes: '确认删除',
  cancel: '再想想'
});
```
