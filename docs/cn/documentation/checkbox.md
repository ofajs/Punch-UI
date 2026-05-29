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
      <script src="https://cdn.jsdelivr.net/gh/ofajs/ofa.js/dist/ofa.min.mjs" type="module"></script>
      <l-m src="https://punch-ui-v2.pages.dev/packages/checkbox/checkbox.html"></l-m>
      <div style="padding: 20px;">
        <p-checkbox>复选框</p-checkbox>
        <p-checkbox checked>已选中</p-checkbox>
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
