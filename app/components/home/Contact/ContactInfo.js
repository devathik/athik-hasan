import { motion } from 'framer-motion';
import { contactInfo, socialLinks } from '@/app/constants/contact';

const ContactInfo = () => {
  return (
    <div className="space-y-8">
      {/* Contact Details */}
      <div className="space-y-6">
        {contactInfo.map((info, index) => (
          <motion.div
            key={info.label}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className="flex items-center gap-4"
          >
            <div className="p-4 rounded-xl bg-white/5">
              <info.icon className="w-6 h-6 text-purple-400" />
            </div>
            <div>
              <div className="text-sm text-gray-400 mb-1">
                {info.label}
              </div>
              <div className="text-white">
                {info.value}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Social Links */}
      <div>
        <h3 className="text-white font-semibold mb-4">
          Follow Me
        </h3>
        <div className="flex gap-4">
          {socialLinks.map((social, index) => (
            <motion.a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="p-3 rounded-xl bg-white/5 text-gray-400 hover:text-white 
                hover:bg-white/10 transition-all"
            >
              <social.icon className="w-5 h-5" />
            </motion.a>
          ))}
        </div>
      </div>

      {/* Map or Additional Info */}
      <div className="relative aspect-video rounded-xl overflow-hidden">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3677.6962663570253!2d89.34714867506733!3d22.820628879339168!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ff901efac79b59%3A0x5be01a1bc0dc7eba!2sKhulna%2C%20Bangladesh!5e0!3m2!1sen!2sbd!4v1697932881045!5m2!1sen!2sbd"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </div>
  );
};

export default ContactInfo; 