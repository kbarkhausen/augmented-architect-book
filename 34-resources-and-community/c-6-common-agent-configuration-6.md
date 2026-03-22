<!-- .claude/commands/refactor.md -->
---
name: refactor
description: Refactor code safely
arguments:
  - name: target
    required: true
---

1. Run existing tests (must pass)
2. Analyze {{target}} for improvements
3. Create incremental changes
4. Test after each change
5. Commit each logical unit