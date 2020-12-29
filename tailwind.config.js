module.exports = {
  purge: ["./pages/**/*.js", "./components/**/*.js"],
  darkMode: false, // or 'media' or 'class'
  corePlugins: {
    ringWidth: false,
    outline: false,
  },
  theme: {
    extend: {
      colors: {
        yei: {
          primary: {
            main: "#279361",
            darker: "#208556",
          },
          secondary: {
            brighter: "#113b47",
            main: "#293236",
            darkest: "#0d242b",
            black: "#232323",
          },
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
