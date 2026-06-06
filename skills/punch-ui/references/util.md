# Punch-UI Util 工具函数

Punch-UI 提供了一套实用的工具函数，用于快速显示提示和对话框。这些工具函数基于 ofa.js 和 Punch-UI 组件构建，提供了简洁的 API 来处理常见的用户交互场景。

## 安装与引入

### 方式一：单独引入

```javascript
import toast from 'https://punch-ui-v2.pages.dev/packages/util/toast.js';
import alert from 'https://punch-ui-v2.pages.dev/packages/util/alert.js';
import confirm from 'https://punch-ui-v2.pages.dev/packages/util/confirm.js';
import prompt from 'https://punch-ui-v2.pages.dev/packages/util/prompt.js';
```

### 方式二：统一引入

```javascript
import { toast, alert, confirm, prompt } from 'https://punch-ui-v2.pages.dev/packages/util.js';
```

## Toast 提示

显示简短的提示消息，自动消失。适用于操作反馈、状态提示等场景。

### 基本用法

```javascript
import toast from 'https://punch-ui-v2.pages.dev/packages/util/toast.js';

toast('操作成功');
```

### 带配置选项

```javascript
toast({
  message: '保存成功！',
  duration: 3000,
  color: 'success'
});
```

### 手动关闭

```javascript
const toastInstance = toast('正在处理...');
setTimeout(() => {
  toastInstance.close();
}, 2000);
```

### 参数说明

| 参数 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| message / content | string | - | 提示消息内容 |
| duration / time | number | 3000 | 显示时长（毫秒），设为 0 则不自动关闭 |
| color | string | 'primary' | 提示颜色：primary, success, error, neutral |

### 返回值

返回一个对象，包含：
- `close` - 关闭提示的方法
- `el` - 提示元素引用

### 完整示例

```javascript
toast({
  message: '文件上传成功',
  duration: 5000,
  color: 'success'
});
```

## Alert 警告框

显示一个警告对话框，只有确认按钮。适用于重要信息提示、操作结果通知等场景。

### 基本用法

```javascript
import alert from 'https://punch-ui-v2.pages.dev/packages/util/alert.js';

await alert('这是一个警告消息');
```

### 带标题和自定义按钮

```javascript
await alert({
  title: '提示',
  message: '操作已完成',
  ok: '确定'
});
```

### 参数说明

| 参数 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| title | string | '' | 对话框标题 |
| message / content | string | - | 消息内容 |
| ok / yes | string | 'OK' | 确认按钮文本 |

### 返回值

返回 Promise，点击确认按钮后 resolve。

### 完整示例

```javascript
async function showNotification() {
  await alert({
    title: '系统通知',
    message: '您的账户已成功激活',
    ok: '知道了'
  });
  console.log('用户已确认');
}
```

## Confirm 确认框

显示一个确认对话框，包含确认和取消按钮。适用于需要用户确认的操作，如删除、提交等。

### 基本用法

```javascript
import confirm from 'https://punch-ui-v2.pages.dev/packages/util/confirm.js';

const result = await confirm('确定要删除吗？');
if (result) {
  console.log('用户点击了确认');
} else {
  console.log('用户点击了取消');
}
```

### 带标题和自定义按钮

```javascript
const result = await confirm({
  title: '删除确认',
  message: '此操作不可恢复，确定要删除吗？',
  yes: '删除',
  cancel: '取消'
});

if (result) {
  deleteItem();
}
```

### 参数说明

| 参数 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| title | string | '' | 对话框标题 |
| message / content | string | - | 消息内容 |
| yes | string | 'Yes' | 确认按钮文本 |
| cancel | string | 'Cancel' | 取消按钮文本 |

### 返回值

返回 `Promise<boolean>`：
- 点击确认返回 `true`
- 点击取消返回 `false`
- 点击遮罩层返回 `null`

### 完整示例

```javascript
async function deleteItem(itemId) {
  const result = await confirm({
    title: '删除确认',
    message: '确定要删除这个项目吗？此操作无法撤销。',
    yes: '删除',
    cancel: '取消'
  });
  
  if (result) {
    await api.deleteItem(itemId);
    toast({ message: '删除成功', color: 'success' });
  }
}
```

## Prompt 输入框

显示一个带输入框的对话框，用于获取用户输入。适用于需要用户输入信息的场景，如重命名、输入密码等。

### 基本用法

```javascript
import prompt from 'https://punch-ui-v2.pages.dev/packages/util/prompt.js';

const value = await prompt('请输入您的名字：');
if (value !== null) {
  console.log('用户输入：', value);
} else {
  console.log('用户取消了输入');
}
```

### 带完整配置

```javascript
const value = await prompt({
  title: '用户信息',
  message: '请输入您的用户名：',
  placeholder: '请输入用户名',
  value: '默认值',
  label: '用户名',
  yes: '确定',
  cancel: '取消'
});
```

### 参数说明

| 参数 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| title | string | '' | 对话框标题 |
| message / content | string | - | 提示消息 |
| placeholder | string | '' | 输入框占位符 |
| value | string | '' | 输入框默认值 |
| label | string | '' | 输入框标签 |
| yes | string | 'Yes' | 确认按钮文本 |
| cancel | string | 'Cancel' | 取消按钮文本 |

### 返回值

返回 `Promise<string | null>`：
- 点击确认返回输入的值
- 点击取消返回 `null`
- 点击遮罩层返回 `null`

### 特殊功能

- 自动聚焦到输入框
- 支持 Enter 键提交

### 完整示例

```javascript
async function renameItem(item) {
  const newName = await prompt({
    title: '重命名',
    message: '请输入新的名称：',
    placeholder: '输入名称',
    value: item.name,
    label: '名称',
    yes: '确定',
    cancel: '取消'
  });
  
  if (newName !== null && newName.trim() !== '') {
    await api.renameItem(item.id, newName);
    toast({ message: '重命名成功', color: 'success' });
  }
}
```

## 完整示例

```html
<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>工具函数示例</title>
  <script src="https://cdn.jsdelivr.net/gh/ofajs/ofa.js/dist/ofa.min.mjs" type="module"></script>
  <link rel="stylesheet" href="https://punch-ui-v2.pages.dev/packages/css/pui-global.css" />
</head>
<body>
  <div style="padding: 20px; display: flex; gap: 12px; flex-wrap: wrap;">
    <button id="toast-btn">显示 Toast</button>
    <button id="alert-btn">显示 Alert</button>
    <button id="confirm-btn">显示 Confirm</button>
    <button id="prompt-btn">显示 Prompt</button>
  </div>

  <script type="module">
    import { toast, alert, confirm, prompt } from 'https://punch-ui-v2.pages.dev/packages/util.js';

    $('#toast-btn').on('click', async () => {
      toast({
        message: '操作成功！',
        color: 'success'
      });
    });

    $('#alert-btn').on('click', async () => {
      await alert({
        title: '提示',
        message: '这是一条重要信息',
        ok: '知道了'
      });
    });

    $('#confirm-btn').on('click', async () => {
      const result = await confirm({
        title: '删除确认',
        message: '确定要删除这个项目吗？',
        yes: '删除',
        cancel: '取消'
      });
      
      if (result) {
        toast({ message: '已删除', color: 'error' });
      }
    });

    $('#prompt-btn').on('click', async () => {
      const name = await prompt({
        title: '用户信息',
        message: '请输入您的名字：',
        placeholder: '请输入名字',
        label: '姓名'
      });
      
      if (name !== null) {
        toast({ message: `你好，${name}！`, color: 'success' });
      }
    });
  </script>
</body>
</html>
```

## 最佳实践

1. **合理使用 Toast**：Toast 适用于简短的操作反馈，不应包含过多信息或需要用户决策的内容。

2. **Confirm 用于重要操作**：对于不可逆的操作（如删除、清空数据），应使用 Confirm 让用户二次确认。

3. **Prompt 输入验证**：虽然 Prompt 提供了便捷的输入方式，但对于复杂的输入需求，建议使用自定义表单。

4. **错误处理**：所有工具函数都返回 Promise，建议使用 async/await 并适当处理异常。

5. **按钮文本本地化**：根据应用的语言环境，自定义按钮文本以提供更好的用户体验。

## 注意事项

- 所有工具函数都依赖于 Punch-UI 的 Dialog 和 Button 组件
- Prompt 还依赖 Input 组件
- 工具函数会自动加载所需的组件，无需手动引入
- 对话框宽度固定为 320px，适合移动端和桌面端使用

## 相关资源

- [ofa.js 官方文档](https://github.com/ofajs/ofa.js)
