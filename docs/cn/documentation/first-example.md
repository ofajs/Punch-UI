# 第一个示例

让我们创建一个简单的表单示例，展示 Punch-UI 的基本用法。

## 示例：用户注册表单

这个示例将展示如何使用 Punch-UI 的表单组件创建一个用户注册表单。

<o-playground name="用户注册表单" style="--editor-height: 600px">
  <code path="demo.html" preview active>
    <template>
      <link rel="stylesheet" href="https://punch-ui-v2.pages.dev/packages/css/pui-global.css" />
      <script src="https://cdn.jsdelivr.net/gh/ofajs/ofa.js/dist/ofa.min.mjs" type="module"></script>
      <l-m src="https://punch-ui-v2.pages.dev/packages/input/input.html"></l-m>
      <l-m src="https://punch-ui-v2.pages.dev/packages/button/button.html"></l-m>
      <l-m src="https://punch-ui-v2.pages.dev/packages/select/select.html"></l-m>
      <l-m src="https://punch-ui-v2.pages.dev/packages/checkbox/checkbox.html"></l-m>
      <style>
        .form-container {
          max-width: 400px;
          margin: 40px auto;
          padding: 20px;
        }
        .form-item {
          margin-bottom: 16px;
        }
        .form-label {
          display: block;
          margin-bottom: 8px;
          font-weight: 500;
        }
        .form-actions {
          margin-top: 24px;
        }
      </style>
      <div class="form-container">
        <h2>用户注册</h2>
        <div class="form-item">
          <label class="form-label">用户名</label>
          <p-input placeholder="请输入用户名" style="width: 100%"></p-input>
        </div>
        <div class="form-item">
          <label class="form-label">邮箱</label>
          <p-input placeholder="请输入邮箱" type="email" style="width: 100%"></p-input>
        </div>
        <div class="form-item">
          <label class="form-label">密码</label>
          <p-input placeholder="请输入密码" type="password" style="width: 100%"></p-input>
        </div>
        <div class="form-item">
          <label class="form-label">性别</label>
          <p-select placeholder="请选择性别" style="width: 100%">
            <p-option value="male">男</p-option>
            <p-option value="female">女</p-option>
            <p-option value="other">其他</p-option>
          </p-select>
        </div>
        <div class="form-item">
          <p-checkbox>我已阅读并同意用户协议</p-checkbox>
        </div>
        <div class="form-actions">
          <p-button color="primary" style="width: 100%">注册</p-button>
        </div>
      </div>
    </template>
  </code>
</o-playground>

## 代码解析

### 1. 引入必要的文件

首先，我们需要引入 ofa.js、全局样式和所需的组件：

```html
<link rel="stylesheet" href="https://punch-ui-v2.pages.dev/packages/css/pui-global.css" />
<script src="https://cdn.jsdelivr.net/gh/ofajs/ofa.js/dist/ofa.min.mjs" type="module"></script>

<l-m src="https://punch-ui-v2.pages.dev/packages/input/input.html"></l-m>
<l-m src="https://punch-ui-v2.pages.dev/packages/button/button.html"></l-m>
<l-m src="https://punch-ui-v2.pages.dev/packages/select/select.html"></l-m>
<l-m src="https://punch-ui-v2.pages.dev/packages/checkbox/checkbox.html"></l-m>
```

### 2. 使用组件

每个 Punch-UI 组件都以 `p-` 为前缀：

- `<p-input>` - 输入框组件
- `<p-button>` - 按钮组件
- `<p-select>` - 选择器组件
- `<p-checkbox>` - 复选框组件

### 3. 组件属性

组件支持多种属性来自定义行为和外观：

```html
<p-input placeholder="请输入用户名" type="email"></p-input>
<p-button color="primary">注册</p-button>
<p-select placeholder="请选择性别"></p-select>
```

### 4. 样式定制

你可以通过 `style` 属性或 CSS 类来自定义组件样式：

```html
<p-input style="width: 100%"></p-input>
<p-button color="primary" style="width: 100%">注册</p-button>
```

## 更多示例

### 按钮组示例

<o-playground name="按钮组示例" style="--editor-height: 400px">
  <code path="demo.html" preview active>
    <template>
      <link rel="stylesheet" href="https://punch-ui-v2.pages.dev/packages/css/pui-global.css" />
      <script src="https://cdn.jsdelivr.net/gh/ofajs/ofa.js/dist/ofa.min.mjs" type="module"></script>
      <l-m src="https://punch-ui-v2.pages.dev/packages/button/button.html"></l-m>
      <l-m src="https://punch-ui-v2.pages.dev/packages/button/group.html"></l-m>
      <div style="padding: 20px;">
        <h3>基础按钮</h3>
        <p-button>默认按钮</p-button>
        <p-button color="primary">主要按钮</p-button>
        <p-button color="success">成功按钮</p-button>
        <p-button color="error">错误按钮</p-button>
        <h3 style="margin-top: 20px;">按钮组</h3>
        <p-button-group>
          <p-button>按钮 1</p-button>
          <p-button>按钮 2</p-button>
          <p-button>按钮 3</p-button>
        </p-button-group>
      </div>
    </template>
  </code>
</o-playground>

## 下一步

现在你已经了解了 Punch-UI 的基本用法，可以继续探索：

- [颜色系统](../basics/color.md) - 了解 Punch-UI 的主题和颜色系统
- [组件文档](../components/button.md) - 查看各个组件的详细文档
