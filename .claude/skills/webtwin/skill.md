# WebTwin Extractor Skill

Extract any website's complete source code and assets automatically.

## Usage

```bash
/webtwin <url>
```

## Arguments

- `url` (required): The website URL to extract

**Note**: Selenium advanced rendering is always enabled by default for best results with modern JavaScript-heavy websites.

## Examples

```bash
# Extract any website (Selenium rendering enabled by default)
/webtwin https://example.com

# Extract a React/Vue/Angular app
/webtwin https://app.example.com
```

## What it does

1. Starts the WebTwin Flask server (if not running)
2. Sends extraction request via API
3. Downloads the complete website as a ZIP file
4. Saves it to the `extracted_sites/` directory

## Output

The extracted website will be saved as:
```
extracted_sites/<domain>_<timestamp>.zip
```

## Requirements

- Python 3.7+
- Dependencies installed in `webtwin/venv`
- Chrome browser (for --selenium mode)
