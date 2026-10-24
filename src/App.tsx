import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { StylesShowcase } from './components/StylesShowcase';
import { Services } from './components/Services';
import { Portfolio } from './components/Portfolio';
import { Process } from './components/Process';
import { Testimonials } from './components/Testimonials';
import { Pricing } from './components/Pricing';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  const [activeStyle, setActiveStyle] = useState<string>('Vox (Explainer)');

  const handleOpenBooking = () => {
    const contactElem = document.getElementById('contact');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectStyle = (styleName: string) => {
    setActiveStyle(styleName);
    const contactElem = document.getElementById('contact');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectPlan = (planName: string) => {
    setActiveStyle(`Plan Selected: ${planName}`);
    const contactElem = document.getElementById('contact');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#09090b] text-zinc-100 selection:bg-amber-500/20 selection:text-amber-300">
      {/* Top sticky navbar */}
      <Navbar onOpenBooking={handleOpenBooking} />

      {/* Main Content Sections */}
      <main>
        <Hero onOpenBooking={handleOpenBooking} />
        <StylesShowcase onSelectStyle={handleSelectStyle} />
        <Services onOpenBooking={handleOpenBooking} />
        <Portfolio />
        <Process />
        <Testimonials />
        <Pricing onSelectPlan={handleSelectPlan} />
        <ContactSection preselectedStyle={activeStyle} />
      </main>

      {/* Global Footer */}
      <Footer />
    </div>
  );
};

export default App;
