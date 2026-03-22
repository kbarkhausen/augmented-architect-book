// .claude/hooks/post-edit.js
const input = JSON.parse(require('fs').readFileSync(0, 'utf-8'));
const file = input.tool_input?.path;

if (!file) process.exit(0);

const commands = [];

// Auto-format TypeScript
if (file.match(/\.(ts|tsx)$/)) {
  commands.push(`pnpm prettier --write "${file}"`);
}

// Auto-run related tests
if (file.startsWith('apps/api/src/') && !file.includes('.test.')) {
  commands.push(`pnpm test --filter=api -- --testPathPattern="${file.replace('.ts', '')}"`);
}

if (commands.length > 0) {
  console.log(JSON.stringify({ command: commands.join(' && ') }));
}