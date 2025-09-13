import type {NextConfig} from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    serverActions: {
        allowedForwardedHosts: ['localhost'],
        allowedOrigins: ['localhost:9002', 'studio.web.app']
    },
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'picsum.photos',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'storage.googleapis.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'mltlmcqkqqiubrjeasif.supabase.co',
        port: '',
        pathname: '/**',
      }
    ],
  },
  webpack: (config, { isServer }) => {
    // Suppress the 'require.extensions' warning from handlebars
    config.module.rules.push({
      test: /\.js$/,
      include: /node_modules\/handlebars/,
      use: ['ignore-loader'],
    });

    return config;
  },
};

export default nextConfig;
