"use client";
import { motion } from "framer-motion";
import { skills } from "@/app/constants/skills";

const Skills = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-white/5 backdrop-blur-xl rounded-3xl border border-white/10 p-8"
    >
      <h3 className="text-xl font-semibold mb-6 text-white">Technical Expertise</h3>
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-6">
        {skills.map((skillGroup) => (
          <div key={skillGroup.category}>
            <h4 className="text-sm font-medium text-white/40 mb-3">{skillGroup.category}</h4>
            <div className="space-y-2">
              {skillGroup.items.map((skill) => (
                <motion.div
                  key={skill}
                  whileHover={{ scale: 1.02 }}
                  className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-white/80 text-sm
                    hover:border-purple-500/30 hover:bg-purple-500/5 transition-colors duration-300"
                >
                  {skill}
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default Skills; 