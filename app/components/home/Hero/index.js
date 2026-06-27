"use client";
import { images } from "@/app/constants/images";
import { motion } from "framer-motion";
import Image from "next/image";
import Container from "../../ui/Container";
import { CTAButtons } from "./CTAButtons";
import { SocialLinks } from "./SocialLinks";

const Hero = () => {
  return (
    <section className="relative py-16 overflow-hidden">
      <Container>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="order-2 lg:order-1"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center px-3 py-1 rounded-full bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 backdrop-blur-xl mb-6"
            >
              <span className="text-sm text-purple-300">
                Available for Work
              </span>
            </motion.div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="block"
              >
                Hi, I'm Athik 👋
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400"
              >
                Front-end Developer
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="text-lg font-black md:text-xl text-white mb-8 leading-relaxed max-w-xl"
              >
                MERN & Wordpress
              </motion.span>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-lg md:text-xl text-white/60 mb-8 leading-relaxed max-w-xl"
            >
              I build exceptional digital experiences that make people's lives
              simpler through innovative technology solutions.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <CTAButtons />
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
            >
              <SocialLinks />
            </motion.div>

            {/* Tech Stack */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="mt-7"
            >
              <p className="text-sm text-white/40 mb-4">Tech Stack</p>
              <div className="flex flex-wrap gap-4">
                {[
                  "React",
                  "Next.js",
                  "Express",
                  "MongoDB",
                  "PHP",
                  "WordPress",
                  "Theme Development",
                  "Customization",
                  "Elementor",
                ].map((tech, index) => (
                  <span
                    key={tech}
                    className="px-4 py-2 rounded-lg bg-white/5 text-white/60 text-sm border border-white/10 backdrop-blur-xl"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="order-1 lg:order-2 relative flex justify-center lg:justify-end px-4"
          >
            <div className="relative w-full max-w-[500px] aspect-square">
              {/* Background blur effect */}
              <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/20 to-pink-500/20 rounded-3xl blur-3xl -z-10" />

              {/* Image container */}
              <div className="relative w-full h-full">
                <Image
                  src={images.profile}
                  alt="Athik Profile Picture"
                  fill
                  priority
                  className="object-cover rounded-3xl"
                />
              </div>

              {/* Floating cards */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.9 }}
                className="absolute -left-8 top-1/4 p-4 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/10"
              >
                <div className="text-2xl font-bold">2+</div>
                <div className="text-sm text-white/60">Years Experience</div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1 }}
                className="absolute -right-8 bottom-1/4 p-4 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/10"
              >
                <div className="text-2xl font-bold">15+</div>
                <div className="text-sm text-white/60">Projects Completed</div>
              </motion.div>

              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-r from-purple-500/30 to-pink-500/30 rounded-full blur-xl" />
              <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-gradient-to-r from-pink-500/30 to-purple-500/30 rounded-full blur-xl" />
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
