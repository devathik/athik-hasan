import { FiCheck, FiCopy, FiDownload, FiRotateCcw } from "react-icons/fi";

export default function ThreadPreview({
  thread,
  posts = [],
  storedApiKey,
  handleCopy,
  handleDownload,
  handleReset,
  handleCopySingle,
  copiedIndex,
  handleEditPost,
}) {
  return (
    <div className="rounded-[32px] border border-white/10 bg-slate-900/80 p-8 shadow-2xl shadow-slate-950/40 backdrop-blur-xl flex flex-col gap-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="text-2xl font-bold">Your Thread</h2>
          <p className="mt-2 text-sm text-gray-400">
            Once generated, copy or download your thread instantly.
          </p>
        </div>
        <div className="flex flex-wrap gap-2 items-center">
          <button
            type="button"
            onClick={handleCopy}
            disabled={!thread}
            className="rounded-2xl bg-orange-500 hover:bg-orange-600 disabled:opacity-50 disabled:cursor-not-allowed px-4 py-2.5 text-xs font-bold text-white transition flex items-center gap-1.5 shadow-lg shadow-orange-500/10"
          >
            <FiCopy className="w-4 h-4" />
            <span>Copy All</span>
          </button>
          <button
            type="button"
            onClick={handleDownload}
            disabled={!thread}
            className="rounded-2xl bg-slate-800 hover:bg-slate-700 disabled:opacity-50 disabled:cursor-not-allowed px-4 py-2.5 text-xs font-bold text-white transition flex items-center gap-1.5 border border-white/10"
          >
            <FiDownload className="w-4 h-4" />
            <span>Download</span>
          </button>
          <button
            type="button"
            onClick={handleReset}
            disabled={!thread}
            className="rounded-2xl border border-red-500/30 text-red-400 hover:bg-red-500/10 disabled:opacity-50 disabled:cursor-not-allowed px-4 py-2.5 text-xs font-bold transition flex items-center gap-1.5"
          >
            <FiRotateCcw className="w-4 h-4" />
            <span>Reset</span>
          </button>
        </div>
      </div>

      <div className="space-y-4 overflow-y-auto max-h-[600px] pr-2 scrollbar-thin">
        {posts.length > 0 ? (
          posts.map((post, idx) => {
            const isHook = idx === 0;
            return isHook ? (
              /* Hook Post Card */
              <div
                key={idx}
                className="rounded-3xl bg-gradient-to-r from-pink-500 to-purple-600 p-6 text-white shadow-lg space-y-4 relative overflow-hidden group"
              >
                <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative z-10 flex items-center justify-between">
                  <div className="flex items-center gap-2 text-sm font-bold">
                    <span>🪝</span>
                    <span>Hook Post</span>
                  </div>
                  <button
                    type="button"
                    onClick={() => handleCopySingle(post, idx)}
                    className="border border-white/30 bg-white/10 hover:bg-white/20 text-white px-3.5 py-1.5 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition"
                  >
                    {copiedIndex === idx ? (
                      <>
                        <FiCheck className="w-3.5 h-3.5" />
                        <span>Copied</span>
                      </>
                    ) : (
                      <>
                        <FiCopy className="w-3.5 h-3.5" />
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                </div>
                <p
                  contentEditable
                  suppressContentEditableWarning
                  onBlur={(e) => handleEditPost(e.target.innerText, idx)}
                  className="relative z-10 text-sm font-medium leading-relaxed whitespace-pre-line outline-none focus:bg-white/10 rounded px-2 py-1 transition duration-200"
                >
                  {post}
                </p>
              </div>
            ) : (
              /* Normal Post Card */
              <div
                key={idx}
                className="rounded-3xl border border-white/10 bg-slate-950/60 p-6 text-white space-y-4 hover:border-purple-500/30 transition duration-300 relative group"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <span className="w-6 h-6 rounded-lg bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-300 font-bold text-xs">
                      {idx}
                    </span>
                    <span className="text-xs text-gray-400 font-semibold uppercase tracking-wider">
                      Post {idx} of {posts.length - 1}
                    </span>
                  </div>
                  <button
                    type="button"
                    onClick={() => handleCopySingle(post, idx)}
                    className="border border-white/10 bg-white/5 hover:bg-white/10 text-white px-3.5 py-1.5 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition"
                  >
                    {copiedIndex === idx ? (
                      <>
                        <FiCheck className="w-3.5 h-3.5 text-purple-400" />
                        <span className="text-purple-400">Copied</span>
                      </>
                    ) : (
                      <>
                        <FiCopy className="w-3.5 h-3.5 text-gray-400" />
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                </div>
                <p
                  contentEditable
                  suppressContentEditableWarning
                  onBlur={(e) => handleEditPost(e.target.innerText, idx)}
                  className="text-sm text-gray-300 leading-relaxed whitespace-pre-line outline-none focus:bg-white/5 rounded px-2 py-1 transition duration-200"
                >
                  {post}
                </p>
              </div>
            );
          })
        ) : (
          <div className="rounded-3xl border border-white/20 bg-slate-950/70 p-8 text-center min-h-[260px] flex items-center justify-center">
            <p className="text-sm text-gray-500 max-w-xs leading-relaxed">
              Your generated thread posts will appear here as separate cards after you click Generate.
            </p>
          </div>
        )}

        {thread && posts.length <= 1 && (
          <div className="rounded-2xl border border-yellow-500/20 bg-yellow-500/5 p-4 text-xs text-yellow-200 mt-4 leading-relaxed">
            <p className="font-semibold text-white">⚠️ Parser Debug Info:</p>
            <p className="mt-1">
              Only a single post was parsed from the model response. Below is the raw response:
            </p>
            <pre className="mt-2 whitespace-pre-wrap font-mono bg-black/40 p-3 rounded-xl border border-white/10 text-gray-300 text-[11px] max-h-40 overflow-y-auto">
              {thread}
            </pre>
          </div>
        )}
      </div>
    </div>
  );
}
