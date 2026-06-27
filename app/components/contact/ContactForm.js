"use client";
import { useRef } from 'react';
import { useContactForm } from '../../hooks/useContactForm';
import Button from '../ui/Button';
import LoadingSpinner from '../ui/LoadingSpinner';
import { trackEvent } from '../../lib/analytics';

const INPUT_CLASSES = `w-full px-3 md:px-4 py-2.5 md:py-3 rounded-xl bg-white/5 border border-white/10 
  focus:border-indigo-500/50 text-white text-sm md:text-base outline-none transition-colors duration-300`;

const ContactForm = () => {
  const formRef = useRef();
  const { status, handleSubmit } = useContactForm(formRef);

  const onSubmit = async (e) => {
    await handleSubmit(e);
    if (status.success) {
      trackEvent('contact_form_submitted');
    }
  };

  return (
    <div className="bg-white/5 backdrop-blur-xl rounded-2xl md:rounded-3xl border border-white/10 p-6 md:p-8">
      <h2 className="text-lg md:text-xl font-semibold text-white mb-4 md:mb-6">
        Send Me a Message
      </h2>
      
      <form ref={formRef} onSubmit={onSubmit} className="space-y-4 md:space-y-6">
        <div className="grid sm:grid-cols-2 gap-4 md:gap-6">
          <div>
            <label htmlFor="from_name" className="block text-xs md:text-sm text-white/60 mb-1.5 md:mb-2">
              Your Name
            </label>
            <input
              type="text"
              id="from_name"
              name="from_name"
              required
              className={INPUT_CLASSES}
              disabled={status.loading}
            />
          </div>
          <div>
            <label htmlFor="reply_to" className="block text-xs md:text-sm text-white/60 mb-1.5 md:mb-2">
              Your Email
            </label>
            <input
              type="email"
              id="reply_to"
              name="reply_to"
              required
              className={INPUT_CLASSES}
              disabled={status.loading}
              pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
            />
          </div>
        </div>

        <div>
          <label htmlFor="subject" className="block text-xs md:text-sm text-white/60 mb-1.5 md:mb-2">
            Subject
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            required
            className={INPUT_CLASSES}
            disabled={status.loading}
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-xs md:text-sm text-white/60 mb-1.5 md:mb-2">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={6}
            className={`${INPUT_CLASSES} resize-none`}
            disabled={status.loading}
          />
        </div>

        <Button loading={status.loading} disabled={status.loading}>
          {status.loading ? <LoadingSpinner /> : 'Send Message'}
        </Button>

        {status.success && (
          <div className="p-3 md:p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 text-sm md:text-base">
            Message sent successfully! I'll get back to you soon.
          </div>
        )}
        
        {status.error && (
          <div className="p-3 md:p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-500 text-sm md:text-base">
            Failed to send message. Please try again later.
          </div>
        )}
      </form>
    </div>
  );
};

export default ContactForm;
