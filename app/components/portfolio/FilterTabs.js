"use client";
import { motion } from 'framer-motion';

const FilterTabs = ({ categories, selectedCategory, onSelect }) => {
  return (
    <div className="flex flex-wrap justify-center gap-4 mb-12">
      {categories.map((category) => (
        <motion.button
          key={category.id}
          onClick={() => onSelect(category.id)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className={`px-6 py-2 rounded-full transition-colors ${
            selectedCategory === category.id
              ? 'bg-purple-500 text-white'
              : 'bg-white/5 text-gray-400 hover:text-white hover:bg-white/10'
          }`}
        >
          {category.label}
        </motion.button>
      ))}
    </div>
  );
};

export default FilterTabs; 