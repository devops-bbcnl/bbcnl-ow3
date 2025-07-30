/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          400: '#FFD700', // Lighter gold
          500: '#FFC000', // Standard gold
          600: '#D4AF37', // Darker gold
        },
      },
      boxShadow: {
        'glow': '0 0 15px rgba(255, 192, 0, 0.5)',
      },
    },
  },
  plugins: [],
}
