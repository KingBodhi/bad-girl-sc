"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Eyebrow, Display } from "./ui";

const PROBLEMS = [
  {
    hook: "The problem was never your discipline.",
    body: "You've started programs. You've been consistent. But the programs were built around the wrong goal — shrinking. No system designed for less will ever produce more.",
  },
  {
    hook: "You don't lack motivation. You lack a standard.",
    body: "Motivation is temporary. A standard is permanent. Bad Girl Strength Club gives you the standard the fitness industry never offered you.",
  },
  {
    hook: "You've been training alone in a room built against you.",
    body: "The environment you train in shapes the woman you become. When your circle doesn't lift heavy, you won't either. BGSC puts you inside a culture where strength is the baseline — not the exception.",
  },
];

export default function ProblemSection() {
  return (
    <section className="py-24 px-6" style={{ background: "var(--near-black)" }}>
      <div className="max-w-5xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">

          {/* Image */}
          <motion.div
            className="relative overflow-hidden hidden md:block"
            style={{ height: 520, borderRadius: "var(--radius-lg)" }}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <Image src="/images/problem-before.jpg" alt="The old standard" fill
              className="object-cover object-center" style={{ filter: "brightness(0.85) contrast(1.1)" }} />
            <div className="absolute left-0 top-0 bottom-0 w-1" style={{ background: "var(--crimson)" }} />
          </motion.div>

          {/* Copy */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <Eyebrow>What Actually Happened</Eyebrow>
            <Display className="text-3xl sm:text-4xl md:text-5xl mb-8 md:mb-12">
              You Were Taught to{" "}
              <span style={{ color: "var(--crimson)" }}>Train for Less.</span>
            </Display>

            <div className="space-y-10">
              {PROBLEMS.map((p, i) => (
                <motion.div key={i}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 + i * 0.12 }}
                >
                  <p className="text-base font-bold mb-2 uppercase tracking-wide"
                     style={{ color: "#FFFFFF", fontFamily: "var(--font-display, 'Arial Black', sans-serif)" }}>
                    {p.hook}
                  </p>
                  <p className="text-sm leading-relaxed"
                     style={{ color: "rgba(255,255,255,0.72)", fontFamily: "var(--font-body, 'Inter', sans-serif)" }}>
                    {p.body}
                  </p>
                </motion.div>
              ))}
            </div>

            <motion.div className="mt-12 pt-8" style={{ borderTop: "1px solid var(--border)" }}
              initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.6 }}>
              <p className="text-lg md:text-2xl font-black uppercase tracking-tight"
                 style={{ color: "var(--crimson)", fontFamily: "var(--font-display, 'Arial Black', sans-serif)" }}>
                If you are looking for permission to stay small, this is not for you.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
