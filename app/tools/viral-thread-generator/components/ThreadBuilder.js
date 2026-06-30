import Link from "next/link";

export default function ThreadBuilder({
  prompt,
  setPrompt,
  tone,
  setTone,
  tones,
  language,
  setLanguage,
  languages,
  postCount,
  setPostCount,
  postCounts,
  apiKey,
  setApiKey,
  provider,
  setProvider,
  quickExamples,
  handleExample,
  summary,
  loading,
  handleGenerate,
  error,
  successMessage,
}) {
  return (
    <div className="rounded-[32px] border border-white/10 bg-slate-900/80 p-8 shadow-2xl shadow-slate-950/40 backdrop-blur-xl">
      <div className="space-y-6">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-2xl font-bold">Thread Builder</h2>
            <p className="mt-2 text-sm text-gray-400">
              Enter your topic, select tone and language, then generate a thread.
            </p>
          </div>
          <Link
            href="/dashboard"
            className="inline-flex items-center justify-center rounded-2xl border border-purple-500/30 bg-purple-500/10 px-4 py-2 text-sm font-semibold text-purple-200 transition hover:bg-purple-500/15"
          >
            Manage API Key
          </Link>
        </div>

        <div className="space-y-4">
          <label className="block text-sm font-semibold text-white">
            Enter Your Topic or Context
          </label>
          <textarea
            rows={5}
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            className="w-full resize-none rounded-3xl border border-white/20 bg-slate-950/80 p-4 text-sm text-white outline-none transition focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20"
            placeholder="একটি থ্রেড তৈরি করতে এখানে আপনার বিষয় লিখুন..."
          />
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <div className="space-y-3">
            <label className="text-sm font-semibold text-white">Tone</label>
            <select
              value={tone}
              onChange={(e) => setTone(e.target.value)}
              className="w-full rounded-3xl border border-white/20 bg-slate-950/80 px-4 py-3 text-sm text-white outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20"
            >
              {tones.map((option) => (
                <option
                  key={option}
                  value={option}
                  className="bg-slate-950 text-white"
                >
                  {option}
                </option>
              ))}
            </select>
          </div>
          <div className="space-y-3">
            <label className="text-sm font-semibold text-white">Language</label>
            <select
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
              className="w-full rounded-3xl border border-white/20 bg-slate-950/80 px-4 py-3 text-sm text-white outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20"
            >
              {languages.map((option) => (
                <option
                  key={option}
                  value={option}
                  className="bg-slate-950 text-white"
                >
                  {option}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <div className="space-y-3">
            <label className="text-sm font-semibold text-white">
              # of Posts
            </label>
            <select
              value={postCount}
              onChange={(e) => setPostCount(e.target.value)}
              className="w-full rounded-3xl border border-white/20 bg-slate-950/80 px-4 py-3 text-sm text-white outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20"
            >
              {postCounts.map((option) => (
                <option
                  key={option}
                  value={option}
                  className="bg-slate-950 text-white"
                >
                  {option}
                </option>
              ))}
            </select>
          </div>
          <div className="space-y-3">
            <label className="text-sm font-semibold text-white">API key</label>
            <input
              type="password"
              value={apiKey}
              onChange={(e) => setApiKey(e.target.value)}
              className="w-full rounded-3xl border border-white/20 bg-slate-950/80 px-4 py-3 text-sm text-white outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20"
              placeholder="Paste your model API key here"
            />
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <div className="space-y-3">
            <label className="text-sm font-semibold text-white">Provider</label>
            <select
              value={provider}
              onChange={(e) => setProvider(e.target.value)}
              className="w-full rounded-3xl border border-white/20 bg-slate-950/80 px-4 py-3 text-sm text-white outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20"
            >
              <option value="Auto" className="bg-slate-950 text-white">
                Auto detect
              </option>
              <option value="Gemini" className="bg-slate-950 text-white">
                Gemini
              </option>
              <option value="OpenAI" className="bg-slate-950 text-white">
                OpenAI-compatible
              </option>
            </select>
          </div>
          <div className="rounded-3xl border border-white/20 bg-slate-950/80 p-4 text-sm text-gray-400">
            <p className="font-semibold text-white">Tip</p>
            <p className="mt-2">
              Choose Gemini for Google AI Studio keys that start with AIza... or
              AQ...
            </p>
          </div>
        </div>

        <div className="space-y-4">
          <div className="flex flex-wrap gap-2 text-xs text-gray-400">
            {quickExamples.map((example) => (
              <button
                key={example}
                type="button"
                onClick={() => handleExample(example)}
                className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-left text-white/70 transition hover:bg-white/10 hover:text-white"
              >
                {example}
              </button>
            ))}
          </div>
          <div className="rounded-3xl border border-white/20 bg-slate-950/80 p-5 text-sm text-gray-300">
            <p>{summary}</p>
          </div>
        </div>

        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <button
            type="button"
            onClick={handleGenerate}
            disabled={loading}
            className="inline-flex items-center justify-center rounded-3xl bg-gradient-to-r from-pink-500 to-purple-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-pink-500/20 transition hover:scale-[1.01] disabled:cursor-not-allowed disabled:opacity-60"
          >
            {loading ? "Generating..." : "Generate Thread"}
          </button>
          <div className="space-y-1 text-sm text-gray-400">
            <p>Save your preferred key in the dashboard for faster access.</p>
            <Link
              href="/dashboard"
              className="text-purple-300 hover:text-purple-100 underline"
            >
              Go to Dashboard
            </Link>
          </div>
        </div>

        {error && (
          <div className="rounded-3xl border border-red-500/20 bg-red-500/10 px-4 py-3 text-sm text-red-200">
            {error}
          </div>
        )}
        {successMessage && (
          <div className="rounded-3xl border border-emerald-500/20 bg-emerald-500/10 px-4 py-3 text-sm text-emerald-200">
            {successMessage}
          </div>
        )}
      </div>
    </div>
  );
}
