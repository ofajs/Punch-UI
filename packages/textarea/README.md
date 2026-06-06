# Textarea

多行文本输入框组件

## 引用组件

Punch UI的多行文本输入框组件依赖于 ofa.js，请先加载 ofa.js，然后通过 `l-m` 标签引入多行文本输入框组件：

```html
<!-- 引入ofa.js -->
<script
  src="https://cdn.jsdelivr.net/gh/ofajs/ofa.js/dist/ofa.min.mjs"
  type="module"
></script>

<!-- 引入多行文本输入框组件 -->
<l-m src="https://punch-ui-v2.pages.dev/packages/textarea/textarea.html"></l-m>
```

## 基本用法

```html
<p-textarea>
  <span slot="label">Description</span>
</p-textarea>
```

## 变体

通过 `variant` 属性设置输入框样式：

```html
<p-textarea>
  <span slot="label">Outlined Textarea</span>
</p-textarea>
<p-textarea variant="filled">
  <span slot="label">Filled Textarea</span>
</p-textarea>
```

## 尺寸

通过 `size` 属性设置输入框尺寸：

```html
<p-textarea size="xs">
  <span slot="label">Extra Small</span>
</p-textarea>
<p-textarea size="s">
  <span slot="label">Small</span>
</p-textarea>
<p-textarea size="m">
  <span slot="label">Medium (Default)</span>
</p-textarea>
<p-textarea size="l">
  <span slot="label">Large</span>
</p-textarea>
<p-textarea size="xl">
  <span slot="label">Extra Large</span>
</p-textarea>
```

## 颜色

通过 `color` 属性设置输入框颜色：

```html
<p-textarea color="primary">
  <span slot="label">Primary Color</span>
</p-textarea>
<p-textarea color="success">
  <span slot="label">Success Color</span>
</p-textarea>
<p-textarea color="neutral">
  <span slot="label">Neutral Color</span>
</p-textarea>
<p-textarea color="error">
  <span slot="label">Error Color</span>
</p-textarea>
```

## 前缀和后缀

使用 `prefix` 和 `suffix` 插槽添加前缀/后缀内容：

```html
<p-textarea>
  <span slot="label">Message</span>
  <span slot="prefix">📝</span>
</p-textarea>
```

## 占位符

使用 `placeholder` 属性设置占位文本：

```html
<p-textarea placeholder="Enter your message..."></p-textarea>
```

## 标签浮动

添加 `hang-label` 属性使标签在输入时浮动到上方：

```html
<p-textarea hang-label>
  <span slot="label">Hang Label Textarea</span>
</p-textarea>
```

## 默认值

使用 `default-value` 属性设置默认值：

```html
<p-textarea default-value="初始内容">
  <span slot="label">Default Value</span>
</p-textarea>
```

## 禁用状态

添加 `disabled` 属性禁用输入框：

```html
<p-textarea disabled>
  <span slot="label">Disabled Textarea</span>
</p-textarea>
```

## 只读状态

添加 `readonly` 属性设置只读输入框：

```html
<p-textarea readonly default-value="只读内容">
  <span slot="label">Readonly Textarea</span>
</p-textarea>
```

## 最大长度

使用 `maxlength` 属性限制输入长度：

```html
<p-textarea maxlength="100">
  <span slot="label">Max 100 Characters</span>
</p-textarea>
```

## 初始行数

使用 `rows` 属性设置初始显示的行数：

```html
<p-textarea rows="3">
  <span slot="label">3 Rows</span>
</p-textarea>

<p-textarea rows="5">
  <span slot="label">5 Rows</span>
</p-textarea>
```

## 自动聚焦

添加 `autofocus` 属性使输入框在页面加载时自动聚焦：

```html
<p-textarea autofocus>
  <span slot="label">Autofocus on load</span>
</p-textarea>
```

## 事件

输入框支持以下事件：

```javascript
const textarea = $("p-textarea");
textarea.on("input", (e) => {
  console.log("Input value:", e.detail.value);
});
textarea.on("change", (e) => {
  console.log("Change event:", e.detail.value);
});
textarea.on("focus", (e) => {
  console.log("Focus:", e.detail.value);
});
textarea.on("blur", (e) => {
  console.log("Blur:", e.detail.value);
});
```

## 方法

### focus()

使输入框获得焦点：

```javascript
$("p-textarea").focus();
```

## 属性

| 属性 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| variant | `filled` \| `outlined` | `outlined` | 输入框样式 |
| size | `xs` \| `s` \| `m` \| `l` \| `xl` | `m` | 输入框尺寸 |
| color | `primary` \| `success` \| `neutral` \| `error` | - | 输入框颜色 |
| placeholder | string | - | 占位文本 |
| disabled | boolean | - | 是否禁用 |
| readonly | boolean | - | 是否只读 |
| name | string | - | 表单名称 |
| default-value | string | - | 默认值 |
| autofocus | boolean | - | 是否自动聚焦 |
| maxlength | number | - | 最大输入长度 |
| hang-label | boolean | - | 标签是否浮动 |
| rows | number | - | 初始显示行数 |

## 插槽

| 插槽名 | 说明 |
|--------|------|
| label | 标签内容 |
| prefix | 前缀内容 |
| suffix | 后缀内容 |

## 事件

| 事件名 | 说明 | 事件对象 |
|--------|------|----------|
| input | 输入时触发 | `{ value }` |
| change | 值改变时触发 | `{ value }` |
| focus | 获得焦点时触发 | `{ value }` |
| blur | 失去焦点时触发 | `{ value }` |