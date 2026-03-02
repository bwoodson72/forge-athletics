import Image from 'next/image';
import { SectionHeading } from '@/components/ui/section-heading';

interface PageHeaderProps {
  title: string;
  subtitle?: string;
}

export function PageHeader({ title, subtitle }: PageHeaderProps) {
  return (
    <section className="relative flex min-h-[40vh] items-center justify-center overflow-hidden">
      {/* Background image */}
      <Image
        src="/images/section-hero.avif"
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/70" />

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 md:py-24 lg:px-8">
        <SectionHeading title={title} subtitle={subtitle} as="h1" />
      </div>
    </section>
  );
}
