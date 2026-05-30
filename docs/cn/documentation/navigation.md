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

### 自动适配窗口

组件内置容器查询机制，能够根据容器宽度智能调整布局：

- **移动端（< 768px）**：导航栏位于底部，采用垂直布局，图标和文字上下排列
- **平板端（768px - 1024px）**：导航栏位于底部，自动切换为标签平行模式，图标和文字左右排列
- **桌面端（≥ 1024px）**：导航栏自动移至左侧，采用垂直布局，提供更宽敞的内容展示空间

这种自适应设计确保了在不同设备上都能获得最佳的用户体验，无需手动编写响应式代码。

### 引入组件

```html
<l-m src="https://punch-ui-v2.pages.dev/packages/navigation/nav-layout.html"></l-m>
```

### 基本用法

<o-playground name="导航布局" style="--editor-height: 600px">
  <code path="demo.html" active>
    <template page>
      <link rel="stylesheet" href="https://punch-ui-v2.pages.dev/packages/css/pui-global.css" />
      <l-m src="https://punch-ui-v2.pages.dev/packages/navigation/nav-layout.html"></l-m>
      <l-m src="https://punch-ui-v2.pages.dev/packages/navigation/nav-bar.html"></l-m>
      <l-m src="https://punch-ui-v2.pages.dev/packages/navigation/nav-item.html"></l-m>
      <div style="height: 100%;">
        <p-nav-layout>
          <div style="padding: 20px;">
            <o-if :value="active === 'home'">
              <h1>首页</h1>
              <p>这里是首页内容...</p>
            </o-if>
            <o-if :value="active === 'bookmarks'">
              <h1>书签</h1>
              <p>这里是书签内容...</p>
            </o-if>
            <o-if :value="active === 'about'">
              <h1>关于</h1>
              <p>这里是关于内容...</p>
            </o-if>
          </div>
          <p-nav-bar slot="nav">
            <p-nav-item attr:active="active === 'home'" on:click="active = 'home'">
              <span slot="icon">🏠</span>
              <span>首页</span>
            </p-nav-item>
            <p-nav-item attr:active="active === 'bookmarks'" on:click="active = 'bookmarks'">
              <span slot="icon">📑</span>
              <span>书签</span>
            </p-nav-item>
            <p-nav-item attr:active="active === 'about'" on:click="active = 'about'">
              <span slot="icon">👤</span>
              <span>关于</span>
            </p-nav-item>
          </p-nav-bar>
        </p-nav-layout>
      </div>
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
