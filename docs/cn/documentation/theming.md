# 主题定制

Punch-UI 提供了灵活的主题定制能力，你可以通过 CSS 变量自定义主题颜色。

## 主题切换

### 自动主题切换

默认情况下，Punch-UI 会自动跟随系统主题：

```html
<html>
  <!-- 自动跟随系统主题 -->
  <head>
    <link rel="stylesheet" href="https://punch-ui-v2.pages.dev/packages/css/pui-global.css" />
  </head>
</html>
```

### 手动主题切换

你可以通过在 `html` 元素上添加 class 来强制使用特定主题：

```html
<!-- 强制浅色主题 -->
<html class="theme-light-mode">
  ...
</html>

<!-- 强制深色主题 -->
<html class="theme-dark-mode">
  ...
</html>
```

### 主题切换组件

Punch-UI 提供了一个主题切换组件，方便用户手动切换主题：

```html
<l-m src="https://punch-ui-v2.pages.dev/tool/theme-switch/theme-switch.html"></l-m>
<p-theme-switch></p-theme-switch>
```

<o-playground name="主题切换示例" style="--editor-height: 400px">
  <code path="demo.html" preview active>
    <template>
      <link rel="stylesheet" href="https://punch-ui-v2.pages.dev/packages/css/pui-global.css" />
      <script src="https://cdn.jsdelivr.net/gh/ofajs/ofa.js/dist/ofa.min.mjs" type="module"></script>
      <l-m src="https://punch-ui-v2.pages.dev/tool/theme-switch/theme-switch.html"></l-m>
      <l-m src="https://punch-ui-v2.pages.dev/packages/button/button.html"></l-m>
      <div style="padding: 20px; text-align: center;">
        <h3>主题切换</h3>
        <p-theme-switch></p-theme-switch>
        <div style="margin-top: 20px;">
          <p-button color="primary">主要按钮</p-button>
          <p-button color="success">成功按钮</p-button>
          <p-button color="error">错误按钮</p-button>
        </div>
      </div>
    </template>
  </code>
</o-playground>

## 自定义主题颜色

### 覆盖 CSS 变量

你可以通过覆盖 CSS 变量来自定义主题颜色：

```html
<style>
  :root {
    /* 自定义主色 */
    --md-sys-color-primary: #6750a4;
    --md-sys-color-on-primary: #ffffff;
    --md-sys-color-primary-container: #eaddff;
    --md-sys-color-on-primary-container: #21005d;
  }
  
  /* 深色主题下的自定义颜色 */
  :root.theme-dark-mode {
    --md-sys-color-primary: #d0bcff;
    --md-sys-color-on-primary: #381e72;
    --md-sys-color-primary-container: #4f378b;
    --md-sys-color-on-primary-container: #eaddff;
  }
</style>
```

### 完整示例

<o-playground name="自定义主题颜色" style="--editor-height: 600px">
  <code path="demo.html" preview active>
    <template>
      <link rel="stylesheet" href="https://punch-ui-v2.pages.dev/packages/css/pui-global.css" />
      <script src="https://cdn.jsdelivr.net/gh/ofajs/ofa.js/dist/ofa.min.mjs" type="module"></script>
      <l-m src="https://punch-ui-v2.pages.dev/packages/button/button.html"></l-m>
      <style>
        :root {
          /* 自定义主色为紫色 */
          --md-sys-color-primary: #6750a4;
          --md-sys-color-on-primary: #ffffff;
          --md-sys-color-primary-container: #eaddff;
          --md-sys-color-on-primary-container: #21005d;
        }
        :root.theme-dark-mode {
          --md-sys-color-primary: #d0bcff;
          --md-sys-color-on-primary: #381e72;
          --md-sys-color-primary-container: #4f378b;
          --md-sys-color-on-primary-container: #eaddff;
        }
        .demo-container {
          padding: 20px;
          max-width: 400px;
          margin: 0 auto;
        }
      </style>
      <div class="demo-container">
        <h3>自定义紫色主题</h3>
        <p-button color="primary">自定义主色按钮</p-button>
        <p-button variant="outlined" color="primary">轮廓按钮</p-button>
      </div>
    </template>
  </code>
</o-playground>

## 创建自定义主题

### 步骤 1：定义颜色变量

创建一个 CSS 文件，定义你的主题颜色：

```css
/* custom-theme.css */

/* 浅色主题 */
:root {
  /* 主色 */
  --md-sys-color-primary: #0060a9;
  --md-sys-color-on-primary: #ffffff;
  --md-sys-color-primary-container: #d3e4ff;
  --md-sys-color-on-primary-container: #001c38;
  
  /* 成功色 */
  --md-sys-color-success: #3a6a24;
  --md-sys-color-on-success: #ffffff;
  --md-sys-color-success-container: #baf29c;
  --md-sys-color-on-success-container: #062100;
  
  /* 错误色 */
  --md-sys-color-error: #bc1421;
  --md-sys-color-on-error: #ffffff;
  --md-sys-color-error-container: #ffdad7;
  --md-sys-color-on-error-container: #410004;
  
  /* 中性色 */
  --md-sys-color-neutral: #5e5e5e;
  --md-sys-color-on-neutral: #ffffff;
  --md-sys-color-neutral-container: #e3e2e2;
  --md-sys-color-on-neutral-container: #1b1c1c;
}

/* 深色主题 */
:root.theme-dark-mode {
  /* 主色 */
  --md-sys-color-primary: #a2c9ff;
  --md-sys-color-on-primary: #00315b;
  --md-sys-color-primary-container: #004881;
  --md-sys-color-on-primary-container: #d3e4ff;
  
  /* 成功色 */
  --md-sys-color-success: #9fd582;
  --md-sys-color-on-success: #103900;
  --md-sys-color-success-container: #22510d;
  --md-sys-color-on-success-container: #baf29c;
  
  /* 错误色 */
  --md-sys-color-error: #ffb3ad;
  --md-sys-color-on-error: #68000a;
  --md-sys-color-error-container: #930013;
  --md-sys-color-on-error-container: #ffdad7;
  
  /* 中性色 */
  --md-sys-color-neutral: #c7c6c6;
  --md-sys-color-on-neutral: #303031;
  --md-sys-color-neutral-container: #464747;
  --md-sys-color-on-neutral-container: #e3e2e2;
}
```

### 步骤 2：引入自定义主题

在你的 HTML 文件中引入自定义主题样式：

```html
<link rel="stylesheet" href="https://punch-ui-v2.pages.dev/packages/css/pui-global.css" />
<link rel="stylesheet" href="./custom-theme.css" />
```

## 组件样式定制

### 使用 CSS Part

某些组件支持通过 CSS Part 选择器自定义内部样式：

```html
<style>
  p-input::part(input) {
    border-radius: 12px;
    font-size: 16px;
  }
</style>

<p-input placeholder="自定义输入框"></p-input>
```

### 使用自定义类

你也可以为组件添加自定义类来覆盖样式：

```html
<style>
  .custom-button {
    border-radius: 20px;
    font-weight: bold;
  }
</style>

<p-button class="custom-button" color="primary">自定义按钮</p-button>
```

## 最佳实践

### 1. 保持对比度

自定义颜色时，确保文字和背景之间有足够的对比度，符合无障碍标准。

### 2. 测试深色主题

自定义颜色后，务必在深色和浅色主题下都进行测试，确保视觉效果良好。

### 3. 使用颜色生成工具

推荐使用 [Material Design Color Tool](https://m3.material.io/theme-builder) 来生成符合规范的颜色方案。

## 下一步

- [组件文档](../components/button.md) - 查看各个组件的详细用法
