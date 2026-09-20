import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Intro from "@/components/Intro";
import Services from "@/components/Services";
import SelectedWork from "@/components/SelectedWork";
import Process from "@/components/Process";
import Reviews from "@/components/Reviews";
import About from "@/components/About";
import Packages from "@/components/Packages";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

import Image from "next/image";

export default function Home() {
  return (
    <>
      <Nav />
      <Hero />
      <Intro />
      <Services />
      <SelectedWork />
      <Process />
      <Reviews />
      <About />
      <Packages />
      <FAQ />
      
      {/* Immersive CTA & Footer Wrapper */}
      <div style={{ position: "relative" }}>
        {/* Absolute Background image */}
        <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
          <Image
            src="/images/new-cta-bg.jpg"
            alt="Colorful abstract background"
            fill
            className="object-cover"
            style={{ opacity: 0.45, filter: "saturate(1.5) contrast(1.2)" }}
          />
          {/* Gradient to blend smoothly from the dark page background into the image */}
          <div 
            style={{ 
              position: "absolute", 
              inset: 0, 
              background: "linear-gradient(to bottom, var(--color-bg) 0%, transparent 20%, transparent 80%, rgba(0,0,0,0.8) 100%)",
            }} 
          />
        </div>
        
        {/* Content */}
        <div style={{ position: "relative", zIndex: 1 }}>
          <CTA />
          <Footer />
        </div>
      </div>
    </>
  );
}
