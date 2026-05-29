# Radio 单选框

单选框组件，支持单个和组合使用。

## 引入组件

```html
<l-m src="https://punch-ui-v2.pages.dev/packages/radio/radio.html"></l-m>
```

## 基本用法

<o-playground name="Radio 基本用法" style="--editor-height: 350px">
  <code path="demo.html" preview active>
    <template>
      <link rel="stylesheet" href="https://punch-ui-v2.pages.dev/packages/css/pui-global.css" />
      <l-m src="https://punch-ui-v2.pages.dev/packages/radio/radio.html"></l-m>
      <div style="padding: 20px;">
        <p-radio name="gender" value="male">男</p-radio>
        <p-radio name="gender" value="female">女</p-radio>
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
| `name` | 单选框组名 | `string` | - |
| `value` | 单选框的值 | `string` | - |
