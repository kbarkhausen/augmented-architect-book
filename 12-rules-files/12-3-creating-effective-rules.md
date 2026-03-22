---
description: React component patterns
globs: ["src/components/**/*.tsx", "src/pages/**/*.tsx"]
---

# React Standards

- Functional components only (no class components)
- Props interface named `{Component}Props`
- Use custom hooks for logic > 10 lines
- Colocate tests: `Component.tsx` → `Component.test.tsx`