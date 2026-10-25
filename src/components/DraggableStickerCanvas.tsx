import React, { useRef } from 'react';
import { motion } from 'motion/react';
import { STICKER_ITEMS } from '../data/studioContent';
import { Sparkles, Move } from 'lucide-react';

export const DraggableStickerCanvas: React.FC = () => {
  const constraintsRef = useRef<HTMLDivElement>(null);

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t-2 border-[#161616]/15 select-none">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-10">
        <span className="text-xs font-mono font-bold uppercase tracking-wider bg-[#F0BEFA] text-[#161616] px-3 py-1 rounded-full border border-[#161616]">
          // INTERACTIVE STUDIO DESK
        </span>
        <h2 className="text-3xl sm:text-5xl font-black uppercase text-[#161616] tracking-tight mt-3">
          WORK IN STYLE. <br />
          <span className="text-[#F8330B]">DRAG STICKERS TO BRAND YOUR DESK.</span>
        </h2>
        <p className="text-xs sm:text-sm font-mono text-[#646464] font-bold mt-2 flex items-center justify-center gap-1.5">
          <Move className="w-3.5 h-3.5" />
          <span>Click & drag the stickers anywhere on the canvas below.</span>
        </p>
      </div>

      {/* Main Draggable Area Box */}
      <div
        ref={constraintsRef}
        className="relative h-[420px] sm:h-[460px] rounded-3xl bg-[#FEFAE7] border-2 border-[#161616] shadow-[6px_6px_0px_#161616] overflow-hidden flex flex-col items-center justify-center p-6"
      >
        {/* Subtle grid background */}
        <div className="absolute inset-0 bg-[radial-gradient(#161616_1px,transparent_1px)] [background-size:24px_24px] opacity-10 pointer-events-none" />

        {/* Center Virtual Monitor Frame */}
        <div className="w-full max-w-md sm:max-w-lg aspect-[16/10] rounded-2xl bg-[#161616] border-2 border-[#161616] shadow-[4px_4px_0px_#161616] flex flex-col items-center justify-center text-center p-6 pointer-events-none z-0">
          <div className="w-10 h-10 rounded-xl bg-[#C8FF2E] text-[#161616] flex items-center justify-center font-bold mb-3">
            <Sparkles className="w-5 h-5" />
          </div>
          <div className="text-xl sm:text-2xl font-black uppercase text-white font-mono tracking-tight mb-1">
            RAMANAIDU STUDIOS
          </div>
          <div className="text-xs font-mono text-[#C8FF2E] uppercase tracking-widest font-bold">
            STAGE 01 // SOUNDSTAGE DESK
          </div>
          <div className="text-[11px] font-mono text-zinc-400 mt-3 max-w-xs">
            Drop your badges on the production lot monitor.
          </div>
        </div>

        {/* Draggable Motion Stickers */}
        {STICKER_ITEMS.map((sticker) => (
          <motion.div
            key={sticker.id}
            drag
            dragConstraints={constraintsRef}
            dragElastic={0.2}
            whileHover={{ scale: 1.08, cursor: 'grab' }}
            whileDrag={{ scale: 1.15, cursor: 'grabbing', zIndex: 50 }}
            style={{
              backgroundColor: sticker.color,
              color: sticker.textColor,
              rotate: `${sticker.rotation}deg`,
              left: `${sticker.initialX}px`,
              top: `${sticker.initialY}px`
            }}
            className="absolute px-4 sm:px-5 py-2.5 rounded-2xl border-2 border-[#161616] shadow-[3px_3px_0px_#161616] font-mono text-xs sm:text-sm font-black uppercase tracking-wider z-20 cursor-grab touch-none"
          >
            <span className="flex items-center gap-1.5 pointer-events-none">
              <span>★</span>
              <span>{sticker.label}</span>
            </span>
          </motion.div>
        ))}

        {/* Bottom Instruction Ribbon */}
        <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-[11px] font-mono font-bold text-[#646464] pointer-events-none">
          <span>DRAG THE STICKERS TO BRAND YOUR STYLE</span>
          <span className="hidden sm:inline">RAMANAIDU CREATORS’ STUDIO 2026</span>
        </div>
      </div>
    </section>
  );
};
