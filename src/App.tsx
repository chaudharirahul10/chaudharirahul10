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
import { PROFILE_INFO } from './data/profileData';

export function App() {
  const [activeSection, setActiveSection] = useState<string>('about');

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

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col selection:bg-indigo-500/30 selection:text-indigo-200">
      {/* Top Navigation */}
      <Navbar activeSection={activeSection} onNavigate={scrollToSection} />

      {/* Main Content Sections */}
      <main className="flex-1">
        <HeroSection
          onExploreProjects={() => scrollToSection('projects')}
          onExploreSnake={() => scrollToSection('snake')}
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
    </div>
  );
}

export default App;
