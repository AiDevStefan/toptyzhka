import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#FFFFFF",
        "bg-alt": "#F8F9FA",
        ink: "#112A46",
        "ink-light": "#5A6B7C",
        accent: "#FFC107",
        "accent-hover": "#E0A800",
        border: "#E5E7EB",
      },
      fontFamily: {
        sans: ["Nunito", "system-ui", "sans-serif"], // <-- Указываем Nunito первым
      },
      boxShadow: {
        soft: "0 4px 20px -2px rgba(17, 42, 70, 0.05)",
        card: "0 10px 30px -5px rgba(17, 42, 70, 0.08)",
      },
    },
  },
  plugins: [],
};

export default config;