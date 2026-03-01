import { programs } from '@/lib/data/programs';
import { SectionWrapper } from '@/components/ui/section-wrapper';
import { SectionHeading } from '@/components/ui/section-heading';
import { ProgramCard } from '@/components/cards/program-card';
import { ScrollReveal } from '@/components/ui/scroll-reveal';
import Button from '@/components/ui/button';

export function ProgramsPreview() {
  // Slice to 6 so the grid pattern stays consistent even if more programs are
  // added to the data file later.
  const featured = programs.slice(0, 6);

  return (
    <SectionWrapper id="programs" className="bg-surface">
      <SectionHeading
        title="Our Programs"
        subtitle="Find your path to strength"
      />

      <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {featured.map((program, i) => (
          <ScrollReveal key={program.slug} delay={i * 0.1}>
            <ProgramCard program={program} className="h-full" />
          </ScrollReveal>
        ))}
      </div>

      <div className="mt-12 text-center">
        <Button href="/programs" variant="ghost" size="md">
          View All Programs
        </Button>
      </div>
    </SectionWrapper>
  );
}
