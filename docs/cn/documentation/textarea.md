# Textarea 多行文本

多行文本输入框组件，支持响应式高度和表单集成。

## 引入组件

```html
<l-m src="https://punch-ui-v2.pages.dev/packages/textarea/textarea.html"></l-m>
```

## 基本用法

<o-playground name="Textarea 基本用法" style="--editor-height: 300px">
  <code path="demo.html" preview active>
    <template>
      <link rel="stylesheet" href="https://punch-ui-v2.pages.dev/packages/css/pui-global.css" />
      <script src="https://cdn.jsdelivr.net/gh/ofajs/ofa.js/dist/ofa.min.mjs" type="module"></script>
      <l-m src="https://punch-ui-v2.pages.dev/packages/textarea/textarea.html"></l-m>
      <div style="padding: 20px; max-width: 400px;">
        <p-textarea placeholder="请输入内容"></p-textarea>
      </div>
    </template>
  </code>
</o-playground>

## 带标签

<o-playground name="带标签的 Textarea" style="--editor-height: 350px">
  <code path="demo.html" preview active>
    <template>
      <link rel="stylesheet" href="https://punch-ui-v2.pages.dev/packages/css/pui-global.css" />
      <script src="https://cdn.jsdelivr.net/gh/ofajs/ofa.js/dist/ofa.min.mjs" type="module"></script>
      <l-m src="https://punch-ui-v2.pages.dev/packages/textarea/textarea.html"></l-m>
      <div style="padding: 20px; max-width: 400px;">
        <p-textarea>
          <span slot="label">留言</span>
        </p-textarea>
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
| `value` | 输入值 | `string` | - |
| `rows` | 行数 | `number` | - |

### 插槽

| 插槽名 | 说明 |
|--------|------|
| `default` | 文本框内容 |
| `label` | 标签文本 |
