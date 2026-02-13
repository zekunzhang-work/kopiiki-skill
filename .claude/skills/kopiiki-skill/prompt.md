You are executing the Visual Restore skill to automate website visual restoration.

## Task

Extract and convert the following websites to React + TypeScript projects:
{{#each urls}}
- {{this}}
{{/each}}

Collection name: {{collection_name}}

## Phase 1: Resource Extraction (Automated)

### Step 1: Create Project Structure

Create the collection folder structure:
```
visual_restore_projects/{{collection_name}}/
├── status.json
└── (domain folders will be created for each URL)
```

### Step 2: Extract Each Website

For each URL in the list:

1. **Extract domain name** from URL (e.g., "example.com" from "https://example.com")
2. **Create domain folder**: `visual_restore_projects/{{collection_name}}/<domain>/`
3. **Call webtwin skill**: Use `/webtwin <url>` to extract the website
4. **Move extracted files** to `<domain>/raw/` directory
5. **Update status.json** with extraction status

### Step 3: Create Status File

Create `status.json` with the following structure:
```json
{
  "collection_name": "{{collection_name}}",
  "created_at": "<timestamp>",
  "websites": [
    {
      "url": "<url>",
      "domain": "<domain>",
      "extraction_status": "completed|failed",
      "extraction_time": "<timestamp>",
      "sop_status": "pending|in_progress|completed|failed",
      "react_project_path": "<domain>/react-project/"
    }
  ]
}
```

## Phase 2: SOP Execution (AI Agent)

After resource extraction is complete, automatically begin SOP v3.2 execution for each website.

### Important: Read SOP Documentation

Before starting, read these files:
- `AI_AGENT_视觉还原_SOP_3.2_主文档.md` - Main SOP document
- `modules/00_文件扫描与分块策略.md` - Stage 0
- `modules/01_结构分析.md` - Stage 1
- `modules/02_样式提取.md` - Stage 2
- And other module files as needed

### For Each Website, Execute:

**Stage 0: File Scanning**
- Check HTML file size
- Check CSS format (compressed/binary)
- Count total sections
- Determine processing strategy (single-pass/segmented/incremental)
- Create `<domain>/analysis/file_scan.json`

**Stage 1: Structure Analysis**
- Extract all sections, navigation, header, footer
- Generate `sections_structure.json`
- Identify layout types

**Stage 2: Style Extraction**
- Extract CSS variables, selectors, responsive breakpoints
- Remove animation-related styles
- Generate `css_extraction.json`
- If CSS is corrupted, download from CDN (Stage 2.5)

**Stage 3: Design System**
- Categorize colors, fonts, spacing
- Generate `design_system.json`

**Stage 4: Content Extraction**
- Extract navigation content
- Extract each section's HTML content
- Extract footer content
- Save as `section_{i}_content.json`

**Stage 5: Data Separation**
- Extract all repeated elements (cards, lists)
- Generate TypeScript data files
- NO placeholder data - extract ALL instances

**Stage 6: Component Planning**
- Plan layout components (Navigation, Footer)
- Plan UI components (Card, Button)
- Plan section components
- Generate component architecture list

**Stage 7: Code Generation**
- Generate React + TypeScript project structure
- Generate all components based on extracted content
- NO placeholders allowed
- Import CSS files correctly in index.html
- Use precise HTML cleaning rules (preserve static styles)

**Stage 8: Quality Validation**
- Run `npm install && npm run build`
- Check for TypeScript errors
- Verify in browser (styles loaded, no placeholders)
- Generate validation report

### Critical Rules

**MUST DO**:
- ✅ Extract ALL sections (not just hero and footer)
- ✅ Extract navigation bar if it exists
- ✅ Use complete data (not sample data)
- ✅ Preserve all className attributes
- ✅ NO placeholders like "Content goes here"
- ✅ Check CSS file format before processing
- ✅ Add CSS <link> tags to index.html

**MUST NOT DO**:
- ❌ Skip any sections
- ❌ Use placeholder content
- ❌ Use sample data (must extract ALL cards/items)
- ❌ Remove all inline styles (only remove animations)
- ❌ Forget to include CSS files in HTML

## Phase 3: Validation and Reporting

After completing all websites, generate `REPORT.md`:

```markdown
# Visual Restore Report

Collection: {{collection_name}}
Date: <timestamp>

## Summary

- Total websites: X
- Successfully converted: Y
- Failed: Z

## Website Details

### example.com

**Status**: ✅ Completed / ❌ Failed

**Extraction**:
- Time: X minutes
- Files extracted: HTML, CSS, JS, images

**SOP Conversion**:
- Stages completed: 0-8
- React project generated: Yes
- Build status: ✅ Success (0 errors)
- Browser validation: ✅ Passed

**Quality Metrics**:
- Structure completeness: 100%
- Content completeness: 100%
- Style accuracy: 95%
- Data completeness: 100%

**Known Issues**:
- None / List issues here

**Next Steps**:
- Manual visual comparison recommended
- Check responsive design on mobile

---

(Repeat for each website)
```

## Error Handling

If any stage fails:
1. Log the error in status.json
2. Save progress up to the failed stage
3. Provide clear error message and suggested fix
4. Allow user to resume from the failed stage

## Success Criteria

For each website:
- ✅ All resources extracted successfully
- ✅ React project builds without errors
- ✅ Browser shows page with complete styles
- ✅ No placeholder content
- ✅ All sections present
- ✅ Navigation bar visible (if original site has one)

## Notes

- Estimated time: 35-65 minutes per website
- User supervision recommended
- Final visual comparison requires manual check
- Can resume from any failed stage
