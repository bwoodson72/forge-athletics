import Link from 'next/link';
import { navigation } from '@/lib/data/navigation';

const GYM_ADDRESS = '400 N Travis Street, Suite 101';
const GYM_CITY = 'Granbury, TX 76048';
const GYM_PHONE = '(817) 555-0174';

const hours = [
  { days: 'Mon – Fri', time: '5:00 AM – 9:00 PM' },
  { days: 'Saturday', time: '7:00 AM – 5:00 PM' },
  { days: 'Sunday', time: '8:00 AM – 2:00 PM' },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="mx-auto max-w-7xl px-4 py-16 md:px-8">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
          {/* Column 1 — Brand */}
          <div>
            <p className="font-heading text-2xl font-bold uppercase tracking-widest text-primary">
              FORGE
            </p>
            <p className="mt-3 text-sm italic text-secondary">
              Iron sharpens iron.
            </p>
          </div>

          {/* Column 2 — Quick links */}
          <div>
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-widest text-primary">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {navigation.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-secondary transition-colors duration-150 hover:text-primary"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 — Location & hours */}
          <div>
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-widest text-primary">
              Visit Us
            </h3>
            <address className="not-italic">
              <p className="text-sm text-secondary">{GYM_ADDRESS}</p>
              <p className="text-sm text-secondary">{GYM_CITY}</p>
              <a
                href={`tel:${GYM_PHONE.replace(/\D/g, '')}`}
                className="mt-2 block text-sm text-secondary transition-colors duration-150 hover:text-primary"
              >
                {GYM_PHONE}
              </a>
            </address>

            <h3 className="mb-3 mt-6 text-xs font-semibold uppercase tracking-widest text-primary">
              Hours
            </h3>
            <ul className="space-y-1">
              {hours.map(({ days, time }) => (
                <li key={days} className="flex justify-between gap-4 text-sm text-secondary">
                  <span>{days}</span>
                  <span>{time}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 border-t border-border pt-6 text-center text-xs text-secondary">
          © 2026 FORGE Athletics. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
