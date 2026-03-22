// Before (fragile)
await page.click('#btn-submit-form-v2');

// After AI healing (robust)
await page.getByRole('button', { name: 'Submit' }).click();