import React from 'react';
import { motion } from 'motion/react';
import { Video, Flame } from 'lucide-react';

export const MonographSection: React.FC = () => {
  return (
    <section id="program" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Krackerz "TAUGHT CRAFT. NOT CASH." Style Display Header */}
      <div className="text-center max-w-4xl mx-auto mb-14 relative">
        <span className="text-xs font-mono font-bold uppercase tracking-wider bg-[#161616] text-[#C8FF2E] px-3.5 py-1.5 rounded-full border border-[#161616]">
          // THE INDUSTRY REALITY
        </span>
        <div className="relative mt-4 mb-2">
          <h2 className="text-4xl sm:text-6xl md:text-7xl font-heading font-black uppercase text-[#161616] tracking-tight leading-[0.95]">
            COLLEGES TAUGHT THEORY. <br />
            <span className="text-[#161616]">NOT RETENTION OR REVENUE.</span>
          </h2>

          {/* Tilted Stamp Badge Overlaid like Krackerz NOT CASH */}
          <div className="hidden sm:inline-block absolute -bottom-4 right-10 transform rotate-[-4deg] bg-[#161616] text-[#C8FF2E] border-4 border-white px-5 py-1 rounded-2xl shadow-xl font-heading font-black text-xl sm:text-2xl tracking-wide uppercase">
            NOT RETENTION OR REVENUE
          </div>
        </div>
      </div>

      {/* The Producer's Monologue Card */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="rounded-3xl bg-[#FEFAE7] border-2 border-[#161616] shadow-[6px_6px_0px_#161616] p-8 sm:p-12 mb-12 relative overflow-hidden"
      >
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start justify-between">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-xs font-mono font-bold uppercase tracking-wider bg-[#F8330B] text-white px-3 py-1 rounded-full border border-[#161616]">
                // THE PRODUCER’S MONOLOGUE
              </span>
              <span className="text-xs font-mono text-[#646464] font-bold">RAMANAIDU STUDIOS</span>
            </div>

            <blockquote className="text-2xl sm:text-3xl md:text-4xl font-heading font-black uppercase text-[#161616] tracking-tight leading-tight mb-6">
              “Hence we have pioneered a curriculum in content creation for the new age digitalpreneurs. Today, individual creators are the new studios.”
            </blockquote>

            <div className="pt-6 border-t-2 border-[#161616]/20">
              <div className="text-xl font-heading font-black uppercase text-[#161616]">
                D. Suresh Babu
              </div>
              <div className="text-xs font-mono text-[#580D14] font-bold">
                Managing Director, Suresh Productions & Ramanaidu Studios
              </div>
              <div className="text-[11px] font-mono text-[#646464]">
                Guinness World Record Producer · 60 Years of Cinema Institution Building
              </div>
            </div>
          </div>

          {/* Right Stamp Badges */}
          <div className="w-full lg:w-72 flex-shrink-0 flex flex-col gap-3">
            <div className="p-5 rounded-2xl bg-[#C8FF2E] border-2 border-[#161616] shadow-[3px_3px_0px_#161616]">
              <div className="text-xs font-mono font-bold uppercase tracking-wider text-[#161616]/75 mb-1">
                Guinness Record
              </div>
              <div className="text-2xl font-heading font-black">150+ FILMS</div>
              <div className="text-xs font-medium text-[#161616] mt-1">
                13 Indian languages produced on these grounds.
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-[#C7CAFF] border-2 border-[#161616] shadow-[3px_3px_0px_#161616]">
              <div className="text-xs font-mono font-bold uppercase tracking-wider text-[#161616]/75 mb-1">
                Creator Economy
              </div>
              <div className="text-2xl font-heading font-black">₹25,000 CR+</div>
              <div className="text-xs font-medium text-[#161616] mt-1">
                Projected Indian creator market valuation by 2028.
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Krackerz Split Bento Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <motion.div
          whileHover={{ y: -3 }}
          className="p-8 rounded-3xl bg-[#C7CAFF] border-2 border-[#161616] shadow-[5px_5px_0px_#161616] flex flex-col justify-between"
        >
          <div>
            <div className="w-10 h-10 rounded-xl bg-[#161616] text-[#C7CAFF] flex items-center justify-center border-2 border-[#161616] mb-5">
              <Video className="w-5 h-5" />
            </div>
            <h3 className="text-2xl font-heading font-black uppercase text-[#161616] tracking-tight mb-2">
              BEYOND THE TIMELINE // CINEMA RIGOR
            </h3>
            <p className="text-sm font-medium text-[#161616] leading-relaxed mb-6">
              Creator soft skills and production discipline aren’t taught in social media theory classrooms. Learn how soundstages, call sheets, and lighting control audience attention.
            </p>
          </div>
          <div className="pt-4 border-t-2 border-[#161616]/20 font-mono text-xs font-bold uppercase text-[#161616]">
            Stage 01 · Shure SM7B · Sony FX Rigs
          </div>
        </motion.div>

        <motion.div
          whileHover={{ y: -3 }}
          className="p-8 rounded-3xl bg-[#C0ECBF] border-2 border-[#161616] shadow-[5px_5px_0px_#161616] flex flex-col justify-between"
        >
          <div>
            <div className="w-10 h-10 rounded-xl bg-[#161616] text-[#C0ECBF] flex items-center justify-center border-2 border-[#161616] mb-5">
              <Flame className="w-5 h-5" />
            </div>
            <h3 className="text-2xl font-heading font-black uppercase text-[#161616] tracking-tight mb-2">
              THE ALGORITHM DOESN’T WAIT // 60 YEARS OF STORY
            </h3>
            <p className="text-sm font-medium text-[#161616] leading-relaxed mb-6">
              Feeds change every 30 days. But curiosity hooks, tension arcs, and audience payoffs have held viewers for 60 years across 150 blockbusters.
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
