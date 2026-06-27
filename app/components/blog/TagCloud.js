"use client";
import { motion } from "framer-motion";
import { getAllTags } from "@/app/utils/blogUtils";

const TagCloud = ({ blogs, activeTag, onTagChange, className = "" }) => {
  const tags = getAllTags(blogs);

  return (
    <div className={`flex flex-wrap gap-2 ${className}`}>
      {tags.map((tag) => (
        <motion.button
          key={tag.id}
          onClick={() => onTagChange(tag.id)}
          className={`px-3 py-1 text-sm rounded-full transition-colors
            ${activeTag === tag.id
              ? "bg-purple-500 text-white"
              : "bg-white/5 text-white/60 hover:bg-white/10 hover:text-white"
            }`}
        >
          {tag.name}
          <span className="ml-1 text-xs opacity-60">({tag.count})</span>
        </motion.button>
      ))}
    </div>
  );
};

export default TagCloud; 