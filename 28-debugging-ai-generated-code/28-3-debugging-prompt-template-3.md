Bug: Dashboard loads in 5s, target <500ms.

Debug steps:
1. Add timing logs
2. Profile database queries
3. Look for N+1 queries
4. Fix bottleneck
5. Add performance test