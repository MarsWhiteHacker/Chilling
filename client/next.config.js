/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "ipfs.io/ipfs",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

module.exports = nextConfig;
