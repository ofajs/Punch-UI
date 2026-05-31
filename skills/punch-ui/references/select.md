# Select 选择器组件

## 引入组件

```html
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

## 变体

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

## 禁用状态

```html
<p-select disabled>
  <span slot="label">Disabled Select</span>
  <p-option value="1">Option 1</p-option>
</p-select>
```

## 禁用选项

```html
<p-select>
  <span slot="label">Select Option</span>
  <p-option value="1">Available Option 1</p-option>
  <p-option value="2" disabled>Disabled Option 2</p-option>
  <p-option value="3">Available Option 3</p-option>
</p-select>
```

## 主要属性

- `variant` - 选择器样式
- `size` - 选择器尺寸
- `color` - 选择器颜色
- `placeholder` - 占位文本
- `disabled` - 是否禁用
- `hang-label` - 标签是否浮动

## p-option 属性

- `value` - 选项的值
- `disabled` - 是否禁用
- `selected` - 是否默认选中

## 插槽

- `label` - 标签内容
- `prefix` - 前缀内容
- `suffix` - 后缀内容
- `default` - 选项内容（p-option 元素）

## 事件

- `change` - 值改变时触发

## 编程控制

```javascript
// 设置值
$("p-select").value = "option1";

// 获取值
const value = $("p-select").value;

// 清空选择
$("p-select").value = null;
```
