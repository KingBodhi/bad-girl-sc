"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Eyebrow, Display } from "./ui";

const PHASES = [
  { phase: "Phase 1", name: "Foundation", weeks: "Weeks 1–4", img: "/images/phase1-foundation.jpg",
    desc: "Movement patterns, structural integrity, joint prep. You learn how your body actually works — then you learn to demand more from it." },
  { phase: "Phase 2", name: "Build",       weeks: "Weeks 5–10", img: "/images/phase2-build.jpg",
    desc: "Progressive overload done right. You'll lift numbers you didn't think were possible. This is where the identity shift happens." },
  { phase: "Phase 3", name: "Power",       weeks: "Weeks 11–16", img: "/images/phase3-power.jpg",
    desc: "Strength meets speed meets presence. You don't just look different — you move differently. You enter rooms differently." },
];

const INCLUDED = [
  "16-week progressive training system",
  "Full video demonstration library",
  "Nutrition guidance built around performance",
  "Weekly coach check-ins",
  "Private community of 1,200+ women",
  "Lifetime access to all program updates",
  "Mobile app for session logging",
  "Monthly live Q&A with Steph",
];

export default function MethodSection() {
  return (
    <section className="py-24 px-6" style={{ background: "var(--near-black)" }}>
      <div className="max-w-5xl mx-auto">

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6 }} className="max-w-3xl mb-20">
          <Eyebrow>The Method</Eyebrow>
          <Display className="text-3xl sm:text-4xl md:text-5xl mb-6">
            Eat Clean.{" "}
            <span style={{ color: "var(--crimson)" }}>Lift Heavy.</span>
            {" "}Get Coached.
          </Display>
          <p className="text-lg leading-relaxed"
             style={{ color: "rgba(255,255,255,0.75)", fontFamily: "var(--font-body, 'Inter', sans-serif)" }}>
            Not a recycled men&apos;s program. Not high-rep &ldquo;toning.&rdquo; A structured 16-week
            system built around three pillars that actually move the needle — clean nutrition,
            heavy progressive lifting, and real coaching accountability.
          </p>
        </motion.div>

        {/* Phases */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12 lg:mb-20">
          {PHASES.map((p, i) => (
            <motion.div key={p.phase}
              className="relative overflow-hidden"
              style={{ background: "var(--surface-1)", border: "1px solid var(--border)", borderRadius: "var(--radius-lg)" }}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div className="relative h-44 overflow-hidden" style={{ borderRadius: "var(--radius-lg) var(--radius-lg) 0 0" }}>
                <Image src={p.img} alt={p.name} fill
                  className="object-cover object-center"
                  style={{ filter: "brightness(0.8) contrast(1.15)" }} />
                <div className="absolute inset-0" style={{
                  background: "linear-gradient(to bottom, transparent 40%, var(--surface-1) 100%)"
                }} />
                <span className="absolute top-3 right-4 text-6xl font-black opacity-[0.12] leading-none"
                  style={{ fontFamily: "var(--font-display, 'Arial Black', sans-serif)", color: "#FFFFFF" }}>
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <div className="p-6">
                <p className="text-xs font-bold uppercase tracking-widest mb-1"
                   style={{ color: "var(--crimson)", fontFamily: "var(--font-display, 'Arial Black', sans-serif)" }}>
                  {p.phase} · {p.weeks}
                </p>
                <h3 className="text-2xl font-black uppercase mb-3"
                    style={{ fontFamily: "var(--font-display, 'Arial Black', sans-serif)", color: "#FFFFFF" }}>
                  {p.name}
                </h3>
                <p className="text-sm leading-relaxed"
                   style={{ color: "rgba(255,255,255,0.72)", fontFamily: "var(--font-body, 'Inter', sans-serif)" }}>{p.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* What's included */}
        <motion.div className="p-5 md:p-8 lg:p-12"
          style={{ background: "var(--surface-2)", border: "1px solid var(--border)", borderRadius: "var(--radius-lg)" }}
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <h4 className="text-xs font-bold uppercase tracking-[0.3em] mb-8"
              style={{ color: "var(--crimson)", fontFamily: "var(--font-display, 'Arial Black', sans-serif)" }}>
            Everything Included in Your Free 7-Day Trial
          </h4>
          <ul className="grid md:grid-cols-2 gap-x-12 gap-y-4">
            {INCLUDED.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="flex-shrink-0 mt-0.5 w-5 h-5 flex items-center justify-center text-xs font-bold"
                  style={{ background: "rgba(143,0,0,0.2)", color: "var(--crimson)", borderRadius: "var(--radius-sm)" }}>✓</span>
                <span className="text-sm"
                      style={{ color: "#FFFFFF", fontFamily: "var(--font-body, 'Inter', sans-serif)" }}>{item}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
