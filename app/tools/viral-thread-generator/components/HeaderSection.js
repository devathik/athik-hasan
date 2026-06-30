export default function HeaderSection() {
  return (
    <div className="rounded-[32px] border border-white/10 bg-slate-900/80 p-10 shadow-2xl shadow-slate-950/40 backdrop-blur-xl">
      <div className="max-w-3xl space-y-6">
        <div className="inline-flex items-center gap-2 rounded-full border border-purple-500/30 bg-purple-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-purple-200">
          🧵 Viral Thread Generator
        </div>
        <div className="space-y-3">
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
            Generate social media thread posts instantly.
          </h1>
          <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
            Create viral-ready X/Twitter or LinkedIn thread content using your
            own Gemini or OpenAI-compatible API key. Save your key in the
            dashboard for repeated use.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-3">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
            <p className="text-xs uppercase tracking-[0.24em] text-gray-400">
              Ready in
            </p>
            <p className="mt-3 text-2xl font-semibold text-white">Seconds</p>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
            <p className="text-xs uppercase tracking-[0.24em] text-gray-400">
              Use your key
            </p>
            <p className="mt-3 text-2xl font-semibold text-white">
              Dashboard / Paste
            </p>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
            <p className="text-xs uppercase tracking-[0.24em] text-gray-400">
              Language
            </p>
            <p className="mt-3 text-2xl font-semibold text-white">
              Bangla & English
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
