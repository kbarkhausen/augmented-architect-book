// .claude/hooks/pre-tool-use.js
const input = JSON.parse(require('fs').readFileSync(0, 'utf-8'));

// Block commits if tests fail
if (input.tool_name === 'Bash' && input.tool_input.command.includes('git commit')) {
  console.log(JSON.stringify({
    command: 'pnpm test --run 2>&1 || (echo "Tests must pass before commit" && exit 1)'
  }));
}