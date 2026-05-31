# Navigation 导航组件

Navigation 组件包提供了导航栏、导航项和导航布局组件，用于构建响应式的应用导航系统。

## 引入组件

```html
<l-m src="https://punch-ui-v2.pages.dev/packages/navigation/nav-bar.html"></l-m>
```

## 基本用法 - 导航栏

```html
<p-nav-bar>
  <p-nav-item attr:active="active === 'home'" on:click="active = 'home'">
    <span slot="icon">🏠</span>
    <span>Home</span>
  </p-nav-item>
  <p-nav-item attr:active="active === 'bookmarks'" on:click="active = 'bookmarks'">
    <span slot="icon">📑</span>
    <span>Bookmarks</span>
  </p-nav-item>
  <p-nav-item attr:active="active === 'about'" on:click="active = 'about'">
    <span slot="icon">👤</span>
    <span>About</span>
  </p-nav-item>
</p-nav-bar>
```

## 垂直导航栏

```html
<p-nav-bar style="height: 400px; display: inline-flex; flex-direction: column">
  <p-nav-item attr:active="active === 'home'" on:click="active = 'home'">
    <span slot="icon">🏠</span>
    <span>Home</span>
  </p-nav-item>
  <p-nav-item attr:active="active === 'settings'" on:click="active = 'settings'">
    <span slot="icon">⚙️</span>
    <span>Settings</span>
  </p-nav-item>
</p-nav-bar>
```

## 标签平行模式

```html
<p-nav-bar style="--label-parallel: true; padding: 8px 12px;">
  <p-nav-item attr:active="active === 'home'" on:click="active = 'home'">
    <span slot="icon">🏠</span>
    <span>Home</span>
  </p-nav-item>
  <p-nav-item attr:active="active === 'about'" on:click="active = 'about'">
    <span slot="icon">👤</span>
    <span>About</span>
  </p-nav-item>
</p-nav-bar>
```

## 禁用状态

```html
<p-nav-item disabled>
  <span slot="icon">⚙️</span>
  <span>Settings</span>
</p-nav-item>
```

## 导航布局 (Nav Layout)

`p-nav-layout` 是一个响应式导航布局组件，会根据容器宽度自动调整导航栏的样式和位置。

### 引入组件

```html
<l-m src="https://punch-ui-v2.pages.dev/packages/navigation/nav-layout.html"></l-m>
```

### 基本用法

```html
<p-nav-layout>
  <!-- 主内容区域 -->
  <div>
    <h1>Main Content</h1>
    <p>Your content goes here...</p>
  </div>
  
  <!-- 导航栏 -->
  <p-nav-bar slot="nav">
    <p-nav-item attr:active="active === 'home'" on:click="active = 'home'">
      <span slot="icon">🏠</span>
      <span>Home</span>
    </p-nav-item>
    <p-nav-item attr:active="active === 'bookmarks'" on:click="active = 'bookmarks'">
      <span slot="icon">📑</span>
      <span>Bookmarks</span>
    </p-nav-item>
    <p-nav-item attr:active="active === 'about'" on:click="active = 'about'">
      <span slot="icon">👤</span>
      <span>About</span>
    </p-nav-item>
  </p-nav-bar>
</p-nav-layout>
```

### 响应式行为

`p-nav-layout` 使用 CSS Container Query 实现响应式布局，会根据容器宽度自动调整：

#### 移动端 (< 768px)
- 导航栏位于底部
- 图标和标签垂直排列
- 适合单手操作的底部导航模式

#### 平板 (768px - 1024px)
- 导航栏位于底部
- 图标和标签水平排列（自动启用 `--label-parallel: true`）
- 导航项间距适中，适合平板设备

#### 桌面端 (> 1024px)
- 导航栏位于左侧
- 垂直排列的导航项
- 图标和标签垂直排列
- 适合桌面应用的传统侧边导航

### 完整页面示例

```html
<!DOCTYPE html>
<html>
<head>
  <script src="https://cdn.jsdelivr.net/gh/ofajs/ofa.js/dist/ofa.min.mjs" type="module"></script>
  <l-m src="https://punch-ui-v2.pages.dev/packages/navigation/nav-layout.html"></l-m>
  <style>
    html, body {
      margin: 0;
      padding: 0;
      height: 100%;
    }
  </style>
</head>
<body>
  <p-nav-layout>
    <!-- 主内容 -->
    <div style="padding: 20px;">
      <h1>Welcome to My App</h1>
      <p>This is the main content area.</p>
    </div>
    
    <!-- 导航栏 -->
    <p-nav-bar slot="nav">
      <p-nav-item attr:active="active === 'home'" on:click="active = 'home'">
        <span slot="icon">🏠</span>
        <span>Home</span>
      </p-nav-item>
      <p-nav-item attr:active="active === 'search'" on:click="active = 'search'">
        <span slot="icon">🔍</span>
        <span>Search</span>
      </p-nav-item>
      <p-nav-item attr:active="active === 'profile'" on:click="active = 'profile'">
        <span slot="icon">👤</span>
        <span>Profile</span>
      </p-nav-item>
      <p-nav-item attr:active="active === 'settings'" on:click="active = 'settings'">
        <span slot="icon">⚙️</span>
        <span>Settings</span>
      </p-nav-item>
    </p-nav-bar>
  </p-nav-layout>
</body>
</html>
```

### 布局结构

`p-nav-layout` 的内部结构如下：

```
p-nav-layout
├── container (flex容器)
    ├── main (主内容区域)
    │   └── slot (默认插槽)
    └── nav (导航区域)
        └── slot="nav" (导航栏插槽)
```

### 自定义样式

可以通过 CSS 变量或直接样式来自定义导航布局：

```html
<style>
  p-nav-layout {
    --nav-background: var(--md-sys-color-surface);
  }
  
  p-nav-layout::part(nav) {
    background-color: var(--md-sys-color-primary-container);
  }
</style>
```

## 主要属性 - p-nav-item

- `active` - 是否为激活状态
- `disabled` - 是否禁用

## 插槽 - p-nav-bar

- `default` - 包含的 p-nav-item 元素

## 插槽 - p-nav-item

- `icon` - 导航项图标
- `default` - 导航项标签

## 插槽 - p-nav-layout

- `default` - 主内容区域
- `nav` - 导航栏

## CSS 变量 - p-nav-bar

- `--label-parallel` - 图标和标签是否水平排列

## 事件 - p-nav-item

- `change-active` - 激活状态改变时触发
- `click` - 点击导航项时触发
