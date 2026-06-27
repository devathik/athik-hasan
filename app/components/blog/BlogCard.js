"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const BlogCard = ({ blog }) => {
  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      className="group relative bg-white/5 hover:bg-white/10 backdrop-blur-xl rounded-2xl border border-white/10 overflow-hidden transition-colors"
    >
      {/* Blog Image */}
      <div className="relative h-56 md:h-64">
        <Image
          src={blog.image}
          alt={blog.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />
        
        {/* Category Badge */}
        <div className="absolute bottom-4 left-4">
          <span className="px-3 py-1 text-xs rounded-full bg-purple-500/10 text-purple-400 border border-purple-500/20 backdrop-blur-md">
            {blog.category}
          </span>
        </div>
      </div>

      {/* Blog Content */}
      <div className="p-6 space-y-4">
        <div className="flex items-center gap-4 text-sm text-white/60">
          <span>{blog.date}</span>
          <span>•</span>
          <span>{blog.readTime}</span>
        </div>

        <h3 className="text-xl font-semibold group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-500 group-hover:to-pink-500 transition-colors">
          {blog.title}
        </h3>

        <p className="text-white/60 text-sm line-clamp-2">
          {blog.description}
        </p>

        <div className="pt-4 flex items-center justify-between border-t border-white/10">
          <div className="flex items-center gap-3">
            <div className="relative w-8 h-8 rounded-full overflow-hidden">
              <Image
                src={blog.author.avatar}
                alt={blog.author.name}
                fill
                className="object-cover"
              />
            </div>
            <div className="text-sm text-white/60">{blog.author.name}</div>
          </div>

          <Link
            href={`/blog/${blog.slug}`}
            className="text-sm font-medium text-purple-400 hover:text-purple-300 transition-colors"
          >
            Read More →
          </Link>
        </div>
      </div>
    </motion.article>
  );
};

export default BlogCard; 