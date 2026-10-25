export interface MentorProfile {
  id: string;
  name: string;
  role: string;
  organization: string;
  bio: string;
  quote?: string;
  badge?: string;
  image?: string;
}

export interface MasterclassItem {
  id: string;
  speaker: string;
  role: string;
  topic: string;
  dateNote: string;
  lectureNumber: string;
}

export interface LotEnvironment {
  id: string;
  code: string;
  name: string;
  subtitle: string;
  locationTag: string;
  description: string;
  specs: string[];
  accentColor: string;
  badge: string;
}

export interface CurriculumWeek {
  weekNumber: string;
  title: string;
  whatYouLearn: string;
  practicalExercise: string;
  youMake: string;
  gameOfTheWeek?: {
    title: string;
    description: string;
  };
}

export interface CurriculumPhase {
  phaseNumber: string;
  weeksSpan: string;
  title: string;
  description: string;
  weeks: CurriculumWeek[];
}

export interface AdmissionsProfile {
  id: string;
  number: string;
  title: string;
  summary: string;
  forYouIf: string;
  youLeaveWith: string;
}

export interface FAQItem {
  question: string;
  answer: string;
  category?: string;
}

export interface StickerItem {
  id: string;
  label: string;
  color: string; // Tailwind bg or hex
  textColor: string;
  rotation: number;
  initialX: number;
  initialY: number;
}
