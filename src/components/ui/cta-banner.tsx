import { SectionWrapper } from './section-wrapper';
import Button from './button';

interface CTABannerProps {
  heading: string;
  subtext?: string;
  buttonText: string;
  buttonHref: string;
}

export function CTABanner({
  heading,
  subtext,
  buttonText,
  buttonHref,
}: CTABannerProps) {
  return (
    // bg-surface-alt + border-l-4 border-accent span the full section width;
    // SectionWrapper's inner container keeps the text content centred.
    <SectionWrapper className="border-l-4 border-accent bg-surface-alt">
      <div className="text-center">
        <h2 className="font-heading text-3xl font-bold uppercase tracking-wide text-primary md:text-4xl">
          {heading}
        </h2>
        {subtext && (
          <p className="mx-auto mt-4 max-w-xl text-lg text-secondary">
            {subtext}
          </p>
        )}
        <div className="mt-8">
          <Button href={buttonHref} variant="primary" size="lg">
            {buttonText}
          </Button>
        </div>
      </div>
    </SectionWrapper>
  );
}
