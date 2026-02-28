'use client';

export default function Contact() {
  return (
    <section id="contact" className="section-gray">
      <div className="container">

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 60, alignItems: 'flex-start' }}>

          {/* Left — heading + contact info */}
          <div style={{ flex: '1 1 320px' }}>
            <h2 className="heading-lg">CONTACT US</h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', marginTop: 20, marginBottom: 40, textAlign: 'justify' }}>
              Reach out to us for sponsorship opportunities, participation details, or any further information.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
              <div>
                <h4 style={{ fontSize: '0.7rem', fontWeight: 800, color: 'var(--accent-gold)', letterSpacing: '0.1em', marginBottom: 8 }}>
                  LOCATION
                </h4>
                <p style={{ fontSize: '0.95rem', fontWeight: 600, color: 'var(--text-primary)', lineHeight: 1.6 }}>
                  A-4, Paschim Vihar, Main Rohtak Road,<br />New Delhi – 110 063
                </p>
              </div>
              <div>
                <h4 style={{ fontSize: '0.7rem', fontWeight: 800, color: 'var(--accent-gold)', letterSpacing: '0.1em', marginBottom: 8 }}>
                  Mail
                </h4>
                <a href="mailto:hackit@bvcoend.ac.in" style={{ fontSize: '0.95rem', fontWeight: 600, color: 'var(--text-primary)', lineHeight: 1.6 }}>
                  hackit@bvcoend.ac.in
                </a>
              </div>

              {/* <div>
                <h4 style={{ fontSize: '0.7rem', fontWeight: 800, color: '#c29b40', letterSpacing: '0.1em', marginBottom: 8 }}>
                  CONTACT
                </h4>
                <a
                  href="mailto:priyadarshi.prakhar@bharatividyapeeth.edu"
                  className="btn-brochure-gold"
                  style={{ display: 'inline-block' }}
                >
                  SUBMIT ABSTRACT
                </a>
              </div> */}
            </div>
          </div>

          {/* Right — map */}
          <div
            style={{
              flex: '2 1 200px',
              borderRadius: 4,
              overflow: 'hidden',
              border: '2px solid var(--accent-gold)',
              boxShadow: '0 8px 32px rgba(0,0,0,0.08)',
            }}
          >
            {/* Label bar */}
            <div
              style={{
                backgroundColor: 'var(--nav-bg)',
                padding: '12px 20px',
                display: 'flex',
                alignItems: 'center',
                gap: 10,
              }}
            >
              <span style={{ fontSize: '1rem' }}>📍</span>
              <div>
                <p style={{ color: 'var(--accent-gold)', fontSize: '0.65rem', fontWeight: 800, letterSpacing: '0.1em' }}>VENUE</p>
                <p style={{ color: 'var(--text-primary)', fontSize: '0.82rem', fontWeight: 600 }}>
                  Bharati Vidyapeeth's College of Engineering, Paschim Vihar, New Delhi
                </p>
              </div>
            </div>

            <iframe
              title="BVCOE Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3499.204!2d77.1106320!3d28.6758656!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d038e0dee2897%3A0x84bb3fed8b1c51f9!2sBharati%20Vidyapeeth's%20College%20of%20Engineering!5e0!3m2!1sen!2sin!4v1708845600000!5m2!1sen!2sin"
              width="100%"
              height="300"
              style={{ border: 0, display: 'block' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

        </div>
      </div>
    </section>
  );
}
