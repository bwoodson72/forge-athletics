'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { AnimatePresence, motion } from 'motion/react';
import { cn } from '@/lib/utils';
import { useReducedMotion } from '@/hooks/use-reduced-motion';
import type { NavItem } from '@/lib/data/navigation';

interface MobileNavProps {
  navigation: NavItem[];
  isOpen: boolean;
  onClose: () => void;
}

export function MobileNav({ navigation, isOpen, onClose }: MobileNavProps) {
  const pathname = usePathname();
  const reducedMotion = useReducedMotion();
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const drawerRef = useRef<HTMLDivElement>(null);

  // ── Body scroll lock ────────────────────────────────────────────────────
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // ── Focus trap + Escape key ─────────────────────────────────────────────
  useEffect(() => {
    if (!isOpen) return;

    // Move focus into the drawer immediately
    closeButtonRef.current?.focus();

    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape') {
        onClose();
        return;
      }

      if (e.key === 'Tab') {
        const drawer = drawerRef.current;
        if (!drawer) return;

        const focusable = Array.from(
          drawer.querySelectorAll<HTMLElement>(
            'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])',
          ),
        ).filter((el) => !el.hasAttribute('disabled'));

        const first = focusable[0];
        const last = focusable[focusable.length - 1];

        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last?.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first?.focus();
        }
      }
    }

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  const animDuration = reducedMotion ? 0 : undefined;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* ── Backdrop ───────────────────────────────────────────────── */}
          <motion.div
            key="mobile-nav-backdrop"
            className="fixed inset-0 z-[100] bg-black/80"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: animDuration ?? 0.2 }}
            onClick={onClose}
            aria-hidden="true"
          />

          {/* ── Drawer ─────────────────────────────────────────────────── */}
          <motion.div
            key="mobile-nav-drawer"
            id="mobile-nav-drawer"
            ref={drawerRef}
            role="dialog"
            aria-modal="true"
            aria-label="Navigation menu"
            className="fixed inset-y-0 right-0 z-[101] flex w-[280px] max-w-[80vw] flex-col bg-surface shadow-2xl"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={
              reducedMotion ? { duration: 0 } : { type: 'tween', duration: 0.3 }
            }
          >
            {/* ── Drawer header ────────────────────────────────────────── */}
            <div className="flex h-16 shrink-0 items-center justify-between border-b border-border px-6">
              <span className="font-heading text-xl font-bold uppercase tracking-widest text-primary">
                FORGE
              </span>

              <button
                ref={closeButtonRef}
                type="button"
                aria-label="Close navigation menu"
                className="flex h-9 w-9 items-center justify-center rounded-lg text-secondary transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                onClick={onClose}
              >
                <svg
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M5 5L15 15M15 5L5 15"
                    stroke="currentColor"
                    strokeWidth="1.75"
                    strokeLinecap="round"
                  />
                </svg>
              </button>
            </div>

            {/* ── Nav links ────────────────────────────────────────────── */}
            <nav
              aria-label="Mobile navigation"
              className="flex-1 overflow-y-auto px-6 pb-8"
            >
              {navigation.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={onClose}
                    className={cn(
                      'block border-b border-border py-4',
                      'font-heading text-lg font-semibold uppercase tracking-wide',
                      'transition-colors duration-150',
                      isActive
                        ? 'text-accent'
                        : 'text-primary hover:text-accent',
                    )}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
