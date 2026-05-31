# Input 输入框组件

## 引入组件

```html
<l-m src="https://punch-ui-v2.pages.dev/packages/input/input.html"></l-m>
```

## 基本用法

```html
<p-input>
  <span slot="label">Username</span>
</p-input>
```

## 颜色

```html
<p-input>
  <span slot="label">Default</span>
</p-input>
<p-input color="primary">
  <span slot="label">Primary</span>
</p-input>
<p-input color="success">
  <span slot="label">Success</span>
</p-input>
<p-input color="neutral">
  <span slot="label">Neutral</span>
</p-input>
<p-input color="error">
  <span slot="label">Error</span>
</p-input>
```

## 变体

```html
<p-input variant="filled" color="primary">
  <span slot="label">Primary Filled</span>
</p-input>
```

## 尺寸

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

## 输入类型

### 密码输入

```html
<p-input type="password">
  <span slot="label">Password</span>
</p-input>
```

### 数字输入

```html
<p-input type="number">
  <span slot="label">Age</span>
</p-input>
```

### 邮箱输入

```html
<p-input type="email">
  <span slot="label">Email</span>
</p-input>
```

## 前缀和后缀

### 前缀

```html
<p-input>
  <span slot="prefix">+86</span>
  <span slot="label">Phone Number</span>
</p-input>
```

### 后缀

```html
<p-input>
  <span slot="label">Website</span>
  <span slot="suffix">.com</span>
</p-input>
```

## 自动聚焦

使用 `autofocus` 属性使输入框在页面加载时自动获得焦点：

```html
<p-input autofocus>
  <span slot="label">Autofocus on load</span>
</p-input>
```

## 悬浮标签

使用 `hang-label` 属性使标签始终悬浮在输入框上方：

```html
<p-input hang-label>
  <span slot="label">Hang Label Input</span>
</p-input>
```

## 默认值

使用 `default-value` 属性设置输入框的初始值：

```html
<p-input default-value="John Doe">
  <span slot="label">Default Value</span>
</p-input>
```

## 最大长度

使用 `maxlength` 属性限制输入的最大字符数：

```html
<p-input maxlength="10">
  <span slot="label">Max 10 characters</span>
</p-input>
```

## 表单属性

使用 `name` 属性为表单提交设置字段名：

```html
<p-input name="username">
  <span slot="label">Username</span>
</p-input>
```

## 占位符

使用 `placeholder` 属性设置占位文本：

```html
<p-input placeholder="Enter your name"></p-input>
```

## 自定义样式

### 使用内联样式

```html
<p-input style="border-radius: 30px">
  <span slot="label">Custom Border Radius</span>
</p-input>
```

### 使用 CSS Part

使用 `::part()` 选择器自定义输入框内部样式：

```html
<style>
  .custom-input::part(input) {
    color: red;
  }
</style>

<p-input class="custom-input" color="error">
  <span slot="label" style="color: red">Custom Style</span>
</p-input>
```

## 编程控制

### focus 方法

通过 JavaScript 控制输入框焦点：

```html
<p-input id="my-input">
  <span slot="label">Click button to focus</span>
</p-input>
<button id="focus-btn">Focus Input</button>

<script type="module">
  $("#focus-btn").on("click", () => {
    $("#my-input").focus();
  });
</script>
```

### 事件监听

监听输入框的各种事件：

```html
<p-input id="event-demo">
  <span slot="label">Event Demo</span>
</p-input>

<script type="module">
  const input = $("#event-demo");
  
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
</script>
```

## 主要属性

- `variant` - 输入框样式
- `size` - 输入框尺寸
- `color` - 输入框颜色
- `type` - 输入类型
- `placeholder` - 占位文本
- `disabled` - 是否禁用
- `readonly` - 是否只读
- `autofocus` - 自动聚焦
- `hang-label` - 标签是否悬浮
- `default-value` - 默认值
- `maxlength` - 最大输入长度
- `name` - 表单字段名

## 插槽

- `label` - 标签内容
- `prefix` - 前缀内容
- `suffix` - 后缀内容

## 方法

- `focus()` - 使输入框获得焦点

## 事件

- `input` - 输入时触发
- `change` - 值改变时触发
- `focus` - 获得焦点时触发
- `blur` - 失去焦点时触发

## CSS Parts

- `::part(input)` - 输入框内部元素，可用于自定义样式
