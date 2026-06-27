"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { TOOLS } from "./config/tools";

export default function ToolsHubPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  // Get unique list of categories for filter tabs
  const categories = ["all", ...new Set(TOOLS.map((t) => t.category.toLowerCase()))];

  // Filter tools based on query & active tab
  const filteredTools = TOOLS.filter((tool) => {
    const matchesCategory =
      selectedCategory === "all" || tool.category.toLowerCase() === selectedCategory;
    const matchesSearch =
      tool.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      tool.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      tool.tagline.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-slate-950 text-white py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden flex flex-col justify-center">
      {/* Background glow highlights */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 w-96 h-96 bg-purple-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 w-[400px] h-[400px] bg-blue-600/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-5xl mx-auto space-y-12 relative z-10 w-full">
        {/* Header Section */}
        <div className="text-center space-y-4">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-purple-500/30 bg-purple-500/10 text-xs font-semibold tracking-wider text-purple-300 uppercase">
            🛠️ Web Toolkit
          </span>
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight">
            Free Online{" "}
            <span className="bg-gradient-to-r from-purple-400 via-indigo-300 to-blue-400 bg-clip-text text-transparent">
              Tools & Utilities
            </span>
          </h1>
          <p className="text-gray-400 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
            Explore a collection of mini-applications, helper APIs, and marketing generators built to speed up development and workflows.
          </p>
        </div>

        {/* Filters and Search Bar Section */}
        <div className="flex flex-col sm:flex-row gap-4 justify-between items-center bg-white/[0.02] border border-white/10 rounded-2xl p-4 backdrop-blur-md">
          {/* Search Input */}
          <div className="relative w-full sm:max-w-xs">
            <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-500">
              🔍
            </span>
            <input
              type="text"
              placeholder="Search tools..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 text-sm rounded-xl border border-white/10 bg-white/[0.03] text-white placeholder-gray-500 focus:outline-none focus:border-purple-500/50 transition duration-200"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute inset-y-0 right-0 pr-3 flex items-center text-xs text-gray-500 hover:text-white"
              >
                Clear
              </button>
            )}
          </div>

          {/* Category Tabs */}
          <div className="flex gap-1.5 overflow-x-auto max-w-full pb-1 sm:pb-0 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold uppercase tracking-wider transition duration-200 whitespace-nowrap border ${
                  selectedCategory === cat
                    ? "bg-purple-600 border-purple-500 text-white shadow-lg shadow-purple-500/25"
                    : "bg-white/5 border-white/5 text-gray-400 hover:bg-white/10 hover:text-white"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Tools Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-2">
          <AnimatePresence mode="popLayout">
            {filteredTools.map((tool, index) => (
              <motion.div
                key={tool.slug}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className={`p-8 rounded-2xl border bg-gradient-to-br ${tool.color} backdrop-blur-xl shadow-xl flex flex-col justify-between hover:scale-[1.02] transition-transform duration-300 relative group overflow-hidden`}
              >
                {/* Visual glow overlay inside card */}
                <div className="absolute inset-0 bg-gradient-to-r from-white/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="space-y-4">
                  <div className="flex justify-between items-start">
                    <span className="text-4xl filter drop-shadow-md select-none">{tool.icon}</span>
                    {tool.badge && (
                      <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-white/5 border border-white/10 text-white/80">
                        {tool.badge}
                      </span>
                    )}
                  </div>
                  <h2 className="text-xl font-bold text-white mt-2 group-hover:text-white/95 transition-colors">
                    {tool.name}
                  </h2>
                  <p className="text-gray-400 text-sm leading-relaxed">{tool.tagline}</p>

                  {/* Highlights list */}
                  <ul className="space-y-1.5 pt-2">
                    {tool.features.slice(0, 3).map((feat, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-xs text-gray-400">
                        <span className="text-purple-400">✔</span>
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="grid grid-cols-2 gap-3 pt-8 relative z-10">
                  <Link
                    href={`/tools/${tool.slug}`}
                    className="w-full py-2.5 px-3 rounded-xl text-center text-xs font-bold bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 text-white transition block"
                  >
                    View Details
                  </Link>
                  <a
                    href={tool.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full py-2.5 px-3 rounded-xl text-center text-xs font-bold text-white transition flex items-center justify-center gap-1 shadow-lg ${tool.buttonColor}`}
                  >
                    Open ↗
                  </a>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredTools.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16 bg-white/[0.01] border border-white/5 rounded-2xl"
          >
            <p className="text-gray-500 text-sm">No tools found matching your search query.</p>
          </motion.div>
        )}
      </div>
    </div>
  );
}
