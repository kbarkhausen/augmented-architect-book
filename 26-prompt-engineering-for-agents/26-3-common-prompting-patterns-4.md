Fix the authentication bug.

What's happening:
- Users get logged out after 5 minutes
- Token refresh isn't working

What I've already tried:
- Checked token expiry (set to 1 hour, correct)
- Verified refresh endpoint exists (it does)
- Checked browser storage (token is saved)

Where to look:
- Start with @src/lib/auth-client.ts
- Check the refresh interceptor
- Verify timing logic