Implement user preferences in this order:

Step 1: Create database migration
- Table: user_preferences
- Columns: user_id, key, value, created_at, updated_at
- Run migration and verify

Step 2: Create Prisma model
- Update schema.prisma
- Run prisma generate

Step 3: Create service layer
- CRUD operations
- Follow existing service patterns

Step 4: Create API routes
- GET /users/:id/preferences
- PUT /users/:id/preferences

Step 5: Write tests
- Unit tests for service
- Integration tests for routes

Pause after each step for my review.