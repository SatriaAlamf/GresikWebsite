import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'asset-2.tribunnews.com',
      },
      {
        protocol: 'https',
        hostname: 'jurnalpost.com',
      },
      {
        protocol: 'https',
        hostname: 'turisian.com',
      },
      {
        protocol: 'https',
        hostname: 'blogger.googleusercontent.com',
      },
    ],
  },
};

export default nextConfig;
