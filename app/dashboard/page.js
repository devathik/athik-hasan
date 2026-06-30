"use client";

import { useEffect, useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import AccessRestricted from "./components/AccessRestricted";
import Sidebar from "./components/Sidebar";
import DashboardTab from "./components/DashboardTab";
import SettingsTab from "./components/SettingsTab";

export default function DashboardPage() {
  const [user, setUser] = useState(null);
  const [activeTab, setActiveTab] = useState("dashboard"); // "dashboard" or "settings"
  const [activeProvider, setActiveProvider] = useState("Gemini");
  const [apiKey, setApiKey] = useState("");
  const [model, setModel] = useState("");
  const [customModel, setCustomModel] = useState("");
  const [status, setStatus] = useState("");
  const [showKey, setShowKey] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const storedUser = localStorage.getItem("google_user_profile");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    const provider = localStorage.getItem("active_api_provider") || "Gemini";
    setActiveProvider(provider);
    
    const key = localStorage.getItem(`api_key_${provider.toLowerCase()}`) || "";
    setApiKey(key);
    
    const savedModel = localStorage.getItem(`api_model_${provider.toLowerCase()}`) || "";
    setModel(savedModel);
    
    const savedCustom = localStorage.getItem(`api_model_custom_${provider.toLowerCase()}`) || "";
    setCustomModel(savedCustom);
  }, []);

  const handleProviderChange = (newProvider) => {
    setActiveProvider(newProvider);
    const key = localStorage.getItem(`api_key_${newProvider.toLowerCase()}`) || "";
    setApiKey(key);
    
    const savedModel = localStorage.getItem(`api_model_${newProvider.toLowerCase()}`) || "";
    setModel(savedModel);
    
    const savedCustom = localStorage.getItem(`api_model_custom_${newProvider.toLowerCase()}`) || "";
    setCustomModel(savedCustom);
  };

  const handleSave = () => {
    if (!apiKey.trim()) {
      setStatus(`Enter a valid API key for ${activeProvider} before saving.`);
      setTimeout(() => setStatus(""), 3000);
      return;
    }
    
    localStorage.setItem("active_api_provider", activeProvider);
    localStorage.setItem(`api_key_${activeProvider.toLowerCase()}`, apiKey.trim());
    localStorage.setItem(`api_model_${activeProvider.toLowerCase()}`, model);
    localStorage.setItem(`api_model_custom_${activeProvider.toLowerCase()}`, customModel.trim());
    
    // For backwards compatibility:
    if (activeProvider === "Gemini") {
      localStorage.setItem("viral_thread_api_key", apiKey.trim());
    }

    setStatus(`Settings saved locally for ${activeProvider}.`);
    setTimeout(() => setStatus(""), 3000);
  };

  const handleSignOut = () => {
    localStorage.removeItem("google_user_profile");
    setUser(null);
    window.dispatchEvent(new Event("local-user-change"));
  };

  const isKeySaved = !!localStorage.getItem(`api_key_${activeProvider.toLowerCase()}`);

  if (!user) {
    return <AccessRestricted />;
  }

  return (
    <div className="min-h-screen bg-slate-950 text-white flex flex-col md:flex-row relative overflow-hidden">
      {/* Background glow highlights */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 w-96 h-96 bg-purple-600/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 w-[400px] h-[400px] bg-blue-600/5 rounded-full blur-[130px] pointer-events-none" />

      {/* Mobile Header */}
      <div className="flex md:hidden items-center justify-between p-4 bg-slate-900 border-b border-white/10 z-40">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center text-white font-bold text-base">
            🪐
          </div>
          <span className="text-base font-bold text-white tracking-tight">User Hub</span>
        </div>
        <button
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-white transition focus:outline-none"
        >
          {isMobileOpen ? <FiX className="w-6 h-6" /> : <FiMenu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Overlay */}
      {isMobileOpen && (
        <div
          onClick={() => setIsMobileOpen(false)}
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden"
        />
      )}

      {/* Sidebar Navigation */}
      <Sidebar
        user={user}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        isMobileOpen={isMobileOpen}
        setIsMobileOpen={setIsMobileOpen}
        handleSignOut={handleSignOut}
      />

      {/* Main Content Area */}
      <main className="flex-1 overflow-y-auto p-6 sm:p-10 relative z-10">
        {activeTab === "dashboard" ? (
          <DashboardTab user={user} savedKey={isKeySaved} activeProvider={activeProvider} />
        ) : (
          <SettingsTab
            user={user}
            activeProvider={activeProvider}
            setActiveProvider={handleProviderChange}
            apiKey={apiKey}
            setApiKey={setApiKey}
            model={model}
            setModel={setModel}
            customModel={customModel}
            setCustomModel={setCustomModel}
            showKey={showKey}
            setShowKey={setShowKey}
            handleSave={handleSave}
            status={status}
          />
        )}
      </main>
    </div>
  );
}
