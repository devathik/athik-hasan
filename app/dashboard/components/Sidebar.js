import { FiGrid, FiSettings, FiLogOut } from "react-icons/fi";

export default function Sidebar({
  user,
  activeTab,
  setActiveTab,
  isMobileOpen,
  setIsMobileOpen,
  handleSignOut,
}) {
  return (
    <aside
      className={`fixed inset-y-0 left-0 z-50 w-64 bg-slate-900/90 backdrop-blur-xl border-r border-white/10 p-6 flex flex-col justify-between transition-transform duration-300 md:static md:translate-x-0 shrink-0 ${
        isMobileOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <div className="space-y-8">
        {/* Brand Header */}
        <div className="hidden md:flex items-center gap-3 px-2 py-2">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center text-white font-bold text-xl">
            🪐
          </div>
          <span className="text-xl font-bold text-white tracking-tight">User Hub</span>
        </div>

        {/* Navigation Menu Links */}
        <nav className="space-y-1.5">
          <button
            onClick={() => {
              setActiveTab("dashboard");
              setIsMobileOpen(false);
            }}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-2xl text-sm font-medium transition duration-200 ${
              activeTab === "dashboard"
                ? "bg-purple-600 text-white shadow-lg shadow-purple-600/20"
                : "text-gray-400 hover:text-white hover:bg-white/5"
            }`}
          >
            <FiGrid className="w-5 h-5" />
            <span>Dashboard</span>
          </button>
          <button
            onClick={() => {
              setActiveTab("settings");
              setIsMobileOpen(false);
            }}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-2xl text-sm font-medium transition duration-200 ${
              activeTab === "settings"
                ? "bg-purple-600 text-white shadow-lg shadow-purple-600/20"
                : "text-gray-400 hover:text-white hover:bg-white/5"
            }`}
          >
            <FiSettings className="w-5 h-5" />
            <span>Settings</span>
          </button>
        </nav>
      </div>

      {/* User profile & Sign Out inside Sidebar */}
      <div className="border-t border-white/10 pt-5 space-y-4">
        <div className="flex items-center gap-3 px-2">
          <img
            src={user.picture}
            alt={user.name}
            className="w-10 h-10 rounded-full border-2 border-amber-500 object-cover"
          />
          <div className="min-w-0 flex-1">
            <p className="text-sm font-semibold text-white truncate">{user.name}</p>
            <p className="text-xs text-gray-400 truncate mt-0.5">{user.email}</p>
          </div>
        </div>
        <button
          onClick={handleSignOut}
          className="w-full flex items-center gap-3 px-4 py-3 rounded-2xl text-sm font-medium text-red-400 hover:text-red-300 hover:bg-red-500/10 transition duration-200"
        >
          <FiLogOut className="w-5 h-5" />
          <span>Logout</span>
        </button>
      </div>
    </aside>
  );
}
