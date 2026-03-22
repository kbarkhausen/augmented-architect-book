# Example: Install an Azure DevOps MCP server
# Adapt to your actual MCP server package
claude mcp add azure-devops npx your-azure-devops-mcp \
  --env AZURE_DEVOPS_PAT="$AZURE_PAT" \
  --env AZURE_DEVOPS_ORG="your-org" \
  --env AZURE_DEVOPS_PROJECT="your-project"