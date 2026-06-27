"use client";
import { motion } from 'framer-motion';
import Image from 'next/image';
import Container from '../ui/Container';
import { testimonials } from '@/app/constants/testimonials';
import { useAnimateInView } from '@/app/hooks/useAnimateInView';

const ClientTestimonials = () => {
  const { ref, controls } = useAnimateInView();

  return (
    <section className="py-20 bg-white/5" ref={ref}>
      <Container>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={controls}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Client Testimonials
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Here's what some of my clients have to say about working with me.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              animate={controls}
              transition={{ delay: index * 0.1 }}
              className="bg-white/5 p-6 rounded-2xl"
            >
              {/* Quote Icon */}
              <div className="mb-6">
                <svg
                  className="w-8 h-8 text-purple-500"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>

              {/* Testimonial Content */}
              <p className="text-gray-300 mb-6">
                {testimonial.content}
              </p>

              {/* Client Info */}
              <div className="flex items-center">
                <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="text-white font-medium">
                    {testimonial.name}
                  </h4>
                  <p className="text-gray-400 text-sm">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default ClientTestimonials; 