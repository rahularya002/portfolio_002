"use client";

import { useState } from "react";
import BleachLoader from "./components/BleachLoader";
import HeroSection from "./components/HeroSection";
import ProjectsSection from "./components/ProjectsSection";
import AboutSection from "./components/AboutSection";
import TechStackSection from "./components/TechStackSection";
import ContactSection from "./components/ContactSection";

export default function Home() {
  const [showLoader, setShowLoader] = useState(true);

  return (
    <>
      {/* 1. BLEACH-INSPIRED INITIAL LOADING CARD */}
      <BleachLoader
        isVisible={showLoader}
        onDismiss={() => setShowLoader(false)}
      />

      {/* 2. FULL-SCREEN SNAP SCROLL BLEACH INTERMISSION CARDS CONTAINER (NO NAVBARS) */}
      <main className="h-screen w-screen overflow-y-scroll snap-y snap-mandatory scroll-smooth relative z-20 bg-[#040406]">
        <HeroSection />
        <ProjectsSection />
        <AboutSection />
        <TechStackSection />
        <ContactSection />
      </main>
    </>
  );
}
