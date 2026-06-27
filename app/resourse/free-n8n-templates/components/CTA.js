"use client";

import { motion } from "framer-motion";
import GoogleSheetsForm from "./GoogleSheetsForm";
export default function CTA() {

  return (
    <section id="subscribe-section" className="py-16 md:py-24 border-t border-white/5 relative overflow-hidden">
      {/* Background glow highlights */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-gradient-to-r from-purple-500/10 to-indigo-500/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Main Glassmorphic Wrapper */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto rounded-3xl border border-white/10 bg-white/[0.01] backdrop-blur-2xl p-8 md:p-12 text-center relative overflow-hidden shadow-2xl"
      >
        {/* Glowing grid overlay inside */}
        <div 
          className="absolute inset-0 opacity-15 pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(rgba(255, 255, 255, 0.08) 1px, transparent 1px)`,
            backgroundSize: "20px 20px"
          }}
        />

        <div className="relative z-10 max-w-2xl mx-auto space-y-6">
          {/* Tag */}
          <span className="text-[10px] font-mono tracking-widest text-purple-400 uppercase font-semibold bg-purple-500/10 border border-purple-500/20 px-3 py-1 rounded-full inline-block">
            ⚡ Instant Download
          </span>

          {/* Headline */}
          <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Start Building Smarter{" "}
            <span className="bg-gradient-to-r from-purple-400 via-indigo-300 to-emerald-400 bg-clip-text text-transparent">
              AI Workflows
            </span>{" "}
            Today
          </h2>

          {/* Subheadline */}
          <p className="text-gray-300 text-sm md:text-base leading-relaxed">
            Subscribe now and instantly access the free n8n AI template collection. Get new plug-and-play workflows delivered directly to your inbox every single week.
          </p>

          {/* Form */}
          <div className="max-w-md mx-auto pt-4">
            {/* <BeehiivEmbedForm formId="c1dde7e8-e62b-4d86-acd6-526f26d89d79" /> */}
            <GoogleSheetsForm />
          </div>
        </div>
      </motion.div>
    </section>
  );
}
