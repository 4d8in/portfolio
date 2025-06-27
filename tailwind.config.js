/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'accent-green': '#00FF88',
        'accent-orange': '#FF6B35',
        'background': 'var(--background)',
        'foreground': 'var(--foreground)',
      },
      animation: {
        'spin-slow': 'spin 2.5s linear infinite',
        'pulse': 'pulse 1.5s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      backgroundImage: {
        'glass': 'linear-gradient(135deg, rgba(255,255,255,0.08) 0%, rgba(0,0,0,0.12) 100%)',
      },
    },
  },
  darkMode: 'class',
  plugins: [],
}; 