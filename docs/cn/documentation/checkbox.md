# Checkbox 复选框

复选框组件，支持单个和组合使用。

## 引入组件

```html
<l-m src="https://punch-ui-v2.pages.dev/packages/checkbox/checkbox.html"></l-m>
```

## 基本用法

<o-playground name="Checkbox 基本用法" style="--editor-height: 300px">
  <code path="demo.html" preview active>
    <template>
      <link rel="stylesheet" href="https://punch-ui-v2.pages.dev/packages/css/pui-global.css" />
      <l-m src="https://punch-ui-v2.pages.dev/packages/checkbox/checkbox.html"></l-m>
      <div style="padding: 20px;">
        <p-checkbox>复选框</p-checkbox>
        <p-checkbox checked>已选中</p-checkbox>
      </div>
    </template>
  </code>
</o-playground>

## 尺寸

通过 `size` 属性设置复选框尺寸：

<o-playground name="Checkbox 尺寸" style="--editor-height: 350px">
  <code path="demo.html" preview active>
    <template>
      <link rel="stylesheet" href="https://punch-ui-v2.pages.dev/packages/css/pui-global.css" />
      <l-m src="https://punch-ui-v2.pages.dev/packages/checkbox/checkbox.html"></l-m>
      <div style="padding: 20px;">
        <p-checkbox size="xs" checked>XS</p-checkbox>
        <p-checkbox size="s" checked>Small</p-checkbox>
        <p-checkbox checked>Medium</p-checkbox>
        <p-checkbox size="l" checked>Large</p-checkbox>
        <p-checkbox size="xl" checked>XL</p-checkbox>
      </div>
    </template>
  </code>
</o-playground>

## 颜色

通过 `color` 属性设置复选框颜色：

<o-playground name="Checkbox 颜色" style="--editor-height: 350px">
  <code path="demo.html" preview active>
    <template>
      <link rel="stylesheet" href="https://punch-ui-v2.pages.dev/packages/css/pui-global.css" />
      <l-m src="https://punch-ui-v2.pages.dev/packages/checkbox/checkbox.html"></l-m>
      <div style="padding: 20px;">
        <p-checkbox color="primary" checked>Primary</p-checkbox>
        <p-checkbox color="success" checked>Success</p-checkbox>
        <p-checkbox color="error" checked>Error</p-checkbox>
        <p-checkbox color="neutral" checked>Neutral</p-checkbox>
      </div>
    </template>
  </code>
</o-playground>

## 状态

<o-playground name="Checkbox 状态" style="--editor-height: 400px">
  <code path="demo.html" preview active>
    <template>
      <link rel="stylesheet" href="https://punch-ui-v2.pages.dev/packages/css/pui-global.css" />
      <l-m src="https://punch-ui-v2.pages.dev/packages/checkbox/checkbox.html"></l-m>
      <div style="padding: 20px;">
        <p-checkbox>Default</p-checkbox>
        <p-checkbox variant="tonal">Tonal</p-checkbox>
        <p-checkbox checked>Checked</p-checkbox>
        <p-checkbox disabled>Disabled</p-checkbox>
        <p-checkbox indeterminate>Indeterminate</p-checkbox>
      </div>
    </template>
  </code>
</o-playground>

## Checkbox Group

使用复选框组管理多个复选框：

<o-playground name="Checkbox Group" style="--editor-height: 400px">
  <code path="demo.html" preview active>
    <template>
      <link rel="stylesheet" href="https://punch-ui-v2.pages.dev/packages/css/pui-global.css" />
      <l-m src="https://punch-ui-v2.pages.dev/packages/checkbox/checkbox.html"></l-m>
      <l-m src="https://punch-ui-v2.pages.dev/packages/checkbox/group.html"></l-m>
      <div style="padding: 20px;">
        <p-checkbox-group id="demo-checkbox-group" :value="demoCheckboxGroupValue">
          <p-checkbox value="1">选项 1</p-checkbox>
          <p-checkbox value="2" checked>选项 2</p-checkbox>
          <p-checkbox value="3">选项 3</p-checkbox>
        </p-checkbox-group>
      </div>
    </template>
  </code>
</o-playground>

## API

### 属性

| 属性 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| `checked` | 是否选中 | `boolean` | `false` |
| `disabled` | 是否禁用 | `boolean` | `false` |
| `name` | 表单名称 | `string` | - |
| `value` | 复选框的值 | `string` | - |
