export const PAYPAL_OPTIONS = {
  clientId: process.env.NEXT_PUBLIC_PAYPAL_CREDS ?? '',
  currency: 'USD',
  intent: 'capture',
}
