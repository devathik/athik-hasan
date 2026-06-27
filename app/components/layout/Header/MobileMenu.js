import { navigationLinks } from "@/app/constants/navigation";
import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

const overlayVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.25 } },
  exit: { opacity: 0, transition: { duration: 0.25 } },
};

const panelVariants = {
  hidden: { x: "-100%" },
  visible: {
    x: "0%",
    transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
  },
  exit: {
    x: "-100%",
    transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 12 },
  visible: (index) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: index * 0.07,
      duration: 0.4,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

const MobileMenu = ({ currentPath, onClose }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  if (!mounted) return null;

  return createPortal(
    <motion.div
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={overlayVariants}
      className="fixed inset-0 z-50 md:hidden"
      onClick={onClose}
    >
      {/* Semi-transparent backdrop */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" aria-hidden="true" />

      {/* Sliding panel from left */}
      <motion.aside
        initial="hidden"
        animate="visible"
        exit="exit"
        variants={panelVariants}
        className="absolute left-0 top-0 bottom-0 w-4/5 max-w-sm bg-gradient-to-b from-gray-900/95 to-black/95 
          backdrop-blur-xl p-6 flex flex-col gap-6 overflow-y-auto z-10"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div
              className="w-10 h-10 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 
              flex items-center justify-center text-white font-bold text-lg"
            >
              🪐
            </div>
            <span className="text-lg font-semibold text-white">Menu</span>
          </div>

          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={onClose}
            aria-label="Close menu"
            className="p-2 rounded-md bg-white/5 hover:bg-white/10 transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              className="w-5 h-5 text-white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </motion.button>
        </div>

        <nav className="mt-6 flex flex-col items-start gap-4">
          {navigationLinks.map((link, index) => (
            <motion.div key={link.path} custom={index} variants={itemVariants}>
              <Link
                href={link.path}
                onClick={onClose}
                className={`text-lg font-medium transition-colors duration-200 hover:text-purple-400 ${
                  currentPath === link.path
                    ? "text-purple-400"
                    : "text-white/80"
                }`}
              >
                {link.label}
              </Link>
            </motion.div>
          ))}
        </nav>

        <div className="mt-auto">{/* <ThemeToggle /> */}</div>

        {/* Background Patterns */}
        <div className="absolute inset-0 -z-10 pointer-events-none overflow-hidden">
          <div className="absolute top-1/4 left-0 w-96 h-96 bg-purple-500/20 rounded-full blur-[120px]" />
          <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-pink-500/20 rounded-full blur-[120px]" />
        </div>
      </motion.aside>
    </motion.div>,
    document.body
  );
};

export default MobileMenu;
