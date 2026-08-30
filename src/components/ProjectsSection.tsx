import React, { useState } from 'react';
import { FEATURED_PROJECTS, PROFILE_INFO } from '../data/profileData';
import { Sparkles, Layers, Terminal, BarChart3, ExternalLink, GitBranch, CheckCircle2, Code2 } from 'lucide-react';
import { Project } from '../types';

const ICONS_MAP: Record<string, React.ElementType> = {
  Sparkles,
  Layers,
  Terminal,
  BarChart3
};

export const ProjectsSection: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(FEATURED_PROJECTS[0]);

  return (
    <section id="projects" className="py-12 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs font-semibold text-sky-400 mb-2">
              Portfolio Matrix
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Featured Projects & Initiatives
            </h2>
            <p className="text-sm text-slate-400 mt-1">
              Key projects spanning AI/ML, Full-Stack applications, DSA mastery, and BI dashboards
            </p>
          </div>

          <a
            id="view-all-github-projects"
            href={`${PROFILE_INFO.github}?tab=repositories`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-800 text-xs font-medium transition-colors"
          >
            <GitBranch className="w-4 h-4 text-slate-400" />
            <span>Browse GitHub Repositories</span>
            <ExternalLink className="w-3.5 h-3.5 ml-0.5 text-slate-500" />
          </a>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {FEATURED_PROJECTS.map((project) => {
            const Icon = ICONS_MAP[project.iconName] || Code2;
            const isSelected = selectedProject?.id === project.id;

            return (
              <div
                key={project.id}
                id={`project-card-${project.id}`}
                onClick={() => setSelectedProject(project)}
                className={`p-6 rounded-2xl border transition-all duration-200 cursor-pointer flex flex-col justify-between ${
                  isSelected
                    ? 'bg-slate-900 border-indigo-500/60 shadow-lg shadow-indigo-500/10'
                    : 'bg-slate-900/60 hover:bg-slate-900/90 border-slate-800/80 hover:border-slate-700'
                }`}
              >
                <div>
                  <div className="flex items-start justify-between gap-3 mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-11 h-11 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400">
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="text-base font-bold text-white">
                          {project.title}
                        </h3>
                        <span className="text-[11px] text-indigo-300 font-mono">
                          {project.category.toUpperCase()}
                        </span>
                      </div>
                    </div>

                    <span className="px-2.5 py-1 rounded-full text-[11px] font-medium bg-slate-950 text-emerald-400 border border-slate-800">
                      {project.status}
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                    {project.description}
                  </p>

                  {/* Highlights checklist */}
                  {project.features && (
                    <div className="space-y-1.5 mb-4">
                      {project.features.map((feat, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-xs text-slate-300">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Tech Pills */}
                <div className="pt-3 border-t border-slate-800/80 flex flex-wrap items-center gap-1.5">
                  {project.technologies.map((t, i) => (
                    <span
                      key={i}
                      className="px-2 py-0.5 rounded text-[11px] font-mono bg-slate-950 text-slate-300 border border-slate-800"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
