import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { LOT_ENVIRONMENTS } from '../data/studioContent';
import { Clapperboard, Monitor, PenTool, CheckCircle2, ArrowUpRight } from 'lucide-react';

interface WorkingLotBentoProps {
  onOpenApply: () => void;
}

export const WorkingLotBento: React.FC<WorkingLotBentoProps> = ({ onOpenApply }) => {
  const [activeTab, setActiveTab] = useState<string>('stage-01');

  const selectedEnv = LOT_ENVIRONMENTS.find((e) => e.id === activeTab) || LOT_ENVIRONMENTS[0];

  return (
    <section id="lot" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t-2 border-[#161616]/15">
      {/* Section Eyebrow & Title */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
        <div>
          <span className="text-xs font-mono font-bold uppercase tracking-wider bg-[#C8FF2E] text-[#161616] px-3 py-1 rounded-full border border-[#161616]">
            // THE WORKING LOT
          </span>
          <h2 className="text-3xl sm:text-5xl font-black uppercase text-[#161616] tracking-tight mt-3">
            BUILT FOR OUTPUT. <br />
            <span className="text-[#F8330B]">NOT EMPTY LECTURES.</span>
          </h2>
        </div>
        <p className="text-sm sm:text-base font-medium text-[#303030] max-w-md mt-4 md:mt-0 leading-relaxed">
          Step inside the physical studio suites where creators deconstruct scripts, shoot multi-cam setups, and master post-production on the Ramanaidu lot.
        </p>
      </div>

      {/* Krackerz-style Tab Switcher Pills */}
      <div className="flex flex-wrap items-center gap-3 mb-8">
        {LOT_ENVIRONMENTS.map((env) => {
          const isActive = env.id === activeTab;
          return (
            <button
              key={env.id}
              onClick={() => setActiveTab(env.id)}
              className={`flex items-center gap-2 px-5 py-3 rounded-full font-mono text-xs sm:text-sm font-extrabold uppercase border-2 border-[#161616] transition-all cursor-pointer ${
                isActive
                  ? 'bg-[#161616] text-[#C8FF2E] shadow-[3px_3px_0px_#161616] translate-x-[-1px] translate-y-[-1px]'
                  : 'bg-[#FEFAE7] text-[#161616] hover:bg-white shadow-[2px_2px_0px_#161616]'
              }`}
            >
              {env.id === 'stage-01' && <Clapperboard className="w-4 h-4" />}
              {env.id === 'bay-04' && <Monitor className="w-4 h-4" />}
              {env.id === 'room-102' && <PenTool className="w-4 h-4" />}
              <span>{env.code} // {env.id === 'stage-01' ? 'SOUNDSTAGE' : env.id === 'bay-04' ? 'POST SUITE' : 'STORY LAB'}</span>
            </button>
          );
        })}
      </div>

      {/* Main Active Environment Showcase Card */}
      <AnimatePresence mode="wait">
        <motion.div
          key={selectedEnv.id}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
          className="rounded-3xl border-2 border-[#161616] shadow-[8px_8px_0px_#161616] overflow-hidden"
          style={{ backgroundColor: selectedEnv.accentColor }}
        >
          <div className="p-6 sm:p-10 lg:p-12 flex flex-col lg:flex-row gap-8 lg:gap-12 items-start justify-between">
            {/* Left Content */}
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-xs font-mono font-bold uppercase tracking-wider bg-[#161616] text-white px-3 py-1 rounded-full border border-[#161616]">
                  {selectedEnv.badge}
                </span>
                <span className="text-xs font-mono font-bold uppercase text-[#161616]">
                  {selectedEnv.locationTag}
                </span>
              </div>

              <h3 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase text-[#161616] tracking-tight mb-2">
                {selectedEnv.name}
              </h3>
              <div className="text-sm sm:text-base font-mono font-bold text-[#161616] mb-6">
                {selectedEnv.subtitle}
              </div>

              <p className="text-sm sm:text-base font-medium text-[#161616] leading-relaxed mb-8 max-w-2xl">
                {selectedEnv.description}
              </p>

              {/* Specs Pills Grid */}
              <div className="mb-8">
                <div className="text-xs font-mono font-bold uppercase text-[#161616] mb-3">
                  Hardware & Facility Technical Specifications:
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {selectedEnv.specs.map((spec, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-white/90 border-2 border-[#161616] shadow-[2px_2px_0px_#161616] font-mono text-xs font-bold text-[#161616]"
                    >
                      <CheckCircle2 className="w-4 h-4 text-[#F8330B] flex-shrink-0" />
                      <span>{spec}</span>
                    </div>
                  ))}
                </div>
              </div>

              <button
                onClick={onOpenApply}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#161616] text-[#F7F6F0] font-extrabold uppercase text-xs tracking-wider border-2 border-[#161616] shadow-[3px_3px_0px_#161616] hover:bg-white hover:text-[#161616] transition-all cursor-pointer"
              >
                <span>Book Residency on this Lot</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>

            {/* Right Visual Technical Blueprint Stamp */}
            <div className="w-full lg:w-80 flex-shrink-0 bg-white p-6 rounded-2xl border-2 border-[#161616] shadow-[4px_4px_0px_#161616] text-[#161616]">
              <div className="text-xs font-mono font-bold uppercase tracking-wider text-[#646464] mb-3 border-b-2 border-[#161616] pb-2 flex justify-between">
                <span>STAGE LOG</span>
                <span>ISSUE 01</span>
              </div>

              <div className="space-y-4 text-xs font-mono">
                <div>
                  <div className="text-[#646464]">CAMPUS:</div>
                  <div className="font-bold text-sm">RAMANAIDU STUDIOS</div>
                </div>
                <div>
                  <div className="text-[#646464]">ZONE:</div>
                  <div className="font-bold">JUBILEE HILLS, HYDERABAD</div>
                </div>
                <div>
                  <div className="text-[#646464]">CAPSTONE SCHEDULE:</div>
                  <div className="font-bold">WEEKS 9 & 10 (FULL LOT ACCESS)</div>
                </div>
                <div>
                  <div className="text-[#646464]">SUPERVISION:</div>
                  <div className="font-bold">RAMANAIDU STUDIO GAFFERS & EDIT LEAD</div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t-2 border-[#161616] text-center">
                <span className="text-[11px] font-mono font-bold uppercase bg-[#FEFAE7] text-[#161616] px-3 py-1 rounded-full border border-[#161616]">
                  ★ Working Cinema Lot Access ★
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </section>
  );
};
