import Container from "../../ui/Container";
import SocialLinks from "./SocialLinks";
import FooterNav from "./FooterNav";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black/30 backdrop-blur-lg py-8 md:py-12">
      <Container>
        <div className="grid gap-8 md:gap-12">
          {/* Top Section */}
          <div className="grid md:grid-cols-3 gap-8 md:gap-12 pb-8 border-b border-white/10">
            {/* Brand Section */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                Athik Hasan
              </h2>
              <p className="text-gray-400 text-sm md:text-base max-w-md">
                A passionate MERN Stack developer focused on building innovative
                web applications and delivering exceptional user experiences.
              </p>
              <SocialLinks />
            </div>

            {/* Quick Links */}
            <div className="md:col-span-2">
              <FooterNav />
            </div>
          </div>

          {/* Bottom Section */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-400">
            <p>© {currentYear} Athik. All rights reserved.</p>
            <div className="flex items-center gap-6">
              <a
                href="/privacy-policy"
                className="hover:text-white transition-colors duration-300"
              >
                Privacy Policy
              </a>
              <a
                href="/terms"
                className="hover:text-white transition-colors duration-300"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
