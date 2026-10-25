import React from 'react';
import { motion } from 'motion/react';
import { ADMISSIONS_PROFILES, COHORT_DATES } from '../data/studioContent';
import { Users, Calendar, ArrowRight } from 'lucide-react';

interface AdmissionsProfilesProps {
  onOpenApply: () => void;
}

export const AdmissionsProfiles: React.FC<AdmissionsProfilesProps> = ({ onOpenApply }) => {
  return (
    <section id="admissions" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t-2 border-[#161616]/15">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <span className="text-xs font-mono font-bold uppercase tracking-wider bg-[#C8FF2E] text-[#161616] px-3 py-1 rounded-full border border-[#161616]">
          // ADMISSIONS PROFILE
        </span>
        <h2 className="text-3xl sm:text-5xl font-black uppercase text-[#161616] tracking-tight mt-3">
          BUILT FOR THREE KINDS OF PEOPLE.
        </h2>
        <p className="text-sm sm:text-base font-medium text-[#303030] mt-3">
          Bring an idea, an audience or a business. You leave with a verified production plan and high-retention work to show for it.
        </p>
      </div>

      {/* 3 Profiles Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
        {ADMISSIONS_PROFILES.map((profile, index) => (
          <motion.div
            key={profile.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="p-8 rounded-3xl bg-white border-2 border-[#161616] shadow-[5px_5px_0px_#161616] flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-4 pb-2 border-b-2 border-[#161616]/15">
                <span className="text-xs font-mono font-bold text-[#F8330B]">
                  PROFILE {profile.number}
                </span>
                <Users className="w-4 h-4 text-[#161616]" />
              </div>

              <h3 className="text-2xl font-black uppercase text-[#161616] tracking-tight mb-2">
                {profile.title}
              </h3>
              <p className="text-xs font-mono font-bold text-[#580D14] mb-4">
                {profile.summary}
              </p>

              <div className="space-y-3 text-xs sm:text-sm text-[#303030] font-medium leading-relaxed mb-6">
                <div>
                  <span className="font-bold text-[#161616]">For You If: </span>
                  {profile.forYouIf}
                </div>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-[#FEFAE7] border-2 border-[#161616] text-xs font-mono font-bold text-[#161616]">
              <span className="text-[#F8330B]">YOU LEAVE WITH: </span>
              {profile.youLeaveWith}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Cohort 01 Key Dates Timeline */}
      <div className="rounded-3xl bg-[#FEFAE7] border-2 border-[#161616] shadow-[6px_6px_0px_#161616] p-8 sm:p-12">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
          <div>
            <span className="text-xs font-mono font-bold uppercase tracking-wider bg-[#F8330B] text-white px-3 py-1 rounded-full border border-[#161616]">
              // KEY DATES
            </span>
            <h3 className="text-2xl sm:text-3xl font-black uppercase text-[#161616] tracking-tight mt-2">
              The Road Ahead for Cohort 01
            </h3>
          </div>
          <div className="text-xs font-mono font-bold text-[#646464]">
            All dates tentative & confirmed to applicants
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {COHORT_DATES.map((item) => (
            <div
              key={item.step}
              className="p-5 rounded-2xl bg-white border-2 border-[#161616] shadow-[3px_3px_0px_#161616] flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between font-mono text-xs font-bold text-[#646464] mb-2">
                  <span>STEP {item.step}</span>
                  <Calendar className="w-3.5 h-3.5 text-[#F8330B]" />
                </div>
                <div className="text-xl font-black font-mono text-[#161616] mb-1">
                  {item.date}
                </div>
                <div className="text-sm font-black uppercase tracking-tight text-[#161616] mb-2">
                  {item.label}
                </div>
              </div>
              <div className="text-xs font-mono text-[#646464] font-medium pt-2 border-t border-[#161616]/15">
                {item.sub}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <button
            onClick={onOpenApply}
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#161616] text-[#C8FF2E] font-extrabold uppercase text-xs tracking-wider border-2 border-[#161616] shadow-[3px_3px_0px_#161616] hover:bg-[#C8FF2E] hover:text-[#161616] transition-all cursor-pointer"
          >
            <span>Apply First, Pay After Selection</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
