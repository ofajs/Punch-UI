# Checkbox 复选框

复选框组件，支持单个和组合使用。

## 引入组件

```html
<l-m src="https://punch-ui-v2.pages.dev/packages/checkbox/checkbox.html"></l-m>
```

## 基本用法

<o-playground name="Checkbox 基本用法" style="--editor-height: 300px">
  <code path="demo.html" preview active>
    <template>
      <link rel="stylesheet" href="https://punch-ui-v2.pages.dev/packages/css/pui-global.css" />
      <l-m src="https://punch-ui-v2.pages.dev/packages/checkbox/checkbox.html"></l-m>
      <div style="padding: 20px;">
        <p-checkbox>复选框</p-checkbox>
        <p-checkbox checked>已选中</p-checkbox>
      </div>
    </template>
  </code>
</o-playground>

::: warning 提示
如果只需要单个开关选择，建议使用 [Switch 开关](./switch.md) 组件，它提供了更好的开关交互体验。
:::

## 尺寸

通过 `size` 属性设置复选框尺寸：

<o-playground name="Checkbox 尺寸" style="--editor-height: 350px">
  <code path="demo.html" preview active>
    <template>
      <link rel="stylesheet" href="https://punch-ui-v2.pages.dev/packages/css/pui-global.css" />
      <l-m src="https://punch-ui-v2.pages.dev/packages/checkbox/checkbox.html"></l-m>
      <div style="padding: 20px;">
        <p-checkbox size="xs" checked>XS</p-checkbox>
        <p-checkbox size="s" checked>Small</p-checkbox>
        <p-checkbox checked>Medium</p-checkbox>
        <p-checkbox size="l" checked>Large</p-checkbox>
        <p-checkbox size="xl" checked>XL</p-checkbox>
      </div>
    </template>
  </code>
</o-playground>

## 颜色

通过 `color` 属性设置复选框颜色：

<o-playground name="Checkbox 颜色" style="--editor-height: 350px">
  <code path="demo.html" preview active>
    <template>
      <link rel="stylesheet" href="https://punch-ui-v2.pages.dev/packages/css/pui-global.css" />
      <l-m src="https://punch-ui-v2.pages.dev/packages/checkbox/checkbox.html"></l-m>
      <div style="padding: 20px;">
        <p-checkbox color="primary" checked>Primary</p-checkbox>
        <p-checkbox color="success" checked>Success</p-checkbox>
        <p-checkbox color="error" checked>Error</p-checkbox>
        <p-checkbox color="neutral" checked>Neutral</p-checkbox>
      </div>
    </template>
  </code>
</o-playground>

## 状态

<o-playground name="Checkbox 状态" style="--editor-height: 400px">
  <code path="demo.html" preview active>
    <template>
      <link rel="stylesheet" href="https://punch-ui-v2.pages.dev/packages/css/pui-global.css" />
      <l-m src="https://punch-ui-v2.pages.dev/packages/checkbox/checkbox.html"></l-m>
      <div style="padding: 20px;">
        <p-checkbox>Default</p-checkbox>
        <p-checkbox variant="tonal">Tonal</p-checkbox>
        <p-checkbox checked>Checked</p-checkbox>
        <p-checkbox disabled>Disabled</p-checkbox>
        <p-checkbox indeterminate>Indeterminate</p-checkbox>
      </div>
    </template>
  </code>
</o-playground>

## Checkbox Group

使用复选框组管理多个复选框，通过 `checked` 属性设置默认选中项：

<o-playground name="Checkbox Group" style="--editor-height: 400px">
  <code path="demo.html" preview active>
    <template>
      <link rel="stylesheet" href="https://punch-ui-v2.pages.dev/packages/css/pui-global.css" />
      <l-m src="https://punch-ui-v2.pages.dev/packages/checkbox/checkbox.html"></l-m>
      <l-m src="https://punch-ui-v2.pages.dev/packages/checkbox/group.html"></l-m>
      <div style="padding: 20px;">
        <p-checkbox-group>
          <p-checkbox value="1">选项 1</p-checkbox>
          <p-checkbox value="2" checked>选项 2</p-checkbox>
          <p-checkbox value="3" checked>选项 3</p-checkbox>
        </p-checkbox-group>
      </div>
    </template>
  </code>
</o-playground>

## 获取值

### 单个 Checkbox

通过 `checked` 属性获取或设置单个复选框的选中状态：

<o-playground name="单个 Checkbox 获取值" style="--editor-height: 400px">
  <code path="demo.html" preview active>
    <template>
      <link rel="stylesheet" href="https://punch-ui-v2.pages.dev/packages/css/pui-global.css" />
      <l-m src="https://punch-ui-v2.pages.dev/packages/button/button.html"></l-m>
      <l-m src="https://punch-ui-v2.pages.dev/packages/checkbox/checkbox.html"></l-m>
      <div style="padding: 20px;">
        <p-checkbox id="agree-checkbox">同意条款</p-checkbox>
        <p-button style="margin-top: 16px;" id="check-btn">检查状态</p-button>
        <p style="margin-top: 16px;">选中状态: <span id="status-display"></span></p>
      </div>
      <script>
        $('#check-btn').on('click', () => {
          const isChecked = $('#agree-checkbox').checked;
          $('#status-display').text = isChecked ? '已选中' : '未选中';
        });
      </script>
    </template>
  </code>
</o-playground>

### Checkbox Group 获取值

通过 `value` 属性获取复选框组的选中值数组：

<o-playground name="Checkbox Group 获取值" style="--editor-height: 400px">
  <code path="demo.html" preview active>
    <template>
      <link rel="stylesheet" href="https://punch-ui-v2.pages.dev/packages/css/pui-global.css" />
      <l-m src="https://punch-ui-v2.pages.dev/packages/button/button.html"></l-m>
      <l-m src="https://punch-ui-v2.pages.dev/packages/checkbox/checkbox.html"></l-m>
      <l-m src="https://punch-ui-v2.pages.dev/packages/checkbox/group.html"></l-m>
      <div style="padding: 20px;">
        <p-checkbox-group id="fruits-group">
          <p-checkbox value="apple">苹果</p-checkbox>
          <p-checkbox value="banana" checked>香蕉</p-checkbox>
          <p-checkbox value="orange">橙子</p-checkbox>
        </p-checkbox-group>
        <p-button style="margin-top: 16px;" id="get-value-btn">获取值</p-button>
        <p style="margin-top: 16px;">当前值: <span id="value-display"></span></p>
      </div>
      <script>
        $('#get-value-btn').on('click', () => {
          const values = $('#fruits-group').value;
          $('#value-display').text = JSON.stringify(values);
        });
      </script>
    </template>
  </code>
</o-playground>

### 监听变化事件

通过监听 `change` 事件实时获取选中状态：

<o-playground name="监听变化事件" style="--editor-height: 400px">
  <code path="demo.html" preview active>
    <template>
      <link rel="stylesheet" href="https://punch-ui-v2.pages.dev/packages/css/pui-global.css" />
      <l-m src="https://punch-ui-v2.pages.dev/packages/checkbox/checkbox.html"></l-m>
      <l-m src="https://punch-ui-v2.pages.dev/packages/checkbox/group.html"></l-m>
      <div style="padding: 20px;">
        <p-checkbox-group id="realtime-group">
          <p-checkbox value="a">选项 A</p-checkbox>
          <p-checkbox value="b">选项 B</p-checkbox>
          <p-checkbox value="c">选项 C</p-checkbox>
        </p-checkbox-group>
        <p style="margin-top: 16px;">当前值: <span id="realtime-display"></span></p>
      </div>
      <script>
        $('#realtime-group').on('change', () => {
          const values = $('#realtime-group').value;
          $('#realtime-display').text = JSON.stringify(values);
        });
      </script>
    </template>
  </code>
</o-playground>

### 组件或页面模块中双向绑定

使用 ofa.js 的数据绑定功能：

<o-playground name="获取值" style="--editor-height: 400px">
  <code path="demo.html" active>
    <template page>
      <link rel="stylesheet" href="https://punch-ui-v2.pages.dev/packages/css/pui-global.css" />
      <l-m src="https://punch-ui-v2.pages.dev/packages/checkbox/checkbox.html"></l-m>
      <l-m src="https://punch-ui-v2.pages.dev/packages/checkbox/group.html"></l-m>
      <div style="padding: 20px;">
        <p-checkbox-group :value="selectedFruits">
          <p-checkbox value="apple">苹果</p-checkbox>
          <p-checkbox value="banana">香蕉</p-checkbox>
          <p-checkbox value="orange">橙子</p-checkbox>
        </p-checkbox-group>
        <p style="margin-top: 16px;">当前值: {{ selectedFruits }}</p>
      </div>
      <script>
        export default {
          data: {
            selectedFruits: ['apple', 'banana']
          }
        };
      </script>
    </template>
  </code>
</o-playground>

由于 `p-checkbox-group` 的 `value` 是一个数组对象，基于 JavaScript 的对象引用特征，直接使用 `:value` 单向绑定即可实现双向数据同步，**不需要使用 `sync:value` 语法**。

当用户勾选或取消勾选复选框时，组件内部会直接修改数组对象的内容（添加或删除元素），由于是引用同一个数组对象，页面数据会自动更新。

## API

### 属性 - p-checkbox

| 属性 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| `checked` | 是否选中 | `boolean` | `false` |
| `disabled` | 是否禁用 | `boolean` | `false` |
| `name` | 表单名称 | `string` | - |
| `value` | 复选框的值 | `string` | - |
| `size` | 复选框尺寸 | `xs` \| `s` \| `l` \| `xl` | - |
| `color` | 复选框颜色 | `primary` \| `error` \| `success` \| `neutral` | - |
| `variant` | 复选框样式 | `tonal` | - |
| `indeterminate` | 是否为半选状态 | `boolean` | `false` |

### 属性 - p-checkbox-group

| 属性 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| `value` | 选中的值数组 | `Array` | `[]` |

### 事件 - p-checkbox

| 事件名 | 说明 |
|--------|------|
| `change` | 选中状态改变时触发 |

### 事件 - p-checkbox-group

| 事件名 | 说明 |
|--------|------|
| `change` | 选中值改变时触发 |

### 方法 - p-checkbox

| 方法名 | 说明 |
|--------|------|
| `focus()` | 使复选框获得焦点 |
