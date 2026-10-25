import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { FAQ_ITEMS } from '../data/studioContent';
import { Plus, Minus } from 'lucide-react';

export const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faqs" className="py-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto border-t-2 border-[#161616]/15">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-14">
        <span className="text-xs font-mono font-bold uppercase tracking-wider bg-[#C7CAFF] text-[#161616] px-3.5 py-1.5 rounded-full border border-[#161616]">
          // BEFORE YOU KRACK ON
        </span>
        <h2 className="text-4xl sm:text-6xl font-heading font-black uppercase text-[#161616] tracking-tight mt-3">
          FAQS.
        </h2>
      </div>

      {/* Accordion Stack */}
      <div className="space-y-4">
        {FAQ_ITEMS.map((item, index) => {
          const isOpen = openIndex === index;
          return (
            <div
              key={index}
              className="rounded-2xl bg-[#FEFAE7] border-2 border-[#161616] shadow-[4px_4px_0px_#161616] overflow-hidden transition-all"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 font-heading font-black uppercase text-base sm:text-lg text-[#161616] tracking-tight cursor-pointer"
              >
                <span>{item.question}</span>
                <span className="w-8 h-8 rounded-full bg-[#161616] text-white flex items-center justify-center flex-shrink-0 transition-transform">
                  {isOpen ? <Minus className="w-4 h-4 text-[#C8FF2E]" /> : <Plus className="w-4 h-4 text-white" />}
                </span>
              </button>

              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="overflow-hidden"
                  >
                    <div className="px-5 pb-6 sm:px-6 sm:pb-6 text-sm sm:text-base text-[#303030] font-medium leading-relaxed border-t-2 border-[#161616]/10 pt-4">
                      {item.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </section>
  );
};
