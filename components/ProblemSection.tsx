const PROBLEMS = [
  {
    tension: "You've been told to eat less and move more — and you're exhausted from trying.",
    rejects: "Crash diets. Calorie prison. The endless cycle of restricting and rebounding.",
  },
  {
    tension: "You lift, but you're terrified of looking 'too bulky' — so you hold back.",
    rejects: "The lie that strength makes women masculine. It doesn't. It makes us dangerous.",
  },
  {
    tension: "You're fit on the outside but running on empty inside. Hustle culture burned you out.",
    rejects: "Training as punishment. Your body isn't a problem to fix — it's a force to build.",
  },
];

export default function ProblemSection() {
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
          The Problem
        </p>

        <h2
          className="text-4xl md:text-5xl font-black uppercase leading-tight mb-16"
          style={{
            fontFamily: "'Impact', 'Arial Black', sans-serif",
            color: "var(--soft-white)",
          }}
        >
          The fitness industry was not built for women like you.
        </h2>

        <div className="space-y-12">
          {PROBLEMS.map((p, i) => (
            <div key={i} className="flex gap-6">
              <div
                className="flex-shrink-0 w-1"
                style={{ background: "var(--power-red)" }}
              />
              <div>
                <p
                  className="text-xl md:text-2xl leading-relaxed mb-3"
                  style={{ color: "var(--soft-white)" }}
                >
                  {p.tension}
                </p>
                <p
                  className="text-base italic"
                  style={{ color: "var(--steel-gray)" }}
                >
                  {p.rejects}
                </p>
              </div>
            </div>
          ))}
        </div>

        <blockquote
          className="mt-20 text-2xl md:text-3xl font-bold text-center leading-relaxed"
          style={{ color: "var(--power-red)" }}
        >
          &ldquo;The fitness world told you to stay small. We say that&apos;s over.&rdquo;
        </blockquote>
      </div>
    </section>
  );
}
