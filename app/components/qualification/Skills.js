"use client";
import { motion } from 'framer-motion';
import Container from '../ui/Container';
import { skillCategories } from '@/app/constants/qualification';
import { useAnimateInView } from '@/app/hooks/useAnimateInView';

const SkillCard = ({ category, skills }) => (
  <div className="bg-white/5 rounded-2xl p-6">
    <h3 className="text-xl font-semibold text-white mb-4">
      {category}
    </h3>
    <div className="grid grid-cols-2 gap-4">
      {skills.map((skill) => (
        <motion.div
          key={skill.name}
          className="space-y-2"
          whileHover={{ scale: 1.02 }}
        >
          <div className="flex justify-between text-sm">
            <span className="text-gray-400">{skill.name}</span>
            <span className="text-purple-400">{skill.level}%</span>
          </div>
          <div className="h-2 bg-white/10 rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: `${skill.level}%` }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="h-full rounded-full bg-gradient-to-r from-purple-500 to-pink-500"
            />
          </div>
        </motion.div>
      ))}
    </div>
  </div>
);

const Skills = () => {
  const { ref, controls } = useAnimateInView();

  return (
    <section ref={ref} className="bg-white/5">
      <Container className="py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={controls}
        >
          <h2 className="text-3xl font-bold text-white mb-8">
            Technical Skills
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {skillCategories.map((category, index) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 20 }}
                animate={controls}
                transition={{ delay: index * 0.1 }}
              >
                <SkillCard {...category} />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </Container>
    </section>
  );
};

export default Skills; 