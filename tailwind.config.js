/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/App.js"],
  theme: {
    screens: {
      mobile: { max: "767px" },
      // => @media (max-width: 767px) { ... }
      tablet: { max: "919px", min: "768px" },
      // => @media (max-width: 991px) { ... }
      desktop: { max: "1231px", min: "920px" },
      // => @media (max-width: 1231px) { ... }
    },
    extend: {
      colors: {
        darkHorizon: "#060d17",
      },
      fontFamily: {
        barlow: ["Barlow", "sans-serif"],
      },
    },
  },
  plugins: [],
};
