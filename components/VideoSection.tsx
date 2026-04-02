export default function VideoSection() {
  // Replace VIDEO_ID with the actual YouTube/Vimeo embed ID when available
  const VIDEO_EMBED_URL = process.env.NEXT_PUBLIC_VIDEO_EMBED_URL ?? "";

  return (
    <section
      className="py-20 px-6"
      style={{ background: "#111111" }}
    >
      <div className="max-w-4xl mx-auto">
        <p
          className="text-center text-xs tracking-[0.3em] uppercase mb-6 font-bold"
          style={{ color: "var(--power-red)" }}
        >
          Watch This First
        </p>

        {VIDEO_EMBED_URL ? (
          <div className="video-container rounded-sm overflow-hidden shadow-2xl">
            <iframe
              src={VIDEO_EMBED_URL}
              title="Bad Girl Strength Club — VSL"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
            />
          </div>
        ) : (
          /* Placeholder — replace with real embed */
          <div
            className="video-container rounded-sm flex items-center justify-center"
            style={{ background: "#1a1a1a", border: "2px solid #222" }}
          >
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
              <div
                className="w-20 h-20 rounded-full flex items-center justify-center"
                style={{ background: "var(--power-red)" }}
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="white"
                  className="w-8 h-8 ml-1"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
              <p
                className="text-sm tracking-widest uppercase"
                style={{ color: "var(--steel-gray)" }}
              >
                Video coming soon
              </p>
            </div>
          </div>
        )}

        <p
          className="text-center mt-6 text-sm italic"
          style={{ color: "var(--steel-gray)" }}
        >
          Sound on. No fluff. Just truth.
        </p>
      </div>
    </section>
  );
}
