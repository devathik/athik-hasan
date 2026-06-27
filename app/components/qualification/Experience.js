"use client";
import { motion } from 'framer-motion';
import Container from '../ui/Container';
import { experienceData } from '@/app/constants/qualification';
import { useAnimateInView } from '@/app/hooks/useAnimateInView';

const Experience = () => {
  const { ref, controls } = useAnimateInView();

  return (
    <section ref={ref} className="bg-white/5">
      <Container className="py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={controls}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl font-bold text-white mb-8">
            Professional Experience
          </h2>

          <div className="space-y-8">
            {experienceData.map((exp, index) => (
              <motion.div
                key={exp.title}
                initial={{ opacity: 0, y: 20 }}
                animate={controls}
                transition={{ delay: index * 0.1 }}
                className="relative pl-8 before:content-[''] before:absolute before:left-0 
                  before:top-2 before:w-3 before:h-3 before:bg-gradient-to-r 
                  before:from-purple-500 before:to-pink-500 before:rounded-full"
              >
                <div className="bg-white/5 rounded-2xl p-6">
                  <div className="text-sm text-purple-400 mb-2">
                    {exp.period}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {exp.title}
                  </h3>
                  <div className="text-gray-400 mb-4">
                    {exp.company}
                  </div>
                  <p className="text-gray-400 text-sm mb-4">
                    {exp.description}
                  </p>

                  {/* Key Responsibilities */}
                  {exp.responsibilities && (
                    <div className="space-y-4">
                      <h4 className="text-white font-medium">
                        Key Responsibilities:
                      </h4>
                      <ul className="space-y-2">
                        {exp.responsibilities.map((item, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-gray-400">
                            <span className="text-purple-400 mt-1">•</span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Technologies Used */}
                  {exp.technologies && (
                    <div className="mt-4 flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 text-xs rounded-full bg-white/10 text-gray-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </Container>
    </section>
  );
};

export default Experience; 