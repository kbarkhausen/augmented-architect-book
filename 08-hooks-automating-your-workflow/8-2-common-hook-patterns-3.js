const PROTECTED_PATHS = ['.env', 'secrets/', 'config/production.json'];

if (PROTECTED_PATHS.some(p => file?.includes(p))) {
  console.log(JSON.stringify({
    error: `Cannot modify protected file: ${file}`
  }));
  process.exit(1);
}