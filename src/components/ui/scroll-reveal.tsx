'use client';

import { useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { useReducedMotion } from '@/hooks/use-reduced-motion';

interface ScrollRevealProps {
  children: React.ReactNode;
  /** Forwarded to the wrapper div so the component can act as a grid/flex item. */
  className?: string;
  /** Seconds to wait before the entrance animation begins. Default 0. */
  delay?: number;
}

/**
 * Wraps children in a motion.div that fades and slides up (y: 20 → 0) once
 * 20% of the element enters the viewport.  The animation fires once and does
 * not repeat on scroll-back.
 *
 * When the user prefers reduced motion the wrapper becomes a plain div and
 * children are rendered immediately at full opacity with no transform.
 */
export function ScrollReveal({
  children,
  className,
  delay = 0,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const reducedMotion = useReducedMotion();

  if (reducedMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.4, ease: 'easeOut', delay }}
    >
      {children}
    </motion.div>
  );
}
