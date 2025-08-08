/** @type {import('next').NextConfig} */
const nextConfig: import('next').NextConfig = {
  // Other config...
  env: {
    NEXTAUTH_URL: process.env.NEXTAUTH_URL,
    // Other env vars
  },
  // Required for Next.js API routes to work on Netlify
  target: 'serverless',
  // Enable static exports if you're using static site generation
  output: 'export',
}

module.exports = nextConfig