/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "imgs.search.brave.com",
      },
      {
        hostname: "craftbeer-team.netlify.app",
      },
      {
        hostname: "1000logos.net",
      },
      {
        hostname: "play-lh.googleusercontent.com"
      },
      {
        hostname: "world-of-dogs.netlify.app"
      },
    
    ],
  },
};

module.exports = nextConfig;
