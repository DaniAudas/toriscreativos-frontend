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
        fadeIn: 'fade-in 2s ease-in-out',
        fadeInDown: 'fade-in-down 1s ease-in-out forwards',
        fadeInLeft: 'fade-in-left 1s ease-in-out forwards',
        fadeInRight: 'fade-in-right 1s ease-in-out forwards',
        slideindown: 'slide-in-down 1s ease-in-out',
        slideInUp: 'slide-in-up 1s ease-in-out forwards',
        flyIn: 'fly-in 3s ease-in-out infinite',
        flash: 'flash 0.6s ease-in-out 0.25s 1 forwards',
        zoomIn: 'zoom-in 1s ease-in-out 0.25s 1 forwards',
      },
      keyframes: {
        "fade-in": {
          "0%": {
              opacity: 0
          },
          "100%": {
              opacity: 1
          },
        },
        "fade-in-down": { 
          "0%": {
              opacity: 0,
              transform: "translateY(-30px)",
          },
          "100%": {
              opacity: 1,
              transform: "translateY(0)",
          },
        },
        "fade-in-left": {
          "0%": {
              opacity: 0,
              transform: "translate3d(-100%, 0, 0)",
          },
          "100%": {
              opacity: 1,
              transform: "translate3d(0, 0, 0)",
          },
        },
        "fade-in-right": {
          "0%": {
              opacity: 0,
              transform: "translate3d(100%, 0, 0)",
          },
          "100%": {
              opacity: 1,
              transform: "translate3d(0, 0, 0)",
          },
        },
        "slide-in-down": {
          "0%": {
              visibility: "visible",
              transform: "translate3d(0, -100%, 0)",
          },
          "100%": {
              transform: "translate3d(0, 0, 0)",
          },
        },
        "slide-in-up": {
          "0%": {
              visibility: "visible",
              transform: "translate3d(0, 100%, 0)",
          },
          "100%": {
              transform: "translate3d(0, 0, 0)",
          },
        },
        "fly-in": {
          "0%": {
              opacity: "0",
              transform: "scale3d(0.3, 0.3, 0.3)",
              transitionTimingFunction: "cubic-bezier(0.215, 0.61, 0.355, 1)",
          },
          "20%": {
              transform: "scale3d(1.1, 1.1, 1.1)"
          },
          "40%": {
              transform: "scale3d(0.9, 0.9, 0.9)"
          },
          "60%": {
              opacity: "1",
              transform: "scale3d(1.03, 1.03, 1.03)"
          },
          "80%": {
              transform: "scale3d(0.97, 0.97, 0.97)"
          },
          "100%": {
              opacity: "1",
              transform: "scale3d(1, 1, 1)"
          },
        },
        flash: {
          "0%, 50%, 100%": {
              opacity: "1"
          },
          "25%, 75%": {
              opacity: "0"
          },
        },   
        "zoom-in": {
          "0%": {
            opacity: 0,
            transform: "scale3d(0.3, 0.3, 0.3)",
          },
          "80%": {
            opacity: 0.8,
            transform: "scale3d(1.1, 1.1, 1.1)",
          },
          "100%": {
            opacity: 1,
          },
        },  
      },
    },
  },
  plugins: [],
}

