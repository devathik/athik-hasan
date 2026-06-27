"use client";
import { motion } from 'framer-motion';
import { socialLinks } from '@/app/constants/social';

const SocialLinks = () => {
  return (
    <div className="flex items-center gap-3">
      {socialLinks.map(({ name, icon: Icon, url, color }) => (
        <motion.a
          key={name}
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.1, y: -2 }}
          whileTap={{ scale: 0.9 }}
          className={`p-2.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 
            transition-colors duration-300 group`}
          aria-label={`Visit ${name}`}
        >
          <Icon className={`w-5 h-5 text-white/60 group-hover:text-${color}-400 
            transition-colors duration-300`} />
        </motion.a>
      ))}
    </div>
  );
};

export default SocialLinks; 