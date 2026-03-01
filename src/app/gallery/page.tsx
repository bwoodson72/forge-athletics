import type { Metadata } from 'next';
import { SectionWrapper } from '@/components/ui/section-wrapper';
import { SectionHeading } from '@/components/ui/section-heading';
import { CTABanner } from '@/components/ui/cta-banner';
import { GalleryGrid } from '@/components/gallery-grid';

export const metadata: Metadata = {
  title: 'The Gym | FORGE Athletics',
  description:
    'Take a look inside FORGE Athletics — the equipment, the space, and the community.',
};

export default function GalleryPage() {
  return (
    <>
      {/* ── Page header ───────────────────────────────────────────────────── */}
      <section className="flex min-h-[40vh] items-center justify-center bg-surface">
        <div className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 md:py-24 lg:px-8">
          <SectionHeading
            title="The Gym"
            subtitle="Step inside FORGE."
          />
        </div>
      </section>

      {/* ── Gallery grid ──────────────────────────────────────────────────── */}
      <SectionWrapper>
        <GalleryGrid />
      </SectionWrapper>

      {/* ── CTA ───────────────────────────────────────────────────────────── */}
      <CTABanner
        heading="See it for yourself."
        subtext="Tours are free and take about 15 minutes. No pressure, no pitch."
        buttonText="Book a Tour"
        buttonHref="/contact"
      />
    </>
  );
}
