export type Program = {
  slug: string;
  name: string;
  description: string;
  schedule: string[];
  duration: string;
  level: string;
  image: string;
  features: string[];
};

export const programs: Program[] = [
  {
    slug: 'barbell-club',
    name: 'Barbell Club',
    description:
      'A structured strength program built around the squat, bench, and deadlift. Athletes follow periodized programming that drives consistent progress in both raw strength and technique. Ideal for lifters serious about moving heavier weight with precision.',
    schedule: ['Mon / Wed / Fri — 6:00 AM', 'Tue / Thu / Sat — 7:00 AM'],
    duration: '75 min',
    level: 'Intermediate – Advanced',
    image: '/images/programs/barbell-club.avif',
    features: [
      'Periodized linear and block programming',
      'Video form review each cycle',
      'Max-effort and dynamic effort days',
      'Meet prep guidance available',
    ],
  },
  {
    slug: 'kettlebell-conditioning',
    name: 'Kettlebell & Conditioning',
    description:
      'High-intensity kettlebell circuits designed to build functional strength, power, and cardiovascular capacity at the same time. Sessions combine ballistic and grind movements to create well-rounded athletes. No two workouts are the same.',
    schedule: ['Mon / Wed / Fri — 5:30 AM', 'Tue / Thu — 12:00 PM', 'Sat — 9:00 AM'],
    duration: '60 min',
    level: 'All Levels',
    image: '/images/programs/kettlebell-conditioning.avif',
    features: [
      'Ballistic and grind movement patterns',
      'Metabolic conditioning finishers',
      'Scalable loads for all fitness levels',
      'Grip, core, and posterior chain focus',
    ],
  },
  {
    slug: 'steel-mace-clubs',
    name: 'Steel Mace & Clubs',
    description:
      "An ancient training methodology modernized for today's athletes, using steel maces and Indian clubs to develop rotational power, shoulder resilience, and body control. Classes emphasize flow, coordination, and joint health alongside raw strength.",
    schedule: ['Tue / Thu — 6:00 AM', 'Sat — 10:30 AM'],
    duration: '60 min',
    level: 'Beginner – Intermediate',
    image: '/images/programs/steel-mace-clubs.avif',
    features: [
      'Rotational power development',
      'Shoulder prehab and mobility work',
      'Flow sequences and movement chains',
      'Low-impact, joint-friendly loading',
    ],
  },
  {
    slug: 'open-gym',
    name: 'Open Gym',
    description:
      "Full facility access to train on your own schedule with all of FORGE's equipment at your disposal. Open gym is perfect for members running their own programming or supplementing structured classes with extra volume.",
    schedule: ['Mon – Fri — 6:00 AM – 9:00 PM', 'Sat / Sun — 8:00 AM – 4:00 PM'],
    duration: 'Self-directed',
    level: 'All Levels',
    image: '/images/programs/open-gym.avif',
    features: [
      'Full barbell and rack access',
      'Complete kettlebell rack (8 – 48 kg)',
      'Turf lanes and sleds',
      'Included with all membership tiers',
    ],
  },
  {
    slug: 'fundamentals',
    name: 'Fundamentals',
    description:
      'A four-week onboarding course for members new to FORGE or to strength training. Coaches break down the mechanics of every major movement pattern so you build an unshakable foundation before entering group classes.',
    schedule: ['Mon / Wed — 7:00 PM', 'Sat — 8:00 AM'],
    duration: '60 min',
    level: 'Beginner',
    image: '/images/programs/fundamentals.avif',
    features: [
      'Four-week structured curriculum',
      'Small-group setting (max 6 athletes)',
      'Individualized movement assessment',
      'Included free with any membership',
    ],
  },
  {
    slug: '1-on-1-coaching',
    name: '1-on-1 Coaching',
    description:
      'Fully personalized coaching sessions built around your specific goals, schedule, and movement history. Your coach designs every aspect of your program — from warm-up to accessory work — and adjusts in real time as you progress.',
    schedule: ['By appointment — 7 days a week'],
    duration: '60 – 90 min',
    level: 'All Levels',
    image: '/images/programs/one-on-one-coaching.avif',
    features: [
      'Custom program design',
      'Real-time technique feedback',
      'Nutritional strategy guidance',
      'Priority scheduling with any coach',
    ],
  },
];
