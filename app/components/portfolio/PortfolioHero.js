"use client";
import { motion } from 'framer-motion';
import Container from '../ui/Container';
import { portfolioStats } from '@/app/constants/portfolio';

const PortfolioHero = () => {
  return (
    <section className="pt-20 pb-16 bg-gradient-to-b from-purple-500/10">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            My Portfolio
          </h1>
          <p className="text-gray-400 text-lg mb-12">
            A showcase of my best work, featuring web applications, mobile apps,
            and design projects that demonstrate my expertise in full-stack development.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {portfolioStats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="p-6 bg-white/5 rounded-2xl backdrop-blur-lg"
              >
                <div className="text-3xl font-bold text-white mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-400">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </Container>
    </section>
  );
};

export default PortfolioHero; 