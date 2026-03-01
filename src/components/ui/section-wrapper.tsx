import { cn } from '@/lib/utils';

interface SectionWrapperProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  /** When true, renders children without a max-width container. */
  fullBleed?: boolean;
}

export function SectionWrapper({
  children,
  className,
  id,
  fullBleed = false,
}: SectionWrapperProps) {
  return (
    <section id={id} className={cn('py-16 md:py-24', className)}>
      {fullBleed ? (
        children
      ) : (
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {children}
        </div>
      )}
    </section>
  );
}
