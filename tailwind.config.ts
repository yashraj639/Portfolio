import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0a0d10",
        foreground: "#edf2f7",
        muted: "#a4b0be",
        line: "rgba(255, 255, 255, 0.12)",
        accent: "#7dd3fc",
      },
      boxShadow: {
        glow: "0 0 80px rgba(125, 211, 252, 0.08)",
      },
    },
  },
  plugins: [],
};

export default config;
