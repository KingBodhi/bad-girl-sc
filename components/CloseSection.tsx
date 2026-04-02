export default function CloseSection() {
  const CTA_URL = process.env.NEXT_PUBLIC_CTA_URL ?? "#";

  return (
    <section
      id="close"
      className="py-32 px-6 text-center"
      style={{ background: "#050505" }}
    >
      <div className="max-w-3xl mx-auto">
        <p
          className="text-xs tracking-[0.3em] uppercase font-bold mb-8"
          style={{ color: "var(--power-red)" }}
        >
          Your Decision
        </p>

        <h2
          className="text-5xl md:text-6xl lg:text-7xl font-black uppercase leading-none mb-8"
          style={{
            fontFamily: "'Impact', 'Arial Black', sans-serif",
            color: "var(--soft-white)",
          }}
        >
          The Strongest Version of You
          <br />
          <span style={{ color: "var(--power-red)" }}>Is Waiting.</span>
        </h2>

        <p
          className="text-xl leading-relaxed mb-16 max-w-xl mx-auto"
          style={{ color: "var(--steel-gray)" }}
        >
          You can keep doing what you&apos;ve been doing and stay exactly where you are.
          Or you can join 1,200 women who decided to stop shrinking and start building.
        </p>

        {/* Offer box */}
        <div
          className="max-w-md mx-auto p-10 rounded-sm mb-12"
          style={{ background: "#111", border: "1px solid #C8102E22" }}
        >
          <p
            className="text-xs tracking-widest uppercase font-bold mb-4"
            style={{ color: "var(--steel-gray)" }}
          >
            Founding Member Pricing
          </p>

          <div className="flex items-baseline justify-center gap-3 mb-2">
            <span
              className="text-2xl line-through"
              style={{ color: "var(--steel-gray)" }}
            >
              $297
            </span>
            <span
              className="text-6xl font-black"
              style={{
                color: "var(--soft-white)",
                fontFamily: "'Impact', sans-serif",
              }}
            >
              $97
            </span>
          </div>

          <p
            className="text-sm mb-8"
            style={{ color: "var(--steel-gray)" }}
          >
            One-time payment. Lifetime access.
          </p>

          <a
            href={CTA_URL}
            className="block w-full py-5 text-lg font-bold uppercase tracking-widest transition-transform hover:scale-105 pulse-cta rounded-sm"
            style={{
              background: "var(--power-red)",
              color: "var(--soft-white)",
              fontFamily: "'Arial Black', sans-serif",
            }}
          >
            Join Bad Girl Strength Club →
          </a>

          <p
            className="mt-4 text-xs"
            style={{ color: "var(--steel-gray)" }}
          >
            30-day money-back guarantee. No questions asked.
          </p>
        </div>

        {/* Final line */}
        <p
          className="text-2xl md:text-3xl font-bold italic"
          style={{ color: "var(--power-red)" }}
        >
          &ldquo;You were never meant to stay small.&rdquo;
        </p>

        <p className="mt-6 text-sm" style={{ color: "#333" }}>
          © {new Date().getFullYear()} Bad Girl Strength Club. All rights reserved.
        </p>
      </div>
    </section>
  );
}
