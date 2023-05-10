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
        sans: [
          "Mona-Sans",
          "Mona-Sans override",
          ...defaultTheme.fontFamily.sans,
        ],
      },
      backgroundImage: {
        pattern: "url('/patterns/default.svg')",
      },
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        md: "2.5rem",
        lg: "2.5rem",
      },
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1190px",
    },
  },
  plugins: [],
  safelist: [
    {
      pattern: /fa.*/,
    },
  ],
};
