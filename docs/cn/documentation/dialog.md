# Dialog 对话框

对话框组件提供优雅的模态交互体验，内置移动端自适应机制，支持丰富的自定义样式选项。

组件内置响应式设计，能够智能识别设备屏幕尺寸。在移动端小屏幕环境下，对话框会自动切换为从底部滑入的抽屉式交互，提供更符合移动端用户习惯的操作体验。

## 引入组件

```html
<l-m src="https://punch-ui-v2.pages.dev/packages/dialog/dialog.html"></l-m>
```

## 基本用法

<o-playground name="Dialog 基本用法" style="--editor-height: 500px">
  <code path="demo.html" active>
    <template page>
      <link rel="stylesheet" href="https://punch-ui-v2.pages.dev/packages/css/pui-global.css" />
      <l-m src="https://punch-ui-v2.pages.dev/packages/button/button.html"></l-m>
      <l-m src="https://punch-ui-v2.pages.dev/packages/dialog/dialog.html"></l-m>
      <div style="padding: 20px;">
        <p-button on:click="demoDialogOpen = true">
          打开对话框
        </p-button>
        <p-dialog auto-close sync:open="demoDialogOpen">
          <span slot="title">对话框标题</span>
          <div>
            <p>这是一个对话框示例。</p>
            <p>点击遮罩层可以关闭对话框。</p>
          </div>
          <div slot="bottom">
            <p-button color="primary" on:click="demoDialogOpen = false">确定</p-button>
            <p-button variant="text" on:click="demoDialogOpen = false">取消</p-button>
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

## 带表单的对话框

在对话框中可以放置表单组件：

<o-playground name="带表单的对话框" style="--editor-height: 500px">
  <code path="demo.html" active>
    <template page>
      <link rel="stylesheet" href="https://punch-ui-v2.pages.dev/packages/css/pui-global.css" />
      <l-m src="https://punch-ui-v2.pages.dev/packages/button/button.html"></l-m>
      <l-m src="https://punch-ui-v2.pages.dev/packages/input/input.html"></l-m>
      <l-m src="https://punch-ui-v2.pages.dev/packages/dialog/dialog.html"></l-m>
      <div style="padding: 20px;">
        <p-button on:click="formOpen = true">打开表单对话框</p-button>
        <p-dialog sync:open="formOpen">
          <span slot="title">用户信息</span>
          <div>
            <p-input style="display: block; margin: 8px 0;">
              <span slot="label">用户名</span>
            </p-input>
            <p-input style="display: block; margin: 8px 0;">
              <span slot="label">邮箱</span>
            </p-input>
          </div>
          <div slot="bottom">
            <p-button color="primary" on:click="formOpen = false">提交</p-button>
            <p-button variant="text" on:click="formOpen = false">关闭</p-button>
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

## 自动聚焦

对话框打开时可以自动聚焦到输入框：

<o-playground name="自动聚焦" style="--editor-height: 500px">
  <code path="demo.html" active>
    <template page>
      <link rel="stylesheet" href="https://punch-ui-v2.pages.dev/packages/css/pui-global.css" />
      <l-m src="https://punch-ui-v2.pages.dev/packages/button/button.html"></l-m>
      <l-m src="https://punch-ui-v2.pages.dev/packages/input/input.html"></l-m>
      <l-m src="https://punch-ui-v2.pages.dev/packages/dialog/dialog.html"></l-m>
      <div style="padding: 20px;">
        <p-button on:click="autofocusOpen = true">打开自动聚焦对话框</p-button>
        <p-dialog sync:open="autofocusOpen" auto-close>
          <span slot="title">快速输入</span>
          <div>
            <p-input autofocus style="display: block; margin: 8px 0;">
              <span slot="label">输入内容</span>
            </p-input>
          </div>
          <div slot="bottom">
            <p-button color="primary" on:click="autofocusOpen = false">完成</p-button>
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

## 点击遮罩事件

监听点击遮罩层的事件：

<o-playground name="点击遮罩事件" style="--editor-height: 500px">
  <code path="demo.html" active>
    <template page>
      <link rel="stylesheet" href="https://punch-ui-v2.pages.dev/packages/css/pui-global.css" />
      <l-m src="https://punch-ui-v2.pages.dev/packages/button/button.html"></l-m>
      <l-m src="https://punch-ui-v2.pages.dev/packages/dialog/dialog.html"></l-m>
      <div style="padding: 20px;">
        <p-button on:click="maskDialogOpen = true">打开对话框</p-button>
        <p style="margin-top: 8px; color: #666;">上次点击遮罩: {{maskClickMsg}}</p>
        <p-dialog sync:open="maskDialogOpen" on:click-mask="handleMaskClick">
          <span slot="title">点击遮罩演示</span>
          <div>
            <p>点击遮罩层（对话框外部）会触发 click-mask 事件。</p>
          </div>
          <div slot="bottom">
            <p-button color="primary" on:click="maskDialogOpen = false">关闭</p-button>
          </div>
        </p-dialog>
      </div>
      <script>
        export default {
          data: {
            maskDialogOpen: false,
            maskClickMsg: "无"
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

## 颜色变体

使用 `color` 属性设置对话框颜色：

<o-playground name="颜色变体" style="--editor-height: 500px">
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
          <span slot="title">Primary 颜色</span>
          <div>
            <p>这是一个 Primary 颜色的对话框。</p>
          </div>
          <div slot="bottom">
            <p-button color="primary" on:click="primaryOpen = false">关闭</p-button>
          </div>
        </p-dialog>
        <p-dialog sync:open="successOpen" color="success" auto-close>
          <span slot="title">Success 颜色</span>
          <div>
            <p>这是一个 Success 颜色的对话框。</p>
          </div>
          <div slot="bottom">
            <p-button color="success" on:click="successOpen = false">关闭</p-button>
          </div>
        </p-dialog>
        <p-dialog sync:open="errorOpen" color="error" auto-close>
          <span slot="title">Error 颜色</span>
          <div>
            <p>这是一个 Error 颜色的对话框。</p>
          </div>
          <div slot="bottom">
            <p-button color="error" on:click="errorOpen = false">关闭</p-button>
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

### 属性

| 属性 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| `variant` | 对话框样式 | `filled` \| `outlined` \| `tonal` | `tonal` |
| `color` | 对话框颜色 | `primary` \| `error` \| `success` \| `neutral` | `neutral` |
| `open` | 是否打开 | `boolean` | `false` |
| `auto-close` | 点击遮罩是否自动关闭 | `boolean` | `false` |
| `auto-to-mobile-width` | 触发移动端样式的宽度阈值 | `string` | `540px` |

### 插槽

| 插槽名 | 说明 |
|--------|------|
| `title` | 对话框标题 |
| `header` | 头部内容（与 title 一起使用） |
| `default` | 对话框内容 |
| `bottom` | 底部按钮区域 |
| `footer` | 底部内容（与 bottom 一起使用） |

### 事件

| 事件名 | 说明 |
|--------|------|
| `click-mask` | 点击遮罩层时触发 |
