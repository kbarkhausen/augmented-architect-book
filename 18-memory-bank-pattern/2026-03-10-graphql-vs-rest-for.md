# Decision Log

## 2026-03-15: Row-Level Security vs Application Filtering

**Decision**: PostgreSQL RLS with application-level context

**Options Considered**:
1. Application-level WHERE clauses
2. PostgreSQL Row-Level Security
3. Separate databases per tenant

**Rationale**:
- RLS provides database-level guarantee
- Single database easier to manage
- Application sets context, DB enforces

**Trade-offs**:
- RLS adds Prisma complexity
- Must ensure context always set
- Testing requires RLS-aware fixtures

**Implementation**: `apps/api/src/middleware/tenant.ts`

---

## 2026-03-10: GraphQL vs REST for Dashboard

**Decision**: GraphQL for dashboard, REST for CRUD

**Rationale**:
- Dashboard needs flexible queries
- CRUD is simple, REST is clearer
- Team familiar with REST

**Implementation**: 
- GraphQL: `/graphql`
- REST: `/api/v2/*`