export default {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        heading: ["Playfair Display", "Montserrat", "serif"],
      },
      translate: ["active"],
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        ".scrollbar-hide": {
          "-ms-overflow-style": "none", // IE/Edge
          "scrollbar-width": "none", // Firefox
        },
      };

      addUtilities(newUtilities);

      const pseudoElements = {
        ".scrollbar-hide::-webkit-scrollbar": {
          display: "none", // Chrome, Safari, and Opera
        },
      };

      addUtilities(pseudoElements, ["responsive"]);
    },
  ],
};
