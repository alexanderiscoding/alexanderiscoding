/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'assets.alexanderiscoding.com',
        port: '',
      },
    ],
  }
};

export default nextConfig;