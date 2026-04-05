"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const f = (delay = 0) => ({
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: "easeOut" as const },
});

export default function HeroSection({ onCta }: { onCta: () => void }) {
  return (
    <section className="relative h-screen max-h-screen flex flex-col overflow-hidden">

      {/* Full-bleed background */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-bg.jpg"
          alt="Bad Girl Strength Club"
          fill
          priority
          className="object-cover object-center"
          style={{ filter: "brightness(0.65) contrast(1.1)" }}
        />
        <div className="absolute inset-0"
          style={{
            background: "linear-gradient(to bottom, rgba(0,0,0,0.45) 0%, rgba(0,0,0,0.5) 50%, rgba(0,0,0,0.85) 100%)"
          }} />
      </div>

      {/* Logo — anchored top, smaller on mobile */}
      <motion.div
        {...f(0.05)}
        className="relative z-10 flex justify-center pt-5 md:pt-8"
      >
        <Image
          src="/images/bgsc-logo.png"
          alt="BGSC — Bad Girl Strength Club"
          width={640}
          height={216}
          className="w-24 h-auto md:w-44"
          priority
        />
      </motion.div>

      {/* Main content — fills remaining space, vertically centered */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center text-center px-5 pb-10">

        <motion.h1
          {...f(0.2)}
          className="font-black uppercase leading-none tracking-tight mb-4 md:mb-6"
          style={{
            fontFamily: "var(--font-display, 'Arial Black', sans-serif)",
            color: "#FFFFFF",
            fontSize: "clamp(3.2rem, 10vw, 6rem)",
          }}
        >
          You Were{" "}
          <span style={{ color: "var(--crimson)" }}>Never</span>
          <br />
          Meant to{" "}
          <span style={{ color: "var(--crimson)" }}>Stay Small.</span>
        </motion.h1>

        <motion.p
          {...f(0.35)}
          className="text-sm md:text-base max-w-xs md:max-w-md mx-auto leading-relaxed mb-6 md:mb-8"
          style={{ color: "rgba(255,255,255,0.8)", fontFamily: "var(--font-body, 'Inter', sans-serif)" }}
        >
          An invitation into a stronger standard. Not a workout plan — a behavioral code.
        </motion.p>

        <motion.button
          {...f(0.48)}
          onClick={onCta}
          className="px-8 md:px-12 py-3 md:py-4 text-xs font-black uppercase tracking-[0.2em] transition-opacity hover:opacity-90 pulse-cta"
          style={{
            background: "var(--crimson)",
            color: "#FFFFFF",
            fontFamily: "var(--font-display, 'Arial Black', sans-serif)",
            borderRadius: "var(--radius-md)",
          }}
        >
          Done Playing Small. Start Free →
        </motion.button>
      </div>

      {/* Scroll cue — anchored bottom */}
      <motion.div
        className="relative z-10 flex flex-col items-center pb-5 md:pb-7 gap-1.5"
        initial={{ opacity: 0 }} animate={{ opacity: 0.5 }} transition={{ delay: 1.3 }}
      >
        <span className="text-xs tracking-[0.4em] uppercase"
          style={{ color: "#FFFFFF", fontFamily: "var(--font-display, 'Arial Black', sans-serif)" }}>
          Watch
        </span>
        {/* V chevron */}
        <svg width="18" height="10" viewBox="0 0 18 10" fill="none">
          <polyline points="1,1 9,9 17,1" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </motion.div>

    </section>
  );
}
