# Radio 单选框

单选框组件，通常与 radio-group 组合使用。

## 引入组件

```html
<l-m src="https://punch-ui-v2.pages.dev/packages/radio/radio.html"></l-m>
<l-m src="https://punch-ui-v2.pages.dev/packages/radio/group.html"></l-m>
```

## 基本用法

使用 `p-radio-group` 包裹多个 `p-radio` 组件：

<o-playground name="Radio 基本用法" style="--editor-height: 350px">
  <code path="demo.html" preview active>
    <template>
      <link rel="stylesheet" href="https://punch-ui-v2.pages.dev/packages/css/pui-global.css" />
      <l-m src="https://punch-ui-v2.pages.dev/packages/radio/radio.html"></l-m>
      <l-m src="https://punch-ui-v2.pages.dev/packages/radio/group.html"></l-m>
      <div style="padding: 20px;">
        <p-radio-group>
          <p-radio value="male">男</p-radio>
          <p-radio value="female">女</p-radio>
        </p-radio-group>
      </div>
    </template>
  </code>
</o-playground>

## 尺寸

通过 `size` 属性设置单选框尺寸：

<o-playground name="Radio 尺寸" style="--editor-height: 350px">
  <code path="demo.html" preview active>
    <template>
      <link rel="stylesheet" href="https://punch-ui-v2.pages.dev/packages/css/pui-global.css" />
      <l-m src="https://punch-ui-v2.pages.dev/packages/radio/radio.html"></l-m>
      <l-m src="https://punch-ui-v2.pages.dev/packages/radio/group.html"></l-m>
      <div style="padding: 20px;">
        <p-radio-group>
          <p-radio size="xs" value="xs">XS</p-radio>
          <p-radio size="s" value="s">Small</p-radio>
          <p-radio value="m">Medium</p-radio>
          <p-radio size="l" value="l">Large</p-radio>
          <p-radio size="xl" value="xl">XL</p-radio>
        </p-radio-group>
      </div>
    </template>
  </code>
</o-playground>

## 颜色

通过 `color` 属性设置单选框颜色：

<o-playground name="Radio 颜色" style="--editor-height: 350px">
  <code path="demo.html" preview active>
    <template>
      <link rel="stylesheet" href="https://punch-ui-v2.pages.dev/packages/css/pui-global.css" />
      <l-m src="https://punch-ui-v2.pages.dev/packages/radio/radio.html"></l-m>
      <l-m src="https://punch-ui-v2.pages.dev/packages/radio/group.html"></l-m>
      <div style="padding: 20px;">
        <p-radio-group>
          <p-radio color="primary" value="primary">Primary</p-radio>
          <p-radio color="success" value="success">Success</p-radio>
          <p-radio color="error" value="error">Error</p-radio>
          <p-radio color="neutral" value="neutral">Neutral</p-radio>
        </p-radio-group>
      </div>
    </template>
  </code>
</o-playground>

## 状态

<o-playground name="Radio 状态" style="--editor-height: 400px">
  <code path="demo.html" preview active>
    <template>
      <link rel="stylesheet" href="https://punch-ui-v2.pages.dev/packages/css/pui-global.css" />
      <l-m src="https://punch-ui-v2.pages.dev/packages/radio/radio.html"></l-m>
      <l-m src="https://punch-ui-v2.pages.dev/packages/radio/group.html"></l-m>
      <div style="padding: 20px;">
        <p-radio-group>
          <p-radio value="default">Default</p-radio>
          <p-radio variant="tonal" value="tonal">Tonal</p-radio>
          <p-radio checked value="checked">Checked</p-radio>
          <p-radio disabled value="disabled">Disabled</p-radio>
        </p-radio-group>
      </div>
    </template>
  </code>
</o-playground>

## Radio Group

使用单选框组管理多个单选框：

<o-playground name="Radio Group" style="--editor-height: 400px">
  <code path="demo.html" preview active>
    <template>
      <link rel="stylesheet" href="https://punch-ui-v2.pages.dev/packages/css/pui-global.css" />
      <l-m src="https://punch-ui-v2.pages.dev/packages/radio/radio.html"></l-m>
      <l-m src="https://punch-ui-v2.pages.dev/packages/radio/group.html"></l-m>
      <div style="padding: 20px;">
        <p-radio-group id="demo-radio-group" :value="demoRadioGroupValue">
          <p-radio value="a">选项 A</p-radio>
          <p-radio value="b" checked>选项 B</p-radio>
          <p-radio value="c">选项 C</p-radio>
        </p-radio-group>
      </div>
    </template>
  </code>
</o-playground>

## API

### 属性 - p-radio

| 属性 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| `checked` | 是否选中 | `boolean` | `false` |
| `disabled` | 是否禁用 | `boolean` | `false` |
| `value` | 单选框的值 | `string` | - |
| `size` | 单选框尺寸 | `xs` \| `s` \| `l` \| `xl` | - |
| `color` | 单选框颜色 | `primary` \| `error` \| `success` \| `neutral` | - |
| `variant` | 单选框样式 | `tonal` | - |

### 属性 - p-radio-group

| 属性 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| `value` | 选中的值 | `string` | - |

### 事件

| 事件名 | 说明 |
|--------|------|
| `change` | 选中状态改变时触发 |
