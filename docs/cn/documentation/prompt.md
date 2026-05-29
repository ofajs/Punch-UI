# Prompt 输入框

Prompt 用于显示一个输入对话框，让用户输入文本。适用于需要用户输入信息的场景。

## 引入

```javascript
import prompt from 'https://punch-ui-v2.pages.dev/packages/util/prompt.js';
```

## 基本用法

<o-playground name="Prompt 基本用法" style="--editor-height: 400px">
  <code path="demo.html" preview active>
    <template>
      <link rel="stylesheet" href="https://punch-ui-v2.pages.dev/packages/css/pui-global.css" />
      <script src="https://cdn.jsdelivr.net/gh/ofajs/ofa.js/dist/ofa.min.mjs" type="module"></script>
      <l-m src="https://punch-ui-v2.pages.dev/packages/button/button.html"></l-m>
      <script type="module">
        import prompt from 'https://punch-ui-v2.pages.dev/packages/util/prompt.js';
        import toast from 'https://punch-ui-v2.pages.dev/packages/util/toast.js';
        export default async () => {
          return {
            proto: {
              async showPrompt() {
                const result = await prompt('请输入您的名字：');
                if (result !== null) {
                  toast(`你好，${result}！`);
                }
              }
            }
          };
        };
      </script>
      <div style="padding: 20px; text-align: center;">
        <p-button color="primary" on:click="showPrompt">输入名字</p-button>
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
| defaultValue | `string` | `''` | 输入框默认值 |
| ok | `string` | `'确定'` | 确认按钮文本 |
| cancel | `string` | `'取消'` | 取消按钮文本 |

### 返回值

返回一个 Promise：
- resolve 为用户输入的文本（字符串）
- resolve 为 `null` 表示用户点击了取消

### 示例

```javascript
// 基本用法
const name = await prompt('请输入您的名字：');
if (name !== null) {
  console.log('用户输入：', name);
}

// 带配置
const result = await prompt({
  title: '修改用户名',
  message: '请输入新的用户名：',
  defaultValue: '当前用户名',
  ok: '保存',
  cancel: '取消'
});
```
