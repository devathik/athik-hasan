import Link from "next/link";
import { usePathname } from "next/navigation";

export default function AccessRestricted() {
  const pathname = usePathname();
  return (
    <div className="min-h-screen bg-slate-950 text-white flex items-center justify-center py-20 px-4 relative overflow-hidden">
      {/* Background glow highlights */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 w-96 h-96 bg-purple-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 w-[400px] h-[400px] bg-blue-600/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="w-full max-w-md rounded-[32px] border border-white/10 bg-slate-900/80 p-8 shadow-2xl shadow-slate-950/40 backdrop-blur-xl text-center space-y-6 relative z-10">
        <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center text-white font-bold text-3xl mx-auto shadow-lg shadow-purple-500/25">
          🪐
        </div>
        <div className="space-y-2">
          <h2 className="text-2xl font-bold">Access Restricted</h2>
          <p className="text-sm text-gray-400 leading-relaxed">
            Please sign in with your Google account to access your user dashboard and save settings.
          </p>
        </div>
        <Link
          href={`/login?from=${encodeURIComponent(pathname || "/dashboard")}`}
          className="w-full inline-flex items-center justify-center rounded-2xl bg-gradient-to-r from-purple-500 to-pink-500 py-3.5 text-sm font-semibold text-white shadow-lg shadow-purple-500/20 transition hover:brightness-110 active:scale-[0.98]"
        >
          Go to Login Page 🔑
        </Link>
      </div>
    </div>
  );
}
