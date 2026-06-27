"use client";
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { testimonials } from '@/app/constants/testimonials';

const TestimonialSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      handleNext();
    }, 5000);

    return () => clearInterval(interval);
  }, [currentIndex, isAutoPlaying]);

  const handlePrevious = () => {
    setCurrentIndex((prev) => 
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prev) => 
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  };

  return (
    <div className="relative sm:px-6 md:px-8">
      {/* Decorative Elements */}
      <div className="absolute -top-12 -right-12 w-24 h-24 bg-gradient-to-r from-purple-500/30 
        to-pink-500/30 rounded-full blur-xl hidden sm:block" />
      <div className="absolute -bottom-12 -left-12 w-24 h-24 bg-gradient-to-r from-pink-500/30 
        to-purple-500/30 rounded-full blur-xl hidden sm:block" />

      {/* Main Content */}
      <div className="relative">
        <div className="overflow-hidden">
          <AnimatePresence initial={false} mode="wait" custom={currentIndex}>
            <motion.div
              key={currentIndex}
              custom={currentIndex}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 }
              }}
              className="relative bg-white/5 backdrop-blur-xl rounded-xl sm:rounded-2xl p-6 sm:p-8 
                md:p-12 border border-white/10"
              onHoverStart={() => setIsAutoPlaying(false)}
              onHoverEnd={() => setIsAutoPlaying(true)}
            >
              {/* Quote Icons */}
              <div className="absolute top-4 sm:top-6 right-4 sm:right-8 text-purple-500/20">
                <svg className="w-12 h-12 sm:w-16 sm:h-16" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>

              {/* Rating Stars */}
              <div className="flex gap-1 mb-4 sm:mb-6">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg
                    key={star}
                    className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Testimonial Content */}
              <div className="relative z-10 mb-6 sm:mb-8">
                <p className="text-white/80 text-base sm:text-lg md:text-xl leading-relaxed">
                  "{testimonials[currentIndex].content}"
                </p>
              </div>

              {/* Author Info */}
              <div className="flex items-center gap-4 sm:gap-6">
                <div className="relative">
                  <div className="relative w-12 h-12 sm:w-16 sm:h-16 rounded-full overflow-hidden 
                    ring-2 ring-purple-500/20 ring-offset-2 ring-offset-black">
                    <Image
                      src={testimonials[currentIndex].image}
                      alt={testimonials[currentIndex].name}
                      fill
                      sizes="(max-width: 640px) 48px, 64px"
                      className="object-cover"
                      priority
                    />
                  </div>
                  {/* Decorative circle */}
                  <div className="absolute -inset-1 bg-gradient-to-r from-purple-500/50 to-pink-500/50 
                    rounded-full blur-sm -z-10" />
                </div>
                <div>
                  <div className="text-white font-semibold text-base sm:text-lg mb-0.5 sm:mb-1">
                    {testimonials[currentIndex].name}
                  </div>
                  <div className="text-purple-400 text-xs sm:text-sm">
                    {testimonials[currentIndex].role}
                  </div>
                </div>
              </div>

              {/* Progress Bar */}
              {isAutoPlaying && (
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/5">
                  <motion.div
                    initial={{ width: "0%" }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 5, ease: "linear" }}
                    className="h-full bg-gradient-to-r from-purple-500 to-pink-500"
                  />
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation */}
        <div className="flex flex-col items-center justify-between gap-4 mt-6 sm:mt-8">
          {/* Navigation Buttons */}
          <div className="flex items-center gap-3">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={handlePrevious}
              className="p-2 sm:p-3 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 
                backdrop-blur-sm transition-colors group"
              aria-label="Previous testimonial"
            >
              <svg 
                className="w-6 h-6 text-white transform transition-transform group-hover:-translate-x-1" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </motion.button>
            
            {/* Pagination Dots */}
            <div className="flex items-center gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex 
                      ? 'w-6 bg-gradient-to-r from-purple-500 to-pink-500' 
                      : 'bg-white/20 hover:bg-white/40'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={handleNext}
              className="p-2 sm:p-3 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 
                backdrop-blur-sm transition-colors group"
              aria-label="Next testimonial"
            >
              <svg 
                className="w-6 h-6 text-white transform transition-transform group-hover:translate-x-1" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </motion.button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialSlider; 