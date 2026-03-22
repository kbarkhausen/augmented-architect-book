# Add an MCP server
claude mcp add github npx @anthropic-ai/mcp-server-github

# With environment variables
claude mcp add postgres npx @anthropic-ai/mcp-server-postgres \
  --env DATABASE_URL="postgresql://user:pass@localhost/db"

# List configured servers
claude mcp list

# Remove a server
claude mcp remove github