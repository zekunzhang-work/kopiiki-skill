# AI Agent 网站视觉还原 SOP v3.2 - 主文档

## 🎯 核心任务

**输入**：目标网站源文件（HTML/CSS/资源）  
**输出**：React + TypeScript 项目  
**还原目标**：**100%视觉一致性1:1**（排版+样式+**完整内容**，不含动效）

**关键成功因素**：
- ✅ 结构完整（所有section + 导航栏 + footer）
- ✅ **内容完整**（所有文字、图片、链接）⭐ **最重要**
- ✅ 样式准确（颜色、字体、间距）
- ✅ 数据完整（所有列表、卡片、重复元素）
- ✅ **CSS正确引入**（必须在浏览器中加载）⭐ **新增**

---

## 🆕 v3.2 主要改进

### 修复的关键问题

1. ✅ **阶段1扩展** - 提取所有元素（不仅section），包括导航栏、header、footer
2. ✅ **阶段2增强** - 处理压缩/二进制CSS，提供CDN下载备用方案
3. ✅ **动画移除规则精确化** - 明确保留/移除规则，附Python代码示例
4. ✅ **阶段7新增CSS引入步骤** - 确保CSS文件正确加载到浏览器
5. ✅ **每阶段增加验证检查点** - 提供明确的成功/失败标准

### 新增内容

- 🆕 阶段2.5「CSS重建」- 当原始CSS不可用时的备用方案
- 🆕 详细的验证检查清单 - 每个阶段的具体验证标准
- 🆕 代码级实现示例 - Python代码片段确保执行正确

---

## 📋 执行流程总览

| 阶段 | 任务 | 关键输出 | 主要改进 |
|------|------|---------|---------|
| 0 | 文件扫描 & 分块策略 | 文件大小评估、分段方案 | 无变化 |
| 1 | **结构分析（增强）** ⭐ | Section + 导航 + footer地图 | 提取所有元素 |
| 2 | **样式提取（增强）** ⭐ | CSS设计系统 + 验证 | CSS格式检查 |
| 2.5 | **CSS重建（新增）** 🆕 | 备用CSS文件 | 从CDN下载 |
| 3 | 设计系统归纳 | Design tokens | 无变化 |
| 4 | **分段内容提取（扩展）** ⭐ | 所有内容JSON（含导航） | 提取导航栏 |
| 5 | 数据分离 | 完整数据文件 | 无变化 |
| 6 | 组件规划 | 组件架构清单 | 增加Navigation |
| 7 | **代码生成（增强）** ⭐ | React项目 + CSS引入 | CSS引入HTML |
| 8 | 质量验证 | 验证报告 | 增加CSS检查 |

---

## ⚡ 快速执行清单

### 阶段 0：文件扫描
```
□ 检查HTML文件大小（>100KB需要分段）
□ 检查CSS格式（是否压缩/二进制）⭐ 新增
□ 统计section总数
□ 识别页面主容器（.page-wrapper等）⭐ 新增
□ 制定处理策略
```

### 阶段 1：结构分析（增强版）⭐
```
□ 找到页面主容器（.page-wrapper, .main-wrapper等）
□ 提取主容器的所有直接子元素（不只是section）⭐ 重要
□ 识别并标记：
  - Navigation/Header（<header>, <nav>, 或class含nav/header的div）
  - 所有<section>标签
  - Footer（如果独立存在）
  - 其他重要元素（.trigger, .modal等）
□ 生成完整的structure_map.json
□ 验证：是否发现了导航栏？（95%的网站都有）⭐ 新增
```

### 阶段 2：样式提取（增强版）⭐
```
□ 检查CSS文件格式（运行file命令或chardet检测）⭐ 新增
□ 如果是二进制/压缩格式：
  - 尝试gzip解压
  - 或从HTML <link>标签提取CDN URL
  - 准备执行阶段2.5「CSS重建」
□ 提取CSS变量
□ 提取所有选择器样式（使用精确的动画排除规则）
□ 识别响应式断点
□ 验证提取结果：⭐ 新增
  - CSS规则数 > 50？
  - 颜色值数 > 10？
  - class名称包含HTML中主要class？
□ 如果验证失败 → 执行阶段2.5
```

### 阶段 2.5：CSS重建（新增）🆕
```
执行条件：阶段2验证失败 或 CSS提取规则 < 50个

□ 从HTML <link>标签提取所有CSS CDN URL
□ 使用requests下载每个CSS文件
□ 保存到临时目录并验证内容
□ 如果下载成功：
  - 重新执行阶段2的提取
  - 标记为"使用CDN CSS"
□ 如果下载失败：
  - 从HTML内联样式反向工程CSS
  - 生成基础CSS规则
□ 验证：生成的CSS文件 > 5KB？
```

### 阶段 3：设计系统
```
□ 归纳颜色系统
□ 归纳字体系统
□ 归纳间距系统
```

### 阶段 4：内容提取（扩展版）⭐
```
□ 提取导航栏/Header（如果存在）⭐ 新增
  - 完整的导航HTML
  - Logo图片
  - 所有导航链接
  - CTA按钮
  - 保存为navigation_content.json
  
□ 逐个section提取HTML内容
  - 保存为section_{i}_content.json
  - 确保无遗漏
  
□ 提取Footer（如果独立存在）⭐ 新增
  
□ 验证：是否所有元素都已提取？
```

### 阶段 5：数据分离
```
□ 提取导航数据（全部链接）⭐ 扩展
□ 提取卡片数据（全部，不是样例）
□ 提取所有重复元素
□ 生成TypeScript接口
```

### 阶段 6：组件规划
```
□ 规划布局组件：⭐ 扩展
  - Navigation.tsx（新增）
  - Header.tsx
  - Footer.tsx
□ 规划通用UI组件（Card, Button等）
□ 为每个section创建内容组件
□ 生成组件清单
```

### 阶段 7：代码生成（增强版）⭐
```
□ 生成项目结构
□ 生成Navigation组件（新增）⭐
□ 基于section_content.json生成所有section组件
□ 使用精确的HTML清理规则（保留静态样式）⭐ 重要
□ 导入完整数据文件
□ 禁止使用占位符

□ CSS文件处理（新增关键步骤）⭐⭐⭐
  - 复制CSS文件到public/styles/
  - 在index.html的<head>中添加<link>标签
  - 验证CSS路径正确性
  
□ 在App.tsx组装：⭐ 修改
  - <div className="page-wrapper">
  - <Navigation />
  - 所有section组件
  - <Footer />
```

### 阶段 8：验证（增强版）⭐
```
□ npm install && npm run build（0 TypeScript错误）
□ npm run dev 启动服务器
□ 打开浏览器到 http://localhost:5174

□ 验证内容完整性：
  - 无占位符
  - 所有section存在
  - 导航栏显示⭐ 新增
  
□ 验证样式加载：⭐ 新增
  - 打开开发者工具 → Network
  - CSS文件状态码 = 200？
  - CSS文件大小 > 0？
  - 页面不是纯白底黑字？
  
□ 验证数据完整性：
  - 导航项数量 = 原网站
  - 卡片数量 = 原网站
  
□ 如果样式有问题 → 检查CSS引入
□ 对比原网站截图
```

---

## 🚨 关键禁止事项

### ❌ 绝对不允许：

1. **使用占位符**
   ```tsx
   // ❌ 错误
   <div>Content goes here</div>
   <div>TODO: Add content</div>
   ```

2. **数据不完整**
   ```tsx
   // ❌ 错误：只提取1-2个样例
   const cards = [{ id: 1, ... }];  // 原网站有12个
   ```

3. **跳过section或导航栏**⭐ 修改
   ```tsx
   // ❌ 错误：遗漏导航栏和中间的section
   {/* Navigation missing */}
   <Hero />
   {/* Section 2-14 missing */}
   <Footer />
   ```

4. **移除所有内联样式**⭐ 新增
   ```python
   # ❌ 错误：过度清理
   html = re.sub(r'style="[^"]*"', '', html)  # 删除了所有style
   
   # ✅ 正确：精确清理
   html = remove_animation_styles_only(html)  # 只删除动画相关
   ```

5. **CSS文件未引入HTML**⭐ 新增
   ```html
   <!-- ❌ 错误：CSS文件存在但未引入 -->
   <head>
     <!-- 缺少<link>标签 -->
   </head>
   
   <!-- ✅ 正确 -->
   <head>
     <link rel="stylesheet" href="/styles/webflow.css">
   </head>
   ```

---

## 📊 质量标准（必达）

### 1. 结构完整性：100%
- ✅ 导航栏存在（如果原网站有）⭐ 新增
- ✅ 所有section存在
- ✅ Footer存在（如果原网站有）
- ✅ 所有嵌套层级保留
- ✅ 所有className保留

### 2. 内容完整性：100% ⭐⭐⭐
- ✅ **没有占位符**
- ✅ **没有 "Content goes here"**
- ✅ **没有 TODO 注释**
- ✅ 所有文字内容完整
- ✅ 所有图片URL正确
- ✅ 所有链接href正确
- ✅ 导航链接完整⭐ 新增

### 3. 样式准确性：95%+
- ✅ CSS文件正确加载（Network显示200）⭐ 新增
- ✅ 颜色完全匹配
- ✅ 字体大小完全匹配
- ✅ 间距误差 < 5%
- ✅ 响应式断点正确
- ✅ 静态定位样式保留⭐ 新增

### 4. 数据完整性：100%
- ✅ 所有列表数据完整
- ✅ 所有卡片数据完整
- ✅ 不能只有样例数据

### 5. 代码质量
- ✅ TypeScript零错误
- ✅ 构建成功
- ✅ 可正常运行
- ✅ React渲染正常（root非空）⭐ 新增

---

## 🔧 处理规则（精确版）

### 动画移除规则（精确版v2.0）⭐⭐⭐

#### 必须移除的：

**CSS中移除**：
```css
/* ❌ 完全移除 */
animation: *;
animation-name: *;
animation-duration: *;
animation-delay: *;
animation-iteration-count: *;
animation-timing-function: *;
transition-duration: *;  /* 仅移除duration */
@keyframes * { }

/* ✅ 保留 */
transition-property: *;
transition-timing-function: *;
```

**HTML中移除**：
```html
<!-- ❌ 移除这些属性 -->
data-w-id="*"              (Webflow动画ID)
data-wf-*="*"              (Webflow其他动画数据)
```

**内联样式中移除**：
```
will-change: *;
animation: *;
animation-*: *;
transition-duration: *;
```

#### 必须保留的：

**所有静态布局样式**：
```css
/* ✅ 保留所有这些 */
transform: translate3d(0px, 0px, 0px);  /* 初始定位 */
transform: translate3d(0, 0, 0);
transform: rotate(0deg);
transform: scale(1);
opacity: 0;   /* 初始隐藏 */
opacity: 1;   /* 初始可见 */
position: *;
top: *; left: *; right: *; bottom: *;
width: *; height: *;
margin: *; padding: *;
display: *; flex: *; grid: *;
```

#### Python实现（代码级规范）

```python
def clean_html_precise(html_raw):
    """精确清理HTML，只移除动画，保留静态样式"""
    
    # 1. 移除Webflow动画ID
    html = re.sub(r'\s+data-w-id="[^"]*"', '', html_raw)
    html = re.sub(r'\s+data-wf-[^=]*="[^"]*"', '', html)
    
    # 2. 精确清理style属性
    def clean_style_attr(match):
        style_content = match.group(1)
        
        # 只移除这些动画相关属性
        style_content = re.sub(r'will-change:\s*[^;]+;?\s*', '', style_content)
        style_content = re.sub(r'animation[^:]*:\s*[^;]+;?\s*', '', style_content)
        style_content = re.sub(r'transition-duration:\s*[^;]+;?\s*', '', style_content)
        
        # 清理多余分号
        style_content = re.sub(r';\s*;', ';', style_content)
        style_content = style_content.strip()
        
        # 如果还有内容，保留整个style属性
        if style_content and style_content != ';':
            return f' style="{style_content}"'
        else:
            return ''
    
    # 应用到所有style属性
    html = re.sub(r'\s+style="([^"]*)"', clean_style_attr, html)
    
    return html
```

### 资源处理：
- 优先CDN链接
- CDN失败则下载到本地

### 响应式优先级：
- 桌面端(>992px)：100%匹配
- 移动端(<768px)：90%+匹配
- 平板端(768-991px)：85%+匹配

### 组件命名：
- 基于语义className（`.hero-section` → `Hero.tsx`）
- 无语义则用位置（`Section1.tsx`, `Section2.tsx`）
- 重复元素提取子组件（`Card.tsx`, `Item.tsx`）
- Navigation/Header/Footer单独组件⭐ 新增

---

## 📂 输出结构

```
项目根目录/
├── src/
│   ├── components/
│   │   ├── layout/          # 布局组件
│   │   │   ├── Navigation.tsx ⭐ 新增
│   │   │   ├── Header.tsx
│   │   │   ├── Footer.tsx
│   │   │   └── Modal.tsx
│   │   ├── ui/              # 通用UI组件
│   │   │   ├── Card.tsx
│   │   │   ├── Cta.tsx
│   │   │   ├── Form.tsx
│   │   │   └── Section.tsx
│   │   └── sections/        # 内容section组件
│   │       ├── HeroSection.tsx
│   │       ├── ServicesSection.tsx
│   │       └── ... (所有section)
│   ├── data/               # 所有数据文件
│   │   ├── navigationData.ts ⭐ 新增
│   │   ├── cardsData.ts    (完整数据)
│   │   └── sectionsContent.ts
│   ├── styles/
│   │   ├── webflow.css     (原始CSS)
│   │   └── main.css        (补充CSS)
│   ├── types.ts
│   ├── App.tsx             (含page-wrapper和Navigation)⭐
│   └── main.tsx
├── public/
│   └── styles/             ⭐ 新增
│       ├── webflow-shared.css (从CDN下载)
│       └── fonts.css
├── index.html              (含CSS <link>标签)⭐
├── package.json
├── tsconfig.json
├── vite.config.ts
├── components_check.md
└── README.md
```

---

## ✅ 验证检查清单（每阶段必查）

### 阶段0验证清单
- [ ] HTML文件大小已记录
- [ ] CSS文件格式已检查（text/binary）⭐
- [ ] Section总数已统计
- [ ] 页面主容器已识别⭐

### 阶段1验证清单⭐
- [ ] 找到了page-wrapper或主容器？
- [ ] 识别了导航栏/header？（如果原网站有）
- [ ] 所有section都已列出？
- [ ] Footer是否独立存在？
- [ ] structure_map.json包含所有元素类型？

### 阶段2验证清单⭐⭐⭐
- [ ] CSS文件能正常读取（不是乱码）？
- [ ] 提取的CSS规则数 > 50？
- [ ] 提取的颜色数 > 10？
- [ ] 提取的class名称包含HTML中主要class？
- [ ] 如果验证失败，是否执行了阶段2.5？

### 阶段2.5验证清单（如果执行）🆕
- [ ] 从HTML提取了所有<link>标签？
- [ ] 成功下载了至少1个CSS文件？
- [ ] 下载的CSS文件 > 5KB？
- [ ] CSS内容是可读的文本（不是二进制）？

### 阶段4验证清单⭐
- [ ] navigation_content.json已生成？（如果有导航）
- [ ] 所有section的content.json都已生成？
- [ ] footer_content.json已生成？（如果独立）
- [ ] JSON文件中没有占位符文本？

### 阶段7验证清单⭐⭐⭐
- [ ] Navigation.tsx已生成？（如果有导航）
- [ ] 所有section组件已生成？
- [ ] App.tsx包含page-wrapper？
- [ ] App.tsx包含Navigation组件？
- [ ] **CSS文件已复制到public/styles/？**
- [ ] **index.html包含<link>标签？**
- [ ] **<link>标签的href路径正确？**
- [ ] HTML清理使用了精确规则（不是全部删除style）？

### 阶段8验证清单⭐⭐⭐
- [ ] npm run build成功（0错误）？
- [ ] 浏览器能访问页面？
- [ ] 页面有样式（不是纯白底黑字）？
- [ ] **浏览器Network显示CSS加载成功（200）？**
- [ ] **CSS文件大小 > 0？**
- [ ] 导航栏可见？
- [ ] 所有section可见？
- [ ] 无占位符文本？
- [ ] React root div有内容（不是空的）？

---

## 🎯 最终验证标准

### 构建测试
```bash
npm install   # ✅ 无错误
npm run build # ✅ 0 TypeScript错误
npm run dev   # ✅ 成功启动
```

### 浏览器测试（关键）⭐
```
打开 http://localhost:5174

1. 视觉检查：
  ✅ 页面有完整样式（不是白底黑字）
  ✅ 导航栏显示正常
  ✅ 所有section都存在
  ✅ 颜色和原网站一致
  ✅ 布局不是全部堆叠

2. 开发者工具 → Network：
  ✅ CSS文件状态 = 200 OK
  ✅ CSS文件大小 > 10KB
  ✅ 没有404错误

3. 开发者工具 → Console：
  ✅ 没有JavaScript错误
  ✅ 没有React渲染错误

4. 开发者工具 → Elements：
  ✅ #root div有内容
  ✅ 有<div class="page-wrapper">
  ✅ 有导航栏元素
```

### 内容对比
```
对比原网站：
  ✅ 导航栏：Logo + 链接数量一致
  ✅ Section数量一致
  ✅ 所有文字内容都正确
  ✅ 所有图片都显示
  ✅ 所有链接都正确
  ✅ 没有任何占位符
  ✅ 没有明显的内容缺失
```

### 数据验证
```
✅ 导航项数量 = 原网站
✅ 卡片数量 = 原网站
✅ 列表项数量 = 原网站
```

---

## 🔍 常见问题与解决方案

### 问题1：CSS文件无法读取（二进制/压缩）

**症状**：
- `phase2_styles.py`提取到0个颜色、0个CSS规则
- CSS文件用文本编辑器打开是乱码

**解决方案**：
```python
# 执行阶段2.5
from bs4 import BeautifulSoup
import requests

# 1. 从HTML提取CSS URL
with open('index.html', 'r') as f:
    soup = BeautifulSoup(f.read(), 'html.parser')

css_urls = []
for link in soup.find_all('link', rel='stylesheet'):
    href = link.get('href')
    if href and href.startswith('http'):
        css_urls.append(href)

# 2. 下载CSS
for url in css_urls:
    response = requests.get(url)
    filename = url.split('/')[-1]
    with open(f'downloaded_{filename}', 'w') as f:
        f.write(response.text)

# 3. 重新运行阶段2，使用下载的CSS
```

### 问题2：页面没有样式（白底黑字）

**症状**：
- 浏览器能访问页面
- 但是没有颜色、没有布局
- 看起来像纯HTML

**解决方案**：
```html
<!-- 检查index.html是否有<link>标签 -->
<head>
  <link rel="stylesheet" href="/styles/webflow.css">
  
  <!-- 如果没有，手动添加 -->
</head>
```

```bash
# 检查CSS文件是否在正确位置
ls kanzo-react/public/styles/
# 应该能看到CSS文件

# 检查浏览器Network面板
# CSS状态码应该是200，不是404
```

### 问题3：导航栏缺失

**症状**：
- 页面顶部空白
- 没有Logo和菜单

**解决方案**：
```python
# 重新执行阶段1，使用增强逻辑
from bs4 import BeautifulSoup

with open('index.html', 'r') as f:
    soup = BeautifulSoup(f.read(), 'html.parser')

# 找到page-wrapper
page_wrapper = soup.find('div', class_='page-wrapper')

# 提取所有直接子元素
for child in page_wrapper.children:
    if hasattr(child, 'name'):
        print(f'{child.name}: {child.get("class", [])}')
        # 识别导航栏、sections等
```

### 问题4：内联样式被过度删除

**症状**：
- 布局完全错乱
- 元素位置不对

**解决方案**：
- 使用本SOP中的精确HTML清理规则
- 不要使用 `re.sub(r'style="[^"]*"', '', html)`
- 使用提供的`clean_html_precise()`函数

---

## 📚 详细文档索引

核心文档：
- [📄 模块00: 文件扫描与分块策略](./modules/00_文件扫描与分块策略.md)
- [📄 模块01: 结构分析（增强版）](./modules/01_结构分析_v3.2.md) ⭐
- [📄 模块02: 样式提取（增强版）](./modules/02_样式提取_v3.2.md) ⭐
- [📄 模块02.5: CSS重建（新增）](./modules/02.5_CSS重建.md) 🆕
- [📄 模块03: 设计系统归纳](./modules/03_设计系统归纳.md)
- [📄 模块04: 分段内容提取（扩展版）](./modules/04_分段内容提取_v3.2.md) ⭐
- [📄 模块05: 数据分离](./modules/05_数据分离.md)
- [📄 模块06: 组件规划（扩展版）](./modules/06_组件规划_v3.2.md) ⭐
- [📄 模块07: 代码生成（增强版）](./modules/07_代码生成_v3.2.md) ⭐⭐⭐
- [📄 模块08: 质量验证（增强版）](./modules/08_质量验证_v3.2.md) ⭐

参考文档：
- [📄 常见错误及解决方案](./modules/常见错误及解决方案_v3.2.md) ⭐
- [📄 动画移除规则详解](./modules/动画移除规则_v3.2.md) ⭐
- [📄 CSS处理最佳实践](./modules/CSS处理最佳实践.md) 🆕

---

## 📝 版本历史

### v3.2（当前版本）- 2026-01-26

**主要改进**：
1. ✅ **阶段1扩展** - 提取所有元素（导航、header、footer），不仅限于section
2. ✅ **阶段2增强** - CSS格式检查、验证机制、备用方案
3. ✅ **新增阶段2.5** - CSS重建（从CDN下载）
4. ✅ **动画移除规则精确化** - 提供Python代码实现
5. ✅ **阶段7关键改进** - 明确CSS引入步骤（<link>标签）
6. ✅ **精确HTML清理** - 保留静态样式，只移除动画
7. ✅ **每阶段增加验证清单** - 明确成功/失败标准
8. ✅ **新增常见问题解决方案** - 基于实际测试总结

**修复的问题**：
- 🐛 导航栏缺失问题
- 🐛 CSS文件损坏/压缩无法读取
- 🐛 内联样式过度删除导致布局错乱
- 🐛 CSS未引入HTML导致无样式
- 🐛 React未渲染问题的诊断方法

### v3.1 - 2026-01-24
- 模块化拆分
- 主文档精简

### v3.0 - 2026-01-20
- 初始完整版本

---

**SOP版本**: 3.2（增强版）  
**最后更新**: 2026-01-26  
**适用于**: AI Agent 自动化执行  
**测试状态**: 已通过Kanzo Studio网站实际测试验证

---

## 🎯 执行要点总结

### 最关键的5点（必须做到）⭐⭐⭐

1. **提取导航栏** - 不要只找section，要找所有元素
2. **CSS格式检查** - 二进制/压缩CSS必须从CDN下载
3. **精确HTML清理** - 只移除动画，保留静态样式
4. **CSS引入HTML** - 必须在index.html添加<link>标签
5. **浏览器验证** - 打开Network检查CSS是否加载成功

### 记住：

> "如果CSS文件无法读取，就从HTML的<link>标签找CDN URL下载"
> 
> "如果页面没有样式，就检查index.html是否有<link>标签"
> 
> "如果导航栏缺失，就检查阶段1是否只找了section"
> 
> "如果布局错乱，就检查是否误删了内联样式"

---

**🚀 开始执行 → 从阶段0开始，严格按照清单逐项检查！**
