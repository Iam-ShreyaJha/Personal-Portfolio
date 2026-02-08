// import React, { useState, useEffect, useRef } from 'react';
// import { 
//   Menu, X, Globe, Code, Briefcase, User, Mail, Zap, Sun, Moon, 
//   Linkedin, Github, FileText, ArrowLeft, ArrowRight, ArrowUp, 
//   Send, CheckCircle, MapPin, AtSign, BookOpen, Monitor, ArrowDown, 
//   Server, Heart, Sparkles, Award, ExternalLink, Library, Rocket, Star, Users, PenTool, Lightbulb
// } from 'lucide-react';
// import { useSpring, animated } from '@react-spring/web';
// import * as THREE from 'three';

// // --- DATA CONFIGURATION ---
// const PORTFOLIO_DATA = {
//   name: "Shreya Jha",
//   title: "B.Tech CSE Student | Full-Stack Developer",
//   tagline: "Building digital gardens with clean code and sunshine aesthetics.",
//   techStack: ["Java", "JavaScript", "React.js", "Redux", "Node.js", "REST APIs", "JWT", "MySQL", "MongoDB", "Git"],
//   rotatingSkills: [
//     { text: "DSA & OOP", icon: Code },
//     { text: "DBMS", icon: Server },
//     { text: "SIH Finalist 2025", icon: Globe }
//   ],
//   aboutContent: {
//     description: "A problem-solver at heart and a full-stack developer by craft. I design and develop scalable web applications using React, Redux, Node.js, REST APIs, and MySQL, while continuously sharpening my skills in data structures and object-oriented programming.",
//     journey: [
//       { title: "Industry Exposure", desc: "Gained hands-on experience building and maintaining full-stack web applications during my internship cum training." },
//       { title: "SIH 2025 Finalist", desc: "Worked with team on a real-world cyber security problem for the Ministry of Defence." }
//     ]
//   },
//   learningSources: [
//     { 
//       name: "LeetCode", 
//       desc: "Solving complex algorithmic challenges & improving logic.", 
//       status: "Active Coder",
//       color: "text-yellow-500", 
//       link: "https://leetcode.com/u/Shreya-12_Jha/" 
//     },
//     { 
//       name: "GeeksforGeeks", 
//       desc: "Mastering Data Structures, Algorithms & CS Fundamentals.", 
//       status: "Verified Profile",
//       color: "text-green-500", 
//       link: "https://www.geeksforgeeks.org/profile/jhashreb6y9" 
//     },
//     { 
//       name: "W3Schools", 
//       desc: "Tracking my technical learning paths and web progress.", 
//       status: "Learning Path",
//       color: "text-green-400", 
//       link: "https://pathfinder.w3schools.com/my-progress" 
//     }
//   ],
//   certifications: [
//     { 
//       title: "Oracle Certified Foundations Associate", 
//       provider: "Oracle University", 
//       desc: "Foundation in AI concepts and Oracle Cloud Infrastructure.",
//       learnings: ["AI Foundations", "OCI Fundamentals", "Cloud Security Basics"],
//       image: "/oracle_cert.png", 
//       date: "Oct 27, 2025",
//       type: 'cert'
//     },
//     { 
//       title: "Advanced Software Engineering Job Simulation", 
//       provider: "Walmart Global Tech", 
//       desc: "Completed practical tasks in software architecture and data structures.",
//       learnings: ["Advanced Data Structures", "Software Architecture", "Relational Database Design"],
//       image: "/walmart_cert.png", 
//       date: "July 16, 2025",
//       type: 'cert'
//     },
//     { 
//       title: "Introduction To UI/UX", 
//       provider: "Infosys Springboard", 
//       desc: "Deep dive into user-centric design principles and prototyping.",
//       learnings: ["User Experience Research", "Wireframing", "Interaction Design"],
//       image: "/uiux_cert.png", 
//       date: "June 16, 2025",
//       type: 'cert'
//     },
//     { 
//       title: "Soft Skills - Professional Development", 
//       provider: "GeeksforGeeks", 
//       desc: "4-week intensive training on complete professional development.",
//       learnings: ["Professional Communication", "Workplace Ethics", "Personality Development"],
//       image: "/gfg_cert.png", 
//       date: "July 2025",
//       type: 'cert'
//     }
//   ],
//   extraCurricular: [
//     {
//     role: "Student Placement Coordinator",
//     org: "IMS Engineering College (Batch 2025–26)",
//     desc: "Supported placement coordination for the 2025–26 batch by managing data for 500+ students, acting as an intermediary between the placement cell and companies, and assisting in the smooth execution of campus placement drives.",
//     learnings: ["Coordination", "Data Management", "Professional Communication"],
//     icon: <Users size={24}/>
//     },
//     {
//     role: "Editorial Lead",
//     org: "Campus Chronicles (CSE Dept. Magazine)",
//     desc: "Led content planning and visual layout for the CSE department’s flagship magazine, Campus Chronicles. Coordinated with junior members by assigning tasks, reviewing submissions, and ensuring consistency in design and storytelling.",
//     learnings: ["Content Strategy", "Creative Direction", "Team Coordination"],
//     icon: <PenTool size={24}/>
//     },
//     {
//     role: "IDE Bootcamp Attendee",
//     org: "GITS Udaipur (1-Week Program)",
//     desc: "Participated in a one-week IDE Bootcamp focused on startup fundamentals, product ideation, and pitch presentation, gaining exposure to entrepreneurial thinking and innovation-driven problem solving.",
//     learnings: ["Product Ideation", "Startup Fundamentals", "Pitch Presentation"],
//     icon: <Lightbulb size={24}/>
//     },
//     {
//     role: "Task Master (1st Position)",
//     org: "Runtime Hackers Coding Club",
//     desc: "Achieved first position in club-level coding challenges through consistent performance in logic-based problem solving and competitive programming tasks.",
//     learnings: ["Analytical Thinking", "Algorithmic Problem Solving", "Competitive Programming"],
//     icon: <Award size={24}/>
//     }
//   ],
//   skills: [
//     { id: 'frontend', title: "Frontend", icon: <Code />, items: [["React.js", 90], ["Redux", 85], ["HTML/CSS", 85]] },
//     { id: 'backend', title: "Backend", icon: <Zap />, items: [["Node.js", 85], ["Express.js", 80], ["JWT", 80]] },
//     { id: 'database', title: "Database", icon: <Globe />, items: [["MySQL", 85], ["MongoDB", 80], ["REST APIs", 85]] },
//     { id: 'programming', title: "Programming and CS Fundamentals", icon: <Code />, items: [["Java", 90], ["SDLC", 85], ["DSA/OOP", 85]] }
//   ],
//   education: [
//     { year: "2022-2026", degree: "B.Tech in Computer Science & Engineering", institution: "IMS Engineering College", gpa: "8.1" },
//     { year: "2021-2022", degree: "Intermediate (12th Grade)", institution: "Modern School", percentage: "80.33%" },
//     { year: "2019-2020", degree: "Intermediate (10th Grade)", institution: "Modern School", percentage: "90.16%" },
//   ],
//   projects: [
//     { id: 1, title: "Campus Learns", desc: "An academic resource hub that reduces confusion and information overload by bringing notes, updates, and learning materials together into a single, easily accessible platform for students.", mockup: "/CampusLearns.png", repo: "https://github.com/Iam-ShreyaJha/Campus-Learns" },
//     { id: 3, title: "Email Validator", desc: "A utility tool that instantly checks whether an email address is valid and properly formatted, helping prevent incorrect submissions, fake sign-ups, and communication failures before data is stored or used.", mockup: "/EmailValidator.png", repo: "https://github.com/Iam-ShreyaJha/Email-Validator" },
//     { id: 5, title: "URL Shortener", desc: "A practical platform that transforms lengthy URLs into compact links for better sharing and presentation.\nUseful for managing multiple links and maintaining a clean, user-friendly experience", mockup: "/URL_Shortener.png", repo: "https://github.com/Iam-ShreyaJha/URL-Shortener" }
//   ],
//   contact: { email: "jhashreya0205@gmail.com", linkedin: "https://www.linkedin.com/in/shreyajha12/", github: "https://github.com/Iam-ShreyaJha", resume: "/ShreyaResume.pdf" }
// };

// const DynamicBackground = ({ theme }) => {
//   const mountRef = useRef(null);
//   useEffect(() => {
//     if (!mountRef.current) return;
//     const scene = new THREE.Scene();
//     const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
//     const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
//     renderer.setSize(window.innerWidth, window.innerHeight);
//     mountRef.current.appendChild(renderer.domElement);
//     const particles = [];
//     const isLight = theme === 'light';
//     const colors = isLight ? [0xff69b4, 0xffd700, 0xffc0cb] : [0xffd700, 0xffa500, 0xffffff];
//     const geom = isLight ? new THREE.TorusKnotGeometry(0.15, 0.04, 64, 8, 2, 3) : new THREE.TorusKnotGeometry(0.08, 0.03, 64, 8, 2, 3);
//     for (let i = 0; i < 150; i++) {
//       const mat = new THREE.MeshBasicMaterial({ color: colors[i % colors.length], transparent: true, opacity: 0.5, side: THREE.DoubleSide });
//       const mesh = new THREE.Mesh(geom, mat);
//       mesh.position.set(Math.random() * 40 - 20, Math.random() * 40 - 20, Math.random() * 10 - 5);
//       mesh.userData = { vy: Math.random() * 0.02 + 0.005, vr: Math.random() * 0.015 };
//       particles.push(mesh);
//       scene.add(mesh);
//     }
//     camera.position.z = 10;
//     const animate = () => {
//       requestAnimationFrame(animate);
//       particles.forEach(p => {
//         p.position.y -= p.userData.vy;
//         p.rotation.z += p.userData.vr;
//         if (p.position.y < -15) p.position.y = 15;
//       });
//       renderer.render(scene, camera);
//     };
//     animate();
//     return () => { renderer.dispose(); if (mountRef.current) mountRef.current.innerHTML = ""; };
//   }, [theme]);
//   const bgGradient = theme === 'light' ? "from-[#fff0f3] via-white to-[#fff0f3]" : "from-[#120a00] via-[#000000] to-[#120a00]";
//   return <div ref={mountRef} className={`fixed inset-0 z-0 bg-gradient-to-br ${bgGradient} pointer-events-none transition-colors duration-700`} />;
// };

// const SkillProgressBar = ({ name, percentage, theme }) => {
//   const isLight = theme === 'light';
//   const props = useSpring({ width: `${percentage}%`, from: { width: '0%' } });
//   return (
//     <div className="mb-4">
//       <div className={`flex justify-between mb-1 text-xs font-bold uppercase ${isLight ? 'text-gray-500' : 'text-gray-400'}`}>
//         <span>{name}</span><span>{percentage}%</span>
//       </div>
//       <div className={`w-full ${isLight ? 'bg-pink-100/50' : 'bg-white/5'} rounded-full h-1.5`}>
//         <animated.div className={`h-1.5 rounded-full ${isLight ? 'bg-pink-500' : 'bg-yellow-500'}`} style={props} />
//       </div>
//     </div>
//   );
// };

// const App = () => {
//   const [theme, setTheme] = useState('dark');
//   const [selectedItem, setSelectedItem] = useState(null);
//   const [skillIdx, setSkillIdx] = useState(0);
//   const isLight = theme === 'light';

//   useEffect(() => {
//     const timer = setInterval(() => setSkillIdx(p => (p + 1) % PORTFOLIO_DATA.rotatingSkills.length), 3000);
//     return () => clearInterval(timer);
//   }, []);

//   const playSound = () => {
//     const audio = new Audio('https://assets.mixkit.co/active_storage/sfx/2568/2568-preview.mp3');
//     audio.volume = 0.03;
//     audio.play().catch(() => {});
//   };

//   const accentColor = isLight ? 'text-pink-600' : 'text-yellow-500';
//   const accentBg = isLight ? 'bg-pink-500' : 'bg-yellow-600';
//   const CurrentIcon = PORTFOLIO_DATA.rotatingSkills[skillIdx].icon;

//   return (
//     <div className={`min-h-screen transition-colors duration-700 ${isLight ? 'text-gray-900' : 'text-white'} font-sans`}>
//       <DynamicBackground theme={theme} />
      
//       {/* NAVBAR */}
//       <nav className={`fixed top-0 w-full z-[100] px-8 py-6 flex justify-between items-center backdrop-blur-xl border-b transition-all ${isLight ? 'bg-white/70 border-pink-100' : 'bg-black/60 border-white/5'}`}>
//         <div className="flex items-center gap-4">
//   <div
//     className={`w-12 h-12 rounded-xl flex items-center justify-center text-xl font-black tracking-widest
//     ${isLight ? 'bg-pink-100 text-pink-600' : 'bg-yellow-500/10 text-yellow-500'}`}
//   >
//     SJ
//   </div>
// </div>
//         <div className={`hidden md:flex gap-10 text-base font-extrabold uppercase tracking-widest ${isLight ? 'text-gray-700' : 'text-gray-300'}`}>
//           <a href="#about" onMouseEnter={playSound} className={`hover:${accentColor} transition-colors`}>About</a>
//           <a href="#skills" onMouseEnter={playSound} className={`hover:${accentColor} transition-colors`}>Skills</a>
//           <a href="#learning" onMouseEnter={playSound} className={`hover:${accentColor} transition-colors`}>Learning</a>
//           <a href="#certifications" onMouseEnter={playSound} className={`hover:${accentColor} transition-colors`}>Certifications</a>
//           <a href="#projects" onMouseEnter={playSound} className={`hover:${accentColor} transition-colors`}>Work</a>
//         </div>
//         <div className="flex items-center gap-6">
//           <button onClick={() => setTheme(isLight ? 'dark' : 'light')} className={`p-3 rounded-xl transition-all ${isLight ? 'bg-pink-100 text-pink-600' : 'bg-white/5 text-yellow-500'}`}>
//             {isLight ? <Moon size={20}/> : <Sun size={20}/>}
//           </button>
//           <a href={PORTFOLIO_DATA.contact.resume} download className={`px-6 py-3 rounded-xl text-xs font-black text-white shadow-lg ${accentBg}`}>RESUME</a>
//         </div>
//       </nav>

//       <main className="relative z-10 pt-20">
//         {/* HERO SECTION */}
//         <section className="h-[90vh] flex flex-col items-center justify-center text-center px-4">
//           <div className={`mb-6 px-6 py-2 rounded-full text-xs font-black border ${isLight ? 'bg-pink-100 text-pink-600 border-pink-200' : 'bg-yellow-500/10 text-yellow-400 border-yellow-500/20'}`}>SIH FINALIST 2025</div>
//           <h1 className={`text-7xl md:text-[11rem] font-black leading-none mb-4 uppercase tracking-tighter ${isLight ? 'text-pink-600' : 'text-white'}`}>SHREYA JHA</h1>
//           <div className={`flex items-center gap-4 border-2 px-10 py-5 rounded-3xl mb-8 backdrop-blur-md ${isLight ? 'bg-white/50 border-pink-100' : 'bg-white/5 border-white/10'}`}>
//             <CurrentIcon className={accentColor} size={32} />
//             <span className="text-3xl font-black tracking-widest uppercase">{PORTFOLIO_DATA.rotatingSkills[skillIdx].text}</span>
//           </div>
//           <div className={`mt-20 animate-bounce ${accentColor}`}><ArrowDown size={40} /></div>
//         </section>

//         {/* ABOUT SECTION - RESTORED WITH PHOTOGRAPH */}
//         <section id="about" className="py-32 px-6 max-w-7xl mx-auto">
//           <div className="grid lg:grid-cols-2 gap-20 items-center">
//             <div className={`relative rounded-[4rem] overflow-hidden border-4 aspect-[4/5] shadow-2xl transition-transform hover:scale-[1.02] ${isLight ? 'border-pink-100' : 'border-white/5'}`}>
//              <img src="/Shreya-Photograph.jpg" alt="Shreya Jha" className="w-full h-full object-cover transition-all duration-700"/>

//               <div className={`absolute inset-0 bg-gradient-to-t opacity-10 ${isLight ? 'from-pink-200' : 'from-black'}`}></div>
//             </div>
//             <div>
//               <h2 className={`text-6xl font-black mb-10 tracking-tighter uppercase ${accentColor}`}>The Person <br/> Behind The Code</h2>
//               <p className={`text-2xl font-bold leading-relaxed mb-12 ${isLight ? 'text-gray-600' : 'text-gray-400'}`}>
//                 {PORTFOLIO_DATA.aboutContent.description}
//               </p>
//               <div className="grid gap-6">
//                 {PORTFOLIO_DATA.aboutContent.journey.map((item, i) => (
//                   <div key={i} className={`p-8 rounded-[2.5rem] border transition-all hover:translate-x-4 ${isLight ? 'bg-white border-pink-50 shadow-lg' : 'bg-white/5 border-white/10'}`}>
//                     <h4 className={`text-sm font-black uppercase tracking-widest mb-2 ${accentColor}`}>{item.title}</h4>
//                     <p className="font-bold text-lg">{item.desc}</p>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* EDUCATION & TECH ARSENAL (ORDER SWAPPED AS REQUESTED) */}
//         <section id="skills" className="py-32 max-w-7xl mx-auto px-6">
//             {/* EDUCATION TOP */}
//             <div className="mb-32">
//               <h2 className={`text-5xl font-black mb-16 uppercase tracking-tighter ${isLight ? 'text-pink-700' : 'text-yellow-500'}`}>Education</h2>
//               <div className={`space-y-12 border-l-4 pl-10 ${isLight ? 'border-pink-200' : 'border-white/10'}`}>
//                 {PORTFOLIO_DATA.education.map((edu, i) => (
//                   <div key={i} className="relative group">
//                     <div className={`absolute -left-[54px] top-1 w-8 h-8 rounded-full transition-all group-hover:scale-125 ${accentBg}`}/>
//                     <span className={`font-black tracking-[0.2em] text-sm ${accentColor}`}>{edu.year}</span>
//                     <h3 className="text-3xl font-black mt-2 uppercase">{edu.degree}</h3>
//                     <p className={`text-lg font-bold ${isLight ? 'text-gray-500' : 'text-gray-400'}`}>{edu.institution} • {edu.gpa ? `GPA: ${edu.gpa}` : `Percentage: ${edu.percentage}`}</p>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             {/* TECH ARSENAL (2X2 GRID) */}
//             <div>
//               <h2 className={`text-5xl font-black mb-16 uppercase tracking-tighter ${isLight ? 'text-pink-700' : 'text-yellow-500'}`}>Tech Arsenal</h2>
//               <div className="grid md:grid-cols-2 gap-8">
//                 {PORTFOLIO_DATA.skills.map(skill => (
//                   <div key={skill.id} className={`p-8 rounded-[2.5rem] border backdrop-blur-sm transition-all hover:scale-[1.02] ${isLight ? 'bg-white border-pink-100 shadow-xl' : 'bg-black/40 border-white/5 shadow-2xl'}`}>
//                     <div className="flex items-center gap-4 mb-6">
//                       <div className={`p-3 rounded-xl ${isLight ? 'bg-pink-50 text-pink-600' : 'bg-white/5 text-yellow-500'}`}>{React.cloneElement(skill.icon, {size: 24})}</div>
//                       <h3 className="text-xl font-black tracking-tight uppercase">{skill.title}</h3>
//                     </div>
//                     <div className="space-y-2">
//                       {skill.items.map(([name, val]) => (
//                         <SkillProgressBar key={name} name={name} percentage={val} theme={theme} />
//                       ))}
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//         </section>

//         {/* LEARNING GARDEN */}
//         <section id="learning" className="py-32 px-6 max-w-7xl mx-auto text-center">
//             <h2 className={`text-6xl font-black mb-20 tracking-tighter uppercase ${isLight ? 'text-pink-700' : 'text-yellow-500'}`}>Learning Garden</h2>
//             <div className="grid md:grid-cols-3 gap-10">
//                 {PORTFOLIO_DATA.learningSources.map((source, i) => (
//                     <a key={i} href={source.link} target="_blank" rel="noreferrer" className={`group p-12 rounded-[3.5rem] border-2 transition-all hover:-translate-y-3 ${isLight ? 'bg-white border-pink-50 hover:border-pink-200 shadow-xl' : 'bg-white/5 border-transparent hover:border-yellow-500/30'}`}>
//                         <div className={`text-4xl font-black mb-6 ${isLight ? 'text-rose-600' : source.color}`}>{source.name}</div>
//                         <p className={`font-bold text-lg mb-8 leading-relaxed ${isLight ? 'text-gray-500' : 'text-gray-400'}`}>{source.desc}</p>
//                         <div className={`inline-flex items-center gap-3 px-8 py-3 rounded-2xl text-xs font-black uppercase tracking-widest ${isLight ? 'bg-pink-50 text-pink-600' : 'bg-white/5 text-yellow-500'}`}>
//                           <Rocket size={16}/> {source.status}
//                         </div>
//                     </a>
//                 ))}
//             </div>
//         </section>

//         {/* CERTIFICATIONS */}
//         <section id="certifications" className={`py-32 px-6 ${isLight ? 'bg-pink-100/30' : 'bg-yellow-500/[0.02]'}`}>
//             <div className="max-w-7xl mx-auto text-center md:text-left">
//                 <h2 className={`text-6xl font-black mb-20 text-center tracking-tighter uppercase ${isLight ? 'text-pink-700' : 'text-yellow-500'}`}>Certifications</h2>
//                 <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
//                     {PORTFOLIO_DATA.certifications.map((cert, i) => (
//                         <div key={i} className={`group p-8 rounded-[2.5rem] border-2 transition-all flex flex-col justify-between hover:shadow-2xl ${isLight ? 'bg-white border-pink-100' : 'bg-black border-white/10 hover:border-yellow-500/40'}`}>
//                             <div>
//                                 <div className="aspect-video mb-6 overflow-hidden rounded-2xl bg-zinc-800">
//                                    <img src={cert.image} alt={cert.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 opacity-90" />
//                                 </div>
//                                 <h3 className={`text-xl font-black uppercase mb-3 leading-tight ${isLight ? 'text-gray-800' : 'text-white'}`}>{cert.title}</h3>
//                                 <p className={`font-black text-xs tracking-widest mb-6 ${accentColor}`}>{cert.provider}</p>
//                                 <div className="space-y-3 mb-8">
//                                     {cert.learnings.map((point, idx) => (
//                                         <div key={idx} className="flex items-start gap-3 text-xs font-bold text-gray-500 leading-tight">
//                                             <CheckCircle size={14} className="text-green-500 shrink-0"/> {point}
//                                         </div>
//                                     ))}
//                                 </div>
//                             </div>
//                             <button onClick={() => setSelectedItem(cert)} className={`w-full py-4 rounded-2xl text-xs font-black uppercase tracking-widest border-2 transition-all ${isLight ? 'border-pink-200 hover:bg-pink-600 hover:text-white' : 'border-white/10 hover:bg-yellow-500 hover:text-black'}`}>
//                                 View Details
//                             </button>
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         </section>

//         {/* BEYOND CODING */}
//         <section className="py-32 px-6 max-w-7xl mx-auto">
//           <div className={`p-10 md:p-20 rounded-[4rem] border-2 ${isLight ? 'bg-white border-pink-100 shadow-2xl' : 'bg-white/[0.02] border-white/5'}`}>
//             <h2 className={`text-5xl font-black mb-16 tracking-tighter uppercase flex items-center gap-6 ${accentColor}`}>
//               <Star size={48} fill="currentColor"/> Beyond Coding
//             </h2>
//             <div className="grid md:grid-cols-2 gap-16">
//               {PORTFOLIO_DATA.extraCurricular.map((item, i) => (
//                 <div key={i} className="flex gap-8 group">
//                   <div className={`h-20 w-20 shrink-0 rounded-[2rem] flex items-center justify-center transition-all group-hover:rotate-12 ${isLight ? 'bg-pink-100 text-pink-600' : 'bg-yellow-500/10 text-yellow-500'}`}>
//                     {item.icon}
//                   </div>
//                   <div>
//                     <h3 className="text-2xl font-black uppercase mb-2 tracking-tight">{item.role}</h3>
//                     <p className={`font-black text-xs uppercase tracking-widest mb-4 ${isLight ? 'text-pink-400' : 'text-yellow-500/60'}`}>{item.org}</p>
//                     <p className={`text-lg font-bold leading-relaxed mb-6 ${isLight ? 'text-gray-600' : 'text-gray-400'}`}>{item.desc}</p>
//                     <div className="flex flex-wrap gap-2">
//                       {item.learnings.map((skill, idx) => (
//                         <span key={idx} className={`px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest ${isLight ? 'bg-pink-50 text-pink-700' : 'bg-white/5 text-gray-300'}`}>
//                           {skill}
//                         </span>
//                       ))}
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </section>

//         {/* PROJECTS SECTION */}
//         <section id="projects" className="py-32 px-6 max-w-7xl mx-auto">
//           <h2 className={`text-7xl font-black mb-24 text-center tracking-tighter uppercase ${isLight ? 'text-pink-700' : 'text-yellow-500'}`}>Work</h2>
//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
//             {PORTFOLIO_DATA.projects.map(project => (
//               <div key={project.id} className="group cursor-pointer" onClick={() => setSelectedItem({...project, type: 'project'})}>
//                 <div className={`relative overflow-hidden rounded-[3rem] aspect-video mb-8 border-4 transition-all group-hover:rounded-[2rem] ${isLight ? 'bg-white border-pink-100 shadow-xl' : 'bg-zinc-900 border-white/5 shadow-2xl'}`}>
//                   <img src={project.mockup} alt={project.title} className="w-full h-full object-cover opacity-100 group-hover:scale-110 transition-all duration-700" />
//                   <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-8">
//                     <span className="text-white font-black text-xl tracking-tighter uppercase">View Case Study</span>
//                   </div>
//                 </div>
//                 <h3 className={`text-2xl font-black mb-2 uppercase ml-2 tracking-tighter group-hover:${accentColor}`}>{project.title}</h3>
//               </div>
//             ))}
//           </div>
//         </section>

//         {/* FOOTER SECTION */}
//         <section id="contact" className="py-40 px-6 text-center max-w-5xl mx-auto">
//             <h2 className={`text-7xl md:text-[10rem] font-black mb-16 tracking-tighter uppercase leading-none ${accentColor}`}>LET'S CONNECT.</h2>
//             <div className="flex flex-wrap justify-center gap-10 md:gap-20">
//                 <a href={PORTFOLIO_DATA.contact.resume} download className="flex flex-col items-center gap-6 group">
//                     <div className={`p-10 rounded-[2.5rem] transition-all border-4 shadow-2xl group-hover:-rotate-6 ${isLight ? 'bg-pink-50 text-pink-600 border-pink-100 hover:bg-pink-500 hover:text-white' : 'bg-white/5 text-yellow-500 border-white/5 hover:bg-yellow-600 hover:text-black'}`}><FileText size={48}/></div>
//                     <span className="font-black uppercase text-xs tracking-[0.3em]">Resume</span>
//                 </a>
//                 <a href={PORTFOLIO_DATA.contact.linkedin} target="_blank" className="flex flex-col items-center gap-6 group">
//                     <div className={`p-10 rounded-[2.5rem] transition-all border-4 shadow-2xl group-hover:rotate-6 ${isLight ? 'bg-blue-50 text-blue-600 border-blue-100 hover:bg-blue-600 hover:text-white' : 'bg-white/5 text-blue-400 border-white/5 hover:bg-blue-600 hover:text-white'}`}><Linkedin size={48}/></div>
//                     <span className="font-black uppercase text-xs tracking-[0.3em]">LinkedIn</span>
//                 </a>
//                 <a href={`mailto:${PORTFOLIO_DATA.contact.email}`} className="flex flex-col items-center gap-6 group">
//                     <div className={`p-10 rounded-[2.5rem] transition-all border-4 shadow-2xl group-hover:-rotate-6 ${isLight ? 'bg-pink-50 text-pink-600 border-pink-100 hover:bg-pink-500 hover:text-white' : 'bg-white/5 text-yellow-500 border-white/5 hover:bg-yellow-600 hover:text-black'}`}><Mail size={48}/></div>
//                     <span className="font-black uppercase text-xs tracking-[0.3em]">Email</span>
//                 </a>
//             </div>
//         </section>
//       </main>

//       {/* MODAL */}
//       {selectedItem && (
//           <div className="fixed inset-0 z-[200] bg-black/95 flex items-center justify-center p-6 backdrop-blur-xl" onClick={() => setSelectedItem(null)}>
//               <div className={`max-w-5xl w-full rounded-[4rem] border-4 shadow-2xl p-12 overflow-hidden relative ${isLight ? 'bg-white border-pink-200' : 'bg-zinc-900 border-white/10'}`} onClick={e => e.stopPropagation()}>
//                     <button onClick={() => setSelectedItem(null)} className={`absolute top-8 right-8 p-4 rounded-2xl transition-all hover:rotate-90 ${isLight ? 'bg-pink-50 text-pink-600' : 'bg-white/5'}`}><X size={32}/></button>
//                     <div className="grid md:grid-cols-2 gap-16 items-center">
//                         <div className="rounded-[2rem] overflow-hidden border-2 border-white/10">
//                           <img src={selectedItem.image || selectedItem.mockup} alt="" className="w-full object-cover" />
//                         </div>
//                         <div className="text-left">
//                             <h2 className={`text-4xl font-black uppercase mb-6 tracking-tighter ${accentColor}`}>{selectedItem.title}</h2>
//                             <p className={`text-lg font-bold leading-relaxed mb-10 italic ${isLight ? 'text-gray-600' : 'text-gray-300'}`}>"{selectedItem.desc}"</p>
//                             {selectedItem.type === 'project' ? (
//                                <a href={selectedItem.repo} target="_blank" className={`inline-block px-10 py-4 rounded-xl font-black uppercase text-xs tracking-widest text-white ${accentBg}`}>SOURCE CODE</a>
//                             ) : (
//                                <div className="space-y-4">
//                                   <h4 className={`text-sm font-black uppercase tracking-widest ${accentColor}`}>Key Learnings</h4>
//                                   <div className="grid gap-3">
//                                       {selectedItem.learnings.map((l, i) => (
//                                          <div key={i} className="flex items-center gap-3 text-base font-bold text-gray-500"><CheckCircle size={20} className="text-green-500"/> {l}</div>
//                                       ))}
//                                   </div>
//                                 </div>
//                             )}
//                         </div>
//                     </div>
//               </div>
//           </div>
//       )}

//       <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className={`fixed bottom-10 right-10 z-[100] p-5 rounded-2xl shadow-2xl hover:scale-110 active:scale-95 transition-all text-white border-2 border-white/10 ${accentBg}`}><ArrowUp size={24}/></button>
//     </div>
//   );
// };

// export default App;

import React, { useState, useEffect, useRef } from 'react';
import { 
  Menu, X, Globe, Code, Briefcase, User, Mail, Zap, Sun, Moon, 
  Linkedin, Github, FileText, ArrowLeft, ArrowRight, ArrowUp, 
  Send, CheckCircle, MapPin, AtSign, BookOpen, Monitor, ArrowDown, 
  Server, Heart, Sparkles, Award, ExternalLink, Library, Rocket, Star, Users, PenTool, Lightbulb
} from 'lucide-react';
import { useSpring, animated } from '@react-spring/web';
import * as THREE from 'three';

// --- DATA CONFIGURATION ---
const PORTFOLIO_DATA = {
  name: "Shreya Jha",
  title: "B.Tech CSE Student | Full-Stack Developer",
  tagline: "Building digital gardens with clean code and sunshine aesthetics.",
  techStack: ["Java", "JavaScript", "React.js", "Redux", "Node.js", "REST APIs", "JWT", "MySQL", "MongoDB", "Git"],
  rotatingSkills: [
    { text: "DSA & OOP", icon: Code },
    { text: "DBMS", icon: Server },
    { text: "SIH Finalist 2025", icon: Globe }
  ],
  aboutContent: {
    description: "A problem-solver at heart and a full-stack developer by craft. I design and develop scalable web applications using React, Redux, Node.js, REST APIs, and MySQL, while continuously sharpening my skills in data structures and object-oriented programming.",
    journey: [
      { title: "Industry Exposure", desc: "Gained hands-on experience building and maintaining full-stack web applications during my internship cum training." },
      { title: "SIH 2025 Finalist", desc: "Worked with team on a real-world cyber security problem for the Ministry of Defence." }
    ]
  },
  learningSources: [
    { name: "LeetCode", desc: "Solving complex algorithmic challenges & improving logic.", status: "Active Coder", color: "text-yellow-500", link: "https://leetcode.com/u/Shreya-12_Jha/" },
    { name: "GeeksforGeeks", desc: "Mastering Data Structures, Algorithms & CS Fundamentals.", status: "Verified Profile", color: "text-green-500", link: "https://www.geeksforgeeks.org/profile/jhashreb6y9" },
    { name: "W3Schools", desc: "Tracking my technical learning paths and web progress.", status: "Learning Path", color: "text-green-400", link: "https://pathfinder.w3schools.com/my-progress" }
  ],
  certifications: [
    { title: "Oracle Certified Foundations Associate", provider: "Oracle University", desc: "Foundation in AI concepts and Oracle Cloud Infrastructure.", learnings: ["AI Foundations", "OCI Fundamentals", "Cloud Security Basics"], image: "/oracle_cert.png", date: "Oct 27, 2025", type: 'cert' },
    { title: "Advanced Software Engineering Job Simulation", provider: "Walmart Global Tech", desc: "Completed practical tasks in software architecture and data structures.", learnings: ["Advanced Data Structures", "Software Architecture", "Relational Database Design"], image: "/walmart_cert.png", date: "July 16, 2025", type: 'cert' },
    { title: "Introduction To UI/UX", provider: "Infosys Springboard", desc: "Deep dive into user-centric design principles and prototyping.", learnings: ["User Experience Research", "Wireframing", "Interaction Design"], image: "/uiux_cert.png", date: "June 16, 2025", type: 'cert' },
    { title: "Soft Skills - Professional Development", provider: "GeeksforGeeks", desc: "4-week intensive training on complete professional development.", learnings: ["Professional Communication", "Workplace Ethics", "Personality Development"], image: "/gfg_cert.png", date: "July 2025", type: 'cert' }
  ],
  extraCurricular: [
    { role: "Student Placement Coordinator", org: "IMS Engineering College", desc: "Supported placement coordination for the 2025–26 batch managing data for 500+ students.", learnings: ["Coordination", "Data Management"], icon: <Users size={24}/> },
    { role: "Editorial Lead", org: "Campus Chronicles", desc: "Led content planning and visual layout for the CSE department’s flagship magazine.", learnings: ["Content Strategy", "Team Coordination"], icon: <PenTool size={24}/> },
    { role: "IDE Bootcamp Attendee", org: "GITS Udaipur", desc: "Participated in a one-week program focused on startup fundamentals.", learnings: ["Product Ideation", "Pitch Presentation"], icon: <Lightbulb size={24}/> },
    { role: "Task Master (1st Position)", org: "Runtime Hackers Club", desc: "Achieved first position in club-level coding challenges.", learnings: ["Algorithmic Problem Solving"], icon: <Award size={24}/> }
  ],
  skills: [
    { id: 'frontend', title: "Frontend", icon: <Code />, items: [["React.js", 90], ["Redux", 85], ["HTML/CSS", 85]] },
    { id: 'backend', title: "Backend", icon: <Zap />, items: [["Node.js", 85], ["Express.js", 80], ["JWT", 80]] },
    { id: 'database', title: "Database", icon: <Globe />, items: [["MySQL", 85], ["MongoDB", 80], ["REST APIs", 85]] },
    { id: 'programming', title: "Programming", icon: <Code />, items: [["Java", 90], ["SDLC", 85], ["DSA/OOP", 85]] }
  ],
  education: [
    { year: "2022-2026", degree: "B.Tech in CSE", institution: "IMS Engineering College", gpa: "8.1" },
    { year: "2021-2022", degree: "Intermediate (12th Grade)", institution: "Modern School", percentage: "80.33%" },
    { year: "2019-2020", degree: "High School (10th Grade)", institution: "Modern School", percentage: "90.16%" },
  ],
  projects: [
    { id: 1, title: "Campus Learns", desc: "An academic resource hub for students.", mockup: "/CampusLearns.png", repo: "https://github.com/Iam-ShreyaJha/Campus-Learns" },
    { id: 3, title: "Email Validator", desc: "Utility tool for email verification.", mockup: "/EmailValidator.png", repo: "https://github.com/Iam-ShreyaJha/Email-Validator" },
    { id: 5, title: "URL Shortener", desc: "Spring Boot & React URL Shortener.", mockup: "/URL_Shortener.png", repo: "https://github.com/Iam-ShreyaJha/URL-Shortener" }
  ],
  contact: { email: "jhashreya0205@gmail.com", linkedin: "https://www.linkedin.com/in/shreyajha12/", github: "https://github.com/Iam-ShreyaJha", resume: "/ShreyaResume.pdf" }
};

const DynamicBackground = ({ theme }) => {
  const mountRef = useRef(null);
  useEffect(() => {
    if (!mountRef.current) return;
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    mountRef.current.appendChild(renderer.domElement);
    const particles = [];
    const isLight = theme === 'light';
    const isMobile = window.innerWidth < 768;
    const colors = isLight ? [0xff69b4, 0xffd700] : [0xffd700, 0xffa500];
    const geom = new THREE.TorusKnotGeometry(0.08, 0.03, 64, 8);
    const count = isMobile ? 50 : 150; 
    for (let i = 0; i < count; i++) {
      const mat = new THREE.MeshBasicMaterial({ color: colors[i % colors.length], transparent: true, opacity: 0.5 });
      const mesh = new THREE.Mesh(geom, mat);
      mesh.position.set(Math.random() * 40 - 20, Math.random() * 40 - 20, Math.random() * 10 - 5);
      mesh.userData = { vy: Math.random() * 0.02 + 0.005, vr: Math.random() * 0.015 };
      particles.push(mesh);
      scene.add(mesh);
    }
    camera.position.z = 10;
    const animate = () => {
      requestAnimationFrame(animate);
      particles.forEach(p => {
        p.position.y -= p.userData.vy;
        p.rotation.z += p.userData.vr;
        if (p.position.y < -15) p.position.y = 15;
      });
      renderer.render(scene, camera);
    };
    animate();
    return () => { renderer.dispose(); if (mountRef.current) mountRef.current.innerHTML = ""; };
  }, [theme]);
  const bgGradient = theme === 'light' ? "from-[#fff0f3] via-white to-[#fff0f3]" : "from-[#120a00] via-[#000000] to-[#120a00]";
  return <div ref={mountRef} className={`fixed inset-0 z-0 bg-gradient-to-br ${bgGradient} pointer-events-none transition-colors duration-700`} />;
};

const SkillProgressBar = ({ name, percentage, theme }) => {
  const isLight = theme === 'light';
  const props = useSpring({ width: `${percentage}%`, from: { width: '0%' } });
  return (
    <div className="mb-4">
      <div className={`flex justify-between mb-1 text-[10px] md:text-xs font-bold uppercase ${isLight ? 'text-gray-500' : 'text-gray-400'}`}>
        <span>{name}</span><span>{percentage}%</span>
      </div>
      <div className={`w-full ${isLight ? 'bg-pink-100/50' : 'bg-white/5'} rounded-full h-1.5`}>
        <animated.div className={`h-1.5 rounded-full ${isLight ? 'bg-pink-500' : 'bg-yellow-500'}`} style={props} />
      </div>
    </div>
  );
};

const App = () => {
  const [theme, setTheme] = useState('dark');
  const [selectedItem, setSelectedItem] = useState(null);
  const [skillIdx, setSkillIdx] = useState(0);
  const isLight = theme === 'light';

  useEffect(() => {
    const timer = setInterval(() => setSkillIdx(p => (p + 1) % PORTFOLIO_DATA.rotatingSkills.length), 3000);
    return () => clearInterval(timer);
  }, []);

  const accentColor = isLight ? 'text-pink-600' : 'text-yellow-500';
  const accentBg = isLight ? 'bg-pink-500' : 'bg-yellow-600';
  const CurrentIcon = PORTFOLIO_DATA.rotatingSkills[skillIdx].icon;

  return (
    <div className={`min-h-screen transition-colors duration-700 ${isLight ? 'text-gray-900' : 'text-white'} font-sans overflow-x-hidden`}>
      <DynamicBackground theme={theme} />
      
      {/* NAVBAR */}
      <nav className={`fixed top-0 w-full z-[100] px-4 md:px-8 py-4 md:py-6 flex justify-between items-center backdrop-blur-xl border-b transition-all ${isLight ? 'bg-white/70 border-pink-100' : 'bg-black/60 border-white/5'}`}>
        <div className={`w-10 h-10 md:w-12 md:h-12 rounded-xl flex items-center justify-center text-lg md:text-xl font-black tracking-widest ${isLight ? 'bg-pink-100 text-pink-600' : 'bg-yellow-500/10 text-yellow-500'}`}>SJ</div>
        <div className={`hidden lg:flex gap-8 text-xs font-extrabold uppercase tracking-widest ${isLight ? 'text-gray-700' : 'text-gray-300'}`}>
          <a href="#about" className={`hover:${accentColor} transition-colors`}>About</a>
          <a href="#skills" className={`hover:${accentColor} transition-colors`}>Skills</a>
          <a href="#learning" className={`hover:${accentColor} transition-colors`}>Learning</a>
          <a href="#certifications" className={`hover:${accentColor} transition-colors`}>Certifications</a>
          <a href="#projects" className={`hover:${accentColor} transition-colors`}>Work</a>
        </div>
        <div className="flex items-center gap-3 md:gap-6">
          <button onClick={() => setTheme(isLight ? 'dark' : 'light')} className={`p-2 md:p-3 rounded-xl transition-all ${isLight ? 'bg-pink-100 text-pink-600' : 'bg-white/5 text-yellow-500'}`}>
            {isLight ? <Moon size={18}/> : <Sun size={18}/>}
          </button>
          <a href={PORTFOLIO_DATA.contact.resume} download className={`px-4 py-2 md:px-6 md:py-3 rounded-xl text-[10px] font-black text-white shadow-lg ${accentBg}`}>RESUME</a>
        </div>
      </nav>

      <main className="relative z-10 pt-20">
        {/* HERO SECTION */}
        <section className="min-h-[85vh] flex flex-col items-center justify-center text-center px-4 py-10">
          <div className={`mb-6 px-4 py-1 rounded-full text-[10px] font-black border ${isLight ? 'bg-pink-100 text-pink-600 border-pink-200' : 'bg-yellow-500/10 text-yellow-400 border-yellow-500/20'}`}>SIH FINALIST 2025</div>
          <h1 className={`text-5xl md:text-8xl lg:text-[11rem] font-black leading-[1.1] mb-6 uppercase tracking-tighter ${isLight ? 'text-pink-600' : 'text-white'}`}>SHREYA JHA</h1>
          <div className={`flex items-center gap-3 md:gap-4 border-2 px-6 md:px-10 py-3 md:py-5 rounded-2xl md:rounded-3xl mb-8 backdrop-blur-md ${isLight ? 'bg-white/50 border-pink-100' : 'bg-white/5 border-white/10'}`}>
            <CurrentIcon className={accentColor} size={24} />
            <span className="text-lg md:text-3xl font-black tracking-widest uppercase">{PORTFOLIO_DATA.rotatingSkills[skillIdx].text}</span>
          </div>
          <div className={`mt-10 animate-bounce ${accentColor}`}><ArrowDown size={32} /></div>
        </section>

        {/* ABOUT SECTION */}
        <section id="about" className="py-20 md:py-32 px-6 max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center text-left">
            <div className={`relative rounded-[2rem] md:rounded-[4rem] overflow-hidden border-4 aspect-[4/5] shadow-2xl ${isLight ? 'border-pink-100' : 'border-white/5'}`}>
              <img src="/Shreya-Photograph.jpg" alt="Shreya Jha" className="w-full h-full object-cover"/>
            </div>
            <div>
              <h2 className={`text-4xl md:text-6xl font-black mb-6 md:mb-10 tracking-tighter uppercase ${accentColor}`}>The Person <br/> Behind The Code</h2>
              <p className={`text-lg md:text-2xl font-bold leading-relaxed mb-8 md:12 ${isLight ? 'text-gray-600' : 'text-gray-400'}`}>
                {PORTFOLIO_DATA.aboutContent.description}
              </p>
              <div className="grid gap-4 md:gap-6">
                {PORTFOLIO_DATA.aboutContent.journey.map((item, i) => (
                  <div key={i} className={`p-6 md:p-8 rounded-[1.5rem] md:rounded-[2.5rem] border transition-all ${isLight ? 'bg-white border-pink-50 shadow-lg' : 'bg-white/5 border-white/10'}`}>
                    <h4 className={`text-xs font-black uppercase tracking-widest mb-2 ${accentColor}`}>{item.title}</h4>
                    <p className="font-bold text-base md:text-lg">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* SKILLS & EDUCATION SECTION */}
        <section id="skills" className="py-20 md:py-32 max-w-7xl mx-auto px-6 text-left">
            <div className="mb-24">
              <h2 className={`text-4xl md:text-5xl font-black mb-10 uppercase tracking-tighter ${isLight ? 'text-pink-700' : 'text-yellow-500'}`}>Education</h2>
              <div className={`space-y-10 border-l-4 pl-6 md:pl-10 ${isLight ? 'border-pink-200' : 'border-white/10'}`}>
                {PORTFOLIO_DATA.education.map((edu, i) => (
                  <div key={i} className="relative">
                    <div className={`absolute -left-[30px] md:-left-[54px] top-1 w-4 h-4 md:w-8 md:h-8 rounded-full ${accentBg}`}/>
                    <span className={`font-black tracking-[0.2em] text-[10px] md:text-sm ${accentColor}`}>{edu.year}</span>
                    <h3 className="text-xl md:text-3xl font-black mt-2 uppercase">{edu.degree}</h3>
                    <p className={`text-sm md:text-lg font-bold ${isLight ? 'text-gray-500' : 'text-gray-400'}`}>{edu.institution} • {edu.gpa ? `GPA: ${edu.gpa}` : `Percentage: ${edu.percentage}`}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mb-24">
              <h2 className={`text-4xl md:text-5xl font-black mb-10 uppercase tracking-tighter ${isLight ? 'text-pink-700' : 'text-yellow-500'}`}>Tech Arsenal</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                {PORTFOLIO_DATA.skills.map(skill => (
                  <div key={skill.id} className={`p-6 md:p-8 rounded-[1.5rem] md:rounded-[2.5rem] border backdrop-blur-sm ${isLight ? 'bg-white border-pink-100 shadow-xl' : 'bg-black/40 border-white/5 shadow-2xl'}`}>
                    <div className="flex items-center gap-4 mb-6">
                      <div className={`p-2 md:p-3 rounded-xl ${isLight ? 'bg-pink-50 text-pink-600' : 'bg-white/5 text-yellow-500'}`}>{React.cloneElement(skill.icon, {size: 20})}</div>
                      <h3 className="text-lg md:text-xl font-black tracking-tight uppercase">{skill.title}</h3>
                    </div>
                    {skill.items.map(([name, val]) => (
                      <SkillProgressBar key={name} name={name} percentage={val} theme={theme} />
                    ))}
                  </div>
                ))}
              </div>
            </div>
        </section>

        {/* LEARNING GARDEN SECTION */}
        <section id="learning" className="py-20 md:py-32 px-6 max-w-7xl mx-auto text-center">
            <h2 className={`text-4xl md:text-6xl font-black mb-16 tracking-tighter uppercase ${isLight ? 'text-pink-700' : 'text-yellow-500'}`}>Learning Garden</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
                {PORTFOLIO_DATA.learningSources.map((source, i) => (
                    <a key={i} href={source.link} target="_blank" rel="noreferrer" className={`group p-8 md:p-12 rounded-[2rem] md:rounded-[3.5rem] border-2 transition-all hover:-translate-y-3 ${isLight ? 'bg-white border-pink-50 hover:border-pink-200 shadow-xl' : 'bg-white/5 border-transparent hover:border-yellow-500/30'}`}>
                        <div className={`text-2xl md:text-4xl font-black mb-6 ${isLight ? 'text-rose-600' : source.color}`}>{source.name}</div>
                        <p className={`font-bold text-base md:text-lg mb-8 leading-relaxed ${isLight ? 'text-gray-500' : 'text-gray-400'}`}>{source.desc}</p>
                        <div className={`inline-flex items-center gap-3 px-6 py-2 rounded-2xl text-[10px] font-black uppercase tracking-widest ${isLight ? 'bg-pink-50 text-pink-600' : 'bg-white/5 text-yellow-500'}`}>
                          <Rocket size={14}/> {source.status}
                        </div>
                    </a>
                ))}
            </div>
        </section>

        {/* CERTIFICATIONS SECTION */}
        <section id="certifications" className={`py-20 md:py-32 px-6 ${isLight ? 'bg-pink-100/30' : 'bg-yellow-500/[0.02]'}`}>
            <div className="max-w-7xl mx-auto text-center">
                <h2 className={`text-4xl md:text-6xl font-black mb-16 tracking-tighter uppercase ${isLight ? 'text-pink-700' : 'text-yellow-500'}`}>Certifications</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                    {PORTFOLIO_DATA.certifications.map((cert, i) => (
                        <div key={i} className={`group p-6 md:p-8 rounded-[2rem] border-2 transition-all flex flex-col justify-between hover:shadow-2xl text-left ${isLight ? 'bg-white border-pink-100' : 'bg-black border-white/10 hover:border-yellow-500/40'}`}>
                            <div>
                                <div className="aspect-video mb-6 overflow-hidden rounded-xl bg-zinc-800">
                                   <img src={cert.image} alt={cert.title} className="w-full h-full object-cover group-hover:scale-110 transition-all duration-500" />
                                </div>
                                <h3 className={`text-lg font-black uppercase mb-3 leading-tight ${isLight ? 'text-gray-800' : 'text-white'}`}>{cert.title}</h3>
                                <p className={`font-black text-[10px] tracking-widest mb-6 ${accentColor}`}>{cert.provider}</p>
                            </div>
                            <button onClick={() => setSelectedItem(cert)} className={`w-full py-3 rounded-xl text-[10px] font-black uppercase tracking-widest border-2 transition-all ${isLight ? 'border-pink-200 hover:bg-pink-600 hover:text-white' : 'border-white/10 hover:bg-yellow-500 hover:text-black'}`}>
                                Details
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>

        {/* BEYOND CODING SECTION */}
        <section className="py-20 md:py-32 px-6 max-w-7xl mx-auto text-left">
          <div className={`p-8 md:p-20 rounded-[2.5rem] md:rounded-[4rem] border-2 ${isLight ? 'bg-white border-pink-100 shadow-2xl' : 'bg-white/[0.02] border-white/5'}`}>
            <h2 className={`text-3xl md:text-5xl font-black mb-12 tracking-tighter uppercase flex items-center gap-4 ${accentColor}`}>
              <Star size={32} fill="currentColor"/> Beyond Coding
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16">
              {PORTFOLIO_DATA.extraCurricular.map((item, i) => (
                <div key={i} className="flex gap-6 md:gap-8 group">
                  <div className={`h-16 w-16 md:h-20 md:w-20 shrink-0 rounded-[1.5rem] md:rounded-[2rem] flex items-center justify-center transition-all group-hover:rotate-12 ${isLight ? 'bg-pink-100 text-pink-600' : 'bg-yellow-500/10 text-yellow-500'}`}>
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-xl md:text-2xl font-black uppercase mb-2 tracking-tight">{item.role}</h3>
                    <p className={`font-black text-[10px] uppercase tracking-widest mb-4 ${isLight ? 'text-pink-400' : 'text-yellow-500/60'}`}>{item.org}</p>
                    <p className={`text-base md:text-lg font-bold leading-relaxed mb-6 ${isLight ? 'text-gray-600' : 'text-gray-400'}`}>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PROJECTS SECTION */}
        <section id="projects" className="py-20 md:py-32 px-6 max-w-7xl mx-auto">
          <h2 className={`text-4xl md:text-7xl font-black mb-16 text-center tracking-tighter uppercase ${isLight ? 'text-pink-700' : 'text-yellow-500'}`}>Work</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 text-left">
            {PORTFOLIO_DATA.projects.map(project => (
              <div key={project.id} className="group cursor-pointer" onClick={() => setSelectedItem({...project, type: 'project'})}>
                <div className={`relative overflow-hidden rounded-[2rem] md:rounded-[3rem] aspect-video mb-6 border-2 md:border-4 ${isLight ? 'bg-white border-pink-100 shadow-xl' : 'bg-zinc-900 border-white/5 shadow-2xl'}`}>
                  <img src={project.mockup} alt={project.title} className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700" />
                </div>
                <h3 className={`text-xl md:text-2xl font-black mb-2 uppercase ml-2 tracking-tighter group-hover:${accentColor}`}>{project.title}</h3>
              </div>
            ))}
          </div>
        </section>

        {/* FOOTER */}
        <footer id="contact" className="py-20 md:py-40 px-6 text-center max-w-5xl mx-auto">
            <h2 className={`text-4xl md:text-8xl lg:text-[10rem] font-black mb-16 tracking-tighter uppercase leading-none ${accentColor}`}>LET'S CONNECT.</h2>
            <div className="flex flex-wrap justify-center gap-8 md:gap-16">
                {[
                  { icon: <FileText size={32}/>, label: "Resume", link: PORTFOLIO_DATA.contact.resume, download: true },
                  { icon: <Linkedin size={32}/>, label: "LinkedIn", link: PORTFOLIO_DATA.contact.linkedin },
                  { icon: <Mail size={32}/>, label: "Email", link: `mailto:${PORTFOLIO_DATA.contact.email}` }
                ].map((social, i) => (
                  <a key={i} href={social.link} download={social.download} target="_blank" className="flex flex-col items-center gap-4 group">
                    <div className={`p-6 md:p-8 rounded-[1.5rem] md:rounded-[2.5rem] border-2 shadow-xl ${isLight ? 'bg-white text-pink-600 border-pink-100' : 'bg-white/5 text-yellow-500 border-white/5'}`}>{social.icon}</div>
                    <span className="font-black uppercase text-[10px] tracking-[0.2em]">{social.label}</span>
                  </a>
                ))}
            </div>
        </footer>
      </main>

      {/* MODAL */}
      {selectedItem && (
          <div className="fixed inset-0 z-[200] bg-black/95 flex items-center justify-center p-4 backdrop-blur-xl overflow-y-auto" onClick={() => setSelectedItem(null)}>
              <div className={`max-w-4xl w-full rounded-[2rem] md:rounded-[4rem] border-2 md:border-4 shadow-2xl p-6 md:p-12 relative my-auto ${isLight ? 'bg-white border-pink-200' : 'bg-zinc-900 border-white/10'}`} onClick={e => e.stopPropagation()}>
                    <button onClick={() => setSelectedItem(null)} className="absolute top-4 right-4 md:top-8 md:right-8 p-2 md:p-4 rounded-xl bg-white/5"><X size={24}/></button>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center text-left">
                        <div className="rounded-2xl overflow-hidden border-2 border-white/10">
                          <img src={selectedItem.image || selectedItem.mockup} alt="" className="w-full object-cover" />
                        </div>
                        <div>
                            <h2 className={`text-2xl md:text-4xl font-black uppercase mb-4 tracking-tighter ${accentColor}`}>{selectedItem.title}</h2>
                            <p className="text-sm md:text-lg font-bold leading-relaxed mb-6 italic text-gray-400">"{selectedItem.desc}"</p>
                            {selectedItem.type === 'project' ? (
                               <a href={selectedItem.repo} target="_blank" className={`inline-block px-8 py-3 rounded-xl font-black uppercase text-[10px] text-white ${accentBg}`}>SOURCE CODE</a>
                            ) : (
                               <div className="space-y-4">
                                  <h4 className={`text-xs font-black uppercase tracking-widest ${accentColor}`}>Key Learnings</h4>
                                  <div className="grid gap-2">
                                      {selectedItem.learnings.map((l, i) => (
                                          <div key={i} className="flex items-center gap-3 text-sm font-bold text-gray-500"><CheckCircle size={16} className="text-green-500"/> {l}</div>
                                      ))}
                                  </div>
                               </div>
                            )}
                        </div>
                    </div>
              </div>
          </div>
      )}

      <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className={`fixed bottom-6 right-6 md:bottom-10 md:right-10 z-[100] p-4 md:p-5 rounded-2xl shadow-2xl text-white ${accentBg}`}><ArrowUp size={20}/></button>
    </div>
  );
};

export default App;