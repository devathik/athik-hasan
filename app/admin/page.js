"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { CAMPAIGNS } from "../resourse/config/campaigns";

export default function Dashboard() {
  const [data, setData] = useState({ global: { success: 0, failure: 0 }, forms: {}, submissions: [] });
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [selectedForm, setSelectedForm] = useState("all");

  const fetchMetrics = async () => {
    setRefreshing(true);
    try {
      const res = await fetch("/api/metrics");
      if (res.ok) {
        const json = await res.json();
        setData(json);
      }
    } catch (err) {
      console.error("Error fetching metrics:", err);
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  };

  useEffect(() => {
    fetchMetrics();
  }, []);



  // Compute stats based on filter selection
  let displaySuccess = 0;
  let displayFailure = 0;
  let displayTitle = "All Pages";

  if (selectedForm === "all") {
    displaySuccess = data.global?.success || 0;
    displayFailure = data.global?.failure || 0;
    displayTitle = "All Pages / Aggregated";
  } else {
    const formData = data.forms?.[selectedForm] || { success: 0, failure: 0, title: "Unknown Page" };
    displaySuccess = formData.success || 0;
    displayFailure = formData.failure || 0;
    displayTitle = formData.title;
  }

  const total = displaySuccess + displayFailure;
  const successRate = total > 0 ? Math.round((displaySuccess / total) * 100) : 0;



  if (loading) {
    return (
      <div className="min-h-screen bg-slate-950 text-white flex flex-col items-center justify-center gap-4">
        <svg className="animate-spin h-10 w-10 text-purple-500" fill="none" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
        </svg>
        <p className="text-gray-400 font-medium">Loading unified metrics dashboard...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-950 text-white py-12 px-4 sm:px-6 lg:px-8">
      {/* Background neon glow highlights */}
      <div className="absolute top-0 left-1/4 -translate-x-1/2 w-96 h-96 bg-purple-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 translate-x-1/2 w-[400px] h-[400px] bg-indigo-600/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-6xl mx-auto space-y-8 relative z-10">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 border-b border-white/10 pb-6">
          <div>
            <div className="flex items-center gap-2 text-purple-400 text-xs font-bold uppercase tracking-widest">
              <span>Next.js Admin</span>
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              <span>Multi-Page Email Tracking</span>
            </div>
            <h1 className="text-3xl font-extrabold tracking-tight mt-1 text-white">
              Unified Campaigns Dashboard
            </h1>
          </div>

          <div className="flex flex-wrap items-center gap-3 w-full md:w-auto">
            {/* Landing Page Dropdown Selector */}
            <div className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-lg px-3 py-2 flex-grow md:flex-grow-0">
              <span className="text-xs text-gray-400 font-semibold whitespace-nowrap">Filter Page:</span>
              <select
                value={selectedForm}
                onChange={(e) => setSelectedForm(e.target.value)}
                className="bg-transparent border-0 text-white text-xs font-semibold focus:outline-none cursor-pointer pr-4"
              >
                <option value="all" className="bg-slate-900 text-white">All Pages (Total)</option>
                {data.forms && Object.keys(data.forms).map((key) => (
                  <option key={key} value={key} className="bg-slate-900 text-white">
                    {data.forms[key].title || key}
                  </option>
                ))}
              </select>
            </div>

            <button
              onClick={fetchMetrics}
              disabled={refreshing}
              className="flex items-center gap-2 px-4 py-2 text-xs font-semibold rounded-lg bg-purple-600 hover:bg-purple-700 active:scale-98 transition disabled:opacity-50"
            >
              <svg 
                className={`w-4 h-4 ${refreshing ? "animate-spin" : ""}`} 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor" 
                strokeWidth="2.5"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 1121.21 8H18.2" />
              </svg>
              <span>Refresh</span>
            </button>
          </div>
        </div>

        {/* Campaigns Navigation Bar */}
        <div className="flex flex-wrap gap-2 text-xs font-semibold bg-white/[0.02] border border-white/10 rounded-xl p-3 items-center">
          <span className="text-gray-500 uppercase tracking-wider text-[10px] font-mono mr-2">Available Campaigns:</span>
          <Link 
            href="/resourse" 
            target="_blank"
            className="px-3 py-1.5 rounded-lg border border-white/20 bg-white/5 hover:bg-white/10 text-gray-300 transition-colors"
          >
            Resources Parent Hub ↗
          </Link>
          {CAMPAIGNS.map(c => (
            <Link 
              key={c.slug}
              href={c.link} 
              target="_blank"
              className={`px-3 py-1.5 rounded-lg border transition-colors ${
                c.slug === 'free-n8n-templates' 
                  ? 'border-purple-500/30 bg-purple-500/10 hover:bg-purple-500/20 text-purple-300' 
                  : c.slug === 'make-templates' 
                  ? 'border-blue-500/30 bg-blue-500/10 hover:bg-blue-500/20 text-blue-300' 
                  : c.slug === 'alex-hormozi-100m-offers'
                  ? 'border-amber-500/30 bg-amber-500/10 hover:bg-amber-500/20 text-amber-300'
                  : 'border-pink-500/30 bg-pink-500/10 hover:bg-pink-500/20 text-pink-300'
              }`}
            >
              {c.title} ↗
            </Link>
          ))}
        </div>

        {/* Selected Scope Banner */}
        <div className="p-4 rounded-xl border border-purple-500/20 bg-purple-950/10 flex items-center justify-between">
          <p className="text-sm text-purple-300">
            Currently displaying stats for: <strong className="text-white font-bold">{displayTitle}</strong>
          </p>
          <span className="text-[10px] uppercase font-mono px-2 py-0.5 rounded border border-purple-500/30 text-purple-400 bg-purple-500/10">
            {selectedForm === "all" ? "aggregated" : "single-campaign"}
          </span>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Card: Total Submissions */}
          <div className="p-6 rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-xl shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-10">
              <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <p className="text-sm font-semibold text-gray-400 uppercase tracking-wider font-mono">Total Triggers</p>
            <h2 className="text-4xl font-extrabold text-white mt-3">{total}</h2>
            <div className="h-1.5 w-full bg-white/5 rounded-full mt-4 overflow-hidden">
              <div className="h-full bg-indigo-500 rounded-full" style={{ width: "100%" }} />
            </div>
          </div>

          {/* Card: Success Submissions */}
          <div className="p-6 rounded-2xl border border-emerald-500/20 bg-emerald-950/5 backdrop-blur-xl shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-10 text-emerald-400">
              <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <p className="text-sm font-semibold text-emerald-400/80 uppercase tracking-wider font-mono">Successful</p>
            <h2 className="text-4xl font-extrabold text-emerald-400 mt-3">{displaySuccess}</h2>
            <div className="h-1.5 w-full bg-white/5 rounded-full mt-4 overflow-hidden">
              <div className="h-full bg-emerald-500 rounded-full" style={{ width: `${successRate}%` }} />
            </div>
          </div>

          {/* Card: Failed Submissions */}
          <div className="p-6 rounded-2xl border border-red-500/20 bg-red-950/5 backdrop-blur-xl shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-10 text-red-400">
              <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
            </div>
            <p className="text-sm font-semibold text-red-400/80 uppercase tracking-wider font-mono">Failed</p>
            <h2 className="text-4xl font-extrabold text-red-400 mt-3">{displayFailure}</h2>
            <div className="h-1.5 w-full bg-white/5 rounded-full mt-4 overflow-hidden">
              <div className="h-full bg-red-500 rounded-full" style={{ width: `${total > 0 ? 100 - successRate : 0}%` }} />
            </div>
          </div>

          {/* Card: Success Rate */}
          <div className="p-6 rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-xl shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-10">
              <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
            </div>
            <p className="text-sm font-semibold text-gray-400 uppercase tracking-wider font-mono">Success Rate</p>
            <h2 className="text-4xl font-extrabold text-white mt-3">{successRate}%</h2>
            <div className="h-1.5 w-full bg-white/5 rounded-full mt-4 overflow-hidden">
              <div 
                className={`h-full rounded-full transition-all duration-500 ${
                  successRate > 80 ? "bg-emerald-500" : successRate > 50 ? "bg-amber-500" : "bg-red-500"
                }`} 
                style={{ width: `${successRate}%` }} 
              />
            </div>
          </div>
        </div>


      </div>
    </div>
  );
}
