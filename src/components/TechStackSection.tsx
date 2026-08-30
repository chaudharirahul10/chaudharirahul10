import React, { useState } from 'react';
import { TECH_STACK, OTHER_EXPLORATIONS } from '../data/profileData';
import { Layers, Terminal, Database, Sparkles, Filter } from 'lucide-react';

type TechCategory = 'all' | 'languages' | 'frontend_backend' | 'databases_tools' | 'ai_cloud';

export const TechStackSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<TechCategory>('all');

  const categories: { id: TechCategory; label: string; icon: React.ElementType }[] = [
    { id: 'all', label: 'All Technologies', icon: Filter },
    { id: 'languages', label: 'Languages', icon: Terminal },
    { id: 'frontend_backend', label: 'Frontend & Backend', icon: Layers },
    { id: 'databases_tools', label: 'Databases & Tools', icon: Database },
    { id: 'ai_cloud', label: 'AI & Cloud', icon: Sparkles }
  ];

  const filteredTech = selectedCategory === 'all'
    ? TECH_STACK
    : TECH_STACK.filter(t => t.category === selectedCategory);

  return (
    <section id="stack" className="py-12 border-t border-slate-900 bg-slate-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs font-semibold text-emerald-400 mb-2">
              Toolbox & Frameworks
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Technical Stack
            </h2>
            <p className="text-sm text-slate-400 mt-1">
              Technologies, programming languages, databases, and frameworks I build with
            </p>
          </div>

          {/* SkillIcons Badge Strip from README */}
          <div className="bg-slate-900/80 p-3 rounded-xl border border-slate-800 hidden lg:flex items-center gap-2">
            <span className="text-[11px] font-mono text-slate-400 mr-1">Icon Preview:</span>
            <img src="https://skillicons.dev/icons?i=cpp,java,python,javascript,react,tailwind,nodejs,express,spring,mongodb,mysql,sqlite,git,github,tensorflow,azure" alt="Tech Stack Icons" className="h-7" />
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center gap-2 mb-8">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isSelected = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                id={`tech-filter-${cat.id}`}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3.5 py-2 rounded-xl text-xs font-medium transition-all flex items-center gap-2 ${
                  isSelected
                    ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/20'
                    : 'bg-slate-900/80 hover:bg-slate-800 text-slate-300 border border-slate-800'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* Grid of Tech Stack Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3.5">
          {filteredTech.map((tech) => (
            <div
              key={tech.name}
              id={`tech-item-${tech.iconSlug}`}
              className="bg-slate-900/80 hover:bg-slate-900 border border-slate-800/80 hover:border-indigo-500/40 rounded-xl p-3.5 flex flex-col items-center text-center transition-all duration-200 group hover:-translate-y-0.5"
            >
              <div className="w-12 h-12 rounded-xl bg-slate-950 flex items-center justify-center p-2 mb-2.5 border border-slate-800 group-hover:border-slate-700 transition-colors">
                <img
                  src={`https://skillicons.dev/icons?i=${tech.iconSlug}`}
                  alt={tech.name}
                  className="w-8 h-8 object-contain group-hover:scale-110 transition-transform"
                  loading="lazy"
                />
              </div>
              <div className="text-xs font-bold text-white group-hover:text-indigo-300 transition-colors">
                {tech.name}
              </div>
              {tech.description && (
                <div className="text-[11px] text-slate-400 mt-1 line-clamp-2 leading-tight">
                  {tech.description}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Also Exploring Pill Section */}
        <div className="mt-8 p-4 rounded-xl bg-slate-900/60 border border-slate-800/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-amber-400 shrink-0" />
            <span className="text-xs font-semibold text-slate-200">Also actively exploring:</span>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            {OTHER_EXPLORATIONS.map((item, idx) => (
              <span
                key={idx}
                className="px-2.5 py-1 rounded-lg text-xs font-medium bg-slate-950 text-indigo-300 border border-slate-800"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
