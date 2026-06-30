"use client";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState, useRef } from "react";
import { FiUser, FiGrid, FiSettings, FiLogOut } from "react-icons/fi";
import MobileMenu from "./MobileMenu";
import Navigation from "./Navigation";
// import ThemeToggle from './ThemeToggle';

const Header = ({ isScrolled }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [user, setUser] = useState(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const pathname = usePathname();
  const dropdownRef = useRef(null);

  // Sync user profile from local storage
  useEffect(() => {
    const checkUser = () => {
      const stored = localStorage.getItem("google_user_profile");
      if (stored) {
        setUser(JSON.parse(stored));
      } else {
        setUser(null);
      }
    };
    checkUser();
    window.addEventListener("storage", checkUser);
    window.addEventListener("local-user-change", checkUser);
    return () => {
      window.removeEventListener("storage", checkUser);
      window.removeEventListener("local-user-change", checkUser);
    };
  }, [pathname]);

  // Click outside listener to close dropdown
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleSignOut = () => {
    localStorage.removeItem("google_user_profile");
    setUser(null);
    setIsDropdownOpen(false);
    window.dispatchEvent(new Event("local-user-change"));
  };

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  // Close menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-gray-900/95 backdrop-blur-xl border-b border-white/10 py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2"
            >
              <div
                className="relative w-10 h-10 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 
                flex items-center justify-center text-white font-bold text-xl"
              >
                🪐
              </div>
              <span className="text-xl font-bold text-white hidden sm:block">
                Portfolio
              </span>
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            <Navigation currentPath={pathname} />
            {/* <div className="w-px h-6 bg-white/10" />  */}
            {/* <ThemeToggle /> */}

            {user ? (
              <div className="relative" ref={dropdownRef}>
                <button
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="flex items-center justify-center rounded-full border-2 border-amber-500 focus:outline-none overflow-hidden transition hover:scale-105"
                >
                  <img
                    src={user.picture}
                    alt={user.name}
                    className="w-9 h-9 object-cover rounded-full"
                  />
                </button>

                {isDropdownOpen && (
                  <div className="absolute right-0 mt-3 w-64 rounded-2xl border border-white/10 bg-slate-900/95 backdrop-blur-xl p-4 shadow-2xl z-50 text-left">
                    <div className="px-2 py-1.5">
                      <p className="text-sm font-semibold text-white truncate">{user.name}</p>
                      <p className="text-xs text-gray-400 truncate mt-0.5">{user.email}</p>
                    </div>
                    <div className="my-2 border-t border-white/10" />
                    <div className="space-y-1">
                      <Link
                        href="/about"
                        onClick={() => setIsDropdownOpen(false)}
                        className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm text-gray-300 hover:text-white hover:bg-white/5 transition"
                      >
                        <FiUser className="w-4 h-4 text-purple-400" />
                        <span>View Profile</span>
                      </Link>
                      <Link
                        href="/dashboard"
                        onClick={() => setIsDropdownOpen(false)}
                        className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm text-gray-300 hover:text-white hover:bg-white/5 transition"
                      >
                        <FiGrid className="w-4 h-4 text-purple-400" />
                        <span>Dashboard</span>
                      </Link>
                      <Link
                        href="/dashboard"
                        onClick={() => setIsDropdownOpen(false)}
                        className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm text-gray-300 hover:text-white hover:bg-white/5 transition"
                      >
                        <FiSettings className="w-4 h-4 text-purple-400" />
                        <span>Settings</span>
                      </Link>
                      <button
                        type="button"
                        onClick={handleSignOut}
                        className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm text-red-400 hover:text-red-300 hover:bg-red-500/10 transition"
                      >
                        <FiLogOut className="w-4 h-4" />
                        <span>Logout</span>
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <Link
                href="/login"
                className="px-4 py-2 rounded-xl text-sm font-semibold bg-gradient-to-r from-purple-500 to-pink-500 hover:brightness-110 text-white shadow-lg shadow-purple-500/25 transition duration-300"
              >
                Login
              </Link>
            )}
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden relative p-2 rounded-lg bg-white/5 hover:bg-white/10 
              transition-colors duration-300"
            aria-label="Toggle menu"
          >
            <div className="w-6 h-6 flex flex-col justify-center items-center gap-1.5">
              <span className="w-5 h-0.5 bg-white rounded-full" />
              <span className="w-5 h-0.5 bg-white rounded-full" />
              <span className="w-5 h-0.5 bg-white rounded-full" />
            </div>
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <MobileMenu
            currentPath={pathname}
            onClose={() => setIsMenuOpen(false)}
            user={user}
            handleSignOut={handleSignOut}
          />
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
