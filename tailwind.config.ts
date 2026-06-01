import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./data/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        forest: "#064E3B",
        coral: "#EF4444",
        cream: "#FFF7ED",
        navy: "#111827",
        gold: "#F59E0B"
      }
    }
  },
  plugins: []
};

export default config;
