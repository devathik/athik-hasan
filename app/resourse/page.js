"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { CAMPAIGNS } from "./config/campaigns";

export default function ResourcesHubPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-white py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden flex flex-col justify-center">
      {/* Background glow highlights */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 w-96 h-96 bg-purple-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 w-[400px] h-[400px] bg-blue-600/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-4xl mx-auto space-y-12 relative z-10 w-full">
        {/* Header Section */}
        <div className="text-center space-y-4">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-purple-500/30 bg-purple-500/10 text-xs font-semibold tracking-wider text-purple-300 uppercase">
            🚀 Resource Center
          </span>
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight">
            Developer{" "}
            <span className="bg-gradient-to-r from-purple-400 via-indigo-300 to-blue-400 bg-clip-text text-transparent">
              Resources & Tools
            </span>
          </h1>
          <p className="text-gray-400 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
            Choose a resource category below to download ready-to-use templates, workflow schemas, and interactive test campaigns.
          </p>
        </div>

        {/* Resources Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6">
          {CAMPAIGNS.map((res, index) => (
            <motion.div
              key={res.slug}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`p-8 rounded-2xl border bg-gradient-to-br ${res.color} backdrop-blur-xl shadow-xl flex flex-col justify-between hover:scale-[1.02] transition-transform duration-300`}
            >
              <div className="space-y-4">
                <div className="flex justify-between items-start">
                  <span className="text-4xl">{res.icon}</span>
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-white/5 border border-white/10 text-white/80">
                    {res.badge}
                  </span>
                </div>
                <h2 className="text-xl font-bold text-white mt-2">{res.title}</h2>
                <p className="text-gray-400 text-sm leading-relaxed">{res.description}</p>
              </div>
            
              <div className="pt-8">
                <Link
                  href={res.link}
                  className={`w-full py-2.5 px-4 rounded-xl text-center text-xs font-bold text-white transition block shadow-lg ${res.buttonColor}`}
                >
                  {res.buttonText || "Explore Templates ↗"}
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
