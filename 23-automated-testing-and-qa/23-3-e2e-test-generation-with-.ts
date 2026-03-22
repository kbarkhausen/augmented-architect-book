// tests/e2e/checkout.spec.ts
import { test, expect } from '@playwright/test';
import { CartPage } from './pages/cart.page';
import { CheckoutPage } from './pages/checkout.page';
import { ConfirmationPage } from './pages/confirmation.page';

test.describe('Checkout Flow', () => {
  let cart: CartPage;
  let checkout: CheckoutPage;
  let confirmation: ConfirmationPage;

  test.beforeEach(async ({ page }) => {
    cart = new CartPage(page);
    checkout = new CheckoutPage(page);
    confirmation = new ConfirmationPage(page);
  });

  test('completes purchase successfully', async ({ page }) => {
    // Arrange: Add item to cart
    await cart.goto();
    await cart.addItem('SKU-12345');
    await expect(cart.itemCount).toHaveText('1');

    // Act: Complete checkout
    await cart.proceedToCheckout();

    await checkout.fillShipping({
      name: 'Test User',
      address: '123 Test Street',
      city: 'Test City',
      state: 'TS',
      zip: '12345'
    });

    await checkout.fillPayment({
      cardNumber: '4242424242424242',
      expiry: '12/28',
      cvv: '123'
    });

    await checkout.submit();

    // Assert: Confirmation displayed
    await expect(page).toHaveURL(/\/confirmation/);
    await expect(confirmation.orderNumber).toBeVisible();
    await expect(confirmation.thankYouMessage).toContainText('Thank you');
  });

  test('shows error for invalid payment', async ({ page }) => {
    await cart.goto();
    await cart.addItem('SKU-12345');
    await cart.proceedToCheckout();
    
    await checkout.fillShipping({ /* ... */ });
    await checkout.fillPayment({
      cardNumber: '4000000000000002',  // Decline test card
      expiry: '12/28',
      cvv: '123'
    });

    await checkout.submit();

    await expect(checkout.errorMessage).toContainText('declined');
    await expect(page).not.toHaveURL(/\/confirmation/);
  });
});