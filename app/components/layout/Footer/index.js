"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { navigationLinks } from "@/app/constants/navigation";
import Container from "../../ui/Container";
import SocialLinks from "./SocialLinks";
import FooterSchema from "./Schema";

const Footer = () => {
  return (
    <footer className="relative mt-20">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-purple-500/5 to-black/20 -z-10" />
      {/* <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0))] -z-10" /> */}

      {/* Decorative Top Border */}
      <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <Container>
        {/* Main Content */}
        <div className="py-16 md:py-24">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
            {/* Brand Section */}
            <div className="space-y-6">
              <Link href="/">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-2 w-fit"
                >
                  <div
                    className="relative w-10 h-10 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 
                    flex items-center justify-center text-white font-bold text-xl"
                  >
                    🪐
                  </div>
                  <span
                    className="text-2xl font-bold bg-gradient-to-r from-white to-white/60 bg-clip-text 
                    text-transparent"
                  >
                    Athik
                  </span>
                </motion.div>
              </Link>
              <p className="text-white/60 max-w-md">
                MERN Stack Developer passionate about crafting exceptional
                digital experiences with modern technologies and innovative
                solutions.
              </p>
              <SocialLinks />
            </div>

            {/* Quick Links */}
            <div className="space-y-6">
              <h3 className="text-lg font-semibold text-white">Quick Links</h3>
              <ul className="space-y-4">
                {navigationLinks.map((link) => (
                  <motion.li
                    key={link.path}
                    whileHover={{ x: 6 }}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  >
                    <Link
                      href={link.path}
                      className="text-white/60 hover:text-white transition-colors duration-300 flex 
                        items-center gap-2 group"
                    >
                      <span
                        className="h-px w-4 bg-white/20 group-hover:w-6 group-hover:bg-white/60 
                        transition-all duration-300"
                      />
                      {link.label}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div className="space-y-6">
              <h3 className="text-lg font-semibold text-white">Services</h3>
              <ul className="space-y-4">
                {[
                  "Web Development",
                  "UI/UX Design",
                  "Mobile Development",
                  "API Integration",
                ].map((service) => (
                  <motion.li
                    key={service}
                    whileHover={{ x: 6 }}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  >
                    <span
                      className="text-white/60 hover:text-white transition-colors duration-300 flex 
                      items-center gap-2 group cursor-default"
                    >
                      <span
                        className="h-px w-4 bg-white/20 group-hover:w-6 group-hover:bg-white/60 
                        transition-all duration-300"
                      />
                      {service}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              <h3 className="text-lg font-semibold text-white">Contact</h3>
              <ul className="space-y-4">
                <motion.li
                  whileHover={{ x: 6 }}
                  className="text-white/60 flex items-center gap-3"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  <span>Chandpur, Bangladesh</span>
                </motion.li>
                <motion.li
                  whileHover={{ x: 6 }}
                  className="text-white/60 flex items-center gap-3"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  <a
                    href="mailto: athik@athikhasan.com"
                    className="hover:text-white transition-colors duration-300"
                  >
                    athik@athikhasan.com
                  </a>
                </motion.li>
                <motion.li
                  whileHover={{ x: 6 }}
                  className="text-white/60 flex items-center gap-3"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  <a
                    href="tel: +880 1824990037"
                    className="hover:text-white transition-colors duration-300"
                  >
                    +880 1824990037
                  </a>
                </motion.li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-white/60 text-sm">
              © {new Date().getFullYear()} Athik. All rights reserved.
            </p>
            <div className="flex items-center gap-6 text-sm">
              <Link
                href="/privacy"
                className="text-white/60 hover:text-white transition-colors duration-300"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-white/60 hover:text-white transition-colors duration-300"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </Container>

      <FooterSchema />
    </footer>
  );
};

export default Footer;
