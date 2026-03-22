## Summary
Implements JWT refresh token support for the authentication system.

## Changes
- `src/services/auth-service.ts` - Added refresh token generation and validation
- `src/api/auth.ts` - New `/auth/refresh` endpoint
- `src/middleware/auth.ts` - Updated to handle token refresh
- `src/types/auth.ts` - Added RefreshToken type

## Testing
- ✅ Unit tests for refresh token logic
- ✅ Integration tests for /auth/refresh endpoint
- ✅ Manual testing with expired tokens

## Breaking Changes
None

## Checklist
- [x] Tests pass
- [x] Types check
- [x] Lint passes
- [x] Documentation updated