"use client"
import { motion } from "framer-motion";
import dynamic from 'next/dynamic';
import ErrorBoundary from '../components/ui/ErrorBoundary';

// Dynamic imports for better performance
const ContactForm = dynamic(() => import('../components/contact/ContactForm'), {
  loading: () => <div className="animate-pulse bg-white/5 h-96 rounded-2xl" />
});
const ContactInfo = dynamic(() => import('../components/contact/ContactInfo'));
const SocialLinks = dynamic(() => import('../components/contact/SocialLinks'));

const ContactPage = () => {
  return (
    <div className="min-h-screen overflow-hidden">
      <motion.div 
    initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }} className="container mx-auto relative">
        {/* Header Section */}
        <header className="max-w-4xl mx-auto text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-6">
            <span className="w-2 h-2 rounded-full bg-purple-500 animate-pulse" />
            <span className="text-white/70 text-sm">Available for new opportunities</span>
          </div>
          <h1 className="text-4xl md:text-7xl font-bold mb-6">
          Let&apos;s
        <span className="bg-gradient-to-r from-purple-500 via-red-400 to-pink-400 text-transparent bg-clip-text"> Connect</span>
      </h1>
          
          <p className="text-gray-500 text-base md:text-lg max-w-2xl mx-auto">
            I&apos;m always open to discussing new projects, creative ideas or opportunities to be part of your visions.
          </p>
        </header>

        {/* Main Content Grid */}
        <div
        className="grid lg:grid-cols-3 gap-6 md:gap-8">
          <ErrorBoundary>
            <aside className="lg:col-span-1">
              <ContactInfo />
            </aside>

            <main className="lg:col-span-2 space-y-6 md:space-y-8">
              <ErrorBoundary>
                <ContactForm />
              </ErrorBoundary>
              <ErrorBoundary>
                <SocialLinks />
              </ErrorBoundary>
            </main>
          </ErrorBoundary>
        </div>
      </motion.div>
    </div>
  );
};

export default ContactPage;
