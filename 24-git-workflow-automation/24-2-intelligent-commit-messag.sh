> Commit the current changes

# Claude:
# 1. Analyzes git diff
# 2. Identifies change type (feat, fix, chore, etc.)
# 3. Extracts affected scope
# 4. Generates descriptive message
# 5. Executes: git commit -m "feat(auth): add JWT refresh token support"