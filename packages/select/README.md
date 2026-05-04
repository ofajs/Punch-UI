# Select

选择器组件

## 引用组件

Punch UI 的选择器组件依赖于 ofa.js，请先加载 ofa.js，然后通过 `l-m` 标签引入选择器组件：

```html
<!-- 引入ofa.js -->
<script
  src="https://cdn.jsdelivr.net/gh/ofajs/ofa.js/dist/ofa.min.mjs"
  type="module"
></script>

<!-- 引入选择器组件 -->
<l-m src="https://punch-ui-v2.pages.dev/packages/select/select.html"></l-m>
```

## 基本用法

```html
<p-select placeholder="Please select">
  <span slot="label">Select Country</span>
  <p-option value="us">United States</p-option>
  <p-option value="uk">United Kingdom</p-option>
  <p-option value="cn">China</p-option>
  <p-option value="jp">Japan</p-option>
</p-select>
```

> **注意**：选择器会自动添加一个空的默认选项，显示 placeholder 文本。当用户选择一个选项后，这个空选项会自动删除。

## p-option 组件

`p-option` 是选择器的选项组件，用于定义下拉列表中的选项。

### 基本用法

```html
<p-option value="us">United States</p-option>
```

### 属性

| 属性 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| value | string | - | 选项的值 |
| disabled | boolean | - | 是否禁用 |
| selected | boolean | - | 是否默认选中 |

### 示例

```html
<p-select>
  <span slot="label">Select Option</span>
  <p-option value="1">Option 1</p-option>
  <p-option value="2" disabled>Disabled Option</p-option>
  <p-option value="3" selected>Default Selected</p-option>
</p-select>
```

## 变体

通过 `variant` 属性设置选择器样式：

```html
<p-select>
  <span slot="label">Outlined Select</span>
  <p-option value="1">Option 1</p-option>
  <p-option value="2">Option 2</p-option>
</p-select>
<p-select variant="filled">
  <span slot="label">Filled Select</span>
  <p-option value="1">Option 1</p-option>
  <p-option value="2">Option 2</p-option>
</p-select>
```

## 尺寸

通过 `size` 属性设置选择器尺寸：

```html
<p-select size="xs">
  <span slot="label">Extra Small (xs)</span>
  <p-option value="1">Option 1</p-option>
</p-select>
<p-select size="s">
  <span slot="label">Small (s)</span>
  <p-option value="1">Option 1</p-option>
</p-select>
<p-select>
  <span slot="label">Default</span>
  <p-option value="1">Option 1</p-option>
</p-select>
<p-select size="l">
  <span slot="label">Large (l)</span>
  <p-option value="1">Option 1</p-option>
</p-select>
<p-select size="xl">
  <span slot="label">Extra Large (xl)</span>
  <p-option value="1">Option 1</p-option>
</p-select>
```

## 颜色

通过 `color` 属性设置选择器颜色：

```html
<p-select color="primary">
  <span slot="label">Primary Color</span>
  <p-option value="1">Option 1</p-option>
</p-select>
<p-select color="success">
  <span slot="label">Success Color</span>
  <p-option value="1">Option 1</p-option>
</p-select>
<p-select color="neutral">
  <span slot="label">Neutral Color</span>
  <p-option value="1">Option 1</p-option>
</p-select>
<p-select color="error">
  <span slot="label">Error Color</span>
  <p-option value="1">Option 1</p-option>
</p-select>
```

## 前缀和后缀

使用 `prefix` 和 `suffix` 插槽添加前缀/后缀内容：

```html
<p-select>
  <span slot="prefix">🌐</span>
  <span slot="label">Language</span>
  <p-option value="en">English</p-option>
  <p-option value="zh">中文</p-option>
</p-select>
<p-select>
  <span slot="label">Currency</span>
  <span slot="suffix">💰</span>
  <p-option value="usd">USD</p-option>
  <p-option value="eur">EUR</p-option>
</p-select>
```

## 占位符

使用 `placeholder` 属性设置占位文本：

```html
<p-select placeholder="Choose an option">
  <p-option value="1">Option 1</p-option>
  <p-option value="2">Option 2</p-option>
</p-select>
```

## 标签浮动

添加 `hang-label` 属性使标签浮动到上方：

```html
<p-select hang-label>
  <span slot="label">Hang Label Select</span>
  <p-option value="1">Option 1</p-option>
  <p-option value="2">Option 2</p-option>
</p-select>
```

## 禁用状态

添加 `disabled` 属性禁用选择器：

```html
<p-select disabled>
  <span slot="label">Disabled Select</span>
  <p-option value="1">Option 1</p-option>
</p-select>
```

## 禁用选项

在 `option` 元素上添加 `disabled` 属性禁用特定选项：

```html
<p-select>
  <span slot="label">Select Option</span>
  <p-option value="1">Available Option 1</p-option>
  <p-option value="2" disabled>Disabled Option 2</p-option>
  <p-option value="3">Available Option 3</p-option>
</p-select>
```

## 编程控制

### 设置值

```javascript
$("p-select").value = "option1";
```

### 获取值

```javascript
const value = $("p-select").value;
```

### 清空选择

```javascript
$("p-select").value = null;
```

### 聚焦

```javascript
$("p-select").focus();
```

## 事件

选择器支持以下事件：

```javascript
const select = $("p-select");

select.on("change", (e) => {
  console.log("Selected value:", e.data.value);
});
```

## 属性

| 属性 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| variant | `filled` \| `outlined` | `outlined` | 选择器样式 |
| size | `xs` \| `s` \| `l` \| `xl` | - | 选择器尺寸 |
| color | `primary` \| `success` \| `neutral` \| `error` | - | 选择器颜色 |
| placeholder | string | - | 占位文本 |
| disabled | boolean | - | 是否禁用 |
| name | string | - | 表单名称 |
| hang-label | boolean | - | 标签是否浮动 |

## 插槽

| 插槽名 | 说明 |
|--------|------|
| label | 标签内容 |
| prefix | 前缀内容 |
| suffix | 后缀内容 |
| default | 选项内容（option 元素） |

## 事件

| 事件名 | 说明 | 事件对象 |
|--------|------|----------|
| change | 值改变时触发 | `{ data: { value } }` |

## 方法

| 方法名 | 说明 | 参数 |
|--------|------|------|
| focus | 使选择器获得焦点 | - |

## 样式定制

可以通过 CSS 变量或 `style` 属性自定义样式：

```html
<p-select style="border-radius: 30px">
  <span slot="label">Custom Style</span>
  <p-option value="1">Option 1</p-option>
</p-select>
```

## 完整示例

```html
<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Select Demo</title>
  <script src="https://cdn.jsdelivr.net/gh/ofajs/ofa.js/dist/ofa.min.mjs" type="module"></script>
  <link rel="stylesheet" href="https://punch-ui-v2.pages.dev/packages/css/pui-global.css" />
</head>
<body>
  <l-m src="https://punch-ui-v2.pages.dev/packages/select/select.html"></l-m>
  
  <div style="padding: 20px;">
    <p-select id="country-select" placeholder="Please select">
      <span slot="label">Select Country</span>
      <p-option value="us">United States</p-option>
      <p-option value="uk">United Kingdom</p-option>
      <p-option value="cn">China</p-option>
      <p-option value="jp">Japan</p-option>
    </p-select>
  </div>

  <script type="module">
    // 监听变化
    $("#country-select").on("change", (e) => {
      console.log("Country changed:", e.data.value);
    });
    
    // 编程设置值
    setTimeout(() => {
      $("#country-select").value = "cn";
    }, 1000);
  </script>
</body>
</html>
```
