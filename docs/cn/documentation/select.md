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
      <div style="padding: 20px;">
        <p-select placeholder="请选择" style="width: 200px;">
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
      <div style="padding: 20px;">
        <p-select style="width: 150px;">
          <span slot="label">Outlined (默认)</span>
          <p-option value="1">选项 1</p-option>
          <p-option value="2">选项 2</p-option>
        </p-select>
        <p-select variant="filled" style="margin-top: 16px; width: 150px;">
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
      <div style="padding: 20px;">
        <p-select size="xs" style="width: 150px;">
          <span slot="label">Extra Small (xs)</span>
          <p-option value="1">选项 1</p-option>
        </p-select>
        <p-select size="s" style="margin-top: 16px; width: 150px;">
          <span slot="label">Small (s)</span>
          <p-option value="1">选项 1</p-option>
        </p-select>
        <p-select style="margin-top: 16px; width: 150px;">
          <span slot="label">Default</span>
          <p-option value="1">选项 1</p-option>
        </p-select>
        <p-select size="l" style="margin-top: 16px; width: 150px;">
          <span slot="label">Large (l)</span>
          <p-option value="1">选项 1</p-option>
        </p-select>
        <p-select size="xl" style="margin-top: 16px; width: 150px;">
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
      <div style="padding: 20px;">
        <p-select color="primary" style="width: 200px;">
          <span slot="label">Primary Color</span>
          <p-option value="1">选项 1</p-option>
        </p-select>
        <p-select color="success" style="margin-top: 16px; width: 200px;">
          <span slot="label">Success Color</span>
          <p-option value="1">选项 1</p-option>
        </p-select>
        <p-select color="neutral" style="margin-top: 16px; width: 200px;">
          <span slot="label">Neutral Color</span>
          <p-option value="1">选项 1</p-option>
        </p-select>
        <p-select color="error" style="margin-top: 16px; width: 200px;">
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
      <div style="padding: 20px;">
        <p-select style="width: 200px;">
          <span slot="prefix">🌐</span>
          <span slot="label">Language</span>
          <p-option value="en">English</p-option>
          <p-option value="zh">中文</p-option>
        </p-select>
        <p-select style="margin-top: 16px; width: 200px;">
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
      <div style="padding: 20px;">
        <p-select disabled style="width: 200px;">
          <span slot="label">禁用选择器</span>
          <p-option value="1">选项 1</p-option>
          <p-option value="2">选项 2</p-option>
        </p-select>
      </div>
    </template>
  </code>
</o-playground>

## 获取值

### 在 html 中通过 value 属性获取

使用 `value` 属性获取选择器的值：

<o-playground name="获取值" style="--editor-height: 400px">
  <code path="demo.html" preview active>
    <template>
      <link rel="stylesheet" href="https://punch-ui-v2.pages.dev/packages/css/pui-global.css" />
      <l-m src="https://punch-ui-v2.pages.dev/packages/button/button.html"></l-m>
      <l-m src="https://punch-ui-v2.pages.dev/packages/select/select.html"></l-m>
      <l-m src="https://punch-ui-v2.pages.dev/packages/select/option.html"></l-m>
      <div style="padding: 20px;">
        <p-select id="city-select" style="width: 200px;">
          <span slot="label">选择城市</span>
          <p-option value="beijing">北京</p-option>
          <p-option value="shanghai">上海</p-option>
          <p-option value="guangzhou">广州</p-option>
        </p-select>
        <p-button style="margin-top: 16px;" id="get-value-btn">获取值</p-button>
        <p style="margin-top: 16px;">当前值: <span id="value-display"></span></p>
      </div>
      <script>
        $('#get-value-btn').on('click', () => {
          $('#value-display').text = $('#city-select').value;
        });
      </script>
    </template>
  </code>
</o-playground>

### 监听变化事件

通过监听 `change` 事件实时获取选中值：

<o-playground name="监听变化事件" style="--editor-height: 400px">
  <code path="demo.html" preview active>
    <template>
      <link rel="stylesheet" href="https://punch-ui-v2.pages.dev/packages/css/pui-global.css" />
      <l-m src="https://punch-ui-v2.pages.dev/packages/select/select.html"></l-m>
      <l-m src="https://punch-ui-v2.pages.dev/packages/select/option.html"></l-m>
      <div style="padding: 20px;">
        <p-select id="realtime-select" style="width: 200px;">
          <span slot="label">实时选择</span>
          <p-option value="apple">苹果</p-option>
          <p-option value="banana">香蕉</p-option>
          <p-option value="orange">橙子</p-option>
        </p-select>
        <p style="margin-top: 16px;">当前值: <span id="realtime-display"></span></p>
      </div>
      <script>
        $('#realtime-select').on('change', () => {
          $('#realtime-display').text = $('#realtime-select').value;
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
      <l-m src="https://punch-ui-v2.pages.dev/packages/select/select.html"></l-m>
      <l-m src="https://punch-ui-v2.pages.dev/packages/select/option.html"></l-m>
      <div style="padding: 20px;">
        <p-select sync:value="selectedCity" style="width: 200px;">
          <span slot="label">选择城市</span>
          <p-option value="beijing">北京</p-option>
          <p-option value="shanghai">上海</p-option>
          <p-option value="guangzhou">广州</p-option>
        </p-select>
        <p style="margin-top: 16px;">当前值: {{ selectedCity }}</p>
      </div>
      <script>
        export default {
          data: {
            selectedCity: 'shanghai'
          }
        };
      </script>
    </template>
  </code>
</o-playground>

## API

### 属性 - p-select

| 属性 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| `placeholder` | 占位文本 | `string` | - |
| `disabled` | 是否禁用 | `boolean` | `false` |
| `value` | 选中的值 | `string` | - |
| `variant` | 选择器样式 | `outlined` \| `filled` | `outlined` |
| `size` | 选择器尺寸 | `xs` \| `s` \| `l` \| `xl` | - |
| `color` | 选择器颜色 | `primary` \| `error` \| `success` \| `neutral` | - |

### 属性 - p-option

| 属性 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| `value` | 选项的值 | `string` | - |
| `disabled` | 是否禁用 | `boolean` | `false` |

### 插槽 - p-select

| 插槽名 | 说明 |
|--------|------|
| `default` | 选项内容（p-option 组件） |
| `label` | 标签文本 |
| `prefix` | 前缀内容 |
| `suffix` | 后缀内容 |

### 事件

| 事件名 | 说明 |
|--------|------|
| `change` | 选中值改变时触发 |
| `focus` | 选择器获得焦点时触发 |
| `blur` | 选择器失去焦点时触发 |

### 方法

| 方法名 | 说明 |
|--------|------|
| `focus()` | 使选择器获得焦点 |
| `blur()` | 使选择器失去焦点 |
