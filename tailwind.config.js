module.exports = {
  purge: [
    './pages/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}',
    ,
    './data/**/*.{js,jsx,ts,tsx}',
  ],
  darkMode: 'media', // or 'media' or 'class'
  corePlugins: {
    ringWidth: false,
    outline: false,
  },
  theme: {
    fontFamily: {
      sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
    },
    screens: {
      'xs': '460px',
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      colors: {
        yei: {
          primary: {
            gray: '#dce8e3',
            faded: '#D0EADE',
            light: '#46f0a1',
            lighter: '#3bbf82',
            main: '#279361',
            darker: '#208556',
            darkest: '#177a4d',
          },
          secondary: {
            brighter: '#113b47',
            main: '#293236',
            darker: '#0d303b',
            darkest: '#0d242b',
            black: '#232323',
            blackVibrant: '#010915',
          },
        },
      },
      boxShadow: {
        xlGreen: '0 20px 25px -5px #27936166, 0 10px 10px -5px #27936133',
        bigGray: '0 25px 100px 10px #000'
      },
      transitionProperty: {
        'right': 'right',
      }
    },
  },
  variants: {
    extend: {
      cursor: ['disabled'],
    },
  },
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')],
}
