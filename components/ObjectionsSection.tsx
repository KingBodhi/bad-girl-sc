const OBJECTIONS = [
  {
    q: "I'm a beginner. Is this too advanced for me?",
    a: "Phase 1 was built specifically for beginners. We start where you are — not where we assume you should be. The program scales with you.",
  },
  {
    q: "Will I get bulky?",
    a: "No. Women have a fraction of the testosterone needed to add bulk the way men do. What you'll add is shape, definition, and density. The 'bulky' fear is a myth designed to keep women from claiming their power in the gym.",
  },
  {
    q: "I've tried programs before and they didn't work.",
    a: "Because they weren't built for you. Most programs are calorie-deficient, cardio-heavy, and treat you like a smaller version of a man. BGSC is a different architecture entirely.",
  },
  {
    q: "I don't have access to a gym or lots of equipment.",
    a: "We have a home-based track for exactly this. A set of dumbbells and your bodyweight is enough for Phase 1. The program meets you where you are.",
  },
  {
    q: "What if it doesn't work for me?",
    a: "We offer a 30-day money-back guarantee, no questions asked. If you do the work and don't feel stronger in 30 days, we refund you in full. We've issued less than 1% refunds since launch.",
  },
];

export default function ObjectionsSection() {
  return (
    <section
      className="py-24 px-6"
      style={{ background: "var(--near-black)" }}
    >
      <div className="max-w-3xl mx-auto">
        <p
          className="text-xs tracking-[0.3em] uppercase font-bold mb-4"
          style={{ color: "var(--power-red)" }}
        >
          Common Questions
        </p>

        <h2
          className="text-4xl md:text-5xl font-black uppercase leading-tight mb-16"
          style={{
            fontFamily: "'Impact', 'Arial Black', sans-serif",
            color: "var(--soft-white)",
          }}
        >
          Let&apos;s Address the Real Concerns.
        </h2>

        <div className="space-y-0">
          {OBJECTIONS.map((item, i) => (
            <div
              key={i}
              className="py-8"
              style={{
                borderBottom: "1px solid #1e1e1e",
              }}
            >
              <h3
                className="text-lg font-bold mb-3"
                style={{ color: "var(--soft-white)" }}
              >
                {item.q}
              </h3>
              <p className="text-base leading-relaxed" style={{ color: "var(--steel-gray)" }}>
                {item.a}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
