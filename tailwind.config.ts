import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: "400px",
        "3xl": "1720px",
      },
      maxWidth: {
        global: "1200px",
      },
      fontFamily : {
        brand : ['Inter', 'sans-serif']
      },
      colors: {
        brand: "#0c1222",
        brand_light: "#182B4B",
        brand_super_light: "#42c0f8",
        support: "#18212F",
        light: {
          DEFAULT: "#C9D7E3",
          base: "#AFA89F",
          100: "#AAB8C4",
        },
      },
    },
  },
  plugins: [],
};
export default config;
