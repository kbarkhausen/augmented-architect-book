<!-- memory-bank/pipeline-learnings.md -->

## Pipeline Failures

### 2026-03-21: Auth module change broke tests
- **Issue**: #234
- **Cause**: Agent didn't understand auth context
- **Fix**: Added auth-specific rules
- **Prevention**: Updated CLAUDE.md with auth patterns

### 2026-03-18: Coverage dropped below threshold
- **Issue**: #228
- **Cause**: Generated code without tests
- **Fix**: Made test generation mandatory in prompt
- **Prevention**: Added coverage gate earlier in pipeline