'use client';
import ScrollReveal from './ScrollReveal';

export default function About() {
  return (
    <section id="about" className="section-white">
      <div className="dots-grid" />
      <div className="bg-text-large" style={{ bottom: '-5%', left: '-5%', opacity: 0.02 }}>ABOUT</div>
      <div className="container">
        <div style={{ display: 'flex', gap: 60, flexWrap: 'wrap' }}>
          {/* Left Column - Main Info */}
          <div style={{ flex: '1 1 500px' }}>
            <ScrollReveal>
              <h2 className="heading-lg">ABOUT US</h2>
            </ScrollReveal>
            <div style={{ marginTop: 40 }}>
               <ScrollReveal delay={100}>
                 <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#1e293b', marginBottom: 16 }}>
                    BVCOE, New Delhi
                 </h3>
               </ScrollReveal>
               <ScrollReveal delay={200}>
                 <p style={{ color: '#475569', marginBottom: 24, fontSize: '0.95rem' }}>
                    Bharati Vidyapeeth’s College of Engineering (BVCOE), since its establishment in 1999, has strived to provide the best engineering education through well-qualified faculty and modern labs. 
                    The college is affiliated with GGSIPU, Delhi, and approved by AICTE.
                 </p>
               </ScrollReveal>
               
               <div style={{ display: 'flex', gap: 30, marginBottom: 40, flexWrap: 'wrap' }}>
                  <ScrollReveal delay={300} animation="reveal-left" className="flex-1 min-w-[250px]">
                    <div className="brochure-card hover:shadow-xl" style={{ backgroundColor: '#1e293b', color: 'white' }}>
                      <h4 style={{ color: '#c29b40', fontSize: '0.9rem', fontWeight: 800, marginBottom: 12, letterSpacing: '0.1em' }}>OUR VISION</h4>
                      <p style={{ fontSize: '0.85rem', opacity: 0.9, lineHeight: 1.7 }}>
                        To be an institute of excellence providing quality technical education and research to create competent graduates for serving industry and society.
                      </p>
                      <div className="brochure-line" style={{ marginTop: 24 }} />
                    </div>
                  </ScrollReveal>
                  <ScrollReveal delay={400} animation="reveal-right" className="flex-1 min-w-[250px]">
                    <div className="brochure-card hover:shadow-xl">
                      <h4 style={{ color: '#c29b40', fontSize: '0.9rem', fontWeight: 800, marginBottom: 12, letterSpacing: '0.1em' }}>OUR MISSION</h4>
                      <p style={{ fontSize: '0.85rem', color: '#475569', lineHeight: 1.7 }}>
                        To impart quality technical education through dynamic teaching-learning environment and promote research and innovation activities.
                      </p>
                      <div className="brochure-line" style={{ marginTop: 24 }} />
                    </div>
                  </ScrollReveal>
               </div>
            </div>
          </div>

          {/* Right Column - Secondary Info / Image Placeholder style */}
          <div style={{ flex: '1 1 300px' }}>
             <div style={{ border: '2px solid #c29b40', padding: '32px', marginBottom: 32 }}>
                <h3 style={{ fontSize: '1.1rem', fontWeight: 800, color: '#1e293b', marginBottom: 20 }}>THE THEME</h3>
                <p style={{ fontSize: '0.9rem', color: '#475569', fontWeight: 600, marginBottom: 16 }}>
                   Digital Trust & Data Accountability powered by the DPDP Act 2023
                </p>
                <p style={{ fontSize: '0.85rem', color: '#64748b' }}>
                   The theme targets the creation of trust architectures that integrate legal compliance, ethical AI, and cybersecurity resilience into scalable digital systems.
                </p>
             </div>
             
             <div style={{ backgroundColor: '#1e293b', padding: '32px' }}>
                <h4 style={{ color: '#c29b40', fontSize: '0.85rem', fontWeight: 800, marginBottom: 16 }}>DEPARTMENT OF IT</h4>
                <p style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.8)' }}>
                   Formed in 1999, the department trains world-class IT engineers, researchers, and entrepreneurs to serve industry and society with ethical values.
                </p>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}
