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

## 带图标的标签

使用 `icon` 插槽添加图标：

<o-playground name="带图标的标签" style="--editor-height: 400px">
  <code path="demo.html" preview active>
    <template>
      <link rel="stylesheet" href="https://punch-ui-v2.pages.dev/packages/css/pui-global.css" />
      <l-m src="https://punch-ui-v2.pages.dev/packages/tabs/tab-bar.html"></l-m>
      <l-m src="https://punch-ui-v2.pages.dev/packages/tabs/tab-item.html"></l-m>
      <div style="padding: 20px;">
        <p-tab-bar>
          <p-tab-item active>
            <span slot="icon">🏠</span>
            <span>首页</span>
          </p-tab-item>
          <p-tab-item>
            <span slot="icon">📑</span>
            <span>书签</span>
          </p-tab-item>
          <p-tab-item>
            <span slot="icon">👤</span>
            <span>关于</span>
          </p-tab-item>
        </p-tab-bar>
      </div>
    </template>
  </code>
</o-playground>

## 禁用状态

添加 `disabled` 属性禁用标签项：

<o-playground name="禁用状态" style="--editor-height: 400px">
  <code path="demo.html" preview active>
    <template>
      <link rel="stylesheet" href="https://punch-ui-v2.pages.dev/packages/css/pui-global.css" />
      <l-m src="https://punch-ui-v2.pages.dev/packages/tabs/tab-bar.html"></l-m>
      <l-m src="https://punch-ui-v2.pages.dev/packages/tabs/tab-item.html"></l-m>
      <div style="padding: 20px;">
        <p-tab-bar>
          <p-tab-item active>
            <span slot="icon">🏠</span>
            <span>首页</span>
          </p-tab-item>
          <p-tab-item disabled>
            <span slot="icon">⚙️</span>
            <span>设置</span>
          </p-tab-item>
          <p-tab-item>
            <span slot="icon">👤</span>
            <span>关于</span>
          </p-tab-item>
        </p-tab-bar>
      </div>
    </template>
  </code>
</o-playground>

## 可滚动的标签栏

当标签项过多时，可以设置滚动：

<o-playground name="可滚动的标签栏" style="--editor-height: 400px">
  <code path="demo.html" preview active>
    <template>
      <link rel="stylesheet" href="https://punch-ui-v2.pages.dev/packages/css/pui-global.css" />
      <l-m src="https://punch-ui-v2.pages.dev/packages/tabs/tab-bar.html"></l-m>
      <l-m src="https://punch-ui-v2.pages.dev/packages/tabs/tab-item.html"></l-m>
      <div style="padding: 20px;">
        <p-tab-bar style="overflow-x: auto">
          <p-tab-item active>标签 One</p-tab-item>
          <p-tab-item>标签 Two</p-tab-item>
          <p-tab-item>标签 Three</p-tab-item>
          <p-tab-item>标签 Four</p-tab-item>
          <p-tab-item>标签 Five</p-tab-item>
          <p-tab-item>标签 Six</p-tab-item>
          <p-tab-item>标签 Seven</p-tab-item>
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
