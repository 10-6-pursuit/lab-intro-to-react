/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "swiss-coffee": {
          50: "#f9f8f7",
          100: "#f1f0ef",
          200: "#e6e4e2",
          300: "#dbd7d4",
          400: "#bbb4ae",
          500: "#a29891",
          600: "#8a8078",
          700: "#726963",
          800: "#605954",
          900: "#534d49",
          950: "#2a2725",
        },
      },
    },
  },
  plugins: [],
};
