export type GalleryImage = {
  src: string;
  alt: string;
  category: 'facility' | 'equipment' | 'training' | 'community';
};

export const galleryImages: GalleryImage[] = [
  // facility
  {
    src: '/images/gallery/gym-floor-01.avif',
    alt: 'Main gym floor with squat racks and turf lane',
    category: 'facility',
  },
  {
    src: '/images/gallery/gym-floor-02.avif',
    alt: 'Barbell area with platform flooring and chalk trays',
    category: 'facility',
  },
  {
    src: '/images/gallery/gym-entrance.avif',
    alt: 'FORGE Athletics entrance and reception area',
    category: 'facility',
  },
  {
    src: '/images/gallery/gym-locker-room.avif',
    alt: 'Clean locker room and change area',
    category: 'facility',
  },

  // equipment
  {
    src: '/images/gallery/kettlebell-rack.avif',
    alt: 'Full kettlebell rack from 8 kg to 48 kg',
    category: 'equipment',
  },
  {
    src: '/images/gallery/barbells-wall.avif',
    alt: 'Competition and training barbells on storage rack',
    category: 'equipment',
  },
  {
    src: '/images/gallery/steel-mace-collection.avif',
    alt: 'Steel maces and Indian clubs on display wall',
    category: 'equipment',
  },
  {
    src: '/images/gallery/sled-turf.avif',
    alt: 'Sled on 40-foot turf lane',
    category: 'equipment',
  },

  // training
  {
    src: '/images/gallery/barbell-squat-session.avif',
    alt: 'Athlete performing a back squat during Barbell Club',
    category: 'training',
  },
  {
    src: '/images/gallery/kettlebell-swing-class.avif',
    alt: 'Group class performing two-hand kettlebell swings',
    category: 'training',
  },
  {
    src: '/images/gallery/coach-cueing-deadlift.avif',
    alt: 'Coach Marcus cueing hip hinge on a deadlift',
    category: 'training',
  },
  {
    src: '/images/gallery/steel-mace-flow.avif',
    alt: '360 steel mace flow sequence in class',
    category: 'training',
  },

  // community
  {
    src: '/images/gallery/pr-celebration.avif',
    alt: 'Athletes celebrating a personal record deadlift',
    category: 'community',
  },
  {
    src: '/images/gallery/community-event.avif',
    alt: 'FORGE community barbecue and lifting event',
    category: 'community',
  },
];
