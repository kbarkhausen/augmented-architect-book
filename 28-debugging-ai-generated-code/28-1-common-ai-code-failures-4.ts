// Test passes but doesn't verify behavior
test('should create user', () => {
  const user = createUser({ name: 'Test' });
  expect(user).toBeDefined();  // Too weak!
});