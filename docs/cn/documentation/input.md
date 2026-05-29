# Input 输入框

输入框组件用于接收用户输入的文本信息，支持多种样式和尺寸。

## 引入组件

```html
<l-m src="https://punch-ui-v2.pages.dev/packages/input/input.html"></l-m>
```

## 基本用法

<o-playground name="Input 基本用法" style="--editor-height: 300px">
  <code path="demo.html" preview active>
    <template>
      <link rel="stylesheet" href="https://punch-ui-v2.pages.dev/packages/css/pui-global.css" />
      <l-m src="https://punch-ui-v2.pages.dev/packages/input/input.html"></l-m>
      <div style="padding: 20px; max-width: 400px;">
        <p-input placeholder="请输入内容"></p-input>
      </div>
    </template>
  </code>
</o-playground>

## 带标签

使用 `label` 插槽添加标签：

<o-playground name="带标签的输入框" style="--editor-height: 350px">
  <code path="demo.html" preview active>
    <template>
      <link rel="stylesheet" href="https://punch-ui-v2.pages.dev/packages/css/pui-global.css" />
      <l-m src="https://punch-ui-v2.pages.dev/packages/input/input.html"></l-m>
      <div style="padding: 20px; max-width: 400px;">
        <p-input>
          <span slot="label">用户名</span>
        </p-input>
      </div>
    </template>
  </code>
</o-playground>

## 尺寸

通过 `size` 属性设置输入框尺寸：

<o-playground name="Input 尺寸" style="--editor-height: 400px">
  <code path="demo.html" preview active>
    <template>
      <link rel="stylesheet" href="https://punch-ui-v2.pages.dev/packages/css/pui-global.css" />
      <l-m src="https://punch-ui-v2.pages.dev/packages/input/input.html"></l-m>
      <div style="padding: 20px; max-width: 400px;">
        <p-input size="xs">
          <span slot="label">Extra Small</span>
        </p-input>
        <p-input size="s">
          <span slot="label">Small</span>
        </p-input>
        <p-input>
          <span slot="label">Default</span>
        </p-input>
        <p-input size="l">
          <span slot="label">Large</span>
        </p-input>
        <p-input size="xl">
          <span slot="label">Extra Large</span>
        </p-input>
      </div>
    </template>
  </code>
</o-playground>

## 颜色

通过 `color` 属性设置输入框颜色：

<o-playground name="Input 颜色" style="--editor-height: 400px">
  <code path="demo.html" preview active>
    <template>
      <link rel="stylesheet" href="https://punch-ui-v2.pages.dev/packages/css/pui-global.css" />
      <l-m src="https://punch-ui-v2.pages.dev/packages/input/input.html"></l-m>
      <div style="padding: 20px; max-width: 400px;">
        <p-input>
          <span slot="label">Default</span>
        </p-input>
        <p-input color="primary">
          <span slot="label">Primary</span>
        </p-input>
        <p-input color="success">
          <span slot="label">Success</span>
        </p-input>
        <p-input color="error">
          <span slot="label">Error</span>
        </p-input>
      </div>
    </template>
  </code>
</o-playground>

## 输入类型

### 密码输入

<o-playground name="密码输入框" style="--editor-height: 300px">
  <code path="demo.html" preview active>
    <template>
      <link rel="stylesheet" href="https://punch-ui-v2.pages.dev/packages/css/pui-global.css" />
      <l-m src="https://punch-ui-v2.pages.dev/packages/input/input.html"></l-m>
      <div style="padding: 20px; max-width: 400px;">
        <p-input type="password">
          <span slot="label">密码</span>
        </p-input>
      </div>
    </template>
  </code>
</o-playground>

### 邮箱输入

<o-playground name="邮箱输入框" style="--editor-height: 300px">
  <code path="demo.html" preview active>
    <template>
      <link rel="stylesheet" href="https://punch-ui-v2.pages.dev/packages/css/pui-global.css" />
      <l-m src="https://punch-ui-v2.pages.dev/packages/input/input.html"></l-m>
      <div style="padding: 20px; max-width: 400px;">
        <p-input type="email">
          <span slot="label">邮箱</span>
        </p-input>
      </div>
    </template>
  </code>
</o-playground>

## 前缀和后缀

使用 `prefix` 和 `suffix` 插槽添加前缀或后缀：

<o-playground name="带前缀/后缀的输入框" style="--editor-height: 350px">
  <code path="demo.html" preview active>
    <template>
      <link rel="stylesheet" href="https://punch-ui-v2.pages.dev/packages/css/pui-global.css" />
      <l-m src="https://punch-ui-v2.pages.dev/packages/input/input.html"></l-m>
      <div style="padding: 20px; max-width: 400px;">
        <p-input>
          <span slot="prefix">+86</span>
          <span slot="label">手机号</span>
        </p-input>
        <p-input style="margin-top: 16px;">
          <span slot="suffix">.com</span>
          <span slot="label">网站</span>
        </p-input>
      </div>
    </template>
  </code>
</o-playground>

## 变体样式

通过 `variant` 属性设置输入框样式：

<o-playground name="Input 变体" style="--editor-height: 350px">
  <code path="demo.html" preview active>
    <template>
      <link rel="stylesheet" href="https://punch-ui-v2.pages.dev/packages/css/pui-global.css" />
      <l-m src="https://punch-ui-v2.pages.dev/packages/input/input.html"></l-m>
      <div style="padding: 20px; max-width: 400px;">
        <p-input>
          <span slot="label">Outlined (默认)</span>
        </p-input>
        <p-input variant="filled" style="margin-top: 16px;">
          <span slot="label">Filled</span>
        </p-input>
      </div>
    </template>
  </code>
</o-playground>

## 自动聚焦

使用 `autofocus` 属性使输入框在页面加载时自动获得焦点：

<o-playground name="自动聚焦" style="--editor-height: 300px">
  <code path="demo.html" preview active>
    <template>
      <link rel="stylesheet" href="https://punch-ui-v2.pages.dev/packages/css/pui-global.css" />
      <l-m src="https://punch-ui-v2.pages.dev/packages/input/input.html"></l-m>
      <div style="padding: 20px; max-width: 400px;">
        <p-input autofocus>
          <span slot="label">自动聚焦</span>
        </p-input>
      </div>
    </template>
  </code>
</o-playground>

## 悬浮标签

使用 `hang-label` 属性使标签始终悬浮在输入框上方：

<o-playground name="悬浮标签" style="--editor-height: 300px">
  <code path="demo.html" preview active>
    <template>
      <link rel="stylesheet" href="https://punch-ui-v2.pages.dev/packages/css/pui-global.css" />
      <l-m src="https://punch-ui-v2.pages.dev/packages/input/input.html"></l-m>
      <div style="padding: 20px; max-width: 400px;">
        <p-input hang-label>
          <span slot="label">悬浮标签</span>
        </p-input>
      </div>
    </template>
  </code>
</o-playground>

## 默认值

使用 `default-value` 属性设置输入框的初始值：

<o-playground name="默认值" style="--editor-height: 300px">
  <code path="demo.html" preview active>
    <template>
      <link rel="stylesheet" href="https://punch-ui-v2.pages.dev/packages/css/pui-global.css" />
      <l-m src="https://punch-ui-v2.pages.dev/packages/input/input.html"></l-m>
      <div style="padding: 20px; max-width: 400px;">
        <p-input default-value="John Doe">
          <span slot="label">默认值</span>
        </p-input>
      </div>
    </template>
  </code>
</o-playground>

## 最大长度

使用 `maxlength` 属性限制输入的最大字符数：

<o-playground name="最大长度" style="--editor-height: 300px">
  <code path="demo.html" preview active>
    <template>
      <link rel="stylesheet" href="https://punch-ui-v2.pages.dev/packages/css/pui-global.css" />
      <l-m src="https://punch-ui-v2.pages.dev/packages/input/input.html"></l-m>
      <div style="padding: 20px; max-width: 400px;">
        <p-input maxlength="10">
          <span slot="label">最多 10 个字符</span>
        </p-input>
      </div>
    </template>
  </code>
</o-playground>

## 表单属性

使用 `name` 属性为表单提交设置字段名：

<o-playground name="表单属性" style="--editor-height: 300px">
  <code path="demo.html" preview active>
    <template>
      <link rel="stylesheet" href="https://punch-ui-v2.pages.dev/packages/css/pui-global.css" />
      <l-m src="https://punch-ui-v2.pages.dev/packages/input/input.html"></l-m>
      <div style="padding: 20px; max-width: 400px;">
        <p-input name="username">
          <span slot="label">用户名</span>
        </p-input>
      </div>
    </template>
  </code>
</o-playground>

## 自定义样式

### 使用内联样式

<o-playground name="自定义样式" style="--editor-height: 300px">
  <code path="demo.html" preview active>
    <template>
      <link rel="stylesheet" href="https://punch-ui-v2.pages.dev/packages/css/pui-global.css" />
      <l-m src="https://punch-ui-v2.pages.dev/packages/input/input.html"></l-m>
      <div style="padding: 20px; max-width: 400px;">
        <p-input style="border-radius: 30px">
          <span slot="label">自定义圆角</span>
        </p-input>
      </div>
    </template>
  </code>
</o-playground>

### 使用 CSS Part

使用 `::part()` 选择器自定义输入框内部样式：

<o-playground name="CSS Part 自定义" style="--editor-height: 350px">
  <code path="demo.html" preview active>
    <template>
      <link rel="stylesheet" href="https://punch-ui-v2.pages.dev/packages/css/pui-global.css" />
      <l-m src="https://punch-ui-v2.pages.dev/packages/input/input.html"></l-m>
      <style>
        .custom-input::part(input) {
          color: red;
        }
      </style>
      <div style="padding: 20px; max-width: 400px;">
        <p-input class="custom-input" color="error">
          <span slot="label" style="color: red">自定义样式</span>
        </p-input>
      </div>
    </template>
  </code>
</o-playground>

## 编程控制

通过 JavaScript 控制输入框焦点：

<o-playground name="编程控制" style="--editor-height: 400px">
  <code path="demo.html" preview active>
    <template>
      <link rel="stylesheet" href="https://punch-ui-v2.pages.dev/packages/css/pui-global.css" />
      <l-m src="https://punch-ui-v2.pages.dev/packages/button/button.html"></l-m>
      <l-m src="https://punch-ui-v2.pages.dev/packages/input/input.html"></l-m>
      <div style="padding: 20px; max-width: 400px;">
        <p-input id="my-input">
          <span slot="label">编程控制</span>
        </p-input>
        <p-button style="margin-top: 16px;" on:click="this.$('#my-input').focus()">聚焦输入框</p-button>
      </div>
    </template>
  </code>
</o-playground>

## API

### 属性

| 属性 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| `type` | 输入类型 | `text` \| `password` \| `email` \| `number` | `text` |
| `size` | 输入框尺寸 | `xs` \| `s` \| `l` \| `xl` | - |
| `color` | 输入框颜色 | `primary` \| `error` \| `success` \| `neutral` | - |
| `placeholder` | 占位文本 | `string` | - |
| `disabled` | 是否禁用 | `boolean` | `false` |
| `value` | 输入值 | `string` | - |

### 插槽

| 插槽名 | 说明 |
|--------|------|
| `default` | 输入框内容 |
| `label` | 标签文本 |
| `prefix` | 前缀内容 |
| `suffix` | 后缀内容 |
