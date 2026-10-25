import React from 'react';
import { ArrowUp, Clapperboard, Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t-2 border-[#161616] bg-[#F7F6F0] py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-12 border-b-2 border-[#161616]/15">
        {/* Brand Information */}
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-2xl bg-[#161616] text-[#C8FF2E] border-2 border-[#161616] flex items-center justify-center flex-shrink-0 shadow-[2px_2px_0px_#161616]">
            <Clapperboard className="w-6 h-6" />
          </div>
          <div>
            <div className="text-lg font-black uppercase text-[#161616] tracking-tight">
              Creators’ Studio
              <span className="text-xs font-mono font-bold bg-[#C8FF2E] text-[#161616] px-2 py-0.5 rounded ml-2 border border-[#161616]">
                By Ramanaidu
              </span>
            </div>
            <div className="text-xs font-mono text-[#646464] mt-1 max-w-md">
              Where 60 years of cinema institution building meets the digital creator economy. Ramanaidu Studios campus lot, Jubilee Hills, Hyderabad.
            </div>
          </div>
        </div>

        {/* Links & Operations Badge */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
          <div className="text-xs font-mono text-[#161616] font-bold">
            Built & operated by{' '}
            <span className="bg-[#FEFAE7] px-2 py-1 rounded border border-[#161616]">
              Melbourne MAMA Creative Space
            </span>
          </div>

          <button
            onClick={scrollToTop}
            className="p-3 rounded-full bg-white border-2 border-[#161616] shadow-[2px_2px_0px_#161616] hover:bg-[#C8FF2E] transition-colors cursor-pointer"
            title="Back to Top"
            aria-label="Back to Top"
          >
            <ArrowUp className="w-4 h-4 text-[#161616]" />
          </button>
        </div>
      </div>

      {/* Copyright & Disclaimer Bar */}
      <div className="max-w-7xl mx-auto mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#646464]">
        <div>
          © 2026 Creators’ Studio by Ramanaidu. All Rights Reserved.
        </div>
        <div className="flex items-center gap-1">
          <span>Crafted with</span>
          <Heart className="w-3.5 h-3.5 text-[#F8330B] fill-[#F8330B]" />
          <span>for digitalpreneurs and storytellers</span>
        </div>
      </div>
    </footer>
  );
};
