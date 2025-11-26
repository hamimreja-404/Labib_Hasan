import React, { useState, useEffect } from 'react';
import { 
  Truck, 
  Package, 
  Users, 
  TrendingUp, 
  Award, 
  MapPin, 
  Mail, 
  Linkedin, 
  Phone, 
  Menu, 
  X, 
  ChevronRight,
  ClipboardList,
  Box
} from 'lucide-react';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll for navbar transparency
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Custom "AOS" (Animate On Scroll) Logic
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, observerOptions);

    const elements = document.querySelectorAll('.reveal');
    elements.forEach((el) => observer.observe(el));

    return () => elements.forEach((el) => observer.unobserve(el));
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  // Custom CSS Styles
  const styles = `
    html {
      scroll-behavior: smooth;
    }

    /* Truck Animation */
    @keyframes moveTruck {
      0% { transform: translateX(-100%); }
      100% { transform: translateX(100vw); }
    }
    .animate-truck {
      animation: moveTruck 15s linear infinite;
    }
    .clip-path-slant {
      clip-path: polygon(0 0, 100% 0, 100% 85%, 0 100%);
    }

    /* Hero Entrance Animations */
    @keyframes fadeInUp {
      from {
        opacity: 0;
        transform: translate3d(0, 40px, 0);
      }
      to {
        opacity: 1;
        transform: translate3d(0, 0, 0);
      }
    }

    .hero-animate-1 { animation: fadeInUp 0.8s ease-out forwards; opacity: 0; }
    .hero-animate-2 { animation: fadeInUp 0.8s ease-out 0.2s forwards; opacity: 0; }
    .hero-animate-3 { animation: fadeInUp 0.8s ease-out 0.4s forwards; opacity: 0; }
    .hero-animate-4 { animation: fadeInUp 0.8s ease-out 0.6s forwards; opacity: 0; }

    /* Scroll Reveal Classes (AOS replacement) */
    .reveal {
      opacity: 0;
      transform: translateY(30px);
      transition: all 0.8s cubic-bezier(0.5, 0, 0, 1);
    }
    
    .reveal.active {
      opacity: 1;
      transform: translateY(0);
    }
    
    .reveal-left {
      transform: translateX(-30px);
    }
    
    .reveal-right {
      transform: translateX(30px);
    }

    .reveal.active.reveal-left, 
    .reveal.active.reveal-right {
      transform: translate(0);
    }
    
    /* Stagger children in grids */
    .reveal-delay-100 { transition-delay: 0.1s; }
    .reveal-delay-200 { transition-delay: 0.2s; }
    .reveal-delay-300 { transition-delay: 0.3s; }
  `;

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800 overflow-x-hidden">
      <style>{styles}</style>

      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="bg-orange-500 p-2 rounded-lg text-white shadow-lg">
              <Box size={24} />
            </div>
            <span className={`text-xl font-bold tracking-tight ${scrolled ? 'text-slate-900' : 'text-slate-900 md:text-white'}`}>
              <span className="text-orange-500"> LABIB </span>HASAN
            </span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {['About', 'Experience', 'Skills', 'Contact'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`}
                className={`text-sm font-medium hover:text-orange-500 transition-colors ${scrolled ? 'text-slate-600' : 'text-white/90'}`}
              >
                {item}
              </a>
            ))}
            <a 
              href="https://mail.google.com/mail/?view=cm&fs=1&to=labibhasan216@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-orange-500 hover:bg-orange-600 text-white px-5 py-2 rounded-full text-sm font-medium transition-transform transform hover:scale-105 shadow-md shadow-orange-500/20"
            >
              Hire Me
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button onClick={toggleMenu} className="md:hidden text-slate-800">
            {isMenuOpen ? <X size={28} /> : <Menu size={28} className={scrolled ? 'text-slate-800' : 'text-slate-800 md:text-white'} />}
          </button>
        </div>

        {/* Mobile Nav Dropdown */}
        <div className={`md:hidden absolute top-full left-0 w-full bg-white shadow-lg flex flex-col gap-4 px-6 border-t border-slate-100 transition-all duration-500 ease-in-out overflow-hidden ${isMenuOpen ? 'max-h-96 opacity-100 py-4' : 'max-h-0 opacity-0 py-0'}`}>
            {['About', 'Experience', 'Skills', 'Contact'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`}
                onClick={() => setIsMenuOpen(false)}
                className="text-slate-600 font-medium py-2 border-b border-slate-50"
              >
                {item}
              </a>
            ))}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-950 via-blue-900 to-slate-900 pt-32 pb-24 clip-path-slant overflow-hidden min-h-[90vh] flex items-center">
        {/* Background Graphic Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-64 h-64 border-4 border-white rounded-full mix-blend-overlay"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 border-4 border-dashed border-white rounded-full mix-blend-overlay"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl">
            <div className="hero-animate-1 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md text-blue-100 border border-white/20 text-xs font-semibold mb-6">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
              AVAILABLE FOR ROLES
            </div>
            <h1 className="hero-animate-2 text-4xl md:text-6xl font-extrabold text-white leading-tight mb-6">
              Optimizing Operations. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-300">
                Delivering Excellence.
              </span>
            </h1>
            <p className="hero-animate-3 text-blue-100 text-lg md:text-xl mb-8 leading-relaxed max-w-2xl">
              Logistics Professional & Operation Executive with expertise in managing large-scale workforces (150+) and 3PL operations at Mahindra Logistics (Flipkart Grocery).
            </p>
            
            <div className="hero-animate-4 flex flex-col sm:flex-row gap-4">
              <a href="#contact" className="px-8 py-3 bg-orange-500 hover:bg-orange-600 text-white rounded-lg font-bold transition-all shadow-lg shadow-orange-500/30 flex items-center justify-center gap-2 transform hover:-translate-y-1">
                <Mail size={20} /> Contact Me
              </a>
              <a href="#experience" className="px-8 py-3 bg-transparent border border-white/30 text-white hover:bg-white/10 rounded-lg font-bold transition-all flex items-center justify-center gap-2 hover:border-white">
                View Experience <ChevronRight size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Animated Truck */}
        <div className="absolute bottom-4 left-0 w-full pointer-events-none opacity-20">
          <div className="animate-truck text-white flex items-center gap-1">
             <Truck size={120} strokeWidth={1} />
             <div className="h-1 w-24 bg-dashed border-t-2 border-white/50"></div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 -mt-12 container mx-auto px-6 relative z-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { icon: Users, label: "Workforce Managed", value: "150+" },
            { icon: Package, label: "Dispatch Accuracy", value: "99%" },
            { icon: TrendingUp, label: "Years Experience", value: "3+" },
            { icon: Award, label: "Math Background", value: "B.Sc." }
          ].map((stat, idx) => (
            <div key={idx} className={`reveal reveal-delay-${idx * 100} bg-white p-6 rounded-xl shadow-xl shadow-slate-200 border-b-4 border-orange-500 flex flex-col items-center text-center transform hover:-translate-y-1 transition-transform duration-300`}>
              <div className="bg-blue-50 p-3 rounded-full text-blue-600 mb-3">
                <stat.icon size={28} />
              </div>
              <h3 className="text-2xl font-bold text-slate-800">{stat.value}</h3>
              <p className="text-slate-500 text-sm font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="w-full md:w-1/2 reveal reveal-left">
               <div className="relative group">
                 <div className="absolute top-0 left-0 w-full h-full bg-orange-100 rounded-2xl transform rotate-3 transition-transform group-hover:rotate-6"></div>
                 <div className="bg-slate-800 text-white p-8 rounded-2xl relative shadow-xl transition-transform group-hover:-translate-y-2">
                    <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                      <ClipboardList className="text-orange-500"/> Core Competencies
                    </h3>
                    <ul className="space-y-3">
                      {['Supply Chain Management', 'Warehouse Operations', 'Manpower Planning', 'Process Improvement', 'Data Analysis (Excel)', 'Last Mile Operations'].map((skill, i) => (
                        <li key={i} className="flex items-center gap-3">
                          <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                          {skill}
                        </li>
                      ))}
                    </ul>
                 </div>
               </div>
            </div>
            <div className="w-full md:w-1/2 reveal reveal-right">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                Bridging Mathematics & <span className="text-blue-600">Logistics Efficiency</span>
              </h2>
              <p className="text-slate-600 leading-relaxed mb-6">
                I am a motivated logistics and operations professional with a strong background in process execution and team supervision. 
              </p>
              <p className="text-slate-600 leading-relaxed mb-6">
                Currently, I serve as an Operation Executive at <strong>Mahindra Logistics (Flipkart Grocery)</strong>, managing a workforce of over 150 associates. My academic foundation in Mathematics (B.Sc.) allows me to approach logistical challenges with analytical precision, ensuring optimal dispatch flows and target achievement.
              </p>
              <div className="flex items-center gap-4 pt-4">
                 <div className="px-4 py-2 bg-slate-100 rounded text-slate-700 font-semibold text-sm">Target Driven</div>
                 <div className="px-4 py-2 bg-slate-100 rounded text-slate-700 font-semibold text-sm">Process Oriented</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 reveal">
            <h2 className="text-3xl font-bold text-slate-900">Professional Journey</h2>
            <div className="w-16 h-1 bg-orange-500 mx-auto mt-4"></div>
          </div>

          <div className="max-w-4xl mx-auto space-y-8">
            {/* Job 1 */}
            <div className="relative pl-8 md:pl-0 reveal reveal-left">
              {/* Timeline Line */}
              <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-blue-200 transform -translate-x-1/2"></div>
              
              {/* Card */}
              <div className="md:flex items-center justify-between group">
                <div className="hidden md:block w-5/12 text-right pr-8">
                  <span className="text-orange-600 font-bold tracking-wide">Sep 2025 – Present</span>
                </div>
                
                {/* Center Node */}
                <div className="absolute left-0 md:left-1/2 w-8 h-8 bg-blue-600 rounded-full border-4 border-white shadow-lg transform md:-translate-x-1/2 flex items-center justify-center z-10 transition-transform group-hover:scale-110">
                  <Truck size={14} className="text-white" />
                </div>

                <div className="w-full md:w-5/12 pl-8 md:pl-8">
                  <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-blue-600 hover:shadow-xl transition-shadow relative">
                    {/* Arrow for desktop */}
                    <div className="hidden md:block absolute top-6 -left-2 w-4 h-4 bg-white transform rotate-45 border-l border-b border-gray-100"></div>
                    
                    <h3 className="text-xl font-bold text-slate-900">Operation Executive</h3>
                    <h4 className="text-blue-600 font-semibold mb-2">Mahindra Logistics (Flipkart Grocery)</h4>
                    <p className="text-sm text-slate-500 mb-4 md:hidden">Sep 2025 – Present</p>
                    <ul className="text-slate-600 text-sm list-disc pl-4 space-y-2">
                      <li>Manage end-to-end outbound operations.</li>
                      <li>Oversee a workforce of <strong>150+ associates</strong>.</li>
                      <li>Ensure smooth dispatch flow and daily target achievement.</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Job 2 */}
            <div className="relative pl-8 md:pl-0 reveal reveal-right">
              <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-blue-200 transform -translate-x-1/2"></div>
              
              <div className="md:flex items-center justify-between group flex-row-reverse">
                <div className="hidden md:block w-5/12 text-left pl-8">
                  <span className="text-slate-500 font-bold tracking-wide">Jan 2023 – Sep 2025</span>
                </div>
                
                <div className="absolute left-0 md:left-1/2 w-8 h-8 bg-white rounded-full border-4 border-blue-200 shadow transform md:-translate-x-1/2 flex items-center justify-center z-10 transition-transform group-hover:scale-110">
                  <Package size={14} className="text-blue-400" />
                </div>

                <div className="w-full md:w-5/12 pl-8 md:pr-8 md:pl-0">
                  <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-orange-400 hover:shadow-xl transition-shadow relative">
                     {/* Arrow for desktop */}
                     <div className="hidden md:block absolute top-6 -right-2 w-4 h-4 bg-white transform rotate-45 border-r border-t border-gray-100"></div>

                    <h3 className="text-xl font-bold text-slate-900">Team Leader – Outbound</h3>
                    <h4 className="text-blue-600 font-semibold mb-2">Mahindra Logistics</h4>
                    <p className="text-sm text-slate-500 mb-4 md:hidden">Jan 2023 – Sep 2025</p>
                    <ul className="text-slate-600 text-sm list-disc pl-4 space-y-2">
                      <li>Led warehouse associates to consistent target achievement.</li>
                      <li>Managed accuracy in pick, pack, sorting, and loading.</li>
                      <li>Advanced Excel reporting for daily dispatch summaries.</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills & Certs Grid */}
      <section id="skills" className="py-20 bg-white">
         <div className="container mx-auto px-6">
           <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
             
             {/* Technical Skills */}
             <div className="reveal reveal-left">
               <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                 <TrendingUp className="text-blue-600" /> Technical Proficiency
               </h3>
               <div className="space-y-6">
                 {[
                   { name: "MS Excel (Advanced)", level: "90%" },
                   { name: "Warehouse Management System (WMS)", level: "85%" },
                   { name: "Operations Planning", level: "88%" },
                   { name: "Team Leadership", level: "95%" }
                 ].map((skill, i) => (
                   <div key={i}>
                     <div className="flex justify-between mb-1">
                       <span className="font-semibold text-slate-700">{skill.name}</span>
                       <span className="text-slate-500 text-sm">{skill.level}</span>
                     </div>
                     <div className="w-full bg-slate-100 rounded-full h-2.5">
                       <div 
                         className="bg-gradient-to-r from-blue-600 to-blue-400 h-2.5 rounded-full transition-all duration-1000 ease-out" 
                         style={{ width: skill.level }}
                       ></div>
                     </div>
                   </div>
                 ))}
               </div>
             </div>

             {/* Certifications */}
             <div className="reveal reveal-right">
               <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                 <Award className="text-orange-500" /> Education & Certifications
               </h3>
               <div className="space-y-4">
                  {/* IIT Cert */}
                  <div className="bg-slate-50 p-4 rounded-lg border border-slate-100 flex gap-4 items-start hover:bg-slate-100 transition-colors cursor-default">
                    <div className="bg-white p-2 rounded shadow-sm">
                      <img src="/api/placeholder/40/40" alt="IIT" className="w-10 h-10 object-contain" onError={(e) => e.target.style.display='none'} />
                      <Award className="text-blue-800 w-8 h-8" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900">Logistics & Supply Chain Management</h4>
                      <p className="text-sm text-slate-600">IIT Kharagpur via NPTEL</p>
                    </div>
                  </div>

                  {/* Degree */}
                  <div className="bg-slate-50 p-4 rounded-lg border border-slate-100 flex gap-4 items-start hover:bg-slate-100 transition-colors cursor-default">
                    <div className="bg-white p-2 rounded shadow-sm">
                      <Award className="text-orange-500 w-8 h-8" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900">B.Sc. Mathematics (CGPA: 8.8)</h4>
                      <p className="text-sm text-slate-600">Malda College, University of Gour Banga (2019-2022)</p>
                    </div>
                  </div>

                  {/* Other Certs */}
                  <div className="flex flex-wrap gap-2 mt-2">
                     <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-semibold hover:bg-blue-200 transition-colors">Advanced ChatGPT</span>
                     <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-semibold hover:bg-blue-200 transition-colors">Diploma CS (ADFA)</span>
                  </div>
               </div>
             </div>

           </div>
         </div>
      </section>

      {/* Footer / Contact */}
      <section id="contact" className="bg-slate-900 text-slate-300 py-16">
        <div className="container mx-auto px-6 text-center reveal">
           <h2 className="text-3xl font-bold text-white mb-8">Ready to Optimize Your Logistics?</h2>
           
           <div className="flex flex-wrap justify-center gap-6 mb-12">
             <a 
               href="https://mail.google.com/mail/?view=cm&fs=1&to=labibhasan216@gmail.com"
               target="_blank"
               rel="noopener noreferrer"
               className="flex items-center gap-2 bg-slate-800 hover:bg-slate-700 px-6 py-4 rounded-lg transition-colors border border-slate-700 group"
             >
               <Mail className="text-orange-500 group-hover:scale-110 transition-transform" />
               <div className="text-left">
                 <p className="text-xs text-slate-400">Email Me</p>
                 <p className="text-white font-medium">labibhasan216@gmail.com</p>
               </div>
             </a>

             <a href="tel:+917063557283" className="flex items-center gap-2 bg-slate-800 hover:bg-slate-700 px-6 py-4 rounded-lg transition-colors border border-slate-700 group">
               <Phone className="text-orange-500 group-hover:scale-110 transition-transform" />
               <div className="text-left">
                 <p className="text-xs text-slate-400">Call Me</p>
                 <p className="text-white font-medium">+91 7063557283</p>
               </div>
             </a>

             <a href="https://linkedin.com/in/labib-hasan-a941a824a" target="_blank" rel="noreferrer" className="flex items-center gap-2 bg-slate-800 hover:bg-slate-700 px-6 py-4 rounded-lg transition-colors border border-slate-700 group">
               <Linkedin className="text-blue-500 group-hover:scale-110 transition-transform" />
               <div className="text-left">
                 <p className="text-xs text-slate-400">Connect</p>
                 <p className="text-white font-medium">LinkedIn Profile</p>
               </div>
             </a>
           </div>

           <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-slate-500">
             <div className="flex items-center gap-2 mb-4 md:mb-0">
               <MapPin size={16} /> Madhaipur, Malda, West Bengal – 732142
             </div>
             <p>© {new Date().getFullYear()} Labib Hasan. All rights reserved.</p>
           </div>
        </div>
      </section>
    </div>
  );
};

export default App;