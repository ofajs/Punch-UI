# Input

输入框组件

## 引用组件

Punch UI的输入框组件依赖于 ofa.js，请先加载 ofa.js，然后通过 `l-m` 标签引入输入框组件：

```html
<!-- 引入ofa.js -->
<script
  src="https://cdn.jsdelivr.net/gh/ofajs/ofa.js/dist/ofa.min.mjs"
  type="module"
></script>

<!-- 引入输入框组件 -->
<l-m src="https://punch-ui-v2.pages.dev/packages/input/input.html"></l-m>
```

## 基本用法

```html
<p-input>
  <span slot="label">Username</span>
</p-input>
```

## 变体

通过 `variant` 属性设置输入框样式：

```html
<p-input>
  <span slot="label">Outlined Input</span>
</p-input>
<p-input variant="filled">
  <span slot="label">Filled Input</span>
</p-input>
```

## 尺寸

通过 `size` 属性设置输入框尺寸：

```html
<p-input size="xs">
  <span slot="label">Extra Small (xs)</span>
</p-input>
<p-input size="s">
  <span slot="label">Small (s)</span>
</p-input>
<p-input>
  <span slot="label">Default</span>
</p-input>
<p-input size="l">
  <span slot="label">Large (l)</span>
</p-input>
<p-input size="xl">
  <span slot="label">Extra Large (xl)</span>
</p-input>
```

## 颜色

通过 `color` 属性设置输入框颜色：

```html
<p-input color="primary">
  <span slot="label">Primary Color</span>
</p-input>
<p-input color="success">
  <span slot="label">Success Color</span>
</p-input>
<p-input color="neutral">
  <span slot="label">Neutral Color</span>
</p-input>
<p-input color="error">
  <span slot="label">Error Color</span>
</p-input>
```

## 前缀和后缀

使用 `prefix` 和 `suffix` 插槽添加前缀/后缀内容：

```html
<p-input>
  <span slot="prefix">+86</span>
  <span slot="label">Phone Number</span>
</p-input>
<p-input>
  <span slot="label">Website</span>
  <span slot="suffix">.com</span>
</p-input>
```

## 输入类型

通过 `type` 属性设置输入类型：

```html
<p-input type="password">
  <span slot="label">Password</span>
</p-input>
<p-input type="number">
  <span slot="label">Age</span>
</p-input>
<p-input type="email">
  <span slot="label">Email</span>
</p-input>
```

## 占位符

使用 `placeholder` 属性设置占位文本：

```html
<p-input placeholder="Enter your name"></p-input>
```

## 标签浮动

添加 `hang-label` 属性使标签在输入时浮动到上方：

```html
<p-input hang-label>
  <span slot="label">Hang Label Input</span>
</p-input>
```

## 默认值

使用 `default-value` 属性设置默认值：

```html
<p-input default-value="John Doe">
  <span slot="label">Default Value</span>
</p-input>
```

## 禁用状态

添加 `disabled` 属性禁用输入框：

```html
<p-input disabled>
  <span slot="label">Disabled Input</span>
</p-input>
```

## 只读状态

添加 `readonly` 属性设置只读输入框：

```html
<p-input readonly default-value="Cannot edit this">
  <span slot="label">Readonly</span>
</p-input>
```

## 最大长度

使用 `maxlength` 属性限制输入长度：

```html
<p-input maxlength="10">
  <span slot="label">Max 10 characters</span>
</p-input>
```

## 自动聚焦

添加 `autofocus` 属性使输入框在页面加载时自动聚焦：

```html
<p-input autofocus>
  <span slot="label">Autofocus on load</span>
</p-input>
```

## 自定义样式

可以通过 `style` 属性自定义圆角等样式：

```html
<p-input style="border-radius: 30px">
  <span slot="label">Helper Text</span>
  <div slot="helper">This is a helper text</div>
</p-input>
```

## 事件

输入框支持以下事件：

```javascript
const input = $("p-input");
input.on("input", (e) => {
  console.log("Input value:", e.detail.value);
});
input.on("change", (e) => {
  console.log("Change event:", e.detail.value);
});
input.on("focus", (e) => {
  console.log("Focus:", e.detail.value);
});
input.on("blur", (e) => {
  console.log("Blur:", e.detail.value);
});
```

## 方法

### focus()

使输入框获得焦点：

```javascript
$("p-input").focus();
```

## 属性

| 属性 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| variant | `filled` \| `outlined` | `outlined` | 输入框样式 |
| type | `text` \| `password` \| `number` \| `email` 等 | `text` | 输入类型 |
| size | `xs` \| `s` \| `l` \| `xl` | - | 输入框尺寸 |
| color | `primary` \| `success` \| `neutral` \| `error` | - | 输入框颜色 |
| placeholder | string | - | 占位文本 |
| disabled | boolean | - | 是否禁用 |
| readonly | boolean | - | 是否只读 |
| name | string | - | 表单名称 |
| default-value | string | - | 默认值 |
| autofocus | boolean | - | 是否自动聚焦 |
| maxlength | number | - | 最大输入长度 |
| min | number | - | 最小值（用于 type="number"） |
| max | number | - | 最大值（用于 type="number"） |
| hang-label | boolean | - | 标签是否浮动 |

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