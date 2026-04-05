"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Eyebrow, Display } from "./ui";

export default function StandardSection() {
  return (
    <section className="py-24 px-6" style={{ background: "var(--surface-1)" }}>
      <div className="max-w-5xl mx-auto">

        {/* Top */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center mb-12 lg:mb-20">
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.7 }}>
            <Eyebrow>The New Standard</Eyebrow>
            <Display className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-6 md:mb-8">
              A Different<br />
              <span style={{ color: "var(--crimson)" }}>Standard.</span>
            </Display>
            <p className="text-lg leading-relaxed mb-6"
               style={{ color: "rgba(255,255,255,0.78)", fontFamily: "var(--font-body, 'Inter', sans-serif)" }}>
              Women do not lack motivation — they lack a standard worth keeping.
              Bad Girl Strength Club is a behavioral identity system. You are not buying a workout program.
              You are stepping into a new behavioral code.
            </p>
            {/* Core method */}
            <div className="p-6" style={{ background: "var(--crimson)", borderRadius: "var(--radius-md)" }}>
              <p className="text-lg md:text-2xl font-black uppercase tracking-wide text-center"
                 style={{ fontFamily: "var(--font-display, 'Arial Black', sans-serif)", color: "#FFFFFF" }}>
                Eat Clean.&nbsp;&nbsp;Lift Heavy.&nbsp;&nbsp;Get Coached.
              </p>
            </div>
          </motion.div>

          <motion.div className="relative overflow-hidden hidden md:block"
            style={{ height: 440, borderRadius: "var(--radius-lg)" }}
            initial={{ opacity: 0, scale: 0.97 }} whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.1 }}>
            <Image src="/images/standard-power.jpg" alt="The stronger standard" fill
              className="object-cover object-top" style={{ filter: "brightness(0.9) contrast(1.1)" }} />
          </motion.div>
        </div>

        {/* Comparison table */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6 }}>

          {/* Desktop: 3-col grid */}
          <div className="hidden md:grid grid-cols-3 gap-px"
               style={{ background: "var(--border)", borderRadius: "var(--radius-md)", overflow: "hidden" }}>
            <div className="p-4" style={{ background: "var(--surface-2)" }} />
            <div className="p-4 text-center" style={{ background: "var(--surface-2)" }}>
              <p className="text-xs font-bold uppercase tracking-widest"
                 style={{ color: "rgba(255,255,255,0.4)", fontFamily: "var(--font-display, 'Arial Black', sans-serif)" }}>Mainstream Fitness</p>
            </div>
            <div className="p-4 text-center" style={{ background: "var(--surface-2)" }}>
              <p className="text-xs font-bold uppercase tracking-widest"
                 style={{ color: "var(--crimson)", fontFamily: "var(--font-display, 'Arial Black', sans-serif)" }}>BGSC Standard</p>
            </div>
            {[
              { label: "The Goal",      left: "Shrinking, becoming lighter",       right: "Expanding. Carrying yourself with authority." },
              { label: "The Aesthetic", left: "Pastel, soft, cute wellness",        right: "High-contrast, cinematic, structured." },
              { label: "The Messaging", left: "Passive wellness, approval-seeking", right: "Disciplined self-respect. Unapologetic." },
              { label: "The Method",    left: "Toning, generic content",            right: "Eat clean. Lift heavy. Get coached." },
            ].map((row, i) => (
              <div key={i} className="contents">
                <div className="p-4 flex items-center" style={{ background: "var(--surface-1)", borderTop: "1px solid var(--border)" }}>
                  <p className="text-xs font-black uppercase tracking-wide"
                     style={{ color: "#FFFFFF", fontFamily: "var(--font-display, 'Arial Black', sans-serif)" }}>{row.label}</p>
                </div>
                <div className="p-4 flex items-center" style={{ background: "var(--surface-1)", borderTop: "1px solid var(--border)" }}>
                  <p className="text-xs line-through" style={{ color: "rgba(255,255,255,0.3)" }}>{row.left}</p>
                </div>
                <div className="p-4 flex items-center" style={{ background: "var(--surface-1)", borderTop: "1px solid var(--border)" }}>
                  <p className="text-xs font-bold" style={{ color: "#FFFFFF", fontFamily: "var(--font-body, 'Inter', sans-serif)" }}>{row.right}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile: stacked cards */}
          <div className="md:hidden space-y-2">
            {[
              { label: "The Goal",      left: "Shrinking, becoming lighter",       right: "Expanding. Carrying yourself with authority." },
              { label: "The Aesthetic", left: "Pastel, soft, cute wellness",        right: "High-contrast, cinematic, structured." },
              { label: "The Messaging", left: "Passive wellness, approval-seeking", right: "Disciplined self-respect. Unapologetic." },
              { label: "The Method",    left: "Toning, generic content",            right: "Eat clean. Lift heavy. Get coached." },
            ].map((row, i) => (
              <div key={i} className="p-4"
                   style={{ background: "var(--surface-1)", border: "1px solid var(--border)", borderRadius: "var(--radius-md)" }}>
                <p className="text-xs font-black uppercase tracking-wide mb-3"
                   style={{ color: "var(--crimson)", fontFamily: "var(--font-display, 'Arial Black', sans-serif)" }}>{row.label}</p>
                <div className="flex items-center gap-3">
                  <p className="text-xs line-through flex-1" style={{ color: "rgba(255,255,255,0.3)" }}>{row.left}</p>
                  <span style={{ color: "var(--crimson)" }}>→</span>
                  <p className="text-xs font-bold flex-1 text-right"
                     style={{ color: "#FFFFFF", fontFamily: "var(--font-body, 'Inter', sans-serif)" }}>{row.right}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
