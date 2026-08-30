import React, { useState } from 'react';
import { INITIAL_GOALS } from '../data/profileData';
import { Goal } from '../types';
import { CheckCircle2, Circle, Trophy, Plus, RefreshCw } from 'lucide-react';
import confetti from 'canvas-confetti';

export const GoalsTrackerSection: React.FC = () => {
  const [goals, setGoals] = useState<Goal[]>(() => {
    const saved = localStorage.getItem('rahul_goals_state');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch {
        return INITIAL_GOALS;
      }
    }
    return INITIAL_GOALS;
  });

  const [newGoalText, setNewGoalText] = useState('');
  const [newGoalCategory, setNewGoalCategory] = useState('Learning');

  const toggleGoal = (id: string) => {
    setGoals(prev => {
      const updated = prev.map(g => {
        if (g.id === id) {
          const nextCompleted = !g.completed;
          if (nextCompleted) {
            confetti({
              particleCount: 25,
              spread: 60,
              origin: { y: 0.7 }
            });
          }
          return { ...g, completed: nextCompleted };
        }
        return g;
      });
      localStorage.setItem('rahul_goals_state', JSON.stringify(updated));
      return updated;
    });
  };

  const addGoal = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newGoalText.trim()) return;
    const newGoal: Goal = {
      id: Date.now().toString(),
      text: newGoalText.trim(),
      completed: false,
      category: newGoalCategory
    };
    const updated = [...goals, newGoal];
    setGoals(updated);
    localStorage.setItem('rahul_goals_state', JSON.stringify(updated));
    setNewGoalText('');
  };

  const resetGoals = () => {
    setGoals(INITIAL_GOALS);
    localStorage.setItem('rahul_goals_state', JSON.stringify(INITIAL_GOALS));
  };

  const completedCount = goals.filter(g => g.completed).length;
  const progressPercent = Math.round((completedCount / (goals.length || 1)) * 100);

  return (
    <section id="goals" className="py-12 border-t border-slate-900 bg-slate-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs font-semibold text-purple-400 mb-2">
              Continuous Improvement
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Roadmap & Milestones
            </h2>
            <p className="text-sm text-slate-400 mt-1">
              Active engineering goals directly synced from the profile specification
            </p>
          </div>

          <button
            id="reset-goals-btn"
            onClick={resetGoals}
            className="self-start md:self-auto flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-slate-200 border border-slate-800 text-xs font-medium transition-colors"
          >
            <RefreshCw className="w-3.5 h-3.5" />
            <span>Reset to Defaults</span>
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Progress Card */}
          <div className="lg:col-span-4 space-y-4">
            <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800">
              <div className="flex items-center justify-between gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400">
                  <Trophy className="w-5 h-5" />
                </div>
                <span className="text-xs font-mono font-semibold text-purple-300">
                  {completedCount} of {goals.length} Completed
                </span>
              </div>

              <h3 className="text-lg font-bold text-white mb-2">
                Milestone Progress
              </h3>

              {/* Progress bar */}
              <div className="w-full bg-slate-950 rounded-full h-3 p-0.5 border border-slate-800 mb-2">
                <div
                  className="bg-gradient-to-r from-indigo-500 via-purple-500 to-emerald-400 h-full rounded-full transition-all duration-300"
                  style={{ width: `${progressPercent}%` }}
                />
              </div>

              <div className="flex justify-between text-xs text-slate-400 font-mono">
                <span>0%</span>
                <span className="font-bold text-slate-200">{progressPercent}%</span>
                <span>100%</span>
              </div>

              <p className="text-xs text-slate-400 mt-4 leading-relaxed">
                "Consistency beats intensity." Each completed milestone marks a step forward in software engineering mastery.
              </p>
            </div>

            {/* Quick Add Form */}
            <form onSubmit={addGoal} className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-3">
              <div className="text-xs font-semibold text-slate-300 flex items-center gap-1.5">
                <Plus className="w-4 h-4 text-emerald-400" />
                <span>Add Custom Milestone Goal</span>
              </div>
              <input
                type="text"
                id="new-goal-input"
                value={newGoalText}
                onChange={(e) => setNewGoalText(e.target.value)}
                placeholder="e.g. Complete Graph Algorithms practice"
                className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-200 focus:outline-none focus:border-indigo-500"
              />
              <div className="flex items-center gap-2">
                <select
                  value={newGoalCategory}
                  onChange={(e) => setNewGoalCategory(e.target.value)}
                  className="px-2.5 py-1.5 rounded-lg bg-slate-950 border border-slate-800 text-xs text-slate-300 focus:outline-none"
                >
                  <option value="DSA">DSA</option>
                  <option value="Full-Stack">Full-Stack</option>
                  <option value="AI/ML">AI/ML</option>
                  <option value="Cloud">Cloud</option>
                  <option value="Learning">Learning</option>
                </select>
                <button
                  type="submit"
                  id="add-goal-submit"
                  className="flex-1 py-1.5 px-3 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold transition-colors"
                >
                  Add Goal
                </button>
              </div>
            </form>
          </div>

          {/* Goals List */}
          <div className="lg:col-span-8 space-y-2.5">
            {goals.map((goal) => (
              <div
                key={goal.id}
                id={`goal-item-${goal.id}`}
                onClick={() => toggleGoal(goal.id)}
                className={`p-4 rounded-xl border transition-all duration-200 cursor-pointer flex items-center justify-between gap-4 group ${
                  goal.completed
                    ? 'bg-slate-900/90 border-emerald-500/30'
                    : 'bg-slate-900/40 hover:bg-slate-900/70 border-slate-800/80 hover:border-slate-700'
                }`}
              >
                <div className="flex items-center gap-3.5">
                  <button
                    type="button"
                    className="shrink-0 text-slate-400 group-hover:text-emerald-400 transition-colors"
                  >
                    {goal.completed ? (
                      <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                    ) : (
                      <Circle className="w-5 h-5 text-slate-600 group-hover:text-slate-400" />
                    )}
                  </button>
                  <span
                    className={`text-sm ${
                      goal.completed
                        ? 'text-slate-300 line-through decoration-slate-500'
                        : 'text-slate-200 font-medium'
                    }`}
                  >
                    {goal.text}
                  </span>
                </div>

                <span className="px-2.5 py-0.5 rounded text-[11px] font-mono bg-slate-950 text-slate-400 border border-slate-800 shrink-0">
                  {goal.category}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
