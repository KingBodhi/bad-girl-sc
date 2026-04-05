"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Display, Eyebrow } from "./ui";

const PERKS = [
  "Full access to all 3 phases — unlocked day 1",
  "Video library: every movement, every standard",
  "Join the private community immediately",
  "Day 3 coach check-in included",
  "Cancel before day 7 — you pay nothing",
];

export default function CloseSection({ onCta }: { onCta: () => void }) {

  return (
    <section id="close" className="py-32 px-6" style={{ background: "var(--surface-1)" }}>
      <div className="max-w-5xl mx-auto">

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center mb-16 lg:mb-24">
          {/* Left: offer */}
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.7 }}>
            <Eyebrow>Final Close</Eyebrow>
            <Display className="text-3xl sm:text-4xl md:text-5xl mb-6">
              Step Into a{" "}
              <span style={{ color: "var(--crimson)" }}>Stronger Standard.</span>
            </Display>
            <p className="text-lg leading-relaxed mb-10"
               style={{ color: "rgba(255,255,255,0.8)", fontFamily: "var(--font-body, 'Inter', sans-serif)" }}>
              You can keep doing what you&apos;ve been doing and stay exactly where you are.
              Or you can accept the invitation — 7 days, completely free — and find out what
              happens when you finally train like you mean it.
            </p>

            <ul className="space-y-3 mb-10">
              {PERKS.map((perk) => (
                <li key={perk} className="flex items-start gap-3">
                  <span className="flex-shrink-0 mt-0.5 w-5 h-5 flex items-center justify-center text-xs font-bold"
                    style={{ background: "rgba(143,0,0,0.2)", color: "var(--crimson)", borderRadius: "var(--radius-sm)" }}>✓</span>
                  <span className="text-sm" style={{ color: "#FFFFFF", fontFamily: "var(--font-body, 'Inter', sans-serif)" }}>{perk}</span>
                </li>
              ))}
            </ul>

            <button onClick={onCta}
              className="block w-full text-center py-5 text-sm font-black uppercase tracking-[0.2em] transition-opacity hover:opacity-90 pulse-cta"
              style={{
                background: "var(--crimson)",
                color: "#FFFFFF",
                fontFamily: "var(--font-display, 'Arial Black', sans-serif)",
                borderRadius: "var(--radius-md)",
              }}>
              Done Playing Small. Start Free →
            </button>
          </motion.div>

          {/* Right: image */}
          <motion.div className="relative overflow-hidden hidden lg:block"
            style={{ height: 560, borderRadius: "var(--radius-lg)" }}
            initial={{ opacity: 0, scale: 0.97 }} whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.15 }}>
            <Image src="/images/close-triumph.jpg" alt="Step into a stronger standard" fill
              className="object-cover object-top" style={{ filter: "brightness(0.9) contrast(1.1)" }} />
            <div className="absolute right-0 top-0 bottom-0 w-1" style={{ background: "var(--crimson)" }} />
          </motion.div>
        </div>

        {/* Pricing */}
        <motion.div className="max-w-2xl mx-auto text-center py-12 mb-16"
          style={{ border: "1px solid var(--border)", background: "var(--surface-2)", borderRadius: "var(--radius-lg)" }}
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <p className="text-xs tracking-[0.3em] uppercase mb-6 font-bold"
             style={{ color: "rgba(255,255,255,0.5)", fontFamily: "var(--font-display, 'Arial Black', sans-serif)" }}>
            After your 7-day trial
          </p>
          <div className="flex items-end justify-center gap-10 mb-4">
            <div className="text-center">
              <p className="text-3xl font-black"
                 style={{ fontFamily: "var(--font-display, 'Arial Black', sans-serif)", color: "#FFFFFF" }}>
                $47<span className="text-lg font-normal">/mo</span>
              </p>
              <p className="text-xs mt-1" style={{ color: "rgba(255,255,255,0.5)" }}>Monthly</p>
            </div>
            <div className="text-center">
              <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: "var(--crimson)" }}>Best value</p>
              <p className="text-3xl font-black"
                 style={{ fontFamily: "var(--font-display, 'Arial Black', sans-serif)", color: "#FFFFFF" }}>
                $297<span className="text-lg font-normal">/yr</span>
              </p>
              <p className="text-xs mt-1" style={{ color: "rgba(255,255,255,0.5)" }}>$25/month · save 47%</p>
            </div>
          </div>
          <p className="text-xs" style={{ color: "rgba(255,255,255,0.5)" }}>Cancel before day 7 and you are charged nothing.</p>
        </motion.div>

        {/* Sign-off */}
        <motion.div className="text-center"
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
          viewport={{ once: true }} transition={{ duration: 0.8 }}>
          <p className="text-2xl md:text-3xl lg:text-4xl font-black uppercase mb-4 px-4"
             style={{ color: "var(--crimson)", fontFamily: "var(--font-display, 'Arial Black', sans-serif)" }}>
            If you are ready to build something stronger, you are in the right place.
          </p>
          <p className="text-xs mt-8" style={{ color: "rgba(255,255,255,0.15)" }}>
            © {new Date().getFullYear()} Bad Girl Strength Club · All rights reserved
          </p>
        </motion.div>
      </div>
    </section>
  );
}
