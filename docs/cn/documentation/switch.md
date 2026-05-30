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

## 获取值

### 通过 checked 属性获取

使用 `checked` 属性获取开关的选中状态：

<o-playground name="获取值" style="--editor-height: 400px">
  <code path="demo.html" preview active>
    <template>
      <link rel="stylesheet" href="https://punch-ui-v2.pages.dev/packages/css/pui-global.css" />
      <l-m src="https://punch-ui-v2.pages.dev/packages/button/button.html"></l-m>
      <l-m src="https://punch-ui-v2.pages.dev/packages/switch/switch.html"></l-m>
      <div style="padding: 20px;">
        <p-switch id="theme-switch">深色模式</p-switch>
        <p-button style="margin-top: 16px;" id="get-value-btn">获取状态</p-button>
        <p style="margin-top: 16px;">当前状态: <span id="status-display"></span></p>
      </div>
      <script>
        $('#get-value-btn').on('click', () => {
          const isChecked = $('#theme-switch').checked;
          $('#status-display').text = isChecked ? '已开启' : '已关闭';
        });
      </script>
    </template>
  </code>
</o-playground>

### 获取自定义值

当设置了 `checked-value` 和 `unchecked-value` 时，通过 `value` 属性获取当前值：

<o-playground name="获取自定义值" style="--editor-height: 400px">
  <code path="demo.html" preview active>
    <template>
      <link rel="stylesheet" href="https://punch-ui-v2.pages.dev/packages/css/pui-global.css" />
      <l-m src="https://punch-ui-v2.pages.dev/packages/button/button.html"></l-m>
      <l-m src="https://punch-ui-v2.pages.dev/packages/switch/switch.html"></l-m>
      <div style="padding: 20px;">
        <p-switch 
          id="status-switch"
          checked-value="enabled" 
          unchecked-value="disabled"
          checked
        >
          状态开关
        </p-switch>
        <p-button style="margin-top: 16px;" id="get-custom-btn">获取值</p-button>
        <p style="margin-top: 16px;">当前值: <span id="custom-value-display"></span></p>
      </div>
      <script>
        $('#get-custom-btn').on('click', () => {
          const value = $('#status-switch').value;
          $('#custom-value-display').text = value;
        });
      </script>
    </template>
  </code>
</o-playground>

### 监听变化事件

通过监听 `change` 事件实时获取开关状态：

<o-playground name="监听变化事件" style="--editor-height: 400px">
  <code path="demo.html" preview active>
    <template>
      <link rel="stylesheet" href="https://punch-ui-v2.pages.dev/packages/css/pui-global.css" />
      <l-m src="https://punch-ui-v2.pages.dev/packages/switch/switch.html"></l-m>
      <div style="padding: 20px;">
        <p-switch id="realtime-switch">实时监听</p-switch>
        <p style="margin-top: 16px;">当前状态: <span id="realtime-display"></span></p>
      </div>
      <script>
        $('#realtime-switch').on('change', () => {
          const isChecked = $('#realtime-switch').checked;
          $('#realtime-display').text = isChecked ? '已开启' : '已关闭';
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
      <l-m src="https://punch-ui-v2.pages.dev/packages/switch/switch.html"></l-m>
      <div style="padding: 20px;">
        <p-switch 
          sync:value="status"
          checked-value="on"
          unchecked-value="off"
        >
          深色模式
        </p-switch>
        <p style="margin-top: 16px;">当前状态: {{ status }}</p>
      </div>
      <script>
        export default {
          data: {
            status: 'on'
          }
        };
      </script>
    </template>
  </code>
</o-playground>

在组件或页面模块中使用双向绑定时，**请绑定 `value` 属性而不是 `checked` 属性**。

- ✅ 正确：`sync:value="status"` - 绑定 value 属性，配合 `checked-value` 和 `unchecked-value` 使用
- ❌ 错误：`sync:checked="darkMode"` - 不要绑定 checked 属性

这样可以更好地与表单数据集成，并且语义更加清晰。

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
| `value` | 当前值（根据 checked 状态返回 checked-value 或 unchecked-value） | `string` | - |
| `checked-value` | 选中时的值 | `string` | `true` |
| `unchecked-value` | 未选中时的值 | `string` | `false` |
| `default-value` | 默认值 | `string` | - |

### 事件

| 事件名 | 说明 |
|--------|------|
| `change` | 开关状态改变时触发 |

### 方法

| 方法名 | 说明 |
|--------|------|
| `focus()` | 使开关获得焦点 |
