// Run tests when source files change
if (file?.startsWith('src/') && !file.includes('.test.')) {
  const testFile = file.replace('src/', 'src/__tests__/').replace('.ts', '.test.ts');
  console.log(JSON.stringify({
    command: `npx vitest run "${testFile}"`
  }));
}