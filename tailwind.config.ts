import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        segoe: ['"Segoe UI"', "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
