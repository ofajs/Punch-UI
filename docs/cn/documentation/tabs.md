# Tabs 标签页

标签页组件，用于在不同内容之间切换。

## 引入组件

```html
<l-m src="https://punch-ui-v2.pages.dev/packages/tabs/tab-bar.html"></l-m>
```

## 基本用法

<o-playground name="Tabs 基本用法" style="--editor-height: 400px">
  <code path="demo.html" preview active>
    <template>
      <link rel="stylesheet" href="https://punch-ui-v2.pages.dev/packages/css/pui-global.css" />
      <l-m src="https://punch-ui-v2.pages.dev/packages/tabs/tab-bar.html"></l-m>
      <l-m src="https://punch-ui-v2.pages.dev/packages/tabs/tab-item.html"></l-m>
      <div style="padding: 20px;">
        <p-tab-bar>
          <p-tab-item active>标签 1</p-tab-item>
          <p-tab-item>标签 2</p-tab-item>
          <p-tab-item>标签 3</p-tab-item>
        </p-tab-bar>
      </div>
    </template>
  </code>
</o-playground>

## API

### 属性

| 属性 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| `active` | 是否激活 | `boolean` | `false` |
