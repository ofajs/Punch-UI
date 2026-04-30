# Checkbox

## 引用组件

Punch UI的复选框组件依赖于 ofa.js，请先加载 ofa.js，然后通过 `l-m` 标签引入复选框组件：

```html
<!-- 引入ofa.js -->
<script
  src="https://cdn.jsdelivr.net/gh/ofajs/ofa.js/dist/ofa.min.mjs"
  type="module"
></script>

<!-- 引入复选框组件 -->
<l-m src="https://punch-ui-v2.pages.dev/packages/checkbox/checkbox.html"></l-m>
```

## 基本用法

```html
<p-checkbox>Checkbox</p-checkbox>
```

## 复选框状态

```html
<p-checkbox>Default</p-checkbox>
<p-checkbox variant="tonal">Tonal</p-checkbox>
<p-checkbox checked>Checked</p-checkbox>
<p-checkbox disabled>Disabled</p-checkbox>
<p-checkbox checked disabled>Disabled & Checked</p-checkbox>
```

## 尺寸

通过 `size` 属性设置复选框尺寸：

```html
<p-checkbox size="xs">Extra Small</p-checkbox>
<p-checkbox size="s">Small</p-checkbox>
<p-checkbox>Default</p-checkbox>
<p-checkbox size="l">Large</p-checkbox>
<p-checkbox size="xl">Extra Large</p-checkbox>
```

## 颜色

通过 `color` 属性设置复选框颜色：

```html
<p-checkbox color="primary" checked>Primary</p-checkbox>
<p-checkbox color="success" checked>Success</p-checkbox>
<p-checkbox color="error" checked>Error</p-checkbox>
<p-checkbox color="neutral" checked>Neutral</p-checkbox>
```

## 不确定状态

添加 `indeterminate` 属性设置复选框为不确定状态：

```html
<p-checkbox indeterminate>Indeterminate</p-checkbox>
```

## 禁用状态

添加 `disabled` 属性禁用复选框：

```html
<p-checkbox disabled>Disabled Checkbox</p-checkbox>
<p-checkbox checked disabled>Disabled & Checked</p-checkbox>
```

## 自动聚焦

添加 `autofocus` 属性使复选框自动聚焦：

```html
<p-checkbox autofocus>Autofocus Checkbox</p-checkbox>
```

## Checkbox Group

使用 `p-checkbox-group` 组件将多个复选框组合在一起，实现多选功能：

```html
<!-- 引入复选框组组件 -->
<l-m src="https://punch-ui-v2.pages.dev/packages/checkbox/group.html"></l-m>

<p-checkbox-group>
  <p-checkbox value="1">Checkbox 1</p-checkbox>
  <p-checkbox value="2" checked>Checkbox 2</p-checkbox>
  <p-checkbox value="3">Checkbox 3</p-checkbox>
</p-checkbox-group>
```

`p-checkbox-group` 的 `value` 属性是一个数组，包含所有被选中的复选框的值。

## 属性

### p-checkbox

| 属性        | 类型                                           | 默认值    | 说明             |
| ----------- | ---------------------------------------------- | --------- | ---------------- |
| variant     | `filled` \| `tonal` \| `text`                  | `filled`  | 复选框样式       |
| size        | `xs` \| `s` \| `l` \| `xl`                    | -         | 复选框尺寸       |
| color       | `primary` \| `error` \| `success` \| `neutral` | `primary` | 复选框颜色       |
| disabled    | boolean                                        | -         | 是否禁用         |
| checked     | boolean                                        | -         | 是否选中         |
| indeterminate | boolean                                      | -         | 是否为不确定状态 |
| autofocus   | boolean                                        | -         | 是否自动聚焦     |
| name        | string                                         | -         | 表单名称         |
| value       | string                                         | -         | 表单值           |

### p-checkbox-group

| 属性  | 类型   | 默认值 | 说明                   |
| ----- | ------ | ------ | ---------------------- |
| value | array  | -      | 当前选中的复选框值数组 |

## 插槽

### p-checkbox

| 插槽名  | 说明       |
| ------- | ---------- |
| default | 复选框标签 |

### p-checkbox-group

| 插槽名  | 说明                 |
| ------- | -------------------- |
| default | 包含的 p-checkbox 元素 |

## 事件

### p-checkbox

| 事件名  | 说明     |
| ------- | -------- |
| change  | 选中状态改变时触发 |

### p-checkbox-group

| 事件名  | 说明                     |
| ------- | ------------------------ |
| change  | 选中项改变时触发         |