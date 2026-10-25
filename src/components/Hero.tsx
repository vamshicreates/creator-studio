import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Film, Sparkles, CheckCircle2 } from 'lucide-react';
import { STUDIO_METRICS } from '../data/studioContent';

interface HeroProps {
  onOpenApply: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenApply }) => {
  const marqueePills = [
    { text: 'Stage 01 Multi-Cam Soundstage', color: 'bg-[#C8FF2E] text-[#161616]' },
    { text: 'DaVinci Color & Micro-Pacing', color: 'bg-[#C7CAFF] text-[#161616]' },
    { text: '60 Years of Cinema Storytelling', color: 'bg-[#FEFAE7] text-[#161616]' },
    { text: 'Zero Upfront Cost to Apply', color: 'bg-[#C0ECBF] text-[#161616]' },
    { text: 'The ₹1 Lakh Creator Challenge', color: 'bg-[#F0BEFA] text-[#161616]' },
    { text: 'Guinness World Record Lot', color: 'bg-[#F8330B] text-white' },
    { text: 'Direct Suresh Babu & Rana Mentorship', color: 'bg-[#161616] text-[#C8FF2E]' },
    { text: 'Audience Psychology Over Hype', color: 'bg-[#EDEBE1] text-[#161616]' }
  ];

  return (
    <section className="relative pt-12 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden bg-[#F7F6F0]">
      {/* Background Subtle Grid Texture */}
      <div className="absolute inset-0 bg-[radial-gradient(#161616_1px,transparent_1px)] [background-size:28px_28px] opacity-[0.07] pointer-events-none" />

      <div className="relative max-w-6xl mx-auto text-center z-10">
        {/* Eyebrow Pill Badge */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FEFAE7] border-2 border-[#161616] shadow-[2px_2px_0px_#161616] text-xs font-mono font-bold uppercase tracking-wider mb-8"
        >
          <span className="flex h-2.5 w-2.5 rounded-full bg-[#F8330B] animate-pulse" />
          <span>RAMANAIDU STUDIOS</span>
          <span className="text-[#646464]">•</span>
          <span className="text-[#161616]">60 YEARS OF CINEMA MEETS CREATOR BOOM</span>
        </motion.div>

        {/* Massive Staggered Krackerz Headline */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-8"
        >
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black uppercase tracking-tight text-[#161616] leading-[0.95]">
            <span className="block">FOR THE CRAFT</span>
            <span className="flex items-center justify-center gap-3 sm:gap-4 my-1 sm:my-2">
              <span>THEY</span>
              <span className="inline-block transform -rotate-3 px-4 sm:px-6 py-0.5 sm:py-1 rounded-full bg-[#F8330B] text-white italic font-serif lowercase border-2 border-[#161616] shadow-[3px_3px_0px_#161616]">
                don't
              </span>
              <span>TEACH</span>
            </span>
            <span className="block text-[#161616]">IN FILM SCHOOLS</span>
          </h1>
        </motion.div>

        {/* Supporting Narrative */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-3xl mx-auto text-base sm:text-lg md:text-xl font-medium text-[#303030] leading-relaxed mb-10"
        >
          <span className="font-bold text-[#161616]">Algorithms change every quarter. Storytelling has lasted 60 years.</span>
          <br className="hidden sm:inline" />
          {' '}12 weeks inside a working Guinness World Record film lot in Jubilee Hills to turn creative ambition into high-earning media businesses.
        </motion.p>

        {/* Action Button Group */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
        >
          <button
            onClick={onOpenApply}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full font-extrabold uppercase tracking-wider text-sm sm:text-base text-white bg-[#161616] hover:bg-[#C8FF2E] hover:text-[#161616] border-2 border-[#161616] shadow-[4px_4px_0px_#161616] hover:shadow-[6px_6px_0px_#161616] transition-all cursor-pointer active:translate-x-0.5 active:translate-y-0.5"
          >
            <span>Apply First, Pay After Selection</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <a
            href="#program"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-full font-bold uppercase tracking-wider text-sm sm:text-base text-[#161616] bg-[#FEFAE7] hover:bg-[#EDEBE1] border-2 border-[#161616] shadow-[3px_3px_0px_#161616] transition-all cursor-pointer"
          >
            <Film className="w-4 h-4 text-[#F8330B]" />
            <span>Explore 12-Week Program</span>
          </a>
        </motion.div>

        {/* Verification Guarantee Stamp */}
        <div className="flex flex-wrap items-center justify-center gap-6 text-xs font-mono font-bold uppercase tracking-wide text-[#580D14] mb-14">
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-[#F8330B]" />
            <span>Zero Upfront Application Cost</span>
          </div>
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-[#F8330B]" />
            <span>Shoot On Physical Soundstages</span>
          </div>
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-[#F8330B]" />
            <span>Direct Studio Head Mentorship</span>
          </div>
        </div>
      </div>

      {/* Infinite Horizontal Running Marquee Ribbon */}
      <div className="w-full py-4 border-y-2 border-[#161616] bg-[#FEFAE7] overflow-hidden select-none">
        <div className="animate-marquee flex items-center gap-4">
          {[...marqueePills, ...marqueePills].map((pill, idx) => (
            <div
              key={idx}
              className={`flex items-center gap-2 px-4 py-2 rounded-full border-2 border-[#161616] shadow-[2px_2px_0px_#161616] font-mono text-xs font-bold uppercase whitespace-nowrap ${pill.color}`}
            >
              <Sparkles className="w-3 h-3" />
              <span>{pill.text}</span>
            </div>
          ))}
        </div>
      </div>

      {/* 4 Heritage Metrics Cards */}
      <div className="max-w-6xl mx-auto px-4 mt-12">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {STUDIO_METRICS.map((metric, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl bg-white border-2 border-[#161616] shadow-[4px_4px_0px_#161616] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_#161616] transition-all"
            >
              <div className="text-3xl sm:text-4xl font-black text-[#161616] font-mono flex items-baseline gap-1">
                {metric.value}
                <span className="text-xs uppercase font-mono font-bold text-[#F8330B]">★</span>
              </div>
              <div className="text-xs sm:text-sm font-bold uppercase tracking-tight text-[#161616] mt-1">
                {metric.label}
              </div>
              <div className="text-[11px] font-mono text-[#646464] mt-0.5">
                {metric.subtext}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
