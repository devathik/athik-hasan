import { FiExternalLink, FiLayers } from "react-icons/fi";
import { TOOLS } from "../../tools/config/tools";

export default function DashboardTab({ user, savedKey, activeProvider }) {
  return (
    <div className="max-w-5xl mx-auto space-y-8">
      <div>
        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
          Welcome back, {user.name.split(" ")[0]} 👋
        </h1>
        <p className="text-gray-400 text-sm mt-1 leading-relaxed">
          Here's what's happening with your workspace and developer tools.
        </p>
      </div>

      {/* Quick Metrics Cards */}
      <div className="grid gap-5 sm:grid-cols-3">
        <div className="rounded-3xl border border-white/20 bg-slate-900/40 p-5 backdrop-blur-xl">
          <span className="text-2xl">⚡</span>
          <p className="text-xs uppercase tracking-wider text-gray-400 mt-2">Active Tools</p>
          <p className="text-2xl font-bold mt-1 text-white">{TOOLS.length}</p>
        </div>
        <div className="rounded-3xl border border-white/20 bg-slate-900/40 p-5 backdrop-blur-xl">
          <span className="text-2xl">🔑</span>
          <p className="text-xs uppercase tracking-wider text-gray-400 mt-2">{activeProvider || "Gemini"} API Key</p>
          <p className={`text-sm font-bold mt-2 ${savedKey ? "text-emerald-400" : "text-amber-400"}`}>
            {savedKey ? "✓ Stored Successfully" : "✗ Not Configured"}
          </p>
        </div>
        <div className="rounded-3xl border border-white/20 bg-slate-900/40 p-5 backdrop-blur-xl">
          <span className="text-2xl">👤</span>
          <p className="text-xs uppercase tracking-wider text-gray-400 mt-2">Account Type</p>
          <p className="text-2xl font-bold mt-1 text-purple-400">User Profile</p>
        </div>
      </div>

      {/* Tool Launcher Grid */}
      <div className="space-y-4">
        <h2 className="text-xl font-bold flex items-center gap-2">
          <FiLayers className="text-purple-400" />
          <span>Launch Toolkit App</span>
        </h2>
        <div className="grid gap-6 sm:grid-cols-2">
          {TOOLS.map((tool) => (
            <div
              key={tool.slug}
              className="p-6 rounded-3xl border border-white/20 bg-slate-900/60 hover:bg-slate-900/80 transition duration-300 flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex justify-between items-start">
                  <span className="text-3xl filter drop-shadow-md select-none">{tool.icon}</span>
                  {tool.badge && (
                    <span className="px-2.5 py-0.5 rounded-full text-[9px] font-bold uppercase tracking-wider bg-white/5 border border-white/10 text-white/80">
                      {tool.badge}
                    </span>
                  )}
                </div>
                <h3 className="text-lg font-bold text-white">{tool.name}</h3>
                <p className="text-gray-400 text-xs leading-relaxed line-clamp-2">{tool.tagline}</p>
              </div>
              <div className="pt-6">
                <a
                  href={tool.link}
                  target={tool.link.startsWith("http") ? "_blank" : "_self"}
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-1.5 py-2.5 px-4 rounded-xl text-xs font-bold text-white transition hover:brightness-110 bg-gradient-to-r from-purple-500 to-indigo-500 shadow-md shadow-purple-500/10"
                >
                  <span>Open Application</span>
                  <FiExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
