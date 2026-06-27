"use client";
import { motion } from 'framer-motion';
import Link from 'next/link';
import Container from '../ui/Container';
import { useAnimateInView } from '@/app/hooks/useAnimateInView';

const ContactCTA = () => {
  const { ref, controls } = useAnimateInView();

  return (
    <section className="py-20" ref={ref}>
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={controls}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-gray-400 mb-8">
            I'm currently available for freelance work. Let&apos;s discuss your project
            and create something amazing together.
          </p>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              href="/contact"
              className="inline-block px-8 py-4 rounded-xl bg-gradient-to-r 
                from-purple-500 to-pink-500 text-white font-medium 
                hover:from-purple-600 hover:to-pink-600 transition-all"
            >
              Get in Touch →
            </Link>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
};

export default ContactCTA; 