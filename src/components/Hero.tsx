import React from 'react';
import { motion } from 'motion/react';
import { Film, Sparkles } from 'lucide-react';
import { HERITAGE_METRICS } from '../data/studioContent';

interface HeroProps {
  onOpenApply: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenApply }) => {
  const tickerPills = [
    { text: '60 Years of Cinema Storytelling', color: 'bg-[#C8FF2E] text-[#161616]', rot: '-3deg' },
    { text: 'Stage 01 Multi-Cam Soundstage', color: 'bg-[#C7CAFF] text-[#161616]', rot: '2.5deg' },
    { text: 'DaVinci Resolve Micro-Pacing', color: 'bg-[#FEFAE7] text-[#161616]', rot: '-2deg' },
    { text: 'Zero Upfront Cost to Apply', color: 'bg-[#C0ECBF] text-[#161616]', rot: '3deg' },
    { text: 'The ₹1 Lakh Creator Challenge', color: 'bg-[#F0BEFA] text-[#161616]', rot: '-3.5deg' },
    { text: 'Guinness World Record Lot', color: 'bg-[#F8330B] text-white', rot: '2deg' },
    { text: 'Direct Suresh Babu & Rana Mentorship', color: 'bg-[#161616] text-[#C8FF2E]', rot: '-2.5deg' }
  ];

  const wordContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.15
      }
    }
  };

  const wordItemVariants = {
    hidden: {
      opacity: 0,
      y: 28,
      rotateX: 85
    },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        type: 'spring' as const,
        damping: 18,
        stiffness: 140
      }
    }
  };

  return (
    <section className="relative pt-12 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden bg-[#F7F6F0]">
      {/* Background Subtle Dot Grid */}
      <div className="absolute inset-0 bg-[radial-gradient(#161616_1px,transparent_1px)] [background-size:28px_28px] opacity-[0.05] pointer-events-none" />

      <div className="relative max-w-6xl mx-auto text-center z-10">
        {/* Eyebrow Stamp Badge (Krackerz Skewed Badge Style) */}
        <motion.div
          initial={{ opacity: 0, y: 15, rotate: -2 }}
          animate={{ opacity: 1, y: 0, rotate: -1 }}
          transition={{ duration: 0.5, type: 'spring', damping: 20 }}
          className="inline-block px-5 py-2 rounded-xl bg-[#161616] border-2 border-white shadow-[0px_4px_12px_rgba(0,0,0,0.18)] mb-8"
        >
          <span className="text-xs sm:text-sm font-mono font-black uppercase tracking-wider text-[#C8FF2E] flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#F8330B] animate-pulse" />
            <span>RAMANAIDU STUDIOS // 60 YEARS OF CINEMA MEETS CREATOR BOOM</span>
          </span>
        </motion.div>

        {/* Massive 3D Staggered Heading (Krackerz Signature Highway Motel Sans) */}
        <motion.div
          variants={wordContainerVariants}
          initial="hidden"
          animate="visible"
          style={{ perspective: 1200 }}
          className="mb-8"
        >
          <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-heading font-black uppercase text-[#161616] tracking-tight leading-[0.92]">
            {/* Line 1: FOR THE CRAFT */}
            <div className="flex items-center justify-center gap-3 sm:gap-5 flex-wrap">
              <motion.span variants={wordItemVariants} className="inline-block">FOR</motion.span>
              <motion.span variants={wordItemVariants} className="inline-block">THE</motion.span>
              <motion.span variants={wordItemVariants} className="inline-block">CRAFT</motion.span>
            </div>

            {/* Line 2: THEY don't TEACH */}
            <div className="flex items-center justify-center gap-3 sm:gap-5 my-1 sm:my-2 flex-wrap">
              <motion.span variants={wordItemVariants} className="inline-block">THEY</motion.span>
              <motion.span
                variants={wordItemVariants}
                whileHover={{ scale: 1.08, rotate: -2 }}
                className="inline-block transform -rotate-4 px-5 sm:px-7 py-1 sm:py-2 rounded-full bg-[#F8330B] text-white border-2 border-[#161616] shadow-[4px_4px_0px_#161616] font-serif lowercase italic text-4xl sm:text-6xl md:text-7xl cursor-pointer select-none"
              >
                don't
              </motion.span>
              <motion.span variants={wordItemVariants} className="inline-block">TEACH</motion.span>
            </div>

            {/* Line 3: IN FILM SCHOOLS */}
            <div className="flex items-center justify-center gap-3 sm:gap-5 flex-wrap">
              <motion.span variants={wordItemVariants} className="inline-block">IN</motion.span>
              <motion.span variants={wordItemVariants} className="inline-block">FILM</motion.span>
              <motion.span variants={wordItemVariants} className="inline-block">SCHOOLS</motion.span>
            </div>
          </h1>
        </motion.div>

        {/* Subtitle Quote */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="max-w-3xl mx-auto text-lg sm:text-2xl md:text-3xl font-heading font-extrabold text-[#161616] leading-tight mb-10"
        >
          Algorithms change every quarter.{' '}
          <span className="text-[#F8330B]">Storytelling has lasted 60 years.</span>
        </motion.p>

        {/* Action Button Group */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
        >
          <motion.button
            whileHover={{ scale: 1.03, y: -2 }}
            whileTap={{ scale: 0.98, y: 1 }}
            onClick={onOpenApply}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full font-heading font-black uppercase tracking-wider text-sm sm:text-base text-white bg-[#161616] hover:bg-[#C8FF2E] hover:text-[#161616] border-2 border-[#161616] shadow-[4px_4px_0px_#161616] hover:shadow-[6px_6px_0px_#161616] transition-all cursor-pointer"
          >
            <span>Apply First, Pay After Selection →</span>
          </motion.button>

          <motion.a
            whileHover={{ scale: 1.03, y: -2 }}
            whileTap={{ scale: 0.98, y: 1 }}
            href="#program"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full font-heading font-black uppercase tracking-wider text-sm sm:text-base text-[#161616] bg-[#FEFAE7] hover:bg-white border-2 border-[#161616] shadow-[3px_3px_0px_#161616] transition-all cursor-pointer"
          >
            <Film className="w-4 h-4 text-[#F8330B]" />
            <span>Explore 12-Week Program</span>
          </motion.a>
        </motion.div>
      </div>

      {/* Infinite Horizontal Running Marquee Ribbon with Krackerz-style Angled Badges */}
      <div className="w-full py-4 border-y-2 border-[#161616] bg-[#FEFAE7] overflow-hidden select-none">
        <div className="animate-marquee flex items-center gap-5">
          {[...tickerPills, ...tickerPills].map((pill, idx) => (
            <div
              key={idx}
              style={{ transform: `rotate(${pill.rot})` }}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-2xl border-2 border-[#161616] shadow-[2px_2px_0px_#161616] font-heading font-black text-xs sm:text-sm uppercase tracking-wide whitespace-nowrap transition-transform hover:scale-105 ${pill.color}`}
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>{pill.text}</span>
            </div>
          ))}
        </div>
      </div>

      {/* 4 Heritage Metrics Cards */}
      <div className="max-w-6xl mx-auto px-4 mt-12">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {HERITAGE_METRICS.map((metric, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -4, rotate: idx % 2 === 0 ? -1 : 1 }}
              className="p-5 rounded-2xl bg-white border-2 border-[#161616] shadow-[4px_4px_0px_#161616] transition-all"
            >
              <div className="text-3xl sm:text-5xl font-black font-heading text-[#161616] flex items-baseline gap-1">
                {metric.value}
                <span className="text-xs uppercase font-mono font-bold text-[#F8330B]">★</span>
              </div>
              <div className="text-xs sm:text-sm font-heading font-black uppercase tracking-tight text-[#161616] mt-1">
                {metric.label}
              </div>
              <div className="text-[11px] font-mono text-[#646464] mt-0.5">
                {metric.subtext}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
