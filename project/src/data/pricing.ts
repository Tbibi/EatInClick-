import type { PricingTier } from '../types';

export const pricingTiers: PricingTier[] = [
  {
    name: 'Starter',
    price: 490,
    features: [
      'Up to 100 orders/month',
      'Basic menu management',
      'Email support',
      'Mobile-friendly ordering',
      'Basic analytics'
    ]
  },
  {
    name: 'Restaurant',
    price: 999,
    features: [
      'Unlimited orders',
      'Advanced menu management',
      'Priority support',
      'Custom branded app',
      'Advanced analytics',
      'Table reservations',
      'Customer loyalty program'
    ]
  },
  {
    name: 'Enterprise',
    price: 1999,
    features: [
      'Multiple locations',
      'Custom integration',
      'Dedicated support',
      'White-label solution',
      'API access',
      'Custom analytics',
      'Advanced loyalty programs',
      'Inventory management'
    ]
  }
];