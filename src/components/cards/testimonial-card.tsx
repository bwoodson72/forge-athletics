import Image from 'next/image';
import type { Transformation } from '@/lib/data/transformations';
import { cn } from '@/lib/utils';

interface TestimonialCardProps {
  transformation: Transformation;
  /**
   * featured — switches to the full-page alternating layout:
   *   • balanced two-column grid instead of fixed 220px image column
   *   • larger quote text (text-xl md:text-2xl)
   *   • bolder result stat
   */
  featured?: boolean;
  /**
   * flipped — mirrors the column order so the image appears on the left
   * and the quote on the right. Only meaningful when featured={true}.
   */
  flipped?: boolean;
}

export function TestimonialCard({
  transformation,
  featured = false,
  flipped = false,
}: TestimonialCardProps) {
  return (
    <figure
      className={cn(
        'grid grid-cols-1 items-center gap-8',
        featured ? 'lg:grid-cols-2 lg:gap-16' : 'lg:grid-cols-[220px_1fr] lg:gap-12',
      )}
    >
      {/* ── Photo ─────────────────────────────────────────────────────────── */}
      <div
        className={cn(
          'relative overflow-hidden rounded-lg',
          featured
            ? cn('aspect-square w-full', flipped && 'lg:order-2')
            : 'mx-auto aspect-square w-32 rounded-full lg:mx-0 lg:w-full lg:rounded-lg',
        )}
      >
        <Image
          src={transformation.image}
          alt={transformation.name}
          fill
          sizes={featured ? '(max-width: 1024px) 100vw, 50vw' : '(max-width: 1024px) 128px, 220px'}
          className="object-cover object-top"
        />
      </div>

      {/* ── Quote ─────────────────────────────────────────────────────────── */}
      <div
        className={cn(
          'relative',
          featured && flipped && 'lg:order-1',
        )}
      >
        {/* Decorative opening quotation mark */}
        <span
          className="absolute -left-1 -top-6 select-none font-heading text-8xl leading-none text-accent/30"
          aria-hidden="true"
        >
          &ldquo;
        </span>

        <blockquote className="relative pt-6">
          <p
            className={cn(
              'italic text-primary',
              featured ? 'text-xl md:text-2xl' : 'text-lg md:text-xl',
            )}
          >
            {transformation.quote}
          </p>
        </blockquote>

        <figcaption className="mt-6 space-y-1">
          <div className="font-bold text-primary">{transformation.name}</div>
          <div
            className={cn(
              'text-accent',
              featured && 'text-lg font-bold',
            )}
          >
            {transformation.result}
          </div>
          <div className="text-sm text-secondary">
            {transformation.program}&nbsp;&middot;&nbsp;{transformation.duration}
          </div>
        </figcaption>
      </div>
    </figure>
  );
}
