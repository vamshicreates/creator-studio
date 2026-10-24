import React from 'react';
import { motion } from 'motion/react';
import { Brain, Scissors, Wand2, Rocket } from 'lucide-react';

export const Process: React.FC = () => {
  const steps = [
    {
      step: '01',
      icon: Brain,
      title: 'Story Architecture & Hook Engineering',
      description: 'We tear down your core idea, research, or talking-head footage to extract the singular curiosity thesis. We map out tension arcs and craft the first 3 seconds to guarantee viewer buy-in.',
      detail: 'Curiosity gaps, cold open structure, script review'
    },
    {
      step: '02',
      icon: Scissors,
      title: 'Retention Pacing & Pattern Interrupts',
      description: 'Using autonomous clip indexing and precise editing craft, we eliminate dead air, enforce word-by-word rhythm, and introduce visual pattern interrupts every 2.5 to 4 seconds.',
      detail: 'A-roll tightening, micro-whips, dynamic speed ramping'
    },
    {
      step: '03',
      icon: Wand2,
      title: '15-Style Visual DNA & Audio Mastering',
      description: 'We inject your chosen visual identity: Vox animated maps, Johnny Harris wax-pencil collages, or Iman Gadzhi film burns, backed by layered Foley, cello risers, and vocal polish.',
      detail: 'Broadcast EQ/mastering, 3D assets, custom color grade'
    },
    {
      step: '04',
      icon: Rocket,
      title: 'Multi-Format Delivery & CTR Package',
      description: 'You receive high-bitrate 4K exports, 9:16 vertical short-form recuts, curiosity-gap thumbnail variants, and complete metadata ready to publish immediately.',
      detail: '4K ProRes / H.265 master, A/B thumbnails, viral cutdowns'
    }
  ];

  return (
    <section id="process" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-zinc-800/80">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <span className="text-xs font-semibold uppercase tracking-wider text-amber-400 bg-amber-400/10 px-3 py-1 rounded-full border border-amber-400/20">
          How We Work
        </span>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mt-3 mb-4">
          The 4-Step Studio Delivery Sprint
        </h2>
        <p className="text-zinc-400 text-sm sm:text-base">
          From unorganized raw footage to a polished, high-converting masterpiece in 48-72 hours.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {steps.map((item, index) => {
          const Icon = item.icon;
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative rounded-2xl bg-zinc-900/40 border border-zinc-800/80 p-6 flex flex-col justify-between hover:border-zinc-700 transition-colors"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <span className="font-mono text-2xl font-black text-amber-400/60">
                    {item.step}
                  </span>
                  <div className="w-10 h-10 rounded-xl bg-zinc-800/80 border border-zinc-700/60 flex items-center justify-center text-amber-400">
                    <Icon className="w-5 h-5" />
                  </div>
                </div>

                <h3 className="text-lg font-bold text-white mb-2 tracking-tight">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed mb-4">
                  {item.description}
                </p>
              </div>

              <div className="pt-3 border-t border-zinc-800/60">
                <span className="text-[11px] font-mono text-zinc-500 block">Focus: {item.detail}</span>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};
