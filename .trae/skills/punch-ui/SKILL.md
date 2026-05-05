---
name: "punch-ui"
description: "Punch-UI component library knowledge base. Invoke when user asks about Punch-UI components, usage, theming, or developing new components based on ofa.js."
---

# Punch-UI 组件库使用指南

Punch-UI 是一个基于 ofa.js 的 UI 组件库，提供了丰富的组件和主题定制能力。

## 快速开始

### 安装 ofa.js

所有 Punch-UI 组件都依赖于 ofa.js，首先需要引入 ofa.js：

```html
<script src="https://cdn.jsdelivr.net/gh/ofajs/ofa.js/dist/ofa.min.mjs" type="module"></script>
```

### 引入全局样式

```html
<link rel="stylesheet" href="https://punch-ui-v2.pages.dev/packages/css/pui-global.css" />
```

### 引入组件

使用 `l-m` 标签引入需要的组件：

```html
<l-m src="https://punch-ui-v2.pages.dev/packages/button/button.html"></l-m>
```

## 主题切换

Punch-UI 支持深色/浅色主题切换。默认跟随系统主题，也可以手动控制：

```html
<!-- 浅色主题 -->
<html class="theme-light-mode">...</html>

<!-- 深色主题 -->
<html class="theme-dark-mode">...</html>
```

或使用主题切换组件：

```html
<l-m src="https://punch-ui-v2.pages.dev/tool/theme-switch/theme-switch.html"></l-m>
<p-theme-switch></p-theme-switch>
```

## 组件列表

### Button 按钮组件

引入组件：
```html
<l-m src="https://punch-ui-v2.pages.dev/packages/button/button.html"></l-m>
```

基本用法：
```html
<p-button>Simple Button</p-button>
```

**尺寸**：
```html
<p-button size="xs">XS</p-button>
<p-button size="s">Small</p-button>
<p-button>Medium</p-button>
<p-button size="l">Large</p-button>
<p-button size="xl">XL</p-button>
```

**颜色**：
```html
<p-button>Default</p-button>
<p-button color="primary">Primary</p-button>
<p-button color="error">Error</p-button>
<p-button color="success">Success</p-button>
<p-button color="neutral">Neutral</p-button>
```

**变体**：
```html
<p-button variant="outlined" color="primary">Primary Outlined</p-button>
<p-button variant="outlined" color="error">Error Outlined</p-button>
<p-button variant="outlined" color="success">Success Outlined</p-button>
<p-button variant="text">Text</p-button>
```

**Button Group**：
```html
<l-m src="https://punch-ui-v2.pages.dev/packages/button/group.html"></l-m>

<p-button-group>
  <p-button>按钮 1</p-button>
  <p-button>按钮 2</p-button>
  <p-button>按钮 3</p-button>
</p-button-group>

<p-button-group connected>
  <p-button variant="outlined">首页</p-button>
  <p-button variant="outlined">产品</p-button>
  <p-button variant="outlined">关于</p-button>
</p-button-group>
```

**主要属性**：
- `variant` - 按钮样式（filled, outlined, text）
- `size` - 按钮尺寸（xs, s, l, xl）
- `color` - 按钮颜色（primary, error, success, neutral）
- `disabled` - 是否禁用

### Input 输入框组件

引入组件：
```html
<l-m src="https://punch-ui-v2.pages.dev/packages/input/input.html"></l-m>
```

基本用法：
```html
<p-input>
  <span slot="label">Username</span>
</p-input>
```

**颜色**：
```html
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
```

**变体**：
```html
<p-input variant="filled" color="primary">
  <span slot="label">Primary Filled</span>
</p-input>
```

**尺寸**：
```html
<p-input size="xs">
  <span slot="label">XS Size</span>
</p-input>
<p-input size="s">
  <span slot="label">Small Size</span>
</p-input>
<p-input size="l">
  <span slot="label">Large Size</span>
</p-input>
<p-input size="xl">
  <span slot="label">XL Size</span>
</p-input>
```

**主要属性**：
- `variant` - 输入框样式（outlined, filled）
- `size` - 输入框尺寸（xs, s, l, xl）
- `color` - 输入框颜色（primary, success, error）
- `placeholder` - 占位文本
- `disabled` - 是否禁用
- `readonly` - 是否只读

**插槽**：
- `label` - 标签内容

**事件**：
- `input` - 输入时触发
- `change` - 值改变时触发
- `focus` - 获得焦点时触发
- `blur` - 失去焦点时触发

### Switch 开关组件

引入组件：
```html
<l-m src="https://punch-ui-v2.pages.dev/packages/switch/switch.html"></l-m>
```

基本用法：
```html
<p-switch>Default</p-switch>
<p-switch checked>Checked</p-switch>
```

**尺寸**：
```html
<p-switch size="xs">XS</p-switch>
<p-switch size="s">Small</p-switch>
<p-switch>Medium</p-switch>
<p-switch size="l">Large</p-switch>
<p-switch size="xl">XL</p-switch>
```

**颜色**：
```html
<p-switch color="primary">Primary</p-switch>
<p-switch color="error">Error</p-switch>
<p-switch color="success">Success</p-switch>
```

**状态**：
```html
<p-switch checked>选中状态</p-switch>
<p-switch>未选中状态</p-switch>
<p-switch disabled>禁用</p-switch>
```

**主要属性**：
- `checked` - 是否选中
- `size` - 开关尺寸（xs, s, l, xl）
- `color` - 开关颜色（primary, error, success）
- `disabled` - 是否禁用

**事件**：
- `change` - 状态改变时触发

### Textarea 多行文本输入框

引入组件：
```html
<l-m src="https://punch-ui-v2.pages.dev/packages/textarea/textarea.html"></l-m>
```

基本用法：
```html
<p-textarea>
  <span slot="label">多行文本</span>
</p-textarea>
```

**主要属性**：
- `variant` - 输入框样式（outlined, filled）
- `size` - 输入框尺寸
- `color` - 输入框颜色
- `placeholder` - 占位文本
- `disabled` - 是否禁用
- `readonly` - 是否只读
- `maxlength` - 最大输入长度

**插槽**：
- `label` - 标签内容

**事件**：
- `input` - 输入时触发
- `change` - 值改变时触发
- `focus` - 获得焦点时触发
- `blur` - 失去焦点时触发

### Checkbox 复选框组件

引入组件：
```html
<l-m src="https://punch-ui-v2.pages.dev/packages/checkbox/checkbox.html"></l-m>
```

基本用法：
```html
<p-checkbox>Checkbox</p-checkbox>
<p-checkbox checked>Checked</p-checkbox>
```

**尺寸**：
```html
<p-checkbox size="xs">XS</p-checkbox>
<p-checkbox size="s">Small</p-checkbox>
<p-checkbox>Medium</p-checkbox>
<p-checkbox size="l">Large</p-checkbox>
<p-checkbox size="xl">XL</p-checkbox>
```

**颜色**：
```html
<p-checkbox color="primary" checked>Primary</p-checkbox>
<p-checkbox color="success" checked>Success</p-checkbox>
<p-checkbox color="error" checked>Error</p-checkbox>
<p-checkbox color="neutral" checked>Neutral</p-checkbox>
```

**状态**：
```html
<p-checkbox>Default</p-checkbox>
<p-checkbox variant="tonal">Tonal</p-checkbox>
<p-checkbox checked>Checked</p-checkbox>
<p-checkbox disabled>Disabled</p-checkbox>
<p-checkbox indeterminate>Indeterminate</p-checkbox>
```

**Checkbox Group**：
```html
<l-m src="https://punch-ui-v2.pages.dev/packages/checkbox/group.html"></l-m>

<p-checkbox-group id="demo-checkbox-group" :value="demoCheckboxGroupValue">
  <p-checkbox value="1">选项 1</p-checkbox>
  <p-checkbox value="2" checked>选项 2</p-checkbox>
  <p-checkbox value="3">选项 3</p-checkbox>
</p-checkbox-group>
```

**主要属性**：
- `checked` - 是否选中
- `variant` - 复选框样式（filled, tonal）
- `size` - 复选框尺寸（xs, s, l, xl）
- `color` - 复选框颜色（primary, success, error, neutral）
- `disabled` - 是否禁用
- `indeterminate` - 是否为不确定状态
- `value` - 表单值

**事件**：
- `change` - 选中状态改变时触发

### Radio 单选框组件

引入组件：
```html
<l-m src="https://punch-ui-v2.pages.dev/packages/radio/radio.html"></l-m>
```

基本用法：
```html
<p-radio>Radio</p-radio>
<p-radio checked>Checked</p-radio>
```

**尺寸**：
```html
<p-radio size="xs">XS</p-radio>
<p-radio size="s">Small</p-radio>
<p-radio>Medium</p-radio>
<p-radio size="l">Large</p-radio>
<p-radio size="xl">XL</p-radio>
```

**颜色**：
```html
<p-radio color="primary" checked>Primary</p-radio>
<p-radio color="success" checked>Success</p-radio>
<p-radio color="error" checked>Error</p-radio>
<p-radio color="neutral" checked>Neutral</p-radio>
```

**状态**：
```html
<p-radio>Default</p-radio>
<p-radio variant="tonal">Tonal</p-radio>
<p-radio checked>Checked</p-radio>
<p-radio disabled>Disabled</p-radio>
```

**Radio Group**：
```html
<l-m src="https://punch-ui-v2.pages.dev/packages/radio/group.html"></l-m>

<p-radio-group id="demo-radio-group" :value="demoRadioGroupValue">
  <p-radio value="a">选项 A</p-radio>
  <p-radio value="b" checked>选项 B</p-radio>
  <p-radio value="c">选项 C</p-radio>
</p-radio-group>
```

**主要属性**：
- `checked` - 是否选中
- `variant` - 单选框样式（filled, tonal）
- `size` - 单选框尺寸（xs, s, l, xl）
- `color` - 单选框颜色（primary, success, error, neutral）
- `disabled` - 是否禁用
- `value` - 表单值

**事件**：
- `change` - 选中状态改变时触发

### List 列表组件

引入组件：
```html
<l-m src="https://punch-ui-v2.pages.dev/packages/list/list.html"></l-m>
```

**基本列表**：
```html
<p-list>
  <p-list-item>单行列表项</p-list-item>
  <p-list-item>单行列表项</p-list-item>
  <p-list-item>单行列表项</p-list-item>
</p-list>
```

**带前缀图标**：
```html
<p-list>
  <p-list-item>
    <span slot="prefix" style="width: 40px; height: 40px; border-radius: 50%; background-color: var(--md-sys-color-primary-container); color: var(--md-sys-color-on-primary-container); display: flex; align-items: center; justify-content: center;">A</span>
    用户名
    <div secondary>user@example.com</div>
  </p-list-item>
</p-list>
```

**带后缀**：
```html
<p-list>
  <p-list-item>
    <span slot="prefix" style="width: 40px; height: 40px; border-radius: 50%; background-color: var(--md-sys-color-tertiary-container); color: var(--md-sys-color-on-tertiary-container); display: flex; align-items: center; justify-content: center;">C</span>
    列表项
    <span slot="suffix" style="color: var(--md-sys-color-on-surface-variant)">›</span>
  </p-list-item>
</p-list>
```

**主要属性**：
- `variant` - 列表项样式
- `color` - 列表项颜色
- `disabled` - 是否禁用
- `active` - 是否选中

**插槽**：
- `prefix` - 前缀内容
- `default` - 列表项主内容
- `suffix` - 后缀内容

### Select 选择器组件

引入组件：
```html
<l-m src="https://punch-ui-v2.pages.dev/packages/select/select.html"></l-m>
```

**基本用法**：
```html
<p-select placeholder="Please select">
  <span slot="label">Select Country</span>
  <p-option value="us">United States</p-option>
  <p-option value="uk">United Kingdom</p-option>
  <p-option value="cn">China</p-option>
  <p-option value="jp">Japan</p-option>
</p-select>
```

**变体**：
```html
<p-select>
  <span slot="label">Outlined Select</span>
  <p-option value="1">Option 1</p-option>
  <p-option value="2">Option 2</p-option>
</p-select>
<p-select variant="filled">
  <span slot="label">Filled Select</span>
  <p-option value="1">Option 1</p-option>
  <p-option value="2">Option 2</p-option>
</p-select>
```

**尺寸**：
```html
<p-select size="xs">
  <span slot="label">Extra Small (xs)</span>
  <p-option value="1">Option 1</p-option>
</p-select>
<p-select size="s">
  <span slot="label">Small (s)</span>
  <p-option value="1">Option 1</p-option>
</p-select>
<p-select>
  <span slot="label">Default</span>
  <p-option value="1">Option 1</p-option>
</p-select>
<p-select size="l">
  <span slot="label">Large (l)</span>
  <p-option value="1">Option 1</p-option>
</p-select>
<p-select size="xl">
  <span slot="label">Extra Large (xl)</span>
  <p-option value="1">Option 1</p-option>
</p-select>
```

**颜色**：
```html
<p-select color="primary">
  <span slot="label">Primary Color</span>
  <p-option value="1">Option 1</p-option>
</p-select>
<p-select color="success">
  <span slot="label">Success Color</span>
  <p-option value="1">Option 1</p-option>
</p-select>
<p-select color="neutral">
  <span slot="label">Neutral Color</span>
  <p-option value="1">Option 1</p-option>
</p-select>
<p-select color="error">
  <span slot="label">Error Color</span>
  <p-option value="1">Option 1</p-option>
</p-select>
```

**前缀和后缀**：
```html
<p-select>
  <span slot="prefix">🌐</span>
  <span slot="label">Language</span>
  <p-option value="en">English</p-option>
  <p-option value="zh">中文</p-option>
</p-select>
<p-select>
  <span slot="label">Currency</span>
  <span slot="suffix">💰</span>
  <p-option value="usd">USD</p-option>
  <p-option value="eur">EUR</p-option>
</p-select>
```

**禁用状态**：
```html
<p-select disabled>
  <span slot="label">Disabled Select</span>
  <p-option value="1">Option 1</p-option>
</p-select>
```

**禁用选项**：
```html
<p-select>
  <span slot="label">Select Option</span>
  <p-option value="1">Available Option 1</p-option>
  <p-option value="2" disabled>Disabled Option 2</p-option>
  <p-option value="3">Available Option 3</p-option>
</p-select>
```

**主要属性**：
- `variant` - 选择器样式（filled, outlined）
- `size` - 选择器尺寸（xs, s, l, xl）
- `color` - 选择器颜色（primary, success, neutral, error）
- `placeholder` - 占位文本
- `disabled` - 是否禁用
- `hang-label` - 标签是否浮动

**p-option 属性**：
- `value` - 选项的值
- `disabled` - 是否禁用
- `selected` - 是否默认选中

**插槽**：
- `label` - 标签内容
- `prefix` - 前缀内容
- `suffix` - 后缀内容
- `default` - 选项内容（p-option 元素）

**事件**：
- `change` - 值改变时触发

**编程控制**：
```javascript
// 设置值
$("p-select").value = "option1";

// 获取值
const value = $("p-select").value;

// 清空选择
$("p-select").value = null;
```

### Dialog 对话框组件

引入组件：
```html
<l-m src="https://punch-ui-v2.pages.dev/packages/dialog/dialog.html"></l-m>
```

**基本对话框**：
```html
<p-button id="show-dialog-btn" on:click="demoDialogOpen = true">
  打开对话框
</p-button>

<p-dialog id="demo-dialog" auto-close sync:open="demoDialogOpen">
  <span slot="title">对话框标题</span>
  <div>
    <p>这是一个对话框示例。</p>
    <p>点击遮罩层可以关闭对话框。</p>
  </div>
  <div slot="bottom">
    <p-button color="primary" on:click="demoDialogOpen = false">确定</p-button>
    <p-button variant="text" on:click="demoDialogOpen = false">取消</p-button>
  </div>
</p-dialog>
```

**对话框变体**：
```html
<p-dialog variant="filled" sync:open="filledDialogOpen">
  <span slot="title">Filled 对话框</span>
  <div>
    <p>这是一个 Filled 样式的对话框。</p>
  </div>
  <div slot="bottom">
    <p-button color="primary" on:click="filledDialogOpen = false">确定</p-button>
  </div>
</p-dialog>
```

**主要属性**：
- `variant` - 对话框样式（filled, tonal, outlined）
- `color` - 对话框颜色
- `open` - 是否打开
- `auto-close` - 点击遮罩是否自动关闭

**插槽**：
- `title` - 对话框标题
- `default` - 对话框内容
- `bottom` - 底部按钮区域

**事件**：
- `click-mask` - 点击遮罩层时触发

### Navigation 导航组件

Navigation 组件包提供了导航栏、导航项和导航布局组件，用于构建响应式的应用导航系统。

**引入组件**：
```html
<l-m src="https://punch-ui-v2.pages.dev/packages/navigation/nav-bar.html"></l-m>
```

**基本用法 - 导航栏**：
```html
<p-nav-bar>
  <p-nav-item attr:active="active === 'home'" on:click="active = 'home'">
    <span slot="icon">🏠</span>
    <span>Home</span>
  </p-nav-item>
  <p-nav-item attr:active="active === 'bookmarks'" on:click="active = 'bookmarks'">
    <span slot="icon">📑</span>
    <span>Bookmarks</span>
  </p-nav-item>
  <p-nav-item attr:active="active === 'about'" on:click="active = 'about'">
    <span slot="icon">👤</span>
    <span>About</span>
  </p-nav-item>
</p-nav-bar>
```

**垂直导航栏**：
```html
<p-nav-bar style="height: 400px; display: inline-flex; flex-direction: column">
  <p-nav-item attr:active="active === 'home'" on:click="active = 'home'">
    <span slot="icon">🏠</span>
    <span>Home</span>
  </p-nav-item>
  <p-nav-item attr:active="active === 'settings'" on:click="active = 'settings'">
    <span slot="icon">⚙️</span>
    <span>Settings</span>
  </p-nav-item>
</p-nav-bar>
```

**标签平行模式**：
```html
<p-nav-bar style="--label-parallel: true; padding: 8px 12px;">
  <p-nav-item attr:active="active === 'home'" on:click="active = 'home'">
    <span slot="icon">🏠</span>
    <span>Home</span>
  </p-nav-item>
  <p-nav-item attr:active="active === 'about'" on:click="active = 'about'">
    <span slot="icon">👤</span>
    <span>About</span>
  </p-nav-item>
</p-nav-bar>
```

**禁用状态**：
```html
<p-nav-item disabled>
  <span slot="icon">⚙️</span>
  <span>Settings</span>
</p-nav-item>
```

**导航布局**：
```html
<l-m src="https://punch-ui-v2.pages.dev/packages/navigation/nav-layout.html"></l-m>

<p-nav-layout>
  <!-- 主内容区域 -->
  <div>
    <h1>Main Content</h1>
    <p>Your content goes here...</p>
  </div>
  
  <!-- 导航栏 -->
  <p-nav-bar slot="nav">
    <p-nav-item attr:active="active === 'home'" on:click="active = 'home'">
      <span slot="icon">🏠</span>
      <span>Home</span>
    </p-nav-item>
    <p-nav-item attr:active="active === 'bookmarks'" on:click="active = 'bookmarks'">
      <span slot="icon">📑</span>
      <span>Bookmarks</span>
    </p-nav-item>
    <p-nav-item attr:active="active === 'about'" on:click="active = 'about'">
      <span slot="icon">👤</span>
      <span>About</span>
    </p-nav-item>
  </p-nav-bar>
</p-nav-layout>
```

**响应式行为**：
- **移动端 (< 768px)**：底部导航栏，图标和标签垂直排列
- **平板 (768px - 1024px)**：底部导航栏，图标和标签水平排列
- **桌面端 (> 1024px)**：左侧垂直导航栏

**主要属性 - p-nav-item**：
- `active` - 是否为激活状态
- `disabled` - 是否禁用

**插槽 - p-nav-bar**：
- `default` - 包含的 p-nav-item 元素

**插槽 - p-nav-item**：
- `icon` - 导航项图标
- `default` - 导航项标签

**插槽 - p-nav-layout**：
- `default` - 主内容区域
- `nav` - 导航栏（p-nav-bar）

**CSS 变量 - p-nav-bar**：
- `--label-parallel` - 图标和标签是否水平排列（true/false）

**事件 - p-nav-item**：
- `change-active` - 激活状态改变时触发
- `click` - 点击导航项时触发

## 工具函数

Punch-UI 提供了一些实用的工具函数，用于快速显示提示和对话框。

### Toast 提示

显示简短的提示消息，自动消失。

**引入方式**：
```javascript
import toast from 'https://punch-ui-v2.pages.dev/packages/util/toast.js';
```

**基本用法**：
```javascript
// 简单文本
toast('操作成功');

// 带配置选项
toast({
  message: '保存成功！',
  duration: 3000,  // 显示时长（毫秒），默认 3000
  color: 'primary'  // 颜色：primary, success, error, neutral
});
```

**手动关闭**：
```javascript
const toastInstance = toast('正在处理...');
// 稍后手动关闭
toastInstance.close();
```

**参数说明**：
- `message` / `content` - 提示消息内容
- `duration` / `time` - 显示时长（毫秒），默认 3000，设为 0 则不自动关闭
- `color` - 提示颜色（primary, success, error, neutral）

**返回值**：
- `close` - 关闭提示的方法
- `el` - 提示元素引用

### Alert 警告框

显示一个警告对话框，只有确认按钮。

**引入方式**：
```javascript
import alert from 'https://punch-ui-v2.pages.dev/packages/util/alert.js';
```

**基本用法**：
```javascript
// 简单文本
await alert('这是一个警告消息');

// 带标题
await alert({
  title: '提示',
  message: '操作已完成',
  ok: '确定'  // 确认按钮文本
});
```

**参数说明**：
- `title` - 对话框标题
- `message` / `content` - 消息内容
- `ok` / `yes` - 确认按钮文本，默认 "OK"

**返回值**：Promise，点击确认按钮后 resolve

### Confirm 确认框

显示一个确认对话框，包含确认和取消按钮。

**引入方式**：
```javascript
import confirm from 'https://punch-ui-v2.pages.dev/packages/util/confirm.js';
```

**基本用法**：
```javascript
// 简单文本
const result = await confirm('确定要删除吗？');
if (result) {
  console.log('用户点击了确认');
} else {
  console.log('用户点击了取消');
}

// 带标题和自定义按钮文本
const result = await confirm({
  title: '删除确认',
  message: '此操作不可恢复，确定要删除吗？',
  yes: '删除',
  cancel: '取消'
});
```

**参数说明**：
- `title` - 对话框标题
- `message` / `content` - 消息内容
- `yes` - 确认按钮文本，默认 "Yes"
- `cancel` - 取消按钮文本，默认 "Cancel"

**返回值**：Promise<boolean>，点击确认返回 true，点击取消返回 false

### Prompt 输入框

显示一个带输入框的对话框，用于获取用户输入。

**引入方式**：
```javascript
import prompt from 'https://punch-ui-v2.pages.dev/packages/util/prompt.js';
```

**基本用法**：
```javascript
// 简单文本
const value = await prompt('请输入您的名字：');
if (value !== null) {
  console.log('用户输入：', value);
} else {
  console.log('用户取消了输入');
}

// 带完整配置
const value = await prompt({
  title: '用户信息',
  message: '请输入您的用户名：',
  placeholder: '请输入用户名',
  value: '默认值',  // 默认输入值
  label: '用户名',  // 输入框标签
  yes: '确定',
  cancel: '取消'
});
```

**参数说明**：
- `title` - 对话框标题
- `message` / `content` - 提示消息
- `placeholder` - 输入框占位符
- `value` - 输入框默认值
- `label` - 输入框标签
- `yes` - 确认按钮文本，默认 "Yes"
- `cancel` - 取消按钮文本，默认 "Cancel"

**返回值**：Promise<string | null>，点击确认返回输入的值，点击取消返回 null

**特殊功能**：
- 自动聚焦到输入框
- 支持 Enter 键提交

### 统一引入方式

也可以从统一的入口引入所有工具函数：

```javascript
import { toast, alert, confirm, prompt } from 'https://punch-ui-v2.pages.dev/packages/util.js';
```

### 完整示例

```html
<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>工具函数示例</title>
  <script src="https://cdn.jsdelivr.net/gh/ofajs/ofa.js/dist/ofa.min.mjs" type="module"></script>
  <link rel="stylesheet" href="https://punch-ui-v2.pages.dev/packages/css/pui-global.css" />
</head>
<body>
  <div style="padding: 20px; display: flex; gap: 12px; flex-wrap: wrap;">
    <button id="toast-btn">显示 Toast</button>
    <button id="alert-btn">显示 Alert</button>
    <button id="confirm-btn">显示 Confirm</button>
    <button id="prompt-btn">显示 Prompt</button>
  </div>

  <script type="module">
    import { toast, alert, confirm, prompt } from 'https://punch-ui-v2.pages.dev/packages/util.js';

    $('#toast-btn').on('click', async () => {
      toast({
        message: '操作成功！',
        color: 'success'
      });
    });

    $('#alert-btn').on('click', async () => {
      await alert({
        title: '提示',
        message: '这是一条重要信息',
        ok: '知道了'
      });
    });

    $('#confirm-btn').on('click', async () => {
      const result = await confirm({
        title: '删除确认',
        message: '确定要删除这个项目吗？',
        yes: '删除',
        cancel: '取消'
      });
      
      if (result) {
        toast({ message: '已删除', color: 'error' });
      }
    });

    $('#prompt-btn').on('click', async () => {
      const name = await prompt({
        title: '用户信息',
        message: '请输入您的名字：',
        placeholder: '请输入名字',
        label: '姓名'
      });
      
      if (name !== null) {
        toast({ message: `你好，${name}！`, color: 'success' });
      }
    });
  </script>
</body>
</html>
```

## 通用特性

### 尺寸系统

大多数组件支持以下尺寸：
- `xs` - 超小
- `s` - 小
- 默认 - 中等
- `l` - 大
- `xl` - 超大

### 颜色系统

支持的颜色：
- `primary` - 主色
- `success` - 成功
- `error` - 错误
- `neutral` - 中性

### 变体系统

常见的变体：
- `filled` - 填充样式
- `outlined` - 描边样式
- `text` - 文本样式
- `tonal` - 色调样式

## 最佳实践

1. **按需引入**：只引入需要的组件，减少加载时间
2. **主题一致性**：使用统一的颜色和尺寸系统
3. **响应式设计**：利用组件的响应式特性
4. **可访问性**：为组件添加适当的标签和描述

## 常见问题

### 如何获取组件的值？

```javascript
// Input
const value = $('p-input').value;

// Switch
const checked = $('p-switch').checked;

// Checkbox Group
const values = $('p-checkbox-group').value;

// Radio Group
const value = $('p-radio-group').value;
```

### 如何监听组件事件？

```javascript
// 使用 on 方法
$('p-input').on('change', (e) => {
  console.log('Value changed:', e.detail.value);
});

// 在模板中使用
// on:change="handleChange"
```

### 如何动态控制组件状态？

```javascript
// 设置属性
$('p-button').disabled = true;
$('p-switch').checked = true;

// 在模板中使用动态属性
// attr:disabled="isDisabled"
// attr:checked="isChecked"
```

## 示例项目

完整的示例项目结构：

```html
<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Punch-UI Demo</title>
  <script src="https://cdn.jsdelivr.net/gh/ofajs/ofa.js/dist/ofa.min.mjs" type="module"></script>
  <link rel="stylesheet" href="https://punch-ui-v2.pages.dev/packages/css/pui-global.css" />
</head>
<body>
  <l-m src="https://punch-ui-v2.pages.dev/packages/button/button.html"></l-m>
  <l-m src="https://punch-ui-v2.pages.dev/packages/input/input.html"></l-m>
  <l-m src="https://punch-ui-v2.pages.dev/packages/switch/switch.html"></l-m>
  
  <div style="padding: 20px;">
    <p-input>
      <span slot="label">Username</span>
    </p-input>
    
    <p-switch>Enable notifications</p-switch>
    
    <p-button on:click="handleSubmit">Submit</p-button>
  </div>

  <script type="module">
    export default {
      data: {
        username: '',
        notifications: false
      },
      proto: {
        handleSubmit() {
          const username = $('p-input').value;
          const notifications = $('p-switch').checked;
          console.log('Username:', username);
          console.log('Notifications:', notifications);
        }
      }
    };
  </script>
</body>
</html>
```

## 相关资源

- [ofa.js 官方文档](https://github.com/ofajs/ofa.js)
- [Punch-UI GitHub](https://github.com/kirakiray/Punch-UI)
- [在线演示](https://punch-ui-v2.pages.dev/)
