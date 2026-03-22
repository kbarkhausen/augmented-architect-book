# Project Name

## Overview
Brief description of what this project does.

## Tech Stack
- Language: TypeScript 5.x
- Runtime: Node.js 22
- Framework: Next.js 15
- Database: PostgreSQL with Prisma
- Testing: Vitest + Playwright

## Commands
- `pnpm dev` — Start development server
- `pnpm test` — Run unit tests
- `pnpm e2e` — Run E2E tests
- `pnpm lint` — Lint and format

## Conventions
- Use functional components with hooks
- Prefer named exports
- Tests go in __tests__ directories
- Use conventional commits

## Architecture
- /src/app — Next.js app router pages
- /src/components — React components
- /src/lib — Shared utilities
- /src/server — API routes and services

## Important Notes
- Never commit .env files
- All API routes require authentication
- Use server actions for mutations