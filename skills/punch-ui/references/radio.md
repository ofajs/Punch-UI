# Radio 单选框组件

## 引入组件

```html
<l-m src="https://punch-ui-v2.pages.dev/packages/radio/radio.html"></l-m>
```

## 基本用法

```html
<p-radio>Radio</p-radio>
<p-radio checked>Checked</p-radio>
```

## 尺寸

```html
<p-radio size="xs">XS</p-radio>
<p-radio size="s">Small</p-radio>
<p-radio>Medium</p-radio>
<p-radio size="l">Large</p-radio>
<p-radio size="xl">XL</p-radio>
```

## 颜色

```html
<p-radio color="primary" checked>Primary</p-radio>
<p-radio color="success" checked>Success</p-radio>
<p-radio color="error" checked>Error</p-radio>
<p-radio color="neutral" checked>Neutral</p-radio>
```

## 状态

```html
<p-radio>Default</p-radio>
<p-radio variant="tonal">Tonal</p-radio>
<p-radio checked>Checked</p-radio>
<p-radio disabled>Disabled</p-radio>
```

## Radio Group

```html
<l-m src="https://punch-ui-v2.pages.dev/packages/radio/group.html"></l-m>

<p-radio-group id="demo-radio-group" :value="demoRadioGroupValue">
  <p-radio value="a">选项 A</p-radio>
  <p-radio value="b" checked>选项 B</p-radio>
  <p-radio value="c">选项 C</p-radio>
</p-radio-group>
```

## 主要属性

- `checked` - 是否选中
- `variant` - 单选框样式
- `size` - 单选框尺寸
- `color` - 单选框颜色
- `disabled` - 是否禁用
- `autofocus` - 是否自动聚焦
- `name` - 表单名称
- `value` - 表单值

## 事件

- `change` - 选中状态改变时触发
