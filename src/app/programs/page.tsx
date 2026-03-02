import type { Metadata } from 'next';
import Image from 'next/image';
import { programs } from '@/lib/data/programs';
import { SectionWrapper } from '@/components/ui/section-wrapper';
import { SectionHeading } from '@/components/ui/section-heading';
import { CTABanner } from '@/components/ui/cta-banner';
import Button from '@/components/ui/button';
import { cn } from '@/lib/utils';

export const metadata: Metadata = {
  title: 'Training Programs',
  description:
    'Explore FORGE Athletics training programs — Barbell Club, Kettlebell & Conditioning, Steel Mace & Clubs, Open Gym, Fundamentals, and 1-on-1 Coaching.',
  openGraph: {
    title: 'Training Programs | FORGE Athletics',
    description:
      'Explore FORGE Athletics training programs — Barbell Club, Kettlebell & Conditioning, Steel Mace & Clubs, Open Gym, Fundamentals, and 1-on-1 Coaching.',
    url: '/programs',
    images: ['/og-image.jpg'],
    type: 'website',
    siteName: 'FORGE Athletics',
  },
};

export default function ProgramsPage() {
  return (
    <>
      {/* ── Page header ───────────────────────────────────────────────────── */}
      <section className="flex min-h-[40vh] items-center justify-center bg-surface">
        <div className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 md:py-24 lg:px-8">
          <SectionHeading
            title="Training Programs"
            subtitle="From barbell fundamentals to unconventional strength — find the program that fits your goals."
            as="h1"
          />
        </div>
      </section>

      {/* ── Program sections ──────────────────────────────────────────────── */}
      {programs.map((program, index) => {
        const isOdd = index % 2 !== 0;

        return (
          /*
           * scroll-mt-20 offsets the fixed header (h-20 = 80px) so that
           * hash-link navigation (#barbell-club, etc.) doesn't hide the
           * section heading behind the header bar.
           */
          <SectionWrapper
            key={program.slug}
            id={program.slug}
            className={cn('scroll-mt-20', isOdd && 'bg-surface')}
          >
            <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
              {/* ── Content ─────────────────────────────────────────────── */}
              <div className={cn('flex flex-col', isOdd && 'lg:order-2')}>
                {/* Level eyebrow */}
                <p className="text-xs uppercase tracking-widest text-accent">
                  {program.level}
                </p>

                <h2 className="mt-2 font-heading text-2xl font-bold uppercase text-primary md:text-3xl">
                  {program.name}
                </h2>

                <p className="mt-4 text-lg leading-relaxed text-secondary">
                  {program.description}
                </p>

                {/* Feature list */}
                <ul className="mt-6 space-y-2">
                  {program.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3 text-secondary">
                      <span
                        className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent"
                        aria-hidden="true"
                      />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Schedule box */}
                <div className="mt-6 rounded-lg bg-surface-alt px-5 py-4">
                  <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-primary">
                    Schedule
                  </p>
                  {program.schedule.map((slot) => (
                    <p key={slot} className="text-sm text-secondary">
                      {slot}
                    </p>
                  ))}
                </div>

                {/* Meta badges */}
                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="rounded-full border border-border px-3 py-1 text-xs uppercase tracking-wide text-secondary">
                    {program.duration}
                  </span>
                  <span className="rounded-full border border-border px-3 py-1 text-xs uppercase tracking-wide text-secondary">
                    {program.level}
                  </span>
                </div>

                {/* CTA */}
                <div className="mt-8">
                  <Button href="/contact" variant="primary" size="md">
                    Get Started
                  </Button>
                </div>
              </div>

              {/* ── Image ────────────────────────────────────────────────── */}
              <div
                className={cn(
                  'relative aspect-video w-full overflow-hidden rounded-lg',
                  isOdd && 'lg:order-1',
                )}
              >
                <Image
                  src={program.image}
                  alt={program.name}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </div>
          </SectionWrapper>
        );
      })}

      {/* ── CTA ───────────────────────────────────────────────────────────── */}
      <CTABanner
        heading="Not sure which program is right for you?"
        subtext="Our coaches can help you find the perfect fit in a free 20-minute consultation."
        buttonText="Talk to a Coach"
        buttonHref="/contact"
      />
    </>
  );
}
