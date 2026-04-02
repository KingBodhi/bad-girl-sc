"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const f = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, delay, ease: "easeOut" as const },
});

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Full-bleed hero image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-bg.jpg"
          alt="Bad Girl Strength Club"
          fill
          priority
          className="object-cover object-center"
          style={{ filter: "brightness(0.45)" }}
        />
        <div className="absolute inset-0"
          style={{
            background: "linear-gradient(to bottom, rgba(13,13,13,0.3) 0%, rgba(13,13,13,0.6) 50%, rgba(13,13,13,1) 100%)"
          }} />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        {/* BGSC wordmark */}
        <motion.p
          {...f(0.1)}
          className="text-xs font-black tracking-[0.5em] uppercase mb-8"
          style={{ color: "var(--crimson)", fontFamily: "'Arial Black',sans-serif" }}
        >
          BGSC · Bad Girl Strength Club
        </motion.p>

        {/* Rejected standard */}
        <motion.p {...f(0.2)} className="text-base md:text-lg mb-2 line-through opacity-30 italic"
          style={{ color: "var(--steel-gray)" }}>
          &ldquo;Stay light. Stay toned. Stay small.&rdquo;
        </motion.p>

        {/* Main headline */}
        <motion.h1
          {...f(0.3)}
          className="text-5xl sm:text-6xl md:text-8xl lg:text-[7rem] font-black uppercase leading-none tracking-tight mb-8"
          style={{ fontFamily: "'Impact','Arial Black',sans-serif", color: "var(--soft-white)" }}
        >
          You Were{" "}
          <span style={{ color: "var(--crimson)" }}>Never</span>
          <br />
          Meant to{" "}
          <span style={{ color: "var(--crimson)" }}>Stay Small.</span>
        </motion.h1>

        <motion.p {...f(0.45)} className="text-lg md:text-xl max-w-xl mx-auto leading-relaxed mb-12"
          style={{ color: "rgba(245,240,235,0.7)" }}>
          An invitation into a stronger standard.
          Not a workout plan — a behavioral code.
        </motion.p>

        <motion.div {...f(0.55)} className="flex flex-col items-center gap-3">
          <a href="#close"
            className="inline-block px-8 md:px-12 py-4 md:py-5 text-xs md:text-sm font-black uppercase tracking-[0.2em] transition-transform hover:scale-[1.03] pulse-cta w-full sm:w-auto text-center"
            style={{ background: "var(--crimson)", color: "var(--soft-white)", fontFamily: "'Arial Black',sans-serif" }}>
            Start Your Free 7-Day Trial →
          </a>
          <p className="text-xs tracking-widest" style={{ color: "rgba(245,240,235,0.4)" }}>
            No credit card required &nbsp;·&nbsp; Cancel anytime
          </p>
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10"
        initial={{ opacity: 0 }} animate={{ opacity: 0.35 }} transition={{ delay: 1.5 }}>
        <span className="text-xs tracking-[0.4em] uppercase" style={{ color: "var(--soft-white)" }}>Watch</span>
        <motion.div className="w-px" style={{ background: "var(--crimson)", height: 40 }}
          initial={{ scaleY: 0 }} animate={{ scaleY: 1 }} transition={{ delay: 1.7, duration: 0.5 }} />
      </motion.div>
    </section>
  );
}
