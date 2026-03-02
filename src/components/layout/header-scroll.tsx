'use client';

import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import type { NavItem } from '@/lib/data/navigation';
import { MobileNav } from './mobile-nav';

interface HeaderScrollProps {
  navigation: NavItem[];
}

export function HeaderScroll({ navigation }: HeaderScrollProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  // Guard against rendering the portal before the DOM is available (SSR).
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();

  useEffect(() => setMounted(true), []);

  // ── Scroll detection ────────────────────────────────────────────────────
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    handleScroll(); // Sync on mount in case the page loaded pre-scrolled
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // ── Close drawer when the viewport reaches the desktop breakpoint ───────
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setMobileNavOpen(false);
    };
    window.addEventListener('resize', handleResize, { passive: true });
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // ── Close drawer on route change (backup for programmatic navigation) ───
  useEffect(() => {
    setMobileNavOpen(false);
  }, [pathname]);

  return (
    <>
      <header
        className={cn(
          'fixed inset-x-0 top-0 z-50 transition-colors duration-300',
          scrolled
            ? 'bg-(--bg-primary)/95 backdrop-blur-sm'
            : 'bg-transparent',
        )}
      >
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 md:h-20 md:px-8">
          {/* ── Text logo ─────────────────────────────────────────────── */}
          <Link
            href="/"
            className="font-heading text-2xl font-bold uppercase tracking-widest text-primary"
          >
            FORGE
          </Link>

          {/* ── Desktop nav ───────────────────────────────────────────── */}
          <nav
            aria-label="Main navigation"
            className="hidden md:flex md:items-center md:gap-8"
          >
            {navigation.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    'text-sm font-medium uppercase tracking-wide transition-colors duration-150',
                    isActive
                      ? 'text-accent'
                      : 'text-secondary hover:text-primary',
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* ── Mobile hamburger ──────────────────────────────────────── */}
          {/*
           * The three spans animate into an X when mobileNavOpen is true:
           *   Line 1 → translate down 6px then rotate 45°
           *   Line 2 → fade + scale out
           *   Line 3 → translate up 6px then rotate -45°
           * The 6px offset is the sum of the line height (1px) and the gap (5px)
           * so all three lines converge on the same centre point.
           */}
          <button
            type="button"
            aria-label={
              mobileNavOpen ? 'Close navigation menu' : 'Open navigation menu'
            }
            aria-expanded={mobileNavOpen}
            aria-controls="mobile-nav-drawer"
            className="flex h-10 w-10 items-center justify-center text-primary md:hidden"
            onClick={() => setMobileNavOpen((prev) => !prev)}
          >
            {mobileNavOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/*
       * MobileNav is portalled to document.body so its fixed backdrop and
       * drawer are not trapped inside the header's z-index stacking context.
       */}
      {mounted &&
        createPortal(
          <MobileNav
            navigation={navigation}
            isOpen={mobileNavOpen}
            onClose={() => setMobileNavOpen(false)}
          />,
          document.body,
        )}
    </>
  );
}
