const PHASES = [
  {
    phase: "Phase 1",
    name: "Foundation",
    weeks: "Weeks 1–4",
    desc: "Build the base. Movement patterns, joint prep, and learning how your body actually works. No ego lifting — smart lifting.",
  },
  {
    phase: "Phase 2",
    name: "Build",
    weeks: "Weeks 5–10",
    desc: "Progressive overload done right. You'll hit numbers you didn't think were possible. This is where the transformation starts.",
  },
  {
    phase: "Phase 3",
    name: "Power",
    weeks: "Weeks 11–16",
    desc: "Strength meets speed meets confidence. You don't just look different — you move differently. You walk into rooms differently.",
  },
];

export default function MethodSection() {
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
          The Method
        </p>

        <h2
          className="text-4xl md:text-5xl font-black uppercase leading-tight mb-6"
          style={{
            fontFamily: "'Impact', 'Arial Black', sans-serif",
            color: "var(--soft-white)",
          }}
        >
          A 16-Week System Engineered for Your Strength.
        </h2>

        <p
          className="text-lg leading-relaxed mb-16"
          style={{ color: "var(--steel-gray)" }}
        >
          Not a generic plan recycled from a men&apos;s program. Not &ldquo;lite&rdquo; weights and
          high reps. A structured, progressive system that respects your body and demands
          your best.
        </p>

        <div className="space-y-0">
          {PHASES.map((p, i) => (
            <div
              key={p.phase}
              className="flex gap-8 py-10"
              style={{
                borderTop: i === 0 ? "none" : "1px solid #1e1e1e",
              }}
            >
              {/* Left: phase label */}
              <div className="flex-shrink-0 w-32 text-right">
                <p
                  className="text-xs uppercase tracking-widest font-bold mb-1"
                  style={{ color: "var(--power-red)" }}
                >
                  {p.phase}
                </p>
                <p className="text-xs" style={{ color: "var(--steel-gray)" }}>
                  {p.weeks}
                </p>
              </div>

              {/* Vertical line */}
              <div
                className="flex-shrink-0 w-px self-stretch"
                style={{ background: "#2a2a2a" }}
              />

              {/* Right: content */}
              <div>
                <h3
                  className="text-2xl font-black uppercase tracking-wide mb-3"
                  style={{
                    color: "var(--soft-white)",
                    fontFamily: "'Arial Black', sans-serif",
                  }}
                >
                  {p.name}
                </h3>
                <p className="text-base leading-relaxed" style={{ color: "var(--steel-gray)" }}>
                  {p.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* What's included */}
        <div
          className="mt-16 p-8 rounded-sm"
          style={{ background: "#111", border: "1px solid #1e1e1e" }}
        >
          <h4
            className="text-sm font-bold uppercase tracking-widest mb-6"
            style={{ color: "var(--power-red)" }}
          >
            What&apos;s Included
          </h4>
          <ul className="grid md:grid-cols-2 gap-3">
            {[
              "16-week training program",
              "Video demonstrations for every movement",
              "Nutrition guidance (not restriction)",
              "Weekly check-ins with coaches",
              "Private community of 1,000+ women",
              "Lifetime access to program updates",
              "Mobile app for logging workouts",
              "Live Q&A sessions monthly",
            ].map((item) => (
              <li key={item} className="flex items-center gap-3">
                <span style={{ color: "var(--power-red)" }}>✓</span>
                <span className="text-sm" style={{ color: "var(--soft-white)" }}>
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
