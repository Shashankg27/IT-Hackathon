import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
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
    <main>
      <Navbar />
      <Hero />
      <About />
      {/* <Tracks /> */}
      <EventStructure />
      <Prizes />
      <PastEvents />
      <div style={{ backgroundColor: '#f1f5f9', padding: '20px 0' }}>
         <div className="container">
            <div style={{ height: 1, backgroundColor: '#e2e8f0', width: '100%' }} />
         </div>
      </div>
      <WhySponsor />
      <SponsorTiers />
      <Contact />
      <Footer />
    </main>
  );
}
