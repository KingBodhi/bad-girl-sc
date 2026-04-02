"use client";

import { motion } from "framer-motion";

export default function VideoSection() {
  const VIDEO_EMBED_URL = process.env.NEXT_PUBLIC_VIDEO_EMBED_URL ?? "";

  return (
    <section className="py-24 px-6" style={{ background: "var(--surface-1)" }}>
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-center text-xs tracking-[0.3em] uppercase font-bold mb-8"
             style={{ color: "var(--power-red)" }}>
            Watch This First
          </p>

          <div className="video-container rounded-sm overflow-hidden shadow-2xl"
               style={{ border: "1px solid var(--border)" }}>
            {VIDEO_EMBED_URL ? (
              <iframe
                src={VIDEO_EMBED_URL}
                title="Bad Girl Strength Club — VSL"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
              />
            ) : (
              /* Placeholder */
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-6"
                   style={{ background: "#0e0e0e" }}>
                {/* Diagonal stripe background */}
                <div className="absolute inset-0 opacity-[0.04]"
                     style={{
                       backgroundImage: "repeating-linear-gradient(-45deg, #C8102E 0, #C8102E 1px, transparent 0, transparent 12px)",
                     }} />
                <div className="relative z-10 flex flex-col items-center gap-4">
                  {/* Play button */}
                  <div
                    className="w-24 h-24 rounded-full flex items-center justify-center cursor-pointer transition-transform hover:scale-105"
                    style={{ background: "var(--power-red)" }}
                  >
                    <svg viewBox="0 0 24 24" fill="white" className="w-10 h-10 ml-2">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                  <div className="text-center">
                    <p className="text-sm font-bold uppercase tracking-widest mb-1"
                       style={{ color: "var(--soft-white)" }}>
                      VSL Video Placeholder
                    </p>
                    <p className="text-xs" style={{ color: "var(--steel-gray)" }}>
                      Set NEXT_PUBLIC_VIDEO_EMBED_URL to activate
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="mt-6 flex items-center justify-center gap-6">
            <p className="text-sm italic" style={{ color: "var(--steel-gray)" }}>
              Sound on. No fluff. Just truth.
            </p>
            <span style={{ color: "var(--border)" }}>·</span>
            <p className="text-sm" style={{ color: "var(--steel-gray)" }}>
              ~8 min watch
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
