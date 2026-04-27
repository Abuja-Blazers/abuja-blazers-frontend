import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {},
  experimental: {
    viewTransition: true,
  },
  async redirects() {
    return [
      {
        source: '/shop',
        destination: 'https://shop.abujablazers.com',
        permanent: true,
      },
      {
        source: '/shop/:path*',
        destination: 'https://shop.abujablazers.com/:path*',
        permanent: true,
      },
      {
        source: '/player-market',
        destination: 'https://players.abujablazers.com',
        permanent: true,
      },
      {
        source: '/player-market/:path*',
        destination: 'https://players.abujablazers.com/:path*',
        permanent: true,
      },
    ]
  },
}

export default nextConfig;
