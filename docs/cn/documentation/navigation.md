# Navigation 导航

导航栏和导航布局组件，支持响应式设计。

## 引入组件

```html
<l-m src="https://punch-ui-v2.pages.dev/packages/navigation/nav-bar.html"></l-m>
```

## 基本用法

<o-playground name="Navigation 基本用法" style="--editor-height: 400px">
  <code path="demo.html" preview active>
    <template>
      <link rel="stylesheet" href="https://punch-ui-v2.pages.dev/packages/css/pui-global.css" />
      <l-m src="https://punch-ui-v2.pages.dev/packages/navigation/nav-bar.html"></l-m>
      <l-m src="https://punch-ui-v2.pages.dev/packages/navigation/nav-item.html"></l-m>
      <div style="padding: 20px;">
        <p-nav-bar>
          <p-nav-item active>首页</p-nav-item>
          <p-nav-item>产品</p-nav-item>
          <p-nav-item>关于</p-nav-item>
        </p-nav-bar>
      </div>
    </template>
  </code>
</o-playground>

## API

### 属性

| 属性 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| `active` | 是否激活 | `boolean` | `false` |
