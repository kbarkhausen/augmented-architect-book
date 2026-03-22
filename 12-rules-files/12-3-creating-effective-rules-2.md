---
description: Error handling patterns
globs: ["src/**/*.ts"]
---

# Error Handling

- Use Result<T, E> pattern for operations that can fail
- Never throw in service layer (return errors)
- Log errors with structured data
- See: @src/lib/result.ts for implementation