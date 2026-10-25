import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { FAQ_ITEMS } from '../data/studioContent';
import { Plus, Minus, MessageSquare } from 'lucide-react';

export const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faqs" className="py-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto border-t-2 border-[#161616]/15">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <span className="text-xs font-mono font-bold uppercase tracking-wider bg-[#C7CAFF] text-[#161616] px-3 py-1 rounded-full border border-[#161616]">
          // BEFORE YOU KRACK ON
        </span>
        <h2 className="text-3xl sm:text-5xl font-black uppercase text-[#161616] tracking-tight mt-3">
          FREQUENTLY ASKED QUESTIONS.
        </h2>
        <p className="text-sm sm:text-base font-medium text-[#303030] mt-3">
          Everything we can confirm about the program, soundstages, and admissions today. Anything else, just ask.
        </p>
      </div>

      {/* Accordion Stack */}
      <div className="space-y-4">
        {FAQ_ITEMS.map((item, index) => {
          const isOpen = openIndex === index;
          return (
            <div
              key={index}
              className="rounded-2xl bg-[#FEFAE7] border-2 border-[#161616] shadow-[3px_3px_0px_#161616] overflow-hidden transition-all"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 font-extrabold uppercase text-sm sm:text-base text-[#161616] tracking-tight cursor-pointer"
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
                    <div className="px-5 pb-6 sm:px-6 sm:pb-6 text-xs sm:text-sm text-[#303030] font-medium leading-relaxed border-t border-[#161616]/10 pt-4">
                      {item.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>

      {/* Still Unsure Box */}
      <div className="mt-12 p-6 rounded-2xl bg-white border-2 border-[#161616] shadow-[4px_4px_0px_#161616] flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <div className="text-base font-black uppercase text-[#161616]">
            Still have questions about Cohort 01?
          </div>
          <div className="text-xs text-[#646464] font-mono mt-0.5">
            The Ramanaidu Studios admissions team is happy to help before you apply.
          </div>
        </div>

        <a
          href="https://wa.me/919999999999?text=Hi%20Admissions%20Team,%20I'm%20asking%20a%20question%20about%20Creators'%20Studio%20Cohort%2001!"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#C0ECBF] text-[#161616] font-bold text-xs uppercase border-2 border-[#161616] shadow-[2px_2px_0px_#161616] hover:bg-[#a6e0a4] transition-colors"
        >
          <MessageSquare className="w-4 h-4" />
          <span>Chat with Admissions</span>
        </a>
      </div>
    </section>
  );
};
