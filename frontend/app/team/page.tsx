import Navbar from "../components/Navbar";
import Team from "../components/Team";
import Footer from "../components/Footer";

export default function TeamPage() {
  return (
    <main style={{ backgroundColor: '#0F1A18', minHeight: '100vh', color: '#f8fafc', position: 'relative' }}>
      {/* Global Background Elements */}
      <div className="premium-bg" />
      <div className="bg-glow-static" style={{ top: '10%', right: '-10%' }} />
      <div className="bg-glow-static" style={{ top: '40%', left: '-15%', background: 'radial-gradient(circle, rgba(91, 226, 179, 0.03) 0%, transparent 70%)' }} />
      <div className="bg-glow-static" style={{ bottom: '10%', right: '-10%' }} />
      
      <Navbar />
      <div style={{ paddingTop: '80px' }}> {/* Space for fixed Navbar */}
        <Team />
      </div>
      <Footer />
    </main>
  );
}
