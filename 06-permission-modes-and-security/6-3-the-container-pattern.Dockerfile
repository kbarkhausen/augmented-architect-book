# Dockerfile.claude-sandbox
FROM node:20-alpine

# Create isolated user
RUN adduser -D claude-agent

WORKDIR /workspace
COPY --chown=claude-agent:claude-agent . .

USER claude-agent
ENTRYPOINT ["claude", "--dangerously-skip-permissions"]