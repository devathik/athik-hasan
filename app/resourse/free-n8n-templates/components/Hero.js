"use client";

import { motion } from "framer-motion";
import { useCallback, useEffect, useState } from "react";
import { FaBolt, FaCheck, FaRobot, FaSlack, FaSpinner } from "react-icons/fa";
import { HiSparkles } from "react-icons/hi2";
import { CONFIG } from "../config";
import BeehiivEmbedForm from "./BeehiivEmbedForm";
import GoogleSheetsForm from "./GoogleSheetsForm";

export default function Hero() {
  // Workflow simulation state
  const [workflowStatus, setWorkflowStatus] = useState("idle"); // idle, trigger, ai, action, success
  const [logs, setLogs] = useState([]);

  const runWorkflow = useCallback(() => {
    if (workflowStatus !== "idle" && workflowStatus !== "success") return;
    
    setWorkflowStatus("trigger");
    setLogs(["[11:02:15] ⚡ Trigger activated: Webhook payload received"]);

    // Transition to AI Node
    setTimeout(() => {
      setWorkflowStatus("ai");
      setLogs(prev => [...prev, "[11:02:16] 🤖 Invoking Gemini AI Agent...", "[11:02:17] 🧠 Generating content workflow response..."]);
    }, 1800);

    // Transition to Action Node
    setTimeout(() => {
      setWorkflowStatus("action");
      setLogs(prev => [...prev, "[11:02:18] 📤 Formatting result and sending to Slack..."]);
    }, 3600);

    // Complete
    setTimeout(() => {
      setWorkflowStatus("success");
      setLogs(prev => [...prev, "[11:02:19] ✅ Execution completed successfully in 3.4s"]);
    }, 4800);
  }, [workflowStatus]);

  // Auto run workflow periodically if idle
  useEffect(() => {
    if (workflowStatus === "idle") {
      const timer = setTimeout(() => {
        runWorkflow();
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [workflowStatus, runWorkflow]);

  const handleResetWorkflow = () => {
    setWorkflowStatus("idle");
    setLogs([]);
  };

  return (
    <section className="relative py-12 md:py-20 overflow-hidden">
      {/* Background glow highlights */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 translate-x-1/2 translate-y-1/2 w-[400px] h-[400px] bg-indigo-600/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        
        {/* Left Column: Heading & Subscription Form */}
        <div className="lg:col-span-6 flex flex-col items-center lg:items-start text-center lg:text-left space-y-6">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center self-center lg:self-start gap-2 px-3 py-1 rounded-full border border-purple-500/30 bg-purple-500/10 text-xs font-semibold tracking-wider text-purple-300 uppercase"
          >
            <HiSparkles className="w-3.5 h-3.5 text-purple-400 animate-pulse" />
            <span>Free Templates Pack</span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1] text-white"
          >
            Get Free{" "}
            <span className="bg-gradient-to-r from-purple-400 via-indigo-300 to-emerald-400 bg-clip-text text-transparent">
              n8n AI Automation
            </span>{" "}
            Templates
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-gray-300 max-w-xl leading-relaxed mx-auto lg:mx-0"
          >
            Plz enter your email and 'Template' keyword in fields to get free n8n AI Automation Templates.
            You will be sent email very soon.But you can instantly access the templates after subscribing.
           </motion.p>

          {/* Form wrapper */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="w-full max-w-xl p-6 rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-xl shadow-2xl relative overflow-hidden"
          >
            {/* Subtle glow border inside the card */}
            <div className="absolute -inset-px bg-gradient-to-r from-purple-500/10 via-transparent to-emerald-500/10 rounded-2xl pointer-events-none" />

            {/* <BeehiivEmbedForm formId="c1dde7e8-e62b-4d86-acd6-526f26d89d79" /> */}
            <GoogleSheetsForm />
          </motion.div>

          {/* Social Proof */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex items-center justify-center lg:justify-start gap-4 py-2 w-full"
          >
            {/* Avatars */}
            <div className="flex -space-x-3">
              <div className="w-9 h-9 rounded-full border-2 border-gray-900 bg-gradient-to-br from-purple-500 to-indigo-500 flex items-center justify-center text-[10px] font-bold text-white">
                AH
              </div>
              <div className="w-9 h-9 rounded-full border-2 border-gray-900 bg-gradient-to-br from-pink-500 to-rose-500 flex items-center justify-center text-[10px] font-bold text-white">
                JD
              </div>
              <div className="w-9 h-9 rounded-full border-2 border-gray-900 bg-gradient-to-br from-emerald-400 to-teal-600 flex items-center justify-center text-[10px] font-bold text-white">
                SK
              </div>
              <div className="w-9 h-9 rounded-full border-2 border-gray-900 bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center text-[10px] font-bold text-white">
                ML
              </div>
            </div>
            <div>
              <div className="flex text-amber-400 text-xs">
                {"★".repeat(5)}
                <span className="text-gray-400 font-semibold ml-2">({CONFIG.socialProof.rating})</span>
              </div>
              <p className="text-xs text-gray-400">
                Join <span className="text-white font-semibold">{CONFIG.socialProof.subscribers}</span> creators automating their workflows.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Right Column: Live n8n Workflow Simulator */}
        <div className="lg:col-span-6">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative rounded-2xl border border-white/10 bg-black/60 shadow-2xl overflow-hidden aspect-[4/3] flex flex-col"
          >
            {/* Canvas Header */}
            <div className="flex items-center justify-between px-4 py-3 bg-white/[0.02] border-b border-white/10">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-red-500/70" />
                <span className="w-3 h-3 rounded-full bg-yellow-500/70" />
                <span className="w-3 h-3 rounded-full bg-green-500/70" />
                <span className="text-xs text-gray-400 font-mono ml-2">SparkProfit_AI_Workflow.json</span>
              </div>
              <div className="flex gap-2">
                {workflowStatus === "success" || workflowStatus === "idle" ? (
                  <button
                    onClick={runWorkflow}
                    className="px-2.5 py-1 rounded bg-purple-500/20 hover:bg-purple-500/30 text-purple-300 text-xs font-semibold border border-purple-500/40 flex items-center gap-1 transition active:scale-95"
                  >
                    <span>▶ Run Workflow</span>
                  </button>
                ) : (
                  <div className="px-2.5 py-1 rounded bg-amber-500/10 text-amber-400 text-xs font-semibold border border-amber-500/20 flex items-center gap-1.5">
                    <FaSpinner className="w-2.5 h-2.5 animate-spin" />
                    <span>Executing...</span>
                  </div>
                )}
                {workflowStatus !== "idle" && (
                  <button
                    onClick={handleResetWorkflow}
                    className="px-2.5 py-1 rounded bg-white/5 hover:bg-white/10 text-gray-400 text-xs border border-white/10 transition"
                  >
                    Reset
                  </button>
                )}
              </div>
            </div>

            {/* Dotted Grid Canvas */}
            <div 
              className="flex-grow relative p-6 overflow-hidden flex items-center justify-around"
              style={{
                backgroundImage: `radial-gradient(rgba(255, 255, 255, 0.08) 1px, transparent 1px)`,
                backgroundSize: "24px 24px"
              }}
            >
              {/* Connection Lines (SVG) */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none">
                {/* Connection Line 1 */}
                <path
                  d="M 120,135 L 260,135"
                  stroke={workflowStatus !== "idle" ? "rgba(147, 51, 234, 0.4)" : "rgba(255,255,255,0.08)"}
                  strokeWidth="2.5"
                  fill="none"
                />
                {workflowStatus !== "idle" && workflowStatus !== "success" && (
                  <motion.circle
                    r="4"
                    fill="#a855f7"
                    className="shadow-lg shadow-purple-500"
                    animate={{
                      cx: [120, 260],
                      cy: [135, 135]
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                  />
                )}

                {/* Connection Line 2 */}
                <path
                  d="M 340,135 L 480,135"
                  stroke={
                    workflowStatus === "action" || workflowStatus === "success"
                      ? "rgba(16, 185, 129, 0.4)"
                      : "rgba(255,255,255,0.08)"
                  }
                  strokeWidth="2.5"
                  fill="none"
                />
                {(workflowStatus === "action" || workflowStatus === "success") && workflowStatus !== "success" && (
                  <motion.circle
                    r="4"
                    fill="#10b981"
                    animate={{
                      cx: [340, 480],
                      cy: [135, 135]
                    }}
                    transition={{
                      duration: 1.2,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                  />
                )}
              </svg>

              {/* NODE 1: Trigger Node */}
              <div className="flex flex-col items-center z-10">
                <motion.div
                  animate={{
                    scale: workflowStatus === "trigger" ? 1.08 : 1,
                    borderColor: workflowStatus === "trigger" ? "rgba(147, 51, 234, 0.8)" : "rgba(255, 255, 255, 0.1)"
                  }}
                  className={`w-16 h-16 rounded-xl border flex items-center justify-center bg-black/80 shadow-lg relative group cursor-pointer ${
                    workflowStatus === "trigger" ? "shadow-purple-500/20" : ""
                  }`}
                  onClick={runWorkflow}
                >
                  <div className="absolute inset-px rounded-xl bg-gradient-to-b from-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition" />
                  <FaBolt className={`w-6 h-6 ${workflowStatus !== "idle" ? "text-purple-400" : "text-gray-500"}`} />
                  
                  {/* Status Indicator */}
                  {workflowStatus !== "idle" && (
                    <span className="absolute -top-1 -right-1 w-3 h-3 bg-purple-500 rounded-full ring-4 ring-black" />
                  )}
                </motion.div>
                <span className="text-[11px] font-mono mt-2 text-gray-400">Webhook Trigger</span>
              </div>

              {/* NODE 2: Gemini AI Node */}
              <div className="flex flex-col items-center z-10">
                <motion.div
                  animate={{
                    scale: workflowStatus === "ai" ? 1.08 : 1,
                    borderColor:
                      workflowStatus === "ai"
                        ? "rgba(147, 51, 234, 0.8)"
                        : workflowStatus === "action" || workflowStatus === "success"
                        ? "rgba(147, 51, 234, 0.4)"
                        : "rgba(255, 255, 255, 0.1)",
                    rotate: workflowStatus === "ai" ? [0, 5, -5, 0] : 0
                  }}
                  transition={{
                    rotate: workflowStatus === "ai" ? { repeat: Infinity, duration: 0.5 } : {}
                  }}
                  className={`w-20 h-20 rounded-2xl border flex items-center justify-center bg-black/80 shadow-lg relative group ${
                    workflowStatus === "ai" ? "shadow-purple-500/30 ring-2 ring-purple-500/50" : ""
                  }`}
                >
                  {/* Glowing background behind node when active */}
                  {workflowStatus === "ai" && (
                    <div className="absolute inset-0 bg-purple-500/10 rounded-2xl blur-lg animate-pulse" />
                  )}
                  <div className="absolute inset-px rounded-2xl bg-gradient-to-b from-purple-500/20 to-transparent pointer-events-none" />
                  <FaRobot className={`w-8 h-8 ${
                    workflowStatus === "ai" || workflowStatus === "action" || workflowStatus === "success"
                      ? "text-purple-400"
                      : "text-gray-500"
                  }`} />
                  
                  {/* Status Indicator */}
                  {(workflowStatus === "ai" || workflowStatus === "action" || workflowStatus === "success") && (
                    <span className={`absolute -top-1 -right-1 w-3.5 h-3.5 rounded-full ring-4 ring-black flex items-center justify-center ${
                      workflowStatus === "ai" ? "bg-amber-400" : "bg-emerald-500"
                    }`}>
                      {workflowStatus !== "ai" && <FaCheck className="w-1.5 h-1.5 text-white" />}
                    </span>
                  )}
                </motion.div>
                <span className="text-[11px] font-mono mt-2 text-gray-300 font-semibold flex items-center gap-1">
                  <span>Gemini AI Agent</span>
                </span>
              </div>

              {/* NODE 3: Destination Node */}
              <div className="flex flex-col items-center z-10">
                <motion.div
                  animate={{
                    scale: workflowStatus === "action" ? 1.08 : 1,
                    borderColor:
                      workflowStatus === "action"
                        ? "rgba(16, 185, 129, 0.8)"
                        : workflowStatus === "success"
                        ? "rgba(16, 185, 129, 0.4)"
                        : "rgba(255, 255, 255, 0.1)"
                  }}
                  className={`w-16 h-16 rounded-xl border flex items-center justify-center bg-black/80 shadow-lg relative group ${
                    workflowStatus === "action" ? "shadow-emerald-500/20" : ""
                  }`}
                >
                  <div className="absolute inset-px rounded-xl bg-gradient-to-b from-emerald-500/10 to-transparent opacity-0 group-hover:opacity-100 transition" />
                  <FaSlack className={`w-6 h-6 ${
                    workflowStatus === "action" || workflowStatus === "success"
                      ? "text-emerald-400"
                      : "text-gray-500"
                  }`} />
                  
                  {/* Status Indicator */}
                  {workflowStatus === "success" && (
                    <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-emerald-500 rounded-full ring-4 ring-black flex items-center justify-center text-white text-[8px]">
                      <FaCheck className="w-1.5 h-1.5" />
                    </span>
                  )}
                </motion.div>
                <span className="text-[11px] font-mono mt-2 text-gray-400">Slack Dispatcher</span>
              </div>
            </div>

            {/* Console Log Panel */}
            <div className="bg-black/90 p-3 font-mono text-[10px] border-t border-white/10 text-gray-400 min-h-[90px] flex flex-col justify-end">
              <div className="flex-grow overflow-y-auto space-y-1">
                {logs.length === 0 ? (
                  <div className="text-gray-600 italic">{"// Click \"Run Workflow\" or wait for trigger to simulate..."}</div>
                ) : (
                  logs.map((log, idx) => (
                    <div
                      key={idx}
                      className={
                        log.includes("✅")
                          ? "text-emerald-400 font-semibold"
                          : log.includes("🤖") || log.includes("🧠")
                          ? "text-purple-400"
                          : "text-gray-300"
                      }
                    >
                      {log}
                    </div>
                  ))
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
