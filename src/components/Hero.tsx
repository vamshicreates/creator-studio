import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Play, Film, Flame, Award, Eye, TrendingUp } from 'lucide-react';
import { STUDIO_METRICS } from '../data/portfolio';

interface HeroProps {
  onOpenBooking: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking }) => {
  return (
    <section className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background ambient radial glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-gradient-to-tr from-amber-500/15 via-purple-600/15 to-blue-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-72 h-72 bg-amber-500/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute top-20 right-10 w-80 h-80 bg-purple-500/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(#27272a_1px,transparent_1px)] [background-size:24px_24px] opacity-25 pointer-events-none" />

      <div className="relative max-w-5xl mx-auto text-center z-10">
        {/* Top Floating Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-900/90 border border-zinc-700/70 text-xs font-medium text-zinc-300 shadow-xl mb-6 backdrop-blur-md"
        >
          <span className="flex h-2 w-2 rounded-full bg-amber-400 animate-pulse" />
          <span className="text-zinc-200 font-semibold">15 Master Video Editing Styles</span>
          <span className="text-zinc-500">•</span>
          <span className="text-amber-400 font-mono">Agentic Workflow Enabled</span>
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: 'easeOut' }}
          className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.08] mb-6"
        >
          We Turn Raw Footage Into{' '}
          <span className="bg-gradient-to-r from-amber-400 via-amber-200 to-orange-400 bg-clip-text text-transparent">
            High-Retention
          </span>{' '}
          Visual Masterpieces.
        </motion.h1>

        {/* Supporting Text */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
          className="max-w-3xl mx-auto text-base sm:text-lg md:text-xl text-zinc-400 font-normal leading-relaxed mb-10"
        >
          Full-service creator studio engineering 15 world-class editing styles — from Vox explainers & Johnny Harris documentaries to Iman Gadzhi retention pacing and 3D kinetic motion.
        </motion.p>

        {/* CTA Button Group */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: 'easeOut' }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
        >
          <button
            onClick={onOpenBooking}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl font-semibold text-sm sm:text-base text-black bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 shadow-xl shadow-amber-500/20 hover:shadow-amber-500/30 transition-all duration-200 cursor-pointer active:scale-95"
          >
            <span>Book Studio Project Call</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <a
            href="#styles"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl font-medium text-sm sm:text-base text-zinc-200 bg-zinc-900/80 hover:bg-zinc-800/90 border border-zinc-700/60 transition-all duration-200 cursor-pointer"
          >
            <Film className="w-4 h-4 text-amber-400" />
            <span>Explore 15 Styles</span>
          </a>

          <a
            href="#work"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl font-medium text-sm text-zinc-400 hover:text-white transition-colors duration-200"
          >
            <Play className="w-4 h-4 text-zinc-400" />
            <span>View Recent Work</span>
          </a>
        </motion.div>

        {/* Real Metrics Row */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4, ease: 'easeOut' }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 max-w-4xl mx-auto pt-6 border-t border-zinc-800/80"
        >
          {STUDIO_METRICS.map((metric, idx) => (
            <div
              key={idx}
              className="p-4 rounded-2xl bg-zinc-900/40 border border-zinc-800/70 backdrop-blur-sm text-left hover:border-zinc-700/80 transition-colors"
            >
              <div className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight flex items-center gap-1.5 font-mono">
                {metric.value}
                {idx === 0 && <Eye className="w-4 h-4 text-amber-400 inline" />}
                {idx === 1 && <Award className="w-4 h-4 text-purple-400 inline" />}
                {idx === 2 && <TrendingUp className="w-4 h-4 text-emerald-400 inline" />}
                {idx === 3 && <Flame className="w-4 h-4 text-orange-400 inline" />}
              </div>
              <div className="text-xs sm:text-sm font-medium text-zinc-300 mt-1">{metric.label}</div>
              <div className="text-[11px] text-zinc-500 mt-0.5">{metric.subtext}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
