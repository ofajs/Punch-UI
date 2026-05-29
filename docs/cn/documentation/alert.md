# Alert 警告框

Alert 用于显示一个警告对话框，只有确认按钮。适用于重要信息提示、操作结果通知等场景。

## 引入

```javascript
import alert from 'https://punch-ui-v2.pages.dev/packages/util/alert.js';
```

## 基本用法

<o-playground name="Alert 基本用法" style="--editor-height: 400px">
  <code path="demo.html" preview active>
    <template>
      <link rel="stylesheet" href="https://punch-ui-v2.pages.dev/packages/css/pui-global.css" />
      <script src="https://cdn.jsdelivr.net/gh/ofajs/ofa.js/dist/ofa.min.mjs" type="module"></script>
      <l-m src="https://punch-ui-v2.pages.dev/packages/button/button.html"></l-m>
      <script type="module">
        import alert from 'https://punch-ui-v2.pages.dev/packages/util/alert.js';
        export default async () => {
          return {
            proto: {
              async showAlert() {
                await alert('这是一个警告消息');
              }
            }
          };
        };
      </script>
      <div style="padding: 20px; text-align: center;">
        <p-button color="primary" on:click="showAlert">显示 Alert</p-button>
      </div>
    </template>
  </code>
</o-playground>

## 带标题和自定义按钮

<o-playground name="Alert 自定义" style="--editor-height: 500px">
  <code path="demo.html" preview active>
    <template>
      <link rel="stylesheet" href="https://punch-ui-v2.pages.dev/packages/css/pui-global.css" />
      <script src="https://cdn.jsdelivr.net/gh/ofajs/ofa.js/dist/ofa.min.mjs" type="module"></script>
      <l-m src="https://punch-ui-v2.pages.dev/packages/button/button.html"></l-m>
      <script type="module">
        import alert from 'https://punch-ui-v2.pages.dev/packages/util/alert.js';
        export default async () => {
          return {
            proto: {
              async showCustomAlert() {
                await alert({
                  title: '提示',
                  message: '操作已完成',
                  ok: '知道了'
                });
              }
            }
          };
        };
      </script>
      <div style="padding: 20px; text-align: center;">
        <p-button color="primary" on:click="showCustomAlert">自定义 Alert</p-button>
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

### 返回值

返回一个 Promise，在用户点击确认按钮后 resolve。

### 示例

```javascript
// 基本用法
await alert('这是一个警告消息');

// 带配置
await alert({
  title: '提示',
  message: '操作已完成',
  ok: '知道了'
});
```
