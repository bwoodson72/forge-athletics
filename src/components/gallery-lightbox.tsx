'use client';

import { useEffect, useRef } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { useReducedMotion } from '@/hooks/use-reduced-motion';
import type { GalleryImage } from '@/lib/data/gallery';

interface GalleryLightboxProps {
  images: GalleryImage[];
  currentIndex: number;
  isOpen: boolean;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}

export function GalleryLightbox({
  images,
  currentIndex,
  isOpen,
  onClose,
  onNext,
  onPrev,
}: GalleryLightboxProps) {
  const reducedMotion = useReducedMotion();
  const backdropRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const touchStartX = useRef<number | null>(null);

  const image = images[currentIndex];
  const isFirst = currentIndex === 0;
  const isLast = currentIndex === images.length - 1;

  // ── Body scroll lock ────────────────────────────────────────────────────
  useEffect(() => {
    if (isOpen) document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // ── Keyboard: arrows, Escape, Tab focus trap ────────────────────────────
  useEffect(() => {
    if (!isOpen) return;

    closeButtonRef.current?.focus();

    function handleKeyDown(e: KeyboardEvent) {
      switch (e.key) {
        case 'Escape':
          onClose();
          break;
        case 'ArrowLeft':
          onPrev();
          break;
        case 'ArrowRight':
          onNext();
          break;
        case 'Tab': {
          const container = backdropRef.current;
          if (!container) break;

          const focusable = Array.from(
            container.querySelectorAll<HTMLElement>(
              'button, [href], [tabindex]:not([tabindex="-1"])',
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
          break;
        }
      }
    }

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose, onNext, onPrev]);

  // ── Touch swipe ─────────────────────────────────────────────────────────
  function handleTouchStart(e: React.TouchEvent) {
    touchStartX.current = e.touches[0].clientX;
  }

  function handleTouchEnd(e: React.TouchEvent) {
    if (touchStartX.current === null) return;
    const delta = e.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(delta) > 50) {
      // Swipe left → next; swipe right → prev
      if (delta < 0) onNext();
      else onPrev();
    }
    touchStartX.current = null;
  }

  return (
    <AnimatePresence>
      {isOpen && image && (
        <motion.div
          key="lightbox-backdrop"
          ref={backdropRef}
          role="dialog"
          aria-modal="true"
          aria-label={`Image ${currentIndex + 1} of ${images.length}: ${image.alt}`}
          className="fixed inset-0 z-[200] flex items-center justify-center bg-black/90"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: reducedMotion ? 0 : 0.25 }}
          onClick={onClose}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {/* ── Close button ─────────────────────────────────────────────── */}
          <button
            ref={closeButtonRef}
            type="button"
            aria-label="Close lightbox"
            className="absolute right-4 top-4 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-black/60 text-white transition-colors hover:bg-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            onClick={(e) => {
              e.stopPropagation();
              onClose();
            }}
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

          {/* ── Prev arrow ───────────────────────────────────────────────── */}
          {!isFirst && (
            <button
              type="button"
              aria-label="Previous image"
              className="absolute left-4 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-black/60 text-white transition-colors hover:bg-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
              onClick={(e) => {
                e.stopPropagation();
                onPrev();
              }}
            >
              <svg
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M13 4L6 10L13 16"
                  stroke="currentColor"
                  strokeWidth="1.75"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          )}

          {/* ── Image ────────────────────────────────────────────────────── */}
          {/*
           * TODO: replace the placeholder div below with:
           *
           *   <div
           *     className="relative overflow-hidden rounded-lg"
           *     style={{ width: 'min(90vw, 900px)', height: 'min(80vh, 675px)' }}
           *     onClick={(e) => e.stopPropagation()}
           *   >
           *     <Image
           *       src={image.src}
           *       alt={image.alt}
           *       fill
           *       sizes="min(90vw, 900px)"
           *       className="object-contain"
           *       priority
           *     />
           *   </div>
           *
           * Use `object-contain` (not cover) so portrait images don't crop.
           */}
          <div
            className="relative flex overflow-hidden rounded-lg bg-surface-alt"
            style={{ width: 'min(90vw, 900px)', height: 'min(80vh, 675px)' }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex h-full w-full items-center justify-center p-8">
              <p className="text-center text-sm leading-relaxed text-secondary">
                {image.alt}
              </p>
            </div>
          </div>

          {/* ── Next arrow ───────────────────────────────────────────────── */}
          {!isLast && (
            <button
              type="button"
              aria-label="Next image"
              className="absolute right-4 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-black/60 text-white transition-colors hover:bg-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
              onClick={(e) => {
                e.stopPropagation();
                onNext();
              }}
            >
              <svg
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M7 4L14 10L7 16"
                  stroke="currentColor"
                  strokeWidth="1.75"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          )}

          {/* ── Counter ──────────────────────────────────────────────────── */}
          <p
            className="pointer-events-none absolute bottom-6 left-0 right-0 text-center text-sm text-secondary"
            aria-live="polite"
            aria-atomic="true"
          >
            {currentIndex + 1} / {images.length}
          </p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
