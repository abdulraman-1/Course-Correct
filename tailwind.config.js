/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', // Enable dark mode via a class
  theme: {
    extend: {
      colors: {
        dark: "rgba(var(--dark))", // Custom dark color
        gray: {
          700: '#374151', // Custom gray shades
          800: '#1F2937',
        },
        blue: {
          500: '#3B82F6', // Lighter blue for hover in dark mode
          600: '#2563EB', // Primary blue
        },
      },
    },
  },
  plugins: [],
};
