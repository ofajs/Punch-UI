# Navigation 导航

导航组件包提供了导航栏、导航项和导航布局组件，用于构建响应式的应用导航系统。

## 引入组件

```html
<l-m src="https://punch-ui-v2.pages.dev/packages/navigation/nav-bar.html"></l-m>
```

## 基本用法 - 导航栏

<o-playground name="Navigation 基本用法" style="--editor-height: 400px">
  <code path="demo.html" preview active>
    <template>
      <link rel="stylesheet" href="https://punch-ui-v2.pages.dev/packages/css/pui-global.css" />
      <l-m src="https://punch-ui-v2.pages.dev/packages/navigation/nav-bar.html"></l-m>
      <l-m src="https://punch-ui-v2.pages.dev/packages/navigation/nav-item.html"></l-m>
      <div style="padding: 20px;">
        <p-nav-bar>
          <p-nav-item active>
            <span slot="icon">🏠</span>
            <span>首页</span>
          </p-nav-item>
          <p-nav-item>
            <span slot="icon">📑</span>
            <span>书签</span>
          </p-nav-item>
          <p-nav-item>
            <span slot="icon">👤</span>
            <span>关于</span>
          </p-nav-item>
        </p-nav-bar>
      </div>
    </template>
  </code>
</o-playground>

## 垂直导航栏

<o-playground name="垂直导航栏" style="--editor-height: 500px">
  <code path="demo.html" preview active>
    <template>
      <link rel="stylesheet" href="https://punch-ui-v2.pages.dev/packages/css/pui-global.css" />
      <l-m src="https://punch-ui-v2.pages.dev/packages/navigation/nav-bar.html"></l-m>
      <l-m src="https://punch-ui-v2.pages.dev/packages/navigation/nav-item.html"></l-m>
      <div style="padding: 20px;">
        <p-nav-bar style="height: 400px; display: inline-flex; flex-direction: column">
          <p-nav-item active>
            <span slot="icon">🏠</span>
            <span>首页</span>
          </p-nav-item>
          <p-nav-item>
            <span slot="icon">⚙️</span>
            <span>设置</span>
          </p-nav-item>
          <p-nav-item>
            <span slot="icon">👤</span>
            <span>关于</span>
          </p-nav-item>
        </p-nav-bar>
      </div>
    </template>
  </code>
</o-playground>

## 标签平行模式

<o-playground name="标签平行模式" style="--editor-height: 400px">
  <code path="demo.html" preview active>
    <template>
      <link rel="stylesheet" href="https://punch-ui-v2.pages.dev/packages/css/pui-global.css" />
      <l-m src="https://punch-ui-v2.pages.dev/packages/navigation/nav-bar.html"></l-m>
      <l-m src="https://punch-ui-v2.pages.dev/packages/navigation/nav-item.html"></l-m>
      <div style="padding: 20px;">
        <p-nav-bar style="--label-parallel: true; padding: 8px 12px;">
          <p-nav-item active>
            <span slot="icon">🏠</span>
            <span>首页</span>
          </p-nav-item>
          <p-nav-item>
            <span slot="icon">👤</span>
            <span>关于</span>
          </p-nav-item>
        </p-nav-bar>
      </div>
    </template>
  </code>
</o-playground>

## 禁用状态

<o-playground name="禁用状态" style="--editor-height: 400px">
  <code path="demo.html" preview active>
    <template>
      <link rel="stylesheet" href="https://punch-ui-v2.pages.dev/packages/css/pui-global.css" />
      <l-m src="https://punch-ui-v2.pages.dev/packages/navigation/nav-bar.html"></l-m>
      <l-m src="https://punch-ui-v2.pages.dev/packages/navigation/nav-item.html"></l-m>
      <div style="padding: 20px;">
        <p-nav-bar>
          <p-nav-item active>
            <span slot="icon">🏠</span>
            <span>首页</span>
          </p-nav-item>
          <p-nav-item disabled>
            <span slot="icon">⚙️</span>
            <span>设置</span>
          </p-nav-item>
          <p-nav-item>
            <span slot="icon">👤</span>
            <span>关于</span>
          </p-nav-item>
        </p-nav-bar>
      </div>
    </template>
  </code>
</o-playground>

## 导航布局 (Nav Layout)

`p-nav-layout` 是一个响应式导航布局组件，会根据容器宽度自动调整导航栏的样式和位置。

### 引入组件

```html
<l-m src="https://punch-ui-v2.pages.dev/packages/navigation/nav-layout.html"></l-m>
```

### 基本用法

<o-playground name="导航布局" style="--editor-height: 600px">
  <code path="demo.html" preview active>
    <template>
      <link rel="stylesheet" href="https://punch-ui-v2.pages.dev/packages/css/pui-global.css" />
      <l-m src="https://punch-ui-v2.pages.dev/packages/navigation/nav-layout.html"></l-m>
      <l-m src="https://punch-ui-v2.pages.dev/packages/navigation/nav-bar.html"></l-m>
      <l-m src="https://punch-ui-v2.pages.dev/packages/navigation/nav-item.html"></l-m>
      <div style="padding: 20px; height: 500px;">
        <p-nav-layout>
          <div style="padding: 20px;">
            <h1>主内容区域</h1>
            <p>这里是主要内容...</p>
          </div>
          
          <p-nav-bar slot="nav">
            <p-nav-item active>
              <span slot="icon">🏠</span>
              <span>首页</span>
            </p-nav-item>
            <p-nav-item>
              <span slot="icon">📑</span>
              <span>书签</span>
            </p-nav-item>
            <p-nav-item>
              <span slot="icon">👤</span>
              <span>关于</span>
            </p-nav-item>
          </p-nav-bar>
        </p-nav-layout>
      </div>
    </template>
  </code>
</o-playground>

## API

### 属性 - p-nav-item

| 属性 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| `active` | 是否激活 | `boolean` | `false` |
| `disabled` | 是否禁用 | `boolean` | `false` |

### 插槽 - p-nav-bar

| 插槽名 | 说明 |
|--------|------|
| `default` | 包含的 p-nav-item 元素 |

### 插槽 - p-nav-item

| 插槽名 | 说明 |
|--------|------|
| `default` | 导航项文本 |
| `icon` | 导航项图标 |
