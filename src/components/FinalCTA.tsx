import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Clapperboard } from 'lucide-react';

interface FinalCTAProps {
  onOpenApply: () => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({ onOpenApply }) => {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#FEFAE7] border-t-2 border-[#161616] relative overflow-hidden">
      {/* Background Star Emblems */}
      <div className="absolute top-8 left-8 text-7xl text-[#161616]/10 font-mono font-bold select-none pointer-events-none">
        ★
      </div>
      <div className="absolute bottom-8 right-8 text-8xl text-[#161616]/10 font-mono font-bold select-none pointer-events-none">
        ★
      </div>

      <div className="max-w-5xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {/* Eyebrow */}
          <div className="inline-block bg-[#161616] text-[#C8FF2E] px-4 py-1.5 rounded-full text-xs font-mono font-bold uppercase tracking-wider mb-8 border-2 border-[#161616]">
            ★ COHORT 01 ADMISSIONS OPEN ★
          </div>

          {/* Krackerz Giant Staggered Headline */}
          <h2 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-heading font-black uppercase text-[#161616] tracking-tight leading-[0.92] mb-6">
            <span>BE THE </span>
            <span className="inline-block transform rotate-3 px-5 sm:px-7 py-1 rounded-full bg-[#C8FF2E] text-[#161616] border-2 border-[#161616] shadow-[4px_4px_0px_#161616] font-serif lowercase italic">
              first
            </span>
            <br />
            <span>TO CRACK THE CREATOR CODE.</span>
          </h2>

          <p className="max-w-2xl mx-auto text-xl sm:text-3xl font-heading font-bold text-[#161616] leading-tight mb-10">
            Don’t just create content. <span className="text-[#F8330B]">Learn to create value.</span>
          </p>

          {/* Action Button */}
          <motion.button
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.98, y: 1 }}
            onClick={onOpenApply}
            className="inline-flex items-center gap-3 px-10 py-5 rounded-full font-heading font-black uppercase tracking-wider text-base sm:text-xl text-white bg-[#161616] hover:bg-[#C8FF2E] hover:text-[#161616] border-2 border-[#161616] shadow-[6px_6px_0px_#161616] hover:shadow-[8px_8px_0px_#161616] transition-all cursor-pointer"
          >
            <Clapperboard className="w-6 h-6 text-[#C8FF2E]" />
            <span>APPLY FOR COHORT 01</span>
            <ArrowRight className="w-6 h-6" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};
