"use client";
import { motion } from "framer-motion";
import Link from "next/link";

const CallToAction = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="flex gap-4"
    >
      <Link
        href="/contact"
        className="flex-1 py-4 rounded-2xl bg-gradient-to-r from-purple-500 to-red-400 
          text-white font-medium text-center relative overflow-hidden group"
      >
        <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
        <span className="relative">Get in Touch</span>
      </Link>
      <Link
        href="/projects"
        className="flex-1 py-4 rounded-2xl bg-white/5 text-white font-medium text-center 
          border border-white/10 hover:bg-white/10 transition-colors duration-300"
      >
        View Projects
      </Link>
    </motion.div>
  );
};

export default CallToAction; 