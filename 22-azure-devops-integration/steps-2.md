<!-- .claude/commands/complete.md -->
---
name: complete
description: Complete current work item and create PR
---

# Complete Work Item

## Steps

1. **Verify Quality**
   ```bash
   pnpm typecheck
   pnpm lint
   pnpm test
   ```

2. **Create Commit**
   Use conventional commit with work item link:
   ```bash
   git add .
   git commit -m "feat: [description] AB#{{workitem.id}}"
   ```

3. **Push and Create PR**
   ```bash
   git push -u origin HEAD
   az repos pr create \
     --title "[description]" \
     --description "Resolves AB#{{workitem.id}}" \
     --auto-complete
   ```

4. **Update Work Item**
   - Set state to "Code Review"
   - Link PR to work item

5. **Update Memory Bank**
   - Mark task complete in progress.md
   - Update activeContext.md