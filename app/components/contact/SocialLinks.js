import Link from 'next/link';
import OptimizedImage from '../ui/OptimizedImage';
import { socialLinks } from '@/app/constants/contact';

const SocialLinks = () => (
  <div className="bg-white/5 backdrop-blur-xl rounded-2xl md:rounded-3xl border border-white/10 p-6 md:p-8">
    <h2 className="text-lg md:text-xl font-semibold text-white mb-4 md:mb-6">Connect With Me</h2>
    <div className="grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-7">
      {socialLinks.map((social) => (
        <Link
          key={social.name}
          href={social.url}
          target="_blank"
          className="group relative flex flex-col items-center gap-3 md:gap-4 p-4 md:p-6 rounded-xl md:rounded-2xl 
            bg-white/5 hover:bg-white/[0.07] border border-white/10 hover:border-indigo-500/30 transition-all duration-300"
        >
          <div className="relative">
            <div 
              className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition duration-300"
              style={{ boxShadow: `0 0 30px ${social.color}30` }} 
            />
            <social.icon />
          </div>
          <div className="text-center">
            <p className="text-white group-hover:text-white/90 font-medium text-sm md:text-base">
              {social.name}
            </p>
          </div>
        </Link>
      ))}
    </div>
  </div>
);

export default SocialLinks;
