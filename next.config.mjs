/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverComponentsExternalPackages: ['@prisma/client', 'bcrypt'],
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'edamam-product-images.s3.amazonaws.com',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
