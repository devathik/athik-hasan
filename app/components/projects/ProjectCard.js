"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const ProjectCard = ({ project }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group relative bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 overflow-hidden"
    >
      {/* Project Image */}
      <div className="relative h-48 md:h-64 overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          width={1200}
          height={2000}
          className="
            w-full
            h-auto
            object-cover
            transition-transform
            duration-[6000ms]
            ease-linear
            group-hover:-translate-y-[60%]
          "
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
      </div>

      {/* Project Info */}
      <div className="p-6">
        <h3
          className="text-xl font-semibold mb-2 text-white group-hover:text-transparent 
          group-hover:bg-clip-text group-hover:bg-gradient-to-r 
          group-hover:from-purple-500 group-hover:to-pink-500"
        >
          {project.title}
        </h3>

        <p className="text-white/60 text-sm mb-4">{project.description}</p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.technologies?.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 text-xs rounded-full bg-white/5 border border-white/10 text-white/60"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex gap-4">
          {project.liveUrl && (
            <Link
              href={project.liveUrl}
              target="_blank"
              className="flex-1 py-2 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 
                text-white text-sm font-medium text-center relative overflow-hidden"
            >
              Live Demo
            </Link>
          )}
          {project.githubUrl && (
            <Link
              href={project.githubUrl}
              target="_blank"
              className="flex-1 py-2 rounded-xl bg-white/5 text-white text-sm font-medium text-center 
                border border-white/10 hover:bg-white/10 transition-colors"
            >
              Source Code
            </Link>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
