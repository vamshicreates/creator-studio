import React from 'react';

export const AnnouncementBar: React.FC = () => {
  const text = "COHORT ADMISSIONS OPEN** Ramanaidu Studios, Hyderabad · 12 Weeks · ";

  return (
    <div className="bg-[#161616] text-[#F7F6F0] py-2 px-4 overflow-hidden border-b-2 border-[#161616] select-none">
      <div className="animate-marquee flex items-center gap-8 whitespace-nowrap text-xs font-mono font-bold tracking-wider uppercase">
        {[text, text, text, text, text, text].map((t, idx) => (
          <div key={idx} className="flex items-center gap-6">
            <span className="text-[#C8FF2E] text-sm">★</span>
            <span className={idx % 2 === 0 ? 'text-[#F7F6F0]' : 'text-[#C8FF2E]'}>{t}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
