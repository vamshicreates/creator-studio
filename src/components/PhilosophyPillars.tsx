import React from 'react';
import { motion } from 'motion/react';
import { PHILOSOPHY_PILLARS } from '../data/studioContent';
import { Target, DollarSign } from 'lucide-react';

export const PhilosophyPillars: React.FC = () => {
  const steps = [
    { num: '01', title: 'Identify Your Audience', text: 'Who are you creating for, and what unspoken questions keep them up at night?' },
    { num: '02', title: 'Create Value', text: 'Make content that educates, entertains, inspires, or solves a high-friction problem.' },
    { num: '03', title: 'Build a Content System', text: 'Ideation, scripting, production, editing, and distribution done with studio repeatability.' },
    { num: '04', title: 'Build a Business', text: 'Convert audience trust into sustainable direct and indirect enterprise revenue.' }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t-2 border-[#161616]/15 bg-[#F7F6F0]">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <span className="text-xs font-mono font-bold uppercase tracking-wider bg-[#161616] text-[#C8FF2E] px-3 py-1 rounded-full border border-[#161616]">
          // CORE PHILOSOPHY
        </span>
        <h2 className="text-3xl sm:text-5xl font-black uppercase text-[#161616] tracking-tight mt-3">
          PEOPLE PAY FOR VALUE. <br />
          <span className="text-[#F8330B]">CONTENT IS HOW YOU SHARE IT.</span>
        </h2>
        <p className="text-sm sm:text-base font-medium text-[#303030] mt-3">
          Most creator courses teach you to post more. This one starts earlier: who you are making for, why it matters to them, and how that value turns into a living.
        </p>
      </div>

      {/* 3 Pillars Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
        {PHILOSOPHY_PILLARS.map((pillar, index) => (
          <motion.div
            key={pillar.number}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="p-8 rounded-3xl border-2 border-[#161616] shadow-[6px_6px_0px_#161616] flex flex-col justify-between"
            style={{ backgroundColor: pillar.accent }}
          >
            <div>
              <div className="flex items-center justify-between font-mono text-xs font-black uppercase text-[#161616] mb-6">
                <span>PILLAR {pillar.number}</span>
                <span className="w-8 h-8 rounded-full bg-[#161616] text-white flex items-center justify-center font-bold">
                  {pillar.number}
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-black uppercase text-[#161616] tracking-tight mb-2">
                {pillar.title}
              </h3>
              <div className="text-xs font-mono font-bold uppercase text-[#161616] mb-4">
                {pillar.headline}
              </div>

              <p className="text-sm font-medium text-[#161616] leading-relaxed">
                {pillar.description}
              </p>
            </div>

            <div className="mt-8 pt-4 border-t-2 border-[#161616]/30 font-mono text-[11px] font-bold uppercase text-[#161616]">
              Ramanaidu Institution Foundation
            </div>
          </motion.div>
        ))}
      </div>

      {/* 4-Step Value Creation Sequence */}
      <div className="rounded-3xl bg-[#FEFAE7] border-2 border-[#161616] shadow-[6px_6px_0px_#161616] p-8 sm:p-12 mb-16">
        <div className="max-w-2xl mb-8">
          <span className="text-xs font-mono font-bold uppercase tracking-wider bg-[#F8330B] text-white px-3 py-1 rounded-full border border-[#161616]">
            // THE 4-STEP SEQUENCE
          </span>
          <h3 className="text-2xl sm:text-3xl font-black uppercase text-[#161616] tracking-tight mt-3">
            Skip one step, and the rest get harder.
          </h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {steps.map((step) => (
            <div
              key={step.num}
              className="p-5 rounded-2xl bg-white border-2 border-[#161616] shadow-[3px_3px_0px_#161616]"
            >
              <div className="text-2xl font-black font-mono text-[#F8330B] mb-2">{step.num}</div>
              <div className="text-base font-black uppercase text-[#161616] mb-2 tracking-tight">
                {step.title}
              </div>
              <p className="text-xs text-[#303030] font-medium leading-relaxed">
                {step.text}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Direct vs Indirect Monetisation Bento Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Direct Monetisation */}
        <div className="p-8 rounded-3xl bg-white border-2 border-[#161616] shadow-[5px_5px_0px_#161616]">
          <div className="flex items-center gap-2 mb-3">
            <DollarSign className="w-5 h-5 text-[#F8330B]" />
            <span className="text-xs font-mono font-bold uppercase text-[#F8330B]">REVENUE ARCHITECTURE A</span>
          </div>
          <h4 className="text-2xl font-black uppercase text-[#161616] tracking-tight mb-2">
            DIRECT MONETISATION
          </h4>
          <p className="text-xs font-mono font-bold text-[#646464] mb-4">
            Your audience pays you directly for products and access.
          </p>
          <ul className="space-y-2 text-xs sm:text-sm font-medium text-[#161616]">
            <li className="flex items-center gap-2">
              <span className="text-[#F8330B] font-bold">→</span> Paid Masterclasses & Digital Workshops
            </li>
            <li className="flex items-center gap-2">
              <span className="text-[#F8330B] font-bold">→</span> High-Affinity Brand Partnerships & Integrated Sponsoring
            </li>
            <li className="flex items-center gap-2">
              <span className="text-[#F8330B] font-bold">→</span> Advisory, Consulting & Specialized Retainer Services
            </li>
            <li className="flex items-center gap-2">
              <span className="text-[#F8330B] font-bold">→</span> Digital Software, Templates & Proprietary Frameworks
            </li>
            <li className="flex items-center gap-2">
              <span className="text-[#F8330B] font-bold">→</span> Paid Memberships & Mastermind Communities
            </li>
          </ul>
        </div>

        {/* Indirect Monetisation */}
        <div className="p-8 rounded-3xl bg-white border-2 border-[#161616] shadow-[5px_5px_0px_#161616]">
          <div className="flex items-center gap-2 mb-3">
            <Target className="w-5 h-5 text-[#580D14]" />
            <span className="text-xs font-mono font-bold uppercase text-[#580D14]">REVENUE ARCHITECTURE B</span>
          </div>
          <h4 className="text-2xl font-black uppercase text-[#161616] tracking-tight mb-2">
            INDIRECT MONETISATION
          </h4>
          <p className="text-xs font-mono font-bold text-[#646464] mb-4">
            Content grows an existing company or high-ticket service.
          </p>
          <ul className="space-y-2 text-xs sm:text-sm font-medium text-[#161616]">
            <li className="flex items-center gap-2">
              <span className="text-[#580D14] font-bold">→</span> High-Ticket Client Acquisition with Zero Cold Outreach
            </li>
            <li className="flex items-center gap-2">
              <span className="text-[#580D14] font-bold">→</span> Enterprise Business Growth & Founder Brand Authority
            </li>
            <li className="flex items-center gap-2">
              <span className="text-[#580D14] font-bold">→</span> Organic Inbound Demand & Pre-Sold Client Leads
            </li>
            <li className="flex items-center gap-2">
              <span className="text-[#580D14] font-bold">→</span> Attracting Top-Tier Talent & Strategic Investment Partners
            </li>
            <li className="flex items-center gap-2">
              <span className="text-[#580D14] font-bold">→</span> Building Permanent Media Equity & Licensed IP
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};
