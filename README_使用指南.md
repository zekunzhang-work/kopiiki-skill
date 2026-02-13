# 网站视觉还原工具使用指南

本项目提供了一套完整的工具和流程，用于将任何网站转换为像素级完美的 React + TypeScript 项目。

## 工具兼容性

### Claude Code（推荐）

✅ **完全自动化支持**

如果你使用 [Claude Code](https://claude.com/claude-code)，可以直接使用自动化 skill：

```bash
# 单个网站
/kopiiki-skill https://example.com

# 多个网站
/kopiiki-skill https://site1.com https://site2.com --name my_collection
```

**安装步骤**：
1. 安装 Claude Code CLI
2. 将本项目文件夹复制到你的工作目录
3. 在项目目录中运行上述命令

### Cursor

✅ **完全支持 Skills！**

好消息！Cursor 原生支持从 `.claude/skills/` 目录加载 skills。

**使用方法**：
1. 将本项目文件夹复制到你的工作目录
2. Cursor 会自动发现 `.claude/skills/kopiiki-skill/` 中的 skill
3. 在 Cursor 的 Agent 聊天中输入：
   ```bash
   /kopiiki-skill https://example.com
   ```

**查看已加载的 skills**：
- 打开 Cursor Settings（Mac: Cmd+Shift+J，Windows/Linux: Ctrl+Shift+J）
- 前往 Rules 标签
- Skills 会显示在 "Agent Decides" 部分

**注意**：Cursor 使用 `SKILL.md` 文件格式（带 YAML frontmatter），本项目已经提供了兼容的文件。

### 其他 AI 工具

⚠️ **需要手动执行**

如果你使用其他 AI 代码编辑器，需要手动引导 AI 执行流程：

**步骤1：提取网站资源**

使用 webtwin 工具（需要 Python 环境）：
```bash
cd webtwin
python app.py
# 访问 http://127.0.0.1:5001
# 输入 URL 并勾选 "Use Advanced Rendering (Selenium)"
# 下载 ZIP 文件并解压
```

**步骤2：转换为 React 项目**

在 AI 工具中与 AI 对话：
```
你：我需要将这个网站转换为 React 项目，请阅读 @AI_AGENT_视觉还原_SOP_3.2_主文档.md

你：网站资源在 <path>/raw/ 目录，请按照 SOP 执行8个阶段的转换

AI：[会自动读取 SOP 文档并执行]
```

**步骤3：监督执行**

AI 会逐步执行：
- 阶段0：文件扫描
- 阶段1：结构分析
- 阶段2：样式提取
- ...
- 阶段8：质量验证

你可以在任何阶段介入和调整。

## 文件说明

### 核心文档

- **AI_AGENT_视觉还原_SOP_3.2_主文档.md** - SOP 主文档（必读）
- **modules/** - 各阶段详细文档
  - `00_文件扫描与分块策略.md`
  - `01_结构分析.md`
  - `02_样式提取.md`
  - ... 等8个阶段

### 自动化工具（仅 Claude Code）

- **.claude/skills/kopiiki-skill/** - 自动化 skill
- **.claude/skills/webtwin/** - 网站提取 skill

### 资源提取工具

- **webtwin/** - Flask 应用，用于提取网站资源
  - 支持 JavaScript 渲染（Selenium）
  - 下载完整的 HTML、CSS、JS、图片等

## 依赖环境

### 资源提取阶段

- Python 3.7+
- Chrome 浏览器（用于 Selenium）
- 依赖包：`pip install -r webtwin/requirements.txt`

### React 项目构建

- Node.js 18+
- npm 或 yarn

## 质量标准

根据 SOP v3.2，转换后的项目必须达到：

- ✅ 结构完整性：100%
- ✅ 内容完整性：100%（无占位符）
- ✅ 样式准确性：95%+
- ✅ 数据完整性：100%
- ✅ 代码质量：TypeScript 零错误

## 预计时间

- 资源提取：2-5 分钟/网站
- SOP 转换：30-60 分钟/网站
- 总计：约 35-65 分钟/网站

## 常见问题

### Q: 我必须使用 Claude Code 吗？

A: 不是必须的。Claude Code 提供了最佳的自动化体验，但你可以在任何 AI 工具中手动执行 SOP 流程。

### Q: SOP 文档可以在其他 AI 工具中使用吗？

A: 可以！SOP 文档是通用的 Markdown 格式，任何 AI 工具都能读取和理解。只是需要你手动引导 AI 执行各个阶段。

### Q: 可以只使用部分功能吗？

A: 可以。你可以：
- 只使用 webtwin 提取网站资源
- 只使用 SOP 文档手动转换
- 或者使用完整的自动化流程

### Q: 如何分享给团队？

A:
- **Claude Code 用户**：分享整个项目文件夹
- **Cursor 用户**：分享 SOP 文档和 webtwin 工具
- **其他用户**：提供本 README 和相关文档

## 技术支持

如果遇到问题：
1. 查看 `modules/常见错误及解决方案.md`
2. 检查 SOP 文档中的验证清单
3. 确保所有依赖环境已正确安装

## 许可

本项目遵循 MIT 许可证。

---

**版本**: 1.0.0
**最后更新**: 2026-02-13
**兼容性**: Claude Code (完全支持) | Cursor (手动执行) | 其他 AI 工具 (手动执行)
