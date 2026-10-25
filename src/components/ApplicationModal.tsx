import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import confetti from 'canvas-confetti';
import { X, Sparkles, ArrowRight, MessageSquare, CheckCircle2 } from 'lucide-react';

interface ApplicationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ApplicationModal: React.FC<ApplicationModalProps> = ({ isOpen, onClose }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [profile, setProfile] = useState('Aspiring Creator');
  const [portfolioLink, setPortfolioLink] = useState('');
  const [goal, setGoal] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || (!email && !phone)) return;

    // Trigger celebratory confetti in Krackerz colors
    confetti({
      particleCount: 120,
      spread: 80,
      origin: { y: 0.6 },
      colors: ['#C8FF2E', '#F8330B', '#C7CAFF', '#161616', '#C0ECBF']
    });

    setIsSubmitted(true);
  };

  const handleReset = () => {
    setName('');
    setEmail('');
    setPhone('');
    setProfile('Aspiring Creator');
    setPortfolioLink('');
    setGoal('');
    setIsSubmitted(false);
    onClose();
  };

  const whatsappExpediteUrl = `https://wa.me/919999999999?text=${encodeURIComponent(
    `Hi Ramanaidu Admissions Team, I just submitted my application for Cohort 01! Name: ${name || 'Creator'}, Category: ${profile}, Channel/Portfolio: ${portfolioLink || 'Not provided yet'}.`
  )}`;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-[#161616]/75 backdrop-blur-sm"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.25 }}
            className="relative w-full max-w-xl rounded-3xl bg-[#FEFAE7] border-2 border-[#161616] shadow-[8px_8px_0px_#161616] p-6 sm:p-8 z-10 my-8 overflow-hidden"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-5 right-5 w-9 h-9 rounded-full bg-white border-2 border-[#161616] shadow-[2px_2px_0px_#161616] flex items-center justify-center text-[#161616] hover:bg-[#F8330B] hover:text-white transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            {!isSubmitted ? (
              <div>
                {/* Header */}
                <div className="mb-6">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#161616] text-[#C8FF2E] text-[11px] font-mono font-bold uppercase tracking-wider mb-2">
                    <Sparkles className="w-3.5 h-3.5" />
                    RAMANAIDU STUDIOS · COHORT 01
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-black uppercase text-[#161616] tracking-tight">
                    Apply for Cohort 01
                  </h3>
                  <p className="text-xs font-mono font-bold text-[#580D14] mt-1">
                    12 Weeks on the Working Lot · Apply First, Pay After Selection
                  </p>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-mono font-bold uppercase text-[#161616] mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. Vamshi Kurapati"
                      className="w-full px-4 py-2.5 rounded-xl bg-white border-2 border-[#161616] font-medium text-xs sm:text-sm text-[#161616] placeholder:text-[#646464] focus:outline-none focus:bg-[#FEFAE7]"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono font-bold uppercase text-[#161616] mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="you@creator.com"
                        className="w-full px-4 py-2.5 rounded-xl bg-white border-2 border-[#161616] font-medium text-xs sm:text-sm text-[#161616] placeholder:text-[#646464] focus:outline-none focus:bg-[#FEFAE7]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-mono font-bold uppercase text-[#161616] mb-1">
                        WhatsApp / Phone *
                      </label>
                      <input
                        type="tel"
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="+91 99999 99999"
                        className="w-full px-4 py-2.5 rounded-xl bg-white border-2 border-[#161616] font-medium text-xs sm:text-sm text-[#161616] placeholder:text-[#646464] focus:outline-none focus:bg-[#FEFAE7]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono font-bold uppercase text-[#161616] mb-1">
                      Admissions Profile Category
                    </label>
                    <select
                      value={profile}
                      onChange={(e) => setProfile(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl bg-white border-2 border-[#161616] font-mono text-xs sm:text-sm text-[#161616] focus:outline-none cursor-pointer"
                    >
                      <option value="Aspiring Creator">Profile 01: Aspiring Creator (Starting out)</option>
                      <option value="Working Creator">Profile 02: Working Creator (Existing audience)</option>
                      <option value="Business Owner">Profile 03: Business Owner & Founder</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-mono font-bold uppercase text-[#161616] mb-1">
                      Channel Link / Portfolio / Social URL (Optional)
                    </label>
                    <input
                      type="url"
                      value={portfolioLink}
                      onChange={(e) => setPortfolioLink(e.target.value)}
                      placeholder="https://youtube.com/@yourchannel or Instagram"
                      className="w-full px-4 py-2.5 rounded-xl bg-white border-2 border-[#161616] font-medium text-xs sm:text-sm text-[#161616] placeholder:text-[#646464] focus:outline-none focus:bg-[#FEFAE7]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono font-bold uppercase text-[#161616] mb-1">
                      What Value Do You Want To Build?
                    </label>
                    <textarea
                      rows={3}
                      value={goal}
                      onChange={(e) => setGoal(e.target.value)}
                      placeholder="Briefly describe your niche idea, business goal, or what you want to achieve on the Ramanaidu lot..."
                      className="w-full px-4 py-2 rounded-xl bg-white border-2 border-[#161616] font-medium text-xs sm:text-sm text-[#161616] placeholder:text-[#646464] focus:outline-none focus:bg-[#FEFAE7]"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full py-4 rounded-full bg-[#161616] text-[#C8FF2E] font-black uppercase text-xs tracking-wider border-2 border-[#161616] shadow-[4px_4px_0px_#161616] hover:bg-[#C8FF2E] hover:text-[#161616] transition-all flex items-center justify-center gap-2 cursor-pointer active:translate-x-0.5 active:translate-y-0.5"
                    >
                      <span>Submit Application · Zero Upfront Cost</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                    <div className="text-center text-[11px] font-mono text-[#646464] mt-2">
                      Applications for Cohort 01 close 30 Nov 2026.
                    </div>
                  </div>
                </form>
              </div>
            ) : (
              /* Success Confirmation */
              <div className="text-center py-6">
                <div className="w-16 h-16 rounded-full bg-[#C8FF2E] border-2 border-[#161616] shadow-[3px_3px_0px_#161616] flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 className="w-8 h-8 text-[#161616]" />
                </div>

                <div className="inline-block px-3 py-1 rounded-full bg-[#161616] text-[#C8FF2E] text-[11px] font-mono font-bold uppercase mb-2">
                  APPLICATION RECORDED // COHORT 01
                </div>

                <h3 className="text-2xl sm:text-3xl font-black uppercase text-[#161616] tracking-tight mb-2">
                  You're in the running, {name.split(' ')[0]}!
                </h3>

                <p className="text-xs sm:text-sm font-medium text-[#303030] leading-relaxed max-w-md mx-auto mb-6">
                  Our admissions board is reviewing applications for the Ramanaidu Studios lot residency. We will reach out to <span className="font-bold text-[#161616]">{email || phone}</span> regarding your shortlist status and call sheet timetable.
                </p>

                <div className="p-4 rounded-2xl bg-white border-2 border-[#161616] shadow-[3px_3px_0px_#161616] max-w-md mx-auto mb-6">
                  <div className="text-xs font-mono font-bold uppercase text-[#161616] mb-2">
                    Want an expedited review?
                  </div>
                  <a
                    href={whatsappExpediteUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#C0ECBF] text-[#161616] font-bold text-xs uppercase border-2 border-[#161616] shadow-[2px_2px_0px_#161616] hover:bg-[#a6e0a4] transition-colors"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Ping Admissions on WhatsApp</span>
                  </a>
                </div>

                <button
                  onClick={handleReset}
                  className="px-6 py-2.5 rounded-full bg-[#161616] text-white text-xs font-mono font-bold uppercase border-2 border-[#161616] hover:bg-[#C8FF2E] hover:text-[#161616] transition-colors cursor-pointer"
                >
                  Done
                </button>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
