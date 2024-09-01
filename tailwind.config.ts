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
        "primary-light": "#fff",
        "primary-dark": "#222831",
        "card-dark": "#1d222a",
      },
      backgroundImage: {
        "gradient-dark-top": "linear-gradient(0deg,#31363c 0%,#222831 100%)",
        "gradient-dark-bottom":
          "linear-gradient(180deg,#31363c 0%,#222831 100%)",
        "gradient-dark-center":
          "linear-gradient(180deg,#222831 0%,#222831 100%)",
        "gradient-light-top": "linear-gradient(0deg,#fff 0%,#f0ebe3 100%)",
        "gradient-light-bottom": "linear-gradient(180deg,#fff 0%,#f0ebe3 100%)",
        "gradient-light-center":
          "linear-gradient(180deg,#f0ebe3 0%,#f0ebe3 100%)",
      },
      colors: {
        "primary-violet": "#7678ed",
      },
      width: {
        "cv-button": "calc(100% - 4px)",
      },
      maxWidth: {
        container: "1100px",
        screen: "100vw",
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
