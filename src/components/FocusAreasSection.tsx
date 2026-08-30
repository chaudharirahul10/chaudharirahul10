import React from 'react';
import { Brain, Globe, Cpu, Cloud, CheckCircle2 } from 'lucide-react';
import { FOCUS_AREAS } from '../data/profileData';

const ICONS_MAP: Record<string, React.ElementType> = {
  Brain,
  Globe,
  Cpu,
  Cloud
};

export const FocusAreasSection: React.FC = () => {
  return (
    <section className="py-10 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs font-semibold text-indigo-400 mb-3">
            Core Competencies
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            What I'm Working On
          </h2>
          <p className="text-sm text-slate-400 mt-2">
            Active domains of engineering, research, and algorithmic problem-solving
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {FOCUS_AREAS.map((area) => {
            const Icon = ICONS_MAP[area.icon] || Globe;
            return (
              <div
                key={area.id}
                id={`focus-card-${area.id}`}
                className="bg-slate-900/70 hover:bg-slate-900/90 border border-slate-800/90 hover:border-slate-700/80 rounded-2xl p-6 transition-all duration-200 group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-3 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 group-hover:scale-105 group-hover:bg-indigo-500/20 transition-all">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="px-2.5 py-1 rounded-full text-xs font-medium bg-slate-950 text-slate-300 border border-slate-800">
                      {area.badge}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-indigo-300 transition-colors">
                    {area.title}
                  </h3>
                  <p className="text-sm text-slate-300 leading-relaxed mb-5">
                    {area.description}
                  </p>
                </div>

                <div>
                  <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2.5">
                    Key Areas & Skills:
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    {area.topics.map((topic, i) => (
                      <div key={i} className="flex items-center gap-1.5 text-xs text-slate-300 bg-slate-950/60 px-2.5 py-1.5 rounded-lg border border-slate-800/70">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                        <span className="truncate">{topic}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
