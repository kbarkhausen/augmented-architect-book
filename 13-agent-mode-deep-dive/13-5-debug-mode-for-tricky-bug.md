Bug: Order total calculates incorrectly

Reproduction:
1. Add item ($10) to cart
2. Add item ($20) to cart  
3. Apply 10% discount code "SAVE10"
4. Total shows $25 instead of $27

Expected: $30 - 10% = $27
Actual: $25

Notes:
- Works correctly without discount
- Started after PR #234 (discount feature)