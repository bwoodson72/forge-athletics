import Button from '@/components/ui/button';
import Image from 'next/image';

/**
 * Full-viewport hero section.
 *
 * The negative top margin cancels <main>'s `pt-16 / pt-20` offset so the
 * hero sits flush behind the transparent fixed header, giving a true
 * full-screen appearance.
 */
export function Hero() {
  return (
    <section className="relative -mt-16 min-h-screen overflow-hidden md:-mt-20">




         <Image
          src="/images/hero.avif"
           alt="forge athletics gym"
            fill
            priority
           sizes="100vw"
          className="object-cover object-center"
          />

      {/*<div*/}
      {/*  className="absolute inset-0 bg-gradient-to-b from-(--bg-surface) to-(--bg-primary)"*/}
      {/*  aria-hidden="true"*/}
      {/*/>*/}

      {/* Dark overlay — keeps text legible over the real photo */}
      <div className="absolute inset-0 bg-black/60" aria-hidden="true" />

      {/* ─── Main content ───────────────────────────────────────────────────── */}
      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-4 text-center">
        <h1 className="font-heading text-6xl font-bold uppercase tracking-tight text-primary md:text-7xl lg:text-8xl">
          <span className="block">FORGE</span>
          <span className="block">ATHLETICS</span>
        </h1>

        <p className="mt-4 text-xl text-secondary md:text-2xl">
          Where Strength Is Earned
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Button href="/contact" variant="primary" size="lg">
            Start Your Free Trial
          </Button>
          <Button href="/programs" variant="ghost" size="lg">
            View Programs
          </Button>
        </div>
      </div>

      {/* ─── Scroll indicator ───────────────────────────────────────────────── */}
      {/*
       * Pure CSS bounce animation via Tailwind's built-in `animate-bounce`.
       * The prefers-reduced-motion rule in globals.css collapses its
       * animation-duration to 0.01ms, effectively disabling it.
       */}
      <div
        className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-1 animate-bounce"
        aria-hidden="true"
      >
        {/* Two stacked chevrons for a layered, receding effect */}
        <div className="h-2.5 w-2.5 rotate-45 border-b-2 border-r-2 border-white/60" />
        <div className="h-2.5 w-2.5 rotate-45 border-b-2 border-r-2 border-white/30" />
      </div>
    </section>
  );
}
