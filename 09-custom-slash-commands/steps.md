<!-- .claude/commands/implement.md -->
---
name: implement
description: Implement a feature from a GitHub issue
arguments:
  - name: issue
    description: GitHub issue number
    required: true
---

# Implement Feature

You are implementing a feature based on a GitHub issue.

## Steps

1. **Fetch Issue Details**
   Run: `gh issue view {{issue}} --json title,body,labels`

2. **Understand Requirements**
   - Read the issue description
   - Identify acceptance criteria

3. **Plan Implementation**
   - List files that need to change
   - Outline the approach

4. **Implement**
   - Create/modify necessary files
   - Follow project coding standards
   - Write clean, documented code

5. **Test**
   - Write unit tests for new code
   - Run existing tests

6. **Commit**
   - Use conventional commit format
   - Reference issue: `feat: implement X (closes #{{issue}})`

7. **Report**
   - Summarize what was implemented
   - List files changed