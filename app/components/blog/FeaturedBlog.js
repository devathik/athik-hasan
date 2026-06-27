"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const FeaturedBlog = ({ blog }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-white/10 backdrop-blur-xl"
    >
      <div className="grid lg:grid-cols-2 gap-8 p-8">
        {/* Image */}
        <div className="relative h-[300px] lg:h-[400px] rounded-2xl overflow-hidden">
          <Image
            src={blog.image}
            alt={blog.title}
            fill
            className="object-cover transition-transform duration-500 hover:scale-110"
          />
        </div>

        {/* Content */}
        <div className="flex flex-col justify-center space-y-6">
          <div className="flex items-center gap-4">
            <span className="px-3 py-1 text-sm rounded-full bg-purple-500/10 text-purple-400 border border-purple-500/20">
              {blog.category}
            </span>
            <span className="text-white/60">{blog.date}</span>
          </div>

          <h2 className="text-3xl lg:text-4xl font-bold">
            {blog.title}
          </h2>

          <p className="text-white/60 text-lg leading-relaxed">
            {blog.description}
          </p>

          <div className="flex items-center gap-6">
            <div className="flex items-center gap-3">
              <div className="relative w-10 h-10 rounded-full overflow-hidden">
                <Image
                  src={blog.author.avatar}
                  alt={blog.author.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <div className="text-sm font-medium">{blog.author.name}</div>
                <div className="text-sm text-white/60">{blog.author.role}</div>
              </div>
            </div>
            <span className="text-white/60">•</span>
            <span className="text-white/60">{blog.readTime}</span>
          </div>

          <Link
            href={`/blog/${blog.slug}`}
            className="inline-flex items-center px-6 py-3 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 
              text-white font-medium relative overflow-hidden group w-fit"
          >
            <span className="relative z-10">Read Article</span>
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default FeaturedBlog; 