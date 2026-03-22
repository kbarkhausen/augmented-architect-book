<!-- .claude/commands/ship.md -->
---
name: ship
description: Finalize and ship current work
---

# Ship Changes

1. **Verify Quality**
   ```bash
   pnpm typecheck
   pnpm lint  
   pnpm test
   ```

2. **Clean Up Commits**
   If multiple commits, offer to squash

3. **Push and Create PR**
   ```bash
   git push -u origin HEAD
   gh pr create --fill
   ```

4. **Report**
   Provide PR link and summary