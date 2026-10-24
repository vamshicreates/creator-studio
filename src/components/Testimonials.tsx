import React from 'react';
import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';

export const Testimonials: React.FC = () => {
  const reviews = [
    {
      name: 'Santosh K.',
      role: 'Documentary Creator & Filmmaker',
      stat: '+124% Watch Time Growth',
      quote: 'The Vox-style and Johnny Harris animations completely transformed our audience retention curve. Our average view duration went from 3:10 to 8:45 on an 11-minute documentary.',
      avatar: '/assets/profile.jpg'
    },
    {
      name: 'Priyatham S.',
      role: 'Visual Storyteller & Tech Creator',
      stat: '3.8x Click-Through Rate',
      quote: 'The curiosity-gap thumbnails and multi-slide carousels generated over 400K impressions in the first 48 hours. Vamshi understands pacing and viewer psychology better than any agency I have worked with.',
      avatar: '/assets/logo.png'
    },
    {
      name: 'Harsha V.',
      role: 'B2B Founder & Podcast Host',
      stat: '1.4M+ Total Reach',
      quote: 'The Metro Media style executive recuts turned our 60-minute conversations into 12 viral shorts that landed us enterprise clients. The sound design and kinetic subtitles are broadcast quality.',
      avatar: '/assets/profile.png'
    }
  ];

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <span className="text-xs font-semibold uppercase tracking-wider text-amber-400 bg-amber-400/10 px-3 py-1 rounded-full border border-amber-400/20">
          Client Feedback
        </span>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mt-3 mb-4">
          Trusted by High-Velocity Creators
        </h2>
        <p className="text-zinc-400 text-sm sm:text-base">
          Proven results across long-form YouTube documentaries, LinkedIn thought leadership, and viral short-form ecosystems.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {reviews.map((review, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="rounded-2xl bg-zinc-900/60 border border-zinc-800/80 p-7 flex flex-col justify-between hover:border-zinc-700 transition-colors"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <span className="text-[11px] font-mono font-semibold text-emerald-400 bg-emerald-950/80 px-2 py-0.5 rounded border border-emerald-800/60">
                  {review.stat}
                </span>
              </div>

              <Quote className="w-6 h-6 text-zinc-700 mb-3" />
              <p className="text-sm text-zinc-300 leading-relaxed mb-6 italic">
                "{review.quote}"
              </p>
            </div>

            <div className="flex items-center gap-3 pt-4 border-t border-zinc-800/80">
              <img
                src={review.avatar}
                alt={review.name}
                className="w-10 h-10 rounded-full object-cover border border-zinc-700"
              />
              <div>
                <div className="text-sm font-bold text-white">{review.name}</div>
                <div className="text-xs text-zinc-400">{review.role}</div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
