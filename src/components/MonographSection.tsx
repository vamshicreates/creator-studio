import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Video, Flame } from 'lucide-react';

interface MonographSectionProps {
  onOpenApply: () => void;
}

export const MonographSection: React.FC<MonographSectionProps> = ({ onOpenApply }) => {
  return (
    <section id="program" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Producer Monograph Card */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="rounded-3xl bg-[#FEFAE7] border-2 border-[#161616] shadow-[6px_6px_0px_#161616] p-6 sm:p-10 lg:p-12 mb-16 relative overflow-hidden"
      >
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start justify-between">
          {/* Left Column: Monograph Text */}
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-[11px] font-mono font-bold uppercase tracking-wider bg-[#F8330B] text-white px-3 py-1 rounded-full border border-[#161616]">
                // THE PRODUCER’S MONOGRAPH
              </span>
              <span className="text-xs font-mono text-[#646464] font-semibold">HYDERABAD, 1964–2026</span>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold uppercase text-[#161616] tracking-tight leading-tight mb-6">
              “Hence we have pioneered a curriculum in content creation for the new age digitalpreneurs.”
            </h2>

            <div className="space-y-4 text-sm sm:text-base text-[#303030] leading-relaxed font-medium">
              <p>
                Indian cinema has spent sixty years understanding the architecture of audience attention, story development, and sustainable production value. Today, individual creators and brand builders are the new studios.
              </p>
              <p>
                We built Creators’ Studio to open our soundstages, story rooms, and post-production facilities—giving the new generation of creators the discipline, storytelling architecture, and monetization models to build enduring media enterprises.
              </p>
            </div>

            {/* Author Credit */}
            <div className="mt-8 pt-6 border-t-2 border-[#161616]/20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <div className="text-lg font-black uppercase text-[#161616] tracking-tight">D. Suresh Babu</div>
                <div className="text-xs font-mono text-[#580D14] font-bold">
                  Managing Director, Suresh Productions & Ramanaidu Studios
                </div>
                <div className="text-[11px] font-mono text-[#646464]">
                  Guinness World Record Producer · 60 Years of Cinema Institution Building
                </div>
              </div>

              <button
                onClick={onOpenApply}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#161616] text-[#C8FF2E] text-xs font-extrabold uppercase border-2 border-[#161616] shadow-[2px_2px_0px_#161616] hover:bg-[#C8FF2E] hover:text-[#161616] transition-colors cursor-pointer"
              >
                <span>View Admissions for Cohort 01</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Right Column: Historical Stamp Badge */}
          <div className="w-full lg:w-72 flex-shrink-0 flex flex-col gap-3">
            <div className="p-5 rounded-2xl bg-[#C8FF2E] border-2 border-[#161616] shadow-[3px_3px_0px_#161616] text-[#161616]">
              <div className="text-xs font-mono font-bold uppercase tracking-wider text-[#161616]/80 mb-1">
                Guinness World Record
              </div>
              <div className="text-2xl font-black font-mono">150+ FILMS</div>
              <div className="text-xs font-medium mt-1">Across 13 Indian languages produced on these grounds.</div>
            </div>

            <div className="p-5 rounded-2xl bg-[#C7CAFF] border-2 border-[#161616] shadow-[3px_3px_0px_#161616] text-[#161616]">
              <div className="text-xs font-mono font-bold uppercase tracking-wider text-[#161616]/80 mb-1">
                Industry Valuation
              </div>
              <div className="text-2xl font-black font-mono">₹25,000 CR+</div>
              <div className="text-xs font-medium mt-1">Projected Indian creator economy market valuation by 2028.</div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Krackerz "TAUGHT CRAFT. NOT CASH" Style Contrast Bento */}
      <div className="text-center max-w-3xl mx-auto mb-10">
        <span className="text-xs font-mono font-bold uppercase tracking-wider bg-[#161616] text-white px-3 py-1 rounded-full border border-[#161616]">
          // THE INDUSTRY REALITY
        </span>
        <h2 className="text-3xl sm:text-5xl font-black uppercase text-[#161616] tracking-tight mt-3">
          COLLEGES TAUGHT THEORY. <br />
          <span className="text-[#F8330B]">NOT RETENTION OR REVENUE.</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Contrast Card 1 */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="p-8 rounded-3xl bg-[#C7CAFF] border-2 border-[#161616] shadow-[5px_5px_0px_#161616] flex flex-col justify-between"
        >
          <div>
            <div className="w-10 h-10 rounded-xl bg-[#161616] text-[#C7CAFF] flex items-center justify-center border-2 border-[#161616] mb-5">
              <Video className="w-5 h-5" />
            </div>
            <h3 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-[#161616] mb-3">
              BEYOND THE TIMELINE // CINEMA RIGOR
            </h3>
            <p className="text-sm text-[#161616] font-medium leading-relaxed mb-6">
              Creators’ soft skills and production discipline aren’t taught in social media classrooms. How soundstages control attention, how call sheets eliminate friction, and how cinema lighting commands respect across feeds.
            </p>
          </div>
          <div className="pt-4 border-t-2 border-[#161616]/20 font-mono text-xs font-bold uppercase text-[#161616]">
            Stage 01 · Shure SM7B · Sony FX Rigs
          </div>
        </motion.div>

        {/* Contrast Card 2 */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="p-8 rounded-3xl bg-[#C0ECBF] border-2 border-[#161616] shadow-[5px_5px_0px_#161616] flex flex-col justify-between"
        >
          <div>
            <div className="w-10 h-10 rounded-xl bg-[#161616] text-[#C0ECBF] flex items-center justify-center border-2 border-[#161616] mb-5">
              <Flame className="w-5 h-5" />
            </div>
            <h3 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-[#161616] mb-3">
              THE ALGORITHM DOESN’T WAIT // 60 YEARS OF STORY
            </h3>
            <p className="text-sm text-[#161616] font-medium leading-relaxed mb-6">
              Platforms change their feeds every quarter. Creators are pressured to reinvent themselves. But the psychological architecture of story—curiosity hooks, tension arcs, and viewer payoffs—has worked for 60 years.
            </p>
          </div>
          <div className="pt-4 border-t-2 border-[#161616]/20 font-mono text-xs font-bold uppercase text-[#161616]">
            Audience Psychology · Niche Validation · Direct Monetization
          </div>
        </motion.div>
      </div>
    </section>
  );
};
