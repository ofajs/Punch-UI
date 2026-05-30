# 安装

Punch-UI 基于 ofa.js 构建，使用前需要先引入 ofa.js 和全局样式。

## 引入 ofa.js

在 HTML 文件中添加以下脚本标签：

```html
<script src="https://cdn.jsdelivr.net/gh/ofajs/ofa.js/dist/ofa.min.mjs" type="module"></script>
```

## 引入全局样式

Punch-UI 提供了全局样式文件，包含了主题系统和基础样式：

```html
<link rel="stylesheet" href="https://punch-ui-v2.pages.dev/packages/css/pui-global.css" />
```

> **注意**：此步骤为可选步骤。如果不手动引入全局样式，Punch-UI 会自动添加。但是，在深色模式下，自动添加可能会导致页面加载时出现短暂的"白屏闪烁"（从白色突然变为黑色）。为了避免这种视觉闪烁，建议在 `<head>` 中手动引入全局样式。

## 引入组件

使用 `l-m` 标签引入需要的组件。例如，引入按钮组件：

```html
<l-m src="https://punch-ui-v2.pages.dev/packages/button/button.html"></l-m>
```

## 完整示例

下面是一个完整的 HTML 示例，展示了如何引入 ofa.js、全局样式和按钮组件：

```html
<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Punch-UI 示例</title>
  <!-- 引入 ofa.js -->
  <script src="https://cdn.jsdelivr.net/gh/ofajs/ofa.js/dist/ofa.min.mjs" type="module"></script>
  <!-- 引入全局样式 -->
  <link rel="stylesheet" href="https://punch-ui-v2.pages.dev/packages/css/pui-global.css" />
</head>
<body>
  
  <!-- 引入按钮组件 -->
  <l-m src="https://punch-ui-v2.pages.dev/packages/button/button.html"></l-m>
  
  <!-- 使用组件 -->
  <p-button color="primary">点击我</p-button>
</body>
</html>
```

## 组件 CDN 地址

大多数组件都可以通过以下 CDN 地址格式引入：

```
https://punch-ui-v2.pages.dev/packages/[组件名]/[组件文件].html
```

> **注意**：这是一个通用的文件结构模式，但并非所有组件都完全遵循此规则。具体组件的引入路径请参考各组件的文档说明。

例如：
- 按钮：`https://punch-ui-v2.pages.dev/packages/button/button.html`
- 按钮组：`https://punch-ui-v2.pages.dev/packages/button/group.html`
- 输入框：`https://punch-ui-v2.pages.dev/packages/input/input.html`
- 选择器：`https://punch-ui-v2.pages.dev/packages/select/select.html`

## 主题切换

Punch-UI 支持深色/浅色主题切换。默认情况下，组件会自动跟随系统主题。

### 自动跟随系统（默认）

```html
<html>
  <!-- 自动跟随系统主题 -->
</html>
```

### 强制浅色主题

```html
<html class="theme-light-mode">
  <!-- 强制使用浅色主题 -->
</html>
```

### 强制深色主题

```html
<html class="theme-dark-mode">
  <!-- 强制使用深色主题 -->
</html>
```

### 使用主题切换组件

Punch-UI 提供了主题切换组件，方便用户手动切换主题：

```html
<l-m src="https://punch-ui-v2.pages.dev/tool/theme-switch/theme-switch.html"></l-m>
<p-theme-switch></p-theme-switch>
```

## 下一步

- [第一个示例](./first-example.md) - 创建你的第一个 Punch-UI 应用
