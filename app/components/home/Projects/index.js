"use client";
import { projects } from "@/app/constants/projects";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import Container from "../../ui/Container";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  const [hoveredId, setHoveredId] = useState(null);
  const [filter, setFilter] = useState("All"); // default category

  // Filtered projects
  const filteredProjects = projects.filter(
    (project) =>
      filter === "All" || project.stack?.toLowerCase() === filter.toLowerCase()
  );

  // Button style function
  const getButtonClass = (category) =>
    `px-4 py-2 rounded-xl font-medium transition-all duration-300 border ${
      filter === category
        ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white border-transparent"
        : "bg-white/10 text-white/70 border-white/20 hover:bg-white/20"
    }`;

  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 -z-10" />

      <Container>
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-purple-400 font-medium mb-4"
          >
            FEATURED WORK
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6"
          >
            Featured  {" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
              Projects
            </span>
          </motion.h2>

          {/* Category Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="flex items-center justify-center gap-4 mb-6"
          >
            <button
              onClick={() => setFilter("MERN Stack")}
              className={getButtonClass("MERN Stack")}
            >
              MERN
            </button>
            <button
              onClick={() => setFilter("WordPress")}
              className={getButtonClass("WordPress")}
            >
              WordPress
            </button>
            <button
              onClick={() => setFilter("All")}
              className={getButtonClass("All")}
            >
              All
            </button>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-white/60 text-lg"
          >
            Explore my recent work showcasing web development expertise and
            creative problem-solving
          </motion.p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                onHoverStart={() => setHoveredId(project.id)}
                onHoverEnd={() => setHoveredId(null)}
              >
                <ProjectCard
                  project={project}
                  isHovered={hoveredId === project.id}
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* View All Projects Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <Link
            href="/projects"
            className="group inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-gradient-to-r 
              from-purple-500 to-pink-500 text-white font-medium relative overflow-hidden"
          >
            <span className="relative z-10">View All Projects</span>
            <svg
              className="w-5 h-5 relative z-10 transition-transform group-hover:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
          </Link>
        </motion.div>
      </Container>
    </section>
  );
};

export default Projects;
