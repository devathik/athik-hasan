"use client";
import { motion } from 'framer-motion';
import { useAnimateInView } from '@/app/hooks/useAnimateInView';
import { categoriesWithCounts } from '@/app/constants/blog';

const Categories = ({ selectedCategory = 'all', onSelect }) => {
  const { ref, controls } = useAnimateInView();

  return (
    <div className="bg-white/5 rounded-xl p-6" ref={ref}>
      <h3 className="text-xl font-bold text-white mb-4">
        Categories
      </h3>
      
      <div className="space-y-2">
        {categoriesWithCounts.map((category, index) => (
          <motion.div
            key={category.id}
            initial={{ opacity: 0, x: -20 }}
            animate={controls}
            transition={{ delay: index * 0.1 }}
          >
            <button
              onClick={() => onSelect?.(category.id)}
              className={`w-full flex items-center justify-between px-4 py-2 rounded-lg 
                transition-colors ${
                selectedCategory === category.id
                  ? 'bg-purple-500 text-white'
                  : 'text-gray-400 hover:bg-white/5 hover:text-white'
              }`}
            >
              <span>{category.name}</span>
              <span className="text-sm bg-white/10 px-2 py-1 rounded-full">
                {category.count}
              </span>
            </button>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Categories; 