# Textarea 多行文本

多行文本输入框组件，支持响应式高度和表单集成。

## 引入组件

```html
<l-m src="https://punch-ui-v2.pages.dev/packages/textarea/textarea.html"></l-m>
```

## 基本用法

<o-playground name="Textarea 基本用法" style="--editor-height: 300px">
  <code path="demo.html" preview active>
    <template>
      <link rel="stylesheet" href="https://punch-ui-v2.pages.dev/packages/css/pui-global.css" />
      <l-m src="https://punch-ui-v2.pages.dev/packages/textarea/textarea.html"></l-m>
      <div style="padding: 20px; max-width: 400px;">
        <p-textarea placeholder="请输入内容"></p-textarea>
      </div>
    </template>
  </code>
</o-playground>

## 带标签

<o-playground name="带标签的 Textarea" style="--editor-height: 350px">
  <code path="demo.html" preview active>
    <template>
      <link rel="stylesheet" href="https://punch-ui-v2.pages.dev/packages/css/pui-global.css" />
      <l-m src="https://punch-ui-v2.pages.dev/packages/textarea/textarea.html"></l-m>
      <div style="padding: 20px; max-width: 400px;">
        <p-textarea>
          <span slot="label">留言</span>
        </p-textarea>
      </div>
    </template>
  </code>
</o-playground>

## 变体样式

通过 `variant` 属性设置输入框样式：

<o-playground name="Textarea 变体" style="--editor-height: 350px">
  <code path="demo.html" preview active>
    <template>
      <link rel="stylesheet" href="https://punch-ui-v2.pages.dev/packages/css/pui-global.css" />
      <l-m src="https://punch-ui-v2.pages.dev/packages/textarea/textarea.html"></l-m>
      <div style="padding: 20px; max-width: 400px;">
        <p-textarea>
          <span slot="label">Outlined (默认)</span>
        </p-textarea>
        <p-textarea variant="filled" style="margin-top: 16px;">
          <span slot="label">Filled</span>
        </p-textarea>
      </div>
    </template>
  </code>
</o-playground>

## 尺寸

通过 `size` 属性设置输入框尺寸：

<o-playground name="Textarea 尺寸" style="--editor-height: 500px">
  <code path="demo.html" preview active>
    <template>
      <link rel="stylesheet" href="https://punch-ui-v2.pages.dev/packages/css/pui-global.css" />
      <l-m src="https://punch-ui-v2.pages.dev/packages/textarea/textarea.html"></l-m>
      <div style="padding: 20px; max-width: 400px;">
        <p-textarea size="xs">
          <span slot="label">Extra Small</span>
        </p-textarea>
        <p-textarea size="s" style="margin-top: 16px;">
          <span slot="label">Small</span>
        </p-textarea>
        <p-textarea size="m" style="margin-top: 16px;">
          <span slot="label">Medium (Default)</span>
        </p-textarea>
        <p-textarea size="l" style="margin-top: 16px;">
          <span slot="label">Large</span>
        </p-textarea>
        <p-textarea size="xl" style="margin-top: 16px;">
          <span slot="label">Extra Large</span>
        </p-textarea>
      </div>
    </template>
  </code>
</o-playground>

## 颜色

通过 `color` 属性设置输入框颜色：

<o-playground name="Textarea 颜色" style="--editor-height: 500px">
  <code path="demo.html" preview active>
    <template>
      <link rel="stylesheet" href="https://punch-ui-v2.pages.dev/packages/css/pui-global.css" />
      <l-m src="https://punch-ui-v2.pages.dev/packages/textarea/textarea.html"></l-m>
      <div style="padding: 20px; max-width: 400px;">
        <p-textarea color="primary">
          <span slot="label">Primary Color</span>
        </p-textarea>
        <p-textarea color="success" style="margin-top: 16px;">
          <span slot="label">Success Color</span>
        </p-textarea>
        <p-textarea color="neutral" style="margin-top: 16px;">
          <span slot="label">Neutral Color</span>
        </p-textarea>
        <p-textarea color="error" style="margin-top: 16px;">
          <span slot="label">Error Color</span>
        </p-textarea>
      </div>
    </template>
  </code>
</o-playground>

## 前缀和后缀

使用 `prefix` 和 `suffix` 插槽添加前缀/后缀内容：

<o-playground name="带前缀/后缀的 Textarea" style="--editor-height: 350px">
  <code path="demo.html" preview active>
    <template>
      <link rel="stylesheet" href="https://punch-ui-v2.pages.dev/packages/css/pui-global.css" />
      <l-m src="https://punch-ui-v2.pages.dev/packages/textarea/textarea.html"></l-m>
      <div style="padding: 20px; max-width: 400px;">
        <p-textarea>
          <span slot="label">Message</span>
          <span slot="prefix">📝</span>
        </p-textarea>
      </div>
    </template>
  </code>
</o-playground>

## 占位符

使用 `placeholder` 属性设置占位文本：

<o-playground name="占位符" style="--editor-height: 350px">
  <code path="demo.html" preview active>
    <template>
      <link rel="stylesheet" href="https://punch-ui-v2.pages.dev/packages/css/pui-global.css" />
      <l-m src="https://punch-ui-v2.pages.dev/packages/textarea/textarea.html"></l-m>
      <div style="padding: 20px; max-width: 400px;">
        <p-textarea placeholder="Enter your message...">
          <span slot="label">Message</span>
        </p-textarea>
      </div>
    </template>
  </code>
</o-playground>

## 自动聚焦

使用 `autofocus` 属性使输入框在页面加载时自动获得焦点：

<o-playground name="自动聚焦" style="--editor-height: 350px">
  <code path="demo.html" preview active>
    <template>
      <link rel="stylesheet" href="https://punch-ui-v2.pages.dev/packages/css/pui-global.css" />
      <l-m src="https://punch-ui-v2.pages.dev/packages/textarea/textarea.html"></l-m>
      <div style="padding: 20px; max-width: 400px;">
        <p-textarea autofocus>
          <span slot="label">自动聚焦</span>
        </p-textarea>
      </div>
    </template>
  </code>
</o-playground>

## API

### 属性

| 属性 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| `placeholder` | 占位文本 | `string` | - |
| `disabled` | 是否禁用 | `boolean` | `false` |
| `value` | 输入值 | `string` | - |
| `rows` | 行数 | `number` | - |

### 插槽

| 插槽名 | 说明 |
|--------|------|
| `default` | 文本框内容 |
| `label` | 标签文本 |
