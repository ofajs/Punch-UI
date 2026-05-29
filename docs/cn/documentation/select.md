# Select 选择器

下拉选择器组件，支持单选和多选。

## 引入组件

```html
<l-m src="https://punch-ui-v2.pages.dev/packages/select/select.html"></l-m>
```

## 基本用法

<o-playground name="Select 基本用法" style="--editor-height: 350px">
  <code path="demo.html" preview active>
    <template>
      <link rel="stylesheet" href="https://punch-ui-v2.pages.dev/packages/css/pui-global.css" />
      <l-m src="https://punch-ui-v2.pages.dev/packages/select/select.html"></l-m>
      <l-m src="https://punch-ui-v2.pages.dev/packages/select/option.html"></l-m>
      <div style="padding: 20px; max-width: 300px;">
        <p-select placeholder="请选择">
          <p-option value="1">选项 1</p-option>
          <p-option value="2">选项 2</p-option>
          <p-option value="3">选项 3</p-option>
        </p-select>
      </div>
    </template>
  </code>
</o-playground>

## 变体样式

通过 `variant` 属性设置选择器样式：

<o-playground name="Select 变体" style="--editor-height: 350px">
  <code path="demo.html" preview active>
    <template>
      <link rel="stylesheet" href="https://punch-ui-v2.pages.dev/packages/css/pui-global.css" />
      <l-m src="https://punch-ui-v2.pages.dev/packages/select/select.html"></l-m>
      <l-m src="https://punch-ui-v2.pages.dev/packages/select/option.html"></l-m>
      <div style="padding: 20px; max-width: 300px;">
        <p-select>
          <span slot="label">Outlined (默认)</span>
          <p-option value="1">选项 1</p-option>
          <p-option value="2">选项 2</p-option>
        </p-select>
        <p-select variant="filled" style="margin-top: 16px;">
          <span slot="label">Filled</span>
          <p-option value="1">选项 1</p-option>
          <p-option value="2">选项 2</p-option>
        </p-select>
      </div>
    </template>
  </code>
</o-playground>

## 尺寸

通过 `size` 属性设置选择器尺寸：

<o-playground name="Select 尺寸" style="--editor-height: 500px">
  <code path="demo.html" preview active>
    <template>
      <link rel="stylesheet" href="https://punch-ui-v2.pages.dev/packages/css/pui-global.css" />
      <l-m src="https://punch-ui-v2.pages.dev/packages/select/select.html"></l-m>
      <l-m src="https://punch-ui-v2.pages.dev/packages/select/option.html"></l-m>
      <div style="padding: 20px; max-width: 300px;">
        <p-select size="xs">
          <span slot="label">Extra Small (xs)</span>
          <p-option value="1">选项 1</p-option>
        </p-select>
        <p-select size="s" style="margin-top: 16px;">
          <span slot="label">Small (s)</span>
          <p-option value="1">选项 1</p-option>
        </p-select>
        <p-select style="margin-top: 16px;">
          <span slot="label">Default</span>
          <p-option value="1">选项 1</p-option>
        </p-select>
        <p-select size="l" style="margin-top: 16px;">
          <span slot="label">Large (l)</span>
          <p-option value="1">选项 1</p-option>
        </p-select>
        <p-select size="xl" style="margin-top: 16px;">
          <span slot="label">Extra Large (xl)</span>
          <p-option value="1">选项 1</p-option>
        </p-select>
      </div>
    </template>
  </code>
</o-playground>

## 颜色

通过 `color` 属性设置选择器颜色：

<o-playground name="Select 颜色" style="--editor-height: 500px">
  <code path="demo.html" preview active>
    <template>
      <link rel="stylesheet" href="https://punch-ui-v2.pages.dev/packages/css/pui-global.css" />
      <l-m src="https://punch-ui-v2.pages.dev/packages/select/select.html"></l-m>
      <l-m src="https://punch-ui-v2.pages.dev/packages/select/option.html"></l-m>
      <div style="padding: 20px; max-width: 300px;">
        <p-select color="primary">
          <span slot="label">Primary Color</span>
          <p-option value="1">选项 1</p-option>
        </p-select>
        <p-select color="success" style="margin-top: 16px;">
          <span slot="label">Success Color</span>
          <p-option value="1">选项 1</p-option>
        </p-select>
        <p-select color="neutral" style="margin-top: 16px;">
          <span slot="label">Neutral Color</span>
          <p-option value="1">选项 1</p-option>
        </p-select>
        <p-select color="error" style="margin-top: 16px;">
          <span slot="label">Error Color</span>
          <p-option value="1">选项 1</p-option>
        </p-select>
      </div>
    </template>
  </code>
</o-playground>

## 前缀和后缀

使用 `prefix` 和 `suffix` 插槽添加前缀或后缀：

<o-playground name="带前缀/后缀的选择器" style="--editor-height: 400px">
  <code path="demo.html" preview active>
    <template>
      <link rel="stylesheet" href="https://punch-ui-v2.pages.dev/packages/css/pui-global.css" />
      <l-m src="https://punch-ui-v2.pages.dev/packages/select/select.html"></l-m>
      <l-m src="https://punch-ui-v2.pages.dev/packages/select/option.html"></l-m>
      <div style="padding: 20px; max-width: 300px;">
        <p-select>
          <span slot="prefix">🌐</span>
          <span slot="label">Language</span>
          <p-option value="en">English</p-option>
          <p-option value="zh">中文</p-option>
        </p-select>
        <p-select style="margin-top: 16px;">
          <span slot="label">Currency</span>
          <span slot="suffix">💰</span>
          <p-option value="usd">USD</p-option>
          <p-option value="eur">EUR</p-option>
        </p-select>
      </div>
    </template>
  </code>
</o-playground>

## 禁用状态

添加 `disabled` 属性禁用选择器：

<o-playground name="禁用状态" style="--editor-height: 350px">
  <code path="demo.html" preview active>
    <template>
      <link rel="stylesheet" href="https://punch-ui-v2.pages.dev/packages/css/pui-global.css" />
      <l-m src="https://punch-ui-v2.pages.dev/packages/select/select.html"></l-m>
      <l-m src="https://punch-ui-v2.pages.dev/packages/select/option.html"></l-m>
      <div style="padding: 20px; max-width: 300px;">
        <p-select disabled>
          <span slot="label">禁用选择器</span>
          <p-option value="1">选项 1</p-option>
          <p-option value="2">选项 2</p-option>
        </p-select>
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
| `value` | 选中的值 | `string` | - |
