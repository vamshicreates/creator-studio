import React from 'react';
import { motion } from 'motion/react';
import { MENTORS, MASTERCLASSES } from '../data/studioContent';
import { Award, GraduationCap, Sparkles } from 'lucide-react';

export const MentorsSection: React.FC = () => {
  return (
    <section id="mentors" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t-2 border-[#161616]/15">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-14">
        <span className="text-xs font-mono font-bold uppercase tracking-wider bg-[#F8330B] text-white px-3.5 py-1.5 rounded-full border border-[#161616]">
          // DIRECT MENTORSHIP & MASTERCLASSES
        </span>
        <h2 className="text-4xl sm:text-6xl font-heading font-black uppercase text-[#161616] tracking-tight mt-3">
          BRAINS BEHIND THE COHORT.
        </h2>
      </div>

      {/* 3 Lead Mentors Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
        {MENTORS.map((mentor, index) => {
          const bgColors = ['#FEFAE7', '#C8FF2E', '#C7CAFF'];
          const cardBg = bgColors[index % bgColors.length];

          return (
            <motion.div
              key={mentor.id}
              whileHover={{ y: -5, rotate: index === 0 ? -1 : index === 1 ? 1 : -1 }}
              style={{ backgroundColor: cardBg }}
              className="p-8 rounded-3xl border-2 border-[#161616] shadow-[6px_6px_0px_#161616] flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[11px] font-mono font-bold uppercase tracking-wider bg-[#161616] text-[#C8FF2E] px-3 py-1 rounded-full border border-[#161616]">
                    BRAIN 0{index + 1}
                  </span>
                  <Award className="w-5 h-5 text-[#161616]" />
                </div>

                <h3 className="text-2xl sm:text-3xl font-heading font-black uppercase text-[#161616] tracking-tight mb-2">
                  {mentor.name}
                </h3>
                <div className="text-xs font-mono font-bold text-[#F8330B] uppercase mb-1">
                  {mentor.role}
                </div>
                <div className="text-xs font-mono text-[#161616]/80 font-semibold">
                  {mentor.organization}
                </div>
              </div>

              <div className="mt-8 pt-4 border-t-2 border-[#161616]/20 font-mono text-[11px] font-bold text-[#161616] flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-[#F8330B]" />
                <span>Ramanaidu Studios Lot Residency</span>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Working Creator Masterclasses */}
      <div className="mb-8">
        <span className="text-xs font-mono font-bold uppercase tracking-wider bg-[#C7CAFF] text-[#161616] px-3.5 py-1.5 rounded-full border border-[#161616]">
          // WORKING CREATOR MASTERCLASSES
        </span>
        <h3 className="text-3xl sm:text-4xl font-heading font-black uppercase text-[#161616] tracking-tight mt-2">
          Working Creator Masterclasses
        </h3>
      </div>

      {/* 5 Masterclass Cards + Special Panel */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {MASTERCLASSES.map((item) => (
          <motion.div
            key={item.id}
            whileHover={{ y: -3 }}
            className="p-6 rounded-2xl bg-[#FEFAE7] border-2 border-[#161616] shadow-[3px_3px_0px_#161616] flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between font-mono text-xs font-bold text-[#646464] mb-3 pb-2 border-b border-[#161616]/15">
                <span>SESSION {item.number}</span>
                <GraduationCap className="w-4 h-4 text-[#F8330B]" />
              </div>
              <h4 className="text-xl font-heading font-black uppercase text-[#161616] tracking-tight mb-2">
                {item.speaker}
              </h4>
              <p className="text-xs font-mono text-[#303030] bg-white/70 p-3 rounded-xl border border-[#161616]/20">
                {item.note}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
