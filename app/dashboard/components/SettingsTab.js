import { FiSettings, FiUser } from "react-icons/fi";

const PROVIDER_MODELS = {
  Gemini: ["gemini-2.0-flash", "gemini-1.5-flash", "gemini-1.5-pro", "Custom..."],
  OpenAI: ["gpt-4o-mini", "gpt-4o", "gpt-3.5-turbo", "Custom..."],
  Claude: ["claude-3-5-sonnet-20241022", "claude-3-5-haiku-20241022", "claude-3-opus-20240229", "Custom..."],
  OpenRouter: [
    "google/gemini-2.5-flash:free",
    "meta-llama/llama-3-8b-instruct:free",
    "mistralai/mistral-7b-instruct:free",
    "Custom...",
  ],
};

export default function SettingsTab({
  user,
  activeProvider,
  setActiveProvider,
  apiKey,
  setApiKey,
  model,
  setModel,
  customModel,
  setCustomModel,
  showKey,
  setShowKey,
  handleSave,
  status,
}) {
  const modelsList = PROVIDER_MODELS[activeProvider] || [];
  const isCustomModel = !modelsList.includes(model) || model === "Custom...";

  return (
    <div className="max-w-3xl mx-auto space-y-8">
      <div>
        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">Settings</h1>
        <p className="text-gray-400 text-sm mt-1 leading-relaxed">
          Configure your API credentials and profile settings below.
        </p>
      </div>

      {/* API Key Panel */}
      <div className="rounded-[32px] border border-white/20 bg-slate-900/60 p-8 shadow-2xl backdrop-blur-xl space-y-6">
        <div>
          <h2 className="text-xl font-bold flex items-center gap-2">
            <FiSettings className="text-purple-400" />
            <span>API Configuration</span>
          </h2>
          <p className="text-gray-400 text-xs mt-1 leading-relaxed">
            Configure your active AI provider, keys, and model preferences.
          </p>
        </div>

        <div className="space-y-4">
          {/* Provider Select */}
          <div className="space-y-2">
            <label className="text-sm font-semibold text-white">Active AI Provider</label>
            <select
              value={activeProvider}
              onChange={(e) => setActiveProvider(e.target.value)}
              className="w-full rounded-2xl border border-white/20 bg-slate-950/80 px-4 py-3 text-sm text-white outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20"
            >
              <option value="Gemini" className="bg-slate-950 text-white">Google Gemini</option>
              <option value="OpenAI" className="bg-slate-950 text-white">OpenAI (GPT)</option>
              <option value="Claude" className="bg-slate-950 text-white">Anthropic Claude</option>
              <option value="OpenRouter" className="bg-slate-950 text-white">OpenRouter</option>
            </select>
          </div>

          {/* API Key Input */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <label className="text-sm font-semibold text-white">
                {activeProvider} API Key
              </label>
              <button
                type="button"
                onClick={() => setShowKey(!showKey)}
                className="text-xs uppercase tracking-[0.15em] text-purple-300 hover:text-purple-100 transition"
              >
                {showKey ? "Hide Key" : "Show Key"}
              </button>
            </div>
            <input
              type={showKey ? "text" : "password"}
              value={apiKey}
              onChange={(e) => setApiKey(e.target.value)}
              placeholder={`Enter your ${activeProvider} API key`}
              className="w-full rounded-2xl border border-white/20 bg-slate-950/80 px-4 py-3.5 text-sm text-white outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition duration-200"
            />
          </div>

          {/* Model Select */}
          <div className="space-y-2">
            <label className="text-sm font-semibold text-white">Default Model</label>
            <select
              value={isCustomModel ? "Custom..." : model}
              onChange={(e) => {
                const val = e.target.value;
                if (val === "Custom...") {
                  setModel("Custom...");
                  setCustomModel("");
                } else {
                  setModel(val);
                }
              }}
              className="w-full rounded-2xl border border-white/20 bg-slate-950/80 px-4 py-3 text-sm text-white outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20"
            >
              {modelsList.map((m) => (
                <option key={m} value={m} className="bg-slate-950 text-white">
                  {m}
                </option>
              ))}
            </select>
          </div>

          {/* Custom Model Text Input */}
          {(isCustomModel || model === "Custom...") && (
            <div className="space-y-2">
              <label className="text-sm font-semibold text-white">Custom Model ID</label>
              <input
                type="text"
                value={customModel}
                onChange={(e) => setCustomModel(e.target.value)}
                placeholder="e.g. meta-llama/llama-3-70b-instruct"
                className="w-full rounded-2xl border border-white/20 bg-slate-950/80 px-4 py-3.5 text-sm text-white outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition duration-200"
              />
            </div>
          )}

          <button
            type="button"
            onClick={handleSave}
            className="w-full sm:w-auto inline-flex items-center justify-center rounded-2xl bg-gradient-to-r from-pink-500 to-purple-500 px-6 py-3 text-sm font-semibold text-white transition hover:brightness-110 shadow-lg shadow-pink-500/10 active:scale-[0.98]"
          >
            Save API Settings
          </button>
        </div>

        {status && (
          <div className="rounded-2xl border border-emerald-500/20 bg-emerald-500/10 px-4 py-3 text-xs text-emerald-200">
            {status}
          </div>
        )}

        <div className="rounded-2xl border border-white/10 bg-white/5 p-4 text-xs text-gray-400 leading-relaxed">
          <p className="font-semibold text-white">Privacy Note:</p>
          <p className="mt-1">
            Your keys are stored entirely in your local browser storage and never sent to any server other than the direct AI model provider endpoints.
          </p>
        </div>
      </div>

      {/* Profile Panel */}
      <div className="rounded-[32px] border border-white/20 bg-slate-900/60 p-8 shadow-2xl backdrop-blur-xl space-y-6">
        <div>
          <h2 className="text-xl font-bold flex items-center gap-2">
            <FiUser className="text-purple-400" />
            <span>Google Account Profile</span>
          </h2>
          <p className="text-gray-400 text-xs mt-1 leading-relaxed">
            Review the connected Google account for this session.
          </p>
        </div>

        <div className="flex flex-col gap-4 sm:flex-row sm:items-center p-4 rounded-2xl border border-white/15 bg-white/5">
          <img
            src={user.picture}
            alt={user.name}
            className="h-16 w-16 rounded-2xl object-cover"
          />
          <div className="space-y-1">
            <p className="text-base font-semibold text-white">{user.name}</p>
            <p className="text-xs text-gray-300">{user.email}</p>
            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-bold tracking-wider uppercase bg-emerald-500/15 border border-emerald-500/35 text-emerald-300 mt-1">
              Connected
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
