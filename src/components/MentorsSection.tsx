import React from 'react';
import { motion } from 'motion/react';
import { MENTORS, MASTERCLASSES } from '../data/studioContent';
import { Award, Sparkles, Quote, GraduationCap } from 'lucide-react';

export const MentorsSection: React.FC = () => {
  return (
    <section id="mentors" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t-2 border-[#161616]/15">
      {/* Mentorship Header */}
      <div className="text-center max-w-3xl mx-auto mb-14">
        <span className="text-xs font-mono font-bold uppercase tracking-wider bg-[#F8330B] text-white px-3 py-1 rounded-full border border-[#161616]">
          // DIRECT MENTORSHIP
        </span>
        <h2 className="text-3xl sm:text-5xl font-black uppercase text-[#161616] tracking-tight mt-3">
          LEARN FROM MINDS WHO BUILT <br />
          <span className="text-[#F8330B]">60 YEARS OF CINEMA.</span>
        </h2>
        <p className="text-sm sm:text-base font-medium text-[#303030] mt-3">
          Direct weekly review from leadership across Suresh Productions, digital network creators, and veteran storytelling directors on the Ramanaidu lot.
        </p>
      </div>

      {/* 3 Lead Mentors Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
        {MENTORS.map((mentor, index) => (
          <motion.div
            key={mentor.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="p-8 rounded-3xl bg-white border-2 border-[#161616] shadow-[5px_5px_0px_#161616] flex flex-col justify-between hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[7px_7px_0px_#161616] transition-all"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider bg-[#FEFAE7] text-[#161616] px-2.5 py-1 rounded-full border border-[#161616]">
                  {mentor.badge}
                </span>
                <Award className="w-5 h-5 text-[#F8330B]" />
              </div>

              <h3 className="text-2xl font-black uppercase text-[#161616] tracking-tight mb-1">
                {mentor.name}
              </h3>
              <div className="text-xs font-mono font-bold text-[#F8330B] uppercase mb-1">
                {mentor.role}
              </div>
              <div className="text-xs font-mono text-[#646464] mb-5">
                {mentor.organization}
              </div>

              <p className="text-xs sm:text-sm font-medium text-[#303030] leading-relaxed mb-6">
                {mentor.bio}
              </p>
            </div>

            {mentor.quote && (
              <div className="p-4 rounded-2xl bg-[#FEFAE7] border-2 border-[#161616] text-xs font-medium text-[#161616] relative">
                <Quote className="w-3.5 h-3.5 text-[#F8330B] mb-1" />
                <span className="italic">“{mentor.quote}”</span>
              </div>
            )}
          </motion.div>
        ))}
      </div>

      {/* Masterclasses from Working Creators Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8">
        <div>
          <span className="text-xs font-mono font-bold uppercase tracking-wider bg-[#C7CAFF] text-[#161616] px-3 py-1 rounded-full border border-[#161616]">
            // WORKING CREATOR MASTERCLASSES
          </span>
          <h3 className="text-2xl sm:text-4xl font-black uppercase text-[#161616] tracking-tight mt-2">
            FIVE SESSIONS. REAL PLAYBOOKS.
          </h3>
        </div>
        <p className="text-xs sm:text-sm font-mono text-[#646464] font-bold mt-2 sm:mt-0">
          Distribution · Studio Lighting · Monetization · Micro-Pacing
        </p>
      </div>

      {/* 5 Masterclass Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {MASTERCLASSES.map((item) => (
          <div
            key={item.id}
            className="p-5 rounded-2xl bg-[#FEFAE7] border-2 border-[#161616] shadow-[3px_3px_0px_#161616] flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between font-mono text-xs font-bold text-[#646464] mb-2 pb-2 border-b border-[#161616]/15">
                <span>LECTURE {item.lectureNumber} OF 05</span>
                <span className="text-[#F8330B]">★</span>
              </div>
              <h4 className="text-lg font-black uppercase text-[#161616] tracking-tight mb-1">
                {item.speaker}
              </h4>
              <div className="text-xs font-mono text-[#161616] font-bold mb-3">
                {item.role}
              </div>
              <div className="text-xs font-medium text-[#303030] leading-relaxed mb-4">
                Topic: <span className="font-bold text-[#161616]">{item.topic}</span>
              </div>
            </div>

            <div className="flex items-center gap-1.5 text-[11px] font-mono font-bold text-[#580D14] bg-white/70 px-2.5 py-1 rounded-lg border border-[#161616]/30">
              <GraduationCap className="w-3.5 h-3.5" />
              <span>{item.dateNote}</span>
            </div>
          </div>
        ))}

        {/* Bonus Q&A Session Card */}
        <div className="p-5 rounded-2xl bg-[#C8FF2E] border-2 border-[#161616] shadow-[3px_3px_0px_#161616] flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between font-mono text-xs font-bold text-[#161616] mb-2 pb-2 border-b border-[#161616]/30">
              <span>SPECIAL SESSION</span>
              <Sparkles className="w-3.5 h-3.5" />
            </div>
            <h4 className="text-lg font-black uppercase text-[#161616] tracking-tight mb-1">
              Demo Day Pitch Panel
            </h4>
            <div className="text-xs font-mono text-[#161616] font-bold mb-3">
              Studio Executives & Digital Networks
            </div>
            <div className="text-xs font-medium text-[#161616] leading-relaxed mb-4">
              Present your capstone video & media enterprise model directly to industry decision-makers on the Ramanaidu lot.
            </div>
          </div>
          <div className="text-[11px] font-mono font-bold uppercase text-[#161616] bg-black/10 px-2.5 py-1 rounded-lg border border-[#161616]/30">
            ★ Early Apr 2027
          </div>
        </div>
      </div>
    </section>
  );
};
