/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/free-n8n-templates",
        destination: "/resourse/free-n8n-templates",
        permanent: true,
      },
      {
        source: "/make-templates",
        destination: "/resourse/make-templates",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
