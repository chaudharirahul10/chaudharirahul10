import React from 'react';
import { GitBranch, Globe, Sparkles, Terminal, Mail, Layers } from 'lucide-react';
import { PROFILE_INFO } from '../data/profileData';

interface NavbarProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection, onNavigate }) => {
  const navLinks = [
    { id: 'about', label: 'About', icon: Terminal },
    { id: 'stack', label: 'Tech Stack', icon: Layers },
    { id: 'projects', label: 'Projects', icon: Sparkles },
    { id: 'snake', label: 'Snake Grid', icon: Sparkles },
    { id: 'goals', label: 'Goals', icon: Terminal },
    { id: 'contact', label: 'Connect', icon: Mail }
  ];

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-md bg-slate-950/80 border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Brand */}
        <div 
          onClick={() => onNavigate('hero')}
          className="flex items-center gap-3 cursor-pointer group"
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-600 via-indigo-500 to-emerald-400 p-[1px] shadow-sm group-hover:scale-105 transition-transform">
            <div className="w-full h-full bg-slate-950 rounded-[11px] flex items-center justify-center font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-emerald-300 font-mono text-base">
              RC
            </div>
          </div>
          <div>
            <div className="font-bold text-white text-sm sm:text-base flex items-center gap-2">
              {PROFILE_INFO.name}
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            </div>
            <div className="text-xs text-slate-400 font-mono hidden sm:block">@{PROFILE_INFO.githubUsername}</div>
          </div>
        </div>

        {/* Navigation Links */}
        <nav className="hidden md:flex items-center gap-1 bg-slate-900/60 p-1 rounded-xl border border-slate-800/70">
          {navLinks.map(link => {
            const isActive = activeSection === link.id;
            return (
              <button
                key={link.id}
                id={`nav-link-${link.id}`}
                onClick={() => onNavigate(link.id)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all ${
                  isActive
                    ? 'bg-indigo-600/90 text-white shadow-sm'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
                }`}
              >
                {link.label}
              </button>
            );
          })}
        </nav>

        {/* Right CTA Links */}
        <div className="flex items-center gap-2.5">
          <a
            id="nav-github-link"
            href={PROFILE_INFO.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-800 hover:border-slate-700 text-xs font-medium transition-all"
          >
            <GitBranch className="w-4 h-4 text-slate-300" />
            <span className="hidden sm:inline">GitHub</span>
          </a>

          <a
            id="nav-portfolio-link"
            href={PROFILE_INFO.portfolio}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-gradient-to-r from-indigo-600 to-indigo-500 hover:from-indigo-500 hover:to-indigo-400 text-white text-xs font-medium shadow-md shadow-indigo-600/20 transition-all"
          >
            <Globe className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Portfolio</span>
          </a>
        </div>
      </div>
    </header>
  );
};
