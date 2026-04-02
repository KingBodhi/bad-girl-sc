const WORDS = [
  "EAT CLEAN", "LIFT HEAVY", "GET COACHED", "BAD GIRL STRENGTH CLUB",
  "NOT SMALL", "STRENGTH IS FEMININE", "BGSC", "DONE PLAYING SMALL",
  "EAT CLEAN", "LIFT HEAVY", "GET COACHED", "BAD GIRL STRENGTH CLUB",
  "NOT SMALL", "STRENGTH IS FEMININE", "BGSC", "DONE PLAYING SMALL",
];

export default function MarqueeBar() {
  return (
    <div className="py-4 overflow-hidden" style={{ background: "var(--crimson)" }}>
      <div className="flex whitespace-nowrap marquee-track">
        {[...WORDS, ...WORDS].map((w, i) => (
          <span key={i}
            className="text-xs font-black uppercase tracking-[0.35em] mx-8 flex-shrink-0"
            style={{ fontFamily: "'Arial Black',sans-serif", color: "var(--soft-white)", opacity: i % 4 === 3 ? 0.45 : 1 }}>
            {w} <span className="mx-2 opacity-30">·</span>
          </span>
        ))}
      </div>
    </div>
  );
}
