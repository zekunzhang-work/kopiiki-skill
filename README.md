# Kopiiki Skill - AI 网站视觉还原工具

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Claude Code](https://img.shields.io/badge/Claude%20Code-Compatible-blue)](https://claude.com/claude-code)
[![Cursor](https://img.shields.io/badge/Cursor-Compatible-green)](https://cursor.com)

自动化执行网站视觉还原流程，将任何网站转换为像素级完美的 React + TypeScript 项目。

## ✨ 特性

- 🎯 **100% 视觉一致性**：像素级完美还原
- 🤖 **AI 驱动**：基于 SOP v3.2 的智能转换流程
- 🚀 **完全自动化**：从资源提取到 React 项目生成
- 📦 **批量处理**：支持同时处理多个网站
- 🔧 **Skills 支持**：兼容 Claude Code 和 Cursor
- 📚 **完整文档**：8 个阶段的详细 SOP 文档

## 🚀 快速开始

### 在 Cursor 中使用（推荐）

1. **一键安装**：
   - 打开 Cursor Settings（Mac: `Cmd+Shift+J`，Windows/Linux: `Ctrl+Shift+J`）
   - 前往 **Rules** 标签
   - 点击 **Add Rule** → **Remote Rule (Github)**
   - 输入仓库 URL：`https://github.com/zekunzhang-work/kopiiki-skill`
   - 完成！

2. **使用**：
   ```bash
   /kopiiki-skill https://example.com
   ```

### 在 Claude Code 中使用

1. **克隆仓库**：
   ```bash
   git clone https://github.com/zekunzhang-work/kopiiki-skill.git
   cd kopiiki-skill
   ```

2. **使用**：
   ```bash
   /kopiiki-skill https://example.com
   ```

## 📖 使用示例

```bash
# 单个网站
/kopiiki-skill https://example.com

# 多个网站，指定合集名称
/kopiiki-skill https://site1.com https://site2.com --name my_collection
```

## 🎯 工作流程

### 第一阶段：资源提取（2-5 分钟）
- 使用 webtwin 工具提取网站完整资源
- 支持 JavaScript 渲染（Selenium）
- 下载 HTML、CSS、JS、图片等所有资源

### 第二阶段：SOP 转换（30-60 分钟）
执行 8 个阶段的智能转换：
- **阶段 0**：文件扫描与分块策略
- **阶段 1**：结构分析（提取所有 section、导航栏、footer）
- **阶段 2**：样式提取（CSS 变量、选择器、移除动画）
- **阶段 3**：设计系统归纳（颜色、字体、间距）
- **阶段 4**：分段内容提取（逐个 section 提取完整内容）
- **阶段 5**：数据分离（提取所有重复元素）
- **阶段 6**：组件规划（布局、UI、section 组件）
- **阶段 7**：代码生成（React + TypeScript 项目）
- **阶段 8**：质量验证（构建测试、浏览器验证）

### 第三阶段：验证和报告
- 生成验证报告
- 提供质量检查清单
- 构建测试结果

## 📁 输出结构

```
visual_restore_projects/
└── my_collection_20260213/
    ├── status.json              # 项目状态跟踪
    ├── REPORT.md                # 最终验证报告
    ├── example.com/
    │   ├── raw/                 # 原始资源
    │   ├── analysis/            # SOP 分析结果
    │   └── react-project/       # 最终 React 项目
    └── another-site.com/
        └── ...
```

## 🎓 质量标准

根据 SOP v3.2，转换后的项目必须达到：

- ✅ **结构完整性**：100%（所有 section、导航栏、footer）
- ✅ **内容完整性**：100%（无占位符、所有文字和图片）
- ✅ **样式准确性**：95%+（颜色、字体、间距）
- ✅ **数据完整性**：100%（所有列表、卡片数据）
- ✅ **代码质量**：TypeScript 零错误、可构建运行

## 📚 文档

- [使用指南](README_使用指南.md) - 详细的使用说明
- [SOP 主文档](AI_AGENT_视觉还原_SOP_3.2_主文档.md) - 完整的 SOP 流程
- [模块文档](modules/) - 各阶段详细文档

## 🛠️ 依赖环境

### 资源提取阶段
- Python 3.7+
- Chrome 浏览器（用于 Selenium）
- 依赖包：`pip install -r webtwin/requirements.txt`

### React 项目构建
- Node.js 18+
- npm 或 yarn

## ⏱️ 预计时间

- 资源提取：2-5 分钟/网站
- SOP 转换：30-60 分钟/网站
- 总计：约 35-65 分钟/网站

## 🤝 兼容性

| 工具 | 支持状态 | 说明 |
|------|---------|------|
| Claude Code | ✅ 完全支持 | 原生 skills 支持 |
| Cursor | ✅ 完全支持 | 通过 `.claude/skills/` 目录 |
| 其他 AI 工具 | ⚠️ 手动执行 | 需要手动引导 AI |

## 📝 许可证

本项目遵循 MIT 许可证 - 详见 [LICENSE](LICENSE) 文件。

## 🙏 致谢

- [WebTwin](https://github.com/sirioberati/WebTwin) - 网站资源提取工具
- [Agent Skills](https://agentskills.io) - Skills 开放标准
- Claude Code & Cursor - AI 开发工具

## 📮 联系方式

如有问题或建议，欢迎提交 Issue 或 Pull Request。

---

**版本**: 1.0.0
**最后更新**: 2026-02-13
**兼容性**: Claude Code ✅ | Cursor ✅ | 其他 AI 工具 ⚠️
