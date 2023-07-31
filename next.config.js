/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["i.scdn.co"],
  },
  compiler: {
    styledComponents: {
      displayName: true,
    },
  },
};

module.exports = nextConfig;
