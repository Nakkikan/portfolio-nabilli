import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { 
  Trophy, Award, Cpu, Bot, Terminal, Code2, 
  Sparkles, Globe, User, ChevronRight,
  Wrench, ArrowUpRight, Activity, Radio, 
  Layers, CheckCircle2, Mail, FileText,
  ExternalLink, Zap, Clock, MapPin, Send, 
  Download, Copy, Check, Flame, ChevronUp, MessageSquare, Play, GraduationCap
} from 'lucide-react';

// Ikon Sosial Media Murni SVG
const GithubIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
);

const LinkedinIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.64 1.64 0 1 0 0-3.28 1.64 1.64 0 0 0 0 3.28m1.4 9.74V9.89H5.06v8.61h2.8z" />
  </svg>
);

const InstagramIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const YoutubeIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
  </svg>
);

const TiktokIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-1.01-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.24 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
  </svg>
);

// Varian Animasi Framer Motion
const fadeInUp = {
  hidden: { opacity: 0, y: 35 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } 
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1, 
    transition: { 
      staggerChildren: 0.12, 
      delayChildren: 0.1 
    } 
  }
};

export default function App() {
  const [showSplash, setShowSplash] = useState(true);
  const [activeTab, setActiveTab] = useState('all');
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [currentTime, setCurrentTime] = useState('');
  
  // State Form & EmailJS
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [formSent, setFormSent] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Typewriter effect
  const roles = [
    "Pendidikan Teknik Otomasi & Robotika UPI",
    "LabVIEW Real-Time & FPGA Specialist",
    "NI myRIO Embedded Systems Engineer",
    "LKSN 2024 Medallion for Excellence",
    "Teknik Elektronika Industri (SMKN 39)"
  ];
  const [roleIdx, setRoleIdx] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  // Live Terminal Logs (LabVIEW RT & FPGA Simulation)
  const [terminalLogs, setTerminalLogs] = useState([
    "NI myRIO-1900 TARGET: CONNECTED [172.22.11.2]",
    "FPGA BITFILE DEPLOYED: 40 MHz CLOCK STABLE",
    "QUADRATURE DECODER SUBVI: 4 ENCODER CHANNELS ACTIVE",
    "LABVIEW RT MAIN LOOP: 1000 Hz JITTER < 0.04 ms"
  ]);

  // Real-time Clock
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setCurrentTime(now.toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit', second: '2-digit' }) + " WIB");
    };
    updateTime();
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  // Typewriter Loop
  useEffect(() => {
    const currentRole = roles[roleIdx];
    const speed = isDeleting ? 28 : 60;

    const timer = setTimeout(() => {
      if (!isDeleting && text === currentRole) {
        setTimeout(() => setIsDeleting(true), 1800);
      } else if (isDeleting && text === "") {
        setIsDeleting(false);
        setRoleIdx((prev) => (prev + 1) % roles.length);
      } else {
        setText(
          isDeleting 
            ? currentRole.substring(0, text.length - 1) 
            : currentRole.substring(0, text.length + 1)
        );
      }
    }, speed);

    return () => clearTimeout(timer);
  }, [text, isDeleting, roleIdx]);

  // Simulated Telemetry Stream
  useEffect(() => {
    const telemetryEvents = [
      "KINEMATICS VI: OMNI 4-DRIVE MATRIX CALC V_X: +1.28 m/s",
      "NI VISION MODULE: COLOR PATTERN RECOGNIZED (99.4%)",
      "FPGA PID LOOP: SPEED CORRECTION PWM FREQ 20 kHz",
      "myRIO MXP PORT A/B: ANALOG SCAN COMPLETE",
      "STATE MACHINE: EXECUTING TASK [AUTO_NAVIGATION_NODE_03]",
      "BATTERY MONITOR: 12.6V 3S LiPo • CURRENT DRAW 2.9A"
    ];

    const interval = setInterval(() => {
      const nextLog = telemetryEvents[Math.floor(Math.random() * telemetryEvents.length)];
      setTerminalLogs(prev => [...prev.slice(-4), nextLog]);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("nabillirizky5@gmail.com");
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  // Fungsi Kirim Pesan via EmailJS
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    const templateParams = {
      name: formData.name,
      email: formData.email,
      message: formData.message,
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

  const milestones = [
    {
      level: "Tingkat Nasional",
      title: "Medallion for Excellence",
      event: "LKS Tingkat Nasional (LKSN) XXXII 2024",
      field: "Mobile Robotics",
      desc: "Standar keahlian teknis WorldSkills Indonesia. Mengembangkan sistem kendali otonom berbasis LabVIEW Real-Time & FPGA pada kontroler NI myRIO-1900, inverse kinematics 4-omni wheels, dan manipulasi objek presisi.",
      badge: "National Standard",
      certUrl: "/sertifikat-lks-nasional.pdf",
      glow: "border-amber-500/40 from-amber-500/15 via-zinc-900/90 to-zinc-950",
      accent: "text-amber-400 bg-amber-500/10 border-amber-500/30"
    },
    {
      level: "Tingkat Provinsi",
      title: "Juara 1 — Gold Medal",
      event: "LKS Tingkat Provinsi DKI Jakarta 2024",
      field: "Mobile Robotics",
      desc: "Podium 1 seleksi provinsi DKI Jakarta mewakili SMKN 39 Jakarta. Unggul dalam optimasi VI LabVIEW, kalibrasi odometri berbasis FPGA encoder, serta kehandalan instrumentasi elektronika myRIO di arena kompetisi.",
      badge: "Provincial Champion",
      certUrl: "/sertifikat-lks-provinsi.pdf",
      glow: "border-emerald-500/40 from-emerald-500/15 via-zinc-900/90 to-zinc-950",
      accent: "text-emerald-400 bg-emerald-500/10 border-emerald-500/30"
    },
    {
      level: "Tingkat Wilayah",
      title: "Juara 2 — Silver Medal",
      event: "LKS Wilayah Jakarta Pusat 2024",
      field: "Mobile Robotics",
      desc: "Peringkat kedua regional Jakarta Pusat sebagai fondasi awal penyusunan arsitektur State Machine LabVIEW dan kendali motor loop tertutup menuju tingkat provinsi dan nasional.",
      badge: "Regional Stage",
      certUrl: "/sertifikat-lks-wilayah.pdf",
      glow: "border-cyan-500/40 from-cyan-500/15 via-zinc-900/90 to-zinc-950",
      accent: "text-cyan-400 bg-cyan-500/10 border-cyan-500/30"
    }
  ];

  const projects = [
    {
      title: "Autonomous Navigation & Arena Mapping VI",
      category: "autonomous",
      desc: "Sistem navigasi otonom terprogram pada LabVIEW Real-Time dan NI myRIO-1900. Mengintegrasikan sensor jarak dan LiDAR untuk lokalisasi posisi, state machine arena, dan eksekusi misi mandiri.",
      stack: ["LabVIEW RT", "NI myRIO-1900", "State Machine", "LiDAR/Sensors"],
      metrics: "Akurasi Posisi ±2mm",
      status: "Competition Proven",
      image: "/robot-slam.jpg",
      videoUrl: "https://youtube.com/@shanon6980?si=nNKfryGJosDao0pB",
      github: "https://github.com/Nakkikan"
    },
    {
      title: "FPGA High-Speed Motor Control & PID Loop",
      category: "embedded",
      desc: "SubVI LabVIEW FPGA pada target Xilinx myRIO untuk membaca 4x quadrature optical encoder secara simultan pada frekuensi 40 MHz, dipadukan kontrol PID loop kecepatan motor DC berbeban dinamis.",
      stack: ["LabVIEW FPGA", "NI myRIO", "PID VI", "PWM Driver"],
      metrics: "Loop Rate 1 kHz RTOS",
      status: "Hardware Verified",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&auto=format&fit=crop&q=80",
      videoUrl: "https://youtube.com/@shanon6980?si=nNKfryGJosDao0pB",
      github: "https://github.com/Nakkikan"
    },
    {
      title: "Real-Time NI Vision Target & Color Classifier",
      category: "vision",
      desc: "Pipeline machine vision menggunakan NI Vision Development Module dan Vision Assistant. Melakukan color thresholding, segmentasi kontur target kerja, dan penentuan orientasi koordinat gripper mekanik.",
      stack: ["LabVIEW Vision", "NI Vision Assistant", "USB Camera", "myRIO USB"],
      metrics: "Processing 50+ FPS",
      status: "Optimized",
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&auto=format&fit=crop&q=80",
      videoUrl: "https://youtube.com/@shanon6980?si=nNKfryGJosDao0pB",
      github: "https://github.com/Nakkikan"
    },
    {
      title: "Omni-Directional Industrial Chassis & Kinematics",
      category: "autonomous",
      desc: "Desain mekanik mobile robot 4-omni wheels terintegrasi dengan ekspansi I/O myRIO MXP/MSP. Mengimplementasikan algoritma inverse kinematics matematis pada block diagram LabVIEW.",
      stack: ["SolidWorks", "Omni Kinematics", "Elektronika Daya", "Actuators"],
      metrics: "Kapasitas Beban 12 Kg",
      status: "Fabricated",
      image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=800&auto=format&fit=crop&q=80",
      videoUrl: "https://youtube.com/@shanon6980?si=nNKfryGJosDao0pB",
      github: "https://github.com/Nakkikan"
    }
  ];

  const technicalCategories = [
    {
      title: "LabVIEW & Software",
      skills: ["LabVIEW Real-Time", "LabVIEW FPGA Module", "State Machine Architecture", "NI Vision Assistant", "PID Control Toolkit"]
    },
    {
      title: "Hardware & Kontrol",
      skills: ["NI myRIO-1900 (ARM+FPGA)", "Quadrature Encoders", "Elektronika Industri (SMKN 39)", "Driver Motor PWM", "Relay & Solenoid Pneumatik"]
    },
    {
      title: "Instrumentasi & Sensor",
      skills: ["NI Vision Development Module", "Sensor Jarak IR & ToF", "LiDAR 2D Interface", "Analog/Digital I/O MXP", "Kalibrasi Odometri"]
    },
    {
      title: "Tools Rekayasa",
      skills: ["SolidWorks 3D CAD", "NI MAX Configuration", "Git / GitHub", "Osiloskop & Logic Analyzer", "Multisim / Ultiboard"]
    }
  ];

  const filteredProjects = activeTab === 'all' 
    ? projects 
    : projects.filter(p => p.category === activeTab);

  return (
    <div className="min-h-screen bg-[#060709] text-zinc-100 font-sans selection:bg-cyan-500/30 relative overflow-x-hidden">
      
      {/* Background Matrix Grid */}
      <div 
        className="fixed inset-0 pointer-events-none opacity-20"
        style={{
          backgroundImage: `linear-gradient(to right, #27272a 1px, transparent 1px), linear-gradient(to bottom, #27272a 1px, transparent 1px)`,
          backgroundSize: '48px 48px'
        }}
      />

      {/* Ambient Pulsing Glow */}
      <motion.div 
        animate={{ 
          scale: [1, 1.25, 1],
          opacity: [0.08, 0.16, 0.08]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="fixed -top-40 -left-40 w-96 h-96 bg-cyan-500 rounded-full blur-[140px] pointer-events-none" 
      />
      <motion.div 
        animate={{ 
          scale: [1, 1.3, 1],
          opacity: [0.06, 0.14, 0.06]
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="fixed top-1/2 -right-40 w-96 h-96 bg-emerald-500 rounded-full blur-[140px] pointer-events-none" 
      />

      {/* SPLASH SCREEN */}
      <AnimatePresence>
        {showSplash && (
          <motion.div 
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 0.96, filter: "blur(8px)" }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="fixed inset-0 z-50 bg-[#060709] flex flex-col items-center justify-center p-6 text-center"
          >
            <motion.div 
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex items-center gap-3 mb-8"
            >
              <div className="w-12 h-12 rounded-2xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 shadow-xl">
                <Code2 className="w-5 h-5 text-cyan-400" />
              </div>
              <div className="w-12 h-12 rounded-2xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 shadow-xl">
                <User className="w-5 h-5 text-emerald-400" />
              </div>
              <div className="w-12 h-12 rounded-2xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 shadow-xl">
                <Globe className="w-5 h-5 text-purple-400" />
              </div>
            </motion.div>

            <motion.p 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xs font-mono tracking-[0.35em] text-zinc-500 uppercase mb-3"
            >
              TO MY
            </motion.p>
            
            <motion.h1 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-3xl md:text-5xl font-black tracking-wider uppercase mb-8 max-w-xl text-white leading-tight"
            >
              WELCOME TO MY<br />PORTFOLIO WEBSITE
            </motion.h1>

            <motion.button
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              whileHover={{ scale: 1.05, boxShadow: "0 0 25px rgba(6, 182, 212, 0.3)" }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setShowSplash(false)}
              className="group relative px-6 py-2.5 rounded-full bg-zinc-900/90 border border-zinc-800 hover:border-cyan-500/50 text-xs font-mono text-zinc-300 transition-all duration-300 shadow-2xl flex items-center gap-2 cursor-pointer"
            >
              <span>portofolio-nabilli-rizky</span>
              <ChevronRight className="w-3.5 h-3.5 text-zinc-500 group-hover:translate-x-1 transition-transform" />
            </motion.button>

            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="mt-4 text-xs text-zinc-600 font-mono"
            >
              Klik badge di atas untuk masuk
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* NAVBAR */}
      <motion.nav 
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="sticky top-0 z-40 backdrop-blur-md bg-[#060709]/85 border-b border-zinc-800/80 px-6 py-3.5"
      >
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <a href="#" className="flex items-center gap-2.5 group">
            <div className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-ping" />
            <span className="font-mono text-xs font-bold tracking-widest text-zinc-200 uppercase group-hover:text-cyan-400 transition-colors">
              NABILLI RIZKY // NI myRIO & LABVIEW
            </span>
          </a>

          <div className="hidden md:flex items-center gap-6 text-xs font-mono text-zinc-400">
            {['about', 'education', 'milestones', 'projects', 'skills', 'contact'].map((sec) => (
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

          <motion.a 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#contact" 
            className="px-3.5 py-1.5 rounded-lg bg-zinc-900 border border-zinc-800 hover:border-cyan-500/50 text-xs font-mono text-zinc-300 transition-all shadow"
          >
            Get in Touch
          </motion.a>
        </div>
      </motion.nav>

      {/* MAIN CONTENT */}
      <main className="relative max-w-6xl mx-auto px-6 py-12 md:py-20 space-y-28">
        
        {/* HERO SECTION */}
        <section id="about" className="pt-4 space-y-8">
          <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12">
            
            {/* Bio Info */}
            <motion.div 
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="space-y-6 flex-1 text-center lg:text-left"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-zinc-900 border border-zinc-800 text-xs font-mono text-cyan-400">
                <Radio className="w-3.5 h-3.5 animate-pulse text-cyan-400" />
                <span>Open for Robotics & Industrial Automation</span>
              </div>

              <div className="space-y-3">
                <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-white">
                  Nabilli Rizky
                </h1>
                <div className="h-8 flex items-center justify-center lg:justify-start text-base sm:text-xl font-mono text-zinc-400">
                  <span className="text-cyan-400 font-bold mr-2">&gt;</span>
                  <span className="text-zinc-200">{text}</span>
                  <span className="w-2 h-6 bg-cyan-400 ml-1 animate-pulse" />
                </div>
              </div>

              <p className="text-zinc-400 max-w-2xl text-sm sm:text-base leading-relaxed mx-auto lg:mx-0">
                Mahasiswa <strong>Pendidikan Teknik Otomasi Industri dan Robotika UPI</strong> berbekal fondasi keahlian Teknik Elektronika Industri dari <strong>SMKN 39 Jakarta</strong>. Spesialis perancangan sistem kontrol robotika berbasis <strong>NI myRIO-1900</strong> dan <strong>LabVIEW (Real-Time & FPGA)</strong> dengan raihan podium berjenjang LKS Mobile Robotics 2024.
              </p>

              {/* Baris Tombol Sosial Media */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2.5 pt-2">
                
                {/* GitHub */}
                <motion.a 
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  href="https://github.com/Nakkikan" 
                  target="_blank" 
                  rel="noreferrer" 
                  title="GitHub: Nakkikan" 
                  className="p-2.5 rounded-xl bg-zinc-900 border border-zinc-800 hover:border-zinc-600 text-zinc-300 hover:text-white transition-all shadow"
                >
                  <GithubIcon className="w-5 h-5" />
                </motion.a>

                {/* LinkedIn */}
                <motion.a 
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  href="https://www.linkedin.com/in/nabilli-rizky-687481346" 
                  target="_blank" 
                  rel="noreferrer" 
                  title="LinkedIn: Nabilli Rizky" 
                  className="p-2.5 rounded-xl bg-zinc-900 border border-zinc-800 hover:border-zinc-600 text-zinc-300 hover:text-blue-400 transition-all shadow"
                >
                  <LinkedinIcon className="w-5 h-5" />
                </motion.a>

                {/* Instagram */}
                <motion.a 
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  href="https://instagram.com/Shann_Shoyu" 
                  target="_blank" 
                  rel="noreferrer" 
                  title="Instagram: @Shann_Shoyu" 
                  className="p-2.5 rounded-xl bg-zinc-900 border border-zinc-800 hover:border-zinc-600 text-zinc-300 hover:text-pink-400 transition-all shadow"
                >
                  <InstagramIcon className="w-5 h-5" />
                </motion.a>

                {/* YouTube */}
                <motion.a 
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  href="https://youtube.com/@shanon6980?si=nNKfryGJosDao0pB" 
                  target="_blank" 
                  rel="noreferrer" 
                  title="YouTube: @shanon6980" 
                  className="p-2.5 rounded-xl bg-zinc-900 border border-zinc-800 hover:border-zinc-600 text-zinc-300 hover:text-red-500 transition-all shadow"
                >
                  <YoutubeIcon className="w-5 h-5" />
                </motion.a>

                {/* TikTok */}
                <motion.a 
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  href="https://www.tiktok.com/@nakkiii26?_r=1&_t=ZS-99aoMoEKKDV" 
                  target="_blank" 
                  rel="noreferrer" 
                  title="TikTok: @nakkiii26" 
                  className="p-2.5 rounded-xl bg-zinc-900 border border-zinc-800 hover:border-zinc-600 text-zinc-300 hover:text-cyan-400 transition-all shadow"
                >
                  <TiktokIcon className="w-5 h-5" />
                </motion.a>
                
                {/* Copy Email */}
                <motion.button 
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleCopyEmail}
                  className="px-3.5 py-2.5 rounded-xl bg-zinc-900 border border-zinc-800 hover:border-zinc-600 text-xs font-mono text-zinc-300 flex items-center gap-2 transition-all cursor-pointer shadow"
                >
                  {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4 text-zinc-400" />}
                  <span>{copiedEmail ? "nabillirizky5@gmail.com Tersalin!" : "Copy Email"}</span>
                </motion.button>

                {/* Download CV */}
                <motion.a 
                  whileHover={{ scale: 1.05, y: -2, boxShadow: "0 0 20px rgba(6, 182, 212, 0.4)" }}
                  whileTap={{ scale: 0.95 }}
                  href="/cv-nabilli.pdf" 
                  download="CV_Nabilli_Rizky.pdf"
                  className="px-5 py-2.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-black font-semibold text-xs font-mono flex items-center gap-2 transition-all shadow-lg cursor-pointer"
                >
                  <Download className="w-4 h-4" />
                  <span>Resume / CV</span>
                </motion.a>
              </div>
            </motion.div>

            {/* Frame Foto Profil */}
            <motion.div 
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              whileHover={{ scale: 1.03 }}
              className="relative group cursor-pointer"
            >
              <div className="absolute -inset-1.5 bg-gradient-to-r from-cyan-500 to-emerald-500 rounded-3xl blur-lg opacity-40 group-hover:opacity-75 transition duration-500" />
              
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-2xl bg-zinc-900 border border-zinc-800 overflow-hidden shadow-2xl flex flex-col items-center justify-center p-2">
                <img 
                  src="/foto.jpeg" 
                  alt="Nabilli Rizky" 
                  className="w-full h-full object-cover rounded-xl grayscale group-hover:grayscale-0 transition-all duration-700"
                  onError={(e) => {
                    e.currentTarget.src = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&auto=format&fit=crop&q=80";
                  }}
                />

                {/* Scanning Radar Line */}
                <motion.div 
                  animate={{ y: [-150, 150] }}
                  transition={{ duration: 3.5, repeat: Infinity, ease: "linear" }}
                  className="absolute left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-400/80 to-transparent pointer-events-none opacity-50 group-hover:opacity-100"
                />

                <div className="absolute bottom-4 left-4 right-4 p-2 rounded-xl bg-zinc-950/85 backdrop-blur-md border border-zinc-800 text-[11px] font-mono flex items-center justify-between text-zinc-300">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span>LabVIEW & myRIO Dev</span>
                  </div>
                  <span className="text-zinc-500">UPI • SMKN 39</span>
                </div>
              </div>
            </motion.div>

          </div>

          {/* BENTO STATS CARDS */}
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-4 pt-6"
          >
            {[
              { label: "Location", val: "Bandung / Jakarta", sub: currentTime || "00:00:00 WIB", icon: MapPin, color: "text-cyan-400" },
              { label: "LKS 2024", val: "3x Podium Medali", sub: "Wilayah, DKI, Nasional", icon: Trophy, color: "text-amber-400" },
              { label: "Core Hardware", val: "NI myRIO-1900", sub: "ARM + Xilinx FPGA", icon: Cpu, color: "text-cyan-400" },
              { label: "Akademik", val: "UPI Bandung", sub: "Otomasi & Robotika", icon: GraduationCap, color: "text-emerald-400" }
            ].map((card, i) => {
              const IconComponent = card.icon;
              return (
                <motion.div 
                  key={i}
                  variants={fadeInUp}
                  whileHover={{ y: -6, scale: 1.02, borderColor: "rgba(6, 182, 212, 0.4)" }}
                  transition={{ duration: 0.2 }}
                  className="p-5 rounded-2xl bg-zinc-900/40 border border-zinc-800/80 flex flex-col justify-between space-y-2 shadow-lg"
                >
                  <div className="flex items-center justify-between text-zinc-500">
                    <IconComponent className={`w-4 h-4 ${card.color}`} />
                    <span className="text-[10px] font-mono uppercase">{card.label}</span>
                  </div>
                  <div>
                    <p className="text-base font-bold text-white">{card.val}</p>
                    <p className="text-xs text-zinc-400 mt-0.5 font-mono">{card.sub}</p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </section>

        {/* SECTION: ACADEMIC BACKGROUND */}
        <motion.section 
          id="education" 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeInUp}
          className="space-y-6"
        >
          <div className="flex items-center gap-2.5 border-b border-zinc-800 pb-4">
            <GraduationCap className="w-5 h-5 text-cyan-400" />
            <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              Latar Belakang Akademik & Rekayasa
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <motion.div 
              whileHover={{ y: -6, scale: 1.01 }}
              transition={{ duration: 0.2 }}
              className="p-6 rounded-2xl bg-zinc-900/40 border border-zinc-800/80 hover:border-cyan-500/40 flex flex-col justify-between space-y-4 shadow-xl"
            >
              <div>
                <div className="flex items-center justify-between text-xs font-mono text-cyan-400 mb-2">
                  <span>PENDIDIKAN TINGGI (S1)</span>
                  <span>2024 — SEKARANG</span>
                </div>
                <h3 className="text-lg font-bold text-white">Universitas Pendidikan Indonesia</h3>
                <p className="text-xs text-zinc-400 mt-1 font-mono">Pendidikan Teknik Otomasi Industri dan Robotika (PTOIR)</p>
                <p className="text-xs text-zinc-300 mt-3 leading-relaxed">
                  Mendalami integrasi sistem kendali industri, instrumentasi berbasis LabVIEW, arsitektur otomatisasi pabrik, dan perancangan platform robot cerdas.
                </p>
              </div>
              <div className="text-[11px] font-mono text-zinc-500 flex items-center gap-2 border-t border-zinc-800/80 pt-3">
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
                <span>Kampus UPI Bumi Siliwangi, Bandung</span>
              </div>
            </motion.div>

            <motion.div 
              whileHover={{ y: -6, scale: 1.01 }}
              transition={{ duration: 0.2 }}
              className="p-6 rounded-2xl bg-zinc-900/40 border border-zinc-800/80 hover:border-emerald-500/40 flex flex-col justify-between space-y-4 shadow-xl"
            >
              <div>
                <div className="flex items-center justify-between text-xs font-mono text-emerald-400 mb-2">
                  <span>PENDIDIKAN VOKASI</span>
                  <span>LULUS 2024</span>
                </div>
                <h3 className="text-lg font-bold text-white">SMKN 39 Jakarta</h3>
                <p className="text-xs text-zinc-400 mt-1 font-mono">Teknik Elektronika Industri (TEI)</p>
                <p className="text-xs text-zinc-300 mt-3 leading-relaxed">
                  Pondasi elektronika praktis, rangkaian daya aktuator, interfacing sensor-aktuator industri, serta menjadi kontingen utama pada ajang LKS Mobile Robotics berbasis NI myRIO.
                </p>
              </div>
              <div className="text-[11px] font-mono text-zinc-500 flex items-center gap-2 border-t border-zinc-800/80 pt-3">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                <span>DKI Jakarta, Indonesia</span>
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* SECTION: 2024 LKS COMPETITION PROGRESSION */}
        <motion.section 
          id="milestones" 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
          className="space-y-6"
        >
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-zinc-800 pb-4">
            <div className="flex items-center gap-2.5">
              <Trophy className="w-5 h-5 text-amber-400" />
              <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                Rekam Jejak Prestasi LKS 2024
              </h2>
            </div>
            <span className="text-xs font-mono text-zinc-400">
              Dokumen Sertifikat Terverifikasi
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {milestones.map((item, idx) => (
              <motion.div 
                key={idx}
                variants={fadeInUp}
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ duration: 0.25 }}
                className={`p-6 rounded-2xl border bg-gradient-to-b ${item.glow} flex flex-col justify-between relative group hover:border-zinc-400 transition-colors shadow-2xl`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className={`text-[10px] font-mono uppercase px-2.5 py-1 rounded-full border ${item.accent}`}>
                      {item.level}
                    </span>
                    <Award className="w-5 h-5 text-zinc-400 group-hover:rotate-12 group-hover:scale-110 transition-transform" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-1">{item.title}</h3>
                  <p className="text-xs font-mono text-zinc-400 mb-3">{item.event}</p>
                  <p className="text-xs text-zinc-300 leading-relaxed">{item.desc}</p>
                </div>
                
                <div className="mt-6 pt-4 border-t border-zinc-800/80 flex items-center justify-between">
                  <motion.a 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href={item.certUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-xs font-mono text-cyan-300 border border-zinc-700/60 transition-colors"
                  >
                    <FileText className="w-3.5 h-3.5" />
                    <span>Buka Sertifikat (PDF)</span>
                    <ArrowUpRight className="w-3 h-3 ml-0.5" />
                  </motion.a>
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* SECTION: LIVE TELEMETRY SIMULATOR */}
        <motion.section 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeInUp}
          className="space-y-4"
        >
          <div className="flex items-center gap-2">
            <Activity className="w-5 h-5 text-cyan-400" />
            <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              Live Hardware & Telemetry Link
            </h2>
          </div>

          <div className="rounded-2xl bg-zinc-950 border border-zinc-800/90 p-5 font-mono text-xs shadow-2xl relative overflow-hidden">
            <div className="flex items-center justify-between pb-3 border-b border-zinc-800 text-zinc-500 mb-4">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500 inline-block animate-pulse" />
                <span className="w-2.5 h-2.5 rounded-full bg-amber-500 inline-block" />
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 inline-block" />
                <span className="ml-2 text-zinc-400 text-[11px]">myrio-target: ~/LabVIEW_RT/Main.vi</span>
              </div>
              <span className="text-[11px] text-cyan-400 font-bold">FPGA CLK 40MHz • RT 1 kHz</span>
            </div>

            <div className="space-y-2 text-zinc-300">
              {terminalLogs.map((log, i) => (
                <motion.div 
                  key={i} 
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex items-start gap-2"
                >
                  <span className="text-zinc-600 select-none">[{i + 1}]</span>
                  <span className="text-cyan-400 select-none">&gt;&gt;</span>
                  <span className={i === terminalLogs.length - 1 ? "text-emerald-300 font-semibold" : "text-zinc-400"}>
                    {log}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* SECTION: FEATURED PROJECTS */}
        <motion.section 
          id="projects" 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={fadeInUp}
          className="space-y-6"
        >
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-zinc-800 pb-4">
            <div className="flex items-center gap-2.5">
              <Layers className="w-5 h-5 text-purple-400" />
              <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                Riset & Proyek Robotika (LabVIEW & myRIO)
              </h2>
            </div>

            {/* Filter Tab */}
            <div className="flex gap-1.5 p-1 rounded-xl bg-zinc-900 border border-zinc-800 text-xs font-mono">
              {['all', 'autonomous', 'embedded', 'vision'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`relative px-3 py-1 rounded-lg capitalize transition-colors cursor-pointer ${
                    activeTab === tab ? 'text-white' : 'text-zinc-400 hover:text-white'
                  }`}
                >
                  {activeTab === tab && (
                    <motion.div 
                      layoutId="tabBackground"
                      className="absolute inset-0 bg-zinc-800 rounded-lg shadow"
                      transition={{ type: "spring", bounce: 0.25, duration: 0.4 }}
                    />
                  )}
                  <span className="relative z-10">{tab}</span>
                </button>
              ))}
            </div>
          </div>

          <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <AnimatePresence>
              {filteredProjects.map((proj) => (
                <motion.div 
                  layout
                  initial={{ opacity: 0, scale: 0.92 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.92 }}
                  transition={{ duration: 0.35 }}
                  whileHover={{ y: -8 }}
                  key={proj.title}
                  className="rounded-2xl bg-zinc-900/40 border border-zinc-800/80 hover:border-cyan-500/50 transition-colors overflow-hidden flex flex-col justify-between group shadow-xl"
                >
                  <div className="relative h-48 w-full overflow-hidden bg-zinc-950">
                    <img 
                      src={proj.image} 
                      alt={proj.title} 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-80 group-hover:opacity-100"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/25 to-transparent" />
                    
                    <div className="absolute top-3 left-3">
                      <span className="text-[10px] font-mono uppercase tracking-wider text-cyan-400 bg-black/70 backdrop-blur-md border border-cyan-800/40 px-2 py-0.5 rounded">
                        {proj.status}
                      </span>
                    </div>

                    <motion.a 
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      href={proj.videoUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="absolute bottom-3 right-3 px-2.5 py-1.5 rounded-lg bg-black/80 backdrop-blur-md border border-white/10 text-[11px] font-mono text-zinc-300 hover:text-white flex items-center gap-1.5 transition-colors"
                    >
                      <Play className="w-3 h-3 text-red-500 fill-red-500" />
                      <span>Video Aksi Robot</span>
                    </motion.a>
                  </div>

                  <div className="p-6 flex flex-col justify-between flex-1">
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-[11px] font-mono text-cyan-400">{proj.metrics}</span>
                      </div>

                      <h3 className="text-base font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                        {proj.title}
                      </h3>
                      <p className="text-xs text-zinc-400 leading-relaxed mb-6">
                        {proj.desc}
                      </p>
                    </div>

                    <div>
                      <div className="flex flex-wrap gap-1.5 pt-4 border-t border-zinc-800/60 mb-4">
                        {proj.stack.map((item, sIdx) => (
                          <span key={sIdx} className="text-[10px] font-mono px-2 py-0.5 rounded bg-zinc-800/70 border border-zinc-700/50 text-zinc-300">
                            {item}
                          </span>
                        ))}
                      </div>

                      <div className="flex items-center gap-4 text-xs font-mono text-zinc-400">
                        <a href={proj.github} target="_blank" rel="noreferrer" className="flex items-center gap-1.5 hover:text-white transition-colors">
                          <GithubIcon className="w-4 h-4" />
                          <span>Source Code @Nakkikan</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </motion.section>

        {/* SECTION: SKILLS */}
        <motion.section 
          id="skills" 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
          className="space-y-6"
        >
          <div className="flex items-center gap-2 border-b border-zinc-800 pb-4">
            <Wrench className="w-5 h-5 text-cyan-400" />
            <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              Keahlian & Core Tooling (LabVIEW & myRIO)
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {technicalCategories.map((cat, idx) => (
              <motion.div 
                key={idx} 
                variants={fadeInUp}
                whileHover={{ y: -6, scale: 1.02 }}
                transition={{ duration: 0.2 }}
                className="p-5 rounded-2xl bg-zinc-900/40 border border-zinc-800/80 hover:border-zinc-600 transition-colors space-y-4 shadow-lg"
              >
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-cyan-400" />
                  <h3 className="text-xs font-mono font-bold text-white uppercase">{cat.title}</h3>
                </div>
                <ul className="space-y-2 text-xs text-zinc-400 font-mono">
                  {cat.skills.map((skill, sIdx) => (
                    <li key={sIdx} className="flex items-center gap-2">
                      <span className="text-zinc-600">▪</span>
                      <span>{skill}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* SECTION: CONTACT */}
        <motion.section 
          id="contact" 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeInUp}
          className="space-y-6"
        >
          <div className="flex items-center gap-2 border-b border-zinc-800 pb-4">
            <MessageSquare className="w-5 h-5 text-emerald-400" />
            <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              Hubungi & Kolaborasi
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="space-y-4">
              <p className="text-sm text-zinc-400 leading-relaxed">
                Terbuka untuk diskusi riset robotika, pemrograman LabVIEW Real-Time/FPGA, otomasi industri, atau peluang kolaborasi proyek. Hubungi saya melalui:
              </p>

              <div className="space-y-3 pt-2">
                <motion.a 
                  whileHover={{ x: 6 }}
                  href="mailto:nabillirizky5@gmail.com" 
                  className="p-4 rounded-xl bg-zinc-900/60 border border-zinc-800 flex items-center gap-3.5 hover:border-cyan-500/50 transition-all text-zinc-300 shadow"
                >
                  <Mail className="w-5 h-5 text-cyan-400" />
                  <div>
                    <p className="text-[11px] font-mono text-zinc-500 uppercase">Email Langsung</p>
                    <p className="text-xs font-mono text-white">nabillirizky5@gmail.com</p>
                  </div>
                </motion.a>

                <motion.a 
                  whileHover={{ x: 6 }}
                  href="https://wa.me/6283839574993" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="p-4 rounded-xl bg-zinc-900/60 border border-zinc-800 flex items-center gap-3.5 hover:border-emerald-500/50 transition-all text-zinc-300 shadow"
                >
                  <Send className="w-5 h-5 text-emerald-400" />
                  <div>
                    <p className="text-[11px] font-mono text-zinc-500 uppercase">WhatsApp</p>
                    <p className="text-xs font-mono text-white">+62 838-3957-4993</p>
                  </div>
                </motion.a>

                <div className="p-4 rounded-xl bg-zinc-900/60 border border-zinc-800 flex items-center gap-3.5 text-zinc-300 shadow">
                  <MapPin className="w-5 h-5 text-purple-400" />
                  <div>
                    <p className="text-[11px] font-mono text-zinc-500 uppercase">Domisili & Workshop</p>
                    <p className="text-xs font-mono text-white">Bandung / Jakarta, Indonesia</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Form Kontak dengan EmailJS Integration */}
            <motion.div 
              whileHover={{ borderColor: "rgba(6, 182, 212, 0.3)" }}
              className="p-6 rounded-2xl bg-zinc-900/40 border border-zinc-800/80 shadow-2xl transition-colors"
            >
              <form onSubmit={handleFormSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-mono text-zinc-400 mb-1.5">NAMA LENGKAP</label>
                  <input 
                    type="text" 
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    placeholder="Masukkan nama Anda"
                    className="w-full px-4 py-2.5 rounded-xl bg-zinc-950 border border-zinc-800 focus:border-cyan-500 focus:outline-none text-xs text-white transition-all font-mono"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-zinc-400 mb-1.5">ALAMAT EMAIL</label>
                  <input 
                    type="email" 
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    placeholder="nama@email.com"
                    className="w-full px-4 py-2.5 rounded-xl bg-zinc-950 border border-zinc-800 focus:border-cyan-500 focus:outline-none text-xs text-white transition-all font-mono"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-zinc-400 mb-1.5">PESAN / KEBUTUHAN</label>
                  <textarea 
                    rows={4} 
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    placeholder="Tuliskan pesan atau penawaran kerja sama..."
                    className="w-full px-4 py-2.5 rounded-xl bg-zinc-950 border border-zinc-800 focus:border-cyan-500 focus:outline-none text-xs text-white transition-all font-mono resize-none"
                  />
                </div>

                <motion.button
                  whileHover={{ scale: isSubmitting ? 1 : 1.02, boxShadow: "0 0 20px rgba(6, 182, 212, 0.4)" }}
                  whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-3 rounded-xl font-semibold text-xs font-mono flex items-center justify-center gap-2 transition-all shadow-lg ${
                    formSent 
                      ? "bg-emerald-500 text-black cursor-default" 
                      : isSubmitting 
                        ? "bg-zinc-800 text-zinc-500 cursor-not-allowed" 
                        : "bg-cyan-500 hover:bg-cyan-400 text-black cursor-pointer"
                  }`}
                >
                  <Send className={`w-4 h-4 ${isSubmitting ? "animate-pulse" : ""}`} />
                  <span>
                    {isSubmitting 
                      ? "Mengirim via Gateway..." 
                      : formSent 
                        ? "Pesan Terkirim ke Nabilli!" 
                        : "Kirim Pesan"}
                  </span>
                </motion.button>
              </form>
            </motion.div>
          </div>
        </motion.section>

        {/* FOOTER */}
        <footer className="pt-12 border-t border-zinc-800 flex flex-col sm:flex-row items-center justify-between gap-6 text-xs font-mono text-zinc-500">
          <div>
            <p className="text-zinc-300 font-semibold">Nabilli Rizky</p>
            <p>© 2026 Mobile Robotics Portfolio • Universitas Pendidikan Indonesia</p>
          </div>
          
          <div className="flex items-center gap-4">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-emerald-400 text-[11px]">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Available for Research & Robotics Dev
            </span>
            <motion.a 
              whileHover={{ y: -3 }}
              href="#" 
              className="p-2 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-zinc-400 hover:text-white transition-all"
            >
              <ChevronUp className="w-4 h-4" />
            </motion.a>
          </div>
        </footer>

      </main>
    </div>
  );
}