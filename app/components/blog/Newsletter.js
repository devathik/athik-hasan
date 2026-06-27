"use client";
import { useState } from 'react';
import { motion } from 'framer-motion';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle'); // idle, loading, success, error

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');

    try {
      // Add your newsletter subscription logic here
      await new Promise(resolve => setTimeout(resolve, 1000)); // Simulated API call
      setStatus('success');
      setEmail('');
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <div className="bg-white/5 rounded-2xl p-6">
      <h2 className="text-xl font-semibold text-white mb-4">
        Newsletter
      </h2>
      
      <p className="text-gray-400 text-sm mb-6">
        Subscribe to get the latest articles and updates delivered to your inbox.
      </p>

      <form onSubmit={handleSubmit}>
        <div className="space-y-4">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 
              text-white placeholder-gray-500 focus:outline-none focus:ring-2 
              focus:ring-purple-500 focus:border-transparent transition-all"
            required
          />

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            disabled={status === 'loading'}
            className="w-full px-4 py-3 rounded-xl bg-gradient-to-r from-purple-500 
              to-pink-500 text-white font-medium disabled:opacity-50 
              disabled:cursor-not-allowed transition-all"
          >
            {status === 'loading' ? 'Subscribing...' : 'Subscribe'}
          </motion.button>
        </div>
      </form>

      {/* Status Messages */}
      {status === 'success' && (
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-4 text-sm text-green-400"
        >
          Thanks for subscribing!
        </motion.p>
      )}

      {status === 'error' && (
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-4 text-sm text-red-400"
        >
          Something went wrong. Please try again.
        </motion.p>
      )}
    </div>
  );
};

export default Newsletter; 