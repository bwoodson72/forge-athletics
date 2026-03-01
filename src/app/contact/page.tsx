import type { Metadata } from 'next';
import { SectionWrapper } from '@/components/ui/section-wrapper';
import { SectionHeading } from '@/components/ui/section-heading';
import { ContactForm } from '@/components/contact-form';

export const metadata: Metadata = {
  title: 'Get In Touch | FORGE Athletics',
  description:
    'Contact FORGE Athletics to claim your free trial, ask about memberships, or book a 1-on-1 coaching session.',
};

export default function ContactPage() {
  return (
    <>
      {/* ── Page header ───────────────────────────────────────────────────── */}
      <section className="flex min-h-[40vh] items-center justify-center bg-surface">
        <div className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 md:py-24 lg:px-8">
          <SectionHeading
            title="Get In Touch"
            subtitle="Your first week is on us."
          />
        </div>
      </section>

      {/* ── Two-column layout ─────────────────────────────────────────────── */}
      <SectionWrapper>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_420px] lg:gap-16">
          {/* ── Contact form ──────────────────────────────────────────────── */}
          <div>
            <ContactForm />
          </div>

          {/* ── Gym info card ─────────────────────────────────────────────── */}
          <div className="flex flex-col gap-8">
            <div className="rounded-lg bg-surface p-8">
              <h2 className="font-heading text-lg font-bold uppercase text-primary">
                Find Us
              </h2>

              {/* Address */}
              <div className="mt-4 space-y-1">
                <p className="text-xs font-semibold uppercase tracking-widest text-accent">
                  Address
                </p>
                <p className="text-secondary">1847 Fall Creek Hwy</p>
                <p className="text-secondary">Granbury, TX 76049</p>
              </div>

              {/* Phone */}
              <div className="mt-5 space-y-1">
                <p className="text-xs font-semibold uppercase tracking-widest text-accent">
                  Phone
                </p>
                <a
                  href="tel:+18175550142"
                  className="text-secondary transition hover:text-primary"
                >
                  (817) 555-0142
                </a>
              </div>

              {/* Hours */}
              <div className="mt-5 space-y-1">
                <p className="text-xs font-semibold uppercase tracking-widest text-accent">
                  Hours
                </p>
                <div className="space-y-1 text-sm text-secondary">
                  <div className="flex justify-between gap-4">
                    <span>Mon – Fri</span>
                    <span>5:00 AM – 9:00 PM</span>
                  </div>
                  <div className="flex justify-between gap-4">
                    <span>Saturday</span>
                    <span>7:00 AM – 5:00 PM</span>
                  </div>
                  <div className="flex justify-between gap-4">
                    <span>Sunday</span>
                    <span>8:00 AM – 2:00 PM</span>
                  </div>
                </div>
                <p className="pt-1 text-xs text-secondary">
                  Keycard access 6 AM – 9 PM daily for members.
                </p>
              </div>
            </div>

            {/* ── Map placeholder ─────────────────────────────────────────── */}
            {/*
             * TODO: replace this div with a Google Maps iframe embed, e.g.:
             *   <iframe
             *     src="https://www.google.com/maps/embed?pb=..."
             *     width="100%"
             *     height="100%"
             *     style={{ border: 0 }}
             *     allowFullScreen
             *     loading="lazy"
             *     referrerPolicy="no-referrer-when-downgrade"
             *     title="FORGE Athletics location"
             *   />
             * Wrap in <div className="aspect-video overflow-hidden rounded-lg">
             */}
            <div
              className="aspect-video rounded-lg bg-surface-alt"
              aria-label="Map placeholder — Google Maps embed goes here"
              role="img"
            />
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}
