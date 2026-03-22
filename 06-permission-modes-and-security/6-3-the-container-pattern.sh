# Run with isolation
docker run \
  --rm \
  --network none \     # No network
  --read-only \        # Read-only filesystem
  --tmpfs /tmp \       # Temp space only
  -v $(pwd):/workspace:rw \
  claude-sandbox "implement the feature"