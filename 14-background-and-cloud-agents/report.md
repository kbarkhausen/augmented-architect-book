# Task: Investigate and fix performance issue

## Symptom
API response time increased from 50ms to 2000ms after last deploy

## Approach
1. Add performance logging to identify bottleneck
2. Profile database queries
3. Check for N+1 queries
4. Identify root cause
5. Implement fix
6. Verify improvement

## Constraints
- Do not modify database schema
- Keep existing API contract
- All tests must pass

## Report
When done, provide:
- Root cause analysis
- Fix description
- Before/after performance metrics