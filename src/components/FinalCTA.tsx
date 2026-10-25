import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Sparkles, Clapperboard } from 'lucide-react';

interface FinalCTAProps {
  onOpenApply: () => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({ onOpenApply }) => {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#FEFAE7] border-t-2 border-[#161616] relative overflow-hidden">
      {/* Background Subtle Star Stamps */}
      <div className="absolute top-8 left-8 text-6xl text-[#161616]/10 font-mono font-bold select-none pointer-events-none">
        ★
      </div>
      <div className="absolute bottom-8 right-8 text-7xl text-[#161616]/10 font-mono font-bold select-none pointer-events-none">
        ★
      </div>

      <div className="max-w-5xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {/* Top Pill Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#161616] text-[#C8FF2E] border-2 border-[#161616] text-xs font-mono font-bold uppercase tracking-wider mb-6">
            <Sparkles className="w-3.5 h-3.5" />
            <span>INAUGURAL COHORT 01 · RAMANAIDU STUDIOS</span>
          </div>

          {/* Giant Staggered Headline */}
          <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black uppercase text-[#161616] tracking-tight leading-[0.95] mb-6">
            <span>BE THE </span>
            <span className="inline-block transform rotate-2 px-4 py-1 rounded-full bg-[#C8FF2E] text-[#161616] border-2 border-[#161616] shadow-[3px_3px_0px_#161616] font-serif lowercase italic">
              first
            </span>
            <br />
            <span>TO KRACK THE CREATOR CODE.</span>
          </h2>

          <p className="max-w-2xl mx-auto text-base sm:text-xl font-medium text-[#303030] leading-relaxed mb-10">
            Don’t just create content. <span className="font-bold text-[#161616]">Learn to create value.</span>
            <br className="hidden sm:inline" />
            {' '}12 weeks of creator business mastery, real soundstage production, and capstone launch on the Ramanaidu lot.
          </p>

          {/* Main Action Pill */}
          <button
            onClick={onOpenApply}
            className="inline-flex items-center gap-3 px-10 py-5 rounded-full font-black uppercase tracking-wider text-base sm:text-lg text-white bg-[#161616] hover:bg-[#C8FF2E] hover:text-[#161616] border-2 border-[#161616] shadow-[6px_6px_0px_#161616] hover:shadow-[8px_8px_0px_#161616] transition-all cursor-pointer active:translate-x-1 active:translate-y-1"
          >
            <Clapperboard className="w-5 h-5 text-[#C8FF2E]" />
            <span>Apply for Cohort 01 · Zero Upfront Cost</span>
            <ArrowRight className="w-5 h-5" />
          </button>

          <div className="mt-4 text-xs font-mono font-bold text-[#646464]">
            Applications close 30 Nov 2026 · Takes ~5 minutes
          </div>
        </motion.div>
      </div>
    </section>
  );
};
