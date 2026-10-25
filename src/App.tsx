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
      {/* Top Ticker */}
      <AnnouncementBar />

      {/* Sticky Header */}
      <Navbar onOpenApply={handleOpenApply} />

      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <Hero onOpenApply={handleOpenApply} />

        {/* The Producer's Monologue & Industry Contrast */}
        <MonographSection />

        {/* The Working Lot (Stage 01, Bay 04, Room 102) */}
        <WorkingLotBento onOpenApply={handleOpenApply} />

        {/* Direct Mentorship & Masterclasses */}
        <MentorsSection />

        {/* Core Philosophy: 3 Value Pillars */}
        <PhilosophyPillars />

        {/* 12-Week Curriculum Sprint */}
        <CurriculumSprint />

        {/* Interactive Draggable Sticker Canvas */}
        <DraggableStickerCanvas />

        {/* Admissions Profiles with Curated Images & Key Dates */}
        <AdmissionsProfiles onOpenApply={handleOpenApply} />

        {/* Admissions & Tuition: Apply First, Pay Only If Selected */}
        <AdmissionsPricing onOpenApply={handleOpenApply} />

        {/* 5 FAQs */}
        <FAQSection />

        {/* Final CTA Banner */}
        <FinalCTA onOpenApply={handleOpenApply} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Application Modal */}
      <ApplicationModal
        isOpen={isApplyModalOpen}
        onClose={handleCloseApply}
      />
    </div>
  );
};

export default App;
