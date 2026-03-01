import { SectionWrapper } from '@/components/ui/section-wrapper';
import { ScrollReveal } from '@/components/ui/scroll-reveal';
import { StatCounter } from '@/components/ui/stat-counter';

const stats = [
  { value: '8+', label: 'Years Strong' },
  { value: '500+', label: 'Members Trained' },
  { value: '12', label: 'Certified Coaches' },
  { value: '6', label: 'Training Programs' },
] as const;

export function ValueProps() {
  return (
    <SectionWrapper id="value-props" className="bg-surface">
      <dl className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map(({ value, label }, i) => (
          <ScrollReveal key={label} className="text-center" delay={i * 0.1}>
            <dt className="font-heading text-4xl font-bold text-accent md:text-5xl">
              <StatCounter value={value} />
            </dt>
            <dd className="mt-2 text-sm uppercase tracking-widest text-secondary">
              {label}
            </dd>
          </ScrollReveal>
        ))}
      </dl>
    </SectionWrapper>
  );
}
