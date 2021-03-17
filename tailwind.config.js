module.exports = {
  purge: [],
  purge: ["./src/components/**/*.tsx", "./src/pages/**/*.tsx", "./public/**/*.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "custom-lightgray": "#a39185",
        "custom-darkgray": "#8d7768",
      },
      fontFamily: {
        "custom-fontFamily": "Mukta Mahee",
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
