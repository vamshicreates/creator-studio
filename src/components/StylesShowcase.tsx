import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { EDITING_STYLES } from '../data/styles';
import type { EditingStyle } from '../data/styles';
import { Sparkles, Check, Code } from 'lucide-react';

interface StylesShowcaseProps {
  onSelectStyle: (styleName: string) => void;
}

export const StylesShowcase: React.FC<StylesShowcaseProps> = ({ onSelectStyle }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Documentary', 'Educational', 'Viral Short-Form', 'Cinematic Film', '3D & Motion'];

  const filteredStyles: EditingStyle[] = selectedCategory === 'All'
    ? EDITING_STYLES
    : EDITING_STYLES.filter((s) => s.category === selectedCategory);

  return (
    <section id="styles" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-14">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-400/10 border border-amber-400/20 text-xs font-semibold text-amber-400 mb-3 uppercase tracking-wider">
          <Sparkles className="w-3.5 h-3.5" />
          Master Style Library
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
          Choose Your Channel's Visual DNA
        </h2>
        <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
          Every top creator has an unmistakable visual signature. We have decoded and parameterized 15 industry-leading editing styles into autonomous agentic workflows and human-perfected craft.
        </p>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-amber-400 text-black font-semibold shadow-lg shadow-amber-400/20'
                  : 'bg-zinc-900/80 text-zinc-400 hover:text-white border border-zinc-800'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Grid of Styles */}
      <motion.div
        layout
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        <AnimatePresence>
          {filteredStyles.map((style) => (
            <motion.div
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              key={style.id}
              className="group relative rounded-2xl bg-zinc-900/60 border border-zinc-800/80 hover:border-amber-500/40 p-6 flex flex-col justify-between transition-all duration-300 hover:shadow-2xl hover:shadow-amber-500/5 backdrop-blur-md"
            >
              <div>
                {/* Header: Category & Social Links */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-amber-400 bg-amber-400/10 px-2.5 py-1 rounded-md border border-amber-400/20">
                    {style.category}
                  </span>
                  <div className="flex items-center gap-2">
                    <a
                      href={style.youtubeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-zinc-500 hover:text-red-400 p-1 transition-colors"
                      title="View YouTube reference"
                    >
                      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                      </svg>
                    </a>
                    <a
                      href={style.instagramUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-zinc-500 hover:text-pink-400 p-1 transition-colors"
                      title="View Instagram reference"
                    >
                      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                      </svg>
                    </a>
                  </div>
                </div>

                {/* Title & Creator */}
                <h3 className="text-xl font-bold text-white group-hover:text-amber-300 transition-colors tracking-tight">
                  {style.name}
                </h3>
                <div className="text-xs font-medium text-zinc-400 mb-3 flex items-center gap-1.5">
                  <span>Pioneered by</span>
                  <span className="text-zinc-200 font-semibold">{style.creator}</span>
                </div>

                {/* One-Liner */}
                <p className="text-sm text-zinc-300 leading-relaxed mb-4">
                  {style.oneLiner}
                </p>

                {/* Hook Retention Blueprint Box */}
                <div className="p-3 rounded-xl bg-zinc-950/70 border border-zinc-800/70 mb-4">
                  <div className="text-[10px] font-mono uppercase tracking-wider text-amber-400/90 mb-1 flex items-center gap-1">
                    <Sparkles className="w-3 h-3" />
                    Hook Retention Rule
                  </div>
                  <div className="text-xs text-zinc-300 font-medium">
                    {style.hookRetention}
                  </div>
                </div>

                {/* Signature Effects Tags */}
                <div className="mb-4">
                  <div className="text-[11px] font-semibold text-zinc-400 uppercase tracking-wider mb-2">Signature DNA:</div>
                  <div className="flex flex-wrap gap-1.5">
                    {style.signatureEffects.map((effect, idx) => (
                      <span
                        key={idx}
                        className="text-[11px] font-medium px-2 py-0.5 rounded-md bg-zinc-800 text-zinc-300 border border-zinc-700/50"
                      >
                        {effect}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Color Palette Chips */}
                <div className="flex items-center gap-2 mb-6">
                  <span className="text-[11px] text-zinc-500 font-mono">Palette:</span>
                  <div className="flex items-center gap-1.5">
                    {style.colorPalette.map((color, idx) => (
                      <span
                        key={idx}
                        className="w-4 h-4 rounded-full border border-white/20 shadow-sm"
                        style={{ backgroundColor: color }}
                        title={color}
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-zinc-800/80 flex items-center gap-3">
                <button
                  onClick={() => onSelectStyle(`${style.name} (${style.creator})`)}
                  className="flex-1 py-2.5 px-3 rounded-xl bg-amber-400 hover:bg-amber-300 text-black text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                >
                  <Check className="w-3.5 h-3.5" />
                  Apply This Style
                </button>

                <a
                  href={`https://github.com/vamshicreates/${style.repoSkill}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-zinc-300 hover:text-white transition-colors"
                  title="View Skill Spec & Prompt Repo"
                >
                  <Code className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
};
