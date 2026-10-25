import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CURRICULUM_PHASES } from '../data/studioContent';
import { Calendar, CheckCircle2, Gamepad2, ArrowRight } from 'lucide-react';

interface CurriculumSprintProps {
  onOpenApply: () => void;
}

export const CurriculumSprint: React.FC<CurriculumSprintProps> = ({ onOpenApply }) => {
  const [activePhaseIndex, setActivePhaseIndex] = useState<number>(0);

  const activePhase = CURRICULUM_PHASES[activePhaseIndex];

  return (
    <section id="curriculum" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t-2 border-[#161616]/15">
      {/* Eyebrow & Title */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
        <div>
          <span className="text-xs font-mono font-bold uppercase tracking-wider bg-[#F8330B] text-white px-3 py-1 rounded-full border border-[#161616]">
            // THE 12-WEEK PROGRAM
          </span>
          <h2 className="text-3xl sm:text-5xl font-black uppercase text-[#161616] tracking-tight mt-3">
            TWELVE WEEKS. <br />
            <span className="text-[#F8330B]">ONE THING YOU ACTUALLY BUILT.</span>
          </h2>
        </div>
        <p className="text-sm sm:text-base font-medium text-[#303030] max-w-md mt-4 md:mt-0 leading-relaxed">
          Students don’t graduate with only theoretical slides. You graduate with a studio-shot capstone, a commercial media kit, and a live channel.
        </p>
      </div>

      {/* Cohort Call Sheet Header Strip */}
      <div className="mb-10 p-6 rounded-2xl bg-[#FEFAE7] border-2 border-[#161616] shadow-[4px_4px_0px_#161616] grid grid-cols-2 md:grid-cols-4 gap-4 font-mono text-xs">
        <div>
          <div className="text-[#646464] font-bold">COHORT:</div>
          <div className="text-sm font-black text-[#161616]">COHORT 01</div>
        </div>
        <div>
          <div className="text-[#646464] font-bold">TIMELINE:</div>
          <div className="text-sm font-black text-[#161616]">12 WKS (4 MONTHS)</div>
        </div>
        <div>
          <div className="text-[#646464] font-bold">APPLICATIONS:</div>
          <div className="text-sm font-black text-[#F8330B]">1 NOV – 30 NOV 2026</div>
        </div>
        <div>
          <div className="text-[#646464] font-bold">STUDIO LOT:</div>
          <div className="text-sm font-black text-[#161616]">RAMANAIDU STUDIOS</div>
        </div>
      </div>

      {/* Phase Selector Tabs */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-8">
        {CURRICULUM_PHASES.map((phase, idx) => {
          const isActive = idx === activePhaseIndex;
          return (
            <button
              key={phase.phaseNumber}
              onClick={() => setActivePhaseIndex(idx)}
              className={`p-4 rounded-2xl border-2 border-[#161616] text-left transition-all cursor-pointer ${
                isActive
                  ? 'bg-[#161616] text-white shadow-[4px_4px_0px_#161616] translate-x-[-1px] translate-y-[-1px]'
                  : 'bg-white text-[#161616] hover:bg-[#FEFAE7] shadow-[2px_2px_0px_#161616]'
              }`}
            >
              <div className="flex items-center justify-between text-xs font-mono font-bold mb-1">
                <span className={isActive ? 'text-[#C8FF2E]' : 'text-[#F8330B]'}>
                  PHASE {phase.phaseNumber}
                </span>
                <span className={isActive ? 'text-zinc-400' : 'text-[#646464]'}>
                  {phase.weeksSpan}
                </span>
              </div>
              <div className="text-sm font-black uppercase tracking-tight line-clamp-1">
                {phase.title}
              </div>
            </button>
          );
        })}
      </div>

      {/* Active Phase Banner & Weeks Container */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activePhase.phaseNumber}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
          className="rounded-3xl bg-white border-2 border-[#161616] shadow-[6px_6px_0px_#161616] p-6 sm:p-10"
        >
          {/* Phase Header */}
          <div className="border-b-2 border-[#161616]/15 pb-6 mb-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <div className="text-xs font-mono font-bold uppercase text-[#F8330B] mb-1">
                PHASE {activePhase.phaseNumber} · {activePhase.weeksSpan}
              </div>
              <h3 className="text-2xl sm:text-3xl font-black uppercase text-[#161616] tracking-tight">
                {activePhase.title}
              </h3>
            </div>
            <p className="text-xs sm:text-sm font-medium text-[#303030] max-w-md">
              {activePhase.description}
            </p>
          </div>

          {/* Week Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {activePhase.weeks.map((week) => (
              <div
                key={week.weekNumber}
                className="p-6 rounded-2xl bg-[#FEFAE7] border-2 border-[#161616] shadow-[3px_3px_0px_#161616] flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between font-mono text-xs font-bold text-[#161616] mb-3 pb-2 border-b border-[#161616]/15">
                    <span className="bg-[#161616] text-[#C8FF2E] px-2.5 py-0.5 rounded">
                      WEEK {week.weekNumber}
                    </span>
                    <span className="text-[#646464]">OUTPUT-FIRST</span>
                  </div>

                  <h4 className="text-lg sm:text-xl font-black uppercase text-[#161616] tracking-tight mb-3">
                    {week.title}
                  </h4>

                  <div className="space-y-2 text-xs text-[#303030] font-medium mb-4">
                    <div>
                      <span className="font-bold text-[#161616]">What You Learn: </span>
                      {week.whatYouLearn}
                    </div>
                    <div>
                      <span className="font-bold text-[#161616]">Exercise: </span>
                      {week.practicalExercise}
                    </div>
                  </div>
                </div>

                <div>
                  {/* You Make Pill */}
                  <div className="p-3 rounded-xl bg-white border-2 border-[#161616] text-xs font-mono font-bold text-[#161616] flex items-center gap-2 mb-3">
                    <CheckCircle2 className="w-4 h-4 text-[#F8330B] flex-shrink-0" />
                    <span>YOU MAKE: {week.youMake}</span>
                  </div>

                  {/* Game of the Week Highlight */}
                  {week.gameOfTheWeek && (
                    <div className="p-3 rounded-xl bg-[#C8FF2E] border-2 border-[#161616] text-xs font-mono text-[#161616]">
                      <div className="flex items-center gap-1.5 font-black uppercase mb-1">
                        <Gamepad2 className="w-4 h-4" />
                        <span>GAME: {week.gameOfTheWeek.title}</span>
                      </div>
                      <div className="text-[11px] font-sans font-medium">
                        {week.gameOfTheWeek.description}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Phase CTA */}
          <div className="mt-8 pt-6 border-t-2 border-[#161616]/15 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-xs font-mono font-bold text-[#646464] flex items-center gap-2">
              <Calendar className="w-4 h-4 text-[#F8330B]" />
              <span>Full call sheet & studio timetable shared with admitted candidates.</span>
            </div>
            <button
              onClick={onOpenApply}
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#161616] text-[#C8FF2E] text-xs font-extrabold uppercase border-2 border-[#161616] shadow-[2px_2px_0px_#161616] hover:bg-[#C8FF2E] hover:text-[#161616] transition-colors cursor-pointer"
            >
              <span>Apply for Cohort 01</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </motion.div>
      </AnimatePresence>
    </section>
  );
};
