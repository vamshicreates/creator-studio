import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

interface AnnouncementBarProps {
  onOpenApply: () => void;
}

export const AnnouncementBar: React.FC<AnnouncementBarProps> = ({ onOpenApply }) => {
  const items = [
    'ISSUE 01 // COHORT ADMISSIONS OPEN',
    'RAMANAIDU STUDIOS, HYDERABAD',
    '12 WEEKS',
    'ZERO UPFRONT COST',
    'APPLY FIRST, PAY AFTER SELECTION',
    '60 YEARS OF CINEMA MEETS THE CREATOR BOOM'
  ];

  return (
    <div className="bg-[#161616] text-[#F7F6F0] border-b-2 border-[#161616] py-2 px-4 overflow-hidden relative select-none">
      <div className="flex items-center">
        {/* Infinite scrolling ticker */}
        <div className="animate-marquee whitespace-nowrap flex items-center gap-8 text-xs font-mono font-medium tracking-wide">
          {[...items, ...items, ...items].map((item, idx) => (
            <span key={idx} className="flex items-center gap-4">
              <span className="text-[#C8FF2E]">★</span>
              <span className={idx % 2 === 0 ? 'text-[#F7F6F0]' : 'text-[#C7CAFF]'}>{item}</span>
            </span>
          ))}
        </div>
      </div>
      
      {/* Quick click pill for desktop */}
      <button
        onClick={onOpenApply}
        className="hidden lg:flex absolute right-4 top-1/2 -translate-y-1/2 items-center gap-1.5 bg-[#C8FF2E] text-[#161616] font-bold text-[11px] px-3 py-0.5 rounded-full border border-[#161616] hover:bg-[#F8330B] hover:text-white transition-colors cursor-pointer"
      >
        <Sparkles className="w-3 h-3" />
        <span>Cohort 01 Apply</span>
        <ArrowRight className="w-3 h-3" />
      </button>
    </div>
  );
};
