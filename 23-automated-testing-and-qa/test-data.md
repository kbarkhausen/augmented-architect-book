<!-- .cursor/rules/testing.mdc -->
---
description: Testing requirements
globs: ["**/*.test.ts", "**/*.spec.ts", "src/**/*.ts"]
---

# Testing Standards

## Before Completing Any Task
1. Run `pnpm test` - all must pass
2. Run `pnpm test:coverage` - verify coverage
3. If coverage dropped, add tests

## Test Structure
- AAA pattern (Arrange, Act, Assert)
- One primary assertion per test
- Descriptive names: "should [action] when [condition]"

## Coverage Requirements
- New code: >80% line coverage
- Critical paths (auth, payments): >95%

## Test Data
- Use factories from `@/test/factories`
- Never use production data
- Clean up after tests