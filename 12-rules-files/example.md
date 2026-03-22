---
description: TypeScript backend development standards
globs: ["src/api/**/*.ts", "src/services/**/*.ts"]
alwaysApply: false
---

# Backend Standards

## Architecture
- Use service/repository pattern
- Controllers are thin orchestrators
- Services contain business logic
- Repositories handle data access

## Error Handling
- Use custom error classes (see src/lib/errors.ts)
- Always log errors with context
- Return appropriate HTTP status codes

## Example