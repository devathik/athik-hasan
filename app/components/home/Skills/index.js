"use client";
import { motion } from 'framer-motion';
import Container from '../../ui/Container';
import SkillCard from './SkillCard';
import { skillsData } from '@/app/constants/skills';
import { useInView } from 'react-intersection-observer';

const Skills = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section className="relative py-24 overflow-hidden" ref={ref}>
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 -z-10" />
      {/* <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] -z-10" /> */}
      
      {/* Animated background circles */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-purple-500/20 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-pink-500/20 rounded-full blur-[120px] -z-10" />

      <Container>
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-20">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-purple-400 font-medium mb-4"
          >
            SKILLS & EXPERTISE
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6"
          >
            Technologies I Work <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">With</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-white/60 text-lg"
          >
            Leveraging modern technologies to build scalable and performant web applications
          </motion.p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {skillsData.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <SkillCard {...category} />
            </motion.div>
          ))}
        </div>

        {/* Experience Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20"
        >
          {[
            { value: "5+", label: "Years Experience" },
            { value: "50+", label: "Projects Completed" },
            { value: "20+", label: "Happy Clients" },
            { value: "99%", label: "Client Satisfaction" },
          ].map((stat, index) => (
            <div
              key={stat.label}
              className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm text-center"
            >
              <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 mb-2">
                {stat.value}
              </div>
              <div className="text-white/60">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
};

export default Skills; 