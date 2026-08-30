import React from 'react';
import { Sparkles, ArrowUpRight, Globe, MapPin, CheckCircle2 } from 'lucide-react';
import { PROFILE_INFO, HIGHLIGHTS } from '../data/profileData';

interface HeroSectionProps {
  onExploreProjects: () => void;
  onExploreSnake: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onExploreProjects, onExploreSnake }) => {
  return (
    <section id="about" className="relative py-12 md:py-16 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-10 w-[300px] h-[300px] bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Main profile text */}
          <div className="lg:col-span-7 space-y-6">
            {/* Status badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-950/60 border border-indigo-500/30 text-xs text-indigo-300 backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              <span>Open to Software Engineering & AI/ML opportunities</span>
            </div>

            {/* Headline */}
            <div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.15]">
                Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-sky-300 to-emerald-300">{PROFILE_INFO.name}</span>
              </h1>
              <p className="text-lg sm:text-xl text-slate-300 font-medium mt-2">
                {PROFILE_INFO.title}
              </p>
            </div>

            {/* Bio */}
            <p className="text-slate-300/90 text-sm sm:text-base leading-relaxed max-w-2xl">
              {PROFILE_INFO.bio}
            </p>

            {/* Key highlights checklist */}
            <div className="space-y-2.5 pt-2">
              {HIGHLIGHTS.map((item, index) => (
                <div key={index} className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>{item.label}</span>
                </div>
              ))}
            </div>

            {/* Action buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-4">
              <button
                id="hero-explore-projects-btn"
                onClick={onExploreProjects}
                className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-indigo-600 to-indigo-500 hover:from-indigo-500 hover:to-indigo-400 text-white text-sm font-semibold shadow-lg shadow-indigo-600/25 flex items-center gap-2 transition-all group"
              >
                <span>View Featured Projects</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </button>

              <button
                id="hero-play-snake-btn"
                onClick={onExploreSnake}
                className="px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700 hover:border-slate-600 text-sm font-semibold flex items-center gap-2 transition-all"
              >
                <Sparkles className="w-4 h-4 text-emerald-400" />
                <span>Play Contribution Snake</span>
              </button>

              <a
                id="hero-portfolio-btn"
                href={PROFILE_INFO.portfolio}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2.5 rounded-xl bg-slate-950 hover:bg-slate-900 text-slate-300 border border-slate-800 hover:border-slate-700 text-sm font-medium flex items-center gap-1.5 transition-all"
              >
                <Globe className="w-4 h-4 text-indigo-400" />
                <span>Visit Portfolio</span>
              </a>
            </div>
          </div>

          {/* Profile Card & Stats preview */}
          <div className="lg:col-span-5">
            <div className="relative">
              {/* Outer decorative card */}
              <div className="p-6 rounded-2xl bg-slate-900/90 border border-slate-800 shadow-2xl backdrop-blur-md relative overflow-hidden">
                {/* Accent top border */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo-500 via-sky-400 to-emerald-400" />

                {/* Profile Header in Card */}
                <div className="flex items-center gap-4 pb-5 border-b border-slate-800/80">
                  <div className="relative">
                    <img
                      src={`https://github.com/${PROFILE_INFO.githubUsername}.png`}
                      alt={PROFILE_INFO.name}
                      className="w-16 h-16 rounded-xl object-cover border-2 border-indigo-500/40 shadow-md"
                      onError={(e) => {
                        // Fallback avatar
                        (e.target as HTMLElement).style.display = 'none';
                      }}
                    />
                    <span className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-emerald-500 border-2 border-slate-900" />
                  </div>
                  <div>
                    <div className="text-base font-bold text-white flex items-center gap-2">
                      {PROFILE_INFO.name}
                    </div>
                    <div className="text-xs text-slate-400 font-mono">@{PROFILE_INFO.githubUsername}</div>
                    <div className="flex items-center gap-1 text-[11px] text-slate-500 mt-1">
                      <MapPin className="w-3 h-3" />
                      <span>{PROFILE_INFO.location}</span>
                    </div>
                  </div>
                </div>

                {/* GitHub Profile Views Badge from README */}
                <div className="py-4 border-b border-slate-800/80 flex items-center justify-between">
                  <span className="text-xs text-slate-400 font-medium">Profile Analytics:</span>
                  <img
                    src={`https://komarev.com/ghpvc/?username=${PROFILE_INFO.githubUsername}&label=Profile%20Views&color=2563eb&style=flat-square`}
                    alt="Profile Views"
                    className="h-5 rounded"
                  />
                </div>

                {/* Philosophy Quote */}
                <div className="py-4 border-b border-slate-800/80">
                  <div className="text-xs text-slate-400 uppercase tracking-wider font-semibold mb-1">Guiding Philosophy</div>
                  <blockquote className="text-sm italic text-slate-200 bg-slate-950/60 p-3 rounded-lg border border-slate-800/60">
                    "{PROFILE_INFO.quote}"
                  </blockquote>
                  <p className="text-xs text-slate-400 mt-2">
                    {PROFILE_INFO.philosophy}
                  </p>
                </div>

                {/* Core Focus Matrix */}
                <div className="grid grid-cols-2 gap-2 pt-4">
                  <div className="bg-slate-950/80 border border-slate-800/80 rounded-lg p-2.5">
                    <div className="text-[11px] text-slate-400">Primary DSA</div>
                    <div className="text-xs font-semibold text-emerald-400 font-mono mt-0.5">C++ / Algorithms</div>
                  </div>
                  <div className="bg-slate-950/80 border border-slate-800/80 rounded-lg p-2.5">
                    <div className="text-[11px] text-slate-400">Full-Stack</div>
                    <div className="text-xs font-semibold text-indigo-400 font-mono mt-0.5">React • Node • Spring</div>
                  </div>
                  <div className="bg-slate-950/80 border border-slate-800/80 rounded-lg p-2.5">
                    <div className="text-[11px] text-slate-400">AI / ML</div>
                    <div className="text-xs font-semibold text-sky-400 font-mono mt-0.5">Python • TensorFlow</div>
                  </div>
                  <div className="bg-slate-950/80 border border-slate-800/80 rounded-lg p-2.5">
                    <div className="text-[11px] text-slate-400">Cloud & Data</div>
                    <div className="text-xs font-semibold text-purple-400 font-mono mt-0.5">Azure • Power BI • Fabric</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
