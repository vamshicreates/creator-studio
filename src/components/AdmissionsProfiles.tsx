import React from 'react';
import { motion } from 'motion/react';
import { ADMISSIONS_PROFILES, KEY_DATES } from '../data/studioContent';
import { Calendar, ArrowRight } from 'lucide-react';

interface AdmissionsProfilesProps {
  onOpenApply: () => void;
}

export const AdmissionsProfiles: React.FC<AdmissionsProfilesProps> = ({ onOpenApply }) => {
  return (
    <section id="admissions" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t-2 border-[#161616]/15">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-14">
        <span className="text-xs font-mono font-bold uppercase tracking-wider bg-[#C8FF2E] text-[#161616] px-3.5 py-1.5 rounded-full border border-[#161616]">
          // ADMISSIONS PROFILES
        </span>
        <h2 className="text-4xl sm:text-6xl font-heading font-black uppercase text-[#161616] tracking-tight mt-3">
          Admissions Profiles.
        </h2>
      </div>

      {/* 3 Profiles Cards with High-Resolution Curated Images */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
        {ADMISSIONS_PROFILES.map((profile, index) => (
          <motion.div
            key={profile.id}
            whileHover={{ y: -5, rotate: index % 2 === 0 ? -1 : 1 }}
            className="rounded-3xl bg-white border-2 border-[#161616] shadow-[6px_6px_0px_#161616] overflow-hidden flex flex-col justify-between"
          >
            <div>
              {/* Image Container with high contrast border */}
              <div className="relative aspect-[16/10] overflow-hidden border-b-2 border-[#161616] bg-[#161616]">
                <img
                  src={profile.image}
                  alt={profile.imageAlt}
                  className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute top-3 left-3 bg-[#161616] text-[#C8FF2E] text-[11px] font-mono font-black px-3 py-1 rounded-full border-2 border-white shadow-md">
                  {profile.badge}
                </div>
              </div>

              {/* Text content */}
              <div className="p-6">
                <h3 className="text-2xl font-heading font-black uppercase text-[#161616] tracking-tight mb-2">
                  {profile.title}
                </h3>
                <p className="text-xs sm:text-sm font-medium text-[#303030] leading-relaxed">
                  {profile.description}
                </p>
              </div>
            </div>

            <div className="p-6 pt-0">
              <button
                onClick={onOpenApply}
                className="w-full py-3 rounded-full bg-[#FEFAE7] hover:bg-[#161616] hover:text-[#C8FF2E] font-heading font-black uppercase text-xs tracking-wider border-2 border-[#161616] shadow-[2px_2px_0px_#161616] transition-colors cursor-pointer flex items-center justify-center gap-1.5"
              >
                <span>Apply as {profile.title.split(' ')[0]}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Key Dates (Cohort 01) */}
      <div className="rounded-3xl bg-[#FEFAE7] border-2 border-[#161616] shadow-[6px_6px_0px_#161616] p-8 sm:p-12">
        <div className="mb-8">
          <span className="text-xs font-mono font-bold uppercase tracking-wider bg-[#F8330B] text-white px-3.5 py-1.5 rounded-full border border-[#161616]">
            // KEY DATES
          </span>
          <h3 className="text-3xl sm:text-4xl font-heading font-black uppercase text-[#161616] tracking-tight mt-2">
            Key Dates (Cohort 01)
          </h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {KEY_DATES.map((item) => (
            <div
              key={item.step}
              className="p-5 rounded-2xl bg-white border-2 border-[#161616] shadow-[3px_3px_0px_#161616] flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between font-mono text-xs font-bold text-[#646464] mb-2">
                  <span>STEP {item.step}</span>
                  <Calendar className="w-3.5 h-3.5 text-[#F8330B]" />
                </div>
                <div className="text-xl sm:text-2xl font-black font-heading text-[#161616] mb-1">
                  {item.date}
                </div>
                <div className="text-sm font-heading font-black uppercase text-[#161616]">
                  {item.label}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
