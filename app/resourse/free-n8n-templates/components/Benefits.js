"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FaCheck, FaRegClock, FaSync, FaTrophy, FaLightbulb } from "react-icons/fa";
import { HiSparkles, HiArrowTrendingUp } from "react-icons/hi2";

const BENEFITS = [
  {
    title: "Automate Repetitive Work",
    description: "Offload data entry, content formatting, and routine social posting to tireless AI workflows.",
    icon: FaSync,
    iconColor: "text-purple-400 bg-purple-500/10 border-purple-500/20",
  },
  {
    title: "Save Time",
    description: "Get back hours every single week by replacing manual copy-pasting with instant API webhooks.",
    icon: FaRegClock,
    iconColor: "text-indigo-400 bg-indigo-500/10 border-indigo-500/20",
  },
  {
    title: "Improve Productivity",
    description: "Empower your workflow with AI agents that run 24/7 without burning out.",
    icon: FaTrophy,
    iconColor: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20",
  },
  {
    title: "Discover Practical AI Workflows",
    description: "Learn how to orchestrate Gemini, OpenAI, Notion, and Slack to build reliable multi-agent systems.",
    icon: HiArrowTrendingUp,
    iconColor: "text-pink-400 bg-pink-500/10 border-pink-500/20",
  },
  {
    title: "Learn Creator Automations",
    description: "Master the exact systems used by top newsletter writers and SaaS creators to distribute content.",
    icon: FaLightbulb,
    iconColor: "text-amber-400 bg-amber-500/10 border-amber-500/20",
  },
];

export default function Benefits() {
  const [manualHours, setManualHours] = useState(10); // default 10 hours/week spent on tasks

  // Calculations:
  // Assuming n8n automates 80% of repetitive tasks
  const automationRate = 0.8; 
  const hoursSavedPerYear = Math.round(manualHours * 52 * automationRate);
  const extraWorkdaysCreated = Math.round(hoursSavedPerYear / 8);
  const hourlyRateValue = 45; // average USD rate per hour
  const moneyValueSaved = (hoursSavedPerYear * hourlyRateValue).toLocaleString();

  return (
    <section className="py-16 md:py-24 border-t border-white/5 relative">
      {/* Background glow highlights */}
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-emerald-600/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Column: Benefits checklist */}
        <div className="lg:col-span-7 space-y-8">
          <div className="space-y-4">
            <span className="text-xs font-mono tracking-widest text-emerald-400 uppercase font-semibold">
              Workflow Efficiency
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
              Why Automate with n8n?
            </h2>
            <p className="text-gray-400 text-sm md:text-base max-w-xl">
              Stop fighting APIs and writing custom script wrappers. n8n gives you a robust visual builder combined with raw JS flexibility.
            </p>
          </div>

          <div className="space-y-6">
            {BENEFITS.map((benefit, idx) => {
              const IconComp = benefit.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="flex gap-4 items-start"
                >
                  <div className={`p-2.5 rounded-xl border flex-shrink-0 flex items-center justify-center ${benefit.iconColor}`}>
                    <IconComp className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white mb-1">{benefit.title}</h3>
                    <p className="text-gray-400 text-xs leading-relaxed max-w-lg">{benefit.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Right Column: Time Saved Calculator widget */}
        <div className="lg:col-span-5">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="p-6 rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-xl shadow-2xl relative overflow-hidden"
          >
            {/* Glowing borders */}
            <div className="absolute -inset-px bg-gradient-to-br from-emerald-500/10 via-transparent to-purple-500/10 rounded-2xl pointer-events-none" />

            <div className="flex items-center gap-2 mb-6">
              <HiSparkles className="w-5 h-5 text-emerald-400 animate-pulse" />
              <h3 className="text-lg font-extrabold text-white">ROI Calculator</h3>
            </div>

            {/* Slider container */}
            <div className="space-y-5 mb-8">
              <div className="flex justify-between items-center">
                <label className="text-xs text-gray-400 font-semibold">
                  Manual Work Time (per week):
                </label>
                <span className="text-lg font-mono font-bold text-emerald-400 bg-emerald-500/10 px-2.5 py-0.5 rounded border border-emerald-500/20">
                  {manualHours} Hours
                </span>
              </div>
              <input
                type="range"
                min="1"
                max="40"
                value={manualHours}
                onChange={(e) => setManualHours(Number(e.target.value))}
                className="w-full h-2 rounded-lg bg-black/60 border border-white/10 appearance-none cursor-pointer accent-emerald-400"
                style={{
                  background: `linear-gradient(to right, rgb(16, 185, 129) 0%, rgb(16, 185, 129) ${
                    (manualHours / 40) * 100
                  }%, rgba(255, 255, 255, 0.08) ${(manualHours / 40) * 100}%, rgba(255, 255, 255, 0.08) 100%)`
                }}
              />
              <div className="flex justify-between text-[10px] text-gray-500 font-mono">
                <span>1 hour</span>
                <span>20 hrs</span>
                <span>40 hours</span>
              </div>
            </div>

            {/* Calculated values grid */}
            <div className="grid grid-cols-2 gap-4">
              
              <div className="bg-black/40 border border-white/5 rounded-xl p-4 flex flex-col justify-between">
                <span className="text-[10px] text-gray-500 block uppercase font-mono tracking-wider mb-1">
                  Time Saved / Yr
                </span>
                <div>
                  <span className="text-2xl sm:text-3xl font-mono font-extrabold text-white">
                    {hoursSavedPerYear}
                  </span>
                  <span className="text-xs text-gray-400 font-semibold ml-1">hrs</span>
                </div>
                <span className="text-[10px] text-gray-400 mt-2 block font-medium">
                  ⏳ equivalent to ~{extraWorkdaysCreated} work days saved
                </span>
              </div>

              <div className="bg-black/40 border border-white/5 rounded-xl p-4 flex flex-col justify-between">
                <span className="text-[10px] text-gray-500 block uppercase font-mono tracking-wider mb-1">
                  Value Reclaimed
                </span>
                <div>
                  <span className="text-2xl sm:text-3xl font-mono font-extrabold text-emerald-400">
                    ${moneyValueSaved}
                  </span>
                  <span className="text-xs text-gray-400 font-semibold ml-1">USD</span>
                </div>
                <span className="text-[10px] text-gray-400 mt-2 block font-medium">
                  💰 estimated at ${hourlyRateValue}/hr average rate
                </span>
              </div>

            </div>

            {/* Footer indicator */}
            <div className="mt-6 pt-4 border-t border-white/5 text-center">
              <p className="text-[11px] text-gray-400 italic">
                Calculations based on 52 weeks/year and average developer/creator task value.
              </p>
            </div>

          </motion.div>
        </div>

      </div>
    </section>
  );
}
