---
name: start-ticket
description: Start working on a FlowTrack issue
arguments:
  - name: id
    required: true
---

1. Create feature branch: `git checkout -b feature/FT-{{id}}`
2. Update memory-bank/activeContext.md with current ticket
3. Analyze relevant code
4. Create implementation plan in memory-bank/currentPlan.md
5. Begin implementation