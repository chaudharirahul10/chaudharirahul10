import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { FocusAreasSection } from './components/FocusAreasSection';
import { TechStackSection } from './components/TechStackSection';
import { ProjectsSection } from './components/ProjectsSection';
import { ContributionSnakeVisualizer } from './components/ContributionSnakeVisualizer';
import { GoalsTrackerSection } from './components/GoalsTrackerSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ReadmeModal } from './components/ReadmeModal';
import { FuturisticIntroScreen } from './components/FuturisticIntroScreen';
import { PROFILE_INFO } from './data/profileData';

export function App() {
  const [showIntro, setShowIntro] = useState<boolean>(true);
  const [activeSection, setActiveSection] = useState<string>('about');
  const [isReadmeModalOpen, setIsReadmeModalOpen] = useState<boolean>(false);

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    if (sectionId === 'hero') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleReplayIntro = () => {
    setShowIntro(true);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col selection:bg-indigo-500/30 selection:text-indigo-200">
      {/* Futuristic Cinematic AI Intro Screen */}
      {showIntro && (
        <FuturisticIntroScreen onComplete={() => setShowIntro(false)} />
      )}

      {/* Top Navigation */}
      <Navbar 
        activeSection={activeSection} 
        onNavigate={scrollToSection} 
        onOpenReadme={() => setIsReadmeModalOpen(true)}
        onReplayIntro={handleReplayIntro}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        <HeroSection
          onExploreProjects={() => scrollToSection('projects')}
          onExploreSnake={() => scrollToSection('snake')}
          onOpenReadme={() => setIsReadmeModalOpen(true)}
          onReplayIntro={handleReplayIntro}
        />

        {/* Contribution Snake Simulation */}
        <section id="snake" className="py-10 border-t border-slate-900 bg-slate-950">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ContributionSnakeVisualizer githubUsername={PROFILE_INFO.githubUsername} />
          </div>
        </section>

        {/* Focus Areas */}
        <FocusAreasSection />

        {/* Tech Stack */}
        <TechStackSection />

        {/* Featured Projects */}
        <ProjectsSection />

        {/* Goals & Milestones Tracker */}
        <GoalsTrackerSection />

        {/* Contact & Links */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* 100% Fixed GitHub Profile README Modal */}
      <ReadmeModal 
        isOpen={isReadmeModalOpen} 
        onClose={() => setIsReadmeModalOpen(false)} 
      />
    </div>
  );
}

export default App;
