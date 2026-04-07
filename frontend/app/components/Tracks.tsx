'use client';
import { useState, useEffect } from 'react';
import ScrollReveal from './ScrollReveal';

interface Track {
  icon: string;
  title: string;
  desc: string;
  problemStatement: string;
  challenge: string;
  gradient: string;
  glow: string;
}

const tracks: Track[] = [
  {
    icon: '🤖',
    title: 'Consent-Aware AI Pipelines',
    desc: 'Intelligent systems automatically verify consent and enforce data minimisation in AI model training.',
    problemStatement: 'AI systems increasingly rely on personal datasets without dynamic consent tracking or data lifecycle visibility.',
    challenge: 'How can intelligent systems automatically verify consent validity, enforce data minimisation, and prevent unauthorised data usage in AI model training and inference?',
    gradient: 'from-emerald-500/20 to-cyan-500/20',
    glow: 'shadow-emerald-500/20',
  },
  {
    icon: '🆔',
    title: 'Privacy-Preserving Age Verification',
    desc: 'AI for accurate yet privacy-preserving age assurance mechanisms with minimal data exposure.',
    problemStatement: 'Age detection systems frequently rely on intrusive identity data collection or inaccurate heuristics.',
    challenge: 'How might AI enable accurate yet privacy-preserving age assurance mechanisms using minimal personal data exposure?',
    gradient: 'from-blue-500/20 to-indigo-500/20',
    glow: 'shadow-blue-500/20',
  },
  {
    icon: '⛓️',
    title: 'Tamper-Proof Consent Ledgers',
    desc: 'Decentralised technologies for immutable, verifiable consent histories across platforms.',
    problemStatement: 'Consent records today are stored in centralised databases that are prone to manipulation or inconsistencies.',
    challenge: 'How can decentralised technologies enable immutable, verifiable consent histories accessible across platforms?',
    gradient: 'from-purple-500/20 to-fuchsia-500/20',
    glow: 'shadow-purple-500/20',
  },
  {
    icon: '🚨',
    title: 'Real-Time Breach Detection',
    desc: 'Proactive monitoring solutions to detect and contain anomalous data access patterns.',
    problemStatement: 'Delayed breach detection increases financial loss and reputational damage.',
    challenge: 'Develop proactive monitoring solutions that detect anomalous data access patterns and trigger automated containment actions.',
    gradient: 'from-red-500/20 to-rose-500/20',
    glow: 'shadow-red-500/20',
  },
  {
    icon: '📋',
    title: 'Automated Regulatory Reporting',
    desc: 'Reporting pipelines that generate compliant alerts and incident disclosures in timelines.',
    problemStatement: 'Organisations lack efficient systems to notify authorities and users within mandated timelines.',
    challenge: 'Create secure reporting pipelines that generate compliant alerts and structured incident disclosures.',
    gradient: 'from-amber-500/20 to-orange-500/20',
    glow: 'shadow-amber-500/20',
  },
  {
    icon: '🏥',
    title: 'Sector-Specific Data Protection',
    desc: 'Adaptive security frameworks for high-impact healthcare, finance, and education platforms.',
    problemStatement: 'Healthcare, financial, and education platforms face high-impact risks from unauthorized data exposure.',
    challenge: 'Design adaptive security frameworks ensuring granular access control and high-assurance data protection.',
    gradient: 'from-teal-500/20 to-emerald-500/20',
    glow: 'shadow-teal-500/20',
  },
  {
    icon: '🔍',
    title: 'Detecting Data Over-Collection',
    desc: 'Analytical models to identify redundant collection patterns and recommend minimisation.',
    problemStatement: 'Digital services frequently collect excessive user information beyond functional requirements.',
    challenge: 'How can analytical models identify redundant data collection patterns and recommend minimisation strategies?',
    gradient: 'from-cyan-500/20 to-blue-500/20',
    glow: 'shadow-cyan-500/20',
  },
  {
    icon: '⭐',
    title: 'Trust Score Modelling',
    desc: 'Data-driven trust scoring based on transparency, compliance signals, and incident history.',
    problemStatement: 'Users lack measurable indicators of how responsibly platforms handle their personal data.',
    challenge: 'Develop data-driven trust scoring mechanisms based on transparency, compliance signals, and incident history.',
    gradient: 'from-yellow-500/20 to-amber-500/20',
    glow: 'shadow-yellow-500/20',
  },
  {
    icon: '🏠',
    title: 'Smart Device Data Governance',
    desc: 'Automated systems for contextual data collection policies in smart environments.',
    problemStatement: 'Connected devices continuously collect behavioural and environmental data with limited user awareness.',
    challenge: 'How can automated systems enforce contextual data collection policies in smart environments?',
    gradient: 'from-indigo-500/20 to-violet-500/20',
    glow: 'shadow-indigo-500/20',
  },
];

export default function Tracks() {
  const [selectedTrack, setSelectedTrack] = useState<Track | null>(null);

  // Close modal on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedTrack(null);
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, []);

  // Prevent scrolling when modal is open
  useEffect(() => {
    if (selectedTrack) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => { document.body.style.overflow = 'auto'; };
  }, [selectedTrack]);

  return (
    <section id="tracks" className="section-navy relative !py-32 overflow-hidden">
      {/* Background Decorations */}
      <div className="dots-grid opacity-20" />
      <div className="bg-text-large select-none" style={{ top: '0%', left: '-10%', opacity: 0.04 }}>PROBLEM</div>
      <div className="bg-text-large select-none" style={{ bottom: '0%', right: '-10%', opacity: 0.04 }}>DOMAIN</div>
      
      {/* Dynamic Animated Glow Orbs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-500/10 blur-[150px] rounded-full animate-pulse pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-600/10 blur-[150px] rounded-full animate-pulse pointer-events-none" style={{ animationDelay: '2s' }} />

      <div className="container relative z-10 !px-6">
        <ScrollReveal className="w-full">
          <div className="!mb-24 flex flex-col items-center text-center">
            <div className="inline-block !py-2 !px-6 rounded-full border border-emerald-500/30 bg-emerald-500/5 !mb-8">
               <span className="text-emerald-400 font-bold tracking-[0.3em] text-[10px] uppercase block">Innovation Ecosystem</span>
            </div>
            <h2 className="heading-lg !mb-10 text-white !after:left-1/2 !after:-translate-x-1/2">Tracks & Challenges</h2>
            <p className="text-slate-400 max-w-4xl mx-auto text-lg md:text-xl leading-relaxed font-light text-center">
              Bridge the gap between legal frameworks and technological innovation. <br className="hidden md:block" /> Select a domain and build the future of privacy and security.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 !gap-12 perspective-1000">
          {tracks.map((track, idx) => (
            <ScrollReveal key={track.title} delay={idx * 50} animation="reveal">
              <div 
                onClick={() => setSelectedTrack(track)}
                className={`group relative h-full bg-[#1A2F2B]/40 backdrop-blur-2xl border border-[#2C3E3A] hover:border-emerald-500/40 !p-12 transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] card-3d overflow-hidden hover:${track.glow} cursor-pointer hover:shadow-2xl flex flex-col`}
              >
                {/* Gradient Background Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${track.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />
                
                {/* Corner Accents */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-emerald-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                
                {/* Shimmer Effect */}
                <div className="absolute -inset-full h-full w-full bg-gradient-to-r from-transparent via-white/5 to-transparent skew-x-[-25deg] group-hover:animate-[shimmer_2s_infinite] pointer-events-none opacity-0 group-hover:opacity-100" />

                <div className="relative z-10 flex flex-col h-full">
                  <div className="relative !mb-10 self-start">
                     <div className="absolute inset-0 bg-emerald-500/20 blur-3xl rounded-full scale-150 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                     <div className="text-6xl transform group-hover:scale-125 group-hover:rotate-[12deg] transition-all duration-500 ease-out inline-block">
                       {track.icon}
                     </div>
                  </div>
                  
                  <h3 className="text-2xl font-extrabold text-white !mb-6 tracking-tight group-hover:text-emerald-300 transition-colors duration-500 min-h-[4rem] flex items-center">
                    {track.title}
                  </h3>
                  
                  <p className="text-slate-400 text-base leading-relaxed group-hover:text-slate-100 transition-colors duration-500 font-light flex-grow line-clamp-3">
                    {track.desc}
                  </p>
                  
                  <div className="!mt-12 !pt-6 border-t border-white/5 flex items-center gap-3 text-[10px] font-black text-emerald-400 uppercase tracking-[0.3em] group-hover:gap-6 transition-all duration-500">
                     View Challenge
                     <div className="h-[1px] w-12 bg-emerald-500/50 group-hover:w-20 transition-all duration-500" />
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>

      {/* TRACK DETAIL MODAL */}
      {selectedTrack && (
        <div 
          className="fixed inset-0 z-[2000] flex items-center justify-center !p-6 md:!p-12 overflow-y-auto"
          onClick={() => setSelectedTrack(null)}
        >
          {/* Backdrop Blur Overlay */}
          <div className="absolute inset-0 bg-[#0F1A18]/40 backdrop-blur-3xl animate-in fade-in duration-500" />
          
          {/* Modal Content */}
          <div 
            className="relative w-full max-w-4xl bg-[#1A2F2B]/40 backdrop-blur-3xl border border-emerald-500/20 rounded-3xl overflow-hidden shadow-[0_0_100px_rgba(0,0,0,0.5)] animate-in zoom-in-95 fade-in duration-500"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Gradient Overlay */}
            <div className={`absolute inset-0 bg-gradient-to-br ${selectedTrack.gradient} opacity-20 pointer-events-none`} />
            
            {/* Scrollable Content */}
            <div className="relative z-10 max-h-[85vh] overflow-y-auto custom-scrollbar">
              {/* Header */}
              <div className="sticky top-0 bg-[#1A2F2B]/60 backdrop-blur-3xl !p-6 md:!px-10 border-b border-emerald-500/20 flex justify-between items-center z-20">
                <div className="flex items-center gap-5">
                  <div className="relative">
                    <div className="absolute inset-0 bg-white/10 blur-xl rounded-full scale-110" />
                    <span className="text-4xl relative z-10">{selectedTrack.icon}</span>
                  </div>
                  <h2 className="text-xl md:text-2xl font-black text-white tracking-tight">{selectedTrack.title}</h2>
                </div>
                <button 
                  onClick={() => setSelectedTrack(null)}
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 hover:bg-white/10 text-white transition-all duration-300 border border-white/10 group active:scale-95"
                >
                  <span className="text-2xl group-hover:rotate-90 transition-transform duration-500 font-light translate-y-[-1px]">×</span>
                </button>
              </div>

              {/* Body */}
              <div className="!p-8 md:!p-12 !space-y-12">
                {/* Section: Problem Statement */}
                <div className="!space-y-6">
                  <div className="flex items-center gap-4">
                     <span className="!px-3 !py-1 bg-emerald-500/10 rounded-md text-[10px] font-black text-emerald-300 uppercase tracking-[0.2em] border border-emerald-500/20">Problem Statement</span>
                     <div className="h-[1px] flex-grow bg-emerald-500/20" />
                  </div>
                  <p className="text-lg md:text-xl text-slate-300 leading-[1.6] font-light">
                    {selectedTrack.problemStatement}
                  </p>
                </div>

                {/* Section: The Challenge */}
                <div className="!space-y-6 !p-10 md:!p-12 bg-emerald-500/5 rounded-2xl border border-emerald-500/20 relative overflow-hidden group shadow-inner">
                  <div className="absolute top-0 left-0 w-1.5 h-full bg-emerald-500/80" />
                  <div className="flex items-center gap-4 relative z-10">
                     <span className="!px-3 !py-1 bg-emerald-500/10 rounded-md text-[10px] font-black text-emerald-400 uppercase tracking-[0.2em] border border-emerald-500/20">Your Challenge</span>
                     <div className="h-[1px] flex-grow bg-emerald-500/20" />
                  </div>
                  <h4 className="text-xl md:text-2xl font-extrabold text-white leading-[1.4] relative z-10 tracking-tight">
                    {selectedTrack.challenge}
                  </h4>
                </div>

                {/* Footer Notes */}
                <div className="!pt-8 grid grid-cols-1 md:grid-cols-3 !gap-8">
                   <div className="!p-5 bg-white/5 rounded-xl border border-white/5 group hover:border-emerald-500/20 transition-colors">
                      <div className="text-emerald-400 text-[10px] font-black !mb-3 uppercase tracking-[0.2em]">Deliverable</div>
                      <div className="text-slate-300 text-sm font-light leading-relaxed">Functional Prototype & System Architecture</div>
                   </div>
                   <div className="!p-5 bg-white/5 rounded-xl border border-white/5 group hover:border-emerald-500/20 transition-colors">
                      <div className="text-emerald-400 text-[10px] font-black !mb-3 uppercase tracking-[0.2em]">Key Goal</div>
                      <div className="text-slate-300 text-sm font-light leading-relaxed">Privacy-by-Design Implementation</div>
                   </div>
                   <div className="!p-5 bg-white/5 rounded-xl border border-white/5 group hover:border-emerald-500/20 transition-colors">
                      <div className="text-emerald-400 text-[10px] font-black !mb-3 uppercase tracking-[0.2em]">Evaluation</div>
                      <div className="text-slate-300 text-sm font-light leading-relaxed">Security, Scalability & Compliance</div>
                   </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      
      <style jsx>{`
        @keyframes shimmer {
          0% { transform: translateX(-150%) skewX(-25deg); }
          100% { transform: translateX(150%) skewX(-25deg); }
        }
        .animate-in {
          animation: animate-in 0.5s ease-out;
        }
        .fade-in {
          opacity: 0;
          animation: fade-in 0.5s ease-out forwards;
        }
        .zoom-in-95 {
          transform: scale(0.95);
          animation: zoom-in 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes zoom-in {
          from { transform: scale(0.95); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }
      `}</style>
    </section>
  );
}
