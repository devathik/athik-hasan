"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const ProjectCard = ({ project, isHovered }) => {
  const technologies = project.technologies || [];

  return (
    <motion.div
      whileHover={{ y: -6 }}
      className="group relative bg-white/5 rounded-2xl overflow-hidden 
      border border-white/10 backdrop-blur-sm transition-shadow"
    >
      {/* Project Image */}
      <div className="relative aspect-video overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          width={1200}
          height={2000}
          priority={false}
          className="
            w-full
            h-auto
            transition-transform
            duration-[7000ms]
            ease-linear
            group-hover:-translate-y-[70%]
          "
        />

        {/* Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />

        {/* Hover Overlay */}
        <div
          className={`absolute inset-0 bg-black/60 flex items-center justify-center gap-5
          transition-opacity duration-300
          ${isHovered ? "opacity-100" : "opacity-0"}`}
        >
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition"
            >
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7
                  -1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                />
              </svg>
            </a>
          )}

          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition"
            >
              <svg
                className="w-6 h-6 text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49
                  .5.092.682-.217.682-.482
                  0-.237-.008-.866-.013-1.7
                  -2.782.604-3.369-1.34-3.369-1.34
                  -.454-1.156-1.11-1.464-1.11-1.464
                  -.908-.62.069-.608.069-.608
                  1.003.07 1.531 1.03 1.531 1.03
                  .892 1.529 2.341 1.087 2.91.832
                  .092-.647.35-1.088.636-1.338
                  -2.22-.253-4.555-1.11-4.555-4.943
                  0-1.091.39-1.984 1.029-2.683
                  -.103-.253-.446-1.27.098-2.647
                  0 0 .84-.269 2.75 1.025
                  A9.564 9.564 0 0112 6.844
                  c.85.004 1.705.115 2.504.337
                  1.909-1.294 2.747-1.025 2.747-1.025
                  .546 1.377.203 2.394.1 2.647
                  .64.699 1.028 1.592 1.028 2.683
                  0 3.842-2.339 4.687-4.566 4.935
                  .359.309.678.919.678 1.852
                  0 1.336-.012 2.415-.012 2.743
                  0 .267.18.578.688.48
                  C19.137 20.167 22 16.418 22 12
                  c0-5.523-4.477-10-10-10z"
                />
              </svg>
            </a>
          )}
        </div>
      </div>

      {/* Project Info */}
      <div className="p-6">
        <div className="flex flex-wrap gap-2 mb-3">
          {technologies.slice(0, 3).map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 text-xs rounded-full bg-white/10 
              text-purple-300 border border-purple-500/20"
            >
              {tech}
            </span>
          ))}

          {technologies.length > 3 && (
            <span className="text-xs text-purple-400">
              +{technologies.length - 3} more
            </span>
          )}
        </div>

        <h3
          className="text-xl font-semibold text-white mb-2 
        group-hover:text-purple-400 transition-colors"
        >
          {project.title}
        </h3>

        <p className="text-white/60 text-sm line-clamp-2">
          {project.description}
        </p>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
