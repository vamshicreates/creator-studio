import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ArrowRight, Clapperboard } from 'lucide-react';

interface NavbarProps {
  onOpenApply: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenApply }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Program', href: '#program' },
    { label: 'The Lot', href: '#lot' },
    { label: 'Mentors', href: '#mentors' },
    { label: 'Curriculum', href: '#curriculum' },
    { label: 'Admissions', href: '#admissions' },
    { label: 'FAQs', href: '#faqs' },
  ];

  return (
    <header className="sticky top-0 left-0 right-0 z-40 bg-[#F7F6F0]/95 backdrop-blur-md border-b-2 border-[#161616] py-3.5 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-xl bg-[#161616] text-[#C8FF2E] flex items-center justify-center border-2 border-[#161616] shadow-[2px_2px_0px_#161616] group-hover:rotate-6 transition-transform">
            <Clapperboard className="w-5 h-5" />
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-2">
              <span className="font-heading font-black text-lg sm:text-xl tracking-tight text-[#161616] uppercase">
                Creators’ Studio
              </span>
              <span className="text-[10px] font-mono font-black uppercase text-[#161616] bg-[#C8FF2E] px-1.5 py-0.5 rounded border border-[#161616]">
                By Ramanaidu
              </span>
            </div>
          </div>
        </a>

        {/* Center Pill Menu */}
        <nav className="hidden lg:flex items-center gap-1 bg-[#FEFAE7] px-3.5 py-1.5 rounded-full border-2 border-[#161616] shadow-[2px_2px_0px_#161616]">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-xs font-heading font-extrabold uppercase tracking-wider px-3.5 py-1.5 text-[#161616] hover:bg-[#161616] hover:text-[#C8FF2E] rounded-full transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right CTA */}
        <div className="hidden sm:flex items-center gap-3">
          <motion.button
            whileHover={{ scale: 1.03, y: -1 }}
            whileTap={{ scale: 0.98, y: 1 }}
            onClick={onOpenApply}
            className="flex items-center gap-2 text-xs font-heading font-black uppercase tracking-wider text-white bg-[#161616] hover:bg-[#C8FF2E] hover:text-[#161616] px-6 py-2.5 rounded-full border-2 border-[#161616] shadow-[3px_3px_0px_#161616] cursor-pointer transition-colors"
          >
            <span>Apply Now</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </motion.button>
        </div>

        {/* Mobile Toggle */}
        <div className="lg:hidden flex items-center gap-2">
          <button
            onClick={onOpenApply}
            className="text-xs font-heading font-black uppercase text-[#161616] bg-[#C8FF2E] px-3 py-1.5 rounded-full border-2 border-[#161616]"
          >
            Apply
          </button>
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 rounded-xl bg-[#FEFAE7] border-2 border-[#161616] text-[#161616]"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-[#F7F6F0] border-b-2 border-[#161616] px-6 py-6"
          >
            <div className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-sm font-heading font-black uppercase text-[#161616] py-2 border-b border-[#161616]/10"
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-4">
                <button
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    onOpenApply();
                  }}
                  className="w-full flex items-center justify-center gap-2 py-3.5 bg-[#161616] text-[#C8FF2E] font-heading font-black uppercase rounded-xl text-xs border-2 border-[#161616]"
                >
                  <span>Apply Now</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
