/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // <- This tells Tailwind to scan all your React files
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          navy: '#020617',
          charcoal: '#111827',
          ink: '#0f172a',
          cyan: '#67e8f9',
          sky: '#38bdf8',
          violet: '#a855f7',
          soft: '#e2e8f0',
        },
      },
    },
  },
  plugins: [],
}
