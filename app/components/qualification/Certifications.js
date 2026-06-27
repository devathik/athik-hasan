"use client";
import { motion } from 'framer-motion';
import Image from 'next/image';
import Container from '../ui/Container';
import { certificationData } from '@/app/constants/qualification';
import { useAnimateInView } from '@/app/hooks/useAnimateInView';

const CertificationCard = ({ certification }) => (
  <motion.div
    whileHover={{ y: -5 }}
    className="bg-white/5 rounded-2xl overflow-hidden border border-white/10"
  >
    {/* Certificate Image */}
    <div className="relative aspect-video">
      <Image
        src={certification.image}
        alt={certification.title}
        fill
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
    </div>

    {/* Content */}
    <div className="p-6">
      <div className="flex items-center gap-2 mb-3">
        <Image
          src={certification.issuerLogo}
          alt={certification.issuer}
          width={24}
          height={24}
          className="rounded-full"
        />
        <span className="text-sm text-gray-400">
          {certification.issuer}
        </span>
      </div>

      <h3 className="text-lg font-semibold text-white mb-2">
        {certification.title}
      </h3>

      <div className="text-sm text-gray-400 mb-4">
        Issued {certification.issueDate}
        {certification.expiryDate && ` · Expires ${certification.expiryDate}`}
      </div>

      <div className="flex items-center gap-4">
        {certification.credentialUrl && (
          <a
            href={certification.credentialUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-purple-400 hover:text-purple-300 transition-colors"
          >
            View Credential
          </a>
        )}
        {certification.verifyUrl && (
          <a
            href={certification.verifyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-gray-400 hover:text-white transition-colors"
          >
            Verify
          </a>
        )}
      </div>
    </div>
  </motion.div>
);

const Certifications = () => {
  const { ref, controls } = useAnimateInView();

  return (
    <section ref={ref}>
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={controls}
        >
          <h2 className="text-3xl font-bold text-white mb-8">
            Certifications
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certificationData.map((cert, index) => (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, y: 20 }}
                animate={controls}
                transition={{ delay: index * 0.1 }}
              >
                <CertificationCard certification={cert} />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </Container>
    </section>
  );
};

export default Certifications; 