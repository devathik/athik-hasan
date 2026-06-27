import Image from "next/image";
import Link from "next/link";
import code from "@/public/icons/code.png";
import view from "@/public/icons/view.png";

const ProjectCard = ({ project }) => {
  const { img, name, technology, codeLink, liveLink, description } = project;

  return (
    <div className="group relative">
      {/* Background Glow Effect */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600/20 to-red-600/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-1000" />
      
      {/* Main Card */}
      <div className="relative bg-[#0A0A0A] rounded-2xl overflow-hidden border border-white/5">
        {/* Image Container */}
        <div className="relative overflow-hidden aspect-video">
          <Image 
            src={img} 
            alt={name}
            width={500}
            height={300}
            className="w-full h-full object-cover transform group-hover:scale-105 transition duration-700 ease-out"
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent opacity-60" />
          
          {/* Technology Pills */}
          <div className="absolute top-4 left-4 right-4 flex flex-wrap gap-2">
            {technology.map((tech, index) => (
              <span 
                key={index}
                className="px-3 py-1 text-xs font-medium text-white/90 bg-black/50 backdrop-blur-sm rounded-full border border-white/10
                  opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 delay-[var(--delay)]"
                style={{ '--delay': `${index * 50}ms` }}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors duration-300">
            {name}
          </h3>
          
          {description && (
            <p className="text-gray-400 text-sm mb-6 line-clamp-2 leading-relaxed">
              {description}
            </p>
          )}

          {/* Actions */}
          <div className="flex gap-3">
            <a
              href={liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="group/btn flex-1 flex items-center justify-center gap-2 px-4 py-1.5 
                bg-gradient-to-r from-violet-500 to-indigo-500 
                text-white rounded-full font-medium relative overflow-hidden
                shadow-[0_2px_20px_-5px_rgba(99,102,241,0.3)]
                hover:shadow-[0_5px_30px_-10px_rgba(99,102,241,0.4)]
                hover:from-violet-600 hover:to-indigo-600
                transition-all duration-300"
            >
              <div className="relative flex items-center gap-2">
                <Image 
                  src={view} 
                  alt="View Live" 
                  width={16} 
                  height={16} 
                  className="brightness-0 invert" 
                />
                <span className="text-[15px]">Live Site</span>
                
              </div>
            </a>
            <a
              href={codeLink}
              target="_blank"
              rel="noopener noreferrer"
              className="group/btn flex-1 flex items-center justify-center gap-2 px-4 py-1.5
                bg-[#111111] text-gray-300 rounded-full font-medium
                relative overflow-hidden border border-gray-800
                hover:text-white hover:border-indigo-500/30 hover:bg-[#161616]
                transition-all duration-300"
            >
              <div className="relative flex items-center gap-2">
                <Image 
                  src={code} 
                  alt="View Code" 
                  width={16} 
                  height={16} 
                  className="opacity-80" 
                />
                <span className="text-[15px]">Code</span>
                
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
