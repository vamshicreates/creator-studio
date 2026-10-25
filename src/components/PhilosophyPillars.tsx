import React from 'react';
import { motion } from 'motion/react';
import { PHILOSOPHY_PILLARS } from '../data/studioContent';

export const PhilosophyPillars: React.FC = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t-2 border-[#161616]/15 bg-[#F7F6F0]">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <span className="text-xs font-mono font-bold uppercase tracking-wider bg-[#161616] text-[#C8FF2E] px-3.5 py-1.5 rounded-full border border-[#161616]">
          // CORE PHILOSOPHY
        </span>
        <h2 className="text-4xl sm:text-6xl font-heading font-black uppercase text-[#161616] tracking-tight mt-3">
          THE 3 VALUE PILLARS.
        </h2>
        <p className="text-lg sm:text-xl font-heading font-bold italic text-[#161616] mt-2">
          People pay for value. Content is how you share it.
        </p>
      </div>

      {/* 3 Value Pillars Grid in Krackerz signature color cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {PHILOSOPHY_PILLARS.map((pillar, index) => (
          <motion.div
            key={pillar.number}
            whileHover={{ y: -4, rotate: index === 0 ? -1 : index === 1 ? 1 : -1 }}
            className="p-8 rounded-3xl border-2 border-[#161616] shadow-[6px_6px_0px_#161616] flex flex-col justify-between"
            style={{ backgroundColor: pillar.accent, color: pillar.textColor }}
          >
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="text-xs font-mono font-black uppercase tracking-wider opacity-80">
                  PILLAR {pillar.number}
                </span>
                <span className="w-8 h-8 rounded-full bg-[#161616] text-white flex items-center justify-center font-mono font-bold text-xs border border-white/20">
                  {pillar.number}
                </span>
              </div>

              <h3 className="text-3xl sm:text-4xl font-heading font-black uppercase tracking-tight mb-3">
                {pillar.title}
              </h3>

              <p className="text-sm sm:text-base font-medium leading-relaxed opacity-95">
                {pillar.description}
              </p>
            </div>

            <div className="mt-8 pt-4 border-t-2 border-current/20 font-mono text-xs font-bold uppercase">
              Ramanaidu Creators’ Studio
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
