const VOICES = [
  {
    quote:
      "I spent 10 years chasing a smaller body. In 16 weeks with BGSC I stopped caring about size and started caring about what I could DO. I deadlifted 185 lbs. I cried.",
    name: "Mariana D.",
    tag: "Phase 3 graduate",
  },
  {
    quote:
      "I was scared of weights my whole life. They kept telling me I'd get bulky. I didn't. I got powerful. There's a difference and now I know it in my bones.",
    name: "Kezia T.",
    tag: "12 weeks in",
  },
  {
    quote:
      "It's not just a workout program. The community held me when I wanted to quit. These women are the most real people I've ever met online.",
    name: "Simone A.",
    tag: "Community member, 8 months",
  },
];

export default function CultureSection() {
  return (
    <section
      className="py-24 px-6"
      style={{ background: "#080808" }}
    >
      <div className="max-w-4xl mx-auto">
        <p
          className="text-xs tracking-[0.3em] uppercase font-bold mb-4"
          style={{ color: "var(--power-red)" }}
        >
          The Culture
        </p>

        <h2
          className="text-4xl md:text-5xl font-black uppercase leading-tight mb-6"
          style={{
            fontFamily: "'Impact', 'Arial Black', sans-serif",
            color: "var(--soft-white)",
          }}
        >
          A Club Is More Than a Program.
        </h2>

        <p
          className="text-xl leading-relaxed mb-20 max-w-2xl"
          style={{ color: "var(--steel-gray)" }}
        >
          When you join Bad Girl Strength Club you join a movement. Women from every
          background, body type, and experience level — united by one refusal: to stay
          where we were told to stay.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {VOICES.map((v) => (
            <div
              key={v.name}
              className="p-6 rounded-sm flex flex-col justify-between"
              style={{ background: "#111", border: "1px solid #1e1e1e" }}
            >
              <p
                className="text-base leading-relaxed italic mb-6"
                style={{ color: "var(--soft-white)" }}
              >
                &ldquo;{v.quote}&rdquo;
              </p>
              <div>
                <p className="text-sm font-bold" style={{ color: "var(--power-red)" }}>
                  {v.name}
                </p>
                <p className="text-xs mt-1" style={{ color: "var(--steel-gray)" }}>
                  {v.tag}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Social proof numbers */}
        <div className="mt-20 grid grid-cols-3 gap-8 text-center">
          {[
            { number: "1,200+", label: "Active Members" },
            { number: "16", label: "Week Program" },
            { number: "94%", label: "Complete All 3 Phases" },
          ].map((stat) => (
            <div key={stat.label}>
              <p
                className="text-4xl md:text-5xl font-black"
                style={{
                  color: "var(--power-red)",
                  fontFamily: "'Impact', sans-serif",
                }}
              >
                {stat.number}
              </p>
              <p
                className="text-xs mt-2 uppercase tracking-widest"
                style={{ color: "var(--steel-gray)" }}
              >
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
