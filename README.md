# Punch-UI

基于 [ofa.js](https://github.com/ofajs/ofa.js) 的 UI 组件库。

## 组件列表

- [Button 按钮组件](./packages/button/README.md)
- [Input 输入框组件](./packages/input/README.md)
- [Switch 开关组件](./packages/switch/README.md)
- [Textarea 多行文本输入框](./packages/textarea/README.md)

## 快速开始

### 安装 ofa.js

```html
<script
  src="https://cdn.jsdelivr.net/gh/ofajs/ofa.js/dist/ofa.min.mjs"
  type="module"
></script>
```

### 引入组件

```html
<!-- 按钮组件 -->
<l-m src="https://punch-ui-v2.pages.dev/packages/button/button.html"></l-m>

<!-- 输入框组件 -->
<l-m src="https://punch-ui-v2.pages.dev/packages/input/input.html"></l-m>

<!-- 开关组件 -->
<l-m src="https://punch-ui-v2.pages.dev/packages/switch/switch.html"></l-m>

<!-- 多行文本输入框组件 -->
<l-m src="https://punch-ui-v2.pages.dev/packages/textarea/textarea.html"></l-m>
```

### 使用组件

```html
<p-button>按钮</p-button>
<p-input><span slot="label">输入框</span></p-input>
<p-switch>开关</p-switch>
<p-textarea><span slot="label">多行文本</span></p-textarea>
```