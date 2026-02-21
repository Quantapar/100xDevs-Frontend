import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { HeroSection } from './components/sections/HeroSection';
import { StatsSection } from './components/sections/StatsSection';
import { InfoBoxesSection } from './components/sections/InfoBoxesSection';
import { WhySection } from './components/sections/WhySection';
import { CohortsSection } from './components/sections/CohortsSection';
import { PodcastsSection } from './components/sections/PodcastsSection';
import { CommunitySection } from './components/sections/CommunitySection';
import { FaqSection } from './components/sections/FaqSection';
import { ContactSection } from './components/sections/ContactSection';

function App() {
  return (
    <div className="min-h-screen text-[#04102d] font-sans overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <StatsSection />
      <InfoBoxesSection />
      <WhySection />
      <CohortsSection />
      <PodcastsSection />
      <CommunitySection />
      <FaqSection />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default App;
