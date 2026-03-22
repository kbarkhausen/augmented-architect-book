// .claude/hooks/post-tool-use.js
const input = JSON.parse(require('fs').readFileSync(0, 'utf-8'));

// Auto-run tests when source files change
if ((input.tool_name === 'Write' || input.tool_name === 'Edit') && 
    input.tool_result?.success) {
  
  const file = input.tool_input.path;
  
  if (file.match(/src\/.*\.ts$/) && !file.includes('.test.')) {
    // Find corresponding test file
    const testFile = file
      .replace('/src/', '/src/__tests__/')
      .replace('.ts', '.test.ts');
    
    console.log(JSON.stringify({
      command: `pnpm vitest run ${testFile} --reporter=dot 2>&1 || true`
    }));
  }
}