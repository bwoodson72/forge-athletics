import type { Metadata } from 'next';
import { SectionWrapper } from '@/components/ui/section-wrapper';
import { PageHeader } from '@/components/ui/page-header';
import { CTABanner } from '@/components/ui/cta-banner';
import { GalleryGrid } from '@/components/gallery-grid';

export const metadata: Metadata = {
  title: 'Our Facility',
  description:
    'Take a look inside FORGE Athletics — the equipment, the space, and the community.',
  openGraph: {
    title: 'Our Facility | FORGE Athletics',
    description:
      'Take a look inside FORGE Athletics — the equipment, the space, and the community.',
    url: '/gallery',
    images: ['/og-image.jpg'],
    type: 'website',
    siteName: 'FORGE Athletics',
  },
};

export default function GalleryPage() {
  return (
    <>
      <PageHeader title="The Gym" subtitle="Step inside FORGE." />

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
