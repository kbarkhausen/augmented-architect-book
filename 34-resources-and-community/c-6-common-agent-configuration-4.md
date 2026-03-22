<!-- .claude/commands/implement.md -->
---
name: implement
description: Implement a feature from an issue
arguments:
  - name: issue
    required: true
---

1. Fetch issue: `gh issue view {{issue}}`
2. Create branch: `git checkout -b feature/{{issue}}`
3. Implement the feature
4. Write tests
5. Commit: `git commit -m "feat: implement #{{issue}}"`