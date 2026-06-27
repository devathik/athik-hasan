"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaBolt, FaRobot, FaCheck, FaCopy, FaCode, FaExternalLinkAlt } from "react-icons/fa";
import { 
  HiSparkles, 
  HiOutlineChatBubbleLeftRight, 
  HiOutlineMagnifyingGlass, 
  HiOutlineClock, 
  HiOutlineCloudArrowDown, 
  HiOutlineChartBar 
} from "react-icons/hi2";
import { CONFIG } from "../config";

const ICONS = {
  "ai-content": HiSparkles,
  "social-workflows": HiOutlineChatBubbleLeftRight,
  "research-systems": HiOutlineMagnifyingGlass,
  "creator-productivity": HiOutlineClock,
  "n8n-plug-play": HiOutlineCloudArrowDown,
  "ai-growth-systems": HiOutlineChartBar,
};

const MOCK_SCHEMAS = {
  "ai-content": `{
  "meta": { "instanceId": "sparkprofit_ai_content" },
  "nodes": [
    { "parameters": {}, "id": "1", "name": "Webhook Trigger", "type": "n8n-nodes-base.webhook" },
    { "parameters": { "prompt": "Write a draft about..." }, "id": "2", "name": "Gemini AI Node", "type": "n8n-nodes-base.googleGemini" }
  ]
}`,
  "social-workflows": `{
  "meta": { "instanceId": "sparkprofit_social_media" },
  "nodes": [
    { "parameters": { "interval": 1 }, "id": "1", "name": "Schedule Trigger", "type": "n8n-nodes-base.cron" },
    { "parameters": { "prompt": "Draft a LinkedIn thread..." }, "id": "2", "name": "Gemini AI Agent", "type": "n8n-nodes-base.googleGemini" }
  ]
}`,
  "research-systems": `{
  "meta": { "instanceId": "sparkprofit_research" },
  "nodes": [
    { "parameters": {}, "id": "1", "name": "URL Trigger", "type": "n8n-nodes-base.webhook" },
    { "parameters": {}, "id": "2", "name": "HTTP Request Scraper", "type": "n8n-nodes-base.httpRequest" }
  ]
}`,
  "creator-productivity": `{
  "meta": { "instanceId": "sparkprofit_creator_prod" },
  "nodes": [
    { "parameters": {}, "id": "1", "name": "On File Upload", "type": "n8n-nodes-base.webhook" },
    { "parameters": {}, "id": "2", "name": "Whisper Speech to Text", "type": "n8n-nodes-base.openAiWhisper" }
  ]
}`,
  "n8n-plug-play": `{
  "meta": { "instanceId": "sparkprofit_growth_scrape" },
  "nodes": [
    { "parameters": {}, "id": "1", "name": "Lead Webhook", "type": "n8n-nodes-base.webhook" },
    { "parameters": {}, "id": "2", "name": "Apollo Scraper", "type": "n8n-nodes-base.httpRequest" }
  ]
}`,
  "ai-growth-systems": `{
  "meta": { "instanceId": "sparkprofit_seo_monitor" },
  "nodes": [
    { "parameters": {}, "id": "1", "name": "Daily Check Cron", "type": "n8n-nodes-base.cron" },
    { "parameters": {}, "id": "2", "name": "Google Search Console API", "type": "n8n-nodes-base.googleSearchConsole" }
  ]
}`
};

export default function Features() {
  const [copiedId, setCopiedId] = useState(null);
  const [selectedTemplate, setSelectedTemplate] = useState(null);

  const handleCopy = (id, e) => {
    e.stopPropagation();
    const schema = MOCK_SCHEMAS[id] || `{"nodes": [], "connections": {}}`;
    navigator.clipboard.writeText(schema);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <section id="templates-grid" className="py-16 md:py-24 border-t border-white/5 relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-900/5 rounded-full blur-[160px] pointer-events-none" />

      {/* Section Title */}
      <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
        <span className="text-xs font-mono tracking-widest text-purple-400 uppercase font-semibold">
          AI Automations Catalog
        </span>
        <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
          Browse Our Plug & Play Templates
        </h2>
        <p className="text-gray-400 text-sm md:text-base leading-relaxed">
          Unlock instant access to 6 pre-built, production-ready n8n workflows designed to scale content, growth, and research.
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
        {CONFIG.templates.map((template, index) => {
          const IconComponent = ICONS[template.id] || FaRobot;
          const isCopied = copiedId === template.id;

          return (
            <motion.div
              key={template.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              onClick={() => setSelectedTemplate(template)}
              className="group p-6 rounded-2xl border border-white/10 bg-white/[0.02] hover:bg-white/[0.04] hover:border-purple-500/30 transition-all duration-300 flex flex-col justify-between shadow-xl cursor-pointer relative overflow-hidden"
            >
              {/* Highlight background glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div>
                {/* Card Header Info */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 group-hover:scale-110 transition duration-300">
                    <IconComponent className="w-5 h-5" />
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-mono bg-white/5 border border-white/10 text-gray-400 px-2 py-0.5 rounded">
                      {template.nodesCount} Nodes
                    </span>
                    <span className={`text-[10px] font-mono px-2 py-0.5 rounded font-semibold ${
                      template.difficulty === "Beginner" 
                        ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20"
                        : template.difficulty === "Intermediate"
                        ? "bg-amber-500/10 text-amber-400 border border-amber-500/20"
                        : "bg-red-500/10 text-red-400 border border-red-500/20"
                    }`}>
                      {template.difficulty}
                    </span>
                  </div>
                </div>

                {/* Card Content */}
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-purple-300 transition duration-200">
                  {template.name}
                </h3>
                <p className="text-gray-400 text-xs leading-relaxed mb-6">
                  {template.description}
                </p>
              </div>

              {/* Actions */}
              <div className="flex gap-2.5 mt-auto">
                <button
                  onClick={(e) => handleCopy(template.id, e)}
                  className={`flex-grow py-2 rounded-xl text-xs font-semibold flex items-center justify-center gap-1.5 transition-all duration-300 ${
                    isCopied 
                      ? "bg-emerald-500/20 text-emerald-400 border border-emerald-500/30" 
                      : "bg-white/5 text-gray-300 border border-white/10 hover:bg-white/10 hover:text-white"
                  }`}
                >
                  {isCopied ? (
                    <>
                      <FaCheck className="w-3 h-3 animate-ping" />
                      <span>Copied Schema!</span>
                    </>
                  ) : (
                    <>
                      <FaCopy className="w-3 h-3 text-gray-500" />
                      <span>Copy n8n JSON</span>
                    </>
                  )}
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedTemplate(template);
                  }}
                  className="p-2 rounded-xl bg-white/5 text-gray-400 border border-white/10 hover:bg-white/10 hover:text-white transition duration-200"
                  title="Preview structure"
                >
                  <FaCode className="w-3.5 h-3.5" />
                </button>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Detailed Modal Overlay (Framer Motion) */}
      <AnimatePresence>
        {selectedTemplate && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Modal backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedTemplate(null)}
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            />

            {/* Modal Box */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-xl rounded-2xl border border-white/10 bg-gray-950 p-6 shadow-2xl overflow-hidden z-10"
            >
              {/* Inside gradient */}
              <div className="absolute top-0 right-0 w-48 h-48 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />

              {/* Title & Badge */}
              <div className="flex justify-between items-start mb-4">
                <div>
                  <span className="text-[10px] font-mono text-purple-400 uppercase tracking-widest font-semibold block mb-1">
                    Workflow Definition
                  </span>
                  <h3 className="text-xl font-bold text-white">{selectedTemplate.name}</h3>
                </div>
                <button
                  onClick={() => setSelectedTemplate(null)}
                  className="text-gray-500 hover:text-white transition text-lg"
                >
                  &times;
                </button>
              </div>

              {/* Description & specs */}
              <p className="text-gray-300 text-xs mb-4 leading-relaxed">
                {selectedTemplate.description}
              </p>
              
              <div className="grid grid-cols-3 gap-3 mb-6">
                <div className="bg-white/5 border border-white/10 rounded-xl p-2.5 text-center">
                  <span className="text-[10px] text-gray-500 block">Nodes Count</span>
                  <span className="text-sm font-bold text-white">{selectedTemplate.nodesCount}</span>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-xl p-2.5 text-center">
                  <span className="text-[10px] text-gray-500 block">Difficulty</span>
                  <span className="text-sm font-bold text-purple-300">{selectedTemplate.difficulty}</span>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-xl p-2.5 text-center">
                  <span className="text-[10px] text-gray-500 block">n8n Compatibility</span>
                  <span className="text-sm font-bold text-emerald-400">1.0+ (JSON)</span>
                </div>
              </div>

              {/* Code Sandbox Mock */}
              <div className="mb-6">
                <div className="flex justify-between items-center bg-black/55 px-3 py-1.5 rounded-t-lg border-t border-x border-white/10">
                  <span className="text-[10px] font-mono text-gray-500">n8n-workflow-code.json</span>
                  <button
                    onClick={(e) => handleCopy(selectedTemplate.id, e)}
                    className="text-[10px] text-purple-400 hover:text-purple-300 font-semibold flex items-center gap-1"
                  >
                    <FaCopy className="w-2.5 h-2.5" />
                    <span>{copiedId === selectedTemplate.id ? "Copied!" : "Copy Code"}</span>
                  </button>
                </div>
                <pre className="bg-black/90 p-4 rounded-b-lg border border-white/10 font-mono text-[10px] text-purple-300 overflow-x-auto max-h-[160px] scrollbar-thin">
                  {MOCK_SCHEMAS[selectedTemplate.id]}
                </pre>
              </div>

              <div className="flex gap-3">
                <button
                  onClick={() => setSelectedTemplate(null)}
                  className="flex-grow py-3 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-semibold text-xs transition duration-200 shadow-lg shadow-purple-500/20"
                >
                  Close Preview
                </button>
                <a
                  href="#subscribe-section"
                  onClick={() => setSelectedTemplate(null)}
                  className="px-4 py-3 rounded-xl bg-white/5 text-gray-300 border border-white/10 hover:bg-white/10 hover:text-white transition duration-200 text-xs font-semibold flex items-center justify-center gap-1.5"
                >
                  <span>Unlock Collection</span>
                  <FaExternalLinkAlt className="w-2.5 h-2.5" />
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
