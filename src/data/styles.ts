export interface EditingStyle {
  id: string;
  name: string;
  creator: string;
  category: 'Documentary' | 'Educational' | 'Viral Short-Form' | 'Cinematic Film' | '3D & Motion';
  oneLiner: string;
  hookRetention: string;
  signatureEffects: string[];
  colorPalette: string[];
  bestFor: string;
  instagramUrl: string;
  youtubeUrl: string;
  repoSkill: string;
}

export const EDITING_STYLES: EditingStyle[] = [
  {
    id: 'vox',
    name: 'Explainer & Infographics',
    creator: 'Vox',
    category: 'Educational',
    oneLiner: 'Explainer editing with animated maps, clean infographics, archival footage, yellow highlighters, and clear visual storytelling.',
    hookRetention: 'Visual thesis within 4 seconds via animated maps & tactile paper overlays.',
    signatureEffects: ['Animated Geo Maps', 'Tactile Yellow Highlighters', 'Historical Archive Pop-ins', 'Analog Paper Textures'],
    colorPalette: ['#FFF01F', '#000000', '#FFFFFF', '#1E293B'],
    bestFor: 'Complex topic breakdowns, journalism, geopolitical explainers',
    instagramUrl: 'https://www.instagram.com/voxdotcom/',
    youtubeUrl: 'https://www.youtube.com/@Vox',
    repoSkill: 'vox-style-editing'
  },
  {
    id: 'johnny-harris',
    name: 'Analog Collage Documentary',
    creator: 'Johnny Harris',
    category: 'Documentary',
    oneLiner: 'Documentary storytelling combining presenter footage, cinematic B-roll, 3D relief maps, and wax-pencil analog collage.',
    hookRetention: 'Cinematic cold open with fast presenter punch-in and 3D terrain flight.',
    signatureEffects: ['3D Relief Terrain', 'Wax Pencil Sketches', 'Fast Tape Pull Sound FX', 'Handheld Camera Micro-shakes'],
    colorPalette: ['#D97706', '#1E293B', '#F8FAFC', '#78350F'],
    bestFor: 'Investigative storytelling, geopolitics, history epics',
    instagramUrl: 'https://www.instagram.com/johnny.harris/',
    youtubeUrl: 'https://www.youtube.com/@johnnyharris',
    repoSkill: 'johnny-harris-style-editing'
  },
  {
    id: 'magnates-media',
    name: 'Cinematic Business Noir',
    creator: 'MagnatesMedia',
    category: 'Documentary',
    oneLiner: 'Cinematic business documentaries using dramatic pacing, 2.5D parallax photos, rim lighting, and orchestral trailer sound design.',
    hookRetention: 'Theatrical villain/titan hook with ominous cello riser and rim-lit photo cutout.',
    signatureEffects: ['2.5D Parallax 3D Cutouts', 'Dramatic Rim Lighting', 'Orchestral Drop Risers', 'Gold Foil Particle Shimmer'],
    colorPalette: ['#EAB308', '#0F172A', '#18181B', '#E2E8F0'],
    bestFor: 'Corporate empire teardowns, billionaire bios, fraud exposés',
    instagramUrl: 'https://www.instagram.com/magnatesmedia/',
    youtubeUrl: 'https://www.youtube.com/@MagnatesMedia',
    repoSkill: 'magnates-media-style-editing'
  },
  {
    id: 'iman-gadzhi',
    name: 'High-Retention Luxury Finance',
    creator: 'Iman Gadzhi',
    category: 'Viral Short-Form',
    oneLiner: 'Premium personal-brand videos with luxury lifestyle B-roll, 3D finance assets, film burns, and high-retention pacing.',
    hookRetention: '1.2s rapid cut sequence with analog film burns and bass rumble.',
    signatureEffects: ['Film Burns & Light Leaks', '3D Currency & Metal Props', 'Custom Helvetica Title Splices', 'Heavy 808 Bass Drops'],
    colorPalette: ['#10B981', '#09090B', '#E4E4E7', '#047857'],
    bestFor: 'Personal brands, high-ticket agency creators, finance content',
    instagramUrl: 'https://www.instagram.com/imangadzhi/',
    youtubeUrl: 'https://www.youtube.com/@ImanGadzhi',
    repoSkill: 'iman-gadzhi-style-editing'
  },
  {
    id: 'ali-abdaal',
    name: 'Bright Productivity & Pastel UI',
    creator: 'Ali Abdaal',
    category: 'Educational',
    oneLiner: 'Bright educational videos with talking-head footage, clean pastel UI cards, book highlights, and friendly UI audio.',
    hookRetention: 'Friendly conversational question paired with floating pastel card graphic.',
    signatureEffects: ['Floating Notion-style Cards', 'Pastel Book Highlights', 'Gentle Mechanical Keyboard Clicks', 'Soft Studio Warmth'],
    colorPalette: ['#38BDF8', '#FEF08A', '#F1F5F9', '#334155'],
    bestFor: 'Productivity advice, book summaries, student/knowledge creators',
    instagramUrl: 'https://www.instagram.com/aliabdaal/',
    youtubeUrl: 'https://www.youtube.com/@aliabdaal',
    repoSkill: 'ali-abdaal-style-editing'
  },
  {
    id: 'sam-kolder',
    name: 'Cinematic Travel & Match Cuts',
    creator: 'Sam Kolder',
    category: 'Cinematic Film',
    oneLiner: 'Cinematic travel filmmaking with seamless match cuts, speed ramping, directional whip pans, and teal-and-orange grading.',
    hookRetention: 'Physics-defying sky-dive match cut right into the beat drop.',
    signatureEffects: ['Speed Ramps (1000% to 50%)', 'Directional Whip Transitions', 'Drone Match Cuts', 'Teal & Orange Grade'],
    colorPalette: ['#06B6D4', '#F97316', '#0F172A', '#F8FAFC'],
    bestFor: 'Travel films, commercial brand anthems, luxury lifestyle',
    instagramUrl: 'https://www.instagram.com/kold/',
    youtubeUrl: 'https://www.youtube.com/@kold',
    repoSkill: 'sam-kolder-style-editing'
  },
  {
    id: 'kurzgesagt',
    name: '2D Cosmic Vector Animation',
    creator: 'Kurzgesagt',
    category: '3D & Motion',
    oneLiner: 'World-class 2D vector animation and science explainers with smooth cosmic scale zooms, duck characters, and orchestral synth scoring.',
    hookRetention: 'Cosmic existential dilemma zoom within the first 3 seconds.',
    signatureEffects: ['Cosmic Exponential Zooms', 'Vector Character Physics', 'Lush Gradient Space Backdrops', 'Synth Arpeggios'],
    colorPalette: ['#8B5CF6', '#EC4899', '#06B6D4', '#0F172A'],
    bestFor: 'Deep science, futurism, existential biology and physics',
    instagramUrl: 'https://www.instagram.com/kurzgesagt/',
    youtubeUrl: 'https://www.youtube.com/@kurzgesagt',
    repoSkill: 'kurzgesagt-style-editing'
  },
  {
    id: 'lemmino',
    name: 'Investigative Mystery Noir',
    creator: 'LEMMiNO',
    category: 'Documentary',
    oneLiner: 'Minimalist investigative documentaries with 3D wireframe spatial reconstructions, Swiss typography, and eerie ambient drone soundscapes.',
    hookRetention: 'Haunting audio clip with minimalist Swiss typographic layout on black.',
    signatureEffects: ['3D Monochromatic Wireframes', 'Swiss Grid Precision', 'Ambient Drone Pads', 'Archival Dossier Zoom'],
    colorPalette: ['#FAFAFA', '#18181B', '#71717A', '#09090B'],
    bestFor: 'True crime, historical mysteries, scientific enigmas',
    instagramUrl: 'https://www.instagram.com/lemminodotnet/',
    youtubeUrl: 'https://www.youtube.com/@LEMMiNO',
    repoSkill: 'lemmino-style-editing'
  },
  {
    id: 'arsacre',
    name: 'Kinetic 3D UI & Isometric Flow',
    creator: 'Arsacre',
    category: '3D & Motion',
    oneLiner: 'Advanced 3D motion design and kinetic explainer editing with custom 85% bezier easing curves, 3D device mockups, and isometric UI.',
    hookRetention: 'Dynamic 3D device flip that lands directly into the interface action.',
    signatureEffects: ['85% Bezier Easing Curves', 'Floating 3D Device Frames', 'Isometric UI Explosions', 'Tactile Click Foley'],
    colorPalette: ['#6366F1', '#A855F7', '#09090B', '#F8FAFC'],
    bestFor: 'SaaS product launches, tech hardware reviews, mobile UI reveal',
    instagramUrl: 'https://www.instagram.com/arsacre5/',
    youtubeUrl: 'https://www.youtube.com/@Arsacre',
    repoSkill: 'arsacre-style-editing'
  },
  {
    id: 'maximize',
    name: 'Hyper-Retention Viral Reels',
    creator: 'Maximize',
    category: 'Viral Short-Form',
    oneLiner: 'Hyper-retention viral short-form editing with punchy animated subtitles, dynamic zoom-whips, emojis, and continuous riser audio.',
    hookRetention: '0.8s direct-punch zoom with bold glowing text and SFX boom.',
    signatureEffects: ['Word-by-word Glowing Subtitles', 'Dynamic Scale Pulsing (100%->115%)', 'Riser Loops with Drop', 'Pop Culture B-roll'],
    colorPalette: ['#EF4444', '#FBBF24', '#000000', '#FFFFFF'],
    bestFor: 'TikTok, Instagram Reels, YouTube Shorts, viral creators',
    instagramUrl: 'https://www.instagram.com/bymaximise/',
    youtubeUrl: 'https://www.youtube.com/@bymaximise',
    repoSkill: 'maximize-style-editing'
  },
  {
    id: 'metro-media',
    name: 'Executive B2B Thought Leadership',
    creator: 'Metro Media House',
    category: 'Educational',
    oneLiner: 'Executive-level B2B thought leadership and podcast recuts with word-by-word opacity subtitles, authoritative lower-thirds, and broadcast audio.',
    hookRetention: 'High-status quote extracted with subtle highlight opacity typography.',
    signatureEffects: ['Word-by-Word Opacity Captions', 'Broadcast Lower Thirds', 'De-reverbed Broadcast Vocals', 'Subtle Ambient Room Tone'],
    colorPalette: ['#3B82F6', '#1E293B', '#F1F5F9', '#0F172A'],
    bestFor: 'Founders, VCs, enterprise podcast cutdowns, LinkedIn thought leaders',
    instagramUrl: 'https://www.instagram.com/metromediahouse/',
    youtubeUrl: 'https://www.youtube.com/@metromediahouse',
    repoSkill: 'metro-media-style-editing'
  },
  {
    id: 'gawx-art',
    name: 'Tactile Doodle & Kinetic Stop-Motion',
    creator: 'Gawx Art',
    category: '3D & Motion',
    oneLiner: 'Kinetic creative vlog and doodle art editing with frame-by-frame animations, 10fps stop-motion frame drops, and tactile Foley.',
    hookRetention: 'Doodle characters springing out of real sketchbooks with hand-drawn sound.',
    signatureEffects: ['10fps Framerate Drops', 'Hand-drawn Ink Splatters', 'Marker Squeak & Paper Ripping SFX', 'Color Glitches'],
    colorPalette: ['#EC4899', '#3B82F6', '#F59E0B', '#18181B'],
    bestFor: 'Creative artists, vloggers, animators, Gen-Z streetwear brands',
    instagramUrl: 'https://www.instagram.com/gawx_art/',
    youtubeUrl: 'https://www.youtube.com/@GawxArt',
    repoSkill: 'gawx-art-style-editing'
  }
];
