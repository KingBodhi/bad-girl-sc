const WORDS = [
  "EAT CLEAN", "LIFT HEAVY", "GET COACHED", "BAD GIRL STRENGTH CLUB",
  "NOT SMALL", "STRENGTH IS FEMININE", "BGSC", "DONE PLAYING SMALL",
];

function Track({ hidden }: { hidden?: boolean }) {
  return (
    <div className="marquee-track" aria-hidden={hidden}>
      {WORDS.map((w, i) => (
        <span key={i}
          className="text-xs font-black uppercase tracking-[0.35em] mx-8 flex-shrink-0"
          style={{
            fontFamily: "var(--font-display, 'Arial Black', sans-serif)",
            color: "#FFFFFF",
            opacity: i % 4 === 3 ? 0.45 : 1,
          }}>
          {w}
        </span>
      ))}
    </div>
  );
}

export default function MarqueeBar() {
  return (
    <div className="overflow-hidden flex"
      style={{
        background: "var(--crimson)",
        borderTop: "1px solid rgba(255,255,255,0.12)",
        borderBottom: "1px solid rgba(255,255,255,0.12)",
        padding: "10px 0",
      }}>
      <Track />
      <Track hidden />
    </div>
  );
}
