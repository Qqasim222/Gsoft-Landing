/** @type {import('next').NextConfig} */
const withPWA = require("next-pwa")({
    dest: "public",
    register: true,
    skipWaiting: true,
  });
  const nextConfig = withPWA({
    reactStrictMode: true,
    swcMinify: true,
    images: {
      domains: ["res.cloudinary.com"],
      deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
      imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    },
    eslint: {
      ignoreDuringBuilds: true,
    },
    typescript: {
      ignoreBuildErrors: true,
    },
    async redirects() {
      return [
        {
          source: "/service/:slug",
          destination: "/", // Matched parameters can be used in the destination
          permanent: true,
        },
        {
         source: "/portfolio/omid.life",
          destination: "/", // Matched parameters can be used in the destination
             permanent: true,
        },
        {  source: "/belog/:id",
          destination: "/belogs/:id", // Matched parameters can be used in the destination
          permanent: true,
        },
        {
          source: "/contact-us",
          destination: "/contact", // Matched parameters can be used in the destination
          permanent: true,
        },
        
        {
          source: "/d=gsoftconsulting.com",
          destination: "/", // Matched parameters can be used in the destination
          permanent: true,
        },
      ];
    },
  });
  
  module.exports = nextConfig;
  