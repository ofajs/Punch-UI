# Confirm 确认框

Confirm 用于显示一个确认对话框，包含确认和取消按钮。适用于需要用户确认的操作场景。

## 引入

```javascript
import confirm from 'https://punch-ui-v2.pages.dev/packages/util/confirm.js';
```

## 基本用法

<o-playground name="Confirm 基本用法" style="--editor-height: 400px">
  <code path="demo.html" preview active>
    <template>
      <link rel="stylesheet" href="https://punch-ui-v2.pages.dev/packages/css/pui-global.css" />
      <script src="https://cdn.jsdelivr.net/gh/ofajs/ofa.js/dist/ofa.min.mjs" type="module"></script>
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

## API

### 参数

| 参数 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| title | `string` | `'提示'` | 对话框标题 |
| message | `string` | - | 提示消息内容 |
| ok | `string` | `'确定'` | 确认按钮文本 |
| cancel | `string` | `'取消'` | 取消按钮文本 |

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

// 带配置
const result = await confirm({
  title: '确认操作',
  message: '此操作不可撤销，确定要继续吗？',
  ok: '确定',
  cancel: '取消'
});
```
