<!-- .claude/commands/fix.md -->
---
name: fix
description: Fix a bug
arguments:
  - name: issue
    required: true
---

1. Fetch bug report: `gh issue view {{issue}}`
2. Reproduce the issue
3. Write a failing test
4. Implement the fix
5. Verify test passes
6. Commit: `git commit -m "fix: resolve #{{issue}}"`