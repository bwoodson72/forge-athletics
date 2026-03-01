import type { PricingTier } from '@/lib/data/pricing';
import Button from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface PricingCardProps {
  tier: PricingTier;
}

export function PricingCard({ tier }: PricingCardProps) {
  return (
    <div className="relative pt-4">
      {/* ── "Most Popular" badge ──────────────────────────────────────────── */}
      {tier.highlighted && (
        <div className="absolute inset-x-0 top-0 flex justify-center">
          <span className="rounded-full bg-accent px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white">
            Most Popular
          </span>
        </div>
      )}

      {/* ── Card ─────────────────────────────────────────────────────────── */}
      <div
        className={cn(
          'flex h-full flex-col rounded-lg border bg-surface p-8',
          tier.highlighted ? 'border-accent' : 'border-border',
        )}
      >
        {/* Tier name */}
        <h3 className="font-heading text-xl font-bold uppercase text-primary">
          {tier.name}
        </h3>

        {/* Price */}
        <div className="mt-4 flex items-end gap-1">
          <span className="font-heading text-5xl font-bold text-primary">
            {tier.price}
          </span>
        </div>
        <p className="mt-1 text-sm text-secondary">{tier.period}</p>

        {/* Divider */}
        <hr className="my-6 border-border" />

        {/* Features */}
        <ul className="flex-1 space-y-3">
          {tier.features.map((feature) => (
            <li key={feature} className="flex items-start gap-3">
              {/* Checkmark */}
              <svg
                className="mt-0.5 h-4 w-4 shrink-0 text-accent"
                viewBox="0 0 16 16"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M2.5 8.5L6.5 12.5L13.5 4.5"
                  stroke="currentColor"
                  strokeWidth="1.75"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span className="text-sm text-secondary">{feature}</span>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div className="mt-8">
          <Button
            href="/contact"
            variant={tier.highlighted ? 'primary' : 'ghost'}
            size="md"
            className="w-full sm:w-full"
          >
            {tier.cta}
          </Button>
        </div>
      </div>
    </div>
  );
}
