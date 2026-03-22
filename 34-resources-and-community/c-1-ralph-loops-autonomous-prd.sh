# Clone the Ralph Loop scripts
git clone https://github.com/joenjega/ralph-loop .ralph

# Create your PRD
cat > prd.json << 'EOF'
{
  "name": "User Authentication System",
  "items": [
    {"id": 1, "task": "Create User model with email/password", "done": false},
    {"id": 2, "task": "Add password hashing with bcrypt", "done": false},
    {"id": 3, "task": "Create login endpoint with JWT", "done": false},
    {"id": 4, "task": "Add refresh token rotation", "done": false},
    {"id": 5, "task": "Write integration tests", "done": false}
  ]
}
EOF

# Run Ralph (unlimited iterations until complete)
./ralph.sh --tool claude

# Or with a max iteration limit
./ralph.sh --tool claude 10