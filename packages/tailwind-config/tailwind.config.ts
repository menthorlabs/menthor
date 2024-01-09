import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";

export default <Partial<Config>>{
  theme: {
    aspectRatio: {
      auto: "auto",
      square: "1 / 1",
      video: "16 / 9",
    },
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
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
          md: "2.5rem",
          lg: "2.5rem",
          xl: "2.5rem",
          "2xl": "2.5rem",
        },
      },
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1190px",
        "2xl": "1190px",
      },
    },
  },
};
