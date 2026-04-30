# Radio

## 引用组件

Punch UI的单选框组件依赖于 ofa.js，请先加载 ofa.js，然后通过 `l-m` 标签引入单选框组件：

```html
<!-- 引入ofa.js -->
<script
  src="https://cdn.jsdelivr.net/gh/ofajs/ofa.js/dist/ofa.min.mjs"
  type="module"
></script>

<!-- 引入单选框组件 -->
<l-m src="https://punch-ui-v2.pages.dev/packages/radio/radio.html"></l-m>
```

## 基本用法

```html
<p-radio>Radio</p-radio>
```

## 单选框状态

```html
<p-radio>Default</p-radio>
<p-radio variant="tonal">Tonal</p-radio>
<p-radio checked>Checked</p-radio>
<p-radio disabled>Disabled</p-radio>
<p-radio checked disabled>Disabled & Checked</p-radio>
```

## 尺寸

通过 `size` 属性设置单选框尺寸：

```html
<p-radio size="xs">Extra Small</p-radio>
<p-radio size="s">Small</p-radio>
<p-radio>Default</p-radio>
<p-radio size="l">Large</p-radio>
<p-radio size="xl">Extra Large</p-radio>
```

## 颜色

通过 `color` 属性设置单选框颜色：

```html
<p-radio color="primary" checked>Primary</p-radio>
<p-radio color="success" checked>Success</p-radio>
<p-radio color="error" checked>Error</p-radio>
<p-radio color="neutral" checked>Neutral</p-radio>
```

## 禁用状态

添加 `disabled` 属性禁用单选框：

```html
<p-radio disabled>Disabled Radio</p-radio>
<p-radio checked disabled>Disabled & Checked</p-radio>
```

## 自动聚焦

添加 `autofocus` 属性使单选框自动聚焦：

```html
<p-radio autofocus>Autofocus Radio</p-radio>
```

## Radio Group

使用 `p-radio-group` 组件将多个单选框组合在一起，实现单选功能：

```html
<!-- 引入单选框组组件 -->
<l-m src="https://punch-ui-v2.pages.dev/packages/radio/group.html"></l-m>

<p-radio-group>
  <p-radio value="1">Radio 1</p-radio>
  <p-radio value="2" checked>Radio 2</p-radio>
  <p-radio value="3">Radio 3</p-radio>
</p-radio-group>
```

`p-radio-group` 的 `value` 属性是当前选中的单选框的值。

## 属性

### p-radio

| 属性      | 类型                                           | 默认值    | 说明           |
| --------- | ---------------------------------------------- | --------- | -------------- |
| variant   | `filled` \| `tonal` \| `text`                  | `filled`  | 单选框样式     |
| size      | `xs` \| `s` \| `l` \| `xl`                    | -         | 单选框尺寸     |
| color     | `primary` \| `error` \| `success` \| `neutral` | `primary` | 单选框颜色     |
| disabled  | boolean                                        | -         | 是否禁用       |
| checked   | boolean                                        | -         | 是否选中       |
| autofocus | boolean                                        | -         | 是否自动聚焦   |
| name      | string                                         | -         | 表单名称       |
| value     | string                                         | -         | 表单值         |

### p-radio-group

| 属性  | 类型   | 默认值 | 说明               |
| ----- | ------ | ------ | ------------------ |
| value | string | -      | 当前选中的单选框值 |

## 插槽

### p-radio

| 插槽名  | 说明       |
| ------- | ---------- |
| default | 单选框标签 |

### p-radio-group

| 插槽名  | 说明               |
| ------- | ------------------ |
| default | 包含的 p-radio 元素 |

## 事件

### p-radio

| 事件名  | 说明     |
| ------- | -------- |
| change  | 选中状态改变时触发 |

### p-radio-group

| 事件名  | 说明                   |
| ------- | ---------------------- |
| change  | 选中项改变时触发       |