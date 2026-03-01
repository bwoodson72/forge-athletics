/**
 * Server component — renders a JSON-LD <script> tag for structured data.
 * Place this anywhere inside a page; Next.js hoists <script> tags into <head>.
 * The data prop accepts any valid Schema.org object.
 */
export function StructuredData({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

/**
 * Shared LocalBusiness schema for FORGE Athletics.
 * Used on the home page and contact page.
 */
export const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'HealthClub',
  name: 'FORGE Athletics',
  description:
    'Strength and conditioning gym in Granbury, TX offering barbell, kettlebell, steel mace, fundamentals, and 1-on-1 coaching programs.',
  url: 'https://forge-athletics.vercel.app',
  telephone: '+18175550142',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '1847 Fall Creek Hwy',
    addressLocality: 'Granbury',
    addressRegion: 'TX',
    postalCode: '76049',
    addressCountry: 'US',
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '05:00',
      closes: '21:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Saturday'],
      opens: '07:00',
      closes: '17:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Sunday'],
      opens: '08:00',
      closes: '14:00',
    },
  ],
  sameAs: [],
} as const;
