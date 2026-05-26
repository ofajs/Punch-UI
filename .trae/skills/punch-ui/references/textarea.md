# Textarea 多行文本输入框

## 引入组件

```html
<l-m src="https://punch-ui-v2.pages.dev/packages/textarea/textarea.html"></l-m>
```

## 基本用法

```html
<p-textarea>
  <span slot="label">多行文本</span>
</p-textarea>
```

## 变体样式

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
<p-textarea placeholder="Enter your message...">
  <span slot="label">Message</span>
</p-textarea>
```

## 自动聚焦

使用 `autofocus` 属性让文本框在页面加载时自动获得焦点：

```html
<p-textarea autofocus>
  <span slot="label">Autofocus on load</span>
</p-textarea>
```

## 只读状态

使用 `readonly` 属性设置只读状态：

```html
<p-textarea readonly default-value="只读内容">
  <span slot="label">Readonly Textarea</span>
</p-textarea>
```

## 最大长度

使用 `maxlength` 属性限制最大输入字符数：

```html
<p-textarea maxlength="100">
  <span slot="label">Max 100 Characters</span>
</p-textarea>
```

## 禁用状态

使用 `disabled` 属性禁用文本框：

```html
<p-textarea disabled>
  <span slot="label">Disabled Textarea</span>
</p-textarea>
```

## 主要属性

| 属性 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| `variant` | 输入框样式 | `string` | `outlined` |
| `size` | 输入框尺寸 | `string` | `m` |
| `color` | 输入框颜色 | `string` | - |
| `placeholder` | 占位文本 | `string` | - |
| `disabled` | 是否禁用 | `boolean` | `false` |
| `readonly` | 是否只读 | `boolean` | `false` |
| `maxlength` | 最大输入长度 | `number` | - |
| `name` | 表单名称 | `string` | - |
| `autofocus` | 自动聚焦 | `boolean` | `false` |
| `default-value` | 默认值 | `string` | - |
| `error` | 错误状态 | `boolean` | `false` |
| `hang-label` | 标签悬挂模式 | `boolean` | `false` |

## 插槽

| 插槽名 | 说明 |
|--------|------|
| `label` | 标签内容 |
| `prefix` | 前缀内容 |
| `suffix` | 后缀内容 |

## 事件

| 事件名 | 说明 |
|--------|------|
| `input` | 输入时触发 |
| `change` | 值改变时触发 |
| `focus` | 获得焦点时触发 |
| `blur` | 失去焦点时触发 |

## 方法

| 方法名 | 说明 | 参数 |
|--------|------|------|
| `focus()` | 让文本框获得焦点 | - |

## 表单集成

Textarea 组件支持表单集成，可以通过 `name` 属性设置表单字段名：

```html
<form id="myForm">
  <p-textarea name="description">
    <span slot="label">Description</span>
  </p-textarea>
</form>
```

## 响应式高度

Textarea 组件会根据内容自动调整高度，支持多行文本输入，无需手动设置高度。
