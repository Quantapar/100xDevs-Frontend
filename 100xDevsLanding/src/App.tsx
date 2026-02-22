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
import { CurrencyProvider } from './context/CurrencyContext';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { TermsPage } from './pages/TermsPage';
import { PrivacyPage } from './pages/PrivacyPage';
import { RefundPage } from './pages/RefundPage';
import { StorePage } from './pages/StorePage';
import { CoursesPage } from './pages/CoursesPage';
import { ProductPage } from './pages/ProductPage';
import { CourseDetailsPage } from './pages/CourseDetailsPage';
import { ProfilePage } from './pages/ProfilePage';
import { PurchasesPage } from './pages/PurchasesPage';

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
  const [authModalConfig, setAuthModalConfig] = useState<{isOpen: boolean, mode: 'login' | 'signup'}>({isOpen: false, mode: 'login'});
  const [userName, setUserName] = useState<string | null>(null);

  return (
    <BrowserRouter>
      <CurrencyProvider>
        <div className="min-h-screen flex flex-col text-[#04102d] font-sans overflow-x-hidden relative">
          <AuthModal 
            isOpen={authModalConfig.isOpen} 
            mode={authModalConfig.mode} 
            onClose={() => setAuthModalConfig({...authModalConfig, isOpen: false})} 
            onLogin={(name) => setUserName(name)}
          />
          <Navbar 
            onOpenAuth={(mode) => setAuthModalConfig({isOpen: true, mode})} 
            isLoggedIn={!!userName}
            userName={userName}
            onLogout={() => setUserName(null)}
          />
          
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="/terms" element={<TermsPage />} />
              <Route path="/privacy-policy" element={<PrivacyPage />} />
              <Route path="/refund-policy" element={<RefundPage />} />
              <Route path="/store" element={<StorePage />} />
              <Route path="/store/:id" element={<ProductPage />} />
              <Route path="/courses" element={<CoursesPage />} />
              <Route path="/new-courses/:id" element={<CourseDetailsPage />} />
              <Route path="/profile" element={<ProfilePage />} />
              <Route path="/purchases" element={<PurchasesPage />} />
              <Route path="/index.html" element={<Navigate to="/" replace />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </main>

          <Footer />
        </div>
      </CurrencyProvider>
    </BrowserRouter>
  );
}

export default App;
