import Link from 'next/link';
import type { Program } from '@/lib/data/programs';
import { cn } from '@/lib/utils';
import Image from 'next/image';

interface ProgramCardProps {
  program: Program;
  className?: string;
}

export function ProgramCard({ program, className }: ProgramCardProps) {
  return (
    <Link
      href={`/programs#${program.slug}`}
      className={cn(
        'group block overflow-hidden rounded-lg border border-border bg-surface',
        'transition-colors duration-200 hover:border-accent',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-transparent',
        className,
      )}
    >


        <div className="relative aspect-video overflow-hidden">
          <Image
            src={program.image}
            alt={program.name}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>

      {/*<div className="aspect-video bg-surface-alt" aria-hidden="true" />*/}

      {/* ── Card body ─────────────────────────────────────────────────────── */}
      <div className="p-5">
        <p className="text-xs uppercase tracking-widest text-accent">
          {program.level}
        </p>
        <h3 className="mt-1 font-heading text-xl font-bold uppercase text-primary">
          {program.name}
        </h3>
        <p className="mt-2 text-sm text-secondary">{program.duration}</p>
      </div>
    </Link>
  );
}
