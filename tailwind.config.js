/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        theme: "#f6b846",
        "dark-color": "#1f1f1f",
      },
      screens: {
        large: { max: "2000px" },
        laptop: { max: "1555px" },
        tablet: { max: "1220px" },
        mobile: { max: "787px" },
        small: { max: "584px" },
      },
      height: {
        "resume-timeline": "calc(100% - 0.625rem)",
      },
      fontFamily: {
        oswald: ["Oswald", "sans-serif"],
      },
    },
  },
  plugins: [],
};
