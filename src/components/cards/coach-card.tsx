import Image from 'next/image';
import type { Coach } from '@/lib/data/coaches';

interface CoachCardProps {
  coach: Coach;
}

export function CoachCard({ coach }: CoachCardProps) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-lg border border-border bg-surface">
      {/* ── Photo ──────────────────────────────────────────────────────────── */}
      <div className="relative aspect-square overflow-hidden">
        <Image
          src={coach.image}
          alt={coach.name}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover object-top grayscale transition-all duration-500 group-hover:grayscale-0"
        />
      </div>

      {/* ── Body ───────────────────────────────────────────────────────────── */}
      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-heading text-xl font-bold uppercase text-primary">
          {coach.name}
        </h3>
        <p className="mt-1 text-sm uppercase tracking-widest text-accent">
          {coach.role}
        </p>
        <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-secondary">
          {coach.bio}
        </p>

        {/* Specialty pills */}
        <div className="mt-4 flex flex-wrap gap-2">
          {coach.specialties.map((specialty) => (
            <span
              key={specialty}
              className="rounded-full bg-surface-alt px-2 py-1 text-xs text-secondary"
            >
              {specialty}
            </span>
          ))}
        </div>

        {/* Certifications */}
        <p className="mt-3 text-xs text-secondary">
          {coach.certifications.join(' · ')}
        </p>
      </div>
    </article>
  );
}
