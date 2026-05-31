# Tabs 标签组件

Tabs 组件包提供了标签栏和标签项组件，用于在多个内容区域之间切换。

## 引入组件

```html
<l-m src="https://punch-ui-v2.pages.dev/packages/tabs/tab-bar.html"></l-m>
```

## 基本用法 - 标签栏

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

## 带图标的标签

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

## 禁用状态

```html
<p-tab-item disabled>
  <iconify-icon icon="mdi:settings" slot="icon"></iconify-icon>
  <span>Settings</span>
</p-tab-item>
```

## 可滚动的标签栏

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

## 主要属性 - p-tab-item

- `active` - 是否为激活状态
- `disabled` - 是否禁用

## 插槽 - p-tab-bar

- `default` - 包含的 p-tab-item 元素

## 插槽 - p-tab-item

- `icon` - 标签图标（可选）
