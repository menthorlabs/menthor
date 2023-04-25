const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
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
  safelist: [
    {
      pattern: /fa.*/,
    },
    {
      pattern: /svg.*/,
    },
  ],
};
