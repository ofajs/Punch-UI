# List

## 引用组件

Punch UI的列表组件依赖于 ofa.js，请先加载 ofa.js，然后通过 `l-m` 标签引入列表组件：

```html
<!-- 引入ofa.js -->
<script
  src="https://cdn.jsdelivr.net/gh/ofajs/ofa.js/dist/ofa.min.mjs"
  type="module"
></script>

<!-- 引入列表组件 -->
<l-m src="https://punch-ui-v2.pages.dev/packages/list/list.html"></l-m>
```

## 基本用法

```html
<p-list>
  <p-list-item>Single-line item</p-list-item>
  <p-list-item>Single-line item</p-list-item>
  <p-list-item>Single-line item</p-list-item>
</p-list>
```

## 带前缀图标

使用 `prefix` 插槽添加前缀图标或头像：

```html
<p-list>
  <p-list-item>
    <span slot="prefix" class="avatar">A</span>
    Single-line item
  </p-list-item>
  <p-list-item>
    <span slot="prefix" class="avatar">B</span>
    Single-line item
  </p-list-item>
</p-list>
```

## 带前缀图片

使用图片作为前缀：

```html
<p-list>
  <p-list-item>
    <div slot="prefix" class="avatar-img"></div>
    Single-line item
  </p-list-item>
</p-list>
```

## 两行列表

添加 `secondary` 属性的元素显示第二行文本：

```html
<p-list>
  <p-list-item>
    <span slot="prefix" class="avatar">A</span>
    Two-line item
    <div secondary>Secondary text</div>
  </p-list-item>
</p-list>
```

## 带后缀

使用 `suffix` 插槽添加后缀内容：

```html
<p-list>
  <p-list-item>
    Item with suffix
    <span slot="suffix">›</span>
  </p-list-item>
</p-list>
```

## 带缩略图

使用大尺寸头像或缩略图作为前缀：

```html
<p-list>
  <p-list-item>
    <div
      slot="prefix"
      style="
        width: 56px;
        height: 56px;
        border-radius: 12px;
        background-color: var(--md-sys-color-primary-container);
        color: var(--md-sys-color-on-primary-container);
        display: flex;
        align-items: center;
        justify-content: center;
      "
    >
      A
    </div>
    Item with thumbnail
  </p-list-item>
</p-list>
```

## 文本省略

使用 `ellipsis` 属性控制文本省略：

```html
<p-list>
  <p-list-item>
    <span ellipsis="1">Single line with ellipsis</span>
  </p-list-item>
  <p-list-item>
    <span ellipsis="2"
      >Two lines with ellipsis - this text will be truncated after two
      lines</span
    >
  </p-list-item>
</p-list>
```

## 列表项变体

通过 `variant` 属性设置列表项样式：

```html
<p-list>
  <p-list-item variant="outlined">Outlined Item</p-list-item>
  <p-list-item variant="text">Text Item</p-list-item>
</p-list>
```

## 颜色

通过 `color` 属性设置列表项颜色：

```html
<p-list>
  <p-list-item color="primary">Primary Item</p-list-item>
  <p-list-item color="error">Error Item</p-list-item>
  <p-list-item color="success">Success Item</p-list-item>
</p-list>
```

## 禁用状态

添加 `disabled` 属性禁用列表项：

```html
<p-list-item disabled>Disabled Item</p-list-item>
```

## 选中状态

添加 `active` 属性设置列表项为选中状态：

```html
<p-list>
  <p-list-item>Normal Item</p-list-item>
  <p-list-item active>Active Item</p-list-item>
</p-list>
```

## 顶部对齐

添加 `align-top` 属性使内容顶部对齐：

```html
<p-list-item align-top>
  <div slot="prefix" class="avatar">A</div>
  Top aligned content
  <div secondary>Secondary text</div>
</p-list-item>
```

## 按钮列表项

添加 `button` 属性将列表项转换为可点击的按钮：

```html
<p-list-item button="button-selector"> Clickable Item </p-list-item>
<button id="button-selector">Action</button>
```

## 分隔线

在列表中使用 `<hr>` 元素添加分隔线：

```html
<p-list>
  <p-list-item>Item 1</p-list-item>
  <hr />
  <p-list-item>Item 2</p-list-item>
  <hr />
  <p-list-item>Item 3</p-list-item>
</p-list>
```

## 可折叠列表项

使用 `collapsible` 属性使列表项可折叠展开，配合 `expanded` 属性控制展开状态：

```html
<p-list>
  <p-list-item collapsible expanded>
    <span slot="prefix">📁</span>
    Expandable Item
    <p-list slot="sublist">
      <p-list-item>Sub-item 1</p-list-item>
      <p-list-item>Sub-item 2</p-list-item>
    </p-list>
  </p-list-item>
</p-list>
```

### 自定义展开图标

使用 `expand-icon` 插槽自定义展开/折叠图标：

```html
<p-list-item collapsible>
  <span slot="prefix">📁</span>
  Item with custom icon
  <div slot="expand-icon" style="font-size: 18px">▾</div>
  <p-list slot="sublist">
    <p-list-item>Sub-item 1</p-list-item>
    <p-list-item>Sub-item 2</p-list-item>
  </p-list>
</p-list-item>
```

### 使用 CSS 变量控制缩进

通过 `--sublist-indent` CSS 变量控制子列表的缩进：

```html
<p-list>
  <p-list-item collapsible expanded>
    <span slot="prefix">📁</span>
    Expandable Item
    <p-list slot="sublist" style="--sublist-indent: 16px">
      <p-list-item>Sub-item 1</p-list-item>
      <p-list-item>Sub-item 2</p-list-item>
    </p-list>
  </p-list-item>
</p-list>
```

## 属性

### p-list

| 属性 | 类型 | 默认值 | 说明 |
| ---- | ---- | ------ | ---- |
| -    | -    | -      | -    |

### p-list-item

| 属性        | 类型                                           | 默认值 | 说明                 |
| ----------- | ---------------------------------------------- | ------ | -------------------- |
| variant     | `filled` \| `tonal` \| `outlined` \| `text`    | `text` | 列表项样式           |
| color       | `primary` \| `error` \| `success` \| `neutral` | -      | 列表项颜色           |
| disabled    | boolean                                        | -      | 是否禁用             |
| align-top   | boolean                                        | -      | 是否顶部对齐         |
| button      | string                                         | -      | 点击后触发选择器     |
| collapsible | boolean                                        | -      | 是否可折叠           |
| expanded    | boolean                                        | -      | 是否展开（可折叠项） |

## 插槽

### p-list

| 插槽名  | 说明                    |
| ------- | ----------------------- |
| default | 包含的 p-list-item 元素 |

### p-list-item

| 插槽名      | 说明          |
| ----------- | ------------- |
| prefix      | 前缀内容      |
| default     | 列表项主内容  |
| suffix      | 后缀内容      |
| sublist     | 子列表内容    |
| expand-icon | 展开/折叠图标 |

## 事件

### p-list-item

| 事件名     | 说明                   | 事件对象     |
| ---------- | ---------------------- | ------------ |
| click-main | 点击列表项主区域时触发 | PointerEvent |

`click-main` 事件在点击列表项主区域时触发（点击子列表项不触发），可用于自定义点击行为处理。

```html
<p-list>
  <p-list-item button on:click-main="handleItemClick">
    <span slot="prefix">👤</span>
    <div>Click me</div>
  </p-list-item>
</p-list>
```

```js
export default {
  proto: {
    handleItemClick(e) {
      console.log("List item clicked!", e);
    },
  },
};
```

## 作为选择组件使用

列表组件可以通过配合 CSS 实现选择器功能，需要配合 CSS 使用。

### 单选列表

使用 `class:active` 控制选中状态，配合 `button` 属性实现点击切换。

```html
<style>
  p-list-item {
    background-color: rgba(from var(--md-sys-color-neutral) r g b / 0.1);
    transition:
      border-radius ease 0.3s,
      background-color ease 0.1s;
  }

  p-list-item.active {
    background-color: var(--md-sys-color-primary);
    border-radius: 12px;
  }

  p-list-item.active div {
    color: var(--md-sys-color-on-primary);
  }
</style>

<p-list>
  <p-list-item
    class:active="selected === 'account'"
    on:click="selected = 'account'"
    button
  >
    <span slot="prefix" class="icon">👤</span>
    <div>Account</div>
  </p-list-item>
  <p-list-item
    class:active="selected === 'notifications'"
    on:click="selected = 'notifications'"
    button
  >
    <span slot="prefix" class="icon">🔔</span>
    <div>Notifications</div>
  </p-list-item>
  <!-- more items... -->
</p-list>
```

### 多选列表

使用数组存储选中项，通过 `filters.includes()` 判断是否选中。

```html
<p-list>
  <p-list-item
    class:active="filters.includes('all')"
    on:click="toggleFilter('all')"
    button
  >
    <span slot="prefix" class="icon">📁</span>
    <div>All</div>
  </p-list-item>
  <p-list-item
    class:active="filters.includes('electronics')"
    on:click="toggleFilter('electronics')"
    button
  >
    <span slot="prefix" class="icon">📱</span>
    <div>Electronics</div>
  </p-list-item>
  <!-- more items... -->
</p-list>
```

```js
export default {
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
```
