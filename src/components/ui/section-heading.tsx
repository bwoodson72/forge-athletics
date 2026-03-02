import { cn } from '@/lib/utils';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  as?: 'h1' | 'h2';
}

export function SectionHeading({
  title,
  subtitle,
  align = 'center',
  as: Tag = 'h2',
}: SectionHeadingProps) {
  return (
    <div className={align === 'center' ? 'text-center' : 'text-left'}>
      <Tag className="font-heading text-3xl font-bold uppercase tracking-wide text-primary md:text-4xl lg:text-5xl">
        {title}
      </Tag>
      {subtitle && (
        <p
          className={cn(
            'mt-4 text-lg text-secondary',
            align === 'center' ? 'mx-auto max-w-2xl' : 'max-w-2xl',
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
