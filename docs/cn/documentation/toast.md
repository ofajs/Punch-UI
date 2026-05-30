# Toast 提示

Toast 用于显示简短的提示消息，自动消失。适用于操作反馈、状态提示等场景。

## 引入

```javascript
import toast from 'https://punch-ui-v2.pages.dev/packages/util/toast.js';
```

## 基本用法

<o-playground name="Toast 基本用法" style="--editor-height: 400px">
  <code path="demo.html" active>
    <template page>
      <link rel="stylesheet" href="https://punch-ui-v2.pages.dev/packages/css/pui-global.css" />
      <l-m src="https://punch-ui-v2.pages.dev/packages/button/button.html"></l-m>
      <div style="padding: 20px; text-align: center;">
        <p-button color="primary" on:click="showToast">显示 Toast</p-button>
      </div>
      <script type="module">
        import toast from 'https://punch-ui-v2.pages.dev/packages/util/toast.js';
        export default async () => {
          return {
            proto: {
              showToast() {
                toast('操作成功！');
              }
            }
          };
        };
      </script>
    </template>
  </code>
</o-playground>

## 带配置选项

<o-playground name="Toast 配置选项" style="--editor-height: 500px">
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
                  message: '保存成功！',
                  duration: 3000,
                  color: 'success'
                });
              },
              showErrorToast() {
                toast({
                  message: '操作失败！',
                  duration: 3000,
                  color: 'error'
                });
              }
            }
          };
        };
      </script>
      <div style="padding: 20px; text-align: center;">
        <p-button color="success" on:click="showSuccessToast">成功提示</p-button>
        <p-button color="error" on:click="showErrorToast" style="margin-left: 10px;">错误提示</p-button>
      </div>
    </template>
  </code>
</o-playground>

## API

### 参数

| 参数 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| message | `string` | - | 提示消息内容 |
| duration | `number` | `3000` | 显示时长（毫秒），设为 0 则不自动关闭 |
| color | `string` | `'primary'` | 提示颜色：`primary`, `success`, `error`, `neutral` |

### 返回值

返回一个对象，包含：
- `close` - 关闭提示的方法
- `el` - 提示元素引用

### 示例

```javascript
// 基本用法
toast('操作成功');

// 带配置
toast({
  message: '文件上传成功',
  duration: 5000,
  color: 'success'
});

// 手动关闭
const toastInstance = toast('正在处理...');
setTimeout(() => {
  toastInstance.close();
}, 2000);
```
