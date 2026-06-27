"use client";
import { motion } from 'framer-motion';
import Link from 'next/link';

export const CTAButtons = () => {
  return (
    <div className="flex flex-wrap gap-4 mb-8">
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <Link
          href="/contact"
          className="inline-flex items-center px-6 py-3 rounded-xl bg-gradient-to-r 
            from-purple-500 to-pink-500 text-white font-medium transition-all duration-300
            hover:shadow-lg hover:shadow-purple-500/25"
        >
          Hire Me
          <svg
            className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M13 7l5 5m0 0l-5 5m5-5H6"
            />
          </svg>
        </Link>
      </motion.div>

      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <a
          href="https://docs.google.com/document/d/1YtwU4UEfWDPJr4FtslwC5oWeYZHQbWw5P6BKV4Qi_Ls/export?format=pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-6 py-3 rounded-xl bg-white/10 
            hover:bg-white/20 text-white font-medium transition-all duration-300
            border border-white/10 backdrop-blur-xl"
        >
          Download CV
          <svg
            className="ml-2 w-5 h-5 transition-transform group-hover:translate-y-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
            />
          </svg>
        </a>
      </motion.div>
    </div>
  );
}; 