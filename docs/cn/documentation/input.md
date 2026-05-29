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
