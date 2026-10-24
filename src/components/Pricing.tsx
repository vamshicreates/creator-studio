import React from 'react';
import { motion } from 'motion/react';
import { Check, Sparkles, ArrowRight, ShieldCheck } from 'lucide-react';

interface PricingProps {
  onSelectPlan: (planName: string) => void;
}

export const Pricing: React.FC<PricingProps> = ({ onSelectPlan }) => {
  const plans = [
    {
      name: 'Creator Sprint',
      tagline: 'Perfect for a flagship video or viral short series',
      price: '₹15,000',
      period: 'single project',
      popular: false,
      features: [
        '1 High-Retention Long-Form Video (up to 12 min)',
        'OR 4 Viral Vertical Shorts (9:16 format)',
        'Choice of any 1 from 15 Master Editing Styles',
        '2 CTR-Engineered Thumbnail Variations',
        'Multi-track Sound Design (Foley, risers, vocal polish)',
        '48-Hour Turnaround with 2 Free Revision Cycles'
      ],
      ctaText: 'Start Single Sprint',
      accent: 'border-zinc-800'
    },
    {
      name: 'Channel Growth Engine',
      tagline: 'Our most popular tier for active weekly creators',
      price: '₹45,000',
      period: 'per month',
      popular: true,
      features: [
        '4 High-Retention Long-Form Videos (weekly drop)',
        '12 Viral Shorts extracted with kinetic typography',
        '3D Motion Graphics, Animated Maps & 2.5D Parallax',
        'Custom Claude Code editing agent prompt for your voice',
        'A/B Thumbnail Suite (4 sets included)',
        'Direct Private Slack Channel with 24hr response time',
        'Pre-publish Retention Review & Pacing Audit'
      ],
      ctaText: 'Scale My Channel',
      accent: 'border-amber-400/80 shadow-2xl shadow-amber-400/10'
    },
    {
      name: 'Studio Partner Retainer',
      tagline: 'End-to-end production for brands & top-tier channels',
      price: '₹95,000',
      period: 'per month',
      popular: false,
      features: [
        '8 Flagship Long-Form Videos + 24 Viral Shorts',
        'Full Screenplay & Story Architecture (Fountain format)',
        'Proprietary DaVinci / Premiere Agent Automation Pipeline',
        'Dedicated Creative Lead & Audio Mastering Specialist',
        'Multi-platform asset distribution (YT, IG, TikTok, X)',
        'Bi-weekly Channel Analytics & Retention Strategy Calls',
        'Priority same-day emergency turnaround'
      ],
      ctaText: 'Partner with Studio',
      accent: 'border-zinc-800'
    }
  ];

  return (
    <section id="pricing" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <span className="text-xs font-semibold uppercase tracking-wider text-amber-400 bg-amber-400/10 px-3 py-1 rounded-full border border-amber-400/20">
          Transparent Investment
        </span>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mt-3 mb-4">
          Predictable Pricing. No Hidden Surprises.
        </h2>
        <p className="text-zinc-400 text-sm sm:text-base">
          Quote in writing, 50% upfront deposit, and guaranteed on-time delivery backed by verified retention outcomes.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
        {plans.map((plan, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className={`relative rounded-3xl bg-zinc-900/70 border ${plan.accent} p-8 flex flex-col justify-between backdrop-blur-md transition-all duration-300 hover:scale-[1.01]`}
          >
            {plan.popular && (
              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-amber-400 to-amber-500 text-black text-xs font-bold px-4 py-1 rounded-full shadow-lg flex items-center gap-1.5 uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5 fill-black" />
                Most Popular
              </div>
            )}

            <div>
              <div className="mb-6">
                <h3 className="text-xl font-bold text-white mb-2">{plan.name}</h3>
                <p className="text-xs text-zinc-400 min-h-[32px]">{plan.tagline}</p>
              </div>

              <div className="flex items-baseline gap-2 mb-6 pb-6 border-b border-zinc-800">
                <span className="text-4xl sm:text-5xl font-extrabold text-white font-mono">{plan.price}</span>
                <span className="text-xs text-zinc-400 font-mono">/ {plan.period}</span>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-300">
                    <Check className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <button
                onClick={() => onSelectPlan(plan.name)}
                className={`w-full py-3.5 px-4 rounded-xl text-sm font-semibold flex items-center justify-center gap-2 transition-all cursor-pointer ${
                  plan.popular
                    ? 'bg-amber-400 hover:bg-amber-300 text-black shadow-lg shadow-amber-400/20 active:scale-95'
                    : 'bg-zinc-800 hover:bg-zinc-700 text-white'
                }`}
              >
                <span>{plan.ctaText}</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <div className="mt-3 flex items-center justify-center gap-1.5 text-[11px] text-zinc-500">
                <ShieldCheck className="w-3.5 h-3.5 text-zinc-500" />
                <span>50% deposit • Zero risk guarantee</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
