# Punch-UI

基于 [ofa.js](https://github.com/ofajs/ofa.js) 的 UI 组件库。

## 快速开始

### 安装 ofa.js

```html
<script
  src="https://cdn.jsdelivr.net/gh/ofajs/ofa.js/dist/ofa.min.mjs"
  type="module"
></script>
```

## 组件列表

- [Button 按钮组件](./packages/button/README.md)
- [Input 输入框组件](./packages/input/README.md)
- [Select 选择器组件](./packages/select/README.md)
- [Switch 开关组件](./packages/switch/README.md)
- [Textarea 多行文本输入框](./packages/textarea/README.md)
- [Checkbox 复选框组件](./packages/checkbox/README.md)
- [Radio 单选框组件](./packages/radio/README.md)
- [Dialog 对话框组件](./packages/dialog/README.md)
- [List 列表组件](./packages/list/README.md)
- [NavBar 导航栏组件](./packages/navigation/README.md)
- [Util 工具函数](./packages/util/README.md)
  - Toast 提示
  - Alert 警告框
  - Confirm 确认框
  - Prompt 输入框


### 引入组件

```html
<!-- 按钮组件 -->
<l-m src="https://punch-ui-v2.pages.dev/packages/button/button.html"></l-m>

<!-- 输入框组件 -->
<l-m src="https://punch-ui-v2.pages.dev/packages/input/input.html"></l-m>

<!-- 选择器组件 -->
<l-m src="https://punch-ui-v2.pages.dev/packages/select/select.html"></l-m>

<!-- 开关组件 -->
<l-m src="https://punch-ui-v2.pages.dev/packages/switch/switch.html"></l-m>

<!-- 多行文本输入框组件 -->
<l-m src="https://punch-ui-v2.pages.dev/packages/textarea/textarea.html"></l-m>

...
```

### 黑夜/白天模式

首先引入全局样式：

```html
<link
  rel="stylesheet"
  href="https://punch-ui-v2.pages.dev/packages/css/pui-global.css"
/>
```

Punch UI 支持黑夜/白天主题切换。默认情况下，组件会跟随系统主题自动调整。

如需手动控制主题，可在 `html` 元素上添加对应的 class：

```html
<!-- 切换到浅色主题 -->
<html class="theme-light-mode">
  ...
</html>

<!-- 切换到深色主题 -->
<html class="theme-dark-mode">
  ...
</html>
```
