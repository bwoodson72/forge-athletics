export type Coach = {
  name: string;
  role: string;
  bio: string;
  certifications: string[];
  image: string;
  specialties: string[];
};

export const coaches: Coach[] = [
  {
    name: 'Marcus Reyes',
    role: 'Head Coach & Co-Founder',
    bio: 'Marcus spent a decade competing in powerlifting before channeling that experience into coaching. He built FORGE around the belief that everyone deserves access to evidence-based strength programming, not just elite athletes. His coaching philosophy centers on patience, precision, and progressive overload done right.',
    certifications: ['CSCS (NSCA)', 'USAW Level 2', 'FMS Level 2'],
    image: '/images/coaches/marcus-reyes.avif',
    specialties: ['Powerlifting', 'Program Design', 'Strength & Conditioning'],
  },
  {
    name: 'Dana Voss',
    role: 'Kettlebell Specialist',
    bio: 'Dana is a Pavel-certified SFG instructor with over eight years of kettlebell coaching experience across three countries. She specializes in making complex ballistic movements approachable for beginners while still challenging competitive athletes. Her classes are known for their intensity, precision, and genuine warmth.',
    certifications: ['SFG Level 2 (StrongFirst)', 'RKC (Dragon Door)', 'CPT (NASM)'],
    image: '/images/coaches/dana-voss.avif',
    specialties: ['Kettlebell Sport', 'Fat Loss', 'Metabolic Conditioning'],
  },
  {
    name: 'James Okafor',
    role: 'Barbell & Olympic Lifting Coach',
    bio: 'A former collegiate wrestler and national-level weightlifter, James brings explosive athleticism and meticulous technical detail to every session. He has coached athletes to multiple state and regional weightlifting titles. Outside the gym, James holds a degree in kinesiology and is passionate about the science of human performance.',
    certifications: ['USAW Level 2', 'CSCS (NSCA)', 'Pn1 (Precision Nutrition)'],
    image: '/images/coaches/james-okafor.avif',
    specialties: ['Olympic Weightlifting', 'Athlete Development', 'Injury Prevention'],
  },
  {
    name: 'Priya Nair',
    role: 'Steel Mace & Movement Coach',
    bio: "Priya discovered steel mace training after a shoulder injury ended her competitive gymnastics career, and it changed her relationship with movement entirely. She has trained under some of the world's foremost mace practitioners and now teaches a style that blends ancient roots with modern biomechanics.",
    certifications: ['SMT Certified (ONNIT)', 'FRC Mobility Specialist', 'CPT (ACE)'],
    image: '/images/coaches/priya-nair.avif',
    specialties: ['Steel Mace & Indian Clubs', 'Mobility & Flow', 'Shoulder Rehab'],
  },
  {
    name: 'Tyler Brooks',
    role: 'Fundamentals & General Strength Coach',
    bio: 'Tyler is the first face most new members see at FORGE, and that is by design. He has a rare gift for breaking down complex movement patterns into something anyone can feel and understand on the first try. He runs the Fundamentals program and takes pride in watching brand-new athletes discover what their bodies are capable of.',
    certifications: ['CSCS (NSCA)', 'CF-L1 (CrossFit)', 'TPI Certified (Golf Fitness)'],
    image: '/images/coaches/tyler-brooks.avif',
    specialties: ['Beginner Coaching', 'Movement Screening', 'General Fitness'],
  },
];
