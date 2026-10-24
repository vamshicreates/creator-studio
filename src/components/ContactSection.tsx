import React, { useState } from 'react';
import { motion } from 'motion/react';
import confetti from 'canvas-confetti';
import { MessageSquare, Mail, Send, Check, Copy } from 'lucide-react';
import { EDITING_STYLES } from '../data/styles';

interface ContactSectionProps {
  preselectedStyle?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ preselectedStyle = '' }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [selectedStyle, setSelectedStyle] = useState(preselectedStyle || 'Vox (Explainer)');
  const [volume, setVolume] = useState('1-4 videos/month');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || (!email && !phone)) return;

    // Trigger celebratory confetti
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 }
    });

    setSubmitted(true);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('hello@vamshicreates.tech');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const whatsAppDirectUrl = `https://wa.me/919999999999?text=${encodeURIComponent(
    `Hi Vamshi, my name is ${name || 'Creator'}. I'm interested in the "${selectedStyle}" editing style for ${volume}. Here is what I need: ${message || 'Looking to scale my channel retention.'}`
  )}`;

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-zinc-800">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Left Column: Direct Connect & Studio Info */}
        <div className="lg:col-span-5 flex flex-col justify-between">
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-amber-400 bg-amber-400/10 px-3 py-1 rounded-full border border-amber-400/20">
              Start Your Sprint
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mt-3 mb-4">
              Let's Engineer Your Next Viral Video
            </h2>
            <p className="text-zinc-400 text-sm sm:text-base leading-relaxed mb-8">
              Whether you need a single documentary sprint or an entire channel transformation, we respond within 4 hours. No agency bureaucracy — you deal directly with the creative leads.
            </p>

            {/* Quick Action Badges */}
            <div className="space-y-4 mb-8">
              {/* WhatsApp Quick Click */}
              <a
                href="https://wa.me/919999999999?text=Hi%20Vamshi,%20I'm%20interested%20in%20high-retention%20video%20editing%20services!"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-2xl bg-zinc-900/80 border border-zinc-800 hover:border-emerald-500/50 transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 group-hover:scale-105 transition-transform">
                  <MessageSquare className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-sm font-bold text-white group-hover:text-emerald-300 transition-colors">
                    Chat on WhatsApp Directly
                  </div>
                  <div className="text-xs text-zinc-400">Instant response during business hours</div>
                </div>
              </a>

              {/* Email Direct */}
              <div
                onClick={handleCopyEmail}
                className="flex items-center justify-between p-4 rounded-2xl bg-zinc-900/80 border border-zinc-800 hover:border-amber-500/50 transition-all cursor-pointer group"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 group-hover:scale-105 transition-transform">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-white group-hover:text-amber-300 transition-colors">
                      hello@vamshicreates.tech
                    </div>
                    <div className="text-xs text-zinc-400">Official studio inquiries</div>
                  </div>
                </div>
                <button
                  type="button"
                  className="px-3 py-1.5 rounded-lg bg-zinc-800 text-xs font-medium text-zinc-300 flex items-center gap-1 group-hover:bg-zinc-700"
                >
                  {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedEmail ? 'Copied' : 'Copy'}</span>
                </button>
              </div>

              {/* Founder Profile Badge */}
              <div className="flex items-center gap-3 p-4 rounded-2xl bg-zinc-950/60 border border-zinc-800/60">
                <img
                  src="/assets/profile.jpg"
                  alt="Vamshi Krishna"
                  className="w-12 h-12 rounded-xl object-cover border border-zinc-700"
                />
                <div>
                  <div className="text-sm font-bold text-white">Vamshi Krishna</div>
                  <div className="text-xs text-zinc-400">Lead Story Architect & Creative Technologist</div>
                </div>
              </div>
            </div>
          </div>

          <div className="text-xs text-zinc-500">
            Based in India • Serving global creators in US, UK, Australia & Asia.
          </div>
        </div>

        {/* Right Column: Working Booking / Inquiry Form */}
        <div className="lg:col-span-7">
          <div className="rounded-3xl bg-zinc-900/80 border border-zinc-800 p-6 sm:p-10 backdrop-blur-xl relative">
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12"
              >
                <div className="w-16 h-16 rounded-2xl bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto mb-6">
                  <Check className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Inquiry Received!</h3>
                <p className="text-zinc-400 text-sm max-w-md mx-auto mb-8">
                  Thank you, <strong className="text-white">{name}</strong>. We've received your request for the <span className="text-amber-400 font-medium">{selectedStyle}</span> style and will review your project brief immediately.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                  <a
                    href={whatsAppDirectUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 bg-emerald-500 hover:bg-emerald-400 text-black font-semibold text-sm rounded-xl transition-colors"
                  >
                    <MessageSquare className="w-4 h-4" />
                    Speed Up: Send on WhatsApp Now
                  </a>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="w-full sm:w-auto px-6 py-3 bg-zinc-800 hover:bg-zinc-700 text-zinc-200 text-sm font-medium rounded-xl transition-colors"
                  >
                    Send Another Note
                  </button>
                </div>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. Alex Hormozi"
                      className="w-full px-4 py-3 rounded-xl bg-zinc-950 border border-zinc-800 text-white text-sm focus:outline-none focus:border-amber-400 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="alex@creator.com"
                      className="w-full px-4 py-3 rounded-xl bg-zinc-950 border border-zinc-800 text-white text-sm focus:outline-none focus:border-amber-400 transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-2">
                      WhatsApp / Phone (Optional)
                    </label>
                    <input
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="+1 (555) 000-0000"
                      className="w-full px-4 py-3 rounded-xl bg-zinc-950 border border-zinc-800 text-white text-sm focus:outline-none focus:border-amber-400 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-2">
                      Monthly Video Volume
                    </label>
                    <select
                      value={volume}
                      onChange={(e) => setVolume(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-zinc-950 border border-zinc-800 text-white text-sm focus:outline-none focus:border-amber-400 transition-colors"
                    >
                      <option value="1 single video">1 Single Flagship Video</option>
                      <option value="1-4 videos/month">1 - 4 Videos / Month</option>
                      <option value="5-8 videos/month">5 - 8 Videos / Month</option>
                      <option value="Daily short-form package">Daily Short-Form Package</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-2">
                    Primary Editing Style Preference
                  </label>
                  <select
                    value={selectedStyle}
                    onChange={(e) => setSelectedStyle(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-zinc-950 border border-zinc-800 text-white text-sm focus:outline-none focus:border-amber-400 transition-colors"
                  >
                    {EDITING_STYLES.map((style) => (
                      <option key={style.id} value={`${style.name} (${style.creator})`}>
                        {style.creator} — {style.name} ({style.category})
                      </option>
                    ))}
                    <option value="Custom Hybrid">Custom Hybrid of multiple styles</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-2">
                    Project Brief & YouTube/Channel Link
                  </label>
                  <textarea
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Tell us about your raw footage, timeline, channel goals, or any specific inspiration references..."
                    className="w-full px-4 py-3 rounded-xl bg-zinc-950 border border-zinc-800 text-white text-sm focus:outline-none focus:border-amber-400 transition-colors resize-none"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-4 rounded-xl font-bold text-sm text-black bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 shadow-xl shadow-amber-400/20 active:scale-[0.99] transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Project Inquiry</span>
                  </button>
                  <div className="text-center mt-3 text-[11px] text-zinc-500">
                    Guaranteed response within 4 hours • 100% Confidential
                  </div>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
