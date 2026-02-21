import { useState } from 'react';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { AuthModal } from './components/layout/AuthModal';
import { HeroSection } from './components/sections/HeroSection';
import { StatsSection } from './components/sections/StatsSection';
import { InfoBoxesSection } from './components/sections/InfoBoxesSection';
import { WhySection } from './components/sections/WhySection';
import { CohortsSection } from './components/sections/CohortsSection';
import { PodcastsSection } from './components/sections/PodcastsSection';
import { CommunitySection } from './components/sections/CommunitySection';
import { FaqSection } from './components/sections/FaqSection';
import { ContactSection } from './components/sections/ContactSection';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { TermsPage } from './pages/TermsPage';
import { PrivacyPage } from './pages/PrivacyPage';
import { RefundPage } from './pages/RefundPage';
import { StorePage } from './pages/StorePage';
import { CoursesPage } from './pages/CoursesPage';

function LandingPage() {
  return (
    <>
      <HeroSection />
      <StatsSection />
      <InfoBoxesSection />
      <WhySection />
      <CohortsSection />
      <PodcastsSection />
      <CommunitySection />
      <FaqSection />
      <ContactSection />
    </>
  );
}

function App() {
  const [isAuthOpen, setIsAuthOpen] = useState(false);

  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col text-[#04102d] font-sans overflow-x-hidden relative">
        <AuthModal isOpen={isAuthOpen} onClose={() => setIsAuthOpen(false)} />
        <Navbar onOpenAuth={() => setIsAuthOpen(true)} />
        
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/terms" element={<TermsPage />} />
            <Route path="/privacy-policy" element={<PrivacyPage />} />
            <Route path="/refund-policy" element={<RefundPage />} />
            <Route path="/store" element={<StorePage />} />
            <Route path="/courses" element={<CoursesPage />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
