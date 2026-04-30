# Dialog

## 引用组件

Punch UI的对话框组件依赖于 ofa.js，请先加载 ofa.js，然后通过 `l-m` 标签引入对话框组件：

```html
<!-- 引入ofa.js -->
<script
  src="https://cdn.jsdelivr.net/gh/ofajs/ofa.js/dist/ofa.min.mjs"
  type="module"
></script>

<!-- 引入对话框组件 -->
<l-m src="https://punch-ui-v2.pages.dev/packages/dialog/dialog.html"></l-m>
```

## 基本用法

```html
<p-dialog id="my-dialog">
  <span slot="title">Dialog Title</span>
  <div>
    <p>Dialog content goes here.</p>
  </div>
  <div slot="bottom">
    <p-button>Cancel</p-button>
    <p-button color="primary">OK</p-button>
  </div>
</p-dialog>

<p-button id="open-dialog">Open Dialog</p-button>

<script type="module">
  $("#open-dialog").on("click", () => {
    $("#my-dialog").open = true;
  });
</script>
```

## 对话框变体

通过 `variant` 属性设置对话框样式：

```html
<p-dialog variant="filled">Filled Dialog</p-dialog>
<p-dialog variant="tonal">Tonal Dialog</p-dialog>
<p-dialog variant="outlined">Outlined Dialog</p-dialog>
```

## 颜色

通过 `color` 属性设置对话框颜色：

```html
<p-dialog color="primary">Primary Dialog</p-dialog>
<p-dialog color="error">Error Dialog</p-dialog>
<p-dialog color="success">Success Dialog</p-dialog>
<p-dialog color="neutral">Neutral Dialog</p-dialog>
```

## 自动关闭

添加 `auto-close` 属性，点击遮罩层时自动关闭对话框：

```html
<p-dialog auto-close>
  <span slot="title">Auto Close Dialog</span>
  <div>Click mask to close</div>
</p-dialog>
```

## 自动聚焦

在对话框内容中使用 `autofocus` 属性，自动聚焦到指定元素：

```html
<p-dialog>
  <span slot="title">Quick Input</span>
  <div>
    <p-input autofocus>
      <span slot="label">Type something</span>
    </p-input>
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

可以通过 `auto-to-mobile-width` 属性自定义触发移动端样式的宽度阈值。

## 属性

### p-dialog

| 属性              | 类型                                           | 默认值      | 说明                       |
| ----------------- | ---------------------------------------------- | ----------- | -------------------------- |
| variant           | `filled` \| `tonal` \| `outlined`             | `tonal`     | 对话框样式                 |
| color             | `primary` \| `error` \| `success` \| `neutral` | `neutral`   | 对话框颜色                 |
| open              | boolean                                        | `false`     | 是否打开                   |
| auto-close        | boolean                                        | -           | 点击遮罩是否自动关闭       |
| auto-to-mobile-width | string                                     | `"540px"`   | 触发移动端样式的宽度阈值   |

## 插槽

### p-dialog

| 插槽名   | 说明           |
| -------- | -------------- |
| title    | 对话框标题     |
| default  | 对话框内容     |
| bottom   | 底部按钮区域   |

## 事件

### p-dialog

| 事件名      | 说明                     |
| ----------- | ------------------------ |
| click-mask  | 点击遮罩层时触发         |

## 方法

### p-dialog

| 方法       | 说明     |
| ---------- | -------- |
| open       | 打开对话框 |
| close      | 关闭对话框 |