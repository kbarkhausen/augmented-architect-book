// .claude/hooks/post-edit.js
const input = JSON.parse(require('fs').readFileSync(0, 'utf-8'));

const file = input.tool_input?.path;
if (file?.match(/\.(ts|tsx|js|jsx)$/)) {
  console.log(JSON.stringify({
    command: `npx prettier --write "${file}" && npx eslint --fix "${file}"`
  }));
}