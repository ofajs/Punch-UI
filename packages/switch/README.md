# Switch

开关组件

## 引用组件

Punch UI的开关组件依赖于 ofa.js，请先加载 ofa.js，然后通过 `l-m` 标签引入开关组件：

```html
<!-- 引入ofa.js -->
<script
  src="https://cdn.jsdelivr.net/gh/ofajs/ofa.js/dist/ofa.min.mjs"
  type="module"
></script>

<!-- 引入开关组件 -->
<l-m src="https://punch-ui-v2.pages.dev/packages/switch/switch.html"></l-m>
```

## 基本用法

开关组件通过 `value` 反映当前状态，配合 `checked-value` / `unchecked-value` 定义两种状态的取值，默认分别为 `"on"` 与 `"off"`。使用 `default-value` 设置初始值。

```html
<p-switch>Default</p-switch>
<p-switch default-value="on">已开启</p-switch>
```

## 变体

通过 `variant` 属性设置开关样式：

```html
<p-switch>Default</p-switch>
<p-switch variant="tonal">Tonal</p-switch>
```

## 尺寸

通过 `size` 属性设置开关尺寸：

```html
<p-switch size="xs">Extra Small</p-switch>
<p-switch size="s">Small</p-switch>
<p-switch>Default</p-switch>
<p-switch size="l">Large</p-switch>
<p-switch size="xl">Extra Large</p-switch>
```

## 颜色

通过 `color` 属性设置开关颜色：

```html
<p-switch color="primary" default-value="on">Primary</p-switch>
<p-switch color="success" default-value="on">Success</p-switch>
<p-switch color="error" default-value="on">Error</p-switch>
<p-switch color="neutral" default-value="on">Neutral</p-switch>
```

## 禁用状态

添加 `disabled` 属性禁用开关：

```html
<p-switch disabled>Disabled</p-switch>
<p-switch default-value="on" disabled>Disabled & Checked</p-switch>
```

## 表单名称

使用 `name` 属性设置表单字段名称：

```html
<p-switch name="darkmode">Enable Dark Mode</p-switch>
<p-switch name="notifications" default-value="on">Enable Notifications</p-switch>
```

## 自定义值

通过 `checked-value` 和 `unchecked-value` 属性自定义开关的值：

```html
<p-switch
  checked-value="enabled"
  unchecked-value="disabled"
  default-value="enabled"
>
  Custom Values Demo
</p-switch>
```

## 默认值

使用 `default-value` 属性设置默认值（也是初始选中状态的唯一入口）：

```html
<p-switch default-value="on">默认选中</p-switch>
```

## 动态控制

通过 JavaScript 修改 `value` 动态控制开关状态：

```javascript
// 获取开关
const sw = $("p-switch");

// 设置状态（对应 checked-value / unchecked-value）
sw.value = "on";  // 或 "off"

// 获取当前值
console.log(sw.value);

// 监听变化
sw.on("change", () => {
  console.log("Switch changed:", sw.value);
});
```

批量操作示例：

```javascript
// 启用所有开关
$.all("p-switch").forEach((sw) => {
  sw.value = "on";
});

// 禁用所有开关
$.all("p-switch").forEach((sw) => {
  sw.value = "off";
});
```

## 自动聚焦

添加 `autofocus` 属性使开关在页面加载时自动聚焦：

```html
<p-switch autofocus>Autofocus</p-switch>
```

## 方法

### focus()

使开关获得焦点：

```javascript
$("p-switch").focus();
```

## 事件

开关支持 `change` 事件：

```javascript
const sw = $("p-switch");
sw.on("change", () => {
  console.log("Switch value:", sw.value);
});
```

## 属性

| 属性 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| value | string | - | 当前值，等于 `checked-value` 或 `unchecked-value` |
| variant | `tonal` \| `outlined` | - | 开关样式 |
| size | `xs` \| `s` \| `l` \| `xl` | - | 开关尺寸 |
| color | `primary` \| `success` \| `error` \| `neutral` | - | 开关颜色 |
| disabled | boolean | - | 是否禁用 |
| name | string | - | 表单名称 |
| checked-value | string | `on` | 选中时的值 |
| unchecked-value | string | `off` | 未选中时的值 |
| default-value | string | - | 默认值 |
| autofocus | boolean | - | 是否自动聚焦 |

## 插槽

| 插槽名 | 说明 |
|--------|------|
| default | 开关标签内容 |
