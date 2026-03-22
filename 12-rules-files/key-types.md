---
description: Order processing domain rules
globs: ["src/domains/orders/**/*"]
---

# Order Domain

## Business Rules
- Orders require at least one line item
- Total must match sum of line items
- Status transitions: draft → pending → confirmed → shipped → delivered

## Key Types
- Order, OrderLineItem, OrderStatus
- See @src/domains/orders/types.ts