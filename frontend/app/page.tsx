import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import AboutDepartment from "./components/AboutDepartment";
import EventStructure from "./components/EventStructure";
import Tracks from "./components/Tracks";
import Prizes from "./components/Prizes";
import PastEvents from "./components/PastEvents";
import WhySponsor from "./components/WhySponsor";
import SponsorTiers from "./components/SponsorTiers";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main style={{ backgroundColor: '#0F1A18', minHeight: '100vh', color: '#f8fafc', position: 'relative' }}>
      {/* Global Background Elements */}
      <div className="premium-bg" />
      <div className="bg-glow-static" style={{ top: '10%', right: '-10%' }} />
      <div className="bg-glow-static" style={{ top: '40%', left: '-15%', background: 'radial-gradient(circle, rgba(91, 226, 179, 0.03) 0%, transparent 70%)' }} />
      <div className="bg-glow-static" style={{ bottom: '10%', right: '-10%' }} />
      <Navbar />
      <Hero />
      <About />
      <AboutDepartment />
      {/* <Tracks /> */}
      <EventStructure />
      <Prizes />
      <PastEvents />
      <div style={{ backgroundColor: '#121F1C', padding: '20px 0' }}>
         <div className="container">
            <div style={{ height: 1, backgroundColor: '#2C3E3A', width: '100%' }} />
         </div>
      </div>
      <WhySponsor />
      <SponsorTiers />
      <Contact />
      <Footer />
    </main>
  );
}
