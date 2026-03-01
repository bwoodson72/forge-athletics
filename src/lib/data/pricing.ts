export type PricingTier = {
  name: string;
  price: string;
  period: string;
  features: string[];
  highlighted: boolean;
  cta: string;
};

export const pricingTiers: PricingTier[] = [
  {
    name: 'Drop-In',
    price: '$25',
    period: 'per session',
    features: [
      'Access to any single class',
      'All equipment included',
      'Coach-led session',
      'No commitment required',
    ],
    highlighted: false,
    cta: 'Book a Session',
  },
  {
    name: 'Monthly Unlimited',
    price: '$149',
    period: 'per month',
    features: [
      'Unlimited classes, all programs',
      'Open gym access (6 AM – 9 PM)',
      'Progress tracking & check-ins',
      'Member community access',
      'Free fundamentals onboarding',
      'Cancel anytime',
    ],
    highlighted: true,
    cta: 'Start Today',
  },
  {
    name: 'Annual',
    price: '$119',
    period: 'per month, billed annually',
    features: [
      'Everything in Monthly Unlimited',
      'Two free 1-on-1 coaching sessions',
      'Priority class booking',
      'Exclusive member events',
      'Annual program review',
    ],
    highlighted: false,
    cta: 'Lock In Your Rate',
  },
];
