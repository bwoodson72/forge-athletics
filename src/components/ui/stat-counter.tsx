'use client';

import { useRef, useState, useEffect } from 'react';
import { useInView } from 'motion/react';
import { useReducedMotion } from '@/hooks/use-reduced-motion';

interface StatCounterProps {
  /**
   * The target value as a string, e.g. "500+" or "12".
   * The leading numeric portion is animated; everything after is a static suffix.
   */
  value: string;
  /** Total animation duration in milliseconds. Default 2000. */
  duration?: number;
}

/**
 * Counts from 0 to the numeric portion of `value` using a cubic ease-out
 * curve once the element enters the viewport.  Appends any non-numeric suffix
 * (e.g. "+") to the animated number.
 *
 * When the user prefers reduced motion the final value is displayed
 * immediately with no animation.
 */
export function StatCounter({ value, duration = 2000 }: StatCounterProps) {
  // Split "500+" → { numeric: 500, suffix: "+" }
  const match = value.match(/^(\d+)(.*)$/);
  const numericValue = match ? parseInt(match[1], 10) : 0;
  const suffix = match ? match[2] : '';

  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const reducedMotion = useReducedMotion();

  const [count, setCount] = useState(0);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!isInView || reducedMotion || hasAnimated.current) return;
    hasAnimated.current = true;

    const startTime = performance.now();
    let rafId: number;

    const tick = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Cubic ease-out: fast start, gentle finish
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * numericValue));

      if (progress < 1) {
        rafId = requestAnimationFrame(tick);
      }
    };

    rafId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafId);
  }, [isInView, reducedMotion, numericValue, duration]);

  const displayValue = reducedMotion ? numericValue : count;

  return (
    <span ref={ref}>
      {displayValue}
      {suffix}
    </span>
  );
}
