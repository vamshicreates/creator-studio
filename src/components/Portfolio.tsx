import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PORTFOLIO_ITEMS } from '../data/portfolio';
import type { PortfolioItem } from '../data/portfolio';
import { Eye, TrendingUp, X, Maximize2 } from 'lucide-react';

export const Portfolio: React.FC = () => {
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);

  return (
    <section id="work" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-14">
        <div>
          <span className="text-xs font-semibold uppercase tracking-wider text-amber-400 bg-amber-400/10 px-3 py-1 rounded-full border border-amber-400/20">
            Selected Case Studies
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mt-3">
            Real Work. Real Retention.
          </h2>
        </div>
        <p className="text-zinc-400 text-sm max-w-md mt-4 md:mt-0">
          No hypothetical mockups. Every visual and narrative is battle-tested in live creator feeds and YouTube algorithms.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {PORTFOLIO_ITEMS.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group rounded-3xl bg-zinc-900/60 border border-zinc-800 overflow-hidden hover:border-amber-500/40 transition-all duration-300 flex flex-col"
          >
            {/* Image Showcase Container */}
            <div
              className="relative aspect-[16/10] overflow-hidden bg-zinc-950 cursor-pointer"
              onClick={() => setSelectedItem(item)}
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500 ease-out"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />

              {/* Top Floating Badge */}
              <div className="absolute top-4 left-4 flex items-center gap-2">
                <span className="text-[11px] font-semibold uppercase tracking-wider bg-black/80 backdrop-blur-md text-amber-400 px-3 py-1 rounded-full border border-zinc-700">
                  {item.category}
                </span>
              </div>

              {/* Zoom Trigger Button */}
              <div className="absolute top-4 right-4 p-2 rounded-full bg-black/60 backdrop-blur-md text-white opacity-0 group-hover:opacity-100 transition-opacity">
                <Maximize2 className="w-4 h-4" />
              </div>

              {/* Metrics Pills on Image Bottom */}
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="inline-flex items-center gap-1.5 text-xs font-semibold bg-zinc-900/90 text-white px-3 py-1 rounded-lg border border-zinc-700/80 backdrop-blur-md">
                    <Eye className="w-3.5 h-3.5 text-amber-400" />
                    {item.views}
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-xs font-semibold bg-emerald-950/80 text-emerald-400 px-3 py-1 rounded-lg border border-emerald-800/80 backdrop-blur-md">
                    <TrendingUp className="w-3.5 h-3.5" />
                    {item.retention}
                  </span>
                </div>
              </div>
            </div>

            {/* Description & Tags */}
            <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 group-hover:text-amber-300 transition-colors">
                  {item.title}
                </h3>
                <p className="text-zinc-400 text-sm leading-relaxed mb-6">
                  {item.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-2 pt-4 border-t border-zinc-800/80">
                {item.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="text-[11px] font-medium text-zinc-300 bg-zinc-800/80 px-2.5 py-1 rounded-lg"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedItem && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-lg">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="relative max-w-4xl w-full bg-zinc-900 border border-zinc-700 rounded-3xl overflow-hidden shadow-2xl"
            >
              <button
                onClick={() => setSelectedItem(null)}
                className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/70 hover:bg-black text-white transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="max-h-[75vh] overflow-y-auto">
                <img
                  src={selectedItem.image}
                  alt={selectedItem.title}
                  className="w-full h-auto object-contain bg-zinc-950"
                />
                <div className="p-6 bg-zinc-900">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs uppercase font-semibold text-amber-400">{selectedItem.category}</span>
                    <span className="text-zinc-500">•</span>
                    <span className="text-xs font-mono text-zinc-300">{selectedItem.views}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">{selectedItem.title}</h3>
                  <p className="text-sm text-zinc-300 leading-relaxed">{selectedItem.description}</p>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
