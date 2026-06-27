"use client"
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import FeaturedBlog from "@/app/components/blog/FeaturedBlog";
import BlogGrid from "@/app/components/blog/BlogGrid";
import { getBlogs } from "@/app/utils/getData";

const BlogPage = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    getBlogs().then(setBlogs);
  }, []);

  return (
    <div className="space-y-12">
      {/* Header */}
      <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-4"
      >
        <h1 className="text-3xl md:text-6xl font-bold">
          Latest
          <span className="bg-gradient-to-r from-purple-500 via-red-400 to-pink-400 text-transparent bg-clip-text"> Articles</span>
        </h1>
        <p className="text-white/60">
          Discover insights and tutorials about web development for better learning.
        </p>
      </motion.div>

      {/* Featured Blog */}
      {blogs.length > 0 && <FeaturedBlog blog={blogs[0]} />}

      {/* Blog Grid */}
      <BlogGrid blogs={blogs} />
    </div>
  );
};

export default BlogPage; 