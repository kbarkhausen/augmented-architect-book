Add caching to the dashboard API:

Constraints:
- Use Redis (already configured in @src/lib/redis.ts)
- Cache invalidation on data changes
- 5-minute TTL for dashboard data
- No new dependencies
- Must not break existing tests