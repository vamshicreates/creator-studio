import type {
  MentorProfile,
  MasterclassItem,
  LotEnvironment,
  CurriculumPhase,
  AdmissionsProfile,
  FAQItem,
  StickerItem
} from '../types/studio';

export const STUDIO_METRICS = [
  { label: 'Cinema Production Legacy', value: '60+', subtext: 'Years of Institution Building' },
  { label: 'Feature Films Produced', value: '150+', subtext: 'Across 13 Indian Languages' },
  { label: 'World Record Holder', value: 'Guinness', subtext: 'Most Prolific Film Producer' },
  { label: 'Cohort 01 Structure', value: '12 Wks', subtext: 'Zero Upfront Cost to Apply' }
];

export const LOT_ENVIRONMENTS: LotEnvironment[] = [
  {
    id: 'stage-01',
    code: 'STAGE 01',
    name: 'The Production Soundstage',
    subtitle: 'Multi-Cam Switching, Cinema Lighting & Call Sheet Discipline',
    locationTag: '17.4325° N · JUBILEE HILLS LOT',
    description: 'Multi-camera switching, cinema-grade key lighting, and the discipline of shooting to a call sheet. No shaky phone setups—learn how real soundstages control attention, direct the viewer’s eye, and produce commercial-grade video assets.',
    specs: ['Sony FX Cinema Rigs', 'Shure SM7B Broadcast Audio', 'Aputure Key & Rim Grid', 'Live Multi-Cam Switcher'],
    accentColor: '#C8FF2E', // Electric Lime
    badge: 'STAGE 01 // PRODUCTION'
  },
  {
    id: 'bay-04',
    code: 'BAY 04',
    name: 'The DaVinci Post Suite',
    subtitle: 'Color Science, Micro-Pacing & Broadcast Soundscape',
    locationTag: 'POST LOT // SUITE B',
    description: 'Editing is where stories are actually written. Master micro-pacing, multi-track audio dynamics, and color grading that command respect across screens. Work with high-bitrate log footage and dual calibrated scopes.',
    specs: ['Dual Scopes Displays', 'DaVinci Resolve Studio & Premiere', 'External High-Speed SSD Rigs', 'Broadcast Acoustic Monitoring'],
    accentColor: '#C7CAFF', // Lavender
    badge: 'BAY 04 // POST LOT'
  },
  {
    id: 'room-102',
    code: 'ROOM 102',
    name: 'The Writers’ Room & Story Lab',
    subtitle: 'Hook Architecture, Audience Psychology & IP Licensing',
    locationTag: 'CREATOR RESIDENCY // MAIN',
    description: 'Audience psychology before production. Deconstruct why hooks hold, how narrative pacing builds deep subscriber loyalty, and how creator content transforms into licensed IP, syndication, and scalable business equity.',
    specs: ['Physical Storyboard Walls', 'Audience Retention Frameworks', 'IP Licensing & Legal Models', 'Curiosity Gap Archetypes'],
    accentColor: '#F8330B', // Vermilion
    badge: 'ROOM 102 // WRITERS LAB'
  }
];

export const MENTORS: MentorProfile[] = [
  {
    id: 'suresh-babu',
    name: 'D. Suresh Babu',
    role: 'Managing Director',
    organization: 'Suresh Productions & Ramanaidu Studios',
    bio: 'Guinness World Record Producer with over 60 years of cinema institution building. Guided over 150 feature films across 13 Indian languages.',
    quote: 'Indian cinema has spent sixty years understanding the architecture of audience attention, story development, and sustainable production value. Today, individual creators and brand builders are the new studios.',
    badge: 'PRODUCER & PATRON'
  },
  {
    id: 'rana-daggubati',
    name: 'Rana Daggubati',
    role: 'Actor, Producer & Tech Entrepreneur',
    organization: 'Ramanaidu Studios & Spirit Media',
    bio: 'Pioneering the intersection of cinema, digital creator IP, and new media entertainment. Champion of digital creators building enduring businesses.',
    quote: 'We want creators who think like studio heads—commanding both the art of storytelling and the architecture of enterprise.',
    badge: 'CREATIVE DIRECTOR'
  },
  {
    id: 'mihika',
    name: 'Mihika',
    role: 'Founder & Brand Architect',
    organization: 'Mudita Tribe & Antidote Atelier',
    bio: 'Brand strategist and community architect translating cultural narratives into sustainable digital brands and high-affinity products.',
    quote: 'Content without ideology is just noise. People don’t follow algorithms; they follow purpose and point of view.',
    badge: 'BRAND ARCHITECT'
  }
];

export const MASTERCLASSES: MasterclassItem[] = [
  {
    id: 'lecture-01',
    lectureNumber: '01',
    speaker: 'Abhigna Vuthuluri',
    role: 'Narrative Architect & Visual Storyteller',
    topic: 'Micro-Pacing & Narrative Tension for Modern Video',
    dateNote: 'Cohort 01 Guest Session'
  },
  {
    id: 'lecture-02',
    lectureNumber: '02',
    speaker: 'Kaushik K',
    role: 'Audience Strategist & Growth Lead',
    topic: 'Channel Distribution & Omnichannel Attention Funnels',
    dateNote: 'Cohort 01 Guest Session'
  },
  {
    id: 'lecture-03',
    lectureNumber: '03',
    speaker: 'Vamsi Kurapati',
    role: 'Cinematographer & Lighting Director',
    topic: 'Cinema Lighting on a Creator Budget: Stage Craft',
    dateNote: 'Cohort 01 Guest Session'
  },
  {
    id: 'lecture-04',
    lectureNumber: '04',
    speaker: 'Dedeepya Abbagani',
    role: 'Community & IP Monetization Specialist',
    topic: 'Turning Audience Trust into Direct Enterprise Revenue',
    dateNote: 'Cohort 01 Guest Session'
  },
  {
    id: 'lecture-05',
    lectureNumber: '05',
    speaker: 'Ajay',
    role: 'Content Creator @ Aye Jude',
    topic: 'The Architecture of Viral Hooks & Audience Retention',
    dateNote: 'Cohort 01 Guest Session'
  }
];

export const PHILOSOPHY_PILLARS = [
  {
    number: '01',
    title: 'Fundamentals',
    headline: 'Audience Psychology & Narrative Architecture',
    description: 'Content, storytelling, viewer psychology, attention distribution, and the economic engines that power sustainable creator enterprises.',
    accent: '#C7CAFF'
  },
  {
    number: '02',
    title: 'Ideology',
    headline: 'Purpose Over Vanity Metrics',
    description: 'Create with clear intent. Serve a dedicated tribe instead of chasing temporary algorithm spikes and cringe trends.',
    accent: '#C8FF2E'
  },
  {
    number: '03',
    title: 'Monetisation',
    headline: 'Direct & Indirect Media Equity',
    description: 'Build an enduring creator business combining direct revenue (courses, consulting, digital products) with indirect revenue (brand authority and enterprise client leads).',
    accent: '#F8330B'
  }
];

export const CURRICULUM_PHASES: CurriculumPhase[] = [
  {
    phaseNumber: '01',
    weeksSpan: 'Weeks 1–4',
    title: 'Understand the Creator Economy',
    description: 'Learn how attention works, find a niche worth owning, and turn raw ideas into compelling narratives and an editorial channel roadmap.',
    weeks: [
      {
        weekNumber: '01',
        title: 'Creator Economy & Opportunity Mapping',
        whatYouLearn: 'The mechanics of modern attention, creator revenue models, and how sustainable media brands create value.',
        practicalExercise: 'Study successful creators and map how they create value, retain viewers, and generate income.',
        youMake: 'A validated Creator Opportunity Map for your chosen niche.',
        gameOfTheWeek: {
          title: 'The ₹1 Lakh Creator Challenge',
          description: 'Zero followers, a smartphone, and ₹0. Pitch a viable creator business that could earn ₹1 lakh/month within 180 days.'
        }
      },
      {
        weekNumber: '02',
        title: 'Audience Psychology & Niche Definition',
        whatYouLearn: 'Identifying the exact persona, their acute pain points, and why most content fails to build real trust.',
        practicalExercise: 'Deconstruct 10 top creators in your niche to extract unspoken viewer emotional triggers.',
        youMake: 'Audience Persona Codex & Content Pillar Architecture.'
      },
      {
        weekNumber: '03',
        title: 'Storytelling Architecture & The Hook',
        whatYouLearn: '3-second hook mechanics, open curiosity gaps, narrative tension arcs, and cold open payoffs.',
        practicalExercise: 'Write 20 distinct hook variations across 5 proven psychological angles for one core thesis.',
        youMake: 'Hook Matrix & 3 Flagship Script Breakdowns.'
      },
      {
        weekNumber: '04',
        title: 'Scripting, Storyboarding & Call Sheets',
        whatYouLearn: 'Converting raw concepts into shootable scripts, visual storyboards, shot lists, and professional call sheets.',
        practicalExercise: 'Storyboard a 5-minute video and write its scene-by-scene shoot schedule.',
        youMake: 'Production-ready Fountain Script and Visual Storyboard Deck.'
      }
    ]
  },
  {
    phaseNumber: '02',
    weeksSpan: 'Weeks 5–8',
    title: 'Production Craft, AI Systems & Editing Science',
    description: 'Master studio multi-cam setups, broadcast audio, AI agent scripting pipelines, and retention-focused video editing.',
    weeks: [
      {
        weekNumber: '05',
        title: 'Lighting & Soundstage Camera Craft',
        whatYouLearn: 'Three-point cinema lighting, key-to-fill ratios, lens selection, and broadcast vocal capture with Shure SM7B.',
        practicalExercise: 'Hands-on soundstage lighting setup on Stage 01 under studio gaffer guidance.',
        youMake: 'Cinematic Camera & Lighting Preset Test Reel.'
      },
      {
        weekNumber: '06',
        title: 'Micro-Pacing & DaVinci Resolve Post',
        whatYouLearn: 'Cutting on action, eliminating cognitive fatigue, J/L cuts, dynamic speed ramps, and audio multi-track mastering.',
        practicalExercise: 'Edit a high-friction 2-minute scene in DaVinci Bay 04 to maximize average view duration.',
        youMake: 'Final Rough Cut with Foley and Custom Sound Design.'
      },
      {
        weekNumber: '07',
        title: 'Motion Graphics, Maps & Visual Interrupts',
        whatYouLearn: 'Vox-style paper textures, 3D relief terrain, animated infographics, and word-by-word kinetic subtitles.',
        practicalExercise: 'Animate a complex data breakdown using custom Bezier curves and graphic overlays.',
        youMake: '3 Custom Branded Motion Graphic Templates.'
      },
      {
        weekNumber: '08',
        title: 'AI Workflows & Creator Automation',
        whatYouLearn: 'Using LLM agents for deep research, automated transcription indexing, and DaVinci script automation.',
        practicalExercise: 'Build an autonomous research agent to assemble verified source material for your script.',
        youMake: 'Autonomous Research-to-Script AI Pipeline.'
      }
    ]
  },
  {
    phaseNumber: '03',
    weeksSpan: 'Weeks 9–10',
    title: 'The Studio Shoot on Ramanaidu Lot',
    description: 'Direct and produce your flagship capstone project on the working Ramanaidu lot with cinema gear and soundstage crew.',
    weeks: [
      {
        weekNumber: '09',
        title: 'Capstone Production Shoot on Stage 01',
        whatYouLearn: 'Directing talent, commanding the soundstage, shooting to a strict call sheet, and capturing multi-cam coverage.',
        practicalExercise: 'Full-day production shoot of your capstone video on Stage 01.',
        youMake: 'Complete Multi-Cam Master Raw Footage Package.'
      },
      {
        weekNumber: '10',
        title: 'Post-Production Mastering & Color Grading',
        whatYouLearn: 'DaVinci color management, film emulation LUTs, audio sweetening, and curiosity-gap thumbnail testing.',
        practicalExercise: 'Color grade log footage and engineer 3 distinct high-CTR thumbnail variants.',
        youMake: '4K Master ProRes Film + 3 A/B Thumbnail Suites.'
      }
    ]
  },
  {
    phaseNumber: '04',
    weeksSpan: 'Weeks 11–12',
    title: 'Monetisation, Channel Launch & Demo Day',
    description: 'Transform your flagship project into an ongoing media business, secure first revenue, and pitch on Demo Day.',
    weeks: [
      {
        weekNumber: '11',
        title: 'Business Models & Direct/Indirect Monetization',
        whatYouLearn: 'Designing digital products, high-ticket consulting, brand sponsorship packages, and community offerings.',
        practicalExercise: 'Draft a commercial media kit and 12-month financial revenue projection.',
        youMake: 'Commercial Creator Media Kit & Monetization Playbook.'
      },
      {
        weekNumber: '12',
        title: 'Demo Day & Cohort Graduation',
        whatYouLearn: 'Pitching your channel and media enterprise to studio heads, digital networks, and creator investors.',
        practicalExercise: 'Live presentation on Ramanaidu soundstage in front of mentors and industry panel.',
        youMake: 'Live Public Channel Launch & Demo Day Showcase.'
      }
    ]
  }
];

export const ADMISSIONS_PROFILES: AdmissionsProfile[] = [
  {
    id: 'aspiring',
    number: '01',
    title: 'Aspiring Creators',
    summary: 'You want to build a serious digital media presence from scratch.',
    forYouIf: 'You have deep ideas or craft skills, but need production discipline, storytelling frameworks, and a proven system.',
    youLeaveWith: 'A validated niche, a flagship studio-produced video, and an editorial plan for your first year.'
  },
  {
    id: 'working',
    number: '02',
    title: 'Working Creators',
    summary: 'You already publish, but want higher retention and stronger revenue.',
    forYouIf: 'You are stuck on algorithmic plateaus or want to upgrade from phone edits to cinematic soundstages.',
    youLeaveWith: 'Broadcast production skills, automated AI workflows, and multi-tier direct revenue streams.'
  },
  {
    id: 'business',
    number: '03',
    title: 'Business Owners & Founders',
    summary: 'You want content to build authority and drive enterprise demand.',
    forYouIf: 'You want your company’s story to be told with cinema-level authority and clear customer conversion.',
    youLeaveWith: 'A high-converting founder media series, brand IP, and an inbound customer generation flywheel.'
  }
];

export const COHORT_DATES = [
  { step: '01', date: '1 Nov 2026', label: 'Applications Open', sub: 'Apply first, pay after selection' },
  { step: '02', date: '30 Nov 2026', label: 'Applications Close', sub: 'Shortlist review & studio interviews' },
  { step: '03', date: '4 Dec 2026', label: 'Cohort Begins (Week 1)', sub: 'In-person & hybrid residency kicks off' },
  { step: '04', date: 'Early Apr 2027', label: 'Demo Day & Studio Showcase', sub: 'Live pitch & capstone premieres' }
];

export const FAQ_ITEMS: FAQItem[] = [
  {
    question: 'Who is Creators’ Studio by Ramanaidu for?',
    answer: 'It is built for three kinds of people: aspiring creators who want to start right, working creators who want sharper storytelling and diversified revenue, and business owners/founders who want content to build undeniable brand equity.',
    category: 'Admissions'
  },
  {
    question: 'How long is the program, and what is the time commitment?',
    answer: 'The curriculum runs for 12 intensive weeks inside a four-month cohort window. The additional time provides dedicated scheduling for your soundstage shoot on Stage 01, DaVinci post-production mastering, and Demo Day rehearsals.',
    category: 'Curriculum'
  },
  {
    question: 'Do I need a large follower count or professional cinema gear to apply?',
    answer: 'No. The program starts with audience psychology, ideation, and narrative architecture. A smartphone is sufficient to begin. All high-end cinema equipment (Sony FX cameras, studio lighting, Shure audio, DaVinci suites) is provided on the studio lot.',
    category: 'Requirements'
  },
  {
    question: 'Will I actually shoot inside Ramanaidu Studios?',
    answer: 'Yes. In Weeks 9 and 10, you plan, direct, and master your flagship capstone project on the actual Ramanaidu film lot in Jubilee Hills, Hyderabad, using real soundstages and cinema facilities.',
    category: 'Studio Lot'
  },
  {
    question: 'What is the "Apply First, Pay After Selection" model?',
    answer: 'There is zero cost to apply. We review your vision, ambitions, and potential first. Only candidates accepted into Cohort 01 receive the tuition schedule and onboarding package.',
    category: 'Tuition'
  },
  {
    question: 'Is AI part of the curriculum?',
    answer: 'Yes. Weeks 5 to 8 cover ethical AI for research, scripting, storyboarding, transcription indexing, and post-production automation—always keeping human taste, narrative judgment, and craft firmly in control.',
    category: 'Curriculum'
  },
  {
    question: 'What is the "Game of the Week"?',
    answer: 'Every weekly session starts with a fast-paced interactive challenge (such as The ₹1 Lakh Creator Challenge) to internalize core principles by doing, before breaking down the theory.',
    category: 'Format'
  },
  {
    question: 'Who operates Creators’ Studio by Ramanaidu?',
    answer: 'Creators’ Studio is built and operated by Melbourne MAMA Creative Space in official collaboration with Suresh Productions and Ramanaidu Studios.',
    category: 'Organization'
  }
];

export const STICKER_ITEMS: StickerItem[] = [
  { id: 'st-1', label: '60 YRS CINEMA', color: '#161616', textColor: '#C8FF2E', rotation: -6, initialX: 30, initialY: 40 },
  { id: 'st-2', label: 'STAGE 01 LOT', color: '#C8FF2E', textColor: '#161616', rotation: 4, initialX: 220, initialY: 25 },
  { id: 'st-3', label: 'STORY > HYPE', color: '#F8330B', textColor: '#FFFFFF', rotation: -3, initialX: 430, initialY: 35 },
  { id: 'st-4', label: 'DAVINCI SUITE', color: '#C7CAFF', textColor: '#161616', rotation: 8, initialX: 70, initialY: 130 },
  { id: 'st-5', label: 'ZERO UPFRONT', color: '#C0ECBF', textColor: '#161616', rotation: -5, initialX: 290, initialY: 120 },
  { id: 'st-6', label: 'NO CRINGE CONTENT', color: '#F0BEFA', textColor: '#161616', rotation: 3, initialX: 490, initialY: 110 },
  { id: 'st-7', label: 'GUINNESS LOT', color: '#580D14', textColor: '#FFFFFF', rotation: -4, initialX: 180, initialY: 210 },
  { id: 'st-8', label: 'DEMO DAY 2027', color: '#FEFAE7', textColor: '#161616', rotation: 6, initialX: 380, initialY: 195 }
];
