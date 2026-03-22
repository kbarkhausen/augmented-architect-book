// .claude/hooks/pre-tool-use.js
const input = JSON.parse(require('fs').readFileSync(0, 'utf-8'));

if (input.tool_name === 'Bash') {
  const cmd = input.tool_input.command;
  
  // Enforce branch naming
  if (cmd.includes('git checkout -b')) {
    const branch = cmd.match(/checkout -b (\S+)/)?.[1];
    
    if (branch && !branch.match(/^(feature|fix|chore|docs)\/[a-z0-9-]+$/)) {
      console.log(JSON.stringify({
        error: 'Branch must match pattern: (feature|fix|chore|docs)/description'
      }));
      process.exit(1);
    }
  }
}