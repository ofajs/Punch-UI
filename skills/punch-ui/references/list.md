# List 列表组件

## 引入组件

```html
<l-m src="https://punch-ui-v2.pages.dev/packages/list/list.html"></l-m>
```

## 基本列表

```html
<p-list>
  <p-list-item>单行列表项</p-list-item>
  <p-list-item>单行列表项</p-list-item>
  <p-list-item>单行列表项</p-list-item>
</p-list>
```

## 带前缀图标

```html
<p-list>
  <p-list-item>
    <span slot="prefix" style="width: 40px; height: 40px; border-radius: 50%; background-color: var(--md-sys-color-primary-container); color: var(--md-sys-color-on-primary-container); display: flex; align-items: center; justify-content: center;">A</span>
    用户名
    <div secondary>user@example.com</div>
  </p-list-item>
</p-list>
```

## 带后缀

```html
<p-list>
  <p-list-item>
    <span slot="prefix" style="width: 40px; height: 40px; border-radius: 50%; background-color: var(--md-sys-color-tertiary-container); color: var(--md-sys-color-on-tertiary-container); display: flex; align-items: center; justify-content: center;">C</span>
    列表项
    <span slot="suffix" style="color: var(--md-sys-color-on-surface-variant)">›</span>
  </p-list-item>
</p-list>
```

## 可折叠列表

### 基本折叠功能

使用 `collapsible` 属性使列表项可折叠，`expanded` 属性控制展开状态：

```html
<p-list>
  <p-list-item collapsible expanded>
    <span slot="prefix">📁</span>
    可展开的文件夹
    <div secondary>点击展开/折叠</div>
    <p-list slot="sublist">
      <p-list-item>
        <span slot="prefix">📄</span>
        子项目 1
      </p-list-item>
      <p-list-item>
        <span slot="prefix">📄</span>
        子项目 2
      </p-list-item>
    </p-list>
  </p-list-item>
  <p-list-item>
    <span slot="prefix">📄</span>
    普通列表项
  </p-list-item>
</p-list>
```

### 可点击的折叠项

添加 `button` 属性使折叠项可点击并显示涟漪效果：

```html
<p-list>
  <p-list-item collapsible expanded button>
    <span slot="prefix">📁</span>
    可点击的折叠项
    <div secondary>点击展开/折叠</div>
    <p-list slot="sublist">
      <p-list-item>
        <span slot="prefix">📄</span>
        子项目 1
      </p-list-item>
      <p-list-item>
        <span slot="prefix">📄</span>
        子项目 2
      </p-list-item>
    </p-list>
  </p-list-item>
</p-list>
```

### 自定义展开图标

使用 `expand-icon` 插槽自定义展开/折叠图标：

```html
<p-list>
  <p-list-item collapsible expanded>
    <span slot="prefix">📁</span>
    自定义图标
    <div secondary>使用自定义展开图标</div>
    <div slot="expand-icon" style="font-size: 18px">▾</div>
    <p-list slot="sublist">
      <p-list-item>子项目 1</p-list-item>
      <p-list-item>子项目 2</p-list-item>
    </p-list>
  </p-list-item>
  
  <p-list-item collapsible>
    <span slot="prefix">📁</span>
    使用 Iconify 图标
    <span slot="expand-icon" class="iconify" data-icon="mdi:chevron-down"></span>
    <p-list slot="sublist">
      <p-list-item>子项目 1</p-list-item>
      <p-list-item>子项目 2</p-list-item>
    </p-list>
  </p-list-item>
</p-list>
```

### 子列表缩进

使用 CSS 变量 `--sublist-indent` 控制子列表的缩进：

```html
<p-list>
  <p-list-item collapsible expanded>
    <span slot="prefix">📁</span>
    父级项目
    <p-list slot="sublist" style="--sublist-indent: 16px">
      <p-list-item>
        <span slot="prefix">📄</span>
        子项目 1
      </p-list-item>
      <p-list-item>
        <span slot="prefix">📄</span>
        子项目 2
      </p-list-item>
    </p-list>
  </p-list-item>
</p-list>
```

### 多层嵌套

支持无限层级的嵌套列表：

```html
<p-list>
  <p-list-item collapsible expanded>
    <span slot="prefix">📁</span>
    第一层
    <p-list slot="sublist">
      <p-list-item>
        <span slot="prefix">📄</span>
        第二层项目 1
      </p-list-item>
      <p-list-item expanded>
        <span slot="prefix">📁</span>
        第二层文件夹
        <p-list slot="sublist">
          <p-list-item>
            <span slot="prefix">📄</span>
            第三层项目 1
          </p-list-item>
          <p-list-item>
            <span slot="prefix">📄</span>
            第三层项目 2
          </p-list-item>
        </p-list>
      </p-list-item>
    </p-list>
  </p-list-item>
</p-list>
```

## 与表单组件结合

### 与 Checkbox 结合

使用 `button` 属性指定选择器，点击列表项会触发对应元素的点击事件：

```html
<l-m src="https://punch-ui-v2.pages.dev/packages/checkbox/checkbox.html"></l-m>
<l-m src="https://punch-ui-v2.pages.dev/packages/checkbox/group.html"></l-m>

<p-checkbox-group>
  <p-list>
    <p-list-item button="p-checkbox">
      <span slot="prefix">📧</span>
      点击整个列表项选中
      <div secondary>点击任意位置都会触发 checkbox</div>
      <p-checkbox slot="suffix"></p-checkbox>
    </p-list-item>
    <p-list-item button="p-checkbox">
      <span slot="prefix">📧</span>
      另一个选项
      <p-checkbox slot="suffix"></p-checkbox>
    </p-list-item>
  </p-list>
</p-checkbox-group>
```

### 与 Radio 结合

```html
<l-m src="https://punch-ui-v2.pages.dev/packages/radio/radio.html"></l-m>
<l-m src="https://punch-ui-v2.pages.dev/packages/radio/group.html"></l-m>

<p-radio-group>
  <p-list>
    <p-list-item button="p-radio">
      <p-radio slot="prefix" value="option1"></p-radio>
      选项 1
      <div secondary>点击整个列表项选中</div>
    </p-list-item>
    <p-list-item button="p-radio">
      <p-radio slot="prefix" value="option2"></p-radio>
      选项 2
    </p-list-item>
  </p-list>
</p-radio-group>
```

## 其他功能

### 两行列表

使用 `secondary` 属性添加次要文本：

```html
<p-list>
  <p-list-item>
    <span slot="prefix">👤</span>
    用户名
    <div secondary>user@example.com</div>
  </p-list-item>
</p-list>
```

### 顶部对齐

使用 `align-top` 属性使内容顶部对齐：

```html
<p-list>
  <p-list-item align-top>
    <span slot="prefix">👤</span>
    长文本内容会自动换行，使用 align-top 确保图标与文本顶部对齐
    <div secondary>次要文本</div>
  </p-list-item>
</p-list>
```

### 文本省略

使用 `ellipsis` 属性实现文本省略：

```html
<p-list>
  <p-list-item>
    <span ellipsis="1">这是一段很长的文本，会被截断并显示省略号</span>
  </p-list-item>
  <p-list-item>
    <span ellipsis="2">这是一段很长的文本，最多显示两行，超出部分会被截断并显示省略号</span>
  </p-list-item>
</p-list>
```

## 高级用法

### 设置列表（单选）

使用动态 class 和点击事件实现单选列表效果：

```html
<style>
  p-list-item {
    background-color: rgba(from var(--md-sys-color-neutral) r g b / 0.1);
    transition:
      border-radius ease 0.3s,
      background-color ease 0.1s;
  }

  .active {
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
    <span slot="prefix">👤</span>
    <div>Account</div>
  </p-list-item>
  <p-list-item
    class:active="selected === 'notifications'"
    on:click="selected = 'notifications'"
    button
  >
    <span slot="prefix">🔔</span>
    <div>Notifications</div>
  </p-list-item>
  <p-list-item
    class:active="selected === 'privacy'"
    on:click="selected = 'privacy'"
    button
  >
    <span slot="prefix">🔒</span>
    <div>Privacy</div>
  </p-list-item>
  <p-list-item
    class:active="selected === 'help'"
    on:click="selected = 'help'"
    button
  >
    <span slot="prefix">❓</span>
    <div>Help</div>
  </p-list-item>
</p-list>

<script>
  export default async () => {
    return {
      data: {
        selected: "account",
      },
    };
  };
</script>
```

**特点**：
- 使用 `class:active` 动态绑定 active 类
- 点击时更新 `selected` 状态
- 选中的列表项会应用特殊样式
- 适合用于设置页面、导航菜单等场景

### 分类筛选（多选）

实现可多选的筛选列表：

```html
<style>
  p-list-item {
    background-color: rgba(from var(--md-sys-color-neutral) r g b / 0.1);
    transition:
      border-radius ease 0.3s,
      background-color ease 0.1s;
  }

  .active {
    background-color: var(--md-sys-color-primary);
    border-radius: 12px;
  }

  p-list-item.active div {
    color: var(--md-sys-color-on-primary);
  }
</style>

<p-list>
  <p-list-item
    class:active="filters.includes('all')"
    on:click="toggleFilter('all')"
    button
  >
    <span slot="prefix">📁</span>
    <div>All</div>
  </p-list-item>
  <p-list-item
    class:active="filters.includes('electronics')"
    on:click="toggleFilter('electronics')"
    button
  >
    <span slot="prefix">📱</span>
    <div>Electronics</div>
  </p-list-item>
  <p-list-item
    class:active="filters.includes('clothing')"
    on:click="toggleFilter('clothing')"
    button
  >
    <span slot="prefix">👕</span>
    <div>Clothing</div>
  </p-list-item>
  <p-list-item
    class:active="filters.includes('books')"
    on:click="toggleFilter('books')"
    button
  >
    <span slot="prefix">📚</span>
    <div>Books</div>
  </p-list-item>
</p-list>

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

**特点**：
- 使用数组存储选中的项目
- `toggleFilter` 方法处理选中/取消选中逻辑
- 至少保留一个选中项
- 适合用于商品分类筛选、标签选择等场景

## 主要属性

### p-list-item 属性

- `variant` - 列表项样式
- `color` - 列表项颜色
- `disabled` - 是否禁用
- `active` - 是否选中
- `button` - 可点击，可指定选择器
- `collapsible` - 是否可折叠
- `expanded` - 是否展开
- `align-top` - 内容是否顶部对齐

## 插槽

### p-list-item 插槽

- `prefix` - 前缀内容
- `default` - 列表项主内容
- `suffix` - 后缀内容
- `sublist` - 子列表
- `expand-icon` - 自定义展开图标

## CSS 变量

- `--sublist-indent` - 子列表缩进距离（默认 0px）
- `--padding` - 列表项内边距（默认 4px 12px）

## 事件

- `click-main` - 点击列表项主区域时触发
