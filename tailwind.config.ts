import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "selector",
  theme: {
    extend: {
      backgroundColor: {
        "primary-light": "#f0ebe3",
        "primary-dark": "#222831",
        "card-dark": "#1d222a",
      },
      backgroundImage: {
        "gradient-dark": "linear-gradient(180deg,#31363c 0%,#222831 100%)",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "primary-green": "#29a587",
      },
      width: {
        "cv-button": "calc(100% - 4px)",
      },
      height: {
        "cv-button": "calc(100% - 4px)",
      },
      boxShadow: {
        "primary-light": "5px 5px rgb(0 0 0 / 20%)",
        "primary-dark": "5px 5px rgba(255,255,255,.1)",
      },
    },
  },
  plugins: [],
};
export default config;
