import React from 'react';
import { motion } from 'motion/react';
import { Video, Film, Cpu, Image, BookOpen, Layers, CheckCircle2, ArrowRight } from 'lucide-react';

interface ServicesProps {
  onOpenBooking: () => void;
}

export const Services: React.FC<ServicesProps> = ({ onOpenBooking }) => {
  const services = [
    {
      icon: Video,
      title: 'High-Retention YouTube Long-Form',
      description: 'End-to-end documentary & explainer editing engineered to beat algorithm drop-off with narrative pattern interrupts, dynamic B-roll, and cinematic sound design.',
      deliverables: ['Custom 15-Style Grading', 'Multi-Layer Soundscape (Foley + Risers)', 'Retention Hook Optimization', 'Chapters & End Screens'],
      accent: 'from-amber-500/20 to-orange-500/20'
    },
    {
      icon: Film,
      title: 'Viral Short-Form Content Engine',
      description: 'Turn podcasts, webinars, and long-form thoughts into high-velocity vertical reels (9:16) with word-by-word dynamic typography and 0.8s hook triggers.',
      deliverables: ['Word-by-Word Kinetic Subtitles', 'Sound-Reactive Motion Graphics', 'Hook A/B Variants', 'Multi-platform Formats (IG/YT/TikTok)'],
      accent: 'from-purple-500/20 to-pink-500/20'
    },
    {
      icon: Cpu,
      title: 'AI Workflows & Custom Agent Pipelines',
      description: 'Automate your creative workflow with custom Claude Code skills, DaVinci Resolve script plugins, and Whisper-powered caption engines.',
      deliverables: ['Custom Claude Code Skills', 'DaVinci / Premiere Script Automation', 'Automated Clip Selection', 'Transcript & B-roll Indexing'],
      accent: 'from-cyan-500/20 to-blue-500/20'
    },
    {
      icon: Layers,
      title: '3D Motion Design & Spatial Infographics',
      description: 'Custom 2.5D parallax photo treatments, animated vector maps, isometric device mockups, and dimensional UI explosions that elevate production value.',
      deliverables: ['2.5D Photo Depth Parallax', '3D Terrain & Geo Flights', 'Custom Bezier Easing Curves', 'Branded Lower Thirds & Overlays'],
      accent: 'from-emerald-500/20 to-teal-500/20'
    },
    {
      icon: Image,
      title: 'CTR-Engineered Thumbnails & Carousels',
      description: 'Thumbnails and multi-slide carousels engineered using curiosity gap psychology, rim lighting, 3D depth, and bold minimalist typography.',
      deliverables: ['3 A/B Thumbnail Variants', '3D Asset Compositing & Rim Lighting', 'High-Swipe Instagram Carousels', 'Figma & PSD Source Assets'],
      accent: 'from-yellow-500/20 to-amber-500/20'
    },
    {
      icon: BookOpen,
      title: 'Screenplay & Narrative Story Architecture',
      description: 'Turn complex research papers, business histories, or raw ideas into gripping Fountain-formatted screenplays with three-act cliffhangers.',
      deliverables: ['Fountain Script Formatting', 'Visual Beat Sheet & Scene Breakdown', 'Audience Tension Graphing', 'Story Consultation'],
      accent: 'from-rose-500/20 to-red-500/20'
    }
  ];

  return (
    <section id="services" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <span className="text-xs font-semibold uppercase tracking-wider text-amber-400 bg-amber-400/10 px-3 py-1 rounded-full border border-amber-400/20">
          Studio Capabilities
        </span>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mt-3 mb-4">
          Everything You Need to Dominate Your Niche
        </h2>
        <p className="text-zinc-400 text-sm sm:text-base">
          From the first script line to the final 4K export and high-CTR thumbnail, our studio takes complete ownership of your visual output.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, index) => {
          const Icon = service.icon;
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="rounded-2xl bg-zinc-900/60 border border-zinc-800/80 p-7 hover:border-zinc-700 transition-all duration-300 flex flex-col justify-between group hover:shadow-xl hover:shadow-black/60"
            >
              <div>
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${service.accent} border border-white/10 flex items-center justify-center mb-6 group-hover:scale-105 transition-transform`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3 tracking-tight group-hover:text-amber-300 transition-colors">
                  {service.title}
                </h3>
                <p className="text-sm text-zinc-400 leading-relaxed mb-6">
                  {service.description}
                </p>
              </div>

              <div>
                <div className="text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-3">Key Deliverables:</div>
                <ul className="space-y-2 mb-6">
                  {service.deliverables.map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-xs text-zinc-400">
                      <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <button
                  onClick={onOpenBooking}
                  className="w-full py-2.5 px-4 rounded-xl bg-zinc-800/80 hover:bg-zinc-700 text-zinc-200 hover:text-white text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                >
                  Request Service
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};
