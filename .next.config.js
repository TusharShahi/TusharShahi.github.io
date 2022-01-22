/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    domains: ["localhost:3000", ""],
    deviceSizes: [280, 600, 640, 750, 828, 1080, 1200, 1920, 2048, 3840]
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback.fs = false;
    }
    return config;
  }
};
