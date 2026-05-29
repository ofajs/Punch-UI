# 颜色系统

Punch-UI 使用 Material Design 3 的颜色系统，提供了完整的调色板和主题支持。

> 🎯 **核心原则**：**始终优先使用语义化颜色变量（`--md-sys-color-*`）**，避免直接使用调色板颜色（`--md-ref-palette-*`）。语义化颜色会自动适配主题切换，确保对比度和一致性。

## 引入样式

```html
<link rel="stylesheet" href="https://punch-ui-v2.pages.dev/packages/css/pui-global.css" />
```

## 主题切换

Punch-UI 支持三种主题模式：

### 1. 自动跟随系统（默认）

默认情况下，主题会自动跟随系统设置：

```html
<html>
  <!-- 自动跟随系统主题 -->
</html>
```

### 2. 强制浅色主题

```html
<html class="theme-light-mode">
  <!-- 强制使用浅色主题 -->
</html>
```

### 3. 强制深色主题

```html
<html class="theme-dark-mode">
  <!-- 强制使用深色主题 -->
</html>
```

### 使用主题切换组件

```html
<l-m src="https://punch-ui-v2.pages.dev/tool/theme-switch/theme-switch.html"></l-m>
<p-theme-switch></p-theme-switch>
```

## 语义化颜色变量

Punch-UI 提供了一套语义化的颜色变量，可以在浅色和深色主题下自动适配：

### 主要颜色

| 变量名 | 说明 | 浅色主题示例 | 深色主题示例 |
|--------|------|-------------|-------------|
| `--md-sys-color-primary` | 主色 | #0060a9 | #a2c9ff |
| `--md-sys-color-on-primary` | 主色上的文字 | #ffffff | #00315b |
| `--md-sys-color-primary-container` | 主色容器 | #d3e4ff | #004881 |
| `--md-sys-color-on-primary-container` | 主色容器上的文字 | #001c38 | #d3e4ff |

### 成功颜色

| 变量名 | 说明 | 浅色主题示例 | 深色主题示例 |
|--------|------|-------------|-------------|
| `--md-sys-color-success` | 成功色 | #3a6a24 | #9fd582 |
| `--md-sys-color-on-success` | 成功色上的文字 | #ffffff | #103900 |
| `--md-sys-color-success-container` | 成功色容器 | #baf29c | #22510d |
| `--md-sys-color-on-success-container` | 成功色容器上的文字 | #062100 | #baf29c |

### 错误颜色

| 变量名 | 说明 | 浅色主题示例 | 深色主题示例 |
|--------|------|-------------|-------------|
| `--md-sys-color-error` | 错误色 | #bc1421 | #ffb3ad |
| `--md-sys-color-on-error` | 错误色上的文字 | #ffffff | #68000a |
| `--md-sys-color-error-container` | 错误色容器 | #ffdad7 | #930013 |
| `--md-sys-color-on-error-container` | 错误色容器上的文字 | #410004 | #ffdad7 |

### 中性颜色

| 变量名 | 说明 | 浅色主题示例 | 深色主题示例 |
|--------|------|-------------|-------------|
| `--md-sys-color-neutral` | 中性色 | #5e5e5e | #c7c6c6 |
| `--md-sys-color-on-neutral` | 中性色上的文字 | #ffffff | #303031 |
| `--md-sys-color-neutral-container` | 中性色容器 | #e3e2e2 | #464747 |
| `--md-sys-color-on-neutral-container` | 中性色容器上的文字 | #1b1c1c | #e3e2e2 |

### 表面颜色

| 变量名 | 说明 | 浅色主题示例 | 深色主题示例 |
|--------|------|-------------|-------------|
| `--md-sys-color-surface` | 背景色 | #faf9f9 | #121414 |
| `--md-sys-color-on-surface` | 背景上的文字 | #1b1c1c | #e3e2e2 |
| `--md-sys-color-surface-variant` | 变体背景色 | #e3e2e2 | #464747 |
| `--md-sys-color-on-surface-variant` | 变体背景上的文字 | #464747 | #c7c6c6 |
| `--md-sys-color-inverse-surface` | 反转背景色 | #303031 | #e3e2e2 |
| `--md-sys-color-inverse-on-surface` | 反转背景上的文字 | #f2f0f0 | #303031 |

## 使用示例

### 使用语义化颜色

```html
<style>
  .custom-button {
    background-color: var(--md-sys-color-primary);
    color: var(--md-sys-color-on-primary);
    border-radius: 8px;
    padding: 10px 20px;
  }
  
  .custom-card {
    background-color: var(--md-sys-color-surface-variant);
    color: var(--md-sys-color-on-surface-variant);
    border-radius: 12px;
    padding: 16px;
  }
  
  .success-message {
    background-color: var(--md-sys-color-success-container);
    color: var(--md-sys-color-on-success-container);
    padding: 12px;
  }
</style>

<button class="custom-button">自定义按钮</button>
<div class="custom-card">自定义卡片</div>
<div class="success-message">操作成功！</div>
```

### 实时示例

<o-playground name="颜色系统示例" style="--editor-height: 500px">
  <code path="demo.html" preview active>
    <template>
      <link rel="stylesheet" href="https://punch-ui-v2.pages.dev/packages/css/pui-global.css" />
      <script src="https://cdn.jsdelivr.net/gh/ofajs/ofa.js/dist/ofa.min.mjs" type="module"></script>
      <style>
        .color-demo {
          padding: 20px;
          max-width: 600px;
          margin: 0 auto;
        }
        .color-box {
          padding: 16px;
          margin: 8px 0;
          border-radius: 8px;
        }
        .primary-demo {
          background-color: var(--md-sys-color-primary);
          color: var(--md-sys-color-on-primary);
        }
        .success-demo {
          background-color: var(--md-sys-color-success);
          color: var(--md-sys-color-on-success);
        }
        .error-demo {
          background-color: var(--md-sys-color-error);
          color: var(--md-sys-color-on-error);
        }
        .surface-demo {
          background-color: var(--md-sys-color-surface-variant);
          color: var(--md-sys-color-on-surface-variant);
        }
      </style>
      <div class="color-demo">
        <h2>语义化颜色示例</h2>
        <div class="color-box primary-demo">
          <strong>Primary 主色</strong>
          <p>用于主要操作和重要元素</p>
        </div>
        <div class="color-box success-demo">
          <strong>Success 成功色</strong>
          <p>用于成功状态和正面反馈</p>
        </div>
        <div class="color-box error-demo">
          <strong>Error 错误色</strong>
          <p>用于错误状态和警告信息</p>
        </div>
        <div class="color-box surface-demo">
          <strong>Surface 表面色</strong>
          <p>用于背景和容器</p>
        </div>
      </div>
    </template>
  </code>
</o-playground>

## 最佳实践

### 1. 优先使用语义化颜色

✅ **推荐**：
```css
background-color: var(--md-sys-color-primary);
color: var(--md-sys-color-on-primary);
```

❌ **不推荐**：
```css
background-color: var(--md-ref-palette-primary40);
color: #ffffff;
```

### 2. 确保对比度

使用语义化颜色时，Punch-UI 已经确保了文字和背景之间的对比度符合无障碍标准。

### 3. 主题适配

语义化颜色会自动适配深色/浅色主题，无需手动处理。

## 下一步

- [主题定制](./theming.md) - 了解如何自定义主题和颜色
