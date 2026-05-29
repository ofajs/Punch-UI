# Dialog 对话框

对话框组件用于显示模态对话框，支持移动端适配和自定义样式。

## 引入组件

```html
<l-m src="https://punch-ui-v2.pages.dev/packages/dialog/dialog.html"></l-m>
```

## 基本用法

<o-playground name="Dialog 基本用法" style="--editor-height: 500px">
  <code path="demo.html" preview active>
    <template>
      <link rel="stylesheet" href="https://punch-ui-v2.pages.dev/packages/css/pui-global.css" />
      <l-m src="https://punch-ui-v2.pages.dev/packages/button/button.html"></l-m>
      <l-m src="https://punch-ui-v2.pages.dev/packages/dialog/dialog.html"></l-m>
      <div style="padding: 20px;">
        <p-button id="show-dialog-btn" on:click="demoDialogOpen = true">
          打开对话框
        </p-button>
        <p-dialog id="demo-dialog" auto-close sync:open="demoDialogOpen">
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
    </template>
  </code>
</o-playground>

## 对话框变体

<o-playground name="Dialog 变体" style="--editor-height: 500px">
  <code path="demo.html" preview active>
    <template>
      <link rel="stylesheet" href="https://punch-ui-v2.pages.dev/packages/css/pui-global.css" />
      <l-m src="https://punch-ui-v2.pages.dev/packages/button/button.html"></l-m>
      <l-m src="https://punch-ui-v2.pages.dev/packages/dialog/dialog.html"></l-m>
      <div style="padding: 20px;">
        <p-button on:click="filledDialogOpen = true">打开 Filled 对话框</p-button>
        <p-dialog variant="filled" sync:open="filledDialogOpen">
          <span slot="title">Filled 对话框</span>
          <div>
            <p>这是一个 Filled 样式的对话框。</p>
          </div>
          <div slot="bottom">
            <p-button color="primary" on:click="filledDialogOpen = false">确定</p-button>
          </div>
        </p-dialog>
      </div>
    </template>
  </code>
</o-playground>

## 移动端适配

对话框组件会自动适配移动端，在小屏幕上会从底部滑入：

<o-playground name="移动端适配" style="--editor-height: 500px">
  <code path="demo.html" preview active>
    <template>
      <link rel="stylesheet" href="https://punch-ui-v2.pages.dev/packages/css/pui-global.css" />
      <l-m src="https://punch-ui-v2.pages.dev/packages/button/button.html"></l-m>
      <l-m src="https://punch-ui-v2.pages.dev/packages/dialog/dialog.html"></l-m>
      <div style="padding: 20px;">
        <p-button on:click="mobileDialogOpen = true">打开响应式对话框</p-button>
        <p-dialog auto-to-mobile-width="540px" sync:open="mobileDialogOpen">
          <span slot="title">响应式对话框</span>
          <div>
            <p>这个对话框在移动设备上会从底部滑入。</p>
            <p>在桌面设备上会居中显示。</p>
          </div>
          <div slot="bottom">
            <p-button color="primary" on:click="mobileDialogOpen = false">确定</p-button>
          </div>
        </p-dialog>
      </div>
    </template>
  </code>
</o-playground>

## API

### 属性

| 属性 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| `variant` | 对话框样式 | `filled` \| `outlined` | `outlined` |
| `color` | 对话框颜色 | `primary` \| `error` \| `success` \| `neutral` | - |
| `open` | 是否打开 | `boolean` | `false` |
| `auto-close` | 点击遮罩是否自动关闭 | `boolean` | `false` |
| `auto-to-mobile-width` | 触发移动端样式的宽度阈值 | `string` | `540px` |

### 插槽

| 插槽名 | 说明 |
|--------|------|
| `title` | 对话框标题 |
| `default` | 对话框内容 |
| `bottom` | 底部按钮区域 |

### 事件

| 事件名 | 说明 |
|--------|------|
| `click-mask` | 点击遮罩层时触发 |
