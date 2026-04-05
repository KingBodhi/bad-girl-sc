"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function StickyCtaBar({ onCta }: { onCta: () => void }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > window.innerHeight * 0.7);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 80, opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeOut" as const }}
          className="fixed bottom-0 left-0 right-0 z-50"
          style={{ background: "rgba(13,13,13,0.97)", borderTop: "1px solid var(--crimson)", backdropFilter: "blur(12px)" }}
        >
          <div className="max-w-5xl mx-auto px-6 py-3 flex items-center justify-between gap-4">
            <div className="hidden sm:block">
              <p className="text-sm font-black uppercase tracking-wide"
                 style={{ color: "#FFFFFF", fontFamily: "var(--font-display, 'Arial Black', sans-serif)" }}>
                BGSC
              </p>
              <p className="text-xs" style={{ color: "rgba(255,255,255,0.6)" }}>
                7-day free trial · No card required
              </p>
            </div>
            <button onClick={onCta}
              className="flex-shrink-0 px-8 py-3 text-xs font-black uppercase tracking-[0.2em] transition-opacity hover:opacity-90 pulse-cta"
              style={{
                background: "var(--crimson)",
                color: "#FFFFFF",
                fontFamily: "var(--font-display, 'Arial Black', sans-serif)",
                borderRadius: "var(--radius-md)",
              }}>
              Start Free Trial →
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
