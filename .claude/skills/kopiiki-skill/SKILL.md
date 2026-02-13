---
name: kopiiki-skill
description: 自动化执行网站视觉还原流程，将任何网站转换为像素级完美的 React + TypeScript 项目。在用户需要提取网站资源并转换为 React 项目时使用。
license: MIT
---

# Kopiiki Skill - 网站视觉还原

自动化执行网站视觉还原流程，将任何网站转换为像素级完美的 React + TypeScript 项目。

## 使用时机

- 用户想要提取和复制一个网站的设计
- 需要将现有网站转换为 React 项目
- 需要批量处理多个网站

## 使用方法

在聊天中输入：`/kopiiki-skill <url1> [url2] ... [--name <collection-name>]`

## 工作流程

### 第一阶段：资源提取
1. 创建合集文件夹
2. 调用 webtwin skill 提取每个网站
3. 创建状态跟踪文件

### 第二阶段：SOP 转换
执行 SOP v3.2 的8个阶段（详见 AI_AGENT_视觉还原_SOP_3.2_主文档.md）

### 第三阶段：验证和报告
生成验证报告和质量检查清单

## 关键规则

- ✅ 提取所有 section
- ✅ 绝对不使用占位符
- ✅ 使用完整数据
- ❌ 禁止跳过任何 section

## 质量标准

- 结构完整性：100%
- 内容完整性：100%
- 样式准确性：95%+
