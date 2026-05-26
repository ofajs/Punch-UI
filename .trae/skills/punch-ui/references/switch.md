# Switch 开关组件

## 引入组件

```html
<l-m src="https://punch-ui-v2.pages.dev/packages/switch/switch.html"></l-m>
```

## 基本用法

```html
<p-switch>Default</p-switch>
<p-switch checked>Checked</p-switch>
```

## 尺寸

```html
<p-switch size="xs">XS</p-switch>
<p-switch size="s">Small</p-switch>
<p-switch>Medium</p-switch>
<p-switch size="l">Large</p-switch>
<p-switch size="xl">XL</p-switch>
```

## 颜色

```html
<p-switch color="primary">Primary</p-switch>
<p-switch color="error">Error</p-switch>
<p-switch color="success">Success</p-switch>
```

## 状态

```html
<p-switch checked>选中状态</p-switch>
<p-switch>未选中状态</p-switch>
<p-switch disabled>禁用</p-switch>
```

## 表单集成

### 自定义值

使用 `checked-value` 和 `unchecked-value` 属性自定义选中/未选中的值：

```html
<p-switch 
  name="status" 
  checked-value="enabled" 
  unchecked-value="disabled"
  checked
>
  状态开关
</p-switch>
```

### 默认值

使用 `default-value` 属性设置初始值：

```html
<p-switch 
  name="theme" 
  checked-value="dark" 
  unchecked-value="light"
  default-value="dark"
>
  深色模式
</p-switch>
```

## 交互功能

### 自动聚焦

使用 `autofocus` 属性使开关在页面加载时自动获得焦点：

```html
<p-switch autofocus>自动聚焦</p-switch>
```

### 键盘操作

开关支持键盘操作：
- **空格键** - 切换开关状态
- **回车键** - 切换开关状态

```html
<p-switch>使用键盘操作</p-switch>
```

### 编程控制

通过 JavaScript 控制开关状态：

```html
<p-switch id="my-switch">编程控制</p-switch>

<script>
  export default async () => {
    return {
      ready() {
        const switchEl = this.$('#my-switch');
        
        // 设置选中状态
        switchEl.checked = true;
        
        // 获取选中状态
        console.log(switchEl.checked); // true
        
        // 获取当前值
        console.log(switchEl.value); // "on" (默认 checkedValue)
        
        // 手动聚焦
        switchEl.focus();
      }
    };
  };
</script>
```

## 变体样式

使用 `variant` 属性设置不同的样式：

```html
<p-switch variant="filled" checked>Filled</p-switch>
<p-switch variant="outlined" checked>Outlined</p-switch>
<p-switch variant="text" checked>Text</p-switch>
```

## 主要属性

- `checked` - 是否选中（布尔属性）
- `size` - 开关尺寸
- `color` - 开关颜色
- `disabled` - 是否禁用
- `name` - 表单名称，用于表单提交
- `checked-value` - 选中时的值（默认 "on"）
- `unchecked-value` - 未选中时的值（默认 "off"）
- `default-value` - 默认值
- `autofocus` - 页面加载时自动聚焦
- `variant` - 变体样式

## 方法

- `focus()` - 使开关获得焦点

## 事件

- `change` - 状态改变时触发
- `click` - 点击开关时触发

## 动画效果

开关组件包含以下动画效果：
- **滑块移动** - 平滑的滑动动画
- **勾选标记** - 选中时显示勾选动画
- **边框填充** - 选中时边框填充动画

## 无障碍支持

- 支持键盘导航和操作
- 提供焦点状态指示
- 支持屏幕阅读器
