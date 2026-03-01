import { SectionWrapper } from '@/components/ui/section-wrapper';
import { SectionHeading } from '@/components/ui/section-heading';
import { ScrollReveal } from '@/components/ui/scroll-reveal';
import Button from '@/components/ui/button';

export function AboutTeaser() {
  return (
    <SectionWrapper id="about">
      <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
        {/* ─── Left: copy ─────────────────────────────────────────────────── */}
        <ScrollReveal delay={0}>
          <div>
            <SectionHeading align="left" title="No Gimmicks. Just Iron." />

            <p className="mt-6 text-lg leading-relaxed text-secondary">
              FORGE was built on a simple idea: show up, put in the work, leave
              stronger. No mirrors on every wall. No playlist committees. Just
              chalk, iron, and people who earn their strength.
            </p>

            <p className="mt-4 text-lg leading-relaxed text-secondary">
              Every program here is coached, periodized, and built to make you
              measurably better over time — whether you picked up a barbell last
              week or have been training for a decade.
            </p>

            <div className="mt-8">
              <Button href="/programs" variant="ghost" size="md">
                See Our Programs
              </Button>
            </div>
          </div>
        </ScrollReveal>

        {/* ─── Right: photo placeholder ────────────────────────────────────── */}
        <ScrollReveal delay={0.2}>
          <div
            className="aspect-video w-full rounded-lg bg-surface-alt"
            aria-hidden="true"
          >
            {/*
             * TODO: replace with:
             * <Image
             *   src="/images/about-gym.avif"
             *   alt="Inside the FORGE Athletics training floor"
             *   fill
             *   sizes="(max-width: 1024px) 100vw, 50vw"
             *   className="rounded-lg object-cover"
             * />
             * Remember to add `relative overflow-hidden` to the parent div.
             */}
          </div>
        </ScrollReveal>
      </div>
    </SectionWrapper>
  );
}
