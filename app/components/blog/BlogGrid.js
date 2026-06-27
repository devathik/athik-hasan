"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import BlogCard from "./BlogCard";
import CategoryFilter from "./CategoryFilter";

export default function BlogGrid({ blogs }) {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredBlogs = activeCategory === "all"
    ? blogs.slice(1) // Remove featured blog
    : blogs.filter(blog => blog.category.toLowerCase() === activeCategory);

  return (
    <motion.div 
    initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
    className="space-y-12">
      {/* Category Filter */}
      <div className="sticky top-0 z-10 bg-gradient-to-b from-black/80 to-black/0 backdrop-blur-xl py-4">
        <CategoryFilter 
          blogs={blogs}
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
        />
      </div>

      {/* Blog Grid */}
      <motion.div 
        layout
        className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        <AnimatePresence mode="popLayout">
          {filteredBlogs.map((blog) => (
            <BlogCard key={blog.id} blog={blog} />
          ))}
        </AnimatePresence>

        {filteredBlogs.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="col-span-full text-center py-20"
          >
            <p className="text-white/60">No articles found in this category.</p>
          </motion.div>
        )}
      </motion.div>
    </motion.div>
  );
} 