Bug: Calculation returns 95, expected 100.

Debug steps:
1. Add logging at each calculation step
2. Identify where value diverges
3. Fix the logic error
4. Remove debug logging
5. Add unit test for this case