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

## 设计系统

### Color 颜色系统

Punch-UI 使用 Material Design 3 的颜色系统，提供完整的调色板和主题支持。

- **详细文档**：[color.md](./references/color.md)
- **特性**：
  - 语义化颜色变量（primary, success, error, neutral, surface）
  - 自动主题适配（浅色/深色模式）
  - 完整的基础调色板（0-100 色阶）
  - 对比度保证的文字颜色
- **引入**：`<link rel="stylesheet" href="https://punch-ui-v2.pages.dev/packages/css/pui-global.css" />`

## 组件列表

Punch-UI 提供了丰富的组件库，以下是可用组件的概览。详细的组件文档请查看 [references](./references/) 目录。

### 基础组件

- **Button 按钮组件** - 提供多种样式、尺寸和颜色的按钮
  - 详细文档：[button.md](./references/button.md)
  - 高级用法：分段控制器（单选）、筛选标签（多选）、自定义样式（CSS Part）
  - 引入：`<l-m src="https://punch-ui-v2.pages.dev/packages/button/button.html"></l-m>`

- **Input 输入框组件** - 支持多种样式和尺寸的输入框
  - 详细文档：[input.md](./references/input.md)
  - 高级用法：自定义样式（`::part(input)` CSS选择器）
  - 引入：`<l-m src="https://punch-ui-v2.pages.dev/packages/input/input.html"></l-m>`

- **Textarea 多行文本输入框** - 多行文本输入组件
  - 详细文档：[textarea.md](./references/textarea.md)
  - 特性：响应式高度、表单集成
  - 引入：`<l-m src="https://punch-ui-v2.pages.dev/packages/textarea/textarea.html"></l-m>`

### 表单组件

- **Switch 开关组件** - 开关切换组件
  - 详细文档：[switch.md](./references/switch.md)
  - 高级用法：自定义值（`checked-value`/`unchecked-value`）、自动聚焦、键盘操作
  - 引入：`<l-m src="https://punch-ui-v2.pages.dev/packages/switch/switch.html"></l-m>`

- **Checkbox 复选框组件** - 支持单个和组合的复选框
  - 详细文档：[checkbox.md](./references/checkbox.md)
  - 引入：`<l-m src="https://punch-ui-v2.pages.dev/packages/checkbox/checkbox.html"></l-m>`

- **Radio 单选框组件** - 支持单个和组合的单选框
  - 详细文档：[radio.md](./references/radio.md)
  - 引入：`<l-m src="https://punch-ui-v2.pages.dev/packages/radio/radio.html"></l-m>`

- **Select 选择器组件** - 下拉选择器组件
  - 详细文档：[select.md](./references/select.md)
  - 引入：`<l-m src="https://punch-ui-v2.pages.dev/packages/select/select.html"></l-m>`

### 数据展示组件

- **List 列表组件** - 列表项组件，支持前缀和后缀
  - 详细文档：[list.md](./references/list.md)
  - 高级用法：可折叠列表（`collapsible`/`expanded`）、设置列表（单选）、分类筛选（多选）
  - 引入：`<l-m src="https://punch-ui-v2.pages.dev/packages/list/list.html"></l-m>`

### 反馈组件

- **Dialog 对话框组件** - 模态对话框组件
  - 详细文档：[dialog.md](./references/dialog.md)
  - 高级用法：移动端适配（`auto-to-mobile-width`，默认540px）
  - 引入：`<l-m src="https://punch-ui-v2.pages.dev/packages/dialog/dialog.html"></l-m>`

### 导航组件

- **Navigation 导航组件** - 导航栏和导航布局组件
  - 详细文档：[navigation.md](./references/navigation.md)
  - 高级用法：`p-nav-layout` 响应式布局（移动端底部导航、桌面端左侧导航）
  - 引入：`<l-m src="https://punch-ui-v2.pages.dev/packages/navigation/nav-bar.html"></l-m>`

- **Tabs 标签组件** - 标签栏和标签项组件
  - 详细文档：[tabs.md](./references/tabs.md)
  - 引入：`<l-m src="https://punch-ui-v2.pages.dev/packages/tabs/tab-bar.html"></l-m>`

## 工具函数

Punch-UI 提供了一套实用的工具函数，用于快速显示提示和对话框。

- **Util 工具函数** - 提供便捷的交互工具
  - 详细文档：[util.md](./references/util.md)
  - 包含工具：
    - **Toast 提示** - 显示简短的提示消息，自动消失
    - **Alert 警告框** - 显示警告对话框，只有确认按钮
    - **Confirm 确认框** - 显示确认对话框，包含确认和取消按钮
    - **Prompt 输入框** - 显示带输入框的对话框，用于获取用户输入
  - 引入方式：
    ```javascript
    // 单独引入
    import toast from 'https://punch-ui-v2.pages.dev/packages/util/toast.js';
    import alert from 'https://punch-ui-v2.pages.dev/packages/util/alert.js';
    import confirm from 'https://punch-ui-v2.pages.dev/packages/util/confirm.js';
    import prompt from 'https://punch-ui-v2.pages.dev/packages/util/prompt.js';
    
    // 统一引入
    import { toast, alert, confirm, prompt } from 'https://punch-ui-v2.pages.dev/packages/util.js';
    ```

## 组件通用特性

所有 Punch-UI 组件都支持以下通用特性：

### 尺寸系统

大多数组件支持以下尺寸：
- `xs` - 超小
- `s` - 小
- 默认 - 中等
- `l` - 大
- `xl` - 超大

### 颜色系统

组件支持以下颜色主题：
- `primary` - 主要颜色
- `success` - 成功状态
- `error` - 错误状态
- `neutral` - 中性颜色

### 变体样式

许多组件支持以下变体：
- `filled` - 填充样式
- `outlined` - 轮廓样式
- `text` - 文本样式
- `tonal` - 色调样式

### 状态

所有组件都支持：
- `disabled` - 禁用状态
- 响应主题切换（深色/浅色模式）

## 更多资源

- 详细组件文档：查看 [references](./references/) 目录
- 高级用法示例：各组件文档中的"高级用法"章节
- ofa.js 文档：[ofa.js 官方文档](https://github.com/ofajs/ofa.js)
