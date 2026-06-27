"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const BlogSidebar = () => {
  return (
    <aside className="space-y-8">
      {/* Author Profile */}
      <AuthorProfile />

      {/* Newsletter */}
      <Newsletter />
    </aside>
  );
};

const AuthorProfile = () => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    className="bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 p-6"
  >
    <div className="flex items-center gap-4 mb-4">
      <div className="relative w-16 h-16 rounded-full overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=80&h=80&auto=format&fit=crop"
          alt="Md.Athik Hassan"
          fill
          className="object-cover"
        />
      </div>
      <div>
        <h3 className="font-medium">Md.Athik Hassan</h3>
        <p className="text-sm text-white/60">MERN Stack Developer</p>
      </div>
    </div>
    <p className="text-sm text-white/60 mb-4">
      Sharing my journey and insights in web development, focusing on React,
      Next.js, and modern web technologies.
    </p>
    <div className="flex gap-3">
      <a
        href="https://github.com/MdAthikHasan"
        target="_blank"
        rel="noopener noreferrer"
        className="p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
      >
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
        </svg>
      </a>
    </div>
  </motion.div>
);

const Newsletter = () => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 backdrop-blur-xl rounded-2xl border border-white/10 p-6"
  >
    <h3 className="text-lg font-medium mb-2">Subscribe to Newsletter</h3>
    <p className="text-sm text-white/60 mb-4">
      Get the latest posts delivered right to your inbox.
    </p>
    <form className="space-y-3">
      <input
        type="email"
        placeholder="Enter your email"
        className="w-full px-4 py-2 bg-black/20 rounded-lg border border-white/10 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 outline-none transition-colors"
      />
      <button
        type="submit"
        className="w-full px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg font-medium hover:opacity-90 transition-opacity"
      >
        Subscribe
      </button>
    </form>
  </motion.div>
);

export default BlogSidebar;
