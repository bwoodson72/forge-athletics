import type { Metadata } from 'next';
import { transformations } from '@/lib/data/transformations';
import { SectionWrapper } from '@/components/ui/section-wrapper';
import { SectionHeading } from '@/components/ui/section-heading';
import { CTABanner } from '@/components/ui/cta-banner';
import { TestimonialCard } from '@/components/cards/testimonial-card';
import { cn } from '@/lib/utils';

export const metadata: Metadata = {
  title: 'Member Transformations',
  description:
    'Read the stories of FORGE Athletics members who showed up, put in the work, and changed their lives.',
  openGraph: {
    title: 'Member Transformations | FORGE Athletics',
    description:
      'Read the stories of FORGE Athletics members who showed up, put in the work, and changed their lives.',
    url: '/transformations',
    images: ['/og-image.avif'],
    type: 'website',
    siteName: 'FORGE Athletics',
  },
};

export default function TransformationsPage() {
  return (
    <>
      {/* ── Page header ───────────────────────────────────────────────────── */}
      <section className="flex min-h-[40vh] items-center justify-center bg-surface">
        <div className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 md:py-24 lg:px-8">
          <SectionHeading
            title="Transformations"
            subtitle="Real members. Real work. Real results."
          />
        </div>
      </section>

      {/* ── Transformation sections ────────────────────────────────────────── */}
      {transformations.map((transformation, index) => {
        const isEven = index % 2 === 0;

        return (
          <SectionWrapper
            key={transformation.name}
            className={cn(!isEven && 'bg-surface')}
          >
            <TestimonialCard
              transformation={transformation}
              featured
              /*
               * Even indices (0, 2, 4): quote left, image right — not flipped.
               * Odd indices (1, 3):     image left, quote right — flipped.
               */
              flipped={!isEven}
            />
          </SectionWrapper>
        );
      })}

      {/* ── CTA ───────────────────────────────────────────────────────────── */}
      <CTABanner
        heading="Your transformation starts here."
        subtext="Show up for one week, on us. No commitment. No credit card."
        buttonText="Start Your Free Trial"
        buttonHref="/contact"
      />
    </>
  );
}
