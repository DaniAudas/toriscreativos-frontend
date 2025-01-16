/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      playfar: ['Playfair Display', 'serif'],
      lobster: ['Lobster', 'serif'],
      roboto: ['Roboto', 'serif'],
    },
    extend: {
      animation: {
        fadeIn: 'fadeIn 2s ease-in-out',
        heartBeat: 'heartBeat 2s ease-in-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}

