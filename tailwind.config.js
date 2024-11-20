/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
    extend: {
      animation: {
        pop: 'pop 0.3s ease-out', // Name of the animation
      },
      keyframes: {
        pop: {
          '0%': { transform: 'scale(1)' },       // Initial size
          '50%': { transform: 'scale(1.2)' },   // Pop-out slightly larger
          '100%': { transform: 'scale(1)' },    // Return to original size
        },
      },
    },
  },
  plugins: [],
}

