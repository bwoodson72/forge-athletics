import { navigation } from '@/lib/data/navigation';
import { HeaderScroll } from './header-scroll';

/**
 * Server component wrapper — reads navigation data on the server and passes
 * it to the HeaderScroll client component, which owns the scroll state and
 * active-link detection (via usePathname).
 */
export function SiteHeader() {
  return <HeaderScroll navigation={navigation} />;
}
