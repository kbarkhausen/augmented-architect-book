## Context
We're adding rate limiting to the API. The codebase uses Express middleware.
Existing auth middleware is at @src/middleware/auth.ts.

## Limitations
- Don't modify the database schema
- Don't add new dependencies (use existing Redis connection)
- Don't change existing endpoint signatures

## Expectation
- Rate limiting on all /api/* routes
- 100 requests per minute per user
- Return 429 with Retry-After header when exceeded

## Action
1. Create rate limiting middleware
2. Add to route configuration
3. Write unit tests
4. Update API documentation

## Report
When done, list:
- Files created/modified
- How to test the rate limiting
- Any edge cases handled