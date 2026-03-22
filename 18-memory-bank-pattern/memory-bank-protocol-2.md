<!-- .claude/commands/sync-memory.md -->
---
name: sync-memory
description: Update memory bank with session progress
---

# Sync Memory Bank

1. **Update activeContext.md**
   - Update task statuses
   - Add discovered tasks
   - Update "Current Focus"

2. **Update progress.md**
   - Check off completed items
   - Add new items
   - Update percentages

3. **Update decisionLog.md** (if applicable)
   - Document significant decisions
   - Include rationale

4. **Commit**
   ```bash
   git add memory-bank/
   git commit -m "docs: sync memory bank"
   ```