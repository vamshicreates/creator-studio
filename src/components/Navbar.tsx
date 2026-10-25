import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ArrowRight, MessageSquare, Clapperboard } from 'lucide-react';

interface NavbarProps {
  onOpenApply: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenApply }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Program', href: '#program' },
    { label: 'The Lot', href: '#lot' },
    { label: 'Mentors', href: '#mentors' },
    { label: 'Curriculum', href: '#curriculum' },
    { label: 'Admissions', href: '#admissions' },
    { label: 'FAQs', href: '#faqs' },
  ];

  return (
    <header
      className={`sticky top-0 left-0 right-0 z-40 transition-all duration-200 ${
        isScrolled
          ? 'bg-[#F7F6F0]/95 backdrop-blur-md border-b-2 border-[#161616] py-3 shadow-md'
          : 'bg-[#F7F6F0] border-b-2 border-[#161616] py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo & Heritage Mark */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-xl bg-[#161616] text-[#C8FF2E] flex items-center justify-center border-2 border-[#161616] group-hover:rotate-6 transition-transform shadow-[2px_2px_0px_#161616]">
            <Clapperboard className="w-5 h-5" />
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-2">
              <span className="font-extrabold text-base sm:text-lg tracking-tight text-[#161616] uppercase">
                Creators’ Studio
              </span>
              <span className="text-[10px] uppercase font-mono font-bold text-[#161616] bg-[#C8FF2E] px-1.5 py-0.5 rounded border border-[#161616]">
                By Ramanaidu
              </span>
            </div>
            <span className="text-[11px] font-mono text-[#646464] font-medium hidden sm:block">
              Guinness Record Film Lot · Hyderabad
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1 bg-[#FEFAE7] px-3 py-1.5 rounded-full border-2 border-[#161616] shadow-[2px_2px_0px_#161616]">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-xs font-bold uppercase tracking-wider px-3.5 py-1.5 text-[#161616] hover:bg-[#161616] hover:text-[#C8FF2E] rounded-full transition-colors duration-150"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right CTA Actions */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href="https://wa.me/919999999999?text=Hi%20Ramanaidu%20Creators%20Studio,%20I'm%20inquiring%20about%20Cohort%2001%20admissions!"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs font-bold text-[#161616] bg-[#C0ECBF] hover:bg-[#a6e0a4] px-3.5 py-2 rounded-full border-2 border-[#161616] shadow-[2px_2px_0px_#161616] transition-all cursor-pointer"
          >
            <MessageSquare className="w-3.5 h-3.5 text-[#161616]" />
            <span>WhatsApp</span>
          </a>

          <button
            onClick={onOpenApply}
            className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-white bg-[#161616] hover:bg-[#C8FF2E] hover:text-[#161616] px-5 py-2.5 rounded-full border-2 border-[#161616] shadow-[3px_3px_0px_#161616] transition-all active:translate-x-0.5 active:translate-y-0.5 cursor-pointer"
          >
            <span>Apply Now</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="lg:hidden flex items-center gap-2">
          <button
            onClick={onOpenApply}
            className="text-xs font-bold uppercase text-[#161616] bg-[#C8FF2E] px-3 py-1.5 rounded-full border-2 border-[#161616]"
          >
            Apply
          </button>
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 rounded-xl bg-[#FEFAE7] border-2 border-[#161616] text-[#161616] shadow-[2px_2px_0px_#161616]"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
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
                  className="text-sm font-extrabold uppercase text-[#161616] hover:text-[#F8330B] py-2 border-b border-[#161616]/15"
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-4 flex flex-col gap-3">
                <a
                  href="https://wa.me/919999999999?text=Hi%20Ramanaidu%20Creators%20Studio,%20I'm%20inquiring%20about%20Cohort%2001%20admissions!"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 py-3 bg-[#C0ECBF] text-[#161616] rounded-xl text-xs font-bold uppercase border-2 border-[#161616]"
                >
                  <MessageSquare className="w-4 h-4" />
                  Chat on WhatsApp
                </a>
                <button
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    onOpenApply();
                  }}
                  className="w-full flex items-center justify-center gap-2 py-3 bg-[#161616] text-[#C8FF2E] font-extrabold uppercase rounded-xl text-xs border-2 border-[#161616]"
                >
                  <span>Apply for Cohort 01</span>
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
