import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, ArrowRight, ShieldCheck } from 'lucide-react';

interface AdmissionsPricingProps {
  onOpenApply: () => void;
}

export const AdmissionsPricing: React.FC<AdmissionsPricingProps> = ({ onOpenApply }) => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto border-t-2 border-[#161616]/15">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <span className="text-xs font-mono font-bold uppercase tracking-wider bg-[#F8330B] text-white px-3.5 py-1.5 rounded-full border border-[#161616]">
          // ADMISSIONS & TUITION
        </span>
        <h2 className="text-4xl sm:text-6xl font-heading font-black uppercase text-[#161616] tracking-tight mt-3">
          Admissions & Tuition.
        </h2>
      </div>

      {/* Main High-Impact Krackerz Pricing Card */}
      <motion.div
        whileHover={{ scale: 1.01 }}
        className="rounded-3xl bg-[#C8FF2E] border-2 border-[#161616] shadow-[8px_8px_0px_#161616] p-8 sm:p-14 text-center relative overflow-hidden"
      >
        <div className="inline-flex items-center gap-1.5 bg-[#161616] text-[#C8FF2E] px-4 py-1.5 rounded-full text-xs font-mono font-black uppercase tracking-wider mb-6 border-2 border-white shadow-md">
          <Sparkles className="w-3.5 h-3.5" />
          <span>ZERO UPFRONT COST</span>
        </div>

        <h3 className="text-4xl sm:text-6xl md:text-7xl font-heading font-black uppercase text-[#161616] tracking-tight leading-[0.95] mb-6">
          APPLY FIRST. <br />
          <span className="text-[#161616]">PAY ONLY IF SELECTED.</span>
        </h3>

        <p className="max-w-xl mx-auto text-base sm:text-lg font-medium text-[#161616] leading-relaxed mb-10">
          There is zero payment to apply. We review your creative vision, ambitions, and niche potential first. Complete tuition details and payment plans are provided directly to shortlisted candidates.
        </p>

        <motion.button
          whileHover={{ scale: 1.04, y: -2 }}
          whileTap={{ scale: 0.98, y: 1 }}
          onClick={onOpenApply}
          className="inline-flex items-center gap-3 px-10 py-5 rounded-full font-heading font-black uppercase tracking-wider text-base sm:text-lg text-white bg-[#161616] hover:bg-white hover:text-[#161616] border-2 border-[#161616] shadow-[4px_4px_0px_#161616] cursor-pointer transition-all"
        >
          <span>Apply for Cohort 01 →</span>
          <ArrowRight className="w-5 h-5" />
        </motion.button>

        <div className="mt-4 flex items-center justify-center gap-2 text-xs font-mono font-bold text-[#161616]/75">
          <ShieldCheck className="w-4 h-4" />
          <span>No credit card or upfront fee required to apply</span>
        </div>
      </motion.div>
    </section>
  );
};
