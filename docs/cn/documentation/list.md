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

## 激活状态

使用 `active` 属性设置列表项的激活状态：

<o-playground name="激活状态" style="--editor-height: 400px">
  <code path="demo.html" preview active>
    <template>
      <link rel="stylesheet" href="https://punch-ui-v2.pages.dev/packages/css/pui-global.css" />
      <l-m src="https://punch-ui-v2.pages.dev/packages/list/list.html"></l-m>
      <l-m src="https://punch-ui-v2.pages.dev/packages/list/list-item.html"></l-m>
      <style>
        .avatar {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background-color: var(--md-sys-color-primary-container);
          color: var(--md-sys-color-on-primary-container);
          display: flex;
          align-items: center;
          justify-content: center;
        }
      </style>
      <div style="padding: 20px; max-width: 400px;">
        <p-list>
          <p-list-item>
            <span slot="prefix" class="avatar">A</span>
            普通列表项
          </p-list-item>
          <p-list-item active>
            <span slot="prefix" class="avatar">B</span>
            激活状态
            <div secondary>当前选中项</div>
          </p-list-item>
          <p-list-item>
            <span slot="prefix" class="avatar">C</span>
            普通列表项
          </p-list-item>
        </p-list>
      </div>
    </template>
  </code>
</o-playground>

## 禁用状态

添加 `disabled` 属性禁用列表项：

<o-playground name="禁用状态" style="--editor-height: 400px">
  <code path="demo.html" preview active>
    <template>
      <link rel="stylesheet" href="https://punch-ui-v2.pages.dev/packages/css/pui-global.css" />
      <l-m src="https://punch-ui-v2.pages.dev/packages/list/list.html"></l-m>
      <l-m src="https://punch-ui-v2.pages.dev/packages/list/list-item.html"></l-m>
      <style>
        .avatar {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background-color: var(--md-sys-color-primary-container);
          color: var(--md-sys-color-on-primary-container);
          display: flex;
          align-items: center;
          justify-content: center;
        }
      </style>
      <div style="padding: 20px; max-width: 400px;">
        <p-list>
          <p-list-item button>
            <span slot="prefix" class="avatar">A</span>
            正常列表项
          </p-list-item>
          <p-list-item button disabled>
            <span slot="prefix" class="avatar">B</span>
            禁用列表项
            <div secondary>无法点击</div>
          </p-list-item>
          <p-list-item button disabled>
            <span slot="prefix" class="avatar">C</span>
            禁用列表项
          </p-list-item>
        </p-list>
      </div>
    </template>
  </code>
</o-playground>

## 顶部对齐

使用 `align-top` 属性使内容顶部对齐：

<o-playground name="顶部对齐" style="--editor-height: 400px">
  <code path="demo.html" preview active>
    <template>
      <link rel="stylesheet" href="https://punch-ui-v2.pages.dev/packages/css/pui-global.css" />
      <l-m src="https://punch-ui-v2.pages.dev/packages/list/list.html"></l-m>
      <l-m src="https://punch-ui-v2.pages.dev/packages/list/list-item.html"></l-m>
      <style>
        .avatar {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background-color: var(--md-sys-color-primary-container);
          color: var(--md-sys-color-on-primary-container);
          display: flex;
          align-items: center;
          justify-content: center;
        }
      </style>
      <div style="padding: 20px; max-width: 400px;">
        <p-list>
          <p-list-item align-top>
            <span slot="prefix" class="avatar">A</span>
            两行列表项，内容较长时会自动换行，顶部对齐确保前缀图标与第一行文本对齐
            <div secondary>次要文本</div>
          </p-list-item>
          <p-list-item align-top>
            <span slot="prefix" class="avatar">B</span>
            短文本
            <div secondary>次要文本</div>
          </p-list-item>
        </p-list>
      </div>
    </template>
  </code>
</o-playground>

## 带颜色的按钮

使用 `color` 属性设置列表项颜色：

<o-playground name="带颜色的按钮" style="--editor-height: 400px">
  <code path="demo.html" preview active>
    <template>
      <link rel="stylesheet" href="https://punch-ui-v2.pages.dev/packages/css/pui-global.css" />
      <l-m src="https://punch-ui-v2.pages.dev/packages/list/list.html"></l-m>
      <l-m src="https://punch-ui-v2.pages.dev/packages/list/list-item.html"></l-m>
      <style>
        .avatar {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background-color: var(--md-sys-color-primary-container);
          color: var(--md-sys-color-on-primary-container);
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .avatar-error {
          background-color: var(--md-sys-color-error-container);
          color: var(--md-sys-color-on-error-container);
        }
      </style>
      <div style="padding: 20px; max-width: 400px;">
        <p-list>
          <p-list-item button color="primary">
            <span slot="prefix" class="avatar">A</span>
            Primary 颜色
            <div secondary>带有色调背景</div>
          </p-list-item>
          <p-list-item button color="error">
            <span slot="prefix" class="avatar avatar-error">B</span>
            Error 颜色
            <div secondary>带有色调背景</div>
          </p-list-item>
        </p-list>
      </div>
    </template>
  </code>
</o-playground>

## 带复选框

结合 `p-checkbox` 组件实现多选列表：

<o-playground name="带复选框" style="--editor-height: 500px">
  <code path="demo.html" preview active>
    <template>
      <link rel="stylesheet" href="https://punch-ui-v2.pages.dev/packages/css/pui-global.css" />
      <l-m src="https://punch-ui-v2.pages.dev/packages/list/list.html"></l-m>
      <l-m src="https://punch-ui-v2.pages.dev/packages/list/list-item.html"></l-m>
      <l-m src="https://punch-ui-v2.pages.dev/packages/checkbox/checkbox.html"></l-m>
      <l-m src="https://punch-ui-v2.pages.dev/packages/checkbox/group.html"></l-m>
      <style>
        .avatar {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background-color: var(--md-sys-color-primary-container);
          color: var(--md-sys-color-on-primary-container);
          display: flex;
          align-items: center;
          justify-content: center;
        }
      </style>
      <div style="padding: 20px; max-width: 400px;">
        <p-checkbox-group>
          <p-list>
            <p-list-item button="p-checkbox">
              <span slot="prefix" class="avatar">A</span>
              可点击项带复选框
              <div secondary>点击切换选中状态</div>
              <p-checkbox slot="suffix" value="a"></p-checkbox>
            </p-list-item>
            <p-list-item button="p-checkbox">
              <span slot="prefix" class="avatar">B</span>
              可点击项带复选框
              <div secondary>点击切换选中状态</div>
              <p-checkbox slot="suffix" value="b" checked></p-checkbox>
            </p-list-item>
          </p-list>
        </p-checkbox-group>
      </div>
    </template>
  </code>
</o-playground>

## 带单选框

结合 `p-radio` 组件实现单选列表：

<o-playground name="带单选框" style="--editor-height: 500px">
  <code path="demo.html" preview active>
    <template>
      <link rel="stylesheet" href="https://punch-ui-v2.pages.dev/packages/css/pui-global.css" />
      <l-m src="https://punch-ui-v2.pages.dev/packages/list/list.html"></l-m>
      <l-m src="https://punch-ui-v2.pages.dev/packages/list/list-item.html"></l-m>
      <l-m src="https://punch-ui-v2.pages.dev/packages/radio/radio.html"></l-m>
      <l-m src="https://punch-ui-v2.pages.dev/packages/radio/group.html"></l-m>
      <div style="padding: 20px; max-width: 400px;">
        <p-radio-group>
          <p-list>
            <p-list-item button="p-radio">
              <p-radio slot="prefix" value="a"></p-radio>
              单选项 A
            </p-list-item>
            <p-list-item button="p-radio">
              <p-radio slot="prefix" value="b" checked></p-radio>
              单选项 B
            </p-list-item>
            <p-list-item button="p-radio">
              <p-radio slot="prefix" value="c"></p-radio>
              单选项 C
            </p-list-item>
          </p-list>
        </p-radio-group>
      </div>
    </template>
  </code>
</o-playground>

## 高级用法

### 单选列表

实现设置列表的单选功能：

<o-playground name="单选列表" style="--editor-height: 500px">
  <code path="demo.html" active>
    <template page>
      <link rel="stylesheet" href="https://punch-ui-v2.pages.dev/packages/css/pui-global.css" />
      <l-m src="https://punch-ui-v2.pages.dev/packages/list/list.html"></l-m>
      <l-m src="https://punch-ui-v2.pages.dev/packages/list/list-item.html"></l-m>
      <style>
        p-list-item {
          background-color: rgba(from var(--md-sys-color-neutral) r g b / 0.1);
          transition: all ease 0.3s;
        }
        p-list-item.active {
          background-color: var(--md-sys-color-primary);
          border-radius: 12px;
        }
        p-list-item.active div {
          color: var(--md-sys-color-on-primary);
        }
      </style>
      <div style="padding: 20px; max-width: 400px;">
        <p-list>
          <p-list-item class:active="selected === 'account'" on:click="selected = 'account'" button>
            <span slot="prefix">👤</span>
            <div>账户设置</div>
          </p-list-item>
          <p-list-item class:active="selected === 'notifications'" on:click="selected = 'notifications'" button>
            <span slot="prefix">🔔</span>
            <div>通知设置</div>
          </p-list-item>
          <p-list-item class:active="selected === 'privacy'" on:click="selected = 'privacy'" button>
            <span slot="prefix">🔒</span>
            <div>隐私设置</div>
          </p-list-item>
          <p-list-item class:active="selected === 'help'" on:click="selected = 'help'" button>
            <span slot="prefix">❓</span>
            <div>帮助中心</div>
          </p-list-item>
        </p-list>
      </div>
      <script>
        export default {
          data: {
            selected: 'account'
          }
        };
      </script>
    </template>
  </code>
</o-playground>

### 多选列表

实现分类筛选的多选功能：

<o-playground name="多选列表" style="--editor-height: 500px">
  <code path="demo.html" active>
    <template page>
      <link rel="stylesheet" href="https://punch-ui-v2.pages.dev/packages/css/pui-global.css" />
      <l-m src="https://punch-ui-v2.pages.dev/packages/list/list.html"></l-m>
      <l-m src="https://punch-ui-v2.pages.dev/packages/list/list-item.html"></l-m>
      <style>
        p-list-item {
          background-color: rgba(from var(--md-sys-color-neutral) r g b / 0.1);
          transition: all ease 0.3s;
        }
        p-list-item.active {
          background-color: var(--md-sys-color-primary);
          border-radius: 12px;
        }
        p-list-item.active div {
          color: var(--md-sys-color-on-primary);
        }
      </style>
      <div style="padding: 20px; max-width: 400px;">
        <p-list>
          <p-list-item class:active="filters.includes('all')" on:click="toggleFilter('all')" button>
            <span slot="prefix">📁</span>
            <div>全部</div>
          </p-list-item>
          <p-list-item class:active="filters.includes('electronics')" on:click="toggleFilter('electronics')" button>
            <span slot="prefix">📱</span>
            <div>电子产品</div>
          </p-list-item>
          <p-list-item class:active="filters.includes('clothing')" on:click="toggleFilter('clothing')" button>
            <span slot="prefix">👕</span>
            <div>服装</div>
          </p-list-item>
          <p-list-item class:active="filters.includes('books')" on:click="toggleFilter('books')" button>
            <span slot="prefix">📚</span>
            <div>图书</div>
          </p-list-item>
        </p-list>
        <p style="margin-top: 16px;">已选: {{ filters }}</p>
      </div>
      <script>
        export default {
          data: {
            filters: ['all']
          },
          proto: {
            toggleFilter(filter) {
              if (this.filters.includes(filter)) {
                if (this.filters.length > 1) {
                  this.filters = this.filters.filter(f => f !== filter);
                }
              } else {
                this.filters = [...this.filters, filter];
              }
            }
          }
        };
      </script>
    </template>
  </code>
</o-playground>

## API

### 属性 - p-list-item

| 属性 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| `collapsible` | 是否可折叠 | `boolean` | `false` |
| `expanded` | 是否展开 | `boolean` | `false` |
| `button` | 是否为可点击按钮（显示涟漪效果） | `boolean` \| `string` | `false` |
| `active` | 是否为激活状态 | `boolean` | `false` |
| `disabled` | 是否禁用 | `boolean` | `false` |
| `align-top` | 内容是否顶部对齐 | `boolean` | `false` |
| `color` | 列表项颜色 | `primary` \| `error` \| `success` \| `neutral` | - |
| `variant` | 列表项样式 | `outlined` \| `filled` | - |

### 插槽 - p-list-item

| 插槽名 | 说明 |
|--------|------|
| `default` | 主要内容，支持 `secondary` 属性的元素作为次要文本 |
| `prefix` | 前缀内容（如图标、头像等） |
| `suffix` | 后缀内容（如徽章、操作按钮等） |
| `sublist` | 子列表内容（用于可折叠项） |
| `expand-icon` | 自定义展开/折叠图标 |

### 事件 - p-list-item

| 事件名 | 说明 |
|--------|------|
| `click` | 点击列表项时触发 |
| `expand` | 折叠状态改变时触发 |

### CSS 变量

| 变量名 | 说明 | 默认值 |
|--------|------|--------|
| `--sublist-indent` | 子列表缩进距离 | `16px` |
