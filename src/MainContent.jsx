import React, { useState, useEffect, useRef, useMemo } from 'react';
import { motion, useScroll, useTransform, AnimatePresence, useMotionValue, useSpring, useInView } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { 
  Mail, Phone, MapPin, 
  Trophy, GraduationCap, Code2, Download, ExternalLink, Briefcase, 
  Star, Sparkles, Radio, Award, Layers, FileText, ArrowUpRight, 
  Check, Copy, ChevronUp, Menu, X, Wrench, Cpu, Bot, Settings, 
  Brain, Send, MessageSquare, User, Zap, CheckCircle2, Play, 
  Clock, Calendar, Target, Rocket, Shield, Heart, Eye, Terminal,
  Activity, Lightbulb, Bookmark, Filter, Search, TrendingUp,
  Camera, Film, Music, Mic, Headphones, Monitor, Smartphone,
  Server, Database, GitBranch, Package, Binary, Workflow,
  BookOpen, Flame, Gem, Crown, Medal, CircleDot, Hexagon,
  Gauge, Thermometer, Compass, Map, Navigation, Flag,
  ChevronRight, ChevronLeft, ArrowRight, ArrowLeft, Plus, Minus,
  Hash, AtSign, Link2, Paperclip, Scissors, Clipboard,
  Bell, BellRing, AlertCircle, Info, HelpCircle
} from 'lucide-react';

// ==========================================
// 🎨 CUSTOM BRAND ICONS (Lucide v1.0+ removed brand icons)
// ==========================================
const Github = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const Linkedin = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const Instagram = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const Youtube = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
    <path d="m10 15 5-3-5-3z" />
  </svg>
);

const Tiktok = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
  </svg>
);

// ==========================================
// 🎭 ANIMATION VARIANTS - COMPREHENSIVE
// ==========================================
const fadeInUp = {
  hidden: { opacity: 0, y: 35 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
};

const fadeInDown = {
  hidden: { opacity: 0, y: -35 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
};

const fadeInLeft = {
  hidden: { opacity: 0, x: -35 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
};

const fadeInRight = {
  hidden: { opacity: 0, x: 35 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.1 } }
};

const staggerContainerFast = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.05, delayChildren: 0.05 } }
};

const staggerContainerSlow = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.2 } }
};

// ==========================================
// 🎯 CUSTOM CURSOR - PREMIUM VERSION
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
      if (isTextInput) {
        setIsVisible(false);
        return;
      }
      const isInteractive = e.target.closest('a, button, input, textarea, label, [role="button"]');
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
          animate={{ 
            scale: isHovering ? 1.8 : 1, 
            rotate: isHovering ? 45 : 0 
          }}
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
        style={{ 
          x: cursorX, 
          y: cursorY, 
          opacity: isVisible ? 1 : 0,
          translateX: '-50%',
          translateY: '-50%',
          boxShadow: '0 0 10px rgba(34, 211, 238, 0.8)'
        }}
      />
    </>
  );
};

// ==========================================
// 🧲 MAGNETIC BUTTON - PREMIUM
// ==========================================
const MagneticButton = ({ children, className, onClick, type, disabled, strength = 0.2 }) => {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);
  
  const springConfig = { stiffness: 150, damping: 15 };
  const springX = useSpring(x, springConfig);
  const springY = useSpring(y, springConfig);
  const springRotateX = useSpring(rotateX, springConfig);
  const springRotateY = useSpring(rotateY, springConfig);
  
  const handleMouse = (e) => {
    if (!ref.current || disabled) return;
    const rect = ref.current.getBoundingClientRect();
    const deltaX = e.clientX - (rect.left + rect.width / 2);
    const deltaY = e.clientY - (rect.top + rect.height / 2);
    
    x.set(deltaX * strength);
    y.set(deltaY * strength);
    rotateY.set(deltaX * 0.05);
    rotateX.set(-deltaY * 0.05);
  };
  
  const handleLeave = () => {
    x.set(0);
    y.set(0);
    rotateX.set(0);
    rotateY.set(0);
  };
  
  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={handleLeave}
      style={{ 
        x: springX, 
        y: springY,
        rotateX: springRotateX,
        rotateY: springRotateY,
        transformStyle: "preserve-3d"
      }}
    >
      <button 
        className={className} 
        onClick={onClick} 
        type={type} 
        disabled={disabled}
        style={{ transform: "translateZ(20px)" }}
      >
        {children}
      </button>
    </motion.div>
  );
};

// ==========================================
// 📝 TEXT REVEAL - MULTIPLE DIRECTIONS
// ==========================================
const TextReveal = ({ children, className, delay = 0, direction = 'up' }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  
  const variants = {
    up: { initial: { y: "100%" }, animate: { y: 0 } },
    down: { initial: { y: "-100%" }, animate: { y: 0 } },
    left: { initial: { x: "-100%" }, animate: { x: 0 } },
    right: { initial: { x: "100%" }, animate: { x: 0 } }
  };
  
  return (
    <div ref={ref} className="overflow-hidden">
      <motion.div
        initial={variants[direction].initial}
        animate={isInView ? variants[direction].animate : variants[direction].initial}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay }}
        className={className}
      >
        {children}
      </motion.div>
    </div>
  );
};

// ==========================================
// ✨ ANIMATED TEXT - WORD BY WORD
// ==========================================
const AnimatedText = ({ text, className, delay = 0 }) => {
  const words = text.split(' ');
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  
  return (
    <motion.div 
      ref={ref}
      className={className}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={staggerContainerFast}
    >
      {words.map((word, i) => (
        <motion.span 
          key={i} 
          variants={fadeInUp}
          className="inline-block mr-2"
        >
          {word}
        </motion.span>
      ))}
    </motion.div>
  );
};

// ==========================================
// 🔢 ANIMATED COUNTER - PREMIUM
// ==========================================
const AnimatedCounter = ({ end, duration = 2, suffix = '', prefix = '' }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  
  useEffect(() => {
    if (!isInView) return;
    
    let startTime;
    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      const easeProgress = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(easeProgress * end));
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [end, duration, isInView]);
  
  return <span ref={ref}>{prefix}{count}{suffix}</span>;
};

// ==========================================
// 🎪 3D TILT CARD - PREMIUM
// ==========================================
const TiltCard = ({ children, className, maxTilt = 10, scale = 1.02 }) => {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [maxTilt, -maxTilt]), { stiffness: 300, damping: 30 });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-maxTilt, maxTilt]), { stiffness: 300, damping: 30 });
  
  const handleMouseMove = (e) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    x.set((e.clientX - rect.left - rect.width / 2) / rect.width);
    y.set((e.clientY - rect.top - rect.height / 2) / rect.height);
  };
  
  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => { x.set(0); y.set(0); }}
      whileHover={{ scale }}
      style={{ 
        rotateX, 
        rotateY, 
        transformStyle: "preserve-3d",
        perspective: "1000px"
      }}
      transition={{ duration: 0.3 }}
      className={className}
    >
      <div style={{ transform: "translateZ(30px)" }}>
        {children}
      </div>
    </motion.div>
  );
};

// ==========================================
// 🎨 PARTICLE BACKGROUND - LIGHTWEIGHT
// ==========================================
const ParticleBackground = () => {
  const particles = useMemo(() => 
    Array.from({ length: 30 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 2 + 1,
      duration: Math.random() * 25 + 20,
      delay: Math.random() * 5,
      color: ['bg-cyan-400/20', 'bg-emerald-400/20', 'bg-purple-400/20'][Math.floor(Math.random() * 3)]
    })), 
  []);
  
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className={`absolute rounded-full ${p.color}`}
          style={{ left: `${p.x}%`, top: `${p.y}%`, width: p.size, height: p.size }}
          animate={{ 
            y: [0, -150, 0], 
            x: [0, Math.random() * 100 - 50, 0],
            opacity: [0, 0.8, 0] 
          }}
          transition={{ 
            duration: p.duration, 
            delay: p.delay, 
            repeat: Infinity, 
            ease: "linear" 
          }}
        />
      ))}
    </div>
  );
};

// ==========================================
// 🌟 FLOATING ELEMENT
// ==========================================
const FloatingElement = ({ children, duration = 4, distance = 15 }) => (
  <motion.div
    animate={{ y: [0, -distance, 0] }}
    transition={{ duration, repeat: Infinity, ease: "easeInOut" }}
  >
    {children}
  </motion.div>
);

// ==========================================
// 🎯 MARQUEE COMPONENT
// ==========================================
const Marquee = ({ children, speed = 40, reverse = false, className }) => (
  <div className={`overflow-hidden relative ${className}`}>
    <motion.div
      className="flex gap-6 whitespace-nowrap"
      animate={{ x: reverse ? ["-50%", "0%"] : ["0%", "-50%"] }}
      transition={{ duration: speed, repeat: Infinity, ease: "linear" }}
    >
      {children}
      {children}
    </motion.div>
  </div>
);

// ==========================================
// 🎯 SECTION HEADING - PREMIUM
// ==========================================
const SectionHeading = ({ icon: Icon, title, subtitle, iconColor = "text-cyan-400", badge }) => (
  <div className="flex flex-col gap-3 border-b border-zinc-800 pb-6 mb-12">
    <div className="flex items-center gap-4 flex-wrap">
      <motion.div 
        whileHover={{ rotate: 360, scale: 1.1 }}
        transition={{ duration: 0.6 }}
        className="p-3 rounded-2xl bg-gradient-to-br from-zinc-900 to-zinc-800 border border-zinc-700"
      >
        <Icon className={`w-6 h-6 ${iconColor}`} />
      </motion.div>
      <TextReveal className="text-3xl md:text-4xl lg:text-5xl font-black text-white">
        {title}
      </TextReveal>
      {badge && (
        <motion.span 
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-xs font-mono text-cyan-400"
        >
          {badge}
        </motion.span>
      )}
    </div>
    {subtitle && (
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="text-zinc-400 text-base md:text-lg leading-relaxed max-w-3xl"
      >
        {subtitle}
      </motion.p>
    )}
  </div>
);

// ==========================================
// 🎯 GRADIENT BORDER CARD
// ==========================================
const GradientBorderCard = ({ children, className, gradient = "from-cyan-500 via-purple-500 to-emerald-500" }) => (
  <div className={`relative p-[1px] rounded-3xl bg-gradient-to-r ${gradient} ${className}`}>
    <div className="relative bg-zinc-950 rounded-3xl h-full">
      {children}
    </div>
  </div>
);

// ==========================================
// 🎯 SHIMMER EFFECT
// ==========================================
const ShimmerEffect = ({ children, className }) => (
  <div className={`relative overflow-hidden ${className}`}>
    {children}
    <motion.div
      className="absolute inset-0 pointer-events-none"
      style={{
        background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent)'
      }}
      animate={{ x: ['-100%', '200%'] }}
      transition={{ duration: 3, repeat: Infinity, ease: "linear", repeatDelay: 2 }}
    />
  </div>
);

// ==========================================
// 🎯 GLOW ORB
// ==========================================
const GlowOrb = ({ color = "cyan", size = "md", position }) => {
  const sizes = { sm: "w-[300px] h-[300px]", md: "w-[500px] h-[500px]", lg: "w-[700px] h-[700px]" };
  const colors = {
    cyan: "bg-cyan-500",
    emerald: "bg-emerald-500",
    purple: "bg-purple-500",
    amber: "bg-amber-500",
    pink: "bg-pink-500"
  };
  return (
    <div 
      className={`absolute ${sizes[size]} ${colors[color]} rounded-full blur-[150px] pointer-events-none opacity-[0.08] ${position}`}
    />
  );
};

// ==========================================
// 🎯 STAT CARD - PREMIUM
// ==========================================
const StatCard = ({ icon: Icon, label, value, suffix, sub, iconColor = "text-cyan-400", gradient = "from-cyan-500/10 to-emerald-500/10" }) => {
  const IconComponent = Icon;
  return (
    <TiltCard className={`p-6 rounded-2xl bg-gradient-to-br ${gradient} backdrop-blur-sm border border-zinc-700/80 hover:border-cyan-500/50 shadow-xl group relative overflow-hidden`}>
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="relative z-10">
        <div className="flex items-center justify-between mb-4">
          <motion.div 
            whileHover={{ rotate: 360 }} 
            transition={{ duration: 0.6 }}
            className="p-2.5 rounded-xl bg-zinc-900/80 border border-zinc-700/50"
          >
            <IconComponent className={`w-5 h-5 ${iconColor}`} />
          </motion.div>
          <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-500">{label}</span>
        </div>
        <p className="text-3xl font-black text-white mb-1">
          {typeof value === 'number' ? (
            <AnimatedCounter end={value} suffix={suffix || ''} />
          ) : (
            <>
              {value}
              {suffix && <span className="text-lg text-zinc-400 ml-1">{suffix}</span>}
            </>
          )}
        </p>
        {sub && <p className="text-xs text-zinc-400 font-mono">{sub}</p>}
      </div>
    </TiltCard>
  );
};

// ==========================================
// 🎯 PROJECT CARD - PREMIUM
// ==========================================
const ProjectCard = ({ project, index, featured = false }) => (
  <motion.div 
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    whileHover={{ y: -12 }}
    className={`group relative rounded-3xl bg-zinc-900/40 backdrop-blur-sm border border-zinc-700/80 hover:border-cyan-500/50 overflow-hidden shadow-xl transition-all duration-300 ${
      featured ? 'md:col-span-2 lg:col-span-2 h-[450px]' : 'h-96'
    }`}
  >
    <div className="relative h-full w-full overflow-hidden bg-zinc-950">
      <motion.img 
        src={project.image}
        alt={project.title}
        className="w-full h-full object-cover"
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.7 }}
        onError={(e) => { e.currentTarget.src = "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=800"; }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/80 to-transparent" />
      
      <div className="absolute top-4 left-4 z-10">
        <motion.span 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-[10px] font-mono uppercase tracking-wider text-cyan-400 bg-black/80 backdrop-blur-md border border-cyan-800/40 px-3 py-1 rounded-full"
        >
          {project.status}
        </motion.span>
      </div>

      {project.metrics && (
        <div className="absolute top-4 right-4 z-10">
          <span className="text-[10px] font-mono text-emerald-400 bg-black/80 backdrop-blur-md border border-emerald-800/40 px-3 py-1 rounded-full">
            {project.metrics}
          </span>
        </div>
      )}
      
      <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
          {project.title}
        </h3>
        <p className="text-sm text-zinc-300 mb-4 line-clamp-2">
          {project.desc}
        </p>
        <div className="flex flex-wrap gap-2">
          {project.stack.slice(0, 4).map((item, sIdx) => (
            <motion.span 
              key={sIdx}
              whileHover={{ scale: 1.1, y: -2 }}
              className="text-[10px] font-mono px-2.5 py-1 rounded-lg bg-zinc-800/80 border border-zinc-700/50 text-zinc-300 hover:border-cyan-500/50 transition-all cursor-default backdrop-blur-sm"
            >
              {item}
            </motion.span>
          ))}
        </div>
      </div>

      <motion.div 
        className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-emerald-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
      />
    </div>
  </motion.div>
);

// ==========================================
// 🎯 TIMELINE ITEM - PREMIUM
// ==========================================
const TimelineItem = ({ item, index, isLeft = false }) => {
  const IconComponent = item.icon;
  return (
    <motion.div
      initial={{ opacity: 0, x: isLeft ? -30 : 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className={`relative flex gap-6 mb-8 ${isLeft ? 'md:flex-row-reverse' : ''}`}
    >
      <div className="flex-shrink-0 relative z-10">
        <motion.div
          whileInView={{ scale: [0, 1.2, 1] }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-500 to-emerald-500 flex items-center justify-center shadow-lg shadow-cyan-500/30 border-2 border-zinc-900"
        >
          <IconComponent className="w-6 h-6 text-white" />
        </motion.div>
        {index > 0 && (
          <div className="absolute top-14 left-1/2 -translate-x-1/2 w-0.5 h-[calc(100%+2rem)] bg-gradient-to-b from-cyan-500 via-cyan-500/50 to-transparent" />
        )}
      </div>
      
      <motion.div 
        whileHover={{ scale: 1.02 }}
        className="flex-1 p-6 rounded-2xl bg-zinc-900/60 backdrop-blur-sm border border-zinc-700/80 hover:border-cyan-500/50 transition-all duration-300"
      >
        <div className="flex items-center gap-3 mb-3">
          <span className="text-xs font-mono text-cyan-400 bg-cyan-500/10 px-3 py-1 rounded-full border border-cyan-500/30">
            {item.year}
          </span>
          {item.category && (
            <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider">{item.category}</span>
          )}
        </div>
        <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
        <p className="text-sm text-zinc-400 leading-relaxed">{item.description}</p>
      </motion.div>
    </motion.div>
  );
};

// ==========================================
// 🎯 SKILL CARD - PREMIUM
// ==========================================
const SkillCard = ({ category, index }) => {
  const IconComponent = category.icon;
  const colorMap = {
    cyan: { text: "text-cyan-400", bg: "bg-cyan-500/10", border: "border-cyan-500/30", glow: "from-cyan-500/20" },
    emerald: { text: "text-emerald-400", bg: "bg-emerald-500/10", border: "border-emerald-500/30", glow: "from-emerald-500/20" },
    purple: { text: "text-purple-400", bg: "bg-purple-500/10", border: "border-purple-500/30", glow: "from-purple-500/20" },
    amber: { text: "text-amber-400", bg: "bg-amber-500/10", border: "border-amber-500/30", glow: "from-amber-500/20" }
  };
  const colors = colorMap[category.color] || colorMap.cyan;
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ y: -10 }}
      className="p-6 rounded-3xl bg-zinc-900/40 backdrop-blur-sm border border-zinc-700/80 hover:border-cyan-500/50 transition-all duration-300 shadow-xl group relative overflow-hidden"
    >
      <div className={`absolute -top-20 -right-20 w-40 h-40 rounded-full bg-gradient-to-br ${colors.glow} to-transparent blur-3xl opacity-30 group-hover:opacity-60 transition-opacity duration-500`} />
      
      <div className="relative z-10">
        <div className="flex items-center gap-3 mb-5">
          <motion.div 
            className={`w-12 h-12 rounded-xl ${colors.bg} ${colors.border} border flex items-center justify-center`}
            whileHover={{ rotate: 12, scale: 1.1 }}
            transition={{ duration: 0.3 }}
          >
            <IconComponent className={`w-6 h-6 ${colors.text}`} />
          </motion.div>
          <div>
            <h3 className="text-sm font-mono font-bold text-white uppercase tracking-wider">{category.title}</h3>
            <p className="text-[10px] font-mono text-zinc-500">{category.skills.length} tools</p>
          </div>
        </div>
        
        <ul className="space-y-2.5 text-xs text-zinc-400 font-mono">
          {category.skills.map((skill, sIdx) => (
            <motion.li 
              key={sIdx}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: sIdx * 0.03 }}
              whileHover={{ x: 5, color: "#22d3ee" }}
              className="flex items-center gap-2 transition-colors cursor-default group/item"
            >
              <span className={`${colors.text} group-hover/item:scale-125 transition-transform`}>▸</span>
              <span className="flex-1">{skill}</span>
            </motion.li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};

// ==========================================
// 🎯 PREMIUM CONTACT CARD
// ==========================================
const PremiumContactCard = ({ icon: Icon, label, value, href, gradient, iconColor = "text-white", delay = 0 }) => (
  <motion.a
    href={href}
    target={href.startsWith('http') ? "_blank" : undefined}
    rel="noreferrer"
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ delay, duration: 0.5 }}
    whileHover={{ y: -4, scale: 1.02 }}
    whileTap={{ scale: 0.98 }}
    className="group relative block p-[1px] rounded-2xl overflow-hidden transition-all duration-500"
  >
    <div className={`absolute inset-0 bg-gradient-to-r ${gradient} opacity-50 group-hover:opacity-100 transition-opacity duration-500`} />
    
    <motion.div 
      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100"
      animate={{ x: ['-100%', '200%'] }}
      transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 2, ease: "linear" }}
    />
    
    <div className="relative bg-zinc-950/95 backdrop-blur-xl rounded-2xl p-5 flex items-center gap-4 h-full">
      <div className={`relative flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br ${gradient} flex items-center justify-center shadow-lg`}>
        <Icon className={`relative w-6 h-6 ${iconColor} group-hover:scale-110 group-hover:rotate-12 transition-all duration-500`} />
      </div>
      
      <div className="flex-1 min-w-0">
        <p className="text-[10px] font-mono text-zinc-500 uppercase tracking-[0.2em] mb-1">{label}</p>
        <p className="text-sm font-mono text-white font-bold truncate group-hover:text-cyan-300 transition-colors">{value}</p>
      </div>
      
      <motion.div 
        className="flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity"
        animate={{ x: [0, 4, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <ArrowUpRight className="w-5 h-5 text-white" />
      </motion.div>
    </div>
  </motion.a>
);

// ==========================================
// 🎯 ACHIEVEMENT CARD - PREMIUM
// ==========================================
const AchievementCard = ({ achievement, index }) => {
  const IconComponent = achievement.icon;
  const colorMap = {
    amber: { gradient: "from-amber-500/20 to-transparent", border: "border-amber-500/40", text: "text-amber-400", glow: "bg-amber-500/20" },
    emerald: { gradient: "from-emerald-500/20 to-transparent", border: "border-emerald-500/40", text: "text-emerald-400", glow: "bg-emerald-500/20" },
    cyan: { gradient: "from-cyan-500/20 to-transparent", border: "border-cyan-500/40", text: "text-cyan-400", glow: "bg-cyan-500/20" },
    purple: { gradient: "from-purple-500/20 to-transparent", border: "border-purple-500/40", text: "text-purple-400", glow: "bg-purple-500/20" }
  };
  const colors = colorMap[achievement.color] || colorMap.amber;
  
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ y: -8, scale: 1.03 }}
      className={`p-5 rounded-2xl bg-gradient-to-br ${colors.gradient} border ${colors.border} relative overflow-hidden group`}
    >
      <div className={`absolute -top-10 -right-10 w-32 h-32 rounded-full ${colors.glow} blur-2xl opacity-30 group-hover:opacity-60 transition-opacity`} />
      
      <div className="relative z-10">
        <div className="flex items-start gap-3 mb-3">
          <motion.div
            whileHover={{ rotate: 360, scale: 1.2 }}
            transition={{ duration: 0.6 }}
            className={`p-2 rounded-xl bg-zinc-950/80 border ${colors.border}`}
          >
            <IconComponent className={`w-5 h-5 ${colors.text}`} />
          </motion.div>
          <div className="flex-1">
            <h4 className="font-bold text-white mb-1 group-hover:text-cyan-300 transition-colors">{achievement.title}</h4>
            <p className="text-xs text-zinc-400 leading-relaxed">{achievement.desc}</p>
          </div>
        </div>
        <div className="flex items-center justify-between pt-3 border-t border-zinc-800/50">
          <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider">{achievement.category}</span>
          <span className={`text-xs font-mono font-bold ${colors.text}`}>{achievement.year}</span>
        </div>
      </div>
    </motion.div>
  );
};

// ==========================================
// 🎯 MILESTONE CARD - PREMIUM
// ==========================================
const MilestoneCard = ({ milestone, index }) => {
  const colorMap = {
    amber: { gradient: "from-amber-500/15 via-zinc-900/90 to-zinc-950", border: "border-amber-500/40", text: "text-amber-400", badge: "bg-amber-500/10 border-amber-500/30" },
    emerald: { gradient: "from-emerald-500/15 via-zinc-900/90 to-zinc-950", border: "border-emerald-500/40", text: "text-emerald-400", badge: "bg-emerald-500/10 border-emerald-500/30" },
    cyan: { gradient: "from-cyan-500/15 via-zinc-900/90 to-zinc-950", border: "border-cyan-500/40", text: "text-cyan-400", badge: "bg-cyan-500/10 border-cyan-500/30" }
  };
  const colors = colorMap[milestone.color] || colorMap.amber;
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ y: -10 }}
      className={`p-7 rounded-3xl border bg-gradient-to-b ${colors.gradient} ${colors.border} backdrop-blur-sm flex flex-col justify-between relative group shadow-2xl overflow-hidden`}
    >
      <motion.div 
        className="absolute top-4 right-4"
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 3, repeat: Infinity, repeatDelay: 2 }}
      >
        <Trophy className={`w-8 h-8 ${colors.text} opacity-50`} />
      </motion.div>
      
      <div className="absolute -bottom-20 -right-20 w-40 h-40 rounded-full bg-gradient-to-br from-transparent to-white/5 blur-3xl" />
      
      <div className="relative z-10">
        <div className="flex items-center gap-2 mb-5">
          <motion.span 
            whileHover={{ scale: 1.1 }}
            className={`text-[10px] font-mono uppercase px-3 py-1.5 rounded-full border ${colors.badge} ${colors.text} font-bold`}
          >
            {milestone.level}
          </motion.span>
          <span className="text-[9px] font-mono text-zinc-500 uppercase tracking-wider">{milestone.field}</span>
        </div>
        
        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
          {milestone.title}
        </h3>
        <p className="text-xs font-mono text-zinc-400 mb-4">{milestone.event}</p>
        <p className="text-sm text-zinc-300 leading-relaxed">{milestone.desc}</p>
      </div>
      
      <div className="mt-6 pt-5 border-t border-zinc-800/80 relative z-10 flex items-center justify-between">
        <motion.a 
          whileHover={{ scale: 1.05, x: 5 }}
          whileTap={{ scale: 0.95 }}
          href={milestone.certUrl}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-zinc-800/80 hover:bg-zinc-700 text-xs font-mono text-cyan-300 border border-zinc-700/60 transition-all"
        >
          <FileText className="w-4 h-4" />
          <span>Sertifikat</span>
          <ArrowUpRight className="w-4 h-4 ml-1" />
        </motion.a>
        <CheckCircle2 className="w-5 h-5 text-emerald-400" />
      </div>
    </motion.div>
  );
};

// ==========================================
// 🎯 EXPERIENCE CARD - PREMIUM
// ==========================================
const ExperienceCard = ({ experience, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.1 }}
    whileHover={{ y: -8, scale: 1.01 }}
    className="p-8 rounded-3xl bg-gradient-to-br from-purple-500/10 via-zinc-900/50 to-transparent border border-zinc-700/80 hover:border-purple-500/50 shadow-2xl group relative overflow-hidden"
  >
    <div className="absolute top-0 right-0 w-48 h-48 bg-purple-500/10 rounded-full blur-3xl -mr-24 -mt-24 group-hover:scale-150 transition-transform duration-700" />
    
    <div className="relative z-10">
      <div className="flex items-start justify-between mb-4 flex-wrap gap-3">
        <div>
          <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-purple-300 transition-colors">
            {experience.company}
          </h3>
          <p className="text-purple-400 text-sm font-mono">{experience.position}</p>
        </div>
        <span className="text-zinc-500 text-sm font-mono px-3 py-1 rounded-full bg-zinc-900/80 border border-zinc-700/50">
          {experience.period}
        </span>
      </div>
      <p className="text-zinc-300 text-sm leading-relaxed">{experience.description}</p>
      
      {experience.skills && (
        <div className="flex flex-wrap gap-2 mt-4">
          {experience.skills.map((skill, i) => (
            <span key={i} className="px-3 py-1 rounded-lg bg-purple-500/10 border border-purple-500/30 text-xs font-mono text-purple-300">
              {skill}
            </span>
          ))}
        </div>
      )}
    </div>
  </motion.div>
);

// ==========================================
// 🎯 EDUCATION CARD - PREMIUM
// ==========================================
const EducationCard = ({ education, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.1 }}
    whileHover={{ y: -8, scale: 1.02 }}
    className={`p-8 rounded-3xl bg-gradient-to-br ${education.gradient} border ${education.border} shadow-2xl group relative overflow-hidden`}
  >
    <div className={`absolute top-0 right-0 w-48 h-48 ${education.glow} rounded-full blur-3xl -mr-24 -mt-24 group-hover:scale-150 transition-transform duration-700`} />
    
    <div className="relative z-10">
      <div className="flex items-center justify-between text-xs font-mono mb-4">
        <span className={`${education.accent} font-bold uppercase tracking-wider`}>{education.level}</span>
        <span className="text-zinc-500">{education.period}</span>
      </div>
      
      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
        {education.institution}
      </h3>
      <p className="text-xs text-zinc-400 font-mono mb-4">{education.program}</p>
      <p className="text-sm text-zinc-300 leading-relaxed">{education.description}</p>
      
      <div className="mt-6 pt-4 border-t border-zinc-800/80 flex items-center gap-2 text-[11px] font-mono text-zinc-500">
        <motion.div 
          animate={{ scale: [1, 1.3, 1] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className={`w-2 h-2 rounded-full ${education.dotColor}`}
        />
        <span>{education.location}</span>
      </div>
    </div>
  </motion.div>
);

// ==========================================
// 🎯 CODE SNIPPET - PREMIUM
// ==========================================
const CodeSnippet = ({ snippet, index }) => {
  const [copied, setCopied] = useState(false);
  
  const handleCopy = () => {
    navigator.clipboard.writeText(snippet.code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="rounded-2xl overflow-hidden bg-zinc-950 border border-zinc-800 shadow-xl group"
    >
      <div className="flex items-center justify-between px-4 py-3 bg-gradient-to-r from-zinc-900 to-zinc-900/50 border-b border-zinc-800">
        <div className="flex items-center gap-3">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-500" />
            <div className="w-3 h-3 rounded-full bg-amber-500" />
            <div className="w-3 h-3 rounded-full bg-emerald-500" />
          </div>
          <span className="text-xs font-mono text-zinc-400">{snippet.title}</span>
          <span className="text-[10px] font-mono text-cyan-400 px-2 py-0.5 rounded bg-cyan-500/10 border border-cyan-500/30">
            {snippet.language}
          </span>
        </div>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={handleCopy}
          className="p-1.5 rounded hover:bg-zinc-800 transition-colors"
        >
          {copied ? (
            <Check className="w-4 h-4 text-emerald-400" />
          ) : (
            <Copy className="w-4 h-4 text-zinc-400" />
          )}
        </motion.button>
      </div>
      
      <pre className="p-5 overflow-x-auto text-xs font-mono leading-relaxed">
        <code className="text-zinc-300 whitespace-pre">{snippet.code}</code>
      </pre>
    </motion.div>
  );
};

// ==========================================
// 🎯 TERMINAL SIMULATOR - FIXED (NO AUTO-SCROLL)
// ==========================================
const TerminalSimulator = () => {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState([
    { type: 'system', text: 'Welcome to Nabilli Terminal v2.0' },
    { type: 'system', text: 'Type "help" for available commands' }
  ]);
  const inputRef = useRef(null);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.5 });
  
  // Hanya focus saat Terminal masuk viewport
  useEffect(() => {
    if (isInView && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isInView]);
  
  const handleCommand = (e) => {
    if (e.key === 'Enter' && input.trim()) {
      const cmd = input.trim().toLowerCase();
      const newHistory = [...history, { type: 'user', text: `> ${input}` }];
      
      let response = '';
      switch (cmd) {
        case 'help':
          response = 'Available: help, about, skills, projects, contact, clear, whoami';
          break;
        case 'about':
          response = 'Nabilli Rizky - Mobile Robotics Engineer | UPI 2026 | LKS Medalist';
          break;
        case 'whoami':
          response = 'Robotics Engineer specializing in LabVIEW, Python, C++, ROS';
          break;
        case 'skills':
          response = 'Python, C++, LabVIEW, ROS, Computer Vision, Embedded Systems';
          break;
        case 'projects':
          response = '8+ Projects: Autonomous Navigation, YOLOv8, FPGA Motor Control, etc';
          break;
        case 'contact':
          response = 'Email: nabillirizky5@gmail.com | WA: +62 838-3957-4993';
          break;
        case 'clear':
          setHistory([]);
          setInput('');
          return;
        default:
          response = `Command not found: ${cmd}. Type "help" for available commands.`;
      }
      
      setHistory([...newHistory, { type: 'system', text: response }]);
      setInput('');
    }
  };
  
  return (
    <div ref={sectionRef} className="rounded-2xl bg-zinc-950 border-2 border-zinc-800 overflow-hidden shadow-2xl">
      <div className="flex items-center justify-between px-4 py-3 bg-gradient-to-r from-zinc-900 to-zinc-900/50 border-b border-zinc-800">
        <div className="flex items-center gap-2">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-500" />
            <div className="w-3 h-3 rounded-full bg-amber-500" />
            <div className="w-3 h-3 rounded-full bg-emerald-500" />
          </div>
          <span className="text-xs font-mono text-zinc-400 ml-2">nabilli@robotics: ~</span>
        </div>
        <div className="flex items-center gap-2">
          <motion.span 
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="text-[10px] font-mono text-emerald-400 flex items-center gap-1"
          >
            <Zap className="w-3 h-3" />
            ONLINE
          </motion.span>
        </div>
      </div>
      
      <div className="p-4 font-mono text-xs h-80 overflow-y-auto space-y-1">
        {history.map((entry, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.05 }}
            className={`flex items-start gap-2 ${
              entry.type === 'user' ? 'text-cyan-400' : 'text-zinc-300'
            }`}
          >
            {entry.type === 'system' && <span className="text-emerald-400 select-none">$</span>}
            <span className="flex-1">{entry.text}</span>
          </motion.div>
        ))}
        
        <div className="flex items-center gap-2 pt-2">
          <span className="text-emerald-400 font-bold">$</span>
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleCommand}
            className="flex-1 bg-transparent outline-none text-white font-mono"
            placeholder="Type a command..."
          />
          <motion.span 
            animate={{ opacity: [1, 0] }}
            transition={{ duration: 0.8, repeat: Infinity }}
            className="w-2 h-4 bg-cyan-400"
          />
        </div>
      </div>
    </div>
  );
};

// ==========================================
// 📊 DATA CONSTANTS (UPDATED 2026)
// ==========================================

const MILESTONES = [
  {
    level: "Nasional",
    title: "Medallion for Excellence",
    event: "LKSN XXXII 2024",
    field: "Mobile Robotics",
    desc: "Standar keahlian teknis WorldSkills Indonesia. Mengembangkan sistem kendali otonom berbasis LabVIEW Real-Time & FPGA pada kontroler NI myRIO-1900.",
    certUrl: "/sertifikat-lks-nasional.pdf",
    color: "amber"
  },
  {
    level: "Provinsi",
    title: "Juara 1 — Gold Medal",
    event: "LKS DKI Jakarta 2024",
    field: "Mobile Robotics",
    desc: "Podium 1 seleksi provinsi DKI Jakarta mewakili SMKN 39 Jakarta. Unggul dalam optimasi VI LabVIEW dan kalibrasi odometri berbasis FPGA encoder.",
    certUrl: "/sertifikat-lks-provinsi.pdf",
    color: "emerald"
  },
  {
    level: "Wilayah",
    title: "Juara 2 — Silver Medal",
    event: "LKS Jakarta Pusat 2024",
    field: "Mobile Robotics",
    desc: "Peringkat kedua regional Jakarta Pusat sebagai fondasi awal penyusunan arsitektur State Machine LabVIEW dan kendali motor loop tertutup.",
    certUrl: "/sertifikat-lks-wilayah.pdf",
    color: "cyan"
  }
];

const PROJECTS = [
  {
    title: "Autonomous Navigation System",
    category: "autonomous",
    desc: "Sistem navigasi otonom dengan LabVIEW RT dan NI myRIO-1900. Integrasi LiDAR untuk SLAM dan state machine untuk mission planning dengan akurasi tinggi.",
    stack: ["LabVIEW", "myRIO", "LiDAR", "SLAM", "State Machine"],
    status: "Competition Proven",
    metrics: "Akurasi: ±2mm",
    image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=800",
    featured: true
  },
  {
    title: "Computer Vision Object Detection",
    category: "vision",
    desc: "Implementasi YOLOv8 untuk deteksi objek real-time di Jetson Nano. Optimasi dengan TensorRT untuk inference 45+ FPS.",
    stack: ["Python", "YOLOv8", "OpenCV", "Jetson", "TensorRT"],
    status: "Production Ready",
    metrics: "Speed: 45 FPS",
    image: "https://images.unsplash.com/photo-1555255707-c07966088b7b?w=800",
    featured: true
  },
  {
    title: "FPGA Motor Control System",
    category: "embedded",
    desc: "Kontrol motor high-speed dengan LabVIEW FPGA. Membaca 4x quadrature encoder di 40 MHz dengan PID loop 1 kHz.",
    stack: ["LabVIEW FPGA", "PID", "PWM", "Xilinx", "Encoder"],
    status: "Hardware Verified",
    metrics: "Loop: 1 kHz",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800",
    featured: false
  },
  {
    title: "Omni-Directional Robot Chassis",
    category: "autonomous",
    desc: "Desain mekanik mobile robot 4-omni wheels dengan algoritma inverse kinematics matematis dan ekspansi I/O myRIO.",
    stack: ["SolidWorks", "Kinematics", "Electronics", "Actuators"],
    status: "Fabricated",
    metrics: "Load: 12 Kg",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800",
    featured: false
  },
  {
    title: "ESP32 IoT Telemetry",
    category: "embedded",
    desc: "Firmware C++ untuk kontrol motor BLDC dan telemetri sensor via MQTT protocol dengan real-time monitoring.",
    stack: ["C++", "ESP-IDF", "MQTT", "FreeRTOS", "WebSocket"],
    status: "Deployed",
    metrics: "Latency: <20ms",
    image: "https://images.unsplash.com/photo-1553406830-ef2f3e2b0f09?w=800",
    featured: true
  },
  {
    title: "NI Vision Color Classifier",
    category: "vision",
    desc: "Pipeline machine vision dengan color thresholding dan segmentasi kontur target untuk gripper mekanik.",
    stack: ["LabVIEW Vision", "USB Camera", "Vision Assistant"],
    status: "Optimized",
    metrics: "50+ FPS",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800",
    featured: false
  },
  {
    title: "ROS2 Mobile Robot Navigation",
    category: "autonomous",
    desc: "Full ROS2 navigation stack dengan AMCL localization, move_base planning, dan custom obstacle avoidance.",
    stack: ["ROS2 Humble", "Nav2", "AMCL", "Move Base", "LIDAR"],
    status: "In Development",
    metrics: "Planning <100ms",
    image: "https://images.unsplash.com/photo-1561736778-92e52a7769ef?w=800",
    featured: false
  },
  {
    title: "Smart Home Automation",
    category: "embedded",
    desc: "Complete smart home system dengan ESP32 nodes, central hub, dan mobile app untuk kontrol rumah.",
    stack: ["ESP32", "MQTT", "React Native", "Node.js", "MongoDB"],
    status: "Deployed",
    metrics: "99.9% Uptime",
    image: "https://images.unsplash.com/photo-1558002038-1055907df827?w=800",
    featured: false
  }
];

const TECHNICAL_SKILLS = [
  {
    title: "Programming",
    icon: Code2,
    color: "cyan",
    skills: ["Python (OpenCV/YOLO/NumPy)", "C / C++ (Embedded)", "JavaScript / TypeScript", "MATLAB (Simulink)", "Verilog (FPGA HDL)", "Bash / Shell Scripting"]
  },
  {
    title: "Robotics & Frameworks",
    icon: Bot,
    color: "emerald",
    skills: ["ROS / ROS2", "LabVIEW Real-Time", "LabVIEW FPGA Module", "State Machine Architecture", "NI Vision Assistant", "OpenCV Python"]
  },
  {
    title: "Hardware & Embedded",
    icon: Cpu,
    color: "purple",
    skills: ["NI myRIO-1900 (ARM+FPGA)", "ESP32 / Arduino", "Raspberry Pi / Jetson", "Quadrature Encoders", "Driver Motor PWM", "KiCad PCB Design"]
  },
  {
    title: "Instrumentasi & Tools",
    icon: Wrench,
    color: "amber",
    skills: ["SolidWorks 3D CAD", "KiCad PCB Design", "NI MAX Configuration", "Git / GitHub / Docker", "Osiloskop & Logic Analyzer", "Multisim / Ultiboard"]
  },
  {
    title: "AI & Machine Learning",
    icon: Brain,
    color: "cyan",
    skills: ["Computer Vision", "YOLO Object Detection", "TensorFlow / PyTorch", "Image Processing", "Deep Learning", "Model Optimization"]
  },
  {
    title: "Control Systems",
    icon: Settings,
    color: "emerald",
    skills: ["PID Control", "Motion Planning", "Kalman Filters", "Adaptive Control", "Feedback Control", "Robust Control"]
  }
];

const TIMELINE = [
  {
    year: "2026",
    title: "Memulai Studi di UPI",
    description: "Resmi menjadi mahasiswa Pendidikan Teknik Otomasi Industri dan Robotika (PTOIR) di Universitas Pendidikan Indonesia, fokus pada AI dan robotika cerdas.",
    icon: GraduationCap,
    category: "Education"
  },
  {
    year: "2026",
    title: "Lulus dari SMKN 39 Jakarta",
    description: "Lulus dengan predikat sangat memuaskan dari jurusan Teknik Elektronika Industri, menjadi kontingen utama LKS Mobile Robotics.",
    icon: GraduationCap,
    category: "Education"
  },
  {
    year: "Juli - Des 2025",
    title: "Magang di Duta Fuji Electric",
    description: "General Affair - menangani administrasi, operasional perusahaan, dan koordinasi antar departemen untuk memastikan kelancaran operasional harian.",
    icon: Briefcase,
    category: "Work"
  },
  {
    year: "2024",
    title: "Medallion for Excellence - LKSN XXXII",
    description: "Meraih Medallion for Excellence di Lomba Kompetensi Siswa Nasional bidang Mobile Robotics, mewakili DKI Jakarta dengan sistem kendali otonom berbasis NI myRIO.",
    icon: Trophy,
    category: "Competition"
  },
  {
    year: "2024",
    title: "Juara 1 LKS DKI Jakarta",
    description: "Meraih juara 1 di LKS tingkat Provinsi DKI Jakarta bidang Mobile Robotics, mengalahkan 50+ peserta dari seluruh Jakarta.",
    icon: Award,
    category: "Competition"
  },
  {
    year: "2024",
    title: "Juara 2 LKS Jakarta Pusat",
    description: "Meraih juara 2 di LKS tingkat wilayah Jakarta Pusat, menjadi stepping stone untuk kompetisi tingkat provinsi dan nasional.",
    icon: Star,
    category: "Competition"
  },
  {
    year: "2023",
    title: "Project Pertama: Smart Home",
    description: "Membangun sistem smart home automation pertama menggunakan ESP32, MQTT, dan mobile app. Sistem ini menjadi portfolio utama untuk kompetisi.",
    icon: Lightbulb,
    category: "Project"
  },
  {
    year: "2022",
    title: "Mulai Belajar Programming",
    description: "Memulai perjalanan programming dengan Python dan C++, fokus pada embedded systems dan computer vision fundamentals.",
    icon: Code2,
    category: "Education"
  }
];

const ACHIEVEMENTS = [
  {
    icon: Trophy,
    title: "LKSN 2024 Medalist",
    desc: "Medallion for Excellence in Mobile Robotics at National Skills Competition",
    year: "2024",
    color: "amber",
    category: "Competition"
  },
  {
    icon: Award,
    title: "Provincial Champion",
    desc: "1st Place in DKI Jakarta Provincial LKS Mobile Robotics",
    year: "2024",
    color: "emerald",
    category: "Competition"
  },
  {
    icon: Star,
    title: "Regional Silver Medal",
    desc: "2nd Place in Central Jakarta Regional LKS Mobile Robotics",
    year: "2024",
    color: "cyan",
    category: "Competition"
  },
  {
    icon: Lightbulb,
    title: "Innovation Award",
    desc: "Best Innovation in Student Project Competition for Smart Home System",
    year: "2023",
    color: "amber",
    category: "Project"
  },
  {
    icon: GraduationCap,
    title: "Academic Excellence",
    desc: "Graduated with honors from SMKN 39 Jakarta, Teknik Elektronika Industri",
    year: "2026",
    color: "purple",
    category: "Education"
  },
  {
    icon: Rocket,
    title: "Research Publication",
    desc: "Co-author of paper on autonomous robot navigation systems",
    year: "2024",
    color: "cyan",
    category: "Research"
  },
  {
    icon: Medal,
    title: "Best Presenter",
    desc: "Best presentation award at regional robotics symposium",
    year: "2024",
    color: "emerald",
    category: "Competition"
  },
  {
    icon: Shield,
    title: "Technical Certification",
    desc: "LabVIEW Certified Associate Developer (CLAD)",
    year: "2024",
    color: "purple",
    category: "Certification"
  }
];

const CODE_SNIPPETS = [
  {
    title: "yolo_inference.py",
    language: "python",
    code: `from ultralytics import YOLO
import cv2
import time

# Load pre-trained model
model = YOLO('yolov8n.pt')

def detect_objects(image_path):
    """Run YOLOv8 inference on image"""
    start_time = time.time()
    results = model(image_path)
    
    for result in results:
        boxes = result.boxes
        for box in boxes:
            cls = int(box.cls[0])
            conf = float(box.conf[0])
            print(f"Class: {cls}, Conf: {conf:.2f}")
    
    elapsed = time.time() - start_time
    print(f"Inference time: {elapsed*1000:.2f}ms")
    return results

# Usage
detect_objects('image.jpg')`
  },
  {
    title: "pid_controller.cpp",
    language: "cpp",
    code: `class PIDController {
private:
    double Kp, Ki, Kd;
    double integral = 0;
    double prev_error = 0;
    double integral_limit = 100.0;
    
public:
    PIDController(double kp, double ki, double kd)
        : Kp(kp), Ki(ki), Kd(kd) {}
    
    double compute(double setpoint, double process_var, double dt) {
        double error = setpoint - process_var;
        
        // Integral with anti-windup
        integral += error * dt;
        if (integral > integral_limit) integral = integral_limit;
        if (integral < -integral_limit) integral = -integral_limit;
        
        // Derivative
        double derivative = (error - prev_error) / dt;
        prev_error = error;
        
        // PID output
        return Kp * error + Ki * integral + Kd * derivative;
    }
    
    void reset() {
        integral = 0;
        prev_error = 0;
    }
};`
  },
  {
    title: "mqtt_publisher.ino",
    language: "cpp",
    code: `#include <WiFi.h>
#include <PubSubClient.h>
#include <ArduinoJson.h>

const char* ssid = "YOUR_SSID";
const char* password = "YOUR_PASSWORD";
const char* mqtt_server = "mqtt.server.com";

WiFiClient espClient;
PubSubClient client(espClient);

void setup() {
    Serial.begin(115200);
    WiFi.begin(ssid, password);
    
    while (WiFi.status() != WL_CONNECTED) {
        delay(500);
        Serial.print(".");
    }
    
    client.setServer(mqtt_server, 1883);
}

void loop() {
    if (!client.connected()) {
        client.connect("ESP32Client");
    }
    
    // Read sensor data
    float temperature = readTemperature();
    float humidity = readHumidity();
    
    // Create JSON payload
    StaticJsonDocument<200> doc;
    doc["temp"] = temperature;
    doc["humidity"] = humidity;
    doc["timestamp"] = millis();
    
    char buffer[256];
    serializeJson(doc, buffer);
    
    // Publish to MQTT
    client.publish("sensors/environment", buffer);
    delay(1000);
}`
  }
];

const TECH_STACK = [
  { name: "Python", icon: Code2 },
  { name: "C++", icon: Code2 },
  { name: "JavaScript", icon: Code2 },
  { name: "TypeScript", icon: Code2 },
  { name: "LabVIEW", icon: Cpu },
  { name: "ROS/ROS2", icon: Bot },
  { name: "OpenCV", icon: Brain },
  { name: "TensorFlow", icon: Brain },
  { name: "Docker", icon: Package },
  { name: "Git", icon: GitBranch },
  { name: "SolidWorks", icon: Wrench },
  { name: "KiCad", icon: Cpu },
  { name: "ESP32", icon: Cpu },
  { name: "Jetson", icon: Cpu },
  { name: "myRIO", icon: Server }
];

const SOCIAL_LINKS = [
  { href: "https://github.com/Nakkikan", icon: Github, label: "GitHub", color: "hover:text-white" },
  { href: "https://www.linkedin.com/in/nabilli-rizky-687481346", icon: Linkedin, label: "LinkedIn", color: "hover:text-blue-400" },
  { href: "https://instagram.com/Shann_Shoyu", icon: Instagram, label: "Instagram", color: "hover:text-pink-400" },
  { href: "https://youtube.com/@shanon6980", icon: Youtube, label: "YouTube", color: "hover:text-red-500" },
  { href: "https://www.tiktok.com/@nakkiii26", icon: Tiktok, label: "TikTok", color: "hover:text-cyan-400" }
];

const EDUCATION = [
  {
    level: "S1 - Pendidikan Tinggi",
    institution: "Universitas Pendidikan Indonesia",
    program: "Pendidikan Teknik Otomasi Industri dan Robotika (PTOIR) — Angkatan 2026",
    period: "2026 — Sekarang",
    description: "Fokus: AI, Computer Vision, ROS, Control Systems untuk robotika cerdas. Mendalami integrasi sistem kendali industri dan perancangan platform otomatisasi pabrik modern.",
    location: "Kampus UPI Bumi Siliwangi, Bandung",
    gradient: "from-cyan-500/10 via-zinc-900/50 to-transparent",
    border: "border-cyan-500/30 hover:border-cyan-500/60",
    accent: "text-cyan-400",
    glow: "bg-cyan-500/10",
    dotColor: "bg-cyan-400"
  },
  {
    level: "SMK - Pendidikan Vokasi",
    institution: "SMKN 39 Jakarta",
    program: "Teknik Elektronika Industri (TEI)",
    period: "Lulus 2026",
    description: "Kontingen LKS Mobile Robotics, Juara 1 DKI Jakarta dengan sistem berbasis NI myRIO. Pondasi elektronika praktis, rangkaian daya aktuator, interfacing sensor-aktuator industri.",
    location: "DKI Jakarta, Indonesia",
    gradient: "from-emerald-500/10 via-zinc-900/50 to-transparent",
    border: "border-emerald-500/30 hover:border-emerald-500/60",
    accent: "text-emerald-400",
    glow: "bg-emerald-500/10",
    dotColor: "bg-emerald-400"
  }
];

const EXPERIENCE = [
  {
    company: "Duta Fuji Electric",
    position: "General Affair - Magang",
    period: "Juli - Desember 2025",
    description: "Menangani administrasi dan operasional perusahaan, manajemen dokumen, serta koordinasi antar departemen untuk memastikan kelancaran operasional harian. Belajar tentang workflow industri dan standard operating procedure di perusahaan manufaktur.",
    skills: ["Administration", "Documentation", "Coordination", "SOP"]
  }
];

// ==========================================
// 🎯 MAIN COMPONENT
// ==========================================
export default function MainContent() {
  const [activeTab, setActiveTab] = useState('all');
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [formSent, setFormSent] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  const copyEmail = () => {
    navigator.clipboard.writeText("nabillirizky5@gmail.com");
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

 const handleFormSubmit = async (e) => {
  e.preventDefault();
  setIsSubmitting(true);

  // Ambil credentials dari .env
  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  // Validasi env variables
  if (!serviceId || !templateId || !publicKey) {
    console.error("❌ EmailJS env variables belum diset! Cek file .env dan restart dev server.");
    alert("Konfigurasi email belum siap. Hubungi via WhatsApp ya!");
    setIsSubmitting(false);
    return;
  }

  const templateParams = {
    name: formData.name,
    email: formData.email,
    message: formData.message,
    to_email: "nabillirizky5@gmail.com",
    reply_to: formData.email
  };

  try {
    await emailjs.send(serviceId, templateId, templateParams, publicKey);
    setFormSent(true);
    setFormData({ name: '', email: '', message: '' });
    setTimeout(() => setFormSent(false), 5000);
  } catch (error) {
    console.error("Gagal mengirim email:", error);
    alert("Gagal mengirim pesan. Silakan coba lagi atau hubungi via WhatsApp.");
  } finally {
    setIsSubmitting(false);
  }
};

  const filteredProjects = useMemo(() => 
    activeTab === 'all' ? PROJECTS : PROJECTS.filter(p => p.category === activeTab),
    [activeTab]
  );

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen bg-[#060709] text-zinc-100 font-sans selection:bg-cyan-500/30 relative overflow-x-hidden"
    >
      {/* 🛡️ GLOBAL CURSOR FIX */}
      <style>{`
        html, body { cursor: none !important; }
        * { cursor: none !important; }
        input, textarea { cursor: text !important; }
      `}</style>
      
      <CustomCursor />
      <ParticleBackground />
      
      {/* Scroll Progress */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 via-emerald-500 to-cyan-500 origin-left z-50" 
        style={{ scaleX }} 
      />
      
      {/* Grid Background - STATIC */}
      <div 
        className="fixed inset-0 pointer-events-none opacity-[0.03] z-0"
        style={{ 
          backgroundImage: `linear-gradient(to right, rgb(34, 211, 238) 1px, transparent 1px), linear-gradient(to bottom, rgb(34, 211, 238) 1px, transparent 1px)`, 
          backgroundSize: '48px 48px' 
        }} 
      />
      
      {/* Static Glow Orbs */}
      <GlowOrb color="cyan" size="lg" position="-top-40 -left-40" />
      <GlowOrb color="emerald" size="lg" position="top-1/2 -right-40" />
      <GlowOrb color="purple" size="md" position="bottom-0 left-1/3" />

      {/* NAVBAR */}
      <nav className="sticky top-0 z-40 backdrop-blur-xl bg-[#060709]/90 border-b border-zinc-800/80 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <a href="#about" className="flex items-center gap-3 group">
            <motion.div 
              className="w-3 h-3 rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.8)]" 
              animate={{ scale: [1, 1.3, 1] }} 
              transition={{ duration: 1.5, repeat: Infinity }} 
            />
            <span className="font-mono text-sm font-bold tracking-wider text-zinc-200 uppercase group-hover:text-cyan-400 transition-colors">
              NABILLI RIZKY
            </span>
          </a>
          
          <div className="hidden md:flex items-center gap-8 text-xs font-mono text-zinc-400">
            {['about', 'education', 'experience', 'milestones', 'projects', 'skills', 'contact'].map(sec => (
              <a 
                key={sec} 
                href={`#${sec}`} 
                className="capitalize hover:text-cyan-300 transition-colors relative py-1 group"
              >
                {sec}
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-cyan-400 group-hover:w-full transition-all duration-300" />
              </a>
            ))}
          </div>
          
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-zinc-400"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
        
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }} 
              animate={{ opacity: 1, height: "auto" }} 
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden mt-4 pt-4 border-t border-zinc-800"
            >
              {['about', 'education', 'experience', 'milestones', 'projects', 'skills', 'contact'].map(sec => (
                <a 
                  key={sec} 
                  href={`#${sec}`} 
                  onClick={() => setMobileMenuOpen(false)} 
                  className="block py-3 text-sm text-zinc-300 hover:text-cyan-400 capitalize"
                >
                  {sec}
                </a>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      <main className="relative max-w-7xl mx-auto px-6 py-12 md:py-20 space-y-32 z-10">
        
        {/* ========================================== */}
        {/* HERO SECTION */}
        {/* ========================================== */}
        <section id="about" className="pt-8 space-y-12 relative">
          <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-16">
            <motion.div 
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="space-y-8 flex-1 text-center lg:text-left"
            >
              <motion.div 
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-900/80 backdrop-blur-sm border border-zinc-700 text-xs font-mono text-cyan-400"
                whileHover={{ scale: 1.05 }}
              >
                <Radio className="w-3.5 h-3.5 animate-pulse" />
                <span>Open for Robotics, Embedded & Industrial Automation</span>
              </motion.div>
              
              <div className="space-y-4">
                <TextReveal className="text-5xl sm:text-7xl font-black tracking-tight text-white">
                  Nabilli Rizky
                </TextReveal>
                <div className="flex items-center justify-center lg:justify-start text-base sm:text-xl font-mono text-zinc-400">
                  <span className="text-cyan-400 font-bold mr-2">&gt;</span>
                  <span className="text-zinc-200">Mobile Robotics Engineer</span>
                  <motion.span 
                    className="w-2 h-7 bg-cyan-400 ml-1"
                    animate={{ opacity: [1, 0] }}
                    transition={{ duration: 0.8, repeat: Infinity }}
                  />
                </div>
              </div>
              
              <motion.p 
                className="text-zinc-400 max-w-2xl text-sm sm:text-base leading-relaxed mx-auto lg:mx-0"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                Mahasiswa <strong className="text-cyan-300">Pendidikan Teknik Otomasi Industri dan Robotika UPI (Angkatan 2026)</strong> berbekal fondasi keahlian Teknik Elektronika Industri dari <strong className="text-emerald-300">SMKN 39 Jakarta</strong>. Spesialis sistem kendali robotika multi-platform: <strong className="text-cyan-300">NI myRIO-1900, LabVIEW, Python (CV/AI), C++ (Embedded), dan ROS</strong> dengan raihan podium berjenjang LKS Mobile Robotics 2024.
              </motion.p>
              
              <motion.div 
                className="flex flex-wrap items-center justify-center lg:justify-start gap-3 pt-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
              >
                {SOCIAL_LINKS.map(({ href, icon: Icon, color }, idx) => (
                  <MagneticButton 
                    key={idx} 
                    className={`p-3 rounded-xl bg-zinc-900/80 backdrop-blur-sm border border-zinc-700 text-zinc-300 ${color} transition-all shadow-lg hover:border-cyan-500/50`}
                  >
                    <a href={href} target="_blank" rel="noreferrer" className="block">
                      <Icon className="w-5 h-5" />
                    </a>
                  </MagneticButton>
                ))}
                
                <MagneticButton 
                  onClick={copyEmail}
                  className="px-4 py-3 rounded-xl bg-zinc-900/80 backdrop-blur-sm border border-zinc-700 text-xs font-mono text-zinc-300 flex items-center gap-2 hover:border-cyan-500/50 transition-all"
                >
                  {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  <span>{copiedEmail ? "Tersalin!" : "Copy Email"}</span>
                </MagneticButton>
                
                <MagneticButton 
                  className="px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-emerald-500 hover:from-cyan-400 hover:to-emerald-400 text-black font-bold text-xs font-mono shadow-xl"
                >
                  <a href="/cv-nabilli.pdf" download className="flex items-center gap-2">
                    <Download className="w-4 h-4" />
                    <span>Resume / CV</span>
                  </a>
                </MagneticButton>
              </motion.div>
            </motion.div>

            {/* PROFILE PHOTO - STATIC GLOW */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative group"
            >
              <FloatingElement duration={6} distance={20}>
                <div className="relative">
                  <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500 via-emerald-500 to-cyan-500 rounded-full blur-2xl opacity-50 group-hover:opacity-75 transition-opacity duration-500" />
                  <div className="relative w-72 h-72 sm:w-80 sm:h-80 rounded-full bg-zinc-900 border-4 border-zinc-700 overflow-hidden shadow-2xl group-hover:border-cyan-500/50 transition-all duration-500">
                    <img 
                      src="/foto.jpeg"
                      alt="Nabilli Rizky"
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                      onError={(e) => { e.currentTarget.src = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800"; }}
                    />
                  </div>
                  
                  <motion.div 
                    className="absolute -bottom-4 left-1/2 -translate-x-1/2 p-3 rounded-xl bg-zinc-950/95 backdrop-blur-md border border-zinc-700 text-[11px] font-mono flex items-center justify-between text-zinc-300 whitespace-nowrap shadow-2xl"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.5 }}
                  >
                    <div className="flex items-center gap-2">
                      <motion.span 
                        className="w-2 h-2 rounded-full bg-emerald-400"
                        animate={{ scale: [1, 1.3, 1] }}
                        transition={{ duration: 1, repeat: Infinity }}
                      />
                      <span>Robotics Dev</span>
                    </div>
                    <span className="text-zinc-500 ml-3">UPI • SMKN 39</span>
                  </motion.div>
                </div>
              </FloatingElement>
            </motion.div>
          </div>

          {/* STATS CARDS */}
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-5 pt-8"
          >
            <StatCard 
              icon={MapPin}
              label="Location"
              value="Bandung / Jakarta"
              iconColor="text-cyan-400"
              gradient="from-cyan-500/10 to-emerald-500/10"
            />
            <StatCard 
              icon={Trophy}
              label="LKS 2024"
              value={3}
              suffix="x Podium"
              iconColor="text-amber-400"
              gradient="from-amber-500/10 to-orange-500/10"
            />
            <StatCard 
              icon={Code2}
              label="Languages"
              value={6}
              suffix="+"
              iconColor="text-cyan-400"
              gradient="from-cyan-500/10 to-blue-500/10"
            />
            <StatCard 
              icon={Layers}
              label="Projects"
              value={8}
              suffix="+"
              iconColor="text-emerald-400"
              gradient="from-emerald-500/10 to-green-500/10"
            />
          </motion.div>

          {/* TECH STACK MARQUEE */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="pt-12"
          >
            <h3 className="text-center text-xs font-mono text-zinc-500 uppercase tracking-[0.2em] mb-6">
              Tech Stack & Tools
            </h3>
            <div className="relative">
              <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-[#060709] to-transparent z-10 pointer-events-none" />
              <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-[#060709] to-transparent z-10 pointer-events-none" />
              <Marquee speed={40} className="py-4">
                {TECH_STACK.map((tech, idx) => {
                  const IconComponent = tech.icon;
                  return (
                    <div 
                      key={idx}
                      className="flex items-center gap-3 px-6 py-3 rounded-xl bg-zinc-900/60 border border-zinc-700/80 hover:border-cyan-500/50 transition-all group"
                    >
                      <IconComponent className="w-6 h-6 text-zinc-400 group-hover:text-cyan-400 transition-colors" />
                      <span className="text-sm font-mono text-zinc-300 group-hover:text-white transition-colors whitespace-nowrap">
                        {tech.name}
                      </span>
                    </div>
                  );
                })}
              </Marquee>
            </div>
          </motion.div>
        </section>

        {/* ========================================== */}
        {/* EDUCATION */}
        {/* ========================================== */}
        <motion.section 
          id="education"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeInUp}
          className="space-y-8"
        >
          <SectionHeading 
            icon={GraduationCap}
            title="Latar Belakang Akademik"
            subtitle="Perjalanan pendidikan dari SMK hingga universitas ternama"
            iconColor="text-cyan-400"
            badge="Education"
          />
          
          <div className="grid md:grid-cols-2 gap-6">
            {EDUCATION.map((edu, idx) => (
              <EducationCard key={idx} education={edu} index={idx} />
            ))}
          </div>
        </motion.section>

        {/* ========================================== */}
        {/* EXPERIENCE */}
        {/* ========================================== */}
        <motion.section 
          id="experience"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeInUp}
          className="space-y-8"
        >
          <SectionHeading 
            icon={Briefcase}
            title="Pengalaman Kerja"
            subtitle="Perjalanan karir profesional di industri"
            iconColor="text-purple-400"
            badge="Experience"
          />
          
          <div className="space-y-6">
            {EXPERIENCE.map((exp, idx) => (
              <ExperienceCard key={idx} experience={exp} index={idx} />
            ))}
          </div>
        </motion.section>

        {/* ========================================== */}
        {/* MILESTONES */}
        {/* ========================================== */}
        <motion.section 
          id="milestones"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
          className="space-y-8"
        >
          <SectionHeading 
            icon={Trophy}
            title="Rekam Jejak Prestasi LKS 2024"
            subtitle="Pencapaian luar biasa di kompetisi keahlian tingkat nasional"
            iconColor="text-amber-400"
            badge="Achievements"
          />
          
          <div className="grid md:grid-cols-3 gap-6">
            {MILESTONES.map((milestone, idx) => (
              <MilestoneCard key={idx} milestone={milestone} index={idx} />
            ))}
          </div>

          {/* WALL OF ACHIEVEMENTS */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-16"
          >
            <div className="flex items-center gap-4 mb-8">
              <motion.div 
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
                className="p-3 rounded-2xl bg-gradient-to-br from-zinc-900 to-zinc-800 border border-zinc-700"
              >
                <Medal className="w-6 h-6 text-amber-400" />
              </motion.div>
              <h3 className="text-2xl md:text-3xl font-bold text-white">Wall of Achievements</h3>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {ACHIEVEMENTS.map((ach, idx) => (
                <AchievementCard key={idx} achievement={ach} index={idx} />
              ))}
            </div>
          </motion.div>
        </motion.section>

        {/* ========================================== */}
        {/* TIMELINE */}
        {/* ========================================== */}
        <motion.section 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={fadeInUp}
          className="space-y-8"
        >
          <SectionHeading 
            icon={Sparkles}
            title="Timeline Perjalanan"
            subtitle="Jejak langkah dari awal hingga sekarang"
            iconColor="text-cyan-400"
            badge="Journey"
          />
          
          <div className="max-w-4xl mx-auto">
            {TIMELINE.map((item, idx) => (
              <TimelineItem 
                key={idx}
                item={item}
                index={idx}
                isLeft={idx % 2 === 0}
              />
            ))}
          </div>
        </motion.section>

        {/* ========================================== */}
        {/* PROJECTS */}
        {/* ========================================== */}
        <motion.section 
          id="projects"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={fadeInUp}
          className="space-y-8"
        >
          <SectionHeading 
            icon={Layers}
            title="Proyek Riset & Robotika"
            subtitle="Koleksi proyek di berbagai domain teknologi"
            iconColor="text-purple-400"
            badge="Projects"
          />
          
          {/* Filter Tabs */}
          <div className="flex flex-wrap gap-2 justify-center">
            {['all', 'autonomous', 'embedded', 'vision'].map(tab => (
              <motion.button
                key={tab}
                onClick={() => setActiveTab(tab)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-6 py-2.5 rounded-xl capitalize font-mono text-sm transition-all duration-300 ${
                  activeTab === tab 
                    ? 'bg-gradient-to-r from-cyan-500 to-emerald-500 text-black font-bold shadow-lg shadow-cyan-500/30' 
                    : 'text-zinc-400 bg-zinc-900/60 border border-zinc-700/80 hover:text-white hover:border-cyan-500/50'
                }`}
              >
                {tab}
              </motion.button>
            ))}
          </div>
          
          {/* Projects Grid */}
          <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((proj, idx) => (
                <ProjectCard 
                  key={proj.title}
                  project={proj}
                  index={idx}
                  featured={proj.featured}
                />
              ))}
            </AnimatePresence>
          </motion.div>
        </motion.section>

        {/* ========================================== */}
        {/* CODE SNIPPETS */}
        {/* ========================================== */}
        <motion.section 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeInUp}
          className="space-y-8"
        >
          <SectionHeading 
            icon={Terminal}
            title="Code Snippets"
            subtitle="Cuplikan kode dari berbagai proyek yang telah dikerjakan"
            iconColor="text-emerald-400"
            badge="Code"
          />
          
          <div className="grid lg:grid-cols-2 gap-6">
            {CODE_SNIPPETS.map((snippet, idx) => (
              <CodeSnippet key={idx} snippet={snippet} index={idx} />
            ))}
          </div>
        </motion.section>

        {/* ========================================== */}
        {/* TERMINAL SIMULATOR */}
        {/* ========================================== */}
        <motion.section 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeInUp}
          className="space-y-8"
        >
          <SectionHeading 
            icon={Activity}
            title="Interactive Terminal"
            subtitle="Coba ketik command untuk eksplorasi lebih lanjut"
            iconColor="text-cyan-400"
            badge="Live"
          />
          
          <div className="max-w-4xl mx-auto">
            <TerminalSimulator />
            <p className="text-xs font-mono text-zinc-500 mt-4 text-center">
              💡 Tips: Coba ketik "help", "about", "skills", "projects", "contact", atau "clear"
            </p>
          </div>
        </motion.section>

        {/* ========================================== */}
        {/* SKILLS */}
        {/* ========================================== */}
        <motion.section 
          id="skills"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={staggerContainer}
          className="space-y-8"
        >
          <SectionHeading 
            icon={Wrench}
            title="Keahlian Teknis & Tooling"
            subtitle="Multi-platform expertise di berbagai domain teknologi"
            iconColor="text-cyan-400"
            badge="Skills"
          />
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {TECHNICAL_SKILLS.map((cat, idx) => (
              <SkillCard key={idx} category={cat} index={idx} />
            ))}
          </div>
        </motion.section>

        {/* ========================================== */}
        {/* CONTACT */}
        {/* ========================================== */}
        <motion.section 
          id="contact"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeInUp}
          className="relative space-y-12 py-16"
        >
          <div className="absolute inset-0 -z-10">
            <GlowOrb color="cyan" size="md" position="top-0 left-1/4" />
            <GlowOrb color="emerald" size="md" position="bottom-0 right-1/4" />
          </div>

          <div className="text-center space-y-4 max-w-3xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/10 to-emerald-500/10 border border-cyan-500/30"
            >
              <Sparkles className="w-4 h-4 text-cyan-400" />
              <span className="text-xs font-mono text-cyan-300 uppercase tracking-[0.2em]">Let's Connect</span>
            </motion.div>
            
            <TextReveal className="text-4xl md:text-6xl font-black text-white">
              Mari Berkolaborasi
            </TextReveal>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-lg text-zinc-400 leading-relaxed"
            >
              Punya ide proyek robotika, riset AI, atau sistem otomasi industri?
              <br className="hidden md:block" />
              Saya siap mendengarkan dan mewujudkan visi Anda.
            </motion.p>
          </div>

          <div className="grid lg:grid-cols-5 gap-8 items-start">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="lg:col-span-2 space-y-5"
            >
              <h3 className="text-sm font-mono text-zinc-500 uppercase tracking-[0.2em] mb-6 flex items-center gap-2">
                <span className="w-8 h-[1px] bg-cyan-500/50" />
                Reach Me Directly
              </h3>
              
              <PremiumContactCard 
                icon={Mail}
                label="Email Pribadi"
                value="nabillirizky5@gmail.com"
                href="mailto:nabillirizky5@gmail.com"
                gradient="from-cyan-500 via-blue-500 to-cyan-500"
                delay={0.1}
              />
              
              <PremiumContactCard 
                icon={Phone}
                label="WhatsApp / Call"
                value="+62 838-3957-4993"
                href="https://wa.me/6283839574993"
                gradient="from-emerald-500 via-green-500 to-emerald-500"
                delay={0.2}
              />
              
              <PremiumContactCard 
                icon={MapPin}
                label="Base Location"
                value="Bandung & Jakarta, ID"
                href="#"
                gradient="from-purple-500 via-pink-500 to-purple-500"
                delay={0.3}
              />

              <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="pt-6 mt-6 border-t border-zinc-800"
              >
                <div className="flex items-center gap-3 p-4 rounded-2xl bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 border border-emerald-500/30">
                  <div className="relative">
                    <div className="w-3 h-3 rounded-full bg-emerald-400" />
                    <div className="absolute inset-0 w-3 h-3 rounded-full bg-emerald-400 animate-ping" />
                  </div>
                  <div>
                    <p className="text-xs font-mono text-emerald-300 font-bold uppercase tracking-wider">Available for Projects</p>
                    <p className="text-[10px] font-mono text-zinc-400">Response time: &lt; 24 hours</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="lg:col-span-3"
            >
              <div className="relative">
                <div className="absolute -inset-[1px] rounded-3xl bg-gradient-to-br from-cyan-500/30 via-transparent to-emerald-500/30 opacity-60" />
                <div className="absolute -inset-1 rounded-3xl bg-gradient-to-br from-cyan-500/20 to-emerald-500/20 blur-xl opacity-50" />
                
                <div className="relative bg-zinc-950/90 backdrop-blur-xl rounded-3xl p-8 md:p-10 border border-zinc-800">
                  <div className="mb-8 flex items-start justify-between">
                    <div>
                      <h3 className="text-sm font-mono text-zinc-500 uppercase tracking-[0.2em] mb-2 flex items-center gap-2">
                        <span className="w-8 h-[1px] bg-emerald-500/50" />
                        Send a Message
                      </h3>
                      <h4 className="text-2xl font-bold text-white">Kirim Pesan Anda</h4>
                    </div>
                    <motion.div
                      animate={{ rotate: [0, 10, -10, 0] }}
                      transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                      className="p-3 rounded-xl bg-gradient-to-br from-cyan-500/20 to-emerald-500/20 border border-cyan-500/30"
                    >
                      <Send className="w-5 h-5 text-cyan-400" />
                    </motion.div>
                  </div>

                  <AnimatePresence mode="wait">
                    {formSent ? (
                      <motion.div
                        key="success"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        className="py-16 text-center space-y-4"
                      >
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
                          className="relative inline-flex"
                        >
                          <div className="absolute inset-0 bg-emerald-500 blur-2xl opacity-50" />
                          <div className="relative w-20 h-20 rounded-full bg-gradient-to-br from-emerald-500 to-cyan-500 flex items-center justify-center shadow-2xl">
                            <Check className="w-10 h-10 text-white" strokeWidth={3} />
                          </div>
                        </motion.div>
                        <div>
                          <h4 className="text-2xl font-bold text-white mb-2">Pesan Terkirim! 🎉</h4>
                          <p className="text-zinc-400 font-mono text-sm">Terima kasih. Saya akan merespons dalam 24 jam.</p>
                        </div>
                      </motion.div>
                    ) : (
                      <motion.form
                        key="form"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onSubmit={handleFormSubmit}
                        className="space-y-5"
                      >
                        <div className="grid md:grid-cols-2 gap-5">
                          <div className="relative group">
                            <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500 group-focus-within:text-cyan-400 transition-colors pointer-events-none" />
                            <input 
                              type="text" 
                              required 
                              value={formData.name} 
                              onChange={(e) => setFormData({...formData, name: e.target.value})} 
                              placeholder="Nama Lengkap" 
                              className="w-full pl-11 pr-5 py-3 rounded-xl bg-zinc-950/80 border border-zinc-800 focus:border-cyan-500 outline-none text-white font-mono text-sm transition-all" 
                            />
                          </div>
                          <div className="relative group">
                            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500 group-focus-within:text-cyan-400 transition-colors pointer-events-none" />
                            <input 
                              type="email" 
                              required 
                              value={formData.email} 
                              onChange={(e) => setFormData({...formData, email: e.target.value})} 
                              placeholder="Email" 
                              className="w-full pl-11 pr-5 py-3 rounded-xl bg-zinc-950/80 border border-zinc-800 focus:border-cyan-500 outline-none text-white font-mono text-sm transition-all" 
                            />
                          </div>
                        </div>
                        
                        <div className="relative group">
                          <MessageSquare className="absolute left-4 top-4 w-4 h-4 text-zinc-500 group-focus-within:text-cyan-400 transition-colors pointer-events-none" />
                          <textarea 
                            rows={5} 
                            required 
                            value={formData.message} 
                            onChange={(e) => setFormData({...formData, message: e.target.value})} 
                            placeholder="Ceritakan tentang proyek atau ide Anda..." 
                            className="w-full pl-11 pr-5 py-3 rounded-xl bg-zinc-950/80 border border-zinc-800 focus:border-cyan-500 outline-none text-white font-mono text-sm resize-none transition-all" 
                          />
                        </div>
                        
                        <motion.button 
                          whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                          whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                          type="submit" 
                          disabled={isSubmitting}
                          className="group relative w-full py-4 rounded-xl overflow-hidden shadow-2xl disabled:opacity-50"
                        >
                          <motion.div
                            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                            animate={{ x: ['-200%', '200%'] }}
                            transition={{ duration: 2, repeat: Infinity, repeatDelay: 1, ease: "linear" }}
                          />
                          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-blue-500 to-emerald-500" />
                          <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-blue-400 to-emerald-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                          
                          <div className="relative flex items-center justify-center gap-3 text-black font-bold text-sm font-mono uppercase tracking-wider">
                            {isSubmitting ? (
                              <>
                                <motion.div
                                  animate={{ rotate: 360 }}
                                  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                                  className="w-5 h-5 border-2 border-black/30 border-t-black rounded-full"
                                />
                                <span>Mengirim...</span>
                              </>
                            ) : (
                              <>
                                <Zap className="w-4 h-4" />
                                <span>Kirim Pesan Sekarang</span>
                              </>
                            )}
                          </div>
                        </motion.button>
                        
                        <p className="text-center text-[10px] font-mono text-zinc-600 pt-2">
                          Dengan mengirim pesan, Anda setuju untuk dihubungi kembali via email/WhatsApp
                        </p>
                      </motion.form>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* ========================================== */}
        {/* FOOTER */}
        {/* ========================================== */}
        <footer className="pt-16 border-t border-zinc-800 flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-zinc-500 font-mono">
          <div className="text-center md:text-left">
            <p className="text-zinc-300 font-bold text-sm mb-1">Nabilli Rizky</p>
            <p>© 2026 • UPI & SMKN 39 Jakarta</p>
          </div>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-zinc-900 border border-zinc-800 text-emerald-400">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Available for Work
            </span>
            <motion.button 
              whileHover={{ y: -5, scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="p-2.5 rounded-xl bg-zinc-900 hover:bg-zinc-800 transition-colors border border-zinc-800"
            >
              <ChevronUp className="w-4 h-4" />
            </motion.button>
          </div>
        </footer>
      </main>
    </motion.div>
  );
}