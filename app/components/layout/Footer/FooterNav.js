import Link from 'next/link';
import { footerLinks } from '@/app/constants/footer';

const FooterNav = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
      {footerLinks.map((section) => (
        <div key={section.title}>
          <h3 className="font-semibold text-white mb-4">
            {section.title}
          </h3>
          <ul className="space-y-2">
            {section.links.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="text-gray-400 hover:text-white transition-colors duration-300 text-sm"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default FooterNav; 