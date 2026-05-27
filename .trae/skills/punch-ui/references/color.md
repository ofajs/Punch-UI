# Color 颜色系统

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

## 基础调色板

Punch-UI 提供了完整的基础调色板，每个颜色从 0（最深）到 100（最浅）分为多个色阶。

> ⚠️ **重要提示**：基础调色板主要用于主题定义和特殊场景。**在开发组件和应用时，应优先使用语义化颜色变量（`--md-sys-color-*`）**，而不是直接使用调色板颜色。调色板颜色不会自动适配主题切换，可能导致对比度问题。

### Primary 主色

```css
--md-ref-palette-primary0: #000000;   /* 最深 */
--md-ref-palette-primary10: #001c38;
--md-ref-palette-primary20: #00315b;
--md-ref-palette-primary30: #004881;
--md-ref-palette-primary40: #0060a9;
--md-ref-palette-primary50: #1679cf;
--md-ref-palette-primary60: #4093eb;
--md-ref-palette-primary70: #6baeff;
--md-ref-palette-primary80: #a2c9ff;
--md-ref-palette-primary90: #d3e4ff;
--md-ref-palette-primary100: #ffffff; /* 最浅 */
```

### Success 成功色

```css
--md-ref-palette-success0: #000000;
--md-ref-palette-success10: #062100;
--md-ref-palette-success20: #103900;
--md-ref-palette-success30: #22510d;
--md-ref-palette-success40: #3a6a24;
--md-ref-palette-success50: #52833b;
--md-ref-palette-success60: #6b9e52;
--md-ref-palette-success70: #84b96a;
--md-ref-palette-success80: #9fd582;
--md-ref-palette-success90: #baf29c;
--md-ref-palette-success100: #ffffff;
```

### Error 错误色

```css
--md-ref-palette-error0: #000000;
--md-ref-palette-error10: #410004;
--md-ref-palette-error20: #68000a;
--md-ref-palette-error30: #930013;
--md-ref-palette-error40: #bc1421;
--md-ref-palette-error50: #e03336;
--md-ref-palette-error60: #ff5451;
--md-ref-palette-error70: #ff8982;
--md-ref-palette-error80: #ffb3ad;
--md-ref-palette-error90: #ffdad7;
--md-ref-palette-error100: #ffffff;
```

### Neutral 中性色

```css
--md-ref-palette-neutral0: #000000;
--md-ref-palette-neutral10: #1b1c1c;
--md-ref-palette-neutral20: #303031;
--md-ref-palette-neutral30: #464747;
--md-ref-palette-neutral40: #5e5e5e;
--md-ref-palette-neutral50: #777777;
--md-ref-palette-neutral60: #919190;
--md-ref-palette-neutral70: #ababab;
--md-ref-palette-neutral80: #c7c6c6;
--md-ref-palette-neutral90: #e3e2e2;
--md-ref-palette-neutral100: #ffffff;
```

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

### 使用基础调色板

```html
<style>
  .gradient-primary {
    background: linear-gradient(
      to right,
      var(--md-ref-palette-primary40),
      var(--md-ref-palette-primary70)
    );
  }
  
  .custom-shadow {
    box-shadow: 0 2px 8px var(--md-ref-palette-neutral30);
  }
</style>
```

## 设计原则

### 1. 语义化优先（最重要）

**必须优先使用语义化颜色变量**（如 `--md-sys-color-primary`），**避免直接使用调色板值**（如 `--md-ref-palette-primary40`）。

#### 为什么必须使用语义化颜色？

1. **自动主题适配**：语义化颜色会在浅色和深色主题下自动切换到合适的值
2. **对比度保证**：每个语义化颜色都经过精心设计，确保文字和背景之间有足够的对比度
3. **一致性**：使用语义化颜色可以保持整个应用的视觉一致性
4. **可维护性**：主题更新时无需修改代码

#### 何时可以使用调色板颜色？

调色板颜色（`--md-ref-palette-*`）仅在以下特殊场景使用：
- 创建渐变效果
- 需要特定色阶的自定义阴影
- 主题定义本身

### 2. 对比度保证

每个语义化颜色都经过精心设计，确保文字和背景之间有足够的对比度：
- `on-primary` 颜色在 `primary` 背景上清晰可读
- `on-surface` 颜色在 `surface` 背景上清晰可读

### 3. 容器颜色

容器颜色（container）用于创建层次感和视觉分组：
- `primary-container` 用于突出显示重要区域
- `surface-variant` 用于区分不同的表面层级

## CSS 变量命名规范

Punch-UI 的颜色变量遵循以下命名规范：

### 调色板变量
```
--md-ref-palette-{color}{shade}
```
- `{color}`: primary, success, error, neutral
- `{shade}`: 0-100（0最深，100最浅）

### 系统颜色变量
```
--md-sys-color-{semantic-color}
--md-sys-color-on-{semantic-color}
```
- `{semantic-color}`: primary, success, error, neutral, surface
- `on-{color}`: 表示在该颜色背景上使用的文字颜色

## 最佳实践

### ✅ 推荐做法

```css
/* ✅ 正确：使用语义化颜色 */
background-color: var(--md-sys-color-primary);
color: var(--md-sys-color-on-primary);

/* ✅ 正确：使用容器颜色创建层次 */
background-color: var(--md-sys-color-surface-variant);
color: var(--md-sys-color-on-surface-variant);

/* ✅ 正确：使用成功/错误颜色 */
background-color: var(--md-sys-color-success-container);
color: var(--md-sys-color-on-success-container);

/* ✅ 正确：特殊情况使用调色板（渐变） */
background: linear-gradient(
  135deg,
  var(--md-sys-color-primary),
  var(--md-sys-color-primary-container)
);
```

### ❌ 避免做法

```css
/* ❌ 错误：直接使用调色板颜色 */
background-color: var(--md-ref-palette-primary40);
color: var(--md-ref-palette-primary100);
/* 问题：不会随主题切换，可能导致对比度不足 */

/* ❌ 错误：硬编码颜色值 */
background-color: #0060a9;
color: #ffffff;
/* 问题：完全不响应主题切换，失去主题支持 */

/* ❌ 错误：混用不同主题的颜色 */
background-color: var(--md-ref-palette-primary40);
color: var(--md-ref-palette-neutral90);
/* 问题：可能导致对比度不足，可访问性问题 */

/* ❌ 错误：调色板颜色用于普通元素 */
.custom-card {
  background-color: var(--md-ref-palette-primary90);
  /* 问题：应该使用 primary-container */
}
```

### 🎯 快速选择指南

| 需求 | 使用 | 示例 |
|------|------|------|
| 主要按钮背景 | `--md-sys-color-primary` | 主按钮 |
| 主要按钮文字 | `--md-sys-color-on-primary` | 按钮上的文字 |
| 突出显示区域 | `--md-sys-color-primary-container` | 高亮卡片 |
| 突出区域文字 | `--md-sys-color-on-primary-container` | 卡片内文字 |
| 成功提示背景 | `--md-sys-color-success-container` | 成功消息 |
| 成功提示文字 | `--md-sys-color-on-success-container` | 消息文字 |
| 错误提示背景 | `--md-sys-color-error-container` | 错误消息 |
| 错误提示文字 | `--md-sys-color-on-error-container` | 消息文字 |
| 页面背景 | `--md-sys-color-surface` | 页面背景 |
| 页面文字 | `--md-sys-color-on-surface` | 正文文字 |
| 卡片背景 | `--md-sys-color-surface-variant` | 卡片容器 |
| 卡片文字 | `--md-sys-color-on-surface-variant` | 卡片内文字 |

## 扩展颜色使用

### 使用 rgb() 函数扩展颜色

当语义化颜色无法满足需求时（例如需要带透明度的颜色，或需要调整色相、饱和度、亮度），可以使用 CSS 的 `rgb(from var() ...)` 语法基于已有颜色变量创建新颜色。

> 💡 **推荐做法**：始终基于语义化颜色变量（`--md-sys-color-*`）进行扩展，而不是使用调色板颜色。这样可以保持主题一致性。

### 添加透明度

```css
/* ✅ 正确：基于语义化颜色添加透明度 */
.overlay {
  background-color: rgb(from var(--md-sys-color-primary) r g b / 0.5);
  /* 主色的 50% 透明度 */
}

.card-hover {
  background-color: rgb(from var(--md-sys-color-surface-variant) r g b / 0.8);
  /* 表面变体颜色的 80% 透明度 */
}

/* ❌ 错误：不要基于调色板颜色 */
.bad-overlay {
  background-color: rgb(from var(--md-ref-palette-primary40) r g b / 0.5);
  /* 问题：不会随主题切换 */
}
```

### 调整亮度

```css
/* 变亮 */
.lighter-primary {
  background-color: rgb(from var(--md-sys-color-primary) calc(r + 20) calc(g + 20) calc(b + 20));
}

/* 变暗 */
.darker-primary {
  background-color: rgb(from var(--md-sys-color-primary) calc(r - 20) calc(g - 20) calc(b - 20));
}

/* 使用百分比调整 */
.adjusted-surface {
  background-color: rgb(from var(--md-sys-color-surface) calc(r * 1.1) calc(g * 1.1) calc(b * 1.1));
}
```

### 创建渐变效果

```css
/* 基于主色创建渐变 */
.gradient-button {
  background: linear-gradient(
    135deg,
    var(--md-sys-color-primary),
    rgb(from var(--md-sys-color-primary) calc(r + 30) calc(g + 30) calc(b + 30))
  );
}

/* 基于表面颜色创建微妙渐变 */
.gradient-card {
  background: linear-gradient(
    to bottom,
    var(--md-sys-color-surface),
    rgb(from var(--md-sys-color-surface-variant) r g b / 0.5)
  );
}
```

### 创建阴影效果

```css
/* 基于主色创建阴影 */
.primary-shadow {
  box-shadow: 0 4px 12px rgb(from var(--md-sys-color-primary) r g b / 0.3);
}

/* 基于表面颜色创建阴影 */
.surface-shadow {
  box-shadow: 0 2px 8px rgb(from var(--md-sys-color-on-surface) r g b / 0.15);
}
```

### 边框和分隔线

```css
/* 半透明边框 */
.subtle-border {
  border: 1px solid rgb(from var(--md-sys-color-on-surface) r g b / 0.12);
}

/* 分隔线 */
.divider {
  border-bottom: 1px solid rgb(from var(--md-sys-color-on-surface-variant) r g b / 0.1);
}
```

### 悬停和激活状态

```css
/* 悬停状态 */
.button:hover {
  background-color: rgb(from var(--md-sys-color-primary) calc(r - 10) calc(g - 10) calc(b - 10));
}

/* 激活状态 */
.button:active {
  background-color: rgb(from var(--md-sys-color-primary) calc(r - 20) calc(g - 20) calc(b - 20));
}

/* 焦点状态 */
.button:focus {
  outline: 2px solid rgb(from var(--md-sys-color-primary) r g b / 0.5);
}
```

### 实际应用示例

```html
<style>
  /* 卡片组件 */
  .card {
    background-color: var(--md-sys-color-surface);
    border: 1px solid rgb(from var(--md-sys-color-on-surface) r g b / 0.1);
    box-shadow: 0 2px 8px rgb(from var(--md-sys-color-on-surface) r g b / 0.1);
  }
  
  /* 悬停效果 */
  .card:hover {
    background-color: rgb(from var(--md-sys-color-surface-variant) r g b / 0.5);
    box-shadow: 0 4px 16px rgb(from var(--md-sys-color-on-surface) r g b / 0.15);
  }
  
  /* 遮罩层 */
  .overlay {
    background-color: rgb(from var(--md-sys-color-surface) r g b / 0.9);
    backdrop-filter: blur(4px);
  }
  
  /* 高亮文本 */
  .highlight {
    background-color: rgb(from var(--md-sys-color-primary-container) r g b / 0.3);
    padding: 2px 4px;
    border-radius: 4px;
  }
</style>
```

### 注意事项

1. **浏览器支持**：`rgb(from var() ...)` 语法需要现代浏览器支持（Chrome 119+, Firefox 128+, Safari 16.4+）
2. **性能**：避免在大量元素上使用复杂的颜色计算
3. **可访问性**：确保调整后的颜色仍然保持足够的对比度
4. **主题一致性**：始终基于语义化颜色变量，确保主题切换时颜色正确适配

## 主题检测

可以通过 CSS 变量检测当前主题：

```css
:root {
  --pui-theme: auto;  /* auto, light, dark */
  --pui-real-theme: light;  /* 实际应用的主题 */
}
```

### JavaScript 检测主题

```javascript
const theme = getComputedStyle(document.documentElement)
  .getPropertyValue('--pui-real-theme')
  .trim();

console.log('当前主题:', theme); // 'light' 或 'dark'
```
