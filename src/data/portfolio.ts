export interface PortfolioItem {
  id: string;
  title: string;
  category: string;
  views: string;
  retention: string;
  image: string;
  description: string;
  tags: string[];
  link?: string;
}

export const PORTFOLIO_ITEMS: PortfolioItem[] = [
  {
    id: 'jio-ipo',
    title: 'Jio IPO Market Breakdown & Narrative',
    category: 'Cinematic Finance & Research',
    views: '1.4M+',
    retention: '68% AVD',
    image: '/assets/jio_cover.png',
    description: 'In-depth financial narrative breakdown examining telecom moat, satellite spectrum battles, and valuation metrics with custom animated motion graphics.',
    tags: ['Motion Graphics', 'Finance Teardown', 'Vox Style', 'Market Deep Dive'],
  },
  {
    id: 'carousel-story-1',
    title: 'High-Retention Editorial Carousel Series',
    category: 'Visual Storytelling',
    views: '420K+ Impressions',
    retention: '92% Swipe Through',
    image: '/assets/carousel_1.png',
    description: 'Bite-sized multi-slide story architecture engineered with curiosity gap hooks, minimalist typography, and seamless micro-transitions.',
    tags: ['Instagram Carousel', 'LinkedIn Storytelling', 'Graphic Design'],
  },
  {
    id: 'carousel-story-2',
    title: 'Visual Anatomy of Modern Filmmaking',
    category: 'Visual Storytelling',
    views: '350K+ Impressions',
    retention: '88% Completion',
    image: '/assets/carousel_2.png',
    description: 'Visual analysis of high-tension screenplay scenes, framing rules, camera blocking, and sound architecture for aspiring directors.',
    tags: ['Filmmaking', 'Screenplay Craft', 'Cinematography'],
  },
  {
    id: 'pushpa-screenplay',
    title: 'Pushpa & Animal Telugu/Hindi Screenplay Study',
    category: 'Screenplay & Narrative Arc',
    views: '500K+ Readers',
    retention: 'Full Story Read',
    image: '/assets/Pushpa_1_The_Rise_Disclaimer_Card.png',
    description: 'Scene-by-scene structural breakdown of high-octane pan-Indian blockbusters, dissecting heroic pacing, interval cliffhangers, and hero entry beats.',
    tags: ['Screenplay Analysis', 'Story Structure', 'Fountain Script'],
  }
];

export const STUDIO_METRICS = [
  { label: 'Total Views Generated', value: '50M+', subtext: 'across client channels' },
  { label: 'Master Editing Styles', value: '15+', subtext: 'custom agentic skills' },
  { label: 'Average View Duration Jump', value: '+42%', subtext: 'over industry baseline' },
  { label: 'Average CTR Boost', value: '3.8x', subtext: 'via thumbnail engineering' }
];
