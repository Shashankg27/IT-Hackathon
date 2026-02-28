'use client';
import Image from 'next/image';
import ScrollReveal from './ScrollReveal';
import { useState } from 'react';

const events = [
  {
    title: 'HACK.IT@BVP 2.0',
    date: 'BVEST 2023',
    tag: '24-Hour Flagship Hackathon',
    image: '/HACK.IT@BVP2.0/page_5_img_2.jpeg',
    description: [
      'Hack.IT@BVP 2.0 was the flagship 24-hour hackathon of BVEST 2023, organized by the IT Department of Bharati Vidyapeeth\'s College of Engineering, New Delhi.',
      'It provided a unique platform for students to transform innovative ideas into practical software solutions, fostering collaboration among programmers, designers, and subject matter experts.',
      'The event\'s theme was aligned with G20 priorities for 2026, and participants worked on key areas including Education, Health, Trade & Investment, Environment & Climate Sustainability, Disaster Risk Management, and Open Innovation.'
    ],
  },
  {
    title: 'HACK.IT@BVP 1.0',
    date: 'BVEST 2019',
    tag: 'Go Green Hackathon',
    image: '/HACK.IT@BVP1.0/page_6_img_2.png',
    description: [
      'Bharati Vidyapeeth\'s College of Engineering hosted this hackathon as part of BVEST with the motto "GO GREEN", supporting the government\'s Go Green Movement.',
      'Participants innovated around themes like Healthcare, Education, Sustainability, Security, and Blockchain, presenting ideas that are both creative and practical.',
      'Event highlights included on-spot challenge areas providing a platform for participants to showcase creative and practical solutions, encouraging innovative and scalable ideas that can be implemented in the real world.'
    ],
  },
  {
    title: 'HACKBLOCKS 1.0',
    date: 'May 10th-11th',
    tag: 'Hybrid Hackathon',
    image: '/HACKBLOCKS1.0/page_7_img_2.png',
    description: [
      'HackBlocks 1.0 was successfully conducted on 10th-11th May as a hybrid hackathon by Bharati Vidyapeeth\'s College of Engineering.',
      'The event was structured in two phases: Day 1 was held online via Discord to enable broad participation and collaboration, followed by the offline finale at the Microsoft Office, Gurugram on Day 2.',
      'The hackathon brought together developers, designers, and innovators to work on real-world problem statements across diverse domains including Fintech, Education, Cybersecurity, Sustainability, Tourism & Culture, Healthcare, Open Innovation, Blockchain, and Artificial Intelligence.'
    ],
  },
  {
    title: 'HACK THE CRISIS 3.0',
    date: 'G20 Edition',
    tag: 'Interdisciplinary Hackathon',
    image: '/HACKTHECRISIS3.0/page_8_img_2.png',
    description: [
      'Organized by BVP ISTE, HTC 3.0 aligned with India\'s G20 Presidency to tackle modern global challenges.',
      'The event focused on Education, Trade, and Investment, encouraging interdisciplinary teams to transform systemic crises into sustainable, solution-oriented opportunities.',
      'It built upon the legacy of previous Hack The Crisis editions, continuing the tradition of using technology to address critical global issues.'
    ],
  },
  {
    title: 'HACK THE CRISIS 2.0',
    date: 'Virtual Edition',
    tag: 'Tech for Conflict Regions',
    image: '/HACKTHECRISIS2.0/image.png', // Note: filename appears truncated in your screenshot
    description: [
      'Hack The Crisis 2.0 was a virtual hackathon focused on tech solutions for conflict-affected regions.',
      'Using an avatar-based digital campus, participants collaborated across themes like Fintech, Logistics, and Health to address the long-term impacts of global crises.',
      'This innovative virtual format allowed global participation while creating immersive collaboration experiences.'
    ],
  },
  {
    title: 'HACK THE CRISIS 1.0',
    date: 'COVID-19 Response',
    tag: 'Pandemic Solutions',
    image: '/HACKTHECRISIS1.0/page_8_img_3.png',
    description: [
      'Organized with Team ISTE student chapters nationwide, Hack the Crisis challenged young innovators to develop scalable tech solutions for the COVID-19 pandemic.',
      'Participants collaborated with experts to optimize vaccination efforts, manage medical supplies, and support local businesses and high-risk individuals.',
      'This was the inaugural edition that established the foundation for the Hack The Crisis series.'
    ],
  },
  {
    title: 'CODECLASH',
    date: 'GDSC',
    tag: '24-Hour Flagship Hackathon',
    image: '/CODECLASH/page_9_img_2.png',
    description: [
      'CodeClash was a 24-hour hackathon that brought together developers, designers, and innovators to solve real-world challenges through rapid collaboration and product development.',
      'With 900+ registrations, 80 shortlisted teams, and 10 finalists, it became one of the largest and most engaging student-led technical events on campus.',
      'Participants received expert mentorship, structured evaluation, exciting prizes, swags, and valuable networking opportunities while bridging the gap between academic learning and industry expectations.'
    ],
  },
];

export default function PastEvents() {
  const [activeIdx, setActiveIdx] = useState<number | null>(null);
  const [expandedMobileIdx, setExpandedMobileIdx] = useState<number | null>(null);

  const toggleMobileExpand = (idx: number) => {
    setExpandedMobileIdx(expandedMobileIdx === idx ? null : idx);
  };

  return (
    <section id="past-events" className="section-navy" style={{ background: '#0F1A18', padding: '120px 24px' }}>
      <div className="container">
        <ScrollReveal>
          <div style={{ textAlign: 'center', marginBottom: '80px' }}>
            <h2 className="heading-lg" style={{ color: '#5BE2B3', borderBottomColor: '#5BE2B3' }}>PAST EVENTS</h2>
            <p style={{ color: '#94a3b8', marginTop: '20px', maxWidth: '600px', marginInline: 'auto' }}>
              Explore the legacy of innovation and collaboration from previous hackathons hosted by the IT Department.
            </p>
          </div>
        </ScrollReveal>

        <div className="ladder-container" style={{ position: 'relative', maxWidth: '1000px', margin: '0 auto' }}>
          {events.map((ev, idx) => (
            <ScrollReveal
              key={ev.title}
              delay={idx * 150}
              animation={idx % 2 === 0 ? "reveal-left" : "reveal-right"}
              style={{ position: 'relative', zIndex: activeIdx === idx ? 50 : 1 }}
            >
              <div 
                className="event-ladder-item group hover:z-10"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: idx % 2 === 0 ? 'flex-start' : 'flex-end',
                  marginBottom: '40px',
                  position: 'relative'
                }}
                onMouseEnter={() => setActiveIdx(idx)}
                onMouseLeave={() => setActiveIdx(null)}
              >
                {/* Event Name/Button */}
                <div 
                  className="event-trigger"
                  onClick={() => toggleMobileExpand(idx)}
                  style={{
                    padding: '20px 40px',
                    background: '#121F1C',
                    border: '1px solid #2C3E3A',
                    borderRadius: '8px',
                    cursor: 'pointer',
                    position: 'relative',
                    zIndex: 5,
                    width: '350px',
                    textAlign: idx % 2 === 0 ? 'left' : 'right',
                    transition: 'all 0.3s ease',
                  }}
                >
                  <p style={{ color: '#5BE2B3', fontSize: '0.8rem', fontWeight: 600, letterSpacing: '0.1em', marginBottom: '8px' }}>{ev.date} • {ev.tag}</p>
                  <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#f8fafc', transition: 'color 0.3s ease' }} className="event-title">{ev.title}</h3>
                  
                  {/* Mobile expand indicator */}
                  <span className="mobile-expand-icon" style={{
                    display: 'none',
                    position: 'absolute',
                    right: '16px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    color: '#5BE2B3',
                    fontSize: '1.2rem',
                    transition: 'transform 0.3s ease',
                  }}>
                    {expandedMobileIdx === idx ? '−' : '+'}
                  </span>
                </div>

                {/* Connecting Line - Desktop Only */}
                <div 
                  className="connecting-line hidden md:block"
                  style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: '100px',
                    height: '2px',
                    background: '#2C3E3A',
                    zIndex: 1,
                  }}
                />

                {/* Desktop Hover Reveal Details Card */}
                <div 
                  className="event-details-card desktop-only"
                  style={{
                    position: 'absolute',
                    top: '50%',
                    [idx % 2 === 0 ? 'left' : 'right']: '400px',
                    transform: 'translateY(-50%)',
                    width: '450px',
                    background: '#1A2F2B',
                    border: '1px solid #5BE2B3',
                    borderRadius: '12px',
                    padding: '24px',
                    boxShadow: '0 20px 40px rgba(0,0,0,0.4)',
                    opacity: 0,
                    visibility: 'hidden',
                    pointerEvents: 'none',
                    transition: 'all 0.4s cubic-bezier(0.2, 0.8, 0.2, 1)',
                    zIndex: 200,
                  }}
                >
                  <div style={{ position: 'relative', width: '100%', height: '200px', marginBottom: '20px', borderRadius: '8px', overflow: 'hidden' }}>
                    <Image src={ev.image} alt={ev.title} fill style={{ objectFit: 'cover' }} />
                  </div>
                  {ev.description.map((para, pIdx) => (
                    <p key={pIdx} style={{ fontSize: '0.875rem', color: '#e2e8f0', lineHeight: 1.6, marginBottom: pIdx < ev.description.length - 1 ? 12 : 0, textAlign: 'justify' }}>
                      {para}
                    </p>
                  ))}
                </div>
              </div>

              {/* Mobile Expandable Details */}
              <div 
                className="mobile-event-details"
                style={{
                  maxHeight: expandedMobileIdx === idx ? '800px' : '0',
                  overflow: 'hidden',
                  transition: 'max-height 0.5s cubic-bezier(0.2, 0.8, 0.2, 1), opacity 0.4s ease, margin 0.3s ease',
                  opacity: expandedMobileIdx === idx ? 1 : 0,
                  marginTop: expandedMobileIdx === idx ? '20px' : '0',
                  marginBottom: expandedMobileIdx === idx ? '20px' : '0',
                  background: '#1A2F2B',
                  border: expandedMobileIdx === idx ? '1px solid #5BE2B3' : '1px solid transparent',
                  borderRadius: '12px',
                  padding: expandedMobileIdx === idx ? '20px' : '0 20px',
                }}
              >
                <div style={{ position: 'relative', width: '100%', height: '180px', marginBottom: '16px', borderRadius: '8px', overflow: 'hidden' }}>
                  <Image src={ev.image} alt={ev.title} fill style={{ objectFit: 'cover' }} />
                </div>
                {ev.description.map((para, pIdx) => (
                  <p key={pIdx} style={{ fontSize: '0.9rem', color: '#e2e8f0', lineHeight: 1.6, marginBottom: pIdx < ev.description.length - 1 ? 12 : 0, textAlign: 'left' }}>
                    {para}
                  </p>
                ))}
              </div>

              {/* Add CSS for Hover Effects in a style tag just for this component */}
              <style dangerouslySetInnerHTML={{__html: `
                .event-ladder-item {
                  z-index: 1;
                }
                .event-ladder-item:hover {
                  z-index: 999 !important;
                }
                .event-ladder-item:hover .event-trigger {
                  background: #1A2F2B !important;
                  border-color: #5BE2B3 !important;
                  transform: scale(1.05) !important;
                }
                .event-ladder-item:hover .event-title {
                  color: #5BE2B3 !important;
                }
                .event-ladder-item:hover .event-details-card.desktop-only {
                  opacity: 1 !important;
                  visibility: visible !important;
                  transform: translateY(-50%) translateX(${idx % 2 === 0 ? '20px' : '-20px'}) !important;
                  z-index: 1999 !important;
                }
                
                /* Mobile Styles */
                @media (max-width: 768px) {
                  .event-details-card.desktop-only {
                    display: none !important;
                  }
                  .event-ladder-item {
                    justify-content: center !important;
                    margin-bottom: 0 !important;
                  }
                  .event-trigger {
                    text-align: left !important;
                    width: 100% !important;
                    max-width: 400px !important;
                    padding: 20px 24px !important;
                  }
                  .mobile-expand-icon {
                    display: block !important;
                  }
                  .mobile-event-details {
                    width: 100% !important;
                    max-width: 400px !important;
                    margin-left: auto !important;
                    margin-right: auto !important;
                  }
                }
                
                @media (max-width: 480px) {
                  .event-trigger {
                    padding: 20px 20px !important;
                    margin: 5px 0px !important;
                  }
                  .event-trigger h3 {
                    font-size: 1.2rem !important;
                    padding-right: 30px !important;
                  }
                  .mobile-event-details {
                    max-width: 100% !important;
                  }
                }
              `}} />
            </ScrollReveal>
          ))}
          
          {/* Vertical Center Line for Ladder - Desktop Only */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-[#2C3E3A] hidden md:block" style={{ transform: 'translateX(-50%)' }} />
        </div>
      </div>
    </section>
  );
}