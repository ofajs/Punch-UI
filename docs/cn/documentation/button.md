# Button 按钮

按钮组件是 Punch-UI 中最常用的组件之一，提供了多种样式、尺寸和颜色选择。

## 引入组件

```html
<l-m src="https://punch-ui-v2.pages.dev/packages/button/button.html"></l-m>
```

## 基本用法

<o-playground name="Button 基本用法" style="--editor-height: 300px">
  <code path="demo.html" preview active>
    <template>
      <link rel="stylesheet" href="https://punch-ui-v2.pages.dev/packages/css/pui-global.css" />
      <l-m src="https://punch-ui-v2.pages.dev/packages/button/button.html"></l-m>
      <div style="padding: 20px;">
        <p-button>默认按钮</p-button>
      </div>
    </template>
  </code>
</o-playground>

## 按钮变体

通过 `variant` 属性设置按钮样式：

<o-playground name="Button 变体" style="--editor-height: 350px">
  <code path="demo.html" preview active>
    <template>
      <link rel="stylesheet" href="https://punch-ui-v2.pages.dev/packages/css/pui-global.css" />
      <l-m src="https://punch-ui-v2.pages.dev/packages/button/button.html"></l-m>
      <div style="padding: 20px;">
        <p-button variant="filled">Filled Button</p-button>
        <p-button variant="outlined">Outlined Button</p-button>
        <p-button variant="text">Text Button</p-button>
      </div>
    </template>
  </code>
</o-playground>

## 尺寸

通过 `size` 属性设置按钮尺寸：

<o-playground name="Button 尺寸" style="--editor-height: 350px">
  <code path="demo.html" preview active>
    <template>
      <link rel="stylesheet" href="https://punch-ui-v2.pages.dev/packages/css/pui-global.css" />
      <l-m src="https://punch-ui-v2.pages.dev/packages/button/button.html"></l-m>
      <div style="padding: 20px;">
        <p-button size="xs">Extra Small</p-button>
        <p-button size="s">Small</p-button>
        <p-button>Default</p-button>
        <p-button size="l">Large</p-button>
        <p-button size="xl">Extra Large</p-button>
      </div>
    </template>
  </code>
</o-playground>

## 颜色

通过 `color` 属性设置按钮颜色：

<o-playground name="Button 颜色" style="--editor-height: 350px">
  <code path="demo.html" preview active>
    <template>
      <link rel="stylesheet" href="https://punch-ui-v2.pages.dev/packages/css/pui-global.css" />
      <l-m src="https://punch-ui-v2.pages.dev/packages/button/button.html"></l-m>
      <div style="padding: 20px;">
        <p-button>Default</p-button>
        <p-button color="primary">Primary</p-button>
        <p-button color="error">Error</p-button>
        <p-button color="success">Success</p-button>
        <p-button color="neutral">Neutral</p-button>
      </div>
    </template>
  </code>
</o-playground>

## 图标按钮

添加 `icon` 属性使按钮成为圆形图标按钮：

<o-playground name="图标按钮" style="--editor-height: 300px">
  <code path="demo.html" preview active>
    <template>
      <link rel="stylesheet" href="https://punch-ui-v2.pages.dev/packages/css/pui-global.css" />
      <l-m src="https://punch-ui-v2.pages.dev/packages/button/button.html"></l-m>
      <div style="padding: 20px;">
        <p-button icon>+</p-button>
        <p-button icon size="s">-</p-button>
        <p-button icon size="l">×</p-button>
      </div>
    </template>
  </code>
</o-playground>

## 带前缀/后缀

使用 `prefix` 和 `suffix` 插槽添加图标或文本：

<o-playground name="带前缀/后缀的按钮" style="--editor-height: 300px">
  <code path="demo.html" preview active>
    <template>
      <link rel="stylesheet" href="https://punch-ui-v2.pages.dev/packages/css/pui-global.css" />
      <l-m src="https://punch-ui-v2.pages.dev/packages/button/button.html"></l-m>
      <div style="padding: 20px;">
        <p-button>
          <span slot="prefix">🔍</span>
          Search
        </p-button>
        <p-button>
          Settings
          <span slot="suffix">⚙️</span>
        </p-button>
      </div>
    </template>
  </code>
</o-playground>

## 禁用状态

添加 `disabled` 属性禁用按钮：

<o-playground name="禁用状态" style="--editor-height: 300px">
  <code path="demo.html" preview active>
    <template>
      <link rel="stylesheet" href="https://punch-ui-v2.pages.dev/packages/css/pui-global.css" />
      <l-m src="https://punch-ui-v2.pages.dev/packages/button/button.html"></l-m>
      <div style="padding: 20px;">
        <p-button disabled>Disabled Button</p-button>
        <p-button variant="outlined" disabled>Disabled Outlined</p-button>
      </div>
    </template>
  </code>
</o-playground>

## 自动聚焦

使用 `autofocus` 属性使按钮在页面加载时自动获得焦点：

<o-playground name="自动聚焦" style="--editor-height: 300px">
  <code path="demo.html" preview active>
    <template>
      <link rel="stylesheet" href="https://punch-ui-v2.pages.dev/packages/css/pui-global.css" />
      <l-m src="https://punch-ui-v2.pages.dev/packages/button/button.html"></l-m>
      <div style="padding: 20px;">
        <p-button autofocus>自动聚焦按钮</p-button>
        <p-button>普通按钮</p-button>
      </div>
    </template>
  </code>
</o-playground>

## Button Group

使用按钮组将多个按钮组合在一起：

<o-playground name="Button Group" style="--editor-height: 400px">
  <code path="demo.html" preview active>
    <template>
      <link rel="stylesheet" href="https://punch-ui-v2.pages.dev/packages/css/pui-global.css" />
      <l-m src="https://punch-ui-v2.pages.dev/packages/button/button.html"></l-m>
      <l-m src="https://punch-ui-v2.pages.dev/packages/button/group.html"></l-m>
      <div style="padding: 20px;">
        <h4>基础按钮组</h4>
        <p-button-group>
          <p-button>按钮 1</p-button>
          <p-button>按钮 2</p-button>
          <p-button>按钮 3</p-button>
        </p-button-group>
        <h4 style="margin-top: 20px;">连接按钮组</h4>
        <p-button-group connected>
          <p-button variant="outlined">首页</p-button>
          <p-button variant="outlined">产品</p-button>
          <p-button variant="outlined">关于</p-button>
        </p-button-group>
        <h4 style="margin-top: 20px;">全宽按钮组</h4>
        <p-button-group full-width>
          <p-button>Left</p-button>
          <p-button>Center</p-button>
          <p-button>Right</p-button>
        </p-button-group>
      </div>
    </template>
  </code>
</o-playground>

## 高级用法

### 分段控制（单选）

使用按钮组实现分段控制，适用于切换视图模式等场景：

<o-playground name="分段控制" style="--editor-height: 400px">
  <code path="demo.html" active>
    <template page>
      <link rel="stylesheet" href="https://punch-ui-v2.pages.dev/packages/css/pui-global.css" />
      <l-m src="https://punch-ui-v2.pages.dev/packages/button/button.html"></l-m>
      <l-m src="https://punch-ui-v2.pages.dev/packages/button/group.html"></l-m>
      <div style="padding: 20px;">
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
      </div>
      <script>
        export default {
          data: {
            selected: 'day'
          }
        };
      </script>
    </template>
  </code>
</o-playground>

### 过滤器芯片（多选）

使用按钮组实现多选过滤器：

<o-playground name="过滤器芯片" style="--editor-height: 400px">
  <code path="demo.html" active>
    <template page>
      <link rel="stylesheet" href="https://punch-ui-v2.pages.dev/packages/css/pui-global.css" />
      <l-m src="https://punch-ui-v2.pages.dev/packages/button/button.html"></l-m>
      <l-m src="https://punch-ui-v2.pages.dev/packages/button/group.html"></l-m>
      <style>
        p-button {
          transition: all 0.2s ease;
        }
      </style>
      <div style="padding: 20px;">
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
      </div>
      <script>
        export default {
          data: {
            filters: ['all']
          },
          proto: {
            toggleFilter(filter) {
              const index = this.filters.indexOf(filter);
              if (index > -1) {
                this.filters.splice(index, 1);
              } else {
                this.filters.push(filter);
              }
            }
          }
        };
      </script>
    </template>
  </code>
</o-playground>

### 排序选项

使用按钮组实现排序选项切换：

<o-playground name="排序选项" style="--editor-height: 400px">
  <code path="demo.html" active>
    <template page>
      <link rel="stylesheet" href="https://punch-ui-v2.pages.dev/packages/css/pui-global.css" />
      <l-m src="https://punch-ui-v2.pages.dev/packages/button/button.html"></l-m>
      <l-m src="https://punch-ui-v2.pages.dev/packages/button/group.html"></l-m>
      <style>
        p-button {
          transition: all 0.2s ease;
        }
      </style>
      <div style="padding: 20px;">
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
      </div>
      <script>
        export default {
          data: {
            order: 'newest'
          }
        };
      </script>
    </template>
  </code>
</o-playground>

## API

### 属性

| 属性 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| `variant` | 按钮样式 | `filled` \| `outlined` \| `text` | `filled` |
| `size` | 按钮尺寸 | `xs` \| `s` \| `l` \| `xl` | - |
| `color` | 按钮颜色 | `primary` \| `error` \| `success` \| `neutral` | - |
| `icon` | 是否为图标按钮 | `boolean` | `false` |
| `disabled` | 是否禁用 | `boolean` | `false` |
| `autofocus` | 是否自动聚焦 | `boolean` | `false` |

### 插槽

| 插槽名 | 说明 |
|--------|------|
| `default` | 按钮内容 |
| `prefix` | 前缀内容 |
| `suffix` | 后缀内容 |
