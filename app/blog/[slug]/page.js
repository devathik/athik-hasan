"use client"
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { notFound } from "next/navigation";
import { getBlogBySlug } from "@/app/utils/getData";
import { formatDate } from "@/app/utils/formatDate";

export default function BlogPost({ params }) {
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getBlogBySlug(params.slug).then((data) => {
      setBlog(data);
      setLoading(false);
    });
  }, [params.slug]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[50vh]">
        <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-purple-500"></div>
      </div>
    );
  }

  if (!blog) {
    notFound();
  }

  return (
    <article className="max-w-4xl mx-auto">
      <motion.div 
    initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
    className="space-y-12">
      {/* Blog Header */}
      <header className="mb-12">
        <div className="flex items-center gap-4 mb-6 text-sm text-white/60">
          <time dateTime={blog.date}>{formatDate(blog.date)}</time>
          <span>•</span>
          <span>{blog.readTime}</span>
          <span>•</span>
          <span className="text-purple-400">{blog.category}</span>
        </div>

        <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
          {blog.title}
        </h1>

        <p className="text-xl text-white/60 mb-8">
          {blog.description}
        </p>

        <div className="flex items-center gap-4">
          <div className="relative w-12 h-12 rounded-full overflow-hidden">
            <Image
              src={blog.author.avatar}
              alt={blog.author.name}
              fill
              className="object-cover"
            />
          </div>
          <div>
            <div className="font-medium">{blog.author.name}</div>
            <div className="text-sm text-white/60">{blog.author.role}</div>
          </div>
        </div>
      </header>

      {/* Featured Image */}
      <div className="relative aspect-[16/9] rounded-2xl overflow-hidden mb-12">
        <Image
          src={blog.image}
          alt={blog.title}
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Blog Content */}
      <div className="prose prose-invert prose-lg max-w-none">
        {/* Main Content */}
        <div className="mb-8">
          {blog.content}
        </div>

        {/* Sections */}
        {blog.sections && blog.sections.map((section, index) => (
          <section key={index} className="mb-8">
            <h2 className="text-2xl font-bold mb-4">{section.title}</h2>
            <p className="text-white/80">{section.content}</p>
          </section>
        ))}
      </div>

      {/* Share and Navigation */}
      <footer className="mt-12 pt-8 border-t border-white/10">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <span className="text-white/60">Share this article:</span>
            <div className="flex gap-2">
              <button className="p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </button>
              <button className="p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </footer>
      </motion.div>
    </article>
  );
} 