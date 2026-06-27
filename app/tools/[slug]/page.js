"use client";

import Link from "next/link";
import { notFound } from "next/navigation";
import { motion } from "framer-motion";
import { getToolBySlug } from "../config/tools";

export default function ToolDetailPage({ params }) {
  const tool = getToolBySlug(params.slug);

  if (!tool) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-slate-950 text-white py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background glow highlights */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 w-96 h-96 bg-purple-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 w-[400px] h-[400px] bg-blue-600/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-4xl mx-auto space-y-16 relative z-10 w-full">
        {/* Navigation Breadcrumb */}
        <div className="flex items-center gap-2 text-xs font-semibold text-gray-500">
          <Link href="/tools" className="hover:text-purple-400 transition-colors">
            Toolkit Hub
          </Link>
          <span>➔</span>
          <span className="text-gray-300 font-bold">{tool.name}</span>
        </div>

        {/* Hero Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center space-y-6"
        >
          {/* Badge & Icon */}
          <div className="flex flex-col items-center gap-4">
            <span className="text-6xl filter drop-shadow-md select-none">{tool.icon}</span>
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-purple-500/30 bg-purple-500/10 text-[10px] font-bold tracking-wider text-purple-300 uppercase">
              ✨ {tool.badge || "Free Web Tool"}
            </span>
          </div>

          {/* Title & Tagline */}
          <div className="space-y-3 max-w-2xl mx-auto">
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight">
              {tool.name}
            </h1>
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
              {tool.tagline}
            </p>
          </div>

          {/* Launch Button CTA */}
          <div className="pt-4 max-w-xs mx-auto">
            <a
              href={tool.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`w-full py-3.5 px-6 rounded-xl text-center text-sm font-bold text-white transition flex items-center justify-center gap-2 shadow-xl ${tool.buttonColor}`}
            >
              <span>Launch Free Tool Now</span>
              <span>🚀</span>
            </a>
          </div>
        </motion.div>

        {/* Description Panel */}
        <div className="p-8 rounded-3xl border border-white/10 bg-white/[0.02] backdrop-blur-xl shadow-2xl relative overflow-hidden">
          <div className="absolute -inset-px bg-gradient-to-r from-purple-500/10 via-transparent to-emerald-500/10 rounded-3xl pointer-events-none" />
          
          <div className="relative z-10 space-y-6">
            <h3 className="text-lg font-bold text-white uppercase tracking-wider font-mono">Overview</h3>
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
              {tool.description}
            </p>
          </div>
        </div>

        {/* Use Cases / Who is it For */}
        {tool.useCases && (
          <div className="space-y-6">
            <div className="text-center sm:text-left">
              <h3 className="text-lg font-bold text-white uppercase tracking-wider font-mono">Common Use Cases</h3>
              <p className="text-xs text-gray-500 mt-1">Discover how this tool fits into your workflow</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {tool.useCases.map((useCase, idx) => (
                <div 
                  key={idx} 
                  className="p-5 rounded-2xl border border-white/5 bg-white/[0.01] hover:bg-white/[0.03] transition duration-200 flex items-start gap-3.5"
                >
                  <span className="text-purple-400 font-bold">🎯</span>
                  <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">{useCase}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* How it Works / Step-by-step */}
        {tool.howItWorks && (
          <div className="space-y-6">
            <div className="text-center sm:text-left">
              <h3 className="text-lg font-bold text-white uppercase tracking-wider font-mono">How It Works</h3>
              <p className="text-xs text-gray-500 mt-1">Get started in three simple steps</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {tool.howItWorks.map((stepObj) => (
                <div 
                  key={stepObj.step}
                  className="p-6 rounded-2xl border border-white/10 bg-white/[0.02] flex flex-col gap-3 relative overflow-hidden"
                >
                  <span className="absolute right-4 top-2 text-7xl font-extrabold text-white/[0.02] font-mono select-none pointer-events-none">
                    0{stepObj.step}
                  </span>
                  <div className="w-8 h-8 rounded-lg bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-xs font-mono font-bold text-purple-300">
                    {stepObj.step}
                  </div>
                  <h4 className="text-sm font-bold text-white mt-1">{stepObj.title}</h4>
                  <p className="text-xs text-gray-400 leading-relaxed">{stepObj.desc}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Features Checklist */}
        <div className="space-y-6">
          <div className="text-center sm:text-left">
            <h3 className="text-lg font-bold text-white uppercase tracking-wider font-mono">Features</h3>
            <p className="text-xs text-gray-500 mt-1">Everything included in this application</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {tool.features.map((feat, idx) => (
              <div key={idx} className="flex items-center gap-3 p-3.5 rounded-xl border border-white/5 bg-white/[0.01]">
                <span className="text-emerald-400">✔</span>
                <span className="text-xs sm:text-sm text-gray-300">{feat}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA Block */}
        <div className="p-8 rounded-3xl border border-white/10 bg-gradient-to-r from-purple-500/10 to-indigo-500/10 backdrop-blur-xl text-center space-y-6 shadow-2xl relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-500/10 via-transparent to-transparent opacity-50 pointer-events-none" />
          <div className="relative z-10 space-y-4 max-w-xl mx-auto">
            <h3 className="text-2xl font-extrabold text-white tracking-tight">Ready to start?</h3>
            <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
              Launch the application directly in a new window to enjoy full accessibility and speed. The tool is 100% free with no registration.
            </p>
            <div className="pt-2 max-w-xs mx-auto">
              <a
                href={tool.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-full py-3 px-5 rounded-xl text-center text-xs font-bold text-white transition flex items-center justify-center gap-1.5 shadow-lg ${tool.buttonColor}`}
              >
                <span>Launch {tool.name}</span>
                <span>➔</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
