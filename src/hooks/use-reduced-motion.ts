'use client';

import { useState, useEffect } from 'react';

/**
 * Returns true if the user has requested reduced motion via the OS setting.
 *
 * SSR-safe: defaults to false on the server so the full animation markup is
 * server-rendered. The real value is set in useEffect once the client mounts.
 * This avoids a hydration mismatch while still respecting the preference on
 * every subsequent render and when the system setting changes at runtime.
 */
export function useReducedMotion(): boolean {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mql = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mql.matches);

    const handler = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    mql.addEventListener('change', handler);
    return () => mql.removeEventListener('change', handler);
  }, []);

  return prefersReducedMotion;
}
