export type Transformation = {
  name: string;
  quote: string;
  result: string;
  image: string;
  program: string;
  duration: string;
};

export const transformations: Transformation[] = [
  {
    name: 'Alicia M.',
    quote:
      "I came in barely able to squat with an empty bar. Six months later I pulled 185 lbs and don't recognize the person in my own competition photos. FORGE didn't just change my physique — it changed how I see myself.",
    result: 'Added 185 lb deadlift, lost 22 lbs',
    image: '/images/transformations/alicia-m.avif',
    program: 'Barbell Club',
    duration: '6 months',
  },
  {
    name: 'Derek T.',
    quote:
      'After 12 years behind a desk my back was wrecked and I had given up on being athletic. The Fundamentals program taught me how to actually move again. Now I train five days a week and my back pain is gone.',
    result: 'Eliminated chronic back pain, gained 11 lbs of muscle',
    image: '/images/transformations/derek-t.avif',
    program: 'Fundamentals → Barbell Club',
    duration: '10 months',
  },
  {
    name: 'Simone K.',
    quote:
      'Dana\'s kettlebell class is unlike anything I\'ve ever done. I was skeptical that swinging a weight around could build real strength, but my numbers in every lift went up and I dropped two clothing sizes. I\'m a convert.',
    result: 'Lost 18 lbs, increased press to bodyweight',
    image: '/images/transformations/simone-k.avif',
    program: 'Kettlebell & Conditioning',
    duration: '5 months',
  },
  {
    name: 'Rafael O.',
    quote:
      'I was training with Marcus for 1-on-1 sessions while recovering from a torn labrum. He worked around my limitations, kept me progressing, and I actually came back stronger than before the injury. That level of expertise is rare.',
    result: 'Full return to sport post-surgery, 40 lb squat PR',
    image: '/images/transformations/rafael-o.avif',
    program: '1-on-1 Coaching',
    duration: '8 months',
  },
  {
    name: 'Nina W.',
    quote:
      "I've been to a lot of gyms where the community is a marketing afterthought. At FORGE it's real. People remember your name, celebrate your PRs, and show up for each other. The training is elite, but the people are why I stay.",
    result: 'Lost 14 lbs, first-ever pull-up (now doing sets of 8)',
    image: '/images/transformations/nina-w.avif',
    program: 'Kettlebell & Conditioning',
    duration: '7 months',
  },
];
