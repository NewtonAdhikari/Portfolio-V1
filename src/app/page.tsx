'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';

/* ─── DATA ─────────────────────────────────────────────── */
const BOOT_MESSAGES = [
  'Welcome to World of Newton Adhikari',
  'SYSTEM ONLINE',
  'INITIALIZING AI PORTFOLIO',
  'LOADING INTERFACE MODULES',
  'CONNECTING NEURAL ENGINE',
  'STARTING FUTURISTIC UI',
  'PORTFOLIO READY',
];

const ROLES = [
  'CSE Student',
  'AI Developer',
  'Full Stack Developer',
  'Future Researcher',
  'Tech Enthusiast',
  'Android Developer',
  'Problem Solver',
];

const SKILLS_DATA = [
  { name: 'HTML5', color: '#E34F26', icon: '🌐' },
  { name: 'CSS3', color: '#1572B6', icon: '🎨' },
  { name: 'JavaScript', color: '#F7DF1E', icon: '⚡' },
  { name: 'React', color: '#61DAFB', icon: '⚛️' },
  { name: 'Next.js', color: '#ffffff', icon: '▲' },
  { name: 'TypeScript', color: '#3178C6', icon: '📘' },
  { name: 'Node.js', color: '#339933', icon: '🟢' },
  { name: 'Python', color: '#3776AB', icon: '🐍' },
  { name: 'Go', color: '#00ADD8', icon: '🐹' },
  { name: 'Express', color: '#ffffff', icon: '🚂' },
  { name: 'TensorFlow', color: '#FF6F00', icon: '🧠' },
  { name: 'PyTorch', color: '#EE4C2C', icon: '🔥' },
  { name: 'MongoDB', color: '#47A248', icon: '🍃' },
  { name: 'PostgreSQL', color: '#4169E1', icon: '🐘' },
  { name: 'Docker', color: '#2496ED', icon: '🐳' },
  { name: 'Git', color: '#F05032', icon: '📦' },
  { name: 'Linux', color: '#FCC624', icon: '🐧' },
];

const PROJECTS = [
  {
    title: 'A Hybrid Reinforcement Learning  for End-to-End Supply Chain Management',
    desc: 'Developed a hybrid reinforcement learning framework to optimize inventory management, demand forecasting, production planning, and logistics operations. The system adapts to dynamic market conditions and improves supply chain efficiency through intelligent decision-making.',
    tags: [
      'Python',
      'Reinforcement Learning',
      'Machine Learning',
      'Supply Chain Analytics',
      'PyTorch'
    ],
    icon: '📦',
    image: '/project3.png',
    github: 'https://github.com/NewtonAdhikari/supply-chain-management',
    demo: 'https://your-demo-link.vercel.app'
  },
  {
    title: 'Education Operating System',
    desc: 'Designed and developed a next-generation Education Operating System that unifies learning management, academic administration, student engagement, and institutional analytics into a single intelligent platform. The system leverages a React frontend, Go backend, and PostgreSQL database to deliver scalable, secure, and high-performance educational workflows.',
    tags: [
     'React',
     'Go',
     'PostgreSQL',
     'System Design',
     'Education Technology',
     'Cloud Deployment'
    ],
    icon: '🚀',
    image: '/project4.png',
    github: 'https://github.com/NewtonAdhikari/education-os',
    demo: 'https://education-os.vercel.app'
  },
  {
    title: 'Intelligent GPS Tracking & Fleet Monitoring System',
    desc: 'Designed and developed a real-time GPS tracking and fleet monitoring platform that enables live location tracking, route optimization, geofencing, travel history analysis, and asset management. The system leverages React for a responsive user interface, Go for high-performance backend services, and PostgreSQL for reliable data storage, providing a scalable solution for logistics, transportation, and asset tracking applications.',
    tags: [
      'React',
      'Go',
      'PostgreSQL',
      'Real-Time Tracking',
    'Geofencing',
    'Fleet Management'
   ],
    icon: '🛰️',
    image: '/project5.png',
    github: 'https://github.com/NewtonAdhikari/gps-tracker',
    demo: 'https://gps-tracker.vercel.app'
  },
  {
    title: 'Enterprise Email Authentication & Identity Verification Platform',
    desc: 'Designed and implemented a secure authentication platform featuring email verification, JWT-based authorization, password recovery, OTP validation, and role-based access control. Built with React, Go, and PostgreSQL, the system provides scalable identity management and robust security mechanisms for modern web applications.',
    tags: [
      'React',
      'Go',
      'PostgreSQL',
      'Authentication',
      'JWT',
      'RBAC',
      'Cybersecurity'
    ],
    icon: '🔐',
    image: '/project6.png',
    github: 'https://github.com/NewtonAdhikari/email-auth-system',
    demo: 'https://email-auth.vercel.app'
  },
  {
    title: 'Smart Event Registration & Attendance Management System',
    desc: 'Designed and developed a cloud-based event registration system that streamlines participant onboarding through dynamic web forms and Google Sheets integration. The platform enables real-time registration tracking, automated data storage, attendance management, and organizer-friendly reporting, delivering an efficient and scalable solution for academic, technical, and community events.',
    tags: [
      'React',
      'Google Sheets',
      'Google Apps Script',
      'Event Management',
      'Cloud Automation',
      'Web Development'
      ],
    icon: '📋',
    image: '/project7.png',
    github: 'https://github.com/NewtonAdhikari/event-registration',
    demo: 'https://event-registration.vercel.app'
  },
  {
    title: 'Intelligent Voice-Based AI Assistant',
    desc: 'Designed and developed a conversational AI assistant capable of understanding natural voice commands, performing task automation, answering queries, managing schedules, and providing personalized recommendations. The platform leverages speech-to-text, natural language understanding, and AI-driven response generation to deliver an interactive and context-aware user experience.',
    tags: [
      'React',
      'AI',
      'NLP',
      'Speech-to-Text',
      'Voice Interface',
      'Automation',
      'Ollama',
    ],
    icon: '🤖',
    image: '/project2.png',
    github: 'https://github.com/NewtonAdhikari/ai-virtual-assistant',
    demo: 'https://ai-assistant.vercel.app'
  },
];

const RESEARCH = [
{
title: 'Performance and Security Analysis of Blockchain-Based Decentralized Cloud Storage Systems',
desc: 'This research investigates the performance, scalability, and security characteristics of blockchain-powered decentralized cloud storage architectures. The study evaluates critical factors such as data availability, fault tolerance, latency, storage efficiency, and resilience against cyber threats. Through comparative analysis with traditional cloud storage solutions, the research demonstrates how blockchain technology enhances data integrity, privacy, and trust while identifying key performance trade-offs and optimization opportunities.',
icon: '🔗',
color: '#00f0ff',
status: 'Published'
},

{
title: 'A Hybrid Reinforcement Learning Framework for End-to-End Supply Chain Management',
desc: 'This research proposes a hybrid reinforcement learning framework for intelligent end-to-end supply chain optimization. The system integrates inventory management, demand forecasting, production planning, and logistics coordination into a unified decision-making model. By combining multiple reinforcement learning strategies, the framework adapts to dynamic market conditions, minimizes operational costs, improves resource utilization, and enhances overall supply chain resilience and efficiency.',
icon: '📦',
color: '#a855f7',
status: 'Patent'
},

{
title: 'Decision-Calibrated Probabilistic Learning for Cost-Sensitive and Risk-Aware Decision Making',
desc: 'This study introduces a decision-calibrated probabilistic learning approach designed to support cost-sensitive and risk-aware decision making in uncertain environments. The framework combines probabilistic modeling with decision optimization techniques to account for prediction uncertainty, varying cost structures, and risk constraints. The proposed methodology aims to improve decision reliability, maximize expected utility, and deliver economically efficient outcomes across real-world applications.',
icon: '📊',
color: '#22c55e',
status: 'Under Publication'
}
];


const EDUCATION = [
  {
    degree: 'B.Tech in Computer Science & Engineering',
    institution: 'Guru Nanak Institute of Technology, Hyderabad',
    university: 'Jawaharlal Nehru Technological University, Hyderabad',
    location: 'Hyderabad, India',
    period: '2023 – 2027',
    status: 'Pursuing',
    grade: 'CGPA: 9.01/10',
    desc: 'Specializing in core engineering with a strong interest in Artificial Intelligence and Machine Learning. Active member of the AI research lab and coding club. Participated in multiple hackathons and coding competitions.',
    icon: '🎓',
    color: '#00f0ff',
  },
  {
    degree: 'Higher Secondary (Class XII) — Science',
    institution: 'Caspian Valley College, Kathmandu',
    board: 'NEB (National Examination Board), Nepal',
    location: 'Kathmandu, Nepal',
    period: '2021 – 2023',
    status: 'Completed',
    grade: 'Percentage: 93.2%',
    desc: 'Major in Physics, Chemistry and Mathematics (PCM) with Biology. Developed a strong foundation in mathematics and biology during this period.',
    icon: '🏫',
    color: '#a855f7',
  },
  {
    degree: 'Secondary School (Class X)',
    institution: 'Shree Kishori Janata Higher Secondary School, Hariyarpur-Harinmori',
    board: 'NEB (National Examination Board), Nepal',
    location: 'Hariyarpur-Harinmori, Nepal',
    period: '2020 – 2021',
    status: 'Completed',
    grade: 'Percentage: 91%',
    desc: 'Achieved outstanding academic performance with distinction in Mathematics and Science. First exposure to programming through school curriculum and self-learning.',
    icon: '📚',
    color: '#22c55e',
  },
];

const CERTS = [
  { title: 'Emerging Trends and Challenges in Cyber Security', issuer: 'GNIT', image: '/certificates/23831a05e5@gniindia.org-1.png' },
  { title: 'Virtual Internship By Codsoft', issuer: 'Codsoft', image: '/certificates/Codsoft virtual Internship.png' },
  { title: 'HackArena', issuer: 'IEEE', image: '/certificates/HackArena.png' },
  { title: 'Career Guidance', issuer: 'Branic Academic', image: '/certificates/NEWTON ADHIKARI_ParticipationCertificate-1.png' },
  { title: 'Organising Certificate', issuer: 'HackerRank CLUB', image: '/certificates/Organsier E-Certificate (HackerRank CLUB, CSE_GNIT)-1.png' },
  { title: 'Career Guidence', issuer: 'Grad Guru', image: '/certificates/Participation Certificate - Newton Adhikari-1.png' },
];

const getStatusClass = (status) => {
  switch (status) {
    case 'Published':
      return 'status-published';
    case 'Patent':
      return 'status-patent';
    case 'Under Publication':
      return 'status-publication';
    default:
      return '';
  }
};


const MARQUEE_ITEMS = [
  'Python', 'TypeScript', 'React', 'Next.js', 'TensorFlow', 'PyTorch',
  'Node.js', 'Docker', 'PostgreSQL', 'MongoDB', 'GraphQL', 'WebSocket',
  'OpenCV', 'NLP', 'BERT', 'GANs', 'Blockchain', 'IPFS', 'D3.js', 'Linux',
];

const THEMES = [
  { id: 'cyan', name: 'Neon Cyan', color: '#00f0ff' },
  { id: 'purple', name: 'Electric Purple', color: '#a855f7' },
  { id: 'blue', name: 'Quantum Blue', color: '#3b82f6' },
  { id: 'green', name: 'Matrix Green', color: '#22c55e' },
  { id: 'pink', name: 'Cyber Pink', color: '#ec4899' },
  { id: 'gold', name: 'Golden AI', color: '#f59e0b' },

];

const NAV_ITEMS = [
  { id: 'home', label: 'Home', icon: '⌂' },
  { id: 'about', label: 'About', icon: '◉' },
  { id: 'education', label: 'Edu', icon: '🎓' },
  { id: 'skills', label: 'Skills', icon: '⚡' },
  { id: 'projects', label: 'Projects', icon: '◈' },
  { id: 'research', label: 'Research', icon: '◇' },
  { id: 'certifications', label: 'Certs', icon: '📜' },
  { id: 'contact', label: 'Contact', icon: '✉' },
  { id: 'theme', label: 'Theme', icon: '◐' },
];

/* ─── ANIMATED COUNTER (outside Home to prevent remount loop) ── */
function AnimatedCounter({ end, suffix = '+', triggered }: { end: number; suffix?: string; triggered: boolean }) {
  const [count, setCount] = useState(0);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!triggered || hasAnimated.current) return;
    hasAnimated.current = true;
    let start = 0;
    const step = Math.max(1, Math.floor(end / 60));
    const interval = setInterval(() => {
      start += step;
      if (start >= end) {
        setCount(end);
        clearInterval(interval);
      } else {
        setCount(start);
      }
    }, 25);
    return () => clearInterval(interval);
  }, [triggered, end]);

  return <>{count}{suffix}</>;
}

/* ─── MAIN COMPONENT ───────────────────────────────────── */
export default function Home() {
  /* ---- state ---- */
  const [booting, setBooting] = useState(true);
  const [bootProgress, setBootProgress] = useState(0);
  const [bootMsgIndex, setBootMsgIndex] = useState(-1);
  const [activeSection, setActiveSection] = useState('home');
  const [typedText, setTypedText] = useState('');
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [nameText, setNameText] = useState('');
  const [themeOpen, setThemeOpen] = useState(false);
  const [currentTheme, setCurrentTheme] = useState('cyan');
  const [scrollProgress, setScrollProgress] = useState(0);
  const [countersTriggered, setCountersTriggered] = useState(false);
  const [certIndex, setCertIndex] = useState(0);
  const [watchTime, setWatchTime] = useState('');
  const [watchDate, setWatchDate] = useState('');
  const [formState, setFormState] = useState({ name: '', email: '', subject: '', message: '' });
  const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [formMessage, setFormMessage] = useState('');
  const [captchaNums, setCaptchaNums] = useState({ a: 0, b: 0 });
  const [captchaAnswer, setCaptchaAnswer] = useState('');

  /* ---- refs ---- */
  const dockItemRefs = useRef<(HTMLDivElement | null)[]>([]);

  /* ─── BOOT SEQUENCE ─────────────────────────────────── */
  useEffect(() => {
    let progress = 0;
    let msgIdx = 0;
    const interval = setInterval(() => {
      progress += 1.7;
      if (progress >= 100) progress = 100;
      setBootProgress(Math.round(progress));

      const targetMsg = Math.min(Math.floor(progress / (100 / BOOT_MESSAGES.length)), BOOT_MESSAGES.length - 1);
      if (targetMsg > msgIdx) {
        msgIdx = targetMsg;
        setBootMsgIndex(msgIdx);
      }

      if (progress >= 100) {
        clearInterval(interval);
        setTimeout(() => setBooting(false), 600);
      }
    }, 70);
    return () => clearInterval(interval);
  }, []);

  /* ─── TYPING EFFECT ─────────────────────────────────── */
  useEffect(() => {
    if (booting) return;
    const currentRole = ROLES[roleIndex];
    let timeout: NodeJS.Timeout;

    if (!isDeleting) {
      if (charIndex < currentRole.length) {
        timeout = setTimeout(() => {
          setTypedText(currentRole.slice(0, charIndex + 1));
          setCharIndex(charIndex + 1);
        }, 60);
      } else {
        timeout = setTimeout(() => setIsDeleting(true), 2000);
      }
    } else {
      if (charIndex > 0) {
        timeout = setTimeout(() => {
          setTypedText(currentRole.slice(0, charIndex - 1));
          setCharIndex(charIndex - 1);
        }, 30);
      } else {
        setIsDeleting(false);
        setRoleIndex((roleIndex + 1) % ROLES.length);
      }
    }
    return () => clearTimeout(timeout);
  }, [booting, charIndex, isDeleting, roleIndex]);

  /* ─── NAME SCRAMBLE ─────────────────────────────────── */
  useEffect(() => {
    if (booting) return;
    const target = 'Newton Adhikari';
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%';
    let iteration = 0;
    const interval = setInterval(() => {
      setNameText(
        target
          .split('')
          .map((ch, i) => {
            if (ch === ' ') return ' ';
            if (i < iteration) return target[i];
            return chars[Math.floor(Math.random() * chars.length)];
          })
          .join('')
      );
      iteration += 0.5;
      if (iteration >= target.length) {
        setNameText(target);
        clearInterval(interval);
      }
    }, 40);
    return () => clearInterval(interval);
  }, [booting]);

  /* ─── SCROLL PROGRESS ───────────────────────────────── */
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(docHeight > 0 ? (scrollTop / docHeight) * 100 : 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  /* ─── INTERSECTION OBSERVER: ACTIVE SECTION ─────────── */
  useEffect(() => {
    const sections = document.querySelectorAll('section[id]');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3, rootMargin: '-10% 0px -60% 0px' }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, [booting]);

  /* ─── SCROLL REVEAL ─────────────────────────────────── */
  useEffect(() => {
    if (booting) return;
    const revealEls = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );
    revealEls.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [booting]);

  /* ─── ANIMATED COUNTERS ─────────────────────────────── */
  useEffect(() => {
    if (booting || countersTriggered) return;
    const aboutSection = document.getElementById('about');
    if (!aboutSection) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setCountersTriggered(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(aboutSection);
    return () => observer.disconnect();
  }, [booting, countersTriggered]);

  /* ─── CERT AUTO-PLAY ────────────────────────────────── */
  useEffect(() => {
    if (booting) return;
    const interval = setInterval(() => {
      setCertIndex((prev) => (prev + 1) % CERTS.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [booting]);

  /* ─── LIVE WATCH ───────────────────────────────────── */
  useEffect(() => {
    if (booting) return;
    const tick = () => {
      const now = new Date();
      setWatchTime(now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true }));
      setWatchDate(now.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric', year: 'numeric' }));
    };
    tick();
    const interval = setInterval(tick, 1000);
    return () => clearInterval(interval);
  }, [booting]);

  /* ─── 3D TILT ON PROJECT CARDS ──────────────────────── */
  useEffect(() => {
    if (booting) return;
    const cards = document.querySelectorAll('.project-card');
    const handlers: Array<{ el: HTMLElement; enter: (e: Event) => void; move: (e: Event) => void; leave: () => void }> = [];

    cards.forEach((card) => {
      const el = card as HTMLElement;
      const handleEnter = () => { el.style.transition = 'none'; };
      const handleMove = (e: Event) => {
        const me = e as MouseEvent;
        const rect = el.getBoundingClientRect();
        const x = me.clientX - rect.left;
        const y = me.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const rotateX = ((y - centerY) / centerY) * -8;
        const rotateY = ((x - centerX) / centerX) * 8;
        el.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
      };
      const handleLeave = () => {
        el.style.transition = 'transform 0.5s ease';
        el.style.transform = 'perspective(800px) rotateX(0deg) rotateY(0deg) scale(1)';
      };

      el.addEventListener('mouseenter', handleEnter);
      el.addEventListener('mousemove', handleMove);
      el.addEventListener('mouseleave', handleLeave);
      handlers.push({ el, enter: handleEnter, move: handleMove, leave: handleLeave });
    });

    return () => {
      handlers.forEach(({ el, enter, move, leave }) => {
        el.removeEventListener('mouseenter', enter);
        el.removeEventListener('mousemove', move);
        el.removeEventListener('mouseleave', leave);
      });
    };
  }, [booting]);

  /* ─── THEME ─────────────────────────────────────────── */
  useEffect(() => {
    const saved = localStorage.getItem('portfolio-theme');
    if (saved) {
      setCurrentTheme(saved);
      document.documentElement.setAttribute('data-theme', saved);
    }
  }, []);

  const applyTheme = useCallback((id: string) => {
    setCurrentTheme(id);
    document.documentElement.setAttribute('data-theme', id);
    localStorage.setItem('portfolio-theme', id);
    setThemeOpen(false);
  }, []);

  /* ─── NAV CLICK ─────────────────────────────────────── */
  const handleNavClick = useCallback((id: string) => {
    if (id === 'theme') {
      setThemeOpen(true);
      return;
    }
    const el = document.getElementById(id);
    if (el) {
      const offset = 80; // account for bottom dock + breathing room
      const top = el.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  }, []);

  /* (AnimatedCounter moved outside Home to prevent remount on re-render) */

  /* ─── CAPTCHA GENERATOR ─────────────────────────────── */
  const generateCaptcha = useCallback(() => {
    const a = Math.floor(Math.random() * 20) + 1;
    const b = Math.floor(Math.random() * 20) + 1;
    setCaptchaNums({ a, b });
    setCaptchaAnswer('');
  }, []);

  useEffect(() => {
    generateCaptcha();
  }, [generateCaptcha]);

  /* ─── FORM HANDLER ──────────────────────────────────── */
  const handleFormChange = (field: string, value: string) => {
    setFormState((prev) => ({ ...prev, [field]: value }));
    if (formStatus === 'error') {
      setFormStatus('idle');
      setFormMessage('');
    }
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formState.name.trim() || !formState.email.trim() || !formState.message.trim()) {
      setFormStatus('error');
      setFormMessage('Please fill in all required fields.');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formState.email)) {
      setFormStatus('error');
      setFormMessage('Please enter a valid email address.');
      return;
    }

    // Validate captcha
    if (parseInt(captchaAnswer) !== captchaNums.a + captchaNums.b) {
      setFormStatus('error');
      setFormMessage('Captcha answer is incorrect. Please try again.');
      generateCaptcha();
      return;
    }

    setFormStatus('sending');
    setFormMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formState),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setFormStatus('success');
        setFormMessage(data.message || 'Message sent successfully!');
        setFormState({ name: '', email: '', subject: '', message: '' });
        generateCaptcha();
        setTimeout(() => {
          setFormStatus('idle');
          setFormMessage('');
        }, 5000);
      } else {
        setFormStatus('error');
        setFormMessage(data.error || 'Something went wrong. Please try again.');
        generateCaptcha();
      }
    } catch {
      setFormStatus('error');
      setFormMessage('Network error. Please check your connection and try again.');
      generateCaptcha();
    }
  };

  /* ─── RENDER ────────────────────────────────────────── */
  return (
    <>
      {/* ═══ BOOT LOADER ═══ */}
      {booting && (
        <div className="boot-loader">
          <div className="boot-scanner" />
          <div className="boot-rings">
            <div className="boot-ring boot-ring-1" />
            <div className="boot-ring boot-ring-2" />
            <div className="boot-ring boot-ring-3" />
            <div className="boot-core" />
          </div>

          <div className="boot-progress-container">
            <div className="boot-progress-bar">
              <div className="boot-progress-fill" style={{ width: `${bootProgress}%` }} />
            </div>
            <div className="boot-progress-text">{bootProgress}%</div>
          </div>

          <div className="boot-terminal">
            {BOOT_MESSAGES.map((msg, i) => (
              <div
                key={i}
                className={`boot-terminal-line ${i <= bootMsgIndex ? 'visible' : ''}`}
              >
                {msg}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ═══ GRID BACKGROUND ═══ */}
      <div className="bg-grid" />

      {/* ═══ SCROLL PROGRESS ═══ */}
      <div className="scroll-progress" style={{ width: `${scrollProgress}%` }} />

      {/* ═══ MAIN CONTENT ═══ */}
      <main style={{ position: 'relative', zIndex: 1 }}>
        {/* ═══ HERO ═══ */}
        <section id="home" className="hero-section">
          <div className="hero-content">
            {/* Profile */}
            <div className="hero-profile">
              <div className="hero-profile-ring" />
                <div className="hero-profile-ring" />
                  <div className="hero-profile-ring" />
                    <div className="hero-profile-image">
                      <img
                        src="/profile.png"
                          alt="Newton Adhikari"
                          className="profile-image"
                        />
                      </div>
                    </div>

            {/* Live Watch */}
            <div className="hero-watch reveal">
              <div className="hero-watch-inner">
                <div className="hero-watch-time">
                  {watchTime || '--:--:--'}
                </div>
                <div className="hero-watch-date">
                  {watchDate || '---'}
                </div>
              </div>
            </div>

            {/* Name */}
            <h1 className="hero-name">{nameText || 'Newton Adhikari'}</h1>

            {/* Typing roles */}
            <div className="hero-typing">
              {typedText}
              <span className="cursor" />
            </div>

            {/* Tagline */}
            <p className="hero-tagline">
              Building futuristic AI systems and immersive digital experiences
            </p>

            {/* Stats */}
            <div className="hero-stats">
              <div className="hero-stat">
                <div className="hero-stat-value">10+</div>
                <div className="hero-stat-label">Projects</div>
              </div>
              <div className="hero-stat">
                <div className="hero-stat-value">15+</div>
                <div className="hero-stat-label">Technologies</div>
              </div>
              <div className="hero-stat">
                <div className="hero-stat-value">5+</div>
                <div className="hero-stat-label">Research Goals</div>
              </div>
            </div>

            {/* Actions */}
            <div className="hero-actions">
              <a href="Newton_Adhikari_Resume.pdf" target="_blank" rel="noopener noreferrer" className="btn-neon btn-neon-primary">
                ⬇ Download Resume
              </a>
              <button className="btn-neon btn-neon-secondary" onClick={() => handleNavClick('projects')}>
                ◈ View Projects
              </button>
              <button className="btn-neon btn-neon-secondary" onClick={() => handleNavClick('contact')}>
                ✉ Contact Me
              </button>
              <a href="https://github.com/NewtonAdhikari" target="_blank" rel="noopener noreferrer" className="btn-neon btn-neon-secondary">
                ⌘ GitHub
              </a>
              <a href="https://www.linkedin.com/in/newton-adhikari" target="_blank" rel="noopener noreferrer" className="btn-neon btn-neon-secondary">
                ◎ LinkedIn
              </a>
            </div>
          </div>
        </section>

        {/* ═══ MARQUEE ═══ */}
        <div className="marquee-container">
          <div className="marquee-track">
            {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((item, i) => (
              <span key={i} className="marquee-item">
                <span className="dot" />
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* ═══ ABOUT ═══ */}
        <section id="about" className="section-container">
          <h2 className="section-title reveal">About Me</h2>
          <p className="section-subtitle reveal">who i am</p>

          <div className="about-hero reveal">
            <div className="about-hero-image">
              <div className="about-image-wrapper">
                <img src="/profile1.png" alt="Newton Adhikari" />
              </div>
            </div>
            <div className="about-hero-text">
              <h3 className="about-greeting">Hello, I&apos;m <span className="about-name-highlight">Newton Adhikari</span></h3>
              <p className="about-intro">
                A passionate Computer Science &amp; Engineering student and aspiring AI researcher. I thrive at the intersection of
                technology and creativity, building futuristic systems that push the boundaries of what&apos;s possible. My journey is
                driven by an insatiable curiosity for artificial intelligence and a commitment to crafting intelligent digital experiences.
              </p>
              <div className="about-tags">
                <span className="about-tag">🤖 AI Enthusiast</span>
                <span className="about-tag">💻 Full Stack Dev</span>
                <span className="about-tag">🔬 Researcher</span>
                <span className="about-tag">🚀 Innovator</span>
              </div>
            </div>
          </div>

          <div className="about-cards-grid">
            <div className="glass-card about-info-card reveal" style={{ '--card-accent': '#00f0ff' } as React.CSSProperties}>
              <div className="about-info-card-icon">🎓</div>
              <div className="about-info-card-content">
                <div className="about-info-card-title">Education</div>
                <div className="about-info-card-text">
                  Pursuing B.Tech in Computer Science and Engineering. Driven by deep curiosity for artificial intelligence
                  and commitment to mastering computing fundamentals.
                </div>
              </div>
            </div>
            <div className="glass-card about-info-card reveal" style={{ '--card-accent': '#a855f7' } as React.CSSProperties}>
              <div className="about-info-card-icon">🔮</div>
              <div className="about-info-card-content">
                <div className="about-info-card-title">Career Vision</div>
                <div className="about-info-card-text">
                  Goal: become a leading AI researcher building next-generation systems that transform human-technology
                  interaction. Envisioning a future where AI augments human potential.
                </div>
              </div>
            </div>
            <div className="glass-card about-info-card reveal" style={{ '--card-accent': '#22c55e' } as React.CSSProperties}>
              <div className="about-info-card-icon">🧠</div>
              <div className="about-info-card-content">
                <div className="about-info-card-title">AI Passion</div>
                <div className="about-info-card-text">
                  Fascinated by neural networks, AGI, and human-AI interaction. Spending countless hours exploring research
                  papers, experimenting with models, and building AI-powered applications.
                </div>
              </div>
            </div>
            <div className="glass-card about-info-card reveal" style={{ '--card-accent': '#f59e0b' } as React.CSSProperties}>
              <div className="about-info-card-icon">🔬</div>
              <div className="about-info-card-content">
                <div className="about-info-card-title">Research Interests</div>
                <div className="about-info-card-text">
                  AGI · Neural OS · Quantum Computing · Human-AI Interaction · Decentralized AI · AI-Powered Interfaces
                </div>
              </div>
            </div>
           <div className="glass-card about-info-card reveal" style={{ '--card-accent': '#f43f5e' } as React.CSSProperties}>
             <div className="about-info-card-icon">🌐</div>
              <div className="about-info-card-content">
                <div className="about-info-card-title">Community & Networking</div>
                  <div className="about-info-card-text">
                    Collaborating with Developers · Attending Tech Events · Sharing Knowledge · Building Open Source Connections · Exploring Startup Culture · Learning from Tech Communities
                  </div>
                </div>
              </div>
           <div className="glass-card about-info-card reveal" style={{ '--card-accent': '#06b6d4' } as React.CSSProperties}>
              <div className="about-info-card-icon">🚀</div>
               <div className="about-info-card-content">
                  <div className="about-info-card-title">Passion Projects</div>
                     <div className="about-info-card-text">
                       Developing Futuristic Web Experiences · AI-Powered Applications · Experimental Interfaces · Creative Frontend Concepts · Cyberpunk Inspired Designs · Next-Generation Technology Projects
                      </div>
                    </div>
                  </div>
                </div>

          <div className="about-counters reveal">
            <div className="glass-card about-counter">
              <div className="about-counter-value"><AnimatedCounter end={10} triggered={countersTriggered} /></div>
              <div className="about-counter-label">Projects</div>
            </div>
            <div className="glass-card about-counter">
              <div className="about-counter-value"><AnimatedCounter end={15} triggered={countersTriggered} /></div>
              <div className="about-counter-label">Technologies</div>
            </div>
            <div className="glass-card about-counter">
              <div className="about-counter-value"><AnimatedCounter end={50} suffix="+" triggered={countersTriggered} /></div>
              <div className="about-counter-label">Coding Hours</div>
            </div>
            <div className="glass-card about-counter">
              <div className="about-counter-value"><AnimatedCounter end={5} triggered={countersTriggered} /></div>
              <div className="about-counter-label">Research Goals</div>
            </div>
          </div>
        </section>

         {/* ═══ MARQUEE ═══ */}
        <div className="marquee-container">
          <div className="marquee-track">
            {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((item, i) => (
              <span key={i} className="marquee-item">
                <span className="dot" />
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* ═══ SKILLS ═══ */}
        <section id="skills" className="section-container">
          <h2 className="section-title reveal">Skills</h2>
          <p className="section-subtitle reveal">tech stack</p>

          <div className="skills-logo-grid">
            {SKILLS_DATA.map((skill) => (
              <div
                key={skill.name}
                className="glass-card skill-logo-card reveal"
                style={{
                  borderColor: `${skill.color}30`,
                  boxShadow: `inset 0 0 30px ${skill.color}08`,
                } as React.CSSProperties}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = `${skill.color}80`;
                  (e.currentTarget as HTMLElement).style.boxShadow = `0 0 20px ${skill.color}40, inset 0 0 30px ${skill.color}10`;
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = `${skill.color}30`;
                  (e.currentTarget as HTMLElement).style.boxShadow = `inset 0 0 30px ${skill.color}08`;
                }}
              >
                <span className="skill-logo-icon">{skill.icon}</span>
                <span className="skill-logo-name">{skill.name}</span>
              </div>
            ))}
          </div>
        </section>

         {/* ═══ MARQUEE ═══ */}
        <div className="marquee-container">
          <div className="marquee-track">
            {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((item, i) => (
              <span key={i} className="marquee-item">
                <span className="dot" />
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* ═══ EDUCATION ═══ */}
        <section id="education" className="section-container">
          <h2 className="section-title reveal">Education</h2>
          <p className="section-subtitle reveal">academic journey</p>

          <div className="edu-pipeline">
            {/* Vertical connector line */}
            <div className="edu-pipeline-line" />

            {EDUCATION.map((edu, idx) => (
              <div key={idx} className="edu-pipeline-item reveal">
                {/* Node on the line */}
                <div className="edu-pipeline-node" style={{ background: edu.color, boxShadow: `0 0 12px ${edu.color}80, 0 0 24px ${edu.color}40` }}>
                  <span className="edu-pipeline-node-icon">{edu.icon}</span>
                </div>

                {/* Connector arm */}
                <div className="edu-pipeline-connector" style={{ background: `linear-gradient(90deg, ${edu.color}60, transparent)` }} />

                {/* Card */}
                <div className="glass-card edu-card" style={{ '--edu-color': edu.color } as React.CSSProperties}>
                  <div className="edu-card-glow" style={{ background: `radial-gradient(ellipse at top left, ${edu.color}12, transparent 70%)` }} />
                  <div className="edu-card-header">
                    <div className="edu-card-icon-wrap" style={{ background: `${edu.color}15`, borderColor: `${edu.color}30` }}>
                      <span className="edu-card-icon">{edu.icon}</span>
                    </div>
                    <div className="edu-card-meta">
                      <span className="edu-card-period">{edu.period}</span>
                      <span className={`edu-card-status ${edu.status === 'Pursuing' ? 'edu-status-active' : 'edu-status-done'}`}>
                        {edu.status === 'Pursuing' ? '● ' : '✓ '}{edu.status}
                      </span>
                    </div>
                  </div>
                  <div className="edu-card-degree">{edu.degree}</div>
                  <div className="edu-card-institution">{edu.institution}</div>
                  <div className="edu-card-university">{edu.university}</div>
                  <div className="edu-card-board">{edu.board}</div>
                  <div className="edu-card-location">{edu.location}</div>
                  <div className="edu-card-grade" style={{ color: edu.color }}>{edu.grade}</div>
                  <div className="edu-card-desc">{edu.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

         {/* ═══ MARQUEE ═══ */}
        <div className="marquee-container">
          <div className="marquee-track">
            {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((item, i) => (
              <span key={i} className="marquee-item">
                <span className="dot" />
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* ═══ PROJECTS ═══ */}
        <section id="projects" className="section-container">
          <h2 className="section-title reveal">Projects</h2>
          <p className="section-subtitle reveal">what i have built</p>

          <div className="projects-grid">
            {PROJECTS.map((project, idx) => (
              <div key={idx} className="glass-card project-card reveal">
                <div className="card-spotlight" />
                <div className="project-card-inner">
                  <div className="project-preview">
                    <img
                      src={project.image}
                      alt={project.title}
                      style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '12px', opacity: 0.7 }}
                    />
                  </div>
                  <div className="project-title">{project.title}</div>
                  <div className="project-desc">{project.desc}</div>
                  <div className="project-tags">
                    {project.tags.map((tag) => (
                      <span key={tag} className="project-tag">{tag}</span>
                    ))}
                  </div>
                  <div className="project-links">
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-btn project-btn-github">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                      GitHub
                    </a>
                    <a href={project.demo} target="_blank" rel="noopener noreferrer" className="project-btn project-btn-demo">
                      ▶ Live Demo
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

         {/* ═══ MARQUEE ═══ */}
        <div className="marquee-container">
          <div className="marquee-track">
            {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((item, i) => (
              <span key={i} className="marquee-item">
                <span className="dot" />
                {item}
              </span>
            ))}
          </div>
        </div>

       {/* ═══ RESEARCH ═══ */}
        <section id="research" className="section-container">
          <h2 className="section-title reveal">Research</h2>
          <p className="section-subtitle reveal">exploring the future</p>

            <div className="research-grid">
              {RESEARCH.map((item, idx) => (
              <div
                key={idx}
                className="glass-card research-card reveal"
                style={{ '--research-color': item.color } as React.CSSProperties}
              >
              <div
                className="research-icon-wrapper"
                style={{
                 background: `${item.color}15`,
                  borderColor: `${item.color}30`
                }}
                >
                <span className="research-icon-emoji">{item.icon}</span>
              </div>

            {/* Status Badge */}
            <div
            className={`research-status ${
              item.status === 'Published'
                ? 'published'
                : item.status === 'Patent'
                ? 'patent'
                : 'under-publication'
            }`}
          >
            {item.status}
          </div>

          <div className="research-title">{item.title}</div>
            <div className="research-desc">{item.desc}</div>

              <div
                className="research-glow"
                style={{
                   background: `radial-gradient(circle at 50% 0%, ${item.color}15, transparent 70%)`
                }}
              />
              </div>
            ))}
          </div>
        </section>

         {/* ═══ MARQUEE ═══ */}
        <div className="marquee-container">
          <div className="marquee-track">
            {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((item, i) => (
              <span key={i} className="marquee-item">
                <span className="dot" />
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* ═══ CERTIFICATIONS ═══ */}
        <section id="certifications" className="section-container">
          <h2 className="section-title reveal">Certifications</h2>
          <p className="section-subtitle reveal">credentials</p>

          <div className="cert-slideshow reveal">
            <button className="cert-nav cert-nav-prev" onClick={() => setCertIndex((certIndex - 1 + CERTS.length) % CERTS.length)} aria-label="Previous">&#8249;</button>
            <div className="cert-slide-wrapper">
              <div className="cert-slide" key={certIndex}>
                <div className="cert-slide-image">
                  <img src={CERTS[certIndex].image} alt={CERTS[certIndex].title} onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }} />
                </div>
                <div className="cert-slide-info">
                  <div className="cert-slide-title">{CERTS[certIndex].title}</div>
                  <div className="cert-slide-issuer">{CERTS[certIndex].issuer}</div>
                </div>
              </div>
            </div>
            <button className="cert-nav cert-nav-next" onClick={() => setCertIndex((certIndex + 1) % CERTS.length)} aria-label="Next">&#8250;</button>
          </div>
          <div className="cert-dots">
            {CERTS.map((_, i) => (
              <button key={i} className={`cert-dot ${i === certIndex ? 'active' : ''}`} onClick={() => setCertIndex(i)} aria-label={`Go to slide ${i + 1}`} />
            ))}
          </div>
        </section>

          {/* ═══ MARQUEE ═══ */}
        <div className="marquee-container">
          <div className="marquee-track">
            {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((item, i) => (
              <span key={i} className="marquee-item">
                <span className="dot" />
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* ═══ CONTACT ═══ */}
        <section id="contact" className="section-container">
          <h2 className="section-title reveal">Get in Touch</h2>
          <p className="section-subtitle reveal">Contact</p>

          <div className="contact-grid">
            <form className="contact-form reveal" onSubmit={handleFormSubmit}>
              {/* Form header */}
              <div className="form-header">
                <div className="form-header-icon">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/><rect x="2" y="4" width="20" height="16" rx="2"/></svg>
                </div>
                <div>
                  <div className="form-header-title">Send a Message</div>
                  <div className="form-header-desc">Fill out the form and I&apos;ll get back to you soon</div>
                </div>
              </div>

              {/* Name + Email row */}
              <div className="form-row">
                <div className="form-field">
                  <label className="form-label" htmlFor="contact-name">Name <span className="form-required">*</span></label>
                  <div className="form-input-wrap">
                    <span className="form-input-icon">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                    </span>
                    <input
                      id="contact-name"
                      className="contact-input"
                      type="text"
                      placeholder="Your Name"
                      value={formState.name}
                      onChange={(e) => handleFormChange('name', e.target.value)}
                      disabled={formStatus === 'sending'}
                    />
                  </div>
                </div>
                <div className="form-field">
                  <label className="form-label" htmlFor="contact-email">Email <span className="form-required">*</span></label>
                  <div className="form-input-wrap">
                    <span className="form-input-icon">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                    </span>
                    <input
                      id="contact-email"
                      className="contact-input"
                      type="email"
                      placeholder="example@email.com"
                      value={formState.email}
                      onChange={(e) => handleFormChange('email', e.target.value)}
                      disabled={formStatus === 'sending'}
                    />
                  </div>
                </div>
              </div>

              {/* Subject */}
              <div className="form-field">
                <label className="form-label" htmlFor="contact-subject">Subject</label>
                <div className="form-input-wrap">
                  <span className="form-input-icon">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z"/></svg>
                  </span>
                  <input
                    id="contact-subject"
                    className="contact-input"
                    type="text"
                    placeholder="Project Inquiry"
                    value={formState.subject}
                    onChange={(e) => handleFormChange('subject', e.target.value)}
                    disabled={formStatus === 'sending'}
                  />
                </div>
              </div>

              {/* Message */}
              <div className="form-field">
                <label className="form-label" htmlFor="contact-message">Message <span className="form-required">*</span></label>
                <textarea
                  id="contact-message"
                  className="contact-textarea"
                  placeholder="Tell me about your project..."
                  value={formState.message}
                  onChange={(e) => handleFormChange('message', e.target.value)}
                  disabled={formStatus === 'sending'}
                  rows={5}
                />
              </div>

              {/* Captcha */}
              <div className="form-field">
                <label className="form-label">Verify you&apos;re human <span className="form-required">*</span></label>
                <div className="captcha-row">
                  <div className="captcha-challenge">
                    <div className="captcha-lock-icon">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
                    </div>
                    <span className="captcha-equation">{captchaNums.a} + {captchaNums.b} = ?</span>
                  </div>
                  <input
                    className="contact-input captcha-input"
                    type="number"
                    placeholder="Answer"
                    value={captchaAnswer}
                    onChange={(e) => setCaptchaAnswer(e.target.value)}
                    disabled={formStatus === 'sending'}
                  />
                  <button type="button" className="captcha-refresh" onClick={generateCaptcha} title="New captcha" disabled={formStatus === 'sending'}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"/><path d="M21 3v5h-5"/><path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"/><path d="M8 16H3v5"/></svg>
                  </button>
                </div>
              </div>

              {formMessage && (
                <div className={`form-status ${formStatus === 'success' ? 'form-status-success' : 'form-status-error'}`}>
                  <span className="form-status-icon">{formStatus === 'success' ? '✓' : '!'}</span>
                  {formMessage}
                </div>
              )}

              <button
                type="submit"
                className={`contact-send-btn ${formStatus === 'sending' ? 'sending' : ''} ${formStatus === 'success' ? 'success' : ''}`}
                disabled={formStatus === 'sending'}
              >
                {formStatus === 'sending' ? (
                  <>
                    <span className="btn-spinner" /> Transmitting...
                  </>
                ) : formStatus === 'success' ? (
                  '✓ Message Sent!'
                ) : (
                  <>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ display: 'inline-block', verticalAlign: 'middle', marginRight: '0.4rem' }}><path d="m22 2-7 20-4-9-9-4Z"/><path d="M22 2 11 13"/></svg>
                    Send Message
                  </>
                )}
              </button>
            </form>

            <div className="contact-socials reveal">
              <a href="https://github.com/NewtonAdhikari" target="_blank" rel="noopener noreferrer" className="glass-card social-card">
                <div className="social-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>
                </div>
                <div>
                  <div className="social-label">GitHub</div>
                  <div className="social-value">NewtonAdhikari</div>
                </div>
              </a>
              <a href="https://www.linkedin.com/in/newton-adhikari" target="_blank" rel="noopener noreferrer" className="glass-card social-card">
                <div className="social-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
                </div>
                <div>
                  <div className="social-label">LinkedIn</div>
                  <div className="social-value">newton-adhikari</div>
                </div>
              </a>
              <a href="mailto:newtonadhikari23@gmail.com" className="glass-card social-card">
                <div className="social-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                </div>
                <div>
                  <div className="social-label">Email</div>
                  <div className="social-value">newtonadhikari23@gmail.com</div>
                </div>
              </a>
              <a href="https://twitter.com/newton_adhi2722" target="_blank" rel="noopener noreferrer" className="glass-card social-card">
                <div className="social-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4l11.733 16h4.267l-11.733 -16h-4.267z"/><path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772"/></svg>
                </div>
                <div>
                  <div className="social-label">X / Twitter</div>
                  <div className="social-value">@newton_adhi2722</div>
                </div>
              </a>
              <a href="https://www.instagram.com/victorix_newton" target="_blank" rel="noopener noreferrer" className="glass-card social-card">
                <div className="social-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="5"/><circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none"/></svg>
                </div>
                <div>
                  <div className="social-label">Instagram</div>
                  <div className="social-value">@victorix_newton</div>
                </div>
              </a>
              <a href="https://www.facebook.com/newton.adhikari.501510" target="_blank" rel="noopener noreferrer" className="glass-card social-card">
                <div className="social-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
                </div>
                <div>
                  <div className="social-label">Facebook</div>
                  <div className="social-value">Newton Adhikari</div>
                </div>
              </a>
              <a href="https://wa.me/919398350151" target="_blank" rel="noopener noreferrer" className="glass-card social-card">
                <div className="social-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>
                </div>
                <div>
                  <div className="social-label">WhatsApp</div>
                  <div className="social-value">+91 93983 50151</div>
                </div>
              </a>
            </div>
          </div>
        </section>
      
         {/* ═══ MARQUEE ═══ */}
        <div className="marquee-container">
          <div className="marquee-track">
            {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((item, i) => (
              <span key={i} className="marquee-item">
                <span className="dot" />
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* ═══ FOOTER ═══ */}
        <footer className="footer">
          {/* Glowing wave top border */}
          <div className="footer-wave">
            <svg viewBox="0 0 1440 120" preserveAspectRatio="none">
              <defs>
                <linearGradient id="footerWaveGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" style={{ stopColor: 'var(--neon)', stopOpacity: 0.1 }} />
                  <stop offset="50%" style={{ stopColor: 'var(--neon)', stopOpacity: 0.6 }} />
                  <stop offset="100%" style={{ stopColor: 'var(--neon)', stopOpacity: 0.1 }} />
                </linearGradient>
              </defs>
              <path d="M0,60 C360,120 720,0 1080,60 C1260,90 1380,40 1440,60 L1440,120 L0,120 Z" fill="url(#footerWaveGrad)" opacity="0.3" />
              <path d="M0,80 C360,20 720,100 1080,40 C1260,20 1380,70 1440,50 L1440,120 L0,120 Z" fill="url(#footerWaveGrad)" opacity="0.15" />
            </svg>
          </div>

          <div className="footer-content">
            {/* Logo & tagline */}
            <div className="footer-brand">
              <div className="footer-logo-ring">
                <div className="footer-logo">N_A</div>
              </div>
              <div className="footer-tagline">Crafting the Future With Passion</div>
            </div>

            {/* Glowing divider */}
            <div className="footer-divider">
              <span className="footer-divider-dot" />
              <span className="footer-divider-line" />
              <span className="footer-divider-dot" />
            </div>

            {/* Social links with labels */}
            <div className="footer-socials">
              <a href="https://github.com/NewtonAdhikari" target="_blank" rel="noopener noreferrer" className="footer-social-link" aria-label="GitHub">
                <span className="footer-social-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>
                </span>
                <span className="footer-social-label">GitHub</span>
              </a>
              <a href="https://www.linkedin.com/in/newton-adhikari" target="_blank" rel="noopener noreferrer" className="footer-social-link" aria-label="LinkedIn">
                <span className="footer-social-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
                </span>
                <span className="footer-social-label">LinkedIn</span>
              </a>
              <a href="mailto:newtonadhikari23@gmail.com" className="footer-social-link" aria-label="Email">
                <span className="footer-social-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                </span>
                <span className="footer-social-label">Email</span>
              </a>
              <a href="https://twitter.com/newton_adhi2722" target="_blank" rel="noopener noreferrer" className="footer-social-link" aria-label="X / Twitter">
                <span className="footer-social-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4l11.733 16h4.267l-11.733 -16h-4.267z"/><path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772"/></svg>
                </span>
                <span className="footer-social-label">X</span>
              </a>
              <a href="https://www.instagram.com/victorix_newton" target="_blank" rel="noopener noreferrer" className="footer-social-link" aria-label="Instagram">
                <span className="footer-social-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="5"/><circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none"/></svg>
                </span>
                <span className="footer-social-label">Instagram</span>
              </a>
              <a href="https://www.facebook.com/newton.adhikari.501510" target="_blank" rel="noopener noreferrer" className="footer-social-link" aria-label="Facebook">
                <span className="footer-social-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
                </span>
                <span className="footer-social-label">Facebook</span>
              </a>
              <a href="https://wa.me/919398350151" target="_blank" rel="noopener noreferrer" className="footer-social-link" aria-label="WhatsApp">
                <span className="footer-social-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>
                </span>
                <span className="footer-social-label">WhatsApp</span>
              </a>
            </div>

            {/* Footer bottom row */}
            <div className="footer-bottom">
              <div className="footer-text">Designed &amp; Built by <span className="footer-name">Newton Adhikari</span></div>
              <div className="footer-subtext">&copy; {new Date().getFullYear()} · All Rights Reserved by Newton Adhikari</div>
            </div>
          </div>

          {/* Back to top */}
          <button className="footer-back-top" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} aria-label="Back to top">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m18 15-6-6-6 6"/></svg>
          </button>
        </footer>
      </main>

      {/* ═══ BOTTOM DOCK NAV ═══ */}
      <nav className="bottom-dock" aria-label="Main navigation">
        {NAV_ITEMS.map((item) => (
          <div
            key={item.id}
            ref={(el) => { dockItemRefs.current[NAV_ITEMS.indexOf(item)] = el; }}
            className={`dock-item ${activeSection === item.id ? 'active' : ''}`}
            onClick={() => handleNavClick(item.id)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => { if (e.key === 'Enter') handleNavClick(item.id); }}
          >
            <span>{item.icon}</span>
            <span className="dock-label">{item.label}</span>
          </div>
        ))}
      </nav>

      {/* ═══ THEME PICKER ═══ */}
      <div
        className={`theme-picker-overlay ${themeOpen ? 'open' : ''}`}
        onClick={() => setThemeOpen(false)}
      >
        <div className="theme-picker" onClick={(e) => e.stopPropagation()}>
          <div className="theme-picker-title">Choose Theme</div>
          <div className="theme-options">
            {THEMES.map((theme) => (
              <div
                key={theme.id}
                className={`theme-option ${currentTheme === theme.id ? 'active' : ''}`}
                onClick={() => applyTheme(theme.id)}
              >
                <div className="theme-color-dot" style={{ backgroundColor: theme.color, color: theme.color }} />
                <div className="theme-option-name">{theme.name}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
