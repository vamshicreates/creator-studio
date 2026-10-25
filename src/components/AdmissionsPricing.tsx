import React from 'react';
import { motion } from 'motion/react';
import { Check, Sparkles, ArrowRight, ShieldCheck } from 'lucide-react';

interface AdmissionsPricingProps {
  onOpenApply: () => void;
}

export const AdmissionsPricing: React.FC<AdmissionsPricingProps> = ({ onOpenApply }) => {
  const cards = [
    {
      title: 'Cohort 01 Residency',
      tagline: 'The complete 12-week creator-to-media enterprise sprint',
      costBadge: 'APPLY FIRST',
      costSub: 'Pay after selection',
      popular: true,
      features: [
        '12 Weeks of Creator Business & Story Architecture',
        'Physical Shoot on Stage 01 Multi-Cam Soundstage',
        'DaVinci Resolve Bay 04 Micro-Pacing & Color Suite',
        'Direct Mentorship from D. Suresh Babu & Rana Daggubati',
        '5 Live Masterclasses from Working Creators',
        'The ₹1 Lakh Creator Challenge & Weekly Games',
        'Demo Day Presentation on the Ramanaidu Lot'
      ],
      ctaText: 'Apply for Cohort 01',
      bgClass: 'bg-[#C8FF2E] text-[#161616]'
    },
    {
      title: 'Working Creator Track',
      tagline: 'For active creators looking to upgrade production & retention',
      costBadge: 'INVITE ONLY',
      costSub: 'Tailored studio hours',
      popular: false,
      features: [
        'Advanced Retention & Micro-Pacing Algorithmic Audit',
        'Dedicated Weekend Soundstage Shoot Blocks on Stage 01',
        'Custom AI Agent Automation for DaVinci & Scripting',
        'Direct Audience Monetization & High-Ticket Retainers',
        'A/B Curiosity-Gap Thumbnail Lab Testing',
        'Network with High-Velocity Creator Peers'
      ],
      ctaText: 'Submit Channel for Review',
      bgClass: 'bg-white text-[#161616]'
    },
    {
      title: 'Founder & Brand Lab',
      tagline: 'For venture-backed founders and enterprise media brands',
      costBadge: 'ENTERPRISE',
      costSub: 'Quarterly partnership',
      popular: false,
      features: [
        'Full Narrative IP Architecture & Founder Media Series',
        'Brand Ideology & Community Architecture with Mihika',
        'Multi-Camera Soundstage Production & Call Sheet Crew',
        'Organic Inbound Customer Acquisition Funnel',
        'Broadcast Audio & Cinema Color Grading',
        'Executive Retainer & Strategic Distribution'
      ],
      ctaText: 'Schedule Enterprise Call',
      bgClass: 'bg-[#161616] text-[#F7F6F0]'
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t-2 border-[#161616]/15">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <span className="text-xs font-mono font-bold uppercase tracking-wider bg-[#F8330B] text-white px-3 py-1 rounded-full border border-[#161616]">
          // ADMISSIONS & TUITION
        </span>
        <h2 className="text-3xl sm:text-5xl font-black uppercase text-[#161616] tracking-tight mt-3">
          APPLY FIRST. <br />
          <span className="text-[#F8330B]">PAY ONLY IF YOU’RE SELECTED.</span>
        </h2>
        <p className="text-sm sm:text-base font-medium text-[#303030] mt-3">
          No payment to submit an application. We evaluate your passion, vision, and creator goals first. Tuition and payment plans are provided upon shortlist selection.
        </p>
      </div>

      {/* Pricing Cards Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
        {cards.map((card, index) => (
          <motion.div
            key={card.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className={`rounded-3xl border-2 border-[#161616] shadow-[6px_6px_0px_#161616] p-8 flex flex-col justify-between relative ${card.bgClass}`}
          >
            {card.popular && (
              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#F8330B] text-white text-[11px] font-mono font-extrabold px-4 py-1 rounded-full border-2 border-[#161616] shadow-[2px_2px_0px_#161616] flex items-center gap-1.5 uppercase">
                <Sparkles className="w-3.5 h-3.5" />
                Inaugural Cohort
              </div>
            )}

            <div>
              <div className="mb-6">
                <h3 className="text-2xl font-black uppercase tracking-tight mb-2">
                  {card.title}
                </h3>
                <p className="text-xs font-medium opacity-80 min-h-[32px]">
                  {card.tagline}
                </p>
              </div>

              {/* Price / Model Stamp */}
              <div className="mb-6 pb-6 border-b-2 border-current/20">
                <div className="text-3xl sm:text-4xl font-black font-mono tracking-tight">
                  {card.costBadge}
                </div>
                <div className="text-xs font-mono font-bold mt-1 opacity-75">
                  {card.costSub}
                </div>
              </div>

              {/* Features List */}
              <ul className="space-y-3 mb-8">
                {card.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm font-medium">
                    <Check className="w-4 h-4 flex-shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <button
                onClick={onOpenApply}
                className={`w-full py-3.5 px-4 rounded-full text-xs font-extrabold uppercase tracking-wider flex items-center justify-center gap-2 border-2 border-[#161616] shadow-[3px_3px_0px_#161616] transition-all cursor-pointer active:translate-x-0.5 active:translate-y-0.5 ${
                  card.popular
                    ? 'bg-[#161616] text-[#C8FF2E] hover:bg-white hover:text-[#161616]'
                    : card.bgClass.includes('bg-[#161616]')
                    ? 'bg-[#C8FF2E] text-[#161616] hover:bg-white'
                    : 'bg-[#161616] text-white hover:bg-[#C8FF2E] hover:text-[#161616]'
                }`}
              >
                <span>{card.ctaText}</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <div className="mt-3 flex items-center justify-center gap-1.5 text-[11px] font-mono opacity-70">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Zero payment required to apply</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
