import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Play, Pause, RotateCcw, Sparkles, Gamepad2, Award, Eye, Terminal } from 'lucide-react';
import confetti from 'canvas-confetti';

interface SnakeVisualizerProps {
  githubUsername: string;
}

type Mode = 'autoplay' | 'game';
type Direction = 'UP' | 'DOWN' | 'LEFT' | 'RIGHT';

interface Position {
  x: number;
  y: number;
}

const WEEKS = 42; // Number of columns in the grid
const DAYS = 7;   // Days in a week (rows)

const PALETTES = {
  githubDark: {
    name: 'GitHub Dark',
    bg: '#0d1117',
    levels: ['#161b22', '#0e4429', '#006d32', '#26a641', '#39d353'],
    snakeHead: '#58a6ff',
    snakeBody: '#388bfd',
    food: '#ff7b72'
  },
  emerald: {
    name: 'Emerald Matrix',
    bg: '#051811',
    levels: ['#0f291e', '#065f46', '#047857', '#10b981', '#34d399'],
    snakeHead: '#fbbf24',
    snakeBody: '#f59e0b',
    food: '#ec4899'
  },
  cyberNeon: {
    name: 'Cyber Violet',
    bg: '#0e0b1f',
    levels: ['#1c1635', '#4c1d95', '#6d28d9', '#8b5cf6', '#a78bfa'],
    snakeHead: '#38bdf8',
    snakeBody: '#0ea5e9',
    food: '#f43f5e'
  }
};

export const ContributionSnakeVisualizer: React.FC<SnakeVisualizerProps> = ({ githubUsername }) => {
  const [mode, setMode] = useState<Mode>('autoplay');
  const [activePalette, setActivePalette] = useState<keyof typeof PALETTES>('githubDark');
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [speed, setSpeed] = useState<number>(100);
  const [score, setScore] = useState<number>(0);
  const [highScore, setHighScore] = useState<number>(() => {
    return parseInt(localStorage.getItem('snake_high_score') || '142', 10);
  });
  const [eatenCount, setEatenCount] = useState<number>(0);

  // Generate initial grid commit intensity (0-4)
  const [grid, setGrid] = useState<number[][]>(() => {
    return generateRealisticGrid();
  });

  // Snake state
  const [snake, setSnake] = useState<Position[]>([
    { x: 5, y: 3 },
    { x: 4, y: 3 },
    { x: 3, y: 3 },
  ]);
  const [direction, setDirection] = useState<Direction>('RIGHT');
  const nextDirectionRef = useRef<Direction>('RIGHT');
  const [food, setFood] = useState<Position>({ x: 15, y: 3 });

  function generateRealisticGrid(): number[][] {
    const newGrid: number[][] = [];
    for (let x = 0; x < WEEKS; x++) {
      const col: number[] = [];
      for (let y = 0; y < DAYS; y++) {
        // Pseudo-random weighted activity
        const rand = Math.random();
        let level = 0;
        if (rand > 0.82) level = 4;
        else if (rand > 0.65) level = 3;
        else if (rand > 0.45) level = 2;
        else if (rand > 0.25) level = 1;
        col.push(level);
      }
      newGrid.push(col);
    }
    return newGrid;
  }

  const resetGrid = () => {
    setGrid(generateRealisticGrid());
    setSnake([
      { x: 5, y: 3 },
      { x: 4, y: 3 },
      { x: 3, y: 3 },
    ]);
    setDirection('RIGHT');
    nextDirectionRef.current = 'RIGHT';
    setScore(0);
    setEatenCount(0);
    spawnFood([{ x: 5, y: 3 }, { x: 4, y: 3 }, { x: 3, y: 3 }]);
  };

  const spawnFood = (currentSnake: Position[]) => {
    let newFood: Position;
    let attempts = 0;
    do {
      newFood = {
        x: Math.floor(Math.random() * WEEKS),
        y: Math.floor(Math.random() * DAYS)
      };
      attempts++;
    } while (
      currentSnake.some(seg => seg.x === newFood.x && seg.y === newFood.y) &&
      attempts < 100
    );
    setFood(newFood);
  };

  // Keyboard navigation for game mode
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (mode !== 'game') return;

      const key = e.key.toLowerCase();
      if (['arrowup', 'w'].includes(key) && direction !== 'DOWN') {
        e.preventDefault();
        nextDirectionRef.current = 'UP';
      } else if (['arrowdown', 's'].includes(key) && direction !== 'UP') {
        e.preventDefault();
        nextDirectionRef.current = 'DOWN';
      } else if (['arrowleft', 'a'].includes(key) && direction !== 'RIGHT') {
        e.preventDefault();
        nextDirectionRef.current = 'LEFT';
      } else if (['arrowright', 'd'].includes(key) && direction !== 'LEFT') {
        e.preventDefault();
        nextDirectionRef.current = 'RIGHT';
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mode, direction]);

  // Autoplay AI targeting food/commits
  const getNextAutoplayDirection = useCallback((head: Position, currentFood: Position, currentSnake: Position[]): Direction => {
    const possibleMoves: { dir: Direction; pos: Position; score: number }[] = [];

    const moves: { dir: Direction; dx: number; dy: number }[] = [
      { dir: 'UP', dx: 0, dy: -1 },
      { dir: 'DOWN', dx: 0, dy: 1 },
      { dir: 'LEFT', dx: -1, dy: 0 },
      { dir: 'RIGHT', dx: 1, dy: 0 },
    ];

    for (const m of moves) {
      // Wrap around grid boundaries
      const nextX = (head.x + m.dx + WEEKS) % WEEKS;
      const nextY = (head.y + m.dy + DAYS) % DAYS;

      // Avoid immediate self-collision
      const isSelf = currentSnake.slice(0, -1).some(s => s.x === nextX && s.y === nextY);
      if (isSelf) continue;

      // Distance to food
      const dist = Math.abs(nextX - currentFood.x) + Math.abs(nextY - currentFood.y);
      // Extra incentive for cells with higher commit levels
      const cellLevel = grid[nextX]?.[nextY] || 0;
      const moveScore = -dist + cellLevel * 0.5;

      possibleMoves.push({ dir: m.dir, pos: { x: nextX, y: nextY }, score: moveScore });
    }

    if (possibleMoves.length === 0) {
      return direction;
    }

    possibleMoves.sort((a, b) => b.score - a.score);
    return possibleMoves[0].dir;
  }, [grid, direction]);

  // Game Loop
  useEffect(() => {
    if (!isPlaying) return;

    const timer = setInterval(() => {
      setSnake(prevSnake => {
        const head = prevSnake[0];
        let currentDir = nextDirectionRef.current;

        if (mode === 'autoplay') {
          currentDir = getNextAutoplayDirection(head, food, prevSnake);
          setDirection(currentDir);
          nextDirectionRef.current = currentDir;
        } else {
          setDirection(currentDir);
        }

        let dx = 0;
        let dy = 0;
        if (currentDir === 'UP') dy = -1;
        if (currentDir === 'DOWN') dy = 1;
        if (currentDir === 'LEFT') dx = -1;
        if (currentDir === 'RIGHT') dx = 1;

        const newHead: Position = {
          x: (head.x + dx + WEEKS) % WEEKS,
          y: (head.y + dy + DAYS) % DAYS,
        };

        // Self-collision in game mode
        if (mode === 'game') {
          const selfCollision = prevSnake.some(seg => seg.x === newHead.x && seg.y === newHead.y);
          if (selfCollision) {
            setIsPlaying(false);
            return prevSnake;
          }
        }

        const isEatingFood = newHead.x === food.x && newHead.y === food.y;
        const cellLevel = grid[newHead.x]?.[newHead.y] || 0;

        // In autoplay, also nibble on cells with commit level > 0
        const isNibblingCommit = mode === 'autoplay' && cellLevel > 0 && Math.random() > 0.4;

        if (isEatingFood) {
          const points = (cellLevel + 1) * 20;
          setScore(s => {
            const nextScore = s + points;
            if (nextScore > highScore) {
              setHighScore(nextScore);
              localStorage.setItem('snake_high_score', nextScore.toString());
            }
            return nextScore;
          });
          setEatenCount(c => c + 1);

          if (mode === 'game') {
            confetti({
              particleCount: 20,
              spread: 40,
              origin: { y: 0.6 }
            });
          }

          // Spawn new food
          spawnFood([newHead, ...prevSnake]);

          // Clear / modify grid cell
          setGrid(g => {
            const nextG = g.map(col => [...col]);
            if (nextG[newHead.x]) {
              nextG[newHead.x][newHead.y] = Math.min(4, nextG[newHead.x][newHead.y] + 1);
            }
            return nextG;
          });

          return [newHead, ...prevSnake];
        } else if (isNibblingCommit) {
          // Diminish the eaten commit
          setGrid(g => {
            const nextG = g.map(col => [...col]);
            if (nextG[newHead.x] && nextG[newHead.x][newHead.y] > 0) {
              nextG[newHead.x][newHead.y] = 0;
            }
            return nextG;
          });
          setEatenCount(c => c + 1);
          setScore(s => s + 5);

          // Standard move
          return [newHead, ...prevSnake.slice(0, -1)];
        } else {
          return [newHead, ...prevSnake.slice(0, -1)];
        }
      });
    }, speed);

    return () => clearInterval(timer);
  }, [isPlaying, speed, mode, food, grid, highScore, getNextAutoplayDirection]);

  const palette = PALETTES[activePalette];

  return (
    <div id="contribution-snake-card" className="w-full bg-slate-900/90 border border-slate-800 rounded-2xl p-5 md:p-7 backdrop-blur-sm shadow-xl relative overflow-hidden">
      {/* Glow accent */}
      <div className="absolute -top-24 -right-24 w-72 h-72 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Header bar */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-800">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 flex items-center gap-1.5">
              <Sparkles className="w-3 h-3 text-emerald-400" />
              GitHub Workflow Simulation
            </span>
            <span className="text-xs text-slate-400 font-mono">.github/workflows/snake.yml</span>
          </div>
          <h3 className="text-xl md:text-2xl font-bold text-white tracking-tight flex items-center gap-2">
            Interactive Contribution Grid Snake
          </h3>
          <p className="text-sm text-slate-400 mt-0.5">
            Simulating Platane/snk contribution grid generation for <span className="text-indigo-300 font-medium">@{githubUsername}</span>
          </p>
        </div>

        {/* Controls */}
        <div className="flex flex-wrap items-center gap-2">
          {/* Mode Switch */}
          <div className="bg-slate-950 p-1 rounded-xl border border-slate-800 flex items-center">
            <button
              id="snake-mode-autoplay"
              onClick={() => { setMode('autoplay'); setIsPlaying(true); }}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors flex items-center gap-1.5 ${
                mode === 'autoplay'
                  ? 'bg-indigo-600 text-white shadow-sm'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <Eye className="w-3.5 h-3.5" />
              Auto Animation
            </button>
            <button
              id="snake-mode-game"
              onClick={() => { setMode('game'); setIsPlaying(true); }}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors flex items-center gap-1.5 ${
                mode === 'game'
                  ? 'bg-emerald-600 text-white shadow-sm'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <Gamepad2 className="w-3.5 h-3.5" />
              Play Snake Game
            </button>
          </div>

          {/* Play/Pause */}
          <button
            id="snake-play-pause-btn"
            onClick={() => setIsPlaying(p => !p)}
            className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 transition-colors"
            title={isPlaying ? 'Pause' : 'Play'}
          >
            {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
          </button>

          {/* Reset */}
          <button
            id="snake-reset-btn"
            onClick={resetGrid}
            className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 transition-colors"
            title="Reset Grid & Snake"
          >
            <RotateCcw className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Stats bar */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 my-5">
        <div className="bg-slate-950/70 border border-slate-800/80 rounded-xl p-3">
          <div className="text-xs text-slate-400">Score / Commits Eaten</div>
          <div className="text-xl font-bold text-emerald-400 font-mono mt-0.5">{score} pts</div>
        </div>
        <div className="bg-slate-950/70 border border-slate-800/80 rounded-xl p-3">
          <div className="text-xs text-slate-400">Snake Length</div>
          <div className="text-xl font-bold text-indigo-400 font-mono mt-0.5">{snake.length} segments</div>
        </div>
        <div className="bg-slate-950/70 border border-slate-800/80 rounded-xl p-3">
          <div className="text-xs text-slate-400">Contribution Blocks Cleared</div>
          <div className="text-xl font-bold text-amber-400 font-mono mt-0.5">{eatenCount}</div>
        </div>
        <div className="bg-slate-950/70 border border-slate-800/80 rounded-xl p-3">
          <div className="text-xs text-slate-400">Record High Score</div>
          <div className="text-xl font-bold text-purple-400 font-mono mt-0.5 flex items-center gap-1">
            <Award className="w-4 h-4 text-purple-400" />
            {highScore}
          </div>
        </div>
      </div>

      {/* Interactive Grid Canvas */}
      <div className="bg-slate-950 border border-slate-800 rounded-xl p-4 overflow-x-auto select-none">
        <div className="min-w-[680px]">
          {/* Month labels header */}
          <div className="flex justify-between text-[11px] text-slate-500 font-mono mb-2 px-1">
            <span>Jan</span>
            <span>Mar</span>
            <span>May</span>
            <span>Jul</span>
            <span>Sep</span>
            <span>Nov</span>
            <span>Dec</span>
          </div>

          <div className="grid grid-flow-col gap-[3.5px] items-center" style={{ gridTemplateColumns: `repeat(${WEEKS}, minmax(0, 1fr))` }}>
            {grid.map((col, x) => (
              <div key={x} className="flex flex-col gap-[3.5px]">
                {col.map((level, y) => {
                  const isSnakeHead = snake[0].x === x && snake[0].y === y;
                  const snakeSegmentIndex = snake.findIndex(seg => seg.x === x && seg.y === y);
                  const isSnakeBody = snakeSegmentIndex > 0;
                  const isFood = food.x === x && food.y === y;

                  let cellColor = palette.levels[level];
                  let extraClasses = 'rounded-[2.5px] transition-colors duration-150 relative';

                  if (isSnakeHead) {
                    cellColor = palette.snakeHead;
                    extraClasses += ' scale-110 shadow-lg z-20';
                  } else if (isSnakeBody) {
                    cellColor = palette.snakeBody;
                    extraClasses += ' scale-105 z-10 opacity-90';
                  } else if (isFood) {
                    cellColor = palette.food;
                    extraClasses += ' animate-pulse scale-125 z-10 shadow-md';
                  }

                  return (
                    <div
                      key={y}
                      className={`w-full aspect-square ${extraClasses}`}
                      style={{ backgroundColor: cellColor }}
                      title={`Week ${x + 1}, Day ${y + 1}: ${level} contributions`}
                    >
                      {isSnakeHead && (
                        <div className="w-full h-full flex items-center justify-center">
                          <div className="w-1.5 h-1.5 bg-white rounded-full opacity-90" />
                        </div>
                      )}
                      {isFood && (
                        <div className="w-full h-full flex items-center justify-center">
                          <div className="w-1 h-1 bg-white rounded-full animate-ping" />
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            ))}
          </div>

          {/* Grid Legend & Palette Selector */}
          <div className="flex flex-wrap items-center justify-between gap-4 mt-4 pt-3 border-t border-slate-900 text-xs text-slate-400">
            <div className="flex items-center gap-2">
              <span>Less</span>
              {palette.levels.map((lvlColor, idx) => (
                <div
                  key={idx}
                  className="w-3 h-3 rounded-[2px]"
                  style={{ backgroundColor: lvlColor }}
                />
              ))}
              <span>More</span>
            </div>

            {/* Theme switcher */}
            <div className="flex items-center gap-2">
              <span className="text-slate-500">Theme:</span>
              {(Object.keys(PALETTES) as (keyof typeof PALETTES)[]).map(pk => (
                <button
                  key={pk}
                  id={`palette-select-${pk}`}
                  onClick={() => setActivePalette(pk)}
                  className={`px-2 py-0.5 rounded text-[11px] font-medium border transition-colors ${
                    activePalette === pk
                      ? 'bg-slate-800 text-white border-indigo-500/50'
                      : 'bg-slate-950 text-slate-400 border-slate-800 hover:text-slate-200'
                  }`}
                >
                  {PALETTES[pk].name}
                </button>
              ))}
            </div>

            {/* Speed Selector */}
            <div className="flex items-center gap-1.5">
              <span className="text-slate-500">Speed:</span>
              {[150, 100, 60].map(s => (
                <button
                  key={s}
                  onClick={() => setSpeed(s)}
                  className={`px-2 py-0.5 rounded text-[11px] font-mono transition-colors ${
                    speed === s
                      ? 'bg-indigo-600 text-white font-bold'
                      : 'bg-slate-800 text-slate-400 hover:text-slate-200'
                  }`}
                >
                  {s === 150 ? '1x' : s === 100 ? '1.5x' : '2x'}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Game Mode Controls Instructions */}
      {mode === 'game' && (
        <div className="mt-4 p-4 rounded-xl bg-slate-950/80 border border-emerald-500/30 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
              <Terminal className="w-5 h-5" />
            </div>
            <div>
              <div className="text-sm font-semibold text-white">Manual Snake Control Active</div>
              <div className="text-xs text-slate-400">Use <kbd className="px-1.5 py-0.5 rounded bg-slate-800 text-slate-200 font-mono text-[10px]">W A S D</kbd> or <kbd className="px-1.5 py-0.5 rounded bg-slate-800 text-slate-200 font-mono text-[10px]">Arrow Keys</kbd> to steer the snake and eat the pink commit nodes!</div>
            </div>
          </div>

          {/* On-screen Directional Pad for touch/mobile */}
          <div className="grid grid-cols-3 gap-1 w-28">
            <div />
            <button
              onClick={() => { if (direction !== 'DOWN') nextDirectionRef.current = 'UP'; }}
              className="p-2 bg-slate-800 hover:bg-slate-700 active:bg-emerald-600 rounded text-slate-200 text-xs font-bold text-center"
            >
              ▲
            </button>
            <div />
            <button
              onClick={() => { if (direction !== 'RIGHT') nextDirectionRef.current = 'LEFT'; }}
              className="p-2 bg-slate-800 hover:bg-slate-700 active:bg-emerald-600 rounded text-slate-200 text-xs font-bold text-center"
            >
              ◀
            </button>
            <button
              onClick={() => { if (direction !== 'UP') nextDirectionRef.current = 'DOWN'; }}
              className="p-2 bg-slate-800 hover:bg-slate-700 active:bg-emerald-600 rounded text-slate-200 text-xs font-bold text-center"
            >
              ▼
            </button>
            <button
              onClick={() => { if (direction !== 'LEFT') nextDirectionRef.current = 'RIGHT'; }}
              className="p-2 bg-slate-800 hover:bg-slate-700 active:bg-emerald-600 rounded text-slate-200 text-xs font-bold text-center"
            >
              ▶
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
