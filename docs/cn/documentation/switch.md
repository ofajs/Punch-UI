# Switch 开关

开关组件用于在两种状态之间切换，支持自定义值和键盘操作。

## 引入组件

```html
<l-m src="https://punch-ui-v2.pages.dev/packages/switch/switch.html"></l-m>
```

## 基本用法

<o-playground name="Switch 基本用法" style="--editor-height: 300px">
  <code path="demo.html" preview active>
    <template>
      <link rel="stylesheet" href="https://punch-ui-v2.pages.dev/packages/css/pui-global.css" />
      <l-m src="https://punch-ui-v2.pages.dev/packages/switch/switch.html"></l-m>
      <div style="padding: 20px;">
        <p-switch>默认开关</p-switch>
        <p-switch checked>已选中</p-switch>
      </div>
    </template>
  </code>
</o-playground>

## 尺寸

通过 `size` 属性设置开关尺寸：

<o-playground name="Switch 尺寸" style="--editor-height: 350px">
  <code path="demo.html" preview active>
    <template>
      <link rel="stylesheet" href="https://punch-ui-v2.pages.dev/packages/css/pui-global.css" />
      <l-m src="https://punch-ui-v2.pages.dev/packages/switch/switch.html"></l-m>
      <div style="padding: 20px;">
        <p-switch size="xs">XS</p-switch>
        <p-switch size="s">Small</p-switch>
        <p-switch>Medium</p-switch>
        <p-switch size="l">Large</p-switch>
        <p-switch size="xl">XL</p-switch>
      </div>
    </template>
  </code>
</o-playground>

## 颜色

通过 `color` 属性设置开关颜色：

<o-playground name="Switch 颜色" style="--editor-height: 350px">
  <code path="demo.html" preview active>
    <template>
      <link rel="stylesheet" href="https://punch-ui-v2.pages.dev/packages/css/pui-global.css" />
      <l-m src="https://punch-ui-v2.pages.dev/packages/switch/switch.html"></l-m>
      <div style="padding: 20px;">
        <p-switch color="primary" checked>Primary</p-switch>
        <p-switch color="error" checked>Error</p-switch>
        <p-switch color="success" checked>Success</p-switch>
      </div>
    </template>
  </code>
</o-playground>

## 状态

<o-playground name="Switch 状态" style="--editor-height: 350px">
  <code path="demo.html" preview active>
    <template>
      <link rel="stylesheet" href="https://punch-ui-v2.pages.dev/packages/css/pui-global.css" />
      <l-m src="https://punch-ui-v2.pages.dev/packages/switch/switch.html"></l-m>
      <div style="padding: 20px;">
        <p-switch checked>选中状态</p-switch>
        <p-switch>未选中状态</p-switch>
        <p-switch disabled>禁用状态</p-switch>
      </div>
    </template>
  </code>
</o-playground>

## 表单集成

### 自定义值

使用 `checked-value` 和 `unchecked-value` 属性自定义选中/未选中的值：

<o-playground name="自定义值的开关" style="--editor-height: 350px">
  <code path="demo.html" preview active>
    <template>
      <link rel="stylesheet" href="https://punch-ui-v2.pages.dev/packages/css/pui-global.css" />
      <l-m src="https://punch-ui-v2.pages.dev/packages/switch/switch.html"></l-m>
      <div style="padding: 20px;">
        <p-switch 
          name="status" 
          checked-value="enabled" 
          unchecked-value="disabled"
          checked
        >
          状态开关
        </p-switch>
      </div>
    </template>
  </code>
</o-playground>

## API

### 属性

| 属性 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| `checked` | 是否选中 | `boolean` | `false` |
| `size` | 开关尺寸 | `xs` \| `s` \| `l` \| `xl` | - |
| `color` | 开关颜色 | `primary` \| `error` \| `success` | `primary` |
| `disabled` | 是否禁用 | `boolean` | `false` |
| `name` | 表单名称 | `string` | - |
| `checked-value` | 选中时的值 | `string` | `true` |
| `unchecked-value` | 未选中时的值 | `string` | `false` |

### 事件

| 事件名 | 说明 |
|--------|------|
| `change` | 开关状态改变时触发 |
