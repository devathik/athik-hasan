export default function HeaderSection() {
  return (
    <div className="rounded-[32px] border border-white/10 bg-slate-900/80 p-10 shadow-2xl shadow-slate-950/40 backdrop-blur-xl text-center flex flex-col items-center justify-center">
      <div className="max-w-3xl space-y-6 flex flex-col items-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-purple-500/30 bg-purple-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-purple-200">
          🧵 Viral Thread Generator
        </div>
        <div className="space-y-3">
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-center">
            Generate social media thread posts instantly.
          </h1>
          <p className="text-gray-300 text-sm sm:text-base leading-relaxed text-center">
            Create viral-ready X/Twitter or LinkedIn thread content using your
            own Gemini or OpenAI-compatible API key. Save your key in the
            dashboard for repeated use.
          </p>
        </div>
      </div>
    </div>
  );
}
