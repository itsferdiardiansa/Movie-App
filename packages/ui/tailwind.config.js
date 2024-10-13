/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./public/index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  important: true,
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        default: colors.coolGray['100'],
        light: colors.coolGray['200'],
        primary: {
          light: colors.blue['100'],
          DEFAULT: colors.blue['600'],
        },
        danger: {
          light: colors.red['100'],
          DEFAULT: colors.red['600'],
        },
        warning: {
          light: colors.yellow['100'],
          DEFAULT: colors.yellow['500'],
        },
        success: {
          light: colors.green['100'],
          DEFAULT: colors.green['600'],
        },
        dark: {
          light: colors.coolGray['100'],
          DEFAULT: colors.coolGray['600'],
        },
        orange: {
          DEFAULT: '#e86b32',
          dark: '#f55b14',
        },
      },
    },
  },
  plugins: [],
  variants: {
    extend: {
      opacity: ['disabled'],
    },
    display: ['responsive', 'group-hover', 'group-focus'],
  },
}
