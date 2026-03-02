'use client';

import Button from '@/components/ui/button';

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function Error({ reset }: ErrorProps) {
  return (
    <div className="flex min-h-[calc(100vh-5rem)] flex-col items-center justify-center px-4 text-center">
      <p
        className="font-heading text-8xl font-bold text-accent md:text-9xl"
        aria-hidden="true"
      >
        !
      </p>

      <h1 className="mt-4 font-heading text-3xl font-bold uppercase tracking-wide text-primary md:text-4xl">
        Something Went Wrong
      </h1>

      <p className="mt-4 max-w-sm text-lg text-secondary">
        Even the best lifters miss a rep sometimes.
      </p>

      <div className="mt-8 flex flex-wrap justify-center gap-4">
        <Button variant="primary" size="md" onClick={reset}>
          Try Again
        </Button>
        <Button href="/" variant="ghost" size="md">
          Go Home
        </Button>
      </div>
    </div>
  );
}
