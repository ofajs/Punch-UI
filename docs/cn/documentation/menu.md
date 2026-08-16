# Menu 菜单组件

p-menu 是弹出菜单原语组件，提供「锚点定位 + 自动翻转 + 外点/Esc 关闭 + 开合动画」能力。p-split-button 内部复用同一套交互语义。

## 引入组件

```html
<l-m src="https://punch-ui-v2.pages.dev/packages/menu/menu.html"></l-m>
<l-m src="https://punch-ui-v2.pages.dev/packages/menu/menu-item.html"></l-m>
```

## 基本用法

trigger 插槽放触发器，默认插槽放菜单内容（推荐 `p-menu-item`）：

```html
<p-menu>
  <p-button slot="trigger">操作 ▾</p-button>
  <p-menu-item>
    <span slot="prefix">📝</span>
    <span>编辑</span>
  </p-menu-item>
  <p-menu-item>
    <span slot="prefix">📋</span>
    <span>复制</span>
  </p-menu-item>
  <p-menu-item disabled>
    <span slot="prefix">🗑️</span>
    <span>删除</span>
  </p-menu-item>
</p-menu>
```

## 对齐方向

`align` 属性控制面板与触发器的水平对齐，默认 `right`：

```html
<p-menu align="left">
  <p-button slot="trigger">左对齐 ▾</p-button>
  <p-menu-item>菜单项 A</p-menu-item>
</p-menu>
```

- 面板默认在触发器下方弹出；下方空间不足时自动翻转到上方
- 面板 min-width 不小于触发器宽度，且始终钳制在视口内（8px 边距）

## 受控开合（sync:open）

```html
<p-menu sync:open="menuOpen" on:open="onOpen" on:close="onClose">
  <p-button slot="trigger">受控菜单 ▾</p-button>
  <p-menu-item on:click="menuOpen = false">点击后关闭</p-menu-item>
</p-menu>
```

- `sync:open` 双向绑定开合状态；外部改 `menuOpen` 同样生效
- 菜单打开/关闭时发出 `open` / `close` 事件

## 交互约定

- 菜单内容为 light DOM：`on:click` 直接绑定页面作用域方法
- 菜单内任意点击后面板自动关闭，事件本身继续冒泡给用户 handler
- 点击组件外部（pointerdown 捕获）或按 `Esc` 关闭菜单
- `p-menu-item` 支持 `disabled`；Enter/Space 触发与点击等价
- 开合带动画：面板 scale + 位移淡入（0.2s），菜单项级联滑入（30ms 递增 delay），关闭反向淡出；`prefers-reduced-motion` 下自动禁用

## 主要属性

### p-menu

- `align` - 面板对齐方向，`left` / `right`（默认 `right`）
- `open` - 开合状态（data 属性，支持 `sync:open`）

### p-menu-item

- `disabled` - 是否禁用

## 插槽

### p-menu

- `trigger` - 触发器（无此插槽时转为锚点覆盖层模式，面板由宿主定位控制）
- `default` - 菜单内容

### p-menu-item

- `prefix` - 前置图标
- `default` - 文字内容
- `suffix` - 后缀（如快捷键提示）
