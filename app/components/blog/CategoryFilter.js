"use client";
import { motion } from "framer-motion";

const categories = [
  { id: "all", name: "All" },
  { id: "react", name: "React" },
  { id: "nextjs", name: "Next.js" },
  { id: "typescript", name: "TypeScript" },
  { id: "database", name: "Database" },
  { id: "security", name: "Security" }
];

const CategoryFilter = ({ blogs, activeCategory, onCategoryChange, className = "" }) => {
  // Calculate count for each category
  const getCategoryCount = (categoryId) => {
    if (categoryId === "all") return blogs.length;
    return blogs.filter(blog => blog.category.toLowerCase() === categoryId).length;
  };

  return (
    <div className={`flex flex-wrap justify-center gap-3 ${className}`}>
      {categories.map((category) => (
        <motion.button
          key={category.id}
          onClick={() => onCategoryChange(category.id)}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-colors relative group
            ${activeCategory === category.id
              ? "text-white"
              : "text-white/60 hover:text-white"
            }`}
        >
          <span className="relative z-10">
            {category.name}
            <span className="ml-2 text-xs opacity-60">
              ({getCategoryCount(category.id)})
            </span>
          </span>
          {activeCategory === category.id && (
            <motion.div
              layoutId="activePill"
              className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full -z-0"
            />
          )}
        </motion.button>
      ))}
    </div>
  );
};

export default CategoryFilter; 