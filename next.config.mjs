/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["https://mks-sistemas.nyc3.digitaloceanspaces.com/"],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'mks-sistemas.nyc3.digitaloceanspaces.com',
        port: '',
        pathname: '/products/**',
      },
    ],
  },
};

export default nextConfig;
