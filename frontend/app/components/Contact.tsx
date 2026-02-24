'use client';

export default function Contact() {
  return (
    <section id="contact" className="section-gray">
      <div className="container">
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 80 }}>
           <div style={{ flex: '1 1 400px' }}>
              <h2 className="heading-lg">CONTACT US</h2>
              <p style={{ color: '#475569', fontSize: '1.1rem', marginTop: 20, marginBottom: 40 }}>
                 Reach out to us for sponsorship opportunities, participation details, or any further information.
              </p>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
                 {/* <div>
                    <h4 style={{ fontSize: '0.7rem', fontWeight: 800, color: '#c29b40', letterSpacing: '0.1em', marginBottom: 8 }}>EMAIL</h4>
                    <p style={{ fontSize: '1.1rem', fontWeight: 600, color: '#1e293b' }}>priyadarshi.prakhar@bharatividyapeeth.edu</p>
                 </div>
                 <div>
                    <h4 style={{ fontSize: '0.7rem', fontWeight: 800, color: '#c29b40', letterSpacing: '0.1em', marginBottom: 8 }}>PHONE</h4>
                    <p style={{ fontSize: '1.1rem', fontWeight: 600, color: '#1e293b' }}>+91 74283 96887</p>
                 </div> */}
                 <div>
                    <h4 style={{ fontSize: '0.7rem', fontWeight: 800, color: '#c29b40', letterSpacing: '0.1em', marginBottom: 8 }}>LOCATION</h4>
                    <p style={{ fontSize: '0.95rem', fontWeight: 600, color: '#1e293b' }}>
                       A-4, Paschim Vihar, Main Rohtak Road, New Delhi – 110 063
                    </p>
                 </div>
              </div>
           </div>

           <div style={{ flex: '1 1 300px', backgroundColor: 'white', padding: '48px', border: '1px solid #e2e8f0' }}>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#1e293b', marginBottom: 20 }}>READY TO START?</h3>
              <p style={{ color: '#64748b', fontSize: '0.9rem', marginBottom: 32 }}>
                 Submit your proposal abstract and compete for a total prize pool of ₹1,15,000+.
              </p>
              <a href="mailto:priyadarshi.prakhar@bharatividyapeeth.edu" className="btn-brochure-gold" style={{ width: '100%', textAlign: 'center' }}>
                 SUBMIT ABSTRACT
              </a>
           </div>
        </div>
      </div>
    </section>
  );
}
