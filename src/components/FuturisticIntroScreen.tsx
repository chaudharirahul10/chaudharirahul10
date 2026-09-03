import React, { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Terminal, ShieldCheck, Cpu, ChevronRight, Activity, Globe } from 'lucide-react';

interface FuturisticIntroScreenProps {
  onComplete: () => void;
}

export const FuturisticIntroScreen: React.FC<FuturisticIntroScreenProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState<number>(0);
  const [statusIndex, setStatusIndex] = useState<number>(0);
  const [isExiting, setIsExiting] = useState<boolean>(false);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  const statusMessages = [
    "INITIALIZING NEURAL NETWORKS & ML MATRICES...",
    "INDEXING PYTHON, C++ & FULL-STACK MODULES...",
    "VERIFYING HOST IDENTITY: rahulchaudhary07.com.np...",
    "SYSTEM SECURE • WELCOME TO RAHUL CHAUDHARY'S PORTFOLIO"
  ];

  // Handle skip / finish
  const handleExit = () => {
    if (isExiting) return;
    setIsExiting(true);
    setTimeout(() => {
      onComplete();
    }, 600);
  };

  // Keyboard shortcut (Escape or Space to skip)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' || e.key === ' ' || e.key === 'Enter') {
        handleExit();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isExiting]);

  // Progress timer for 3.2s total duration
  useEffect(() => {
    const startTime = Date.now();
    const duration = 3000; // 3 seconds of high-tech progression

    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const pct = Math.min(100, Math.round((elapsed / duration) * 100));
      setProgress(pct);

      if (pct >= 85) {
        setStatusIndex(3);
      } else if (pct >= 55) {
        setStatusIndex(2);
      } else if (pct >= 25) {
        setStatusIndex(1);
      } else {
        setStatusIndex(0);
      }

      if (pct >= 100) {
        clearInterval(interval);
        setTimeout(() => {
          handleExit();
        }, 350);
      }
    }, 30);

    return () => clearInterval(interval);
  }, []);

  // Ambient cyber particle canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    // Particle nodes
    const particleCount = Math.min(45, Math.floor((width * height) / 30000));
    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
      alpha: number;
    }> = [];

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.7,
        vy: (Math.random() - 0.5) * 0.7,
        radius: Math.random() * 1.5 + 0.5,
        alpha: Math.random() * 0.5 + 0.2
      });
    }

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw subtle connections
      ctx.lineWidth = 0.5;
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 90) {
            ctx.strokeStyle = `rgba(6, 182, 212, ${0.15 * (1 - dist / 90)})`;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      // Draw particles
      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        ctx.fillStyle = `rgba(125, 211, 252, ${p.alpha})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fill();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <AnimatePresence>
      {!isExiting && (
        <motion.div
          id="futuristic-intro-screen"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.03, filter: 'blur(8px)' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-[9999] bg-[#030712] text-slate-100 flex flex-col justify-between overflow-hidden select-none font-sans"
        >
          {/* Ambient background canvas */}
          <canvas
            ref={canvasRef}
            className="absolute inset-0 pointer-events-none opacity-60 z-0"
          />

          {/* Radial futuristic glow behind center */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-cyan-500/10 via-indigo-600/15 to-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

          {/* Subtle horizontal laser scan line */}
          <motion.div
            initial={{ translateY: '-100vh', opacity: 0 }}
            animate={{ translateY: '100vh', opacity: [0, 0.6, 0.6, 0] }}
            transition={{ duration: 2.8, repeat: Infinity, ease: 'linear' }}
            className="absolute left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent pointer-events-none z-10 shadow-[0_0_15px_#06b6d4]"
          />

          {/* Isometric grid overlay */}
          <div 
            className="absolute inset-0 pointer-events-none opacity-10 bg-[linear-gradient(to_right,#06b6d4_1px,transparent_1px),linear-gradient(to_bottom,#06b6d4_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" 
          />

          {/* TOP HUD BAR */}
          <header className="relative z-20 px-4 sm:px-8 py-4 flex items-center justify-between border-b border-cyan-950/80 backdrop-blur-sm bg-[#030712]/40">
            {/* Left Telemetry */}
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2 px-2.5 py-1 rounded-md bg-cyan-950/60 border border-cyan-500/30 text-cyan-300 font-mono text-[11px] tracking-wider">
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
                <span className="font-semibold">CORE // ONLINE</span>
              </div>
              <div className="hidden sm:flex items-center gap-2 text-slate-400 font-mono text-[11px]">
                <Globe className="w-3.5 h-3.5 text-cyan-400" />
                <span>rahulchaudhary07.com.np</span>
              </div>
            </div>

            {/* Center HUD status */}
            <div className="hidden md:flex items-center gap-2 text-slate-400 font-mono text-[11px] tracking-widest uppercase">
              <Activity className="w-3.5 h-3.5 text-indigo-400 animate-pulse" />
              <span>SECURITY PROTOCOL: QUANTUM-PASS</span>
            </div>

            {/* Right Skip Button */}
            <div className="flex items-center gap-2">
              <button
                id="intro-skip-button"
                onClick={handleExit}
                className="group flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900/80 hover:bg-cyan-950/60 border border-slate-700/80 hover:border-cyan-400 text-slate-300 hover:text-cyan-200 text-xs font-mono tracking-wider transition-all duration-200 cursor-pointer shadow-sm hover:shadow-[0_0_15px_rgba(6,182,212,0.3)]"
                title="Press Esc or Space to skip"
              >
                <span>SKIP INTRO</span>
                <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform text-cyan-400" />
                <span className="text-[10px] text-slate-500 hidden sm:inline">(ESC)</span>
              </button>
            </div>
          </header>

          {/* MAIN CENTERPIECE: RAHUL CHAUDHARY */}
          <main className="relative z-20 flex-1 flex flex-col items-center justify-center px-4 text-center">
            {/* Holographic Arc & Monogram Shield */}
            <div className="relative mb-6 sm:mb-8 flex items-center justify-center">
              {/* Outer rotating dashed ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 16, repeat: Infinity, ease: 'linear' }}
                className="w-32 h-32 sm:w-40 sm:h-40 rounded-full border border-dashed border-cyan-500/30 absolute"
              />

              {/* Inner counter-rotating ring with glowing notches */}
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
                className="w-24 h-24 sm:w-32 sm:h-32 rounded-full border border-cyan-400/40 border-t-cyan-300 border-r-transparent border-b-indigo-500 border-l-transparent absolute"
              />

              {/* Center Holographic Monogram */}
              <motion.div
                initial={{ scale: 0.6, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
                className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-br from-cyan-950/80 via-slate-950 to-indigo-950/80 border border-cyan-400/50 flex flex-col items-center justify-center shadow-[0_0_25px_rgba(6,182,212,0.4)] backdrop-blur-md relative group"
              >
                <div className="font-mono font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-sky-200 to-indigo-300 text-lg sm:text-2xl tracking-tighter">
                  RC
                </div>
                <div className="w-6 h-[1.5px] bg-cyan-400/80 mt-0.5" />
                <span className="text-[8px] font-mono text-cyan-400/80 tracking-widest mt-0.5">DEV</span>
              </motion.div>
            </div>

            {/* High-tech Framed Title Container */}
            <div className="relative max-w-4xl mx-auto px-4">
              {/* Corner HUD Reticle Markers */}
              <div className="absolute -top-3 -left-2 w-3 h-3 border-t-2 border-l-2 border-cyan-400 opacity-80" />
              <div className="absolute -top-3 -right-2 w-3 h-3 border-t-2 border-r-2 border-cyan-400 opacity-80" />
              <div className="absolute -bottom-3 -left-2 w-3 h-3 border-b-2 border-l-2 border-cyan-400 opacity-80" />
              <div className="absolute -bottom-3 -right-2 w-3 h-3 border-b-2 border-r-2 border-cyan-400 opacity-80" />

              {/* System Header Tag */}
              <motion.div
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="inline-flex items-center gap-2 mb-2 px-3 py-0.5 rounded-full bg-cyan-950/40 border border-cyan-500/20 text-[10px] sm:text-xs font-mono text-cyan-400 tracking-widest uppercase"
              >
                <Terminal className="w-3 h-3 text-cyan-300" />
                <span>PORTFOLIO OS // IDENTITY LOADED</span>
              </motion.div>

              {/* Primary Name: RAHUL CHAUDHARY */}
              <motion.h1
                id="intro-author-name"
                initial={{ opacity: 0, scale: 0.94, letterSpacing: '0.1em' }}
                animate={{ opacity: 1, scale: 1, letterSpacing: '0.22em' }}
                transition={{ delay: 0.35, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold uppercase tracking-[0.18em] sm:tracking-[0.24em] md:tracking-[0.28em] text-white select-none py-1"
                style={{
                  textShadow: '0 0 35px rgba(6, 182, 212, 0.45), 0 0 70px rgba(99, 102, 241, 0.25)'
                }}
              >
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-cyan-200 to-indigo-200">
                  RAHUL CHAUDHARY
                </span>
              </motion.h1>

              {/* Secondary Subtitle */}
              <motion.div
                id="intro-author-subtitle"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="mt-4 inline-flex items-center gap-2 px-4 sm:px-6 py-2 rounded-xl bg-slate-900/90 border border-cyan-500/30 text-xs sm:text-sm md:text-base font-mono font-medium text-cyan-300 shadow-[0_0_20px_rgba(6,182,212,0.15)]"
              >
                <Cpu className="w-4 h-4 text-cyan-400 shrink-0" />
                <span className="tracking-wide">
                  AI/ML Developer <span className="text-emerald-400 font-bold">•</span> Python Developer <span className="text-emerald-400 font-bold">•</span> Software Engineer
                </span>
              </motion.div>
            </div>

            {/* Dynamic Diagnostics Status Line */}
            <motion.div
              key={statusIndex}
              initial={{ opacity: 0, y: 4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -4 }}
              transition={{ duration: 0.3 }}
              className="mt-8 flex items-center justify-center gap-2 text-xs sm:text-sm font-mono text-slate-400 max-w-lg"
            >
              <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
              <span className="tracking-wider">{statusMessages[statusIndex]}</span>
            </motion.div>
          </main>

          {/* BOTTOM HUD PROGRESS BAR & TELEMETRY */}
          <footer className="relative z-20 px-4 sm:px-8 py-5 border-t border-cyan-950/80 backdrop-blur-sm bg-[#030712]/40">
            <div className="max-w-4xl mx-auto space-y-2">
              {/* Progress Labels */}
              <div className="flex items-center justify-between text-[11px] font-mono text-slate-400 tracking-wider">
                <div className="flex items-center gap-2">
                  <span className="text-cyan-400 font-semibold">{progress}%</span>
                  <span className="text-slate-500">•</span>
                  <span className="uppercase text-slate-300">
                    {progress < 100 ? 'INITIALIZING PORTFOLIO ASSETS...' : 'SYSTEM READY — ENTERING'}
                  </span>
                </div>
                <div className="hidden sm:flex items-center gap-1.5 text-slate-500">
                  <span>AUTOPILOT: READY</span>
                </div>
              </div>

              {/* High-Tech Progress Bar Track */}
              <div className="h-1.5 w-full bg-slate-900 rounded-full overflow-hidden border border-cyan-950 p-[1px]">
                <motion.div
                  className="h-full bg-gradient-to-r from-indigo-500 via-cyan-400 to-emerald-400 rounded-full shadow-[0_0_12px_#06b6d4]"
                  style={{ width: `${progress}%` }}
                  transition={{ ease: 'linear' }}
                />
              </div>

              {/* Footer info line */}
              <div className="flex items-center justify-between text-[10px] font-mono text-slate-500 pt-1">
                <span>IDENTITY: RAHUL CHAUDHARY</span>
                <span className="hover:text-cyan-400 transition-colors cursor-pointer" onClick={handleExit}>
                  CLICK ANYWHERE OR ESC TO ENTER
                </span>
                <span>SECURE HOST // rahulchaudhary07.com.np</span>
              </div>
            </div>
          </footer>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
