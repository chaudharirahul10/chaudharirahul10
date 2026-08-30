import React from 'react';
import { GitBranch, Globe } from 'lucide-react';
import { PROFILE_INFO } from '../data/profileData';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-slate-950 border-t border-slate-900 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-indigo-600/20 border border-indigo-500/30 flex items-center justify-center font-mono font-bold text-xs text-indigo-400">
              RC
            </div>
            <div>
              <div className="text-xs font-bold text-slate-200">
                {PROFILE_INFO.name}
              </div>
              <div className="text-[11px] text-slate-400 font-mono">
                Learn • Build • Improve • Repeat.
              </div>
            </div>
          </div>

          <div className="text-xs text-slate-400 text-center sm:text-right">
            <span>Building practical software & exploring AI/ML • </span>
            <span className="font-mono text-slate-400">{new Date().getFullYear()}</span>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={PROFILE_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white transition-colors"
              title="GitHub"
            >
              <GitBranch className="w-4 h-4" />
            </a>
            <a
              href={PROFILE_INFO.portfolio}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white transition-colors"
              title="Portfolio"
            >
              <Globe className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
