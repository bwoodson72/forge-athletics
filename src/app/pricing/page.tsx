import type { Metadata } from 'next';
import { pricingTiers } from '@/lib/data/pricing';
import { SectionWrapper } from '@/components/ui/section-wrapper';
import { SectionHeading } from '@/components/ui/section-heading';
import { PageHeader } from '@/components/ui/page-header';
import { CTABanner } from '@/components/ui/cta-banner';
import { PricingCard } from '@/components/cards/pricing-card';
import { cn } from '@/lib/utils';

export const metadata: Metadata = {
  title: 'Membership Pricing',
  description:
    'Transparent, no-contract pricing for FORGE Athletics — Drop-In, Monthly Unlimited, and Annual memberships with open gym access and unlimited classes.',
  openGraph: {
    title: 'Membership Pricing | FORGE Athletics',
    description:
      'Transparent, no-contract pricing for FORGE Athletics — Drop-In, Monthly Unlimited, and Annual memberships with open gym access and unlimited classes.',
    url: '/pricing',
    images: ['/og-image.avif'],
    type: 'website',
    siteName: 'FORGE Athletics',
  },
};

const faqs = [
  {
    question: 'Is there a contract?',
    answer:
      'Never. All memberships at FORGE are month-to-month. You can cancel at any time before your next billing date with no fees or penalties.',
  },
  {
    question: 'Can I freeze my membership?',
    answer:
      'Yes — members on the Monthly Unlimited or Annual plan can freeze their membership for up to 60 days per calendar year. Just let us know at least 3 days before your billing date.',
  },
  {
    question: "What's included in the free trial?",
    answer:
      "Your first week is completely free and includes unlimited class access across all programs. We'll match you with a coach for a quick intro session to find the right fit.",
  },
  {
    question: 'Do you offer student or military discounts?',
    answer:
      'We offer a 15% discount for active-duty military, veterans, first responders, and full-time students. Bring valid ID or documentation and mention it when you sign up.',
  },
  {
    question: 'What are your hours?',
    answer:
      'The gym is staffed Monday–Friday 5:30 AM–8 PM and Saturday–Sunday 7 AM–2 PM. Members on Monthly Unlimited and Annual plans have keycard access 6 AM–9 PM daily.',
  },
];

export default function PricingPage() {
  return (
    <>
      <PageHeader
        title="Membership Pricing"
        subtitle="Invest in your strength — no contracts, cancel anytime."
      />

      {/* ── Pricing cards ─────────────────────────────────────────────────── */}
      <SectionWrapper>
        {/*
         * The highlighted (Most Popular) card uses lg:scale-105 + z-10 so it
         * visually pops above its neighbors. We add lg:py-4 to the grid to
         * give the scaled card room to breathe without clipping.
         */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 lg:items-center lg:gap-6 lg:py-4">
          {pricingTiers.map((tier) => (
            <div
              key={tier.name}
              className={cn(tier.highlighted && 'relative z-10 lg:scale-105')}
            >
              <PricingCard tier={tier} />
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* ── FAQ ───────────────────────────────────────────────────────────── */}
      <SectionWrapper className="bg-surface">
        <SectionHeading title="Common Questions" />

        <div className="mx-auto mt-12 max-w-2xl">
          {faqs.map((faq) => (
            <details key={faq.question} className="group">
              <summary
                className={[
                  'flex cursor-pointer list-none items-center justify-between',
                  'border-b border-border py-4',
                  'font-semibold text-primary',
                  'hover:text-accent',
                  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2',
                ].join(' ')}
              >
                {faq.question}
                {/* Chevron: rotates when open via group-open */}
                <svg
                  className="h-4 w-4 shrink-0 text-accent transition-transform duration-200 group-open:rotate-180"
                  viewBox="0 0 16 16"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M3 6L8 11L13 6"
                    stroke="currentColor"
                    strokeWidth="1.75"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </summary>
              <p className="py-4 text-sm leading-relaxed text-secondary">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>
      </SectionWrapper>

      {/* ── CTA ───────────────────────────────────────────────────────────── */}
      <CTABanner
        heading="Ready to start?"
        subtext="Your first week is on us. No commitment. No credit card."
        buttonText="Claim Your Free Trial"
        buttonHref="/contact"
      />
    </>
  );
}
