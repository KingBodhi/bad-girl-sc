export default function HeroSection() {
  return (
    <section
      className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 py-24"
      style={{ background: "var(--near-black)" }}
    >
      {/* Background texture */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, #C8102E 0, #C8102E 1px, transparent 0, transparent 50%)",
          backgroundSize: "10px 10px",
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Eyebrow */}
        <p
          className="text-sm font-bold tracking-[0.3em] uppercase mb-6"
          style={{ color: "var(--power-red)" }}
        >
          Bad Girl Strength Club
        </p>

        {/* Old standard — crossed out */}
        <p
          className="text-lg md:text-xl mb-2 line-through opacity-40"
          style={{ color: "var(--steel-gray)" }}
        >
          &ldquo;Stay light. Stay toned.&rdquo;
        </p>

        {/* Main headline */}
        <h1
          className="text-5xl md:text-7xl lg:text-8xl font-black uppercase leading-none tracking-tight mb-8"
          style={{
            fontFamily: "'Impact', 'Arial Black', sans-serif",
            color: "var(--soft-white)",
          }}
        >
          You Were{" "}
          <span style={{ color: "var(--power-red)" }}>Never</span>
          <br />
          Meant to Stay{" "}
          <span style={{ color: "var(--power-red)" }}>Small.</span>
        </h1>

        <p
          className="text-xl md:text-2xl max-w-2xl mx-auto leading-relaxed mb-12"
          style={{ color: "var(--steel-gray)" }}
        >
          The strength program built for women who refuse to shrink — mentally,
          physically, or otherwise.
        </p>

        <a
          href="#close"
          className="inline-block px-10 py-5 text-lg font-bold uppercase tracking-widest transition-transform hover:scale-105 pulse-cta"
          style={{
            background: "var(--power-red)",
            color: "var(--soft-white)",
            fontFamily: "'Arial Black', sans-serif",
          }}
        >
          I&apos;m Ready to Get Strong →
        </a>

        {/* Scroll indicator */}
        <div className="mt-16 flex flex-col items-center gap-2 opacity-40">
          <p className="text-xs tracking-widest uppercase">Watch the video</p>
          <div className="w-px h-12" style={{ background: "var(--power-red)" }} />
        </div>
      </div>
    </section>
  );
}
