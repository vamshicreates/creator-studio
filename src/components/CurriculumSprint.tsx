import React from 'react';
import { motion } from 'motion/react';
import { CURRICULUM_PHASES } from '../data/studioContent';
import { Sparkles } from 'lucide-react';

export const CurriculumSprint: React.FC = () => {
  return (
    <section id="curriculum" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t-2 border-[#161616]/15">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-14">
        <span className="text-xs font-mono font-bold uppercase tracking-wider bg-[#F8330B] text-white px-3.5 py-1.5 rounded-full border border-[#161616]">
          // 12-WEEK CURRICULUM SPRINT
        </span>
        <h2 className="text-4xl sm:text-6xl font-heading font-black uppercase text-[#161616] tracking-tight mt-3">
          12-Week Curriculum Sprint.
        </h2>
        <p className="text-lg sm:text-xl font-heading font-bold italic text-[#161616] mt-2">
          Students graduate with work they made, not slides.
        </p>
      </div>

      {/* 4 Phases Bento Grid in Krackerz Colors */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {CURRICULUM_PHASES.map((phase, idx) => (
          <motion.div
            key={phase.number}
            whileHover={{ y: -4, rotate: idx % 2 === 0 ? -1 : 1 }}
            className="p-8 rounded-3xl border-2 border-[#161616] shadow-[6px_6px_0px_#161616] flex flex-col justify-between"
            style={{ backgroundColor: phase.accent }}
          >
            <div>
              <div className="flex items-center justify-between font-mono text-xs font-bold text-[#161616] mb-4 pb-3 border-b-2 border-[#161616]/15">
                <span className="bg-[#161616] text-[#C8FF2E] px-3 py-1 rounded-full font-black">
                  {phase.tag}
                </span>
                <span className="font-black text-sm">{phase.weeks}</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-heading font-black uppercase text-[#161616] tracking-tight mb-2">
                Phase {phase.number} ({phase.weeks}) — {phase.title}
              </h3>
            </div>

            <div className="mt-8 pt-4 border-t-2 border-[#161616]/20 font-mono text-xs font-bold text-[#161616] flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-[#F8330B]" />
              <span>Output-First Studio Production</span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
