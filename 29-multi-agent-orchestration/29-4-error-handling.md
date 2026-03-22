If agent fails:
1. Log failure with context
2. Retry 3 times
3. If still failing, mark needs-human
4. Continue with other agents
5. Report partial completion