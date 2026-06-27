import { profileData } from "@/app/constants/profile";
import { motion } from "framer-motion";
import Image from "next/image";

const ProfileCard = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className="bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10 overflow-hidden"
    >
      {/* Profile Image */}
      <div className="relative aspect-square">
        <Image
          src={profileData.image}
          alt="Jihad's Profile"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Profile Info */}
      <div className="p-6 md:p-8">
        <h3 className="text-2xl font-bold text-white mb-2">
          {profileData.name}
        </h3>
        <p className="text-gray-400 text-sm mb-4">{profileData.title}</p>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          {profileData.stats.map((stat) => (
            <div
              key={stat.label}
              className="text-center p-3 bg-white/5 rounded-xl"
            >
              <div className="text-2xl font-bold text-white mb-1">
                {stat.value}
              </div>
              <div className="text-xs text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Contact Info */}
        <div className="space-y-3">
          {profileData.contactInfo.map((info) => (
            <div key={info.label} className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-white/5">
                <info.icon className="w-5 h-5 text-gray-400" />
              </div>
              <div>
                <div className="text-xs text-gray-400">{info.label}</div>
                <div className="text-sm text-white">{info.value}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Download CV Button */}
        <motion.a
          href="https://docs.google.com/document/d/1YtwU4UEfWDPJr4FtslwC5oWeYZHQbWw5P6BKV4Qi_Ls/export?format=pdf"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="mt-6 flex items-center justify-center gap-2 w-full py-3 rounded-xl 
            bg-gradient-to-r from-purple-500 to-pink-500 text-white font-medium"
        >
          Download CV
          <svg
            className="w-5 h-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
            />
          </svg>
        </motion.a>
      </div>
    </motion.div>
  );
};

export default ProfileCard;
