/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        background: '#1a1a1a',
        surface: '#2a2a2a',
        'text-primary': '#e0e0e0',
        'text-secondary': '#a0a0a0',
        accent: '#b91c1c', // red-700
        'accent-hover': '#dc2626', // red-600
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};
