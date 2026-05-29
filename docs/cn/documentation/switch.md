# Switch 开关

开关组件用于在两种状态之间切换，支持自定义值和键盘操作。

## 引入组件

```html
<l-m src="https://punch-ui-v2.pages.dev/packages/switch/switch.html"></l-m>
```

## 基本用法

<o-playground name="Switch 基本用法" style="--editor-height: 300px">
  <code path="demo.html" preview active>
    <template>
      <link rel="stylesheet" href="https://punch-ui-v2.pages.dev/packages/css/pui-global.css" />
      <l-m src="https://punch-ui-v2.pages.dev/packages/switch/switch.html"></l-m>
      <div style="padding: 20px;">
        <p-switch>默认开关</p-switch>
        <p-switch checked>已选中</p-switch>
      </div>
    </template>
  </code>
</o-playground>

## 尺寸

通过 `size` 属性设置开关尺寸：

<o-playground name="Switch 尺寸" style="--editor-height: 350px">
  <code path="demo.html" preview active>
    <template>
      <link rel="stylesheet" href="https://punch-ui-v2.pages.dev/packages/css/pui-global.css" />
      <l-m src="https://punch-ui-v2.pages.dev/packages/switch/switch.html"></l-m>
      <div style="padding: 20px;">
        <p-switch size="xs">XS</p-switch>
        <p-switch size="s">Small</p-switch>
        <p-switch>Medium</p-switch>
        <p-switch size="l">Large</p-switch>
        <p-switch size="xl">XL</p-switch>
      </div>
    </template>
  </code>
</o-playground>

## 颜色

通过 `color` 属性设置开关颜色：

<o-playground name="Switch 颜色" style="--editor-height: 350px">
  <code path="demo.html" preview active>
    <template>
      <link rel="stylesheet" href="https://punch-ui-v2.pages.dev/packages/css/pui-global.css" />
      <l-m src="https://punch-ui-v2.pages.dev/packages/switch/switch.html"></l-m>
      <div style="padding: 20px;">
        <p-switch color="primary" checked>Primary</p-switch>
        <p-switch color="error" checked>Error</p-switch>
        <p-switch color="success" checked>Success</p-switch>
      </div>
    </template>
  </code>
</o-playground>

## 状态

<o-playground name="Switch 状态" style="--editor-height: 350px">
  <code path="demo.html" preview active>
    <template>
      <link rel="stylesheet" href="https://punch-ui-v2.pages.dev/packages/css/pui-global.css" />
      <l-m src="https://punch-ui-v2.pages.dev/packages/switch/switch.html"></l-m>
      <div style="padding: 20px;">
        <p-switch checked>选中状态</p-switch>
        <p-switch>未选中状态</p-switch>
        <p-switch disabled>禁用状态</p-switch>
      </div>
    </template>
  </code>
</o-playground>

## 表单集成

### 自定义值

使用 `checked-value` 和 `unchecked-value` 属性自定义选中/未选中的值：

<o-playground name="自定义值的开关" style="--editor-height: 350px">
  <code path="demo.html" preview active>
    <template>
      <link rel="stylesheet" href="https://punch-ui-v2.pages.dev/packages/css/pui-global.css" />
      <l-m src="https://punch-ui-v2.pages.dev/packages/switch/switch.html"></l-m>
      <div style="padding: 20px;">
        <p-switch 
          name="status" 
          checked-value="enabled" 
          unchecked-value="disabled"
          checked
        >
          状态开关
        </p-switch>
      </div>
    </template>
  </code>
</o-playground>

### 默认值

使用 `default-value` 属性设置初始值：

<o-playground name="默认值" style="--editor-height: 350px">
  <code path="demo.html" preview active>
    <template>
      <link rel="stylesheet" href="https://punch-ui-v2.pages.dev/packages/css/pui-global.css" />
      <l-m src="https://punch-ui-v2.pages.dev/packages/switch/switch.html"></l-m>
      <div style="padding: 20px;">
        <p-switch 
          name="theme" 
          checked-value="dark" 
          unchecked-value="light"
          default-value="dark"
        >
          深色模式
        </p-switch>
      </div>
    </template>
  </code>
</o-playground>

## 交互功能

### 自动聚焦

使用 `autofocus` 属性使开关在页面加载时自动获得焦点：

<o-playground name="自动聚焦" style="--editor-height: 300px">
  <code path="demo.html" preview active>
    <template>
      <link rel="stylesheet" href="https://punch-ui-v2.pages.dev/packages/css/pui-global.css" />
      <l-m src="https://punch-ui-v2.pages.dev/packages/switch/switch.html"></l-m>
      <div style="padding: 20px;">
        <p-switch autofocus>自动聚焦</p-switch>
      </div>
    </template>
  </code>
</o-playground>

### 键盘操作

开关支持键盘操作：
- **空格键** - 切换开关状态
- **回车键** - 切换开关状态

<o-playground name="键盘操作" style="--editor-height: 300px">
  <code path="demo.html" preview active>
    <template>
      <link rel="stylesheet" href="https://punch-ui-v2.pages.dev/packages/css/pui-global.css" />
      <l-m src="https://punch-ui-v2.pages.dev/packages/switch/switch.html"></l-m>
      <div style="padding: 20px;">
        <p-switch>使用键盘操作</p-switch>
      </div>
    </template>
  </code>
</o-playground>

### 编程控制

通过 JavaScript 控制开关状态：

<o-playground name="编程控制" style="--editor-height: 400px">
  <code path="demo.html" preview active>
    <template>
      <link rel="stylesheet" href="https://punch-ui-v2.pages.dev/packages/css/pui-global.css" />
      <l-m src="https://punch-ui-v2.pages.dev/packages/button/button.html"></l-m>
      <l-m src="https://punch-ui-v2.pages.dev/packages/switch/switch.html"></l-m>
      <div style="padding: 20px;">
        <p-switch id="my-switch">编程控制</p-switch>
        <p-button style="margin-top: 16px;" on:click="this.$('#my-switch').checked = !this.$('#my-switch').checked">切换状态</p-button>
      </div>
    </template>
  </code>
</o-playground>

## 变体样式

使用 `variant` 属性设置不同的样式：

<o-playground name="变体样式" style="--editor-height: 350px">
  <code path="demo.html" preview active>
    <template>
      <link rel="stylesheet" href="https://punch-ui-v2.pages.dev/packages/css/pui-global.css" />
      <l-m src="https://punch-ui-v2.pages.dev/packages/switch/switch.html"></l-m>
      <div style="padding: 20px;">
        <p-switch variant="filled" checked>Filled</p-switch>
        <p-switch variant="outlined" checked>Outlined</p-switch>
        <p-switch variant="text" checked>Text</p-switch>
      </div>
    </template>
  </code>
</o-playground>

## 方法

开关组件提供以下方法：

- `focus()` - 使开关获得焦点

<o-playground name="方法" style="--editor-height: 400px">
  <code path="demo.html" preview active>
    <template>
      <link rel="stylesheet" href="https://punch-ui-v2.pages.dev/packages/css/pui-global.css" />
      <l-m src="https://punch-ui-v2.pages.dev/packages/button/button.html"></l-m>
      <l-m src="https://punch-ui-v2.pages.dev/packages/switch/switch.html"></l-m>
      <div style="padding: 20px;">
        <p-switch id="focus-switch">聚焦开关</p-switch>
        <p-button style="margin-top: 16px;" on:click="this.$('#focus-switch').focus()">聚焦</p-button>
      </div>
    </template>
  </code>
</o-playground>

## 动画效果

开关组件包含以下动画效果：
- **滑块移动** - 平滑的滑动动画
- **勾选标记** - 选中时显示勾选动画
- **边框填充** - 选中时边框填充动画

<o-playground name="动画效果" style="--editor-height: 300px">
  <code path="demo.html" preview active>
    <template>
      <link rel="stylesheet" href="https://punch-ui-v2.pages.dev/packages/css/pui-global.css" />
      <l-m src="https://punch-ui-v2.pages.dev/packages/switch/switch.html"></l-m>
      <div style="padding: 20px;">
        <p-switch checked>动画效果</p-switch>
      </div>
    </template>
  </code>
</o-playground>

## 无障碍支持

开关组件提供以下无障碍支持：
- 支持键盘导航和操作
- 提供焦点状态指示
- 支持屏幕阅读器

<o-playground name="无障碍支持" style="--editor-height: 300px">
  <code path="demo.html" preview active>
    <template>
      <link rel="stylesheet" href="https://punch-ui-v2.pages.dev/packages/css/pui-global.css" />
      <l-m src="https://punch-ui-v2.pages.dev/packages/switch/switch.html"></l-m>
      <div style="padding: 20px;">
        <p-switch>无障碍开关</p-switch>
      </div>
    </template>
  </code>
</o-playground>

## API

### 属性

| 属性 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| `checked` | 是否选中 | `boolean` | `false` |
| `size` | 开关尺寸 | `xs` \| `s` \| `l` \| `xl` | - |
| `color` | 开关颜色 | `primary` \| `error` \| `success` | `primary` |
| `disabled` | 是否禁用 | `boolean` | `false` |
| `name` | 表单名称 | `string` | - |
| `checked-value` | 选中时的值 | `string` | `true` |
| `unchecked-value` | 未选中时的值 | `string` | `false` |

### 事件

| 事件名 | 说明 |
|--------|------|
| `change` | 开关状态改变时触发 |
