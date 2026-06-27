"use client";
import { motion } from 'framer-motion';
import Container from '../ui/Container';
import { educationData } from '@/app/constants/qualification';
import { useAnimateInView } from '@/app/hooks/useAnimateInView';

const Education = () => {
  const { ref, controls } = useAnimateInView();

  return (
    <section ref={ref}>
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={controls}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl font-bold text-white mb-8">
            Educational Background
          </h2>

          <div className="space-y-8">
            {educationData.map((edu, index) => (
              <motion.div
                key={edu.degree}
                initial={{ opacity: 0, y: 20 }}
                animate={controls}
                transition={{ delay: index * 0.1 }}
                className="relative pl-8 before:content-[''] before:absolute before:left-0 
                  before:top-2 before:w-3 before:h-3 before:bg-gradient-to-r 
                  before:from-purple-500 before:to-pink-500 before:rounded-full"
              >
                <div className="bg-white/5 rounded-2xl p-6">
                  <div className="text-sm text-purple-400 mb-2">
                    {edu.period}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {edu.degree}
                  </h3>
                  <div className="text-gray-400 mb-4">
                    {edu.institution}
                  </div>
                  <p className="text-gray-400 text-sm">
                    {edu.description}
                  </p>
                  
                  {edu.achievements && (
                    <ul className="mt-4 space-y-2">
                      {edu.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-gray-400">
                          <span className="text-purple-400 mt-1">•</span>
                          {achievement}
                        </li>
                      ))}
                    </ul>
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

export default Education; 