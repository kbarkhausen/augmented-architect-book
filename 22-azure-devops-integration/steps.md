<!-- .claude/commands/pickup.md -->
---
name: pickup
description: Pick up a work item from Azure DevOps
arguments:
  - name: id
    description: Work item ID
    required: true
---

# Pick Up Work Item

## Steps

1. **Fetch Work Item**
   Query Azure DevOps for work item #{{id}}
   Read title, description, acceptance criteria

2. **Update Status**
   Set state to "In Progress"
   Assign to current user

3. **Create Branch**
   ```bash
   git checkout main
   git pull
   git checkout -b feature/{{id}}-[slug-from-title]
   ```

4. **Update Memory Bank**
   Update activeContext.md with:
   - Current work item: #{{id}}
   - Title and requirements
   - Started timestamp

5. **Analyze Requirements**
   Identify:
   - Files that need changes
   - Tests to write
   - Dependencies or blockers
   
   Present implementation plan for approval.