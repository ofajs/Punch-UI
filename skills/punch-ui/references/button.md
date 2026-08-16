# Button 按钮组件

## 引入组件

```html
<l-m src="https://punch-ui-v2.pages.dev/packages/button/button.html"></l-m>
```

## 基本用法

```html
<p-button>Simple Button</p-button>
```

## 尺寸

```html
<p-button size="xs">XS</p-button>
<p-button size="s">Small</p-button>
<p-button>Medium</p-button>
<p-button size="l">Large</p-button>
<p-button size="xl">XL</p-button>
```

## 颜色

```html
<p-button>Default</p-button>
<p-button color="primary">Primary</p-button>
<p-button color="error">Error</p-button>
<p-button color="success">Success</p-button>
<p-button color="neutral">Neutral</p-button>
```

## 变体

```html
<p-button variant="outlined" color="primary">Primary Outlined</p-button>
<p-button variant="outlined" color="error">Error Outlined</p-button>
<p-button variant="outlined" color="success">Success Outlined</p-button>
<p-button variant="text">Text</p-button>
```

## Button Group

```html
<l-m src="https://punch-ui-v2.pages.dev/packages/button/group.html"></l-m>

<p-button-group>
  <p-button>按钮 1</p-button>
  <p-button>按钮 2</p-button>
  <p-button>按钮 3</p-button>
</p-button-group>

<p-button-group connected>
  <p-button variant="outlined">首页</p-button>
  <p-button variant="outlined">产品</p-button>
  <p-button variant="outlined">关于</p-button>
</p-button-group>
```

### 全宽按钮组

添加 `full-width` 属性使按钮组占满宽度：

```html
<p-button-group full-width>
  <p-button>Left</p-button>
  <p-button>Center</p-button>
  <p-button>Right</p-button>
</p-button-group>
```

## 图标按钮

添加 `icon` 属性使按钮成为圆形图标按钮：

```html
<p-button icon>+</p-button>
<p-button icon size="s">-</p-button>
<p-button icon size="l">×</p-button>
```

## 带前缀/后缀

使用 `prefix` 和 `suffix` 插槽添加图标或文本：

```html
<p-button>
  <span slot="prefix">🔍</span>
  Search
</p-button>
<p-button>
  Settings
  <span slot="suffix">⚙️</span>
</p-button>
```

## 自动聚焦

添加 `autofocus` 属性使按钮在页面加载时自动聚焦：

```html
<p-button autofocus>Autofocus Button</p-button>
```

## 自定义样式

可以通过 `style` 属性自定义宽度、圆角等：

```html
<p-button style="width: 200px">Custom Width</p-button>
<p-button style="border-radius: 8px">Custom Style</p-button>
```

## 高级用法

### 分段控制器（单选）

使用按钮组实现分段控制器效果，适合用于视图切换等场景：

```html
<l-m src="https://punch-ui-v2.pages.dev/packages/button/group.html"></l-m>

<p-button-group>
  <p-button
    attr:variant="selected === 'day' ? 'filled' : 'outlined'"
    on:click="selected = 'day'"
  >
    Day
  </p-button>
  <p-button
    attr:variant="selected === 'week' ? 'filled' : 'outlined'"
    on:click="selected = 'week'"
  >
    Week
  </p-button>
  <p-button
    attr:variant="selected === 'month' ? 'filled' : 'outlined'"
    on:click="selected = 'month'"
  >
    Month
  </p-button>
</p-button-group>

<script>
  export default async () => {
    return {
      data: {
        selected: "week",
      },
    };
  };
</script>
```

### 筛选标签（多选）

实现可多选的筛选标签，适合用于过滤条件选择：

```html
<p-button-group>
  <p-button
    attr:color="filters.includes('all') ? 'primary' : 'neutral'"
    :style.border-radius="filters.includes('all') ? '28px' : ''"
    on:click="toggleFilter('all')"
  >
    All
  </p-button>
  <p-button
    attr:color="filters.includes('active') ? 'primary' : 'neutral'"
    :style.border-radius="filters.includes('active') ? '28px' : ''"
    on:click="toggleFilter('active')"
  >
    Active
  </p-button>
  <p-button
    attr:color="filters.includes('completed') ? 'primary' : 'neutral'"
    :style.border-radius="filters.includes('completed') ? '28px' : ''"
    on:click="toggleFilter('completed')"
  >
    Completed
  </p-button>
</p-button-group>

<script>
  export default async () => {
    return {
      data: {
        filters: ["all"],
      },
      proto: {
        toggleFilter(filter) {
          if (this.filters.includes(filter)) {
            if (this.filters.length > 1) {
              this.filters = this.filters.filter((f) => f !== filter);
            }
          } else {
            this.filters = [...this.filters, filter];
          }
        },
      },
    };
  };
</script>
```

### 排序选项

实现单选的排序选项，选中时改变颜色和圆角：

```html
<p-button-group>
  <p-button
    attr:color="order === 'newest' ? 'primary' : 'neutral'"
    :style.border-radius="order === 'newest' ? '28px' : ''"
    on:click="order = 'newest'"
  >
    Newest
  </p-button>
  <p-button
    attr:color="order === 'oldest' ? 'primary' : 'neutral'"
    :style.border-radius="order === 'oldest' ? '28px' : ''"
    on:click="order = 'oldest'"
  >
    Oldest
  </p-button>
  <p-button
    attr:color="order === 'price' ? 'primary' : 'neutral'"
    :style.border-radius="order === 'price' ? '28px' : ''"
    on:click="order = 'price'"
  >
    Price
  </p-button>
</p-button-group>

<script>
  export default async () => {
    return {
      data: {
        order: "newest",
      },
    };
  };
</script>
```

## Split Button 分段按钮

「主操作 + 次操作下拉」的组合按钮，外形与 p-button 一致（胶囊、尺寸/变体/颜色系统相同）：

```html
<l-m src="https://punch-ui-v2.pages.dev/packages/button/split-button.html"></l-m>
<l-m src="https://punch-ui-v2.pages.dev/packages/menu/menu-item.html"></l-m>

<p-split-button variant="outlined" size="s" on:click="openImport">
  <span slot="prefix">✨</span>
  <span>AI 导入</span>
  <div slot="menu">
    <p-menu-item on:click="openGroup">
      <span slot="prefix">🗂️</span>
      <span>AI 分组</span>
    </p-menu-item>
  </div>
</p-split-button>
```

### 交互约定

- 主区域点击 → 正常冒泡组件 `click`（`on:click` 直接绑主操作）
- caret 区域点击 → 开/关菜单，不会触发主操作（stopPropagation）
- 菜单内任意点击 → 自动关闭，item 的 `on:click` 正常触发（light DOM，绑页面作用域）
- 点击组件外部 / `Esc` → 关闭菜单
- 菜单打开时 caret 图标旋转 180°（带过渡）

### 属性

- `variant` - `filled`（默认）/ `outlined` / `text` / `tonal`
- `size` - `xs` / `s` / 默认 / `l` / `xl`（与 p-button 完全一致）
- `color` - `primary`（默认）/ `success` / `error` / `neutral`
- `disabled` - 布尔属性，主区与 caret 区同时禁用
- `open` - 菜单开合状态，支持 `sync:open` 受控使用
- `menu-align` - 菜单对齐方向，`left` / `right`（默认 `right`）

### 插槽

- `prefix` - 主按钮前置图标
- `default` - 主按钮文字
- `menu` - 下拉菜单内容（推荐放 `p-menu-item`）

### 受控开合

```html
<p-split-button sync:open="splitOpen" variant="tonal">
  <span>受控菜单</span>
  <div slot="menu">
    <p-menu-item>菜单项 A</p-menu-item>
  </div>
</p-split-button>
<p-button size="s" variant="outlined" on:click="splitOpen = !splitOpen">
  外部切换
</p-button>
```

## 主要属性

### p-button

- `variant` - 按钮样式
- `size` - 按钮尺寸
- `color` - 按钮颜色
- `disabled` - 是否禁用
- `icon` - 是否为图标按钮
- `autofocus` - 是否自动聚焦

### p-button-group

- `connected` - 是否连接样式
- `full-width` - 是否占满宽度

## 插槽

### p-button

- `prefix` - 内容前缀
- `default` - 按钮内容
- `suffix` - 内容后缀

### p-button-group

- `default` - 包含的 p-button 元素
