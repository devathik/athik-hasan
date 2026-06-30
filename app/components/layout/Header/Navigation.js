import Link from 'next/link';
import { motion } from 'framer-motion';
import { navigationLinks } from '@/app/constants/navigation';
import { dropdownTools } from '@/app/constants/toolsDropdown';
import { FiChevronDown } from "react-icons/fi";

const Navigation = ({ currentPath }) => {
  const filteredLinks = navigationLinks.filter((link) => {
    if (link.path === "/login") return false;
    return true;
  });

  return (
    <nav className="flex items-center gap-8">
      {filteredLinks.map((link) => {
        const isTools = link.path === "/tools";

        return (
          <div key={link.path} className="relative group py-2">
            <Link
              href={link.path}
              className="flex items-center gap-1 text-sm font-medium transition-colors duration-300"
            >
              <span className={`transition-colors duration-300 ${
                currentPath === link.path ? 'text-white' : 'text-white/60 group-hover:text-white'
              }`}>
                {link.label}
              </span>
              {isTools && (
                <FiChevronDown className="w-4 h-4 text-white/40 group-hover:text-white transition-transform duration-300 group-hover:rotate-180" />
              )}
            </Link>

            {currentPath === link.path && (
              <motion.div
                layoutId="navIndicator"
                className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-500"
                transition={{ type: "spring", bounce: 0.25, duration: 0.5 }}
              />
            )}

            {isTools && (
              /* Single Column Dropdown Menu */
              <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 w-[320px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 z-50">
                <div className="bg-slate-900/95 border border-white/10 rounded-2xl p-4 shadow-2xl backdrop-blur-xl flex flex-col gap-2 text-left">
                  {dropdownTools.map((tool) => {
                    const Icon = tool.icon;
                    return (
                      <Link
                        key={tool.name}
                        href={tool.link}
                        target={tool.isExternal ? "_blank" : "_self"}
                        rel={tool.isExternal ? "noopener noreferrer" : undefined}
                        className="flex gap-3 items-start hover:bg-white/5 p-2 rounded-xl transition duration-200 group/item"
                      >
                        <div className={`w-8 h-8 rounded-lg border flex items-center justify-center shrink-0 transition-colors duration-200 ${tool.colorClass}`}>
                          <Icon className="w-4 h-4" />
                        </div>
                        <div>
                          <h4 className={`text-xs font-semibold text-white transition-colors duration-200 ${tool.hoverTitleClass}`}>
                            {tool.name}
                          </h4>
                          <p className="text-[10px] text-gray-400 mt-0.5 leading-normal">
                            {tool.desc}
                          </p>
                        </div>
                      </Link>
                    );
                  })}
                  
                  <div className="border-t border-white/5 mt-1 pt-3 text-center">
                    <Link
                      href="/tools"
                      className="text-[10px] font-bold uppercase tracking-wider text-purple-400 hover:text-purple-300 transition inline-flex items-center gap-1"
                    >
                      <span>View All Tools</span>
                      <span>→</span>
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </div>
        );
      })}
    </nav>
  );
};

export default Navigation;