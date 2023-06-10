/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "../../packages/ui/src/**/*.{vue,js,ts,jsx,tsx}",
    "../../packages/plugins/src/**/*.{vue,js,ts,jsx,tsx}",
    // nuxt
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./service-worker/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
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
  plugins: [require("@tailwindcss/line-clamp")],
  safelist: [
    {
      pattern: /fa.*/,
    },
  ],
};
