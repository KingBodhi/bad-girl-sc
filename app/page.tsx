"use client";

import { useState } from "react";
import HeroSection from "@/components/HeroSection";
import VideoSection from "@/components/VideoSection";
import MarqueeBar from "@/components/MarqueeBar";
import ProblemSection from "@/components/ProblemSection";
import StandardSection from "@/components/StandardSection";
import MethodSection from "@/components/MethodSection";
import CultureSection from "@/components/CultureSection";
import ObjectionsSection from "@/components/ObjectionsSection";
import CloseSection from "@/components/CloseSection";
import StickyCtaBar from "@/components/StickyCtaBar";
import SignupModal from "@/components/SignupModal";

export default function VSLPage() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <main className="relative overflow-x-hidden">
      <SignupModal open={modalOpen} onClose={() => setModalOpen(false)} />
      <StickyCtaBar onCta={() => setModalOpen(true)} />
      <HeroSection onCta={() => setModalOpen(true)} />
      <MarqueeBar />
      <VideoSection />
      <div className="section-divider" />
      <ProblemSection />
      <div className="section-divider" />
      <StandardSection />
      <div className="section-divider" />
      <MethodSection />
      <div className="section-divider" />
      <CultureSection />
      <div className="section-divider" />
      <ObjectionsSection />
      <div className="section-divider" />
      <CloseSection onCta={() => setModalOpen(true)} />
    </main>
  );
}
