import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // Environment variables
  env: {
    NEXTAUTH_URL: process.env.NEXTAUTH_URL,
    // Other env vars
  },
  
  // Enable static exports for Netlify
  output: 'export',
  
  // Optional: Configure images if you're using next/image
  images: {
    unoptimized: true, // Required for static exports
  },
  
  // Enable React Strict Mode
  reactStrictMode: true,
  
  // Optional: Configure webpack if needed
  webpack: (config, { isServer }) => {
    // Custom webpack configurations can go here
    return config;
  },
};

export default nextConfig;