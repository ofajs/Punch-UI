# Tabs

Tabs 组件包提供了标签栏和标签项组件，用于在多个内容区域之间切换。

## 引用组件

Punch UI 的标签组件依赖于 ofa.js，请先加载 ofa.js，然后通过 `l-m` 标签引入组件：

```html
<!-- 引入ofa.js -->
<script
  src="https://cdn.jsdelivr.net/gh/ofajs/ofa.js/dist/ofa.min.mjs"
  type="module"
></script>

<!-- 引入标签栏组件 -->
<l-m src="https://punch-ui-v2.pages.dev/packages/tabs/tab-bar.html"></l-m>
```

## 基本用法

### 标签栏 (Tab Bar)

`p-tab-bar` 是标签栏容器，包含多个 `p-tab-item` 标签项：

```html
<p-tab-bar>
  <p-tab-item attr:active="active === 'home'" on:click="active = 'home'">
    <span>Home</span>
  </p-tab-item>
  <p-tab-item attr:active="active === 'about'" on:click="active = 'about'">
    <span>About</span>
  </p-tab-item>
  <p-tab-item attr:active="active === 'settings'" on:click="active = 'settings'">
    <span>Settings</span>
  </p-tab-item>
</p-tab-bar>
```

### 带图标的标签

为 `p-tab-item` 添加 `slot="icon"` 的元素可以显示图标：

```html
<p-tab-bar>
  <p-tab-item attr:active="active === 'home'" on:click="active = 'home'">
    <iconify-icon icon="mdi:home" slot="icon"></iconify-icon>
    <span>Home</span>
  </p-tab-item>
  <p-tab-item attr:active="active === 'bookmarks'" on:click="active = 'bookmarks'">
    <iconify-icon icon="material-symbols:bookmark-star-outline" slot="icon"></iconify-icon>
    <span>Bookmarks</span>
  </p-tab-item>
  <p-tab-item attr:active="active === 'about'" on:click="active = 'about'">
    <iconify-icon icon="mdi:account" slot="icon"></iconify-icon>
    <span>About</span>
  </p-tab-item>
</p-tab-bar>
```

### 禁用状态

为 `p-tab-item` 添加 `disabled` 属性可以禁用标签项：

```html
<p-tab-item disabled>
  <iconify-icon icon="mdi:settings" slot="icon"></iconify-icon>
  <span>Settings</span>
</p-tab-item>
```

### 可滚动的标签栏

当标签项过多时，可以为标签栏添加滚动功能：

```html
<p-tab-bar style="overflow-x: auto">
  <p-tab-item attr:active="active === 'tab1'" on:click="active = 'tab1'">
    <span>Tab One</span>
  </p-tab-item>
  <p-tab-item attr:active="active === 'tab2'" on:click="active = 'tab2'">
    <span>Tab Two</span>
  </p-tab-item>
  <!-- 更多标签项... -->
</p-tab-bar>
```

## 组件说明

### p-tab-bar

标签栏容器组件，负责管理标签项的激活状态和指示器动画。

**特性：**
- 自动跟踪激活的标签项
- 平滑的指示器动画效果
- 响应式布局支持

### p-tab-item

标签项组件，表示单个标签。

**属性：**
- `active`: 激活状态，添加此属性表示标签处于激活状态
- `disabled`: 禁用状态，添加此属性表示标签被禁用

**插槽：**
- 默认插槽: 标签文本内容
- `icon` 插槽: 标签图标（可选）

## 样式定制

标签组件使用 Material Design 3 的颜色系统，可以通过 CSS 变量自定义颜色：

```css
p-tab-bar {
  --md-sys-color-primary: #6750A4;
  --md-sys-color-on-surface: #1C1B1F;
  --md-sys-color-on-surface-variant: #49454F;
}
```

## 示例

查看 [demo/index.html](./demo/index.html) 获取更多使用示例。
