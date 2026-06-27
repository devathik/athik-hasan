"use client";
import { motion } from 'framer-motion';
import Container from '../../ui/Container';
import ProfileCard from './ProfileCard';
import Timeline from './Timeline';
import Stats from './Stats';
import { useAnimateInView } from '@/app/hooks/useAnimateInView';

const About = () => {
  const { ref, controls } = useAnimateInView();

  return (
    <section className="relative py-24 overflow-hidden" ref={ref}>
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 -z-10" />
      {/* <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] -z-10" /> */}
      
      {/* Animated background circles */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-purple-500/20 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-pink-500/20 rounded-full blur-[120px] -z-10" />

      <Container>
        {/* Header */}
        <motion.div
          initial={{ opacity: 1, y: 20 }}
          animate={controls}
          className="max-w-3xl mx-auto text-center mb-20"
        >
          <motion.p
            initial={{ opacity: 1, y: 20 }}
            animate={controls}
            transition={{ delay: 0.1 }}
            className="text-purple-400 font-medium mb-4"
          >
            ABOUT ME
          </motion.p>
          <motion.h2
            initial={{ opacity: 1, y: 20 }}
            animate={controls}
            transition={{ delay: 0.2 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6"
          >
            Know Who <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">I Am</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 1, y: 20 }}
            animate={controls}
            transition={{ delay: 0.3 }}
            className="text-white/60 text-lg"
          >
            Passionate about creating innovative solutions and delivering exceptional user experiences
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Profile Section */}
          <motion.div
            initial={{ opacity: 1 }}
            animate={controls}
            transition={{ delay: 0.4 }}
            className="lg:col-span-1"
          >
            <ProfileCard />
          </motion.div>

          {/* Experience & Education */}
          <motion.div
            initial={{ opacity: 1 }}
            animate={controls}
            transition={{ delay: 0.5 }}
            className="lg:col-span-2 space-y-12"
          >
            <Timeline />
            <Stats />
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

export default About; 