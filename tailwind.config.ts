import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        "3xl": "2000px",
        "4xl": "2400px",
        xs: "350px",
      },
    
    colors: {
      customSlate: "#6c6c6c",
      customBlue: "#89CFF0",
    },
    },
  },
  plugins: [],
};
export default config;
