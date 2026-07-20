# AGENTS.md

本仓库是一个基于 [ofa.js](https://ofajs.com) 开发的 UI 组件库。请在进行任何变更前遵循以下约定。

## 前置准备

- 本项目基于 **ofa.js** 开发，开始工作前请先读取 `ofajs-docs` 技能的内容，确保熟悉 ofa.js 的组件、页面模块、数据绑定与 API 用法。

## 组件变更时的同步更新

当修改 `packages/**` 下的组件文件后，必须同步更新以下位置：

1. **`skills/punch-ui/`**
   - 更新 `skills/punch-ui/references/<component>.md`，让技能知识库与组件实际行为保持一致。
   - 如有必要，同步更新 `skills/punch-ui/SKILL.md` 的组件描述。

2. **`docs/cn/`**
   - 更新 `docs/cn/documentation/<component>.md`，保持中文文档与组件同步。

## 不需要更新的位置

以下路径由构建/翻译流程产出，**不需要**手动更新：

- `docs/en/**`
- `docs/website/**`

## 备注

- 严格遵循"最小改动"原则：只更新与本次组件变更相关的文档与技能内容。
- 若涉及新增或删除组件，请同步在 `skills/punch-ui/SKILL.md` 中登记，并在 `docs/cn/` 中新增对应文档。

## 技能资源与导入 (Skill Resources)

若本地环境中缺少相关知识库，请通过以下链接获取最新版本：

- **ofa.js-docs**
  - [GitHub 在线源码](https://github.com/ofajs/ofa.js/tree/main/skills/ofajs-docs)
  - [ZIP 离线包下载](https://raw.githubusercontent.com/ofajs/ofa.js/refs/heads/main/skills/ofajs-docs.zip)

### ⚠️ 导入注意事项

导入技能包时，若压缩包内包含 `references` 与 `assets` 目录，**必须完整导入这两个目录下的全部文件**。前者存储核心技术细节文档，后者包含示例资源、素材等补充材料，任何遗漏都会导致技能知识库残缺，直接影响开发流程的准确性与效率。

