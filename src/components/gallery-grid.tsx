'use client';

import { useState } from 'react';
import { galleryImages } from '@/lib/data/gallery';
import { GalleryLightbox } from '@/components/gallery-lightbox';
import { cn } from '@/lib/utils';

/**
 * Returns true for images that should span 2 grid rows.
 * "Every 3rd and 7th" — using 1-based position:
 *   1-indexed positions divisible by 3: 3, 6, 9, 12  → 0-indexed: 2, 5, 8, 11
 *   1-indexed positions divisible by 7: 7, 14        → 0-indexed: 6, 13
 */
function isSpanning(index: number): boolean {
  const pos = index + 1;
  return pos % 3 === 0 || pos % 7 === 0;
}

interface GalleryGridProps {
  /**
   * Optional external click handler — called in addition to opening the
   * lightbox, so a parent component can track the selected image if needed.
   */
  onImageClick?: (index: number) => void;
}

export function GalleryGrid({ onImageClick }: GalleryGridProps) {
  // null = lightbox closed; number = index of the open image
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  function handleOpen(index: number) {
    setSelectedIndex(index);
    onImageClick?.(index);
  }

  function handleClose() {
    setSelectedIndex(null);
  }

  function handleNext() {
    setSelectedIndex((i) =>
      i !== null && i < galleryImages.length - 1 ? i + 1 : i,
    );
  }

  function handlePrev() {
    setSelectedIndex((i) => (i !== null && i > 0 ? i - 1 : i));
  }

  return (
    <>
      <div className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4">
        {galleryImages.map((image, index) => {
          const spanning = isSpanning(index);

          return (
            <div
              key={image.src}
              /*
               * Non-spanning cells: aspect-square drives the row height.
               * Spanning cells:     row-span-2 fills the 2 rows established by
               *                     the adjacent aspect-square cells — producing
               *                     a portrait-orientation "tall" slot.
               *
               * The scale/brightness hover lives on this wrapper so that
               * overflow-hidden clips the transform cleanly.
               * When real <Image> tags are added the transition can move to
               * the image element itself for a subtler zoom-inside-frame effect.
               */
              className={cn(
                'group relative overflow-hidden rounded-lg bg-surface-alt',
                'cursor-pointer transition-all duration-300',
                'hover:brightness-110 hover:scale-[1.02]',
                'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2',
                spanning ? 'row-span-2' : 'aspect-square',
              )}
              role="button"
              tabIndex={0}
              aria-label={`Open image: ${image.alt}`}
              onClick={() => handleOpen(index)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  handleOpen(index);
                }
              }}
            >
              {/*
               * ── Placeholder ───────────────────────────────────────────────
               * TODO: replace this inner div + <p> with:
               *
               *   <Image
               *     src={image.src}
               *     alt={image.alt}
               *     fill
               *     sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
               *     className="object-cover"
               *   />
               *
               * The fill + object-cover pair will automatically handle both
               * square and row-spanning cells without extra wrapper markup.
               * ──────────────────────────────────────────────────────────────
               */}
              <div className="flex h-full min-h-[120px] items-center justify-center p-3">
                <p className="text-center text-xs leading-relaxed text-secondary">
                  {image.alt}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      <GalleryLightbox
        images={galleryImages}
        currentIndex={selectedIndex ?? 0}
        isOpen={selectedIndex !== null}
        onClose={handleClose}
        onNext={handleNext}
        onPrev={handlePrev}
      />
    </>
  );
}
