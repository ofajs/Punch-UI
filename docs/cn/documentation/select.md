# Select 选择器

下拉选择器组件，支持单选和多选。

## 引入组件

```html
<l-m src="https://punch-ui-v2.pages.dev/packages/select/select.html"></l-m>
```

## 基本用法

<o-playground name="Select 基本用法" style="--editor-height: 350px">
  <code path="demo.html" preview active>
    <template>
      <link rel="stylesheet" href="https://punch-ui-v2.pages.dev/packages/css/pui-global.css" />
      <script src="https://cdn.jsdelivr.net/gh/ofajs/ofa.js/dist/ofa.min.mjs" type="module"></script>
      <l-m src="https://punch-ui-v2.pages.dev/packages/select/select.html"></l-m>
      <l-m src="https://punch-ui-v2.pages.dev/packages/select/option.html"></l-m>
      <div style="padding: 20px; max-width: 300px;">
        <p-select placeholder="请选择">
          <p-option value="1">选项 1</p-option>
          <p-option value="2">选项 2</p-option>
          <p-option value="3">选项 3</p-option>
        </p-select>
      </div>
    </template>
  </code>
</o-playground>

## API

### 属性

| 属性 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| `placeholder` | 占位文本 | `string` | - |
| `disabled` | 是否禁用 | `boolean` | `false` |
| `value` | 选中的值 | `string` | - |
