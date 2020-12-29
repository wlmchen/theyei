module.exports = {
  purge: ["./pages/**/*.js", "./components/**/*.js"],
  darkMode: false, // or 'media' or 'class'
  corePlugins: {
    ringWidth: false,
  },
  theme: {
    extend: {
      colors: {
        "regal-blue": "#243c5a",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
