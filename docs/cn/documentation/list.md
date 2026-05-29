# List 列表

列表项组件，支持前缀、后缀和可折叠功能。

## 引入组件

```html
<l-m src="https://punch-ui-v2.pages.dev/packages/list/list.html"></l-m>
```

## 基本用法

<o-playground name="List 基本用法" style="--editor-height: 350px">
  <code path="demo.html" preview active>
    <template>
      <link rel="stylesheet" href="https://punch-ui-v2.pages.dev/packages/css/pui-global.css" />
      <l-m src="https://punch-ui-v2.pages.dev/packages/list/list.html"></l-m>
      <l-m src="https://punch-ui-v2.pages.dev/packages/list/list-item.html"></l-m>
      <div style="padding: 20px; max-width: 400px;">
        <p-list>
          <p-list-item>列表项 1</p-list-item>
          <p-list-item>列表项 2</p-list-item>
          <p-list-item>列表项 3</p-list-item>
        </p-list>
      </div>
    </template>
  </code>
</o-playground>

## API

### 属性

| 属性 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| `collapsible` | 是否可折叠 | `boolean` | `false` |
| `expanded` | 是否展开 | `boolean` | `false` |
