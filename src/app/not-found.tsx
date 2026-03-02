import Button from '@/components/ui/button';

export default function NotFound() {
  return (
    <div className="flex min-h-[calc(100vh-5rem)] flex-col items-center justify-center px-4 text-center">
      <p
        className="font-heading text-8xl font-bold text-accent md:text-9xl"
        aria-hidden="true"
      >
        404
      </p>

      <h1 className="mt-4 font-heading text-3xl font-bold uppercase tracking-wide text-primary md:text-4xl">
        Page Not Found
      </h1>

      <p className="mt-4 max-w-sm text-lg text-secondary">
        This page doesn&apos;t exist. Maybe it&apos;s rest day.
      </p>

      <div className="mt-8">
        <Button href="/" variant="primary" size="md">
          Back to Home
        </Button>
      </div>
    </div>
  );
}
