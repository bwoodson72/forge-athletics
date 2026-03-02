import type { Metadata } from 'next';
import { heading, body } from '@/lib/fonts';
import { SiteHeader } from '@/components/layout/site-header';
import { SiteFooter } from '@/components/layout/site-footer';
import { LenisProvider } from '@/providers/lenis-provider';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://forge-athletics.vercel.app'),
  title: {
    template: '%s | FORGE Athletics',
    default: 'FORGE Athletics | Strength & Conditioning Gym in Granbury, TX',
  },
  description:
    'FORGE Athletics is a strength and conditioning gym in Granbury, TX. Barbell Club, kettlebell, steel mace, open gym, fundamentals, and 1-on-1 coaching. Your first week is free.',
  robots: { index: true, follow: true },
  openGraph: {
    siteName: 'FORGE Athletics',
    type: 'website',
    locale: 'en_US',
    images: [{ url: '/og-image.avif', width: 1200, height: 630, alt: 'FORGE Athletics' }],
  },
  twitter: {
    card: 'summary_large_image',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${heading.variable} ${body.variable}`}>
      <body>
        <LenisProvider>
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[300] focus:rounded-lg focus:bg-accent focus:px-4 focus:py-2 focus:text-white focus:outline-none"
          >
            Skip to main content
          </a>
          <SiteHeader />
          <main id="main-content" className="pt-16 md:pt-20">{children}</main>
          <SiteFooter />
        </LenisProvider>
      </body>
    </html>
  );
}
