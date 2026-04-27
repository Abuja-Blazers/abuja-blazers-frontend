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
        has: [{ type: 'host', value: 'abujablazers.com' }],
      },
      {
        source: '/shop/:path*',
        destination: 'https://shop.abujablazers.com/:path*',
        permanent: true,
        has: [{ type: 'host', value: 'abujablazers.com' }],
      },
      {
        source: '/player-market',
        destination: 'https://players.abujablazers.com',
        permanent: true,
        has: [{ type: 'host', value: 'abujablazers.com' }],
      },
      {
        source: '/player-market/:path*',
        destination: 'https://players.abujablazers.com/:path*',
        permanent: true,
        has: [{ type: 'host', value: 'abujablazers.com' }],
      },
    ]
  },
}

export default nextConfig;
