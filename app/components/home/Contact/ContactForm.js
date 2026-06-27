"use client";
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState('idle'); // idle, loading, success, error

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');

    try {
      // Add your form submission logic here
      await new Promise(resolve => setTimeout(resolve, 1000)); // Simulated API call
      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
      <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
        {/* Name Input */}
        <div className="relative">
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            placeholder=" "
            className="peer w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base rounded-lg sm:rounded-xl 
              bg-white/5 border border-white/10 text-white placeholder-transparent focus:outline-none 
              focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
          />
          <label
            htmlFor="name"
            className="absolute left-3 sm:left-4 -top-6 text-xs sm:text-sm text-gray-400 
              peer-placeholder-shown:text-sm peer-placeholder-shown:text-gray-500 
              peer-placeholder-shown:top-2.5 sm:peer-placeholder-shown:top-3 transition-all 
              peer-focus:-top-6 peer-focus:text-xs sm:peer-focus:text-sm peer-focus:text-purple-400"
          >
            Your Name
          </label>
        </div>

        {/* Email Input */}
        <div className="relative">
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder=" "
            className="peer w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base rounded-lg sm:rounded-xl 
              bg-white/5 border border-white/10 text-white placeholder-transparent focus:outline-none 
              focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
          />
          <label
            htmlFor="email"
            className="absolute left-3 sm:left-4 -top-6 text-xs sm:text-sm text-gray-400 
              peer-placeholder-shown:text-sm peer-placeholder-shown:text-gray-500 
              peer-placeholder-shown:top-2.5 sm:peer-placeholder-shown:top-3 transition-all 
              peer-focus:-top-6 peer-focus:text-xs sm:peer-focus:text-sm peer-focus:text-purple-400"
          >
            Your Email
          </label>
        </div>
      </div>

      {/* Subject Input */}
      <div className="relative">
        <input
          type="text"
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          required
          placeholder=" "
          className="peer w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base rounded-lg sm:rounded-xl 
            bg-white/5 border border-white/10 text-white placeholder-transparent focus:outline-none 
            focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
        />
        <label
          htmlFor="subject"
          className="absolute left-3 sm:left-4 -top-6 text-xs sm:text-sm text-gray-400 
            peer-placeholder-shown:text-sm peer-placeholder-shown:text-gray-500 
            peer-placeholder-shown:top-2.5 sm:peer-placeholder-shown:top-3 transition-all 
            peer-focus:-top-6 peer-focus:text-xs sm:peer-focus:text-sm peer-focus:text-purple-400"
        >
          Subject
        </label>
      </div>

      {/* Message Input */}
      <div className="relative">
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          placeholder=" "
          rows={5}
          className="peer w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base rounded-lg sm:rounded-xl 
            bg-white/5 border border-white/10 text-white placeholder-transparent focus:outline-none 
            focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all resize-none"
        />
        <label
          htmlFor="message"
          className="absolute left-3 sm:left-4 -top-6 text-xs sm:text-sm text-gray-400 
            peer-placeholder-shown:text-sm peer-placeholder-shown:text-gray-500 
            peer-placeholder-shown:top-2.5 sm:peer-placeholder-shown:top-3 transition-all 
            peer-focus:-top-6 peer-focus:text-xs sm:peer-focus:text-sm peer-focus:text-purple-400"
        >
          Your Message
        </label>
      </div>

      {/* Submit Button */}
      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        type="submit"
        disabled={status === 'loading'}
        className="relative w-full px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base rounded-lg sm:rounded-xl 
          bg-gradient-to-r from-purple-500 to-pink-500 text-white font-medium disabled:opacity-50 
          disabled:cursor-not-allowed transition-all overflow-hidden group"
      >
        <span className="relative z-10">
          {status === 'loading' ? 'Sending...' : 'Send Message'}
        </span>
        <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 
          transition-transform duration-300" />
      </motion.button>

      {/* Status Messages */}
      <AnimatePresence mode="wait">
        {status === 'success' && (
          <motion.div
            initial={{ opacity: 1, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="flex items-center gap-2 text-green-400 justify-center text-sm sm:text-base"
          >
            <svg className="w-4 sm:w-5 h-4 sm:h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>Message sent successfully!</span>
          </motion.div>
        )}

        {status === 'error' && (
          <motion.div
            initial={{ opacity: 1, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="flex items-center gap-2 text-red-400 justify-center text-sm sm:text-base"
          >
            <svg className="w-4 sm:w-5 h-4 sm:h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>Something went wrong. Please try again.</span>
          </motion.div>
        )}
      </AnimatePresence>
    </form>
  );
};

export default ContactForm; 