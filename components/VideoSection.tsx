"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Play, Pause } from "lucide-react";

export default function VideoSection() {
  const [isPlaying, setIsPlaying] = useState(false);
  const VIDEO_EMBED_URL = process.env.NEXT_PUBLIC_VIDEO_EMBED_URL ?? "";

  return (
    <section id="video-section" className="py-24 px-6 -scroll-mt-12 bg-black">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* <p className="text-xs tracking-[0.3em] uppercase font-bold mb-4"
             style={{ color: "var(--crimson)", fontFamily: "var(--font-display, 'Poppins', sans-serif)" }}>
            Watch This First
          </p> */}

          <div className="relative">
            {/* Offset Background Frame */}
            <div className="absolute inset-0 translate-x-4 translate-y-4 bg-[#0e0e0ea2] border border-border z-0" />
            
            <div className="video-container relative z-10 overflow-hidden border border-border">
              {VIDEO_EMBED_URL ? (
                <iframe
                  src={VIDEO_EMBED_URL}
                  title="Bad Girl Strength Club — VSL"
                  allow="autoplay; fullscreen; picture-in-picture"
                  allowFullScreen
                />
              ) : (
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-6"
                     style={{ background: "#0e0e0e" }}>
                  <div className="absolute inset-0 opacity-[0.04]"
                       style={{
                         backgroundImage: "repeating-linear-gradient(-45deg, #8F0000 0, #8F0000 1px, transparent 0, transparent 12px)",
                       }} />
                  <div className="relative z-10 flex flex-col items-center gap-4">
                    <div 
                      onClick={() => setIsPlaying(!isPlaying)}
                      className="cursor-pointer transition-all hover:scale-110 active:scale-95 bg-crimson w-20 h-20 rounded-full flex items-center justify-center shadow-lg"
                    >
                      {isPlaying ? (
                        <Pause size={36} fill="#f5f5f3" color="#f5f5f3" />
                      ) : (
                        <Play size={36} fill="#f5f5f3" color="#f5f5f3" className="ml-1" />
                      )}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* <div className="mt-6 max-w-3xl mx-auto flex items-center justify-between gap-2">
            <p className="text-sm" style={{ color: "rgba(255,255,255,0.5)", fontFamily: "var(--font-body, 'Inter', sans-serif)" }}>
              Sound on. No fluff. Just truth.
            </p>
            <p className="text-sm" style={{ color: "rgba(255,255,255,0.5)", fontFamily: "var(--font-body, 'Inter', sans-serif)" }}>
              ~8 min
            </p>
          </div> */}
        </motion.div>
      </div>
    </section>
  );
}
