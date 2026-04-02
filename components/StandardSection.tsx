const PILLARS = [
  {
    number: "01",
    title: "Strength Over Shrink",
    body: "We train to build — muscle, confidence, capacity. The scale is the last thing we care about.",
  },
  {
    number: "02",
    title: "Performance Is the Point",
    body: "You should be able to lift your groceries, move furniture, and walk into any room like you own it. That's the standard.",
  },
  {
    number: "03",
    title: "The Mental Edge",
    body: "Every rep is a negotiation with the voice that says you can't. We win that negotiation, every single session.",
  },
  {
    number: "04",
    title: "Community Over Competition",
    body: "We lift each other. Not comparisons, not rankings — just women helping women get stronger.",
  },
];

export default function StandardSection() {
  return (
    <section
      className="py-24 px-6"
      style={{ background: "#0a0a0a" }}
    >
      <div className="max-w-4xl mx-auto">
        <p
          className="text-xs tracking-[0.3em] uppercase font-bold mb-4"
          style={{ color: "var(--power-red)" }}
        >
          The New Standard
        </p>

        <h2
          className="text-4xl md:text-5xl font-black uppercase leading-tight mb-6"
          style={{
            fontFamily: "'Impact', 'Arial Black', sans-serif",
            color: "var(--soft-white)",
          }}
        >
          You Were Never Meant to Stay Small.
        </h2>

        <p
          className="text-xl leading-relaxed mb-20 max-w-2xl"
          style={{ color: "var(--steel-gray)" }}
        >
          Bad Girl Strength Club exists for one reason: to give you permission — and the
          tools — to become the strongest version of yourself. No apologies.
        </p>

        <div className="grid md:grid-cols-2 gap-10">
          {PILLARS.map((pillar) => (
            <div key={pillar.number} className="flex gap-5">
              <span
                className="text-4xl font-black leading-none flex-shrink-0 mt-1"
                style={{
                  color: "var(--power-red)",
                  fontFamily: "'Impact', sans-serif",
                  opacity: 0.6,
                }}
              >
                {pillar.number}
              </span>
              <div>
                <h3
                  className="text-xl font-bold uppercase tracking-wide mb-2"
                  style={{
                    color: "var(--soft-white)",
                    fontFamily: "'Arial Black', sans-serif",
                  }}
                >
                  {pillar.title}
                </h3>
                <p className="text-base leading-relaxed" style={{ color: "var(--steel-gray)" }}>
                  {pillar.body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
