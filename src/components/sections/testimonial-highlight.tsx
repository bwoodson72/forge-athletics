import { transformations } from '@/lib/data/transformations';
import { SectionWrapper } from '@/components/ui/section-wrapper';
import { SectionHeading } from '@/components/ui/section-heading';
import { TestimonialCard } from '@/components/cards/testimonial-card';
import { ScrollReveal } from '@/components/ui/scroll-reveal';
import Button from '@/components/ui/button';

export function TestimonialHighlight() {
  const featured = transformations[0];

  return (
    <SectionWrapper id="transformations">
      <SectionHeading title="Real People. Real Results." />

      <div className="mx-auto mt-12 max-w-4xl">
        <ScrollReveal>
          <TestimonialCard transformation={featured} />
        </ScrollReveal>
      </div>

      <div className="mt-12 text-center">
        <Button href="/transformations" variant="ghost" size="md">
          See All Transformations
        </Button>
      </div>
    </SectionWrapper>
  );
}
