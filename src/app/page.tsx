
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AboutPage from "./components/AboutPage";
import MissionVision from "./components/MissionVision";
import OurWork from "./components/OurWork";
import OurImpact from "./components/OurImpact";
import GetInvolved from "./components/GetInvolved";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function HomePage() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <AboutPage />
        <MissionVision />
        <OurWork />
        <OurImpact />
        <GetInvolved />
        <Contact />
      </main>

      <Footer />
    </>
  );
}