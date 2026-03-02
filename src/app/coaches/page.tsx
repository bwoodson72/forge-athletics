import type { Metadata } from 'next';
import { coaches } from '@/lib/data/coaches';
import { SectionWrapper } from '@/components/ui/section-wrapper';
import { SectionHeading } from '@/components/ui/section-heading';
import { CTABanner } from '@/components/ui/cta-banner';
import { CoachCard } from '@/components/cards/coach-card';

export const metadata: Metadata = {
  title: 'Our Coaches',
  description:
    'Meet the FORGE Athletics coaching staff — certified strength specialists in powerlifting, kettlebell, Olympic lifting, steel mace, and fundamentals.',
  openGraph: {
    title: 'Our Coaches | FORGE Athletics',
    description:
      'Meet the FORGE Athletics coaching staff — certified strength specialists in powerlifting, kettlebell, Olympic lifting, steel mace, and fundamentals.',
    url: '/coaches',
    images: ['/og-image.avif'],
    type: 'website',
    siteName: 'FORGE Athletics',
  },
};

export default function CoachesPage() {
  return (
    <>
      {/* ── Page header ───────────────────────────────────────────────────── */}
      <section className="flex min-h-[40vh] items-center justify-center bg-surface">
        <div className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 md:py-24 lg:px-8">
          <SectionHeading
            title="Meet Your Coaches"
            subtitle="Certified professionals who train alongside you."
            as="h1"
          />
        </div>
      </section>

      {/* ── Coaches grid ──────────────────────────────────────────────────── */}
      <SectionWrapper>
        {/*
         * flex-wrap + justify-center centres the last orphaned row when the
         * total coach count isn't divisible by 3. Each card is given an
         * explicit width on lg that accounts for the gap so three cards sit
         * flush in a row while the flex container centres any remainder.
         *
         * Gap is gap-6 (1.5 rem). With 3 columns and 2 gaps:
         *   card width = (100% − 2 × 1.5rem) / 3  ≈  33.333% − 1rem
         */}
        <ul className="flex flex-wrap justify-center gap-6">
          {coaches.map((coach) => (
            <li
              key={coach.name}
              className="w-full sm:w-[calc(50%_-_0.75rem)] lg:w-[calc(33.333%_-_1rem)]"
            >
              <CoachCard coach={coach} />
            </li>
          ))}
        </ul>
      </SectionWrapper>

      {/* ── CTA ───────────────────────────────────────────────────────────── */}
      <CTABanner
        heading="Want to train 1-on-1?"
        subtext="Our coaches tailor every session to your goals, schedule, and starting point."
        buttonText="Book a Session"
        buttonHref="/contact"
      />
    </>
  );
}
