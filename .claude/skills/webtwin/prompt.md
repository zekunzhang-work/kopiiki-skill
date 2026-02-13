You are executing the WebTwin skill to extract a website.

## Task

Extract the website at: {{url}}

**IMPORTANT**: Always use advanced Selenium rendering (use_selenium=true) to ensure JavaScript content is properly rendered.

## Steps to follow

1. **Check if Flask server is running**
   - Check if port 5001 is in use
   - If not running, start the server in background

2. **Prepare the extraction request**
   - URL: {{url}}
   - Use Selenium: true (always enabled for best results)

3. **Send API request**
   - POST to http://127.0.0.1:5001/extract
   - Form data: `url={{url}}&use_selenium=true`
   - Wait for response (may take 30-120 seconds for Selenium rendering)

4. **Download and save the ZIP file**
   - Create `extracted_sites/` directory if needed
   - Save with filename: `<domain>_<timestamp>.zip`
   - Report the file location to user

5. **Handle errors gracefully**
   - If server fails to start, report the error
   - If extraction fails, show the error message
   - If timeout occurs, suggest trying again or using --selenium flag

## Important notes

- The extraction process can take 30-120 seconds depending on site size
- Large sites may timeout - suggest breaking into smaller extractions
- Some sites have anti-scraping measures that may block extraction
- Always check the Flask server logs if issues occur

## Success criteria

- ZIP file is created and saved
- File contains HTML, CSS, JS, images, and other assets
- User is informed of the output location
