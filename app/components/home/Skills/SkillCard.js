import { motion } from 'framer-motion';
import Image from 'next/image';

const SkillCard = ({ title, icon, skills, color }) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="group relative p-6 bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10 
        hover:border-white/20 transition-all duration-300 h-full"
    >
      {/* Background Gradient */}
      <div 
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"
        style={{
          background: `radial-gradient(circle at center, ${color}15 0%, transparent 70%)`
        }}
      />

      {/* Decorative Elements */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500/0 via-purple-500/10 to-pink-500/0 
        rounded-2xl opacity-0 group-hover:opacity-100 blur transition duration-300" />

      {/* Content */}
      <div className="relative">
        {/* Icon Container */}
        <div className="w-12 h-12 mb-4 relative">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-500/10 
            rounded-xl blur-sm group-hover:blur-md transition-all duration-300" />
          <div className="relative w-full h-full flex items-center justify-center">
            <Image
              src={icon}
              alt={title}
              width={32}
              height={32}
              className="object-contain group-hover:scale-110 transition-transform duration-300"
            />
          </div>
        </div>

        {/* Title */}
        <h3 className="text-lg font-semibold text-white mb-4 group-hover:text-transparent 
          group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 
          group-hover:to-pink-400 transition-colors duration-300">
          {title}
        </h3>

        {/* Skills List */}
        <ul className="space-y-3">
          {skills.map((skill, index) => (
            <motion.li 
              key={skill.name}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="flex items-center text-sm text-white/60 group-hover:text-white/80 transition-colors duration-300"
            >
              <motion.div
                className="w-1.5 h-1.5 rounded-full mr-2 flex-shrink-0"
                style={{ backgroundColor: color }}
                whileHover={{ scale: 1.5 }}
              />
              <span className="truncate">{skill.name}</span>
              {skill.level && (
                <div className="ml-auto pl-2 text-xs opacity-60">
                  {skill.level}
                </div>
              )}
            </motion.li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};

export default SkillCard; 