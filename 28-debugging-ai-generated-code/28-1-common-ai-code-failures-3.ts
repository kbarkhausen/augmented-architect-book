// AI generates happy path only
async function processPayment(amount: number) {
  const response = await stripe.charges.create({ amount });
  return response.id;
  // What if Stripe is down? Card declined? Network error?
}