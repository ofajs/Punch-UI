# Checkbox 复选框组件

## 引入组件

```html
<l-m src="https://punch-ui-v2.pages.dev/packages/checkbox/checkbox.html"></l-m>
```

## 基本用法

```html
<p-checkbox>Checkbox</p-checkbox>
<p-checkbox checked>Checked</p-checkbox>
```

## 尺寸

```html
<p-checkbox size="xs">XS</p-checkbox>
<p-checkbox size="s">Small</p-checkbox>
<p-checkbox>Medium</p-checkbox>
<p-checkbox size="l">Large</p-checkbox>
<p-checkbox size="xl">XL</p-checkbox>
```

## 颜色

```html
<p-checkbox color="primary" checked>Primary</p-checkbox>
<p-checkbox color="success" checked>Success</p-checkbox>
<p-checkbox color="error" checked>Error</p-checkbox>
<p-checkbox color="neutral" checked>Neutral</p-checkbox>
```

## 状态

```html
<p-checkbox>Default</p-checkbox>
<p-checkbox variant="tonal">Tonal</p-checkbox>
<p-checkbox checked>Checked</p-checkbox>
<p-checkbox disabled>Disabled</p-checkbox>
<p-checkbox indeterminate>Indeterminate</p-checkbox>
```

## Checkbox Group

```html
<l-m src="https://punch-ui-v2.pages.dev/packages/checkbox/group.html"></l-m>

<p-checkbox-group id="demo-checkbox-group" :value="demoCheckboxGroupValue">
  <p-checkbox value="1">选项 1</p-checkbox>
  <p-checkbox value="2" checked>选项 2</p-checkbox>
  <p-checkbox value="3">选项 3</p-checkbox>
</p-checkbox-group>
```

## 主要属性

- `checked` - 是否选中
- `variant` - 复选框样式
- `size` - 复选框尺寸
- `color` - 复选框颜色
- `disabled` - 是否禁用
- `indeterminate` - 是否为不确定状态
- `autofocus` - 是否自动聚焦
- `name` - 表单名称
- `value` - 表单值

## 事件

- `change` - 选中状态改变时触发
