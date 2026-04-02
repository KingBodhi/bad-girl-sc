"use client";

import { useEffect, useState } from "react";

export default function StickyCtaBar() {
  const [visible, setVisible] = useState(false);
  const CTA_URL = process.env.NEXT_PUBLIC_CTA_URL ?? "#close";

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > window.innerHeight * 0.8);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-50 transition-transform duration-300"
      style={{
        transform: visible ? "translateY(0)" : "translateY(100%)",
        background: "var(--near-black)",
        borderTop: "2px solid var(--power-red)",
      }}
    >
      <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between gap-4">
        <p
          className="text-sm font-bold uppercase tracking-wide hidden sm:block"
          style={{ color: "var(--soft-white)" }}
        >
          Ready to get strong?
        </p>
        <a
          href={CTA_URL}
          className="flex-shrink-0 px-8 py-3 text-sm font-bold uppercase tracking-widest transition-opacity hover:opacity-90"
          style={{
            background: "var(--power-red)",
            color: "var(--soft-white)",
            fontFamily: "'Arial Black', sans-serif",
          }}
        >
          Join Now — $97 →
        </a>
      </div>
    </div>
  );
}
