import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useMotionValue, useSpring } from 'framer-motion';
import { Zap, ChevronRight } from 'lucide-react';

// ==========================================
// 🎯 CUSTOM CURSOR - SAMA PERSIS DENGAN MAIN CONTENT
// ==========================================
const CustomCursor = () => {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const springConfig = { damping: 25, stiffness: 350, mass: 0.2 };
  const xSpring = useSpring(cursorX, springConfig);
  const ySpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!isVisible) setIsVisible(true);
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };
    const handleMouseOver = (e) => {
      const isTextInput = e.target.closest('input, textarea');
      if (isTextInput) { setIsVisible(false); return; }
      const isInteractive = e.target.closest('a, button, [role="button"]');
      setIsHovering(!!isInteractive);
    };
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseover', handleMouseOver);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, [isVisible, cursorX, cursorY]);

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] hidden md:block"
        style={{ x: xSpring, y: ySpring, opacity: isVisible ? 1 : 0, willChange: 'transform' }}
      >
        <motion.div
          animate={{ scale: isHovering ? 1.8 : 1, rotate: isHovering ? 45 : 0 }}
          transition={{ type: "tween", duration: 0.3, ease: "easeOut" }}
          className="relative flex items-center justify-center"
          style={{ filter: "drop-shadow(0 0 12px rgba(34, 211, 238, 0.9))" }}
        >
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
            <path d="M5 3L19 12L12 13L9 20L5 3Z" fill="rgb(34, 211, 238)" stroke="white" strokeWidth="0.5" strokeLinejoin="round" />
          </svg>
        </motion.div>
      </motion.div>
      <motion.div
        className="fixed top-0 left-0 w-1.5 h-1.5 bg-cyan-400 rounded-full pointer-events-none z-[9999] hidden md:block"
        style={{ x: cursorX, y: cursorY, opacity: isVisible ? 1 : 0, translateX: '-50%', translateY: '-50%', boxShadow: '0 0 10px rgba(34, 211, 238, 0.8)' }}
      />
    </>
  );
};

// ==========================================
// 🚀 SPLASH SCREEN COMPONENT
// ==========================================
export default function SplashScreen({ onEnter }) {
  const [progress, setProgress] = useState(0);
  const [phase, setPhase] = useState('loading');
  const [typedText, setTypedText] = useState('');
  const fullText = 'INITIALIZING SYSTEM';

  useEffect(() => {
    if (phase !== 'loading') return;
    let i = 0;
    const interval = setInterval(() => {
      if (i <= fullText.length) {
        setTypedText(fullText.slice(0, i));
        i++;
      } else {
        clearInterval(interval);
      }
    }, 60);
    return () => clearInterval(interval);
  }, [phase]);

  useEffect(() => {
    if (phase !== 'loading') return;
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setPhase('ready'), 400);
          return 100;
        }
        return prev + Math.random() * 8 + 2;
      });
    }, 120);
    return () => clearInterval(interval);
  }, [phase]);

  const techTags = ['LabVIEW', 'FPGA', 'myRIO', 'Vision', 'ROS2', 'Python', 'C++', 'OpenCV'];

  return (
    <>
      {/* 🛡️ GLOBAL CURSOR FIX - Hilangkan kursor default di halaman Splash */}
      <style>{`
        html, body { cursor: none !important; }
        * { cursor: none !important; }
        input, textarea { cursor: text !important; }
      `}</style>
      <CustomCursor />

      <motion.div 
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.6 }}
        className="fixed inset-0 bg-[#060709] z-50 flex items-center justify-center overflow-hidden"
      >
        {/* Background Grid */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.04]"
          style={{
            backgroundImage: `linear-gradient(to right, rgb(34, 211, 238) 1px, transparent 1px), linear-gradient(to bottom, rgb(34, 211, 238) 1px, transparent 1px)`,
            backgroundSize: '48px 48px'
          }}
        />

        {/* Glow Orbs */}
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-cyan-500 rounded-full blur-[200px] opacity-[0.06]" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-emerald-500 rounded-full blur-[180px] opacity-[0.05]" />

        {/* Scan Line */}
        <motion.div
          className="absolute left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent pointer-events-none"
          animate={{ top: ['-5%', '105%'] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
        />

        <div className="relative z-10 flex flex-col items-center justify-center text-center px-6 max-w-2xl mx-auto">

          {/* INITIALIZING SYSTEM */}
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mb-8">
            <h2 className="text-xs font-mono text-cyan-400/80 uppercase tracking-[0.4em]">
              {typedText}
              <motion.span animate={{ opacity: [1, 0] }} transition={{ duration: 0.6, repeat: Infinity }} className="text-cyan-400">|</motion.span>
            </h2>
          </motion.div>

          {/* NAMA & TITLE */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="mb-10"
          >
            <h1 className="text-5xl sm:text-7xl font-black text-white tracking-tight mb-3">
              NABILLI RIZKY
            </h1>
            <div className="flex items-center justify-center gap-2 text-base sm:text-lg font-mono text-zinc-400">
              <span className="text-cyan-400">&gt;</span>
              <span>Mobile Robotics Engineer</span>
            </div>
          </motion.div>

          {/* PROGRESS BAR */}
          <motion.div
            initial={{ opacity: 0, scaleX: 0.8 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ delay: 1.2 }}
            className="w-full max-w-md mb-8"
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider">
                Loading System Components
              </span>
              <span className="text-[10px] font-mono text-cyan-400 font-bold">
                {Math.min(Math.floor(progress), 100)}%
              </span>
            </div>
            <div className="w-full h-1.5 rounded-full bg-zinc-800/80 overflow-hidden border border-zinc-700/50">
              <motion.div
                className="h-full rounded-full bg-gradient-to-r from-cyan-500 via-emerald-400 to-cyan-500 relative"
                style={{ width: `${Math.min(progress, 100)}%` }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent"
                  animate={{ x: ['-200%', '200%'] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: 'linear' }}
                />
              </motion.div>
            </div>
          </motion.div>

          {/* TECH TAGS */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.6 }}
            className="flex flex-wrap justify-center gap-2 mb-12"
          >
            {techTags.map((tag, idx) => (
              <motion.span
                key={tag}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.8 + idx * 0.08 }}
                className="px-3 py-1.5 rounded-lg bg-zinc-900/80 border border-zinc-700/60 text-[11px] font-mono text-zinc-400 backdrop-blur-sm"
              >
                {tag}
              </motion.span>
            ))}
          </motion.div>

          {/* ENTER BUTTON */}
          <AnimatePresence mode="wait">
            {phase === 'ready' && (
              <motion.div
                key="ready"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.6 }}
                className="flex flex-col items-center gap-6"
              >
                <motion.button
                  onClick={onEnter}
                  whileHover={{ scale: 1.05, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  className="group relative px-10 py-4 rounded-2xl overflow-hidden shadow-2xl shadow-cyan-500/20"
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                    animate={{ x: ['-200%', '200%'] }}
                    transition={{ duration: 2.5, repeat: Infinity, ease: 'linear' }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-emerald-500" />
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-emerald-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  <div className="relative flex items-center gap-3 text-black font-bold text-sm font-mono uppercase tracking-wider">
                    <span>Enter Portfolio</span>
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </motion.button>

                <div className="flex items-center gap-6 text-[10px] font-mono text-zinc-500">
                  <span className="flex items-center gap-2">
                    <motion.span
                      className="w-2 h-2 rounded-full bg-emerald-400"
                      animate={{ scale: [1, 1.4, 1] }}
                      transition={{ duration: 1.2, repeat: Infinity }}
                    />
                    System Ready
                  </span>
                  <span className="w-[1px] h-3 bg-zinc-700" />
                  <span className="flex items-center gap-1.5">
                    <Zap className="w-3 h-3 text-cyan-400" />
                    High Performance
                  </span>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </>
  );
}