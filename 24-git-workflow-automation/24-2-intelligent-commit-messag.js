// .claude/hooks/pre-tool-use.js
const input = JSON.parse(require('fs').readFileSync(0, 'utf-8'));

if (input.tool_name === 'Bash') {
  const cmd = input.tool_input.command;
  
  if (cmd.includes('git commit')) {
    const msg = cmd.match(/-m ["'](.+?)["']/)?.[1];
    
    const pattern = /^(feat|fix|chore|docs|style|refactor|test|perf)(\(.+\))?: .{10,}/;
    
    if (msg && !pattern.test(msg)) {
      console.log(JSON.stringify({
        error: `Invalid commit message. Expected: type(scope): description (10+ chars)
Got: ${msg}`
      }));
      process.exit(1);
    }
  }
}