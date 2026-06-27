import { motion } from 'framer-motion';
import { experienceData, educationData } from '@/app/constants/timeline';

const TimelineItem = ({ data, index }) => (
  <motion.div
    initial={{ opacity: 1, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.1 }}
    className="relative pl-8 pb-8 group"
  >
    {/* Timeline line and dot */}
    <div className="absolute left-0 top-2 w-3 h-3 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 
      group-hover:scale-150 transition-transform duration-300" />
    <div className="absolute left-[5px] top-3 w-px h-full bg-gradient-to-b from-purple-500/50 to-transparent" />

    {/* Content Card */}
    <div className="relative bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 
      group-hover:border-white/20 transition-colors duration-300">
      {/* Decorative gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-pink-500/5 rounded-2xl 
        opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      {/* Content */}
      <div className="relative">
        <div className="inline-flex items-center px-3 py-1 rounded-full bg-gradient-to-r from-purple-500/10 
          to-pink-500/10 border border-purple-500/20 backdrop-blur-xl mb-3">
          <span className="text-sm text-purple-300">{data.period}</span>
        </div>

        <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-transparent 
          group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 
          group-hover:to-pink-400 transition-colors duration-300">
          {data.title}
        </h3>

        <div className="text-sm text-white/60 mb-3 flex items-center gap-2">
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm3 1h6v4H7V5zm6 6H7v2h6v-2z" clipRule="evenodd" />
          </svg>
          {data.organization}
        </div>

        <p className="text-white/60 text-sm leading-relaxed">
          {data.description}
        </p>

        {/* Skills/Technologies Used */}
        {data.skills && (
          <div className="mt-4 flex flex-wrap gap-2">
            {data.skills.map((skill) => (
              <span
                key={skill}
                className="px-2 py-1 text-xs rounded-full bg-white/5 text-purple-300 
                  border border-purple-500/20"
              >
                {skill}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  </motion.div>
);

const Timeline = () => {
  return (
    <div className="space-y-12">
      {/* Experience */}
      <div>
        <h3 className="text-2xl font-semibold text-white mb-8 flex items-center gap-3">
          <span className="w-8 h-8 rounded-lg bg-gradient-to-r from-purple-500/20 to-pink-500/20 
            flex items-center justify-center">
            <svg className="w-5 h-5 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </span>
          Work Experience
        </h3>
        <div>
          {experienceData.map((exp, index) => (
            <TimelineItem key={index} data={exp} index={index} />
          ))}
        </div>
      </div>

      {/* Education */}
      <div>
        <h3 className="text-2xl font-semibold text-white mb-8 flex items-center gap-3">
          <span className="w-8 h-8 rounded-lg bg-gradient-to-r from-purple-500/20 to-pink-500/20 
            flex items-center justify-center">
            <svg className="w-5 h-5 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path d="M12 14l9-5-9-5-9 5 9 5z" />
              <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
            </svg>
          </span>
          Education
        </h3>
        <div>
          {educationData.map((edu, index) => (
            <TimelineItem key={index} data={edu} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Timeline; 