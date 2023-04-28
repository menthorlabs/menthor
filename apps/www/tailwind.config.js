/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Mona-Sans", ...defaultTheme.fontFamily.sans],
      },
    },
    container: {
      center: true,
      padding: "2.5rem",
    },
    screens: {
      xl: "1190px",
    },
  },
  plugins: [],
  safelist: [/svg.*/, /fa.*/],
};
