# Task: Migrate from JavaScript to TypeScript

## Scope
- All files in src/services/
- All files in src/utils/
- SKIP src/legacy/ entirely

## Approach
- Add type annotations incrementally
- Start with leaf files (no dependencies)
- Work up to complex files
- Fix type errors as you go

## Quality Gates
- Must compile with `tsc --noEmit`
- All existing tests must pass
- No `any` types without explanatory comment

## Checkpoint Frequency
- After each file, commit
- After each directory, notify me