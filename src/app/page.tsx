import type { Metadata } from 'next';
import { Hero } from '@/components/sections/hero';
import { ValueProps } from '@/components/sections/value-props';
import { AboutTeaser } from '@/components/sections/about-teaser';
import { ProgramsPreview } from '@/components/sections/programs-preview';
import { TestimonialHighlight } from '@/components/sections/testimonial-highlight';
import { CTABanner } from '@/components/ui/cta-banner';
import { StructuredData, localBusinessSchema } from '@/components/structured-data';

export const metadata: Metadata = {
  // absolute bypasses the layout's title template; the home page uses the
  // brand-first format rather than the "Page | Brand" template pattern.
  title: {
    absolute: 'FORGE Athletics | Strength & Conditioning Gym in Granbury, TX',
  },
  description:
    'FORGE Athletics is a strength and conditioning gym in Granbury, TX. Barbell Club, kettlebell, steel mace, open gym, fundamentals, and 1-on-1 coaching. Your first week is free.',
  openGraph: {
    title: 'FORGE Athletics | Strength & Conditioning Gym in Granbury, TX',
    description:
      'FORGE Athletics is a strength and conditioning gym in Granbury, TX. Barbell Club, kettlebell, steel mace, open gym, fundamentals, and 1-on-1 coaching. Your first week is free.',
    url: '/',
    images: ['/og-image.avif'],
    type: 'website',
    siteName: 'FORGE Athletics',
  },
};

export default function Home() {
  return (
    <>
      <StructuredData data={localBusinessSchema} />
      <Hero />
      <ValueProps />
      <AboutTeaser />
      <ProgramsPreview />
      <TestimonialHighlight />
      <CTABanner
        heading="Your First Week Is Free"
        subtext="No commitment. No credit card. Just show up."
        buttonText="Claim Your Free Trial"
        buttonHref="/contact"
      />
    </>
  );
}
