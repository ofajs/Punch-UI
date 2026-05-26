# Dialog 对话框组件

## 引入组件

```html
<l-m src="https://punch-ui-v2.pages.dev/packages/dialog/dialog.html"></l-m>
```

## 基本对话框

```html
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
```

## 对话框变体

```html
<p-dialog variant="filled" sync:open="filledDialogOpen">
  <span slot="title">Filled 对话框</span>
  <div>
    <p>这是一个 Filled 样式的对话框。</p>
  </div>
  <div slot="bottom">
    <p-button color="primary" on:click="filledDialogOpen = false">确定</p-button>
  </div>
</p-dialog>
```

## 移动端适配

对话框组件会自动适配移动端，在小屏幕上会从底部滑入：

```html
<p-dialog>
  <span slot="title">Responsive Dialog</span>
  <div>This dialog will show from bottom on mobile devices.</div>
</p-dialog>
```

可以通过 `auto-to-mobile-width` 属性自定义触发移动端样式的宽度阈值：

```html
<p-dialog auto-to-mobile-width="540px">
  <span slot="title">Custom Mobile Width</span>
  <div>Dialog with custom mobile breakpoint</div>
</p-dialog>
```

## 主要属性

- `variant` - 对话框样式
- `color` - 对话框颜色
- `open` - 是否打开
- `auto-close` - 点击遮罩是否自动关闭
- `auto-to-mobile-width` - 触发移动端样式的宽度阈值（默认 "540px"）

## 插槽

- `title` - 对话框标题
- `default` - 对话框内容
- `bottom` - 底部按钮区域

## 事件

- `click-mask` - 点击遮罩层时触发
