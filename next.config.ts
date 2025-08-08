import type { NextConfig } from 'next';

// Check if we're building for static export
const isStaticExport = process.env.NEXT_PUBLIC_STATIC_EXPORT === 'true';

const nextConfig: NextConfig = {
  // Environment variables
  env: {
    NEXTAUTH_URL: process.env.NEXTAUTH_URL,
    NEXT_PUBLIC_STATIC_EXPORT: isStaticExport ? 'true' : 'false',
    // Other env vars
  },
  
  // Only enable static exports for non-API routes
  output: isStaticExport ? 'export' : undefined,
  
  // Configure images
  images: {
    unoptimized: isStaticExport, // Required for static exports
  },
  
  // Enable React Strict Mode
  reactStrictMode: true,
  
  // Skip API routes in static export
  skipTrailingSlashRedirect: isStaticExport,
  
  // Custom webpack configuration
  webpack: (config, { isServer }) => {
    // Add custom webpack configurations here if needed
    return config;
  },
  
  // Disable static optimization for API routes
  experimental: {
    serverComponentsExternalPackages: ['@prisma/client'],
  },
};

// Conditionally modify the config for static export
if (isStaticExport) {
  // Add any static-export specific configurations here
  nextConfig.exportPathMap = async () => ({
    '/': { page: '/' },
    '/brands': { page: '/brands' },
    // Add other static pages here
  });
}

export default nextConfig;