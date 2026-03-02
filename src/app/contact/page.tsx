import type { Metadata } from 'next';
import { SectionWrapper } from '@/components/ui/section-wrapper';
import { PageHeader } from '@/components/ui/page-header';
import { ContactForm } from '@/components/contact-form';
import { StructuredData, localBusinessSchema } from '@/components/structured-data';

export const metadata: Metadata = {
  title: 'Contact Us',
  description:
    'Contact FORGE Athletics to claim your free trial, ask about memberships, or book a 1-on-1 coaching session.',
  openGraph: {
    title: 'Contact Us | FORGE Athletics',
    description:
      'Contact FORGE Athletics to claim your free trial, ask about memberships, or book a 1-on-1 coaching session.',
    url: '/contact',
    images: ['/og-image.jpg'],
    type: 'website',
    siteName: 'FORGE Athletics',
  },
};

export default function ContactPage() {
  return (
    <>
      <StructuredData data={localBusinessSchema} />
      <PageHeader title="Get In Touch" subtitle="Your first week is on us." />

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
                <p className="text-secondary">400 N Travis Street, Suite 101</p>
                <p className="text-secondary">Granbury, TX 76048</p>
              </div>

              {/* Phone */}
              <div className="mt-5 space-y-1">
                <p className="text-xs font-semibold uppercase tracking-widest text-accent">
                  Phone
                </p>
                <a
                  href="tel:+18175550174"
                  className="text-secondary transition hover:text-primary"
                >
                  (817) 555-0174
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

          </div>
        </div>
      </SectionWrapper>
    </>
  );
}
