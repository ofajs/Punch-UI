# Navigation

Navigation 组件包提供了导航栏、导航项和导航布局组件，用于构建响应式的应用导航系统。

## 引用组件

Punch UI 的导航组件依赖于 ofa.js，请先加载 ofa.js，然后通过 `l-m` 标签引入组件：

```html
<!-- 引入ofa.js -->
<script
  src="https://cdn.jsdelivr.net/gh/ofajs/ofa.js/dist/ofa.min.mjs"
  type="module"
></script>

<!-- 引入导航栏组件 -->
<l-m src="https://punch-ui-v2.pages.dev/packages/navigation/nav-bar.html"></l-m>
```

## 基本用法

### 导航栏 (Nav Bar)

`p-nav-bar` 是导航栏容器，包含多个 `p-nav-item` 导航项：

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

### 垂直导航栏

通过设置 `flex-direction: column` 可以创建垂直导航栏：

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

### 标签平行模式

通过设置 CSS 变量 `--label-parallel: true`，可以使图标和标签水平排列：

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

### 禁用状态

为 `p-nav-item` 添加 `disabled` 属性可以禁用导航项：

```html
<p-nav-item disabled>
  <span slot="icon">⚙️</span>
  <span>Settings</span>
</p-nav-item>
```

## 导航布局 (Nav Layout)

`p-nav-layout` 是一个响应式导航布局组件，会根据容器宽度自动调整导航栏的样式和位置：

```html
<l-m src="https://punch-ui-v2.pages.dev/packages/navigation/nav-layout.html"></l-m>

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

`p-nav-layout` 会根据容器宽度自动调整：

- **移动端 (< 768px)**：底部导航栏，图标和标签垂直排列
- **平板 (768px - 1024px)**：底部导航栏，图标和标签水平排列
- **桌面端 (> 1024px)**：左侧垂直导航栏

## 组件

### p-nav-bar

导航栏容器组件，用于包含和管理多个导航项。

### p-nav-item

导航项组件，表示单个导航选项。

### p-nav-layout

响应式导航布局组件，自动适配不同屏幕尺寸。

## 属性

### p-nav-item

| 属性    | 类型    | 默认值 | 说明               |
| ------- | ------- | ------ | ------------------ |
| active  | boolean | -      | 是否为激活状态     |
| disabled| boolean | -      | 是否禁用           |

## 插槽

### p-nav-bar

| 插槽名  | 说明                   |
| ------- | ---------------------- |
| default | 包含的 p-nav-item 元素 |

### p-nav-item

| 插槽名  | 说明       |
| ------- | ---------- |
| icon    | 导航项图标 |
| default | 导航项标签 |

### p-nav-layout

| 插槽名  | 说明               |
| ------- | ------------------ |
| default | 主内容区域         |
| nav     | 导航栏（p-nav-bar）|

## CSS 变量

### p-nav-bar

| 变量名           | 类型    | 默认值  | 说明                             |
| ---------------- | ------- | ------- | -------------------------------- |
| --label-parallel | boolean | `false` | 图标和标签是否水平排列           |

## 事件

### p-nav-item

| 事件名        | 说明                 |
| ------------- | -------------------- |
| change-active | 激活状态改变时触发   |
| click         | 点击导航项时触发     |

## 完整示例

### 创建页面模块 (my-page.html)

```html
<template page>
  <l-m src="https://punch-ui-v2.pages.dev/packages/navigation/nav-layout.html"></l-m>
  <l-m src="https://punch-ui-v2.pages.dev/packages/navigation/nav-bar.html"></l-m>
  <l-m src="https://punch-ui-v2.pages.dev/packages/navigation/nav-item.html"></l-m>
  
  <style>
    :host {
      display: block;
      width: 1280px;
      height: 720px;
    }
  </style>

  <p-nav-layout>
    <div style="padding: 20px;">
      <h1>My App</h1>
      <p>Current page: {{active}}</p>
    </div>
    
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
      <p-nav-item attr:active="active === 'settings'" on:click="active = 'settings'" disabled>
        <span slot="icon">⚙️</span>
        <span>Settings</span>
      </p-nav-item>
    </p-nav-bar>
  </p-nav-layout>

  <script>
    export default async () => {
      return {
        data: {
          active: 'home'
        }
      };
    };
  </script>
</template>
```

### 使用页面模块

```html
<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Navigation Demo</title>
  <script src="https://cdn.jsdelivr.net/gh/ofajs/ofa.js/dist/ofa.min.mjs" type="module"></script>
  <link rel="stylesheet" href="https://punch-ui-v2.pages.dev/packages/css/pui-global.css" />
</head>
<body>
  <o-page src="./my-page.html"></o-page>
</body>
</html>
```
