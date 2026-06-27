"use client";
import { motion } from 'framer-motion';
import Container from '../../ui/Container';
import ContactForm from './ContactForm';
import ContactInfo from './ContactInfo';
import { useAnimateInView } from '@/app/hooks/useAnimateInView';

const Contact = () => {
  const { ref, controls } = useAnimateInView();

  return (
    <section className="relative py-16 sm:py-20 lg:py-24 overflow-hidden" ref={ref}>
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 -z-10" />
      {/* <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] -z-10" /> */}
      
      {/* Animated background circles - Adjusted for better mobile view */}
      <div className="absolute top-1/4 left-0 w-48 sm:w-72 lg:w-96 h-48 sm:h-72 lg:h-96 bg-purple-500/20 rounded-full blur-[80px] sm:blur-[120px] -z-10" />
      <div className="absolute bottom-1/4 right-0 w-48 sm:w-72 lg:w-96 h-48 sm:h-72 lg:h-96 bg-pink-500/20 rounded-full blur-[80px] sm:blur-[120px] -z-10" />

      <Container className="px-4 sm:px-6 lg:px-8">
        {/* Header - Improved spacing for mobile */}
        <motion.div
          initial={{ opacity: 1, y: 20 }}
          animate={controls}
          className="max-w-3xl mx-auto text-center mb-12 sm:mb-16 lg:mb-20 px-4"
        >
          <motion.p
            initial={{ opacity: 1, y: 20 }}
            animate={controls}
            transition={{ delay: 0.1 }}
            className="text-purple-400 font-medium mb-3 sm:mb-4 text-sm sm:text-base"
          >
            GET IN TOUCH
          </motion.p>
          <motion.h2
            initial={{ opacity: 1, y: 20 }}
            animate={controls}
            transition={{ delay: 0.2 }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6"
          >
            Let&apos;s Work <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Together</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 1, y: 20 }}
            animate={controls}
            transition={{ delay: 0.3 }}
            className="text-white/60 text-sm sm:text-base lg:text-lg pb-4 md:px-4"
          >
            Have a project in mind or want to collaborate? Feel free to reach out.
            I'm always open to discussing new opportunities and ideas.
          </motion.p>
        </motion.div>

        {/* Contact Content */}
        <div className="relative mx-auto">
          {/* Decorative Elements - Adjusted for mobile */}
          <div className="absolute -top-6 sm:-top-8 lg:-top-12 -right-6 sm:-right-8 lg:-right-12 
            w-16 sm:w-20 lg:w-24 h-16 sm:h-20 lg:h-24 bg-gradient-to-r from-purple-500/30 
            to-pink-500/30 rounded-full blur-lg" />
          <div className="absolute -bottom-6 sm:-bottom-8 lg:-bottom-12 -left-6 sm:-left-8 lg:-left-12 
            w-16 sm:w-20 lg:w-24 h-16 sm:h-20 lg:h-24 bg-gradient-to-r from-pink-500/30 
            to-purple-500/30 rounded-full blur-lg" />

          {/* Main Content */}
          <div className="relative bg-white/5 backdrop-blur-xl rounded-xl sm:rounded-2xl 
            border border-white/10 p-2 sm:p-6 md:p-8 lg:p-12">
            <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-16">
              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 1 }}
                animate={controls}
                transition={{ delay: 0.4 }}
                className="order-2 lg:order-1"
              >
                <ContactForm />
              </motion.div>

              {/* Contact Info */}
              <motion.div
                initial={{ opacity: 1 }}
                animate={controls}
                transition={{ delay: 0.5 }}
                className="order-1 lg:order-2"
              >
                <ContactInfo />
              </motion.div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Contact; 