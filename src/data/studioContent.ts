export interface MentorProfile {
  id: string;
  name: string;
  role: string;
  organization: string;
}

export interface MasterclassItem {
  id: string;
  number: string;
  speaker: string;
  note: string;
}

export interface AdmissionsProfile {
  id: string;
  number: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  badge: string;
  accent: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface LotEnvironment {
  id: string;
  code: string;
  name: string;
  subtitle: string;
  description: string;
  badge: string;
  locationTag: string;
  accentColor: string;
  specs: string[];
}

export interface StickerItem {
  id: string;
  label: string;
  color: string;
  textColor: string;
  rotation: number;
  initialX: number;
  initialY: number;
}

export const ANNOUNCEMENT_TEXT = "COHORT ADMISSIONS OPEN • Ramanaidu Studios, Hyderabad · 12 Weeks · Zero Upfront Cost · Apply First, Pay After Selection";

export const HERITAGE_METRICS = [
  { label: 'Cinema Production Legacy', value: '60+', subtext: 'Years of Institution Building' },
  { label: 'Feature Films Produced', value: '150+', subtext: 'Across 13 Indian Languages' },
  { label: 'World Record Producer', value: 'Guinness', subtext: 'Most Prolific Film Studio' },
  { label: 'Practical Studio Sprint', value: '12 Wks', subtext: 'Zero Upfront Cost to Apply' }
];

export const MENTORS: MentorProfile[] = [
  {
    id: 'suresh-babu',
    name: 'D. Suresh Babu',
    role: 'Managing Director',
    organization: 'Suresh Productions & Ramanaidu Studios'
  },
  {
    id: 'rana-daggubati',
    name: 'Rana Daggubati',
    role: 'Actor, Producer & Media Pioneer',
    organization: 'Spirit Media & Ramanaidu Studios'
  },
  {
    id: 'mihika',
    name: 'Mihika',
    role: 'Founder & Brand Architect',
    organization: 'Mudita Tribe & Antidote Atelier'
  }
];

export const MASTERCLASSES: MasterclassItem[] = [
  { id: '1', number: '01', speaker: 'Abhigna Vuthuluri', note: 'A online will be added, for now put this' },
  { id: '2', number: '02', speaker: 'Kaushik K', note: 'A online will be added, for now put this' },
  { id: '3', number: '03', speaker: 'Vamsi Kurapati', note: 'A online will be added, for now put this' },
  { id: '4', number: '04', speaker: 'Dedeepya Abbagani', note: 'A online will be added, for now put this' },
  { id: '5', number: '05', speaker: 'Ajay (@ Aye Jude)', note: 'A online will be added, for now put this' },
  { id: '6', number: '★', speaker: 'Special Panel', note: 'A online will be added, for now put this' }
];

export const PHILOSOPHY_PILLARS = [
  {
    number: '01',
    title: 'Fundamentals',
    description: 'Audience psychology, narrative architecture, and attention distribution.',
    accent: '#C7CAFF', // Periwinkle
    textColor: '#161616'
  },
  {
    number: '02',
    title: 'Ideology',
    description: 'Create with purpose. Serve a dedicated tribe over empty views and vanity metrics.',
    accent: '#C8FF2E', // Electric Lime
    textColor: '#161616'
  },
  {
    number: '03',
    title: 'Monetisation',
    description: 'Build enduring media equity via direct and indirect revenue streams.',
    accent: '#F8330B', // Vermilion
    textColor: '#FFFFFF'
  }
];

export const CURRICULUM_PHASES = [
  {
    number: '01',
    weeks: 'Weeks 1–4',
    title: 'Creator Economy & Story Architecture',
    accent: '#FEFAE7',
    tag: 'PHASE 01'
  },
  {
    number: '02',
    weeks: 'Weeks 5–8',
    title: 'Production Craft, Sound & AI Pipelines',
    accent: '#C8FF2E',
    tag: 'PHASE 02'
  },
  {
    number: '03',
    weeks: 'Weeks 9–10',
    title: 'The Studio Shoot on Ramanaidu Lot',
    accent: '#C7CAFF',
    tag: 'PHASE 03'
  },
  {
    number: '04',
    weeks: 'Weeks 11–12',
    title: 'Monetization & Demo Day',
    accent: '#C0ECBF',
    tag: 'PHASE 04'
  }
];

export const ADMISSIONS_PROFILES: AdmissionsProfile[] = [
  {
    id: 'aspiring',
    number: '01',
    title: 'Aspiring Creators',
    description: 'You want to build a serious digital media presence from scratch with true cinematic fundamentals and verified story architecture.',
    image: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'Aspiring filmmaker framing shot on camera set',
    badge: 'PROFILE 01',
    accent: '#C8FF2E'
  },
  {
    id: 'working',
    number: '02',
    title: 'Working Creators',
    description: 'You already publish, but want higher retention, broadcast multi-cam production discipline, and sustainable direct revenue.',
    image: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'Professional video editor working on timeline waveforms',
    badge: 'PROFILE 02',
    accent: '#C7CAFF'
  },
  {
    id: 'business',
    number: '03',
    title: 'Business Owners & Founders',
    description: 'You want your brand story to command authority, establish founder IP, and drive inbound demand without relying on paid ads.',
    image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'Founders in a modern media boardroom discussion',
    badge: 'PROFILE 03',
    accent: '#FEFAE7'
  }
];

export const KEY_DATES = [
  { step: '01', date: '1 Nov 2026', label: 'Applications Open' },
  { step: '02', date: '30 Nov 2026', label: 'Applications Close' },
  { step: '03', date: '4 Dec 2026', label: 'Cohort Begins (Week 1)' },
  { step: '04', date: 'Early Apr 2027', label: 'Demo Day & Studio Showcase' }
];

export const FAQ_ITEMS: FAQItem[] = [
  {
    question: 'Who is this for?',
    answer: 'Aspiring creators, working creators, and founders building audience trust.'
  },
  {
    question: 'Do I need equipment or followers?',
    answer: 'No. A smartphone is enough to start. Studio gear (Sony FX, lighting, audio) is provided on the lot.'
  },
  {
    question: 'Do I shoot at Ramanaidu Studios?',
    answer: 'Yes. Weeks 9 & 10 are full-day production shoots on Stage 01 and Bay 04.'
  },
  {
    question: 'Is AI included?',
    answer: 'Yes. Ethical AI for ideation, transcription indexing, and editing automation—keeping your creative judgment in charge.'
  },
  {
    question: 'How does payment work?',
    answer: 'Free application. Tuition is paid only after formal selection.'
  }
];

export const LOT_ENVIRONMENTS: LotEnvironment[] = [
  {
    id: 'stage-01',
    code: 'STAGE 01',
    name: 'Stage 01 Soundstage',
    subtitle: '10,000 SQ. FT. CINEMA BROADCAST FLOOR',
    description: 'The physical production floor where Tollywood classics were staged. Equipped for modern creator shoots with multi-camera Sony FX rigs, wireless DMX grid lighting, and wireless lav audio.',
    badge: 'LIVE SOUNDSTAGE',
    locationTag: 'RAMANAIDU CAMPUS // STAGE 01',
    accentColor: '#C8FF2E',
    specs: [
      'Multi-camera Sony FX3 / FX6 Cinema Rigs',
      'Overhead Motorized DMX Aputure Grid',
      'Sennheiser Multi-Channel Wireless Audio',
      'Live Multi-Cam Direct-to-SSD Switching'
    ]
  },
  {
    id: 'bay-04',
    code: 'BAY 04',
    name: 'Bay 04 Post-Production Suite',
    subtitle: 'DAVINCI RESOLVE COLOR & SOUND SUITE',
    description: 'Industry-calibrated editing suites running dual Apple Studio displays, color-accurate reference monitors, and DaVinci Resolve Studio control panels for micro-pacing and narrative grading.',
    badge: 'POST-PRODUCTION LAB',
    locationTag: 'POST BLOCK // SUITE 04',
    accentColor: '#C7CAFF',
    specs: [
      'M3 Max Mac Studio Edit Stations',
      'Dual Calibrated Reference OLED Displays',
      'DaVinci Resolve Mini Panel Color Deck',
      'Surround Sound Studio Monitoring'
    ]
  },
  {
    id: 'room-102',
    code: 'ROOM 102',
    name: 'Room 102 Story Lab',
    subtitle: 'NARRATIVE ROOM & SCRIPT WRITERS TABLE',
    description: 'The creative writers room where scripts, loglines, hooks, and retention architectures are rigorously deconstructed by veteran showrunners and leading creators.',
    badge: 'STORY & SCRIPT TABLE',
    locationTag: 'CREATIVE BLOCK // RM 102',
    accentColor: '#FEFAE7',
    specs: [
      'Floor-to-Ceiling Narrative Magnetic Boards',
      '3-Act Hook & Retention Breakdown Decks',
      'Direct Suresh Babu & Showrunner Feedback',
      'Roundtable Script & Logline Pitch Sessions'
    ]
  }
];

export const STICKER_ITEMS: StickerItem[] = [
  { id: 's1', label: '60 YRS CINEMA', color: '#161616', textColor: '#C8FF2E', rotation: -6, initialX: 20, initialY: 30 },
  { id: 's2', label: 'STAGE 01 LOT', color: '#C8FF2E', textColor: '#161616', rotation: 5, initialX: 210, initialY: 20 },
  { id: 's3', label: 'STORY > HYPE', color: '#F8330B', textColor: '#FFFFFF', rotation: -4, initialX: 390, initialY: 35 },
  { id: 's4', label: 'DAVINCI SUITE', color: '#C7CAFF', textColor: '#161616', rotation: 7, initialX: 50, initialY: 120 },
  { id: 's5', label: 'ZERO UPFRONT', color: '#C0ECBF', textColor: '#161616', rotation: -5, initialX: 260, initialY: 110 },
  { id: 's6', label: 'NO CRINGE EDITS', color: '#F0BEFA', textColor: '#161616', rotation: 4, initialX: 450, initialY: 100 },
  { id: 's7', label: 'GUINNESS LOT', color: '#580D14', textColor: '#FFFFFF', rotation: -3, initialX: 150, initialY: 190 },
  { id: 's8', label: 'DEMO DAY 2027', color: '#FEFAE7', textColor: '#161616', rotation: 6, initialX: 340, initialY: 180 }
];
