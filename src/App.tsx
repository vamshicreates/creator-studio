import React, { useState } from 'react';
import { AnnouncementBar } from './components/AnnouncementBar';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { MonographSection } from './components/MonographSection';
import { WorkingLotBento } from './components/WorkingLotBento';
import { MentorsSection } from './components/MentorsSection';
import { PhilosophyPillars } from './components/PhilosophyPillars';
import { CurriculumSprint } from './components/CurriculumSprint';
import { DraggableStickerCanvas } from './components/DraggableStickerCanvas';
import { AdmissionsProfiles } from './components/AdmissionsProfiles';
import { AdmissionsPricing } from './components/AdmissionsPricing';
import { FAQSection } from './components/FAQSection';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import { ApplicationModal } from './components/ApplicationModal';

export const App: React.FC = () => {
  const [isApplyModalOpen, setIsApplyModalOpen] = useState<boolean>(false);

  const handleOpenApply = () => {
    setIsApplyModalOpen(true);
  };

  const handleCloseApply = () => {
    setIsApplyModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#F7F6F0] text-[#161616] selection:bg-[#C8FF2E] selection:text-[#161616]">
      {/* Top Admissions Announcement Ticker */}
      <AnnouncementBar onOpenApply={handleOpenApply} />

      {/* Sticky Top Navigation Bar */}
      <Navbar onOpenApply={handleOpenApply} />

      {/* Main Content Sections */}
      <main>
        {/* Hero with Massive Staggered Headline & Marquee Ticker */}
        <Hero onOpenApply={handleOpenApply} />

        {/* Monograph & Contrast Bento ("TAUGHT THEORY. NOT RETENTION.") */}
        <MonographSection onOpenApply={handleOpenApply} />

        {/* The Working Lot (Stage 01, Bay 04, Room 102) Tabbed Bento */}
        <WorkingLotBento onOpenApply={handleOpenApply} />

        {/* Direct Mentorship (D. Suresh Babu, Rana Daggubati, Mihika) & 5 Masterclasses */}
        <MentorsSection />

        {/* Core Philosophy: 3 Pillars & Direct/Indirect Monetization */}
        <PhilosophyPillars />

        {/* 12-Week Curriculum Sprint across 4 Phases */}
        <CurriculumSprint onOpenApply={handleOpenApply} />

        {/* Interactive Draggable Sticker Canvas ("WORK IN STYLE") */}
        <DraggableStickerCanvas />

        {/* Admissions Profiles & Cohort 01 Key Dates */}
        <AdmissionsProfiles onOpenApply={handleOpenApply} />

        {/* Admissions Model & Tuition ("Apply First, Pay After Selection") */}
        <AdmissionsPricing onOpenApply={handleOpenApply} />

        {/* Frequently Asked Questions Neo-Brutalist Accordion */}
        <FAQSection />

        {/* High-Impact Final CTA Banner */}
        <FinalCTA onOpenApply={handleOpenApply} />
      </main>

      {/* Global Footer */}
      <Footer />

      {/* Interactive Cohort 01 Application Modal with Confetti */}
      <ApplicationModal
        isOpen={isApplyModalOpen}
        onClose={handleCloseApply}
      />
    </div>
  );
};

export default App;
