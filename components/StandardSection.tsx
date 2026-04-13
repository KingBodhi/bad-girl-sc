"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Eyebrow, Display } from "./ui";

export default function StandardSection() {
  return (
    <section className="py-24 px-6 bg-near-black">
      <div className="max-w-5xl mx-auto">

        {/* Top */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center mb-16">
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} className="order-2 lg:order-1"
            viewport={{ once: true }} transition={{ duration: 0.7 }}>
            <Eyebrow className="mb-4">The New Standard</Eyebrow>
            <Display className="text-3xl sm:text-4xl md:text-5xl mb-4 leading-[1.05]">
              A Different<br />
              <span className="text-crimson">Standard.</span>
            </Display>
            <p className="text-sm leading-relaxed mb-10 text-ash">
              Women do not lack motivation — they lack a standard worth keeping.
              Bad Girl Strength Club is a behavioral identity system. You are not buying a workout program.
              You are stepping into a new behavioral code.
            </p>
            {/* Core method - Square tiles */}
            <div className="grid grid-cols-3 gap-3 max-w-sm ml-0">
              {[
                { text: "Eat Clean", delay: 0.2 },
                { text: "Lift Heavy", delay: 0.3 },
                { text: "Get Coached", delay: 0.4 }
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  className="aspect-square bg-surface-1 border border-border flex items-center justify-center p-2 text-center"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: item.delay }}
                  viewport={{ once: true }}
                >
                  <span className="text-xs md:text-base font-black uppercase tracking-widest text-soft-white leading-tight">
                    {item.text}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            className="relative overflow-hidden order-1 lg:order-2"
            style={{ clipPath: "polygon(0 0, 100% 0, 100% 75%, 75% 100%, 0 100%)" }}
          >
            <div
              className="relative w-full aspect-square max-w-[500px] bg-border p-px"
              style={{ clipPath: "polygon(0 0, 100% 0, 100% 75%, 75% 100%, 0 100%)" }}
            >
              <div
                className="relative w-full h-full bg-near-black overflow-hidden"
                style={{ clipPath: "polygon(0 0, 100% 0, 100% 75%, 75% 100%, 0 100%)" }}
              >
                <Image
                  src="/images/standard-power.jpg"
                  alt="The stronger standard"
                  fill
                  className="object-cover object-top select-none pointer-events-none"
                />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Comparison table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="border border-border bg-[#1a1a1a]">

            {/* Header */}
            <div className="hidden md:grid md:grid-cols-[1fr_1.2fr_1.2fr]">
              <div className="p-6 bg-near-black border-b border-border" />
              
              <div className="p-6 text-center bg-near-black border-b border-l border-border">
                <p className="text-xs font-bold uppercase tracking-[0.25em] text-ash/50">
                  Mainstream Fitness
                </p>
              </div>

              <div className="p-6 text-center bg-near-black border-b border-l border-border">
                <p className="text-xs font-bold uppercase tracking-[0.25em] text-crimson">
                  BGSC Standard
                </p>
              </div>
            </div>

            {/* Rows */}
            <div className="divide-y divide-border/60">
              {[
                {
                  label: "The Goal",
                  left: "Shrinking, becoming lighter",
                  right: "Expanding. Carrying yourself with authority.",
                },
                {
                  label: "The Aesthetic",
                  left: "Pastel, soft, cute wellness",
                  right: "High-contrast, cinematic, structured.",
                },
                {
                  label: "The Messaging",
                  left: "Passive wellness, approval-seeking",
                  right: "Disciplined self-respect. Unapologetic.",
                },
                {
                  label: "The Method",
                  left: "Toning, generic content",
                  right: "Eat clean. Lift heavy. Get coached.",
                },
              ].map((row, i) => (
                <div
                  key={i}
                  className="group grid grid-cols-1 md:grid-cols-[1fr_1.2fr_1.2fr] transition-colors duration-300 hover:bg-surface-1/20"
                >
                  {/* Label */}
                  <div className="p-4 md:p-6 bg-near-black flex items-center">
                    <p className="text-sm font-black uppercase tracking-widest text-soft-white">
                      {row.label}
                    </p>
                  </div>

                  {/* Left (Old) */}
                  <div className="p-4 md:p-6 flex items-center bg-surface-1">
                    <p className="text-xs text-ash/40 line-through leading-relaxed">
                      {row.left}
                    </p>
                  </div>

                  {/* Right (New / Highlighted) */}
                  <div className="p-4 md:p-6 flex items-center md:border-l md:border-border">
                    <p className="text-xs font-semibold text-soft-white leading-relaxed">
                      {row.right}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
