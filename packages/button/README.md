# Button

## 引用组件

Punch UI的按钮组件依赖于 ofa.js，请先加载 ofa.js，然后通过 `l-m` 标签引入按钮组件：

```html
<!-- 引入ofa.js -->
<script
  src="https://cdn.jsdelivr.net/gh/ofajs/ofa.js/dist/ofa.min.mjs"
  type="module"
></script>

<!-- 引入按钮组件 -->
<l-m src="https://punch-ui-v2.pages.dev/packages/button/button.html"></l-m>
```

## 基本用法

```html
<p-button>Simple Button</p-button>
```

## 按钮变体

通过 `variant` 属性设置按钮样式：

```html
<p-button variant="filled">Filled Button</p-button>
<p-button variant="outlined">Outlined Button</p-button>
<p-button variant="text">Text Button</p-button>
```

## 尺寸

通过 `size` 属性设置按钮尺寸：

```html
<p-button size="xs">Extra Small</p-button>
<p-button size="s">Small</p-button>
<p-button>Default</p-button>
<p-button size="l">Large</p-button>
<p-button size="xl">Extra Large</p-button>
```

## 颜色

通过 `color` 属性设置按钮颜色：

```html
<p-button color="primary">Primary</p-button>
<p-button color="error">Error</p-button>
<p-button color="success">Success</p-button>
<p-button color="neutral">Neutral</p-button>
```

## 图标按钮

添加 `icon` 属性使按钮成为圆形图标按钮：

```html
<p-button icon>+</p-button>
<p-button icon size="s">-</p-button>
<p-button icon size="l">×</p-button>
```

## 带前缀/后缀

使用 `prefix` 和 `suffix` 插槽添加图标或文本：

```html
<p-button>
  <span slot="prefix">🔍</span>
  Search
</p-button>
<p-button>
  Settings
  <span slot="suffix">⚙️</span>
</p-button>
```

## 禁用状态

添加 `disabled` 属性禁用按钮：

```html
<p-button disabled>Disabled Button</p-button>
<p-button variant="outlined" disabled>Disabled Outlined</p-button>
```

## 自定义样式

可以通过 `style` 属性自定义宽度、圆角等：

```html
<p-button style="width: 200px">Custom Width</p-button>
<p-button style="border-radius: 8px">Custom Style</p-button>
```

## Button Group

使用 `p-button-group` 组件将多个按钮组合在一起：

### 基本按钮组

```html
<p-button-group>
  <p-button>Button 1</p-button>
  <p-button>Button 2</p-button>
  <p-button>Button 3</p-button>
</p-button-group>
```

### 连接样式

添加 `connected` 属性使按钮组紧密连接：

```html
<p-button-group connected>
  <p-button variant="outlined">Home</p-button>
  <p-button variant="outlined">Products</p-button>
  <p-button variant="outlined">About</p-button>
</p-button-group>
```

### 全宽按钮组

添加 `full-width` 属性使按钮组占满宽度：

```html
<p-button-group full-width>
  <p-button>Left</p-button>
  <p-button>Center</p-button>
  <p-button>Right</p-button>
</p-button-group>
```

### 组合使用

可以组合使用 `connected` 和 `full-width`，以及不同变体、颜色、尺寸的按钮。

## 属性

### p-button

| 属性      | 类型                                           | 默认值    | 说明           |
| --------- | ---------------------------------------------- | --------- | -------------- |
| variant   | `filled` \| `outlined` \| `text`               | `filled`  | 按钮样式       |
| size      | `xs` \| `s` \| `l` \| `xl`                     | -         | 按钮尺寸       |
| color     | `primary` \| `error` \| `success` \| `neutral` | `primary` | 按钮颜色       |
| disabled  | boolean                                        | -         | 是否禁用       |
| icon      | boolean                                        | -         | 是否为图标按钮 |
| autofocus | boolean                                        | -         | 是否自动聚焦   |

### p-button-group

| 属性       | 类型    | 默认值 | 说明         |
| ---------- | ------- | ------ | ------------ |
| connected  | boolean | -      | 是否连接样式 |
| full-width | boolean | -      | 是否占满宽度 |

## 插槽

### p-button

| 插槽名  | 说明     |
| ------- | -------- |
| prefix  | 内容前缀 |
| default | 按钮内容 |
| suffix  | 内容后缀 |

### p-button-group

| 插槽名  | 说明                 |
| ------- | -------------------- |
| default | 包含的 p-button 元素 |
