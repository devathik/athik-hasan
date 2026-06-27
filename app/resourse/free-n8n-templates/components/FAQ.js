"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronDown, FaQuestionCircle } from "react-icons/fa";

const FAQS = [
  {
    question: "What is n8n?",
    answer: "n8n is a powerful, node-based workflow automation tool that acts as a visual conductor for your apps and AI models. Unlike older tools, it allows you to build multi-step agents, branching logic, and custom JavaScript operations directly on the canvas, making it the perfect platform for advanced AI automations."
  },
  {
    question: "Are the templates beginner friendly?",
    answer: "Yes! Every single template is designed with a plug-and-play approach. They contain comments inside the workflow canvas explaining exactly what to configure. You don't need any programming skills to run these, just an n8n workspace (cloud or self-hosted) and your respective API keys."
  },
  {
    question: "How do I import the workflows?",
    answer: "It takes less than 10 seconds. Once you subscribe, you will get access to the n8n JSON templates. Simply copy the JSON string of your chosen workflow, open a blank canvas in n8n, and paste it (Ctrl+V or Cmd+V). The nodes, connections, and layouts will instantly populate."
  },
  {
    question: "Are the templates free?",
    answer: "Yes, they are 100% free! We provide these templates to subscribers of the SparkProfit AI Newsletter. You get direct access immediately upon signing up, and you can unsubscribe at any point if the newsletter isn't a fit for you."
  }
];

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleIndex = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-16 md:py-24 border-t border-white/5 relative">
      <div className="absolute top-1/3 left-1/4 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-purple-600/5 rounded-full blur-[100px] pointer-events-none" />

      {/* Title */}
      <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
        <span className="text-xs font-mono tracking-widest text-purple-400 uppercase font-semibold">
          Got Questions?
        </span>
        <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
          Frequently Asked Questions
        </h2>
        <p className="text-gray-400 text-sm md:text-base leading-relaxed">
          Everything you need to know about setting up and running your n8n AI workflows.
        </p>
      </div>

      {/* Accordion Container */}
      <div className="max-w-3xl mx-auto space-y-4 relative z-10">
        {FAQS.map((faq, idx) => {
          const isOpen = activeIndex === idx;

          return (
            <div
              key={idx}
              className="rounded-2xl border border-white/10 bg-white/[0.01] hover:bg-white/[0.03] hover:border-purple-500/20 transition-all duration-300 overflow-hidden"
            >
              {/* Question header */}
              <button
                onClick={() => toggleIndex(idx)}
                className="w-full flex items-center justify-between p-5 text-left text-white focus:outline-none transition group"
              >
                <div className="flex gap-3.5 items-center pr-4">
                  <FaQuestionCircle className="w-4 h-4 text-purple-400/80 group-hover:text-purple-300 transition duration-300" />
                  <span className="text-sm md:text-base font-bold tracking-tight group-hover:text-purple-100 transition duration-200">
                    {faq.question}
                  </span>
                </div>
                <motion.div
                  animate={{ rotate: isOpen ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="p-1 rounded bg-white/5 border border-white/10 text-gray-400 flex items-center justify-center shrink-0"
                >
                  <FaChevronDown className="w-3 h-3" />
                </motion.div>
              </button>

              {/* Answer content */}
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-5 pb-5 pt-1 text-gray-400 text-xs md:text-sm leading-relaxed border-t border-white/5 bg-black/10">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </section>
  );
}
