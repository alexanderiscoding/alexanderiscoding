/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'assets.alexanderiscoding.com',
        port: '', // Deixe vazio para usar a porta padrão
      },
    ],
  }
};

export default nextConfig;