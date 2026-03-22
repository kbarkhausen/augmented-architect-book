# Allow specific tools
claude --allowedTools "Read,Write,Edit"

# Deny dangerous patterns
claude --disallowedTools "Bash(rm -rf *),Bash(sudo *)"