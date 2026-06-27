import Link from 'next/link';
import { motion } from 'framer-motion';
import { navigationLinks } from '@/app/constants/navigation';

const Navigation = ({ currentPath }) => {
  return (
    <nav className="flex items-center gap-8">
      {navigationLinks.map((link) => (
        <Link
          key={link.path}
          href={link.path}
          className="relative group py-2"
        >
          <span className={`text-sm font-medium transition-colors duration-300 ${
            currentPath === link.path ? 'text-white' : 'text-white/60 group-hover:text-white'
          }`}>
            {link.label}
          </span>
          {currentPath === link.path && (
            <motion.div
              layoutId="navIndicator"
              className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-500"
              transition={{ type: "spring", bounce: 0.25, duration: 0.5 }}
            />
          )}
          <div className="absolute inset-0 -z-10 bg-white/0 group-hover:bg-white/5 rounded-lg transition-colors duration-300" />
        </Link>
      ))}
    </nav>
  );
};

export default Navigation; 