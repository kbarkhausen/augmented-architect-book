# Allow npm commands
--allowedTools "Bash(npm run *)"

# Allow git operations
--allowedTools "Bash(git add *),Bash(git commit *)"

# Allow writing only in src/
--allowedTools "Write(src/**/*.ts)"