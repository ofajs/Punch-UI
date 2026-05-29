# List 列表

列表项组件，支持前缀、后缀和可折叠功能。

## 引入组件

```html
<l-m src="https://punch-ui-v2.pages.dev/packages/list/list.html"></l-m>
```

## 基本用法

<o-playground name="List 基本用法" style="--editor-height: 350px">
  <code path="demo.html" preview active>
    <template>
      <link rel="stylesheet" href="https://punch-ui-v2.pages.dev/packages/css/pui-global.css" />
      <l-m src="https://punch-ui-v2.pages.dev/packages/list/list.html"></l-m>
      <l-m src="https://punch-ui-v2.pages.dev/packages/list/list-item.html"></l-m>
      <div style="padding: 20px; max-width: 400px;">
        <p-list>
          <p-list-item>列表项 1</p-list-item>
          <p-list-item>列表项 2</p-list-item>
          <p-list-item>列表项 3</p-list-item>
        </p-list>
      </div>
    </template>
  </code>
</o-playground>

## 带前缀图标

使用 `prefix` 插槽添加前缀图标：

<o-playground name="带前缀图标的列表" style="--editor-height: 400px">
  <code path="demo.html" preview active>
    <template>
      <link rel="stylesheet" href="https://punch-ui-v2.pages.dev/packages/css/pui-global.css" />
      <l-m src="https://punch-ui-v2.pages.dev/packages/list/list.html"></l-m>
      <l-m src="https://punch-ui-v2.pages.dev/packages/list/list-item.html"></l-m>
      <div style="padding: 20px; max-width: 400px;">
        <p-list>
          <p-list-item>
            <span slot="prefix" style="width: 40px; height: 40px; border-radius: 50%; background-color: var(--md-sys-color-primary-container); color: var(--md-sys-color-on-primary-container); display: flex; align-items: center; justify-content: center;">A</span>
            用户名
            <div secondary>user@example.com</div>
          </p-list-item>
          <p-list-item>
            <span slot="prefix" style="width: 40px; height: 40px; border-radius: 50%; background-color: var(--md-sys-color-tertiary-container); color: var(--md-sys-color-on-tertiary-container); display: flex; align-items: center; justify-content: center;">B</span>
            另一个用户
            <div secondary>another@example.com</div>
          </p-list-item>
        </p-list>
      </div>
    </template>
  </code>
</o-playground>

## 带后缀

使用 `suffix` 插槽添加后缀内容：

<o-playground name="带后缀的列表" style="--editor-height: 350px">
  <code path="demo.html" preview active>
    <template>
      <link rel="stylesheet" href="https://punch-ui-v2.pages.dev/packages/css/pui-global.css" />
      <l-m src="https://punch-ui-v2.pages.dev/packages/list/list.html"></l-m>
      <l-m src="https://punch-ui-v2.pages.dev/packages/list/list-item.html"></l-m>
      <div style="padding: 20px; max-width: 400px;">
        <p-list>
          <p-list-item>
            <span slot="prefix" style="width: 40px; height: 40px; border-radius: 50%; background-color: var(--md-sys-color-tertiary-container); color: var(--md-sys-color-on-tertiary-container); display: flex; align-items: center; justify-content: center;">C</span>
            列表项
            <span slot="suffix" style="color: var(--md-sys-color-on-surface-variant)">›</span>
          </p-list-item>
          <p-list-item>
            <span slot="prefix">📁</span>
            文件夹
            <span slot="suffix">12 个文件</span>
          </p-list-item>
        </p-list>
      </div>
    </template>
  </code>
</o-playground>

## 可折叠列表

使用 `collapsible` 属性使列表项可折叠，`expanded` 属性控制展开状态：

<o-playground name="可折叠列表" style="--editor-height: 500px">
  <code path="demo.html" preview active>
    <template>
      <link rel="stylesheet" href="https://punch-ui-v2.pages.dev/packages/css/pui-global.css" />
      <l-m src="https://punch-ui-v2.pages.dev/packages/list/list.html"></l-m>
      <l-m src="https://punch-ui-v2.pages.dev/packages/list/list-item.html"></l-m>
      <div style="padding: 20px; max-width: 400px;">
        <p-list>
          <p-list-item collapsible expanded>
            <span slot="prefix">📁</span>
            可展开的文件夹
            <div secondary>点击展开/折叠</div>
            <p-list slot="sublist">
              <p-list-item>
                <span slot="prefix">📄</span>
                子项目 1
              </p-list-item>
              <p-list-item>
                <span slot="prefix">📄</span>
                子项目 2
              </p-list-item>
            </p-list>
          </p-list-item>
          <p-list-item>
            <span slot="prefix">📄</span>
            普通列表项
          </p-list-item>
        </p-list>
      </div>
    </template>
  </code>
</o-playground>

## 可点击的折叠项

添加 `button` 属性使折叠项可点击并显示涟漪效果：

<o-playground name="可点击的折叠项" style="--editor-height: 500px">
  <code path="demo.html" preview active>
    <template>
      <link rel="stylesheet" href="https://punch-ui-v2.pages.dev/packages/css/pui-global.css" />
      <l-m src="https://punch-ui-v2.pages.dev/packages/list/list.html"></l-m>
      <l-m src="https://punch-ui-v2.pages.dev/packages/list/list-item.html"></l-m>
      <div style="padding: 20px; max-width: 400px;">
        <p-list>
          <p-list-item collapsible expanded button>
            <span slot="prefix">📁</span>
            可点击的折叠项
            <div secondary>点击展开/折叠</div>
            <p-list slot="sublist">
              <p-list-item>
                <span slot="prefix">📄</span>
                子项目 1
              </p-list-item>
              <p-list-item>
                <span slot="prefix">📄</span>
                子项目 2
              </p-list-item>
            </p-list>
          </p-list-item>
        </p-list>
      </div>
    </template>
  </code>
</o-playground>

## 自定义展开图标

使用 `expand-icon` 插槽自定义展开/折叠图标：

<o-playground name="自定义展开图标" style="--editor-height: 500px">
  <code path="demo.html" preview active>
    <template>
      <link rel="stylesheet" href="https://punch-ui-v2.pages.dev/packages/css/pui-global.css" />
      <l-m src="https://punch-ui-v2.pages.dev/packages/list/list.html"></l-m>
      <l-m src="https://punch-ui-v2.pages.dev/packages/list/list-item.html"></l-m>
      <div style="padding: 20px; max-width: 400px;">
        <p-list>
          <p-list-item collapsible expanded>
            <span slot="prefix">📁</span>
            自定义图标
            <span slot="expand-icon">▼</span>
            <p-list slot="sublist">
              <p-list-item>
                <span slot="prefix">📄</span>
                子项目 1
              </p-list-item>
              <p-list-item>
                <span slot="prefix">📄</span>
                子项目 2
              </p-list-item>
            </p-list>
          </p-list-item>
        </p-list>
      </div>
    </template>
  </code>
</o-playground>

## API

### 属性

| 属性 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| `collapsible` | 是否可折叠 | `boolean` | `false` |
| `expanded` | 是否展开 | `boolean` | `false` |
