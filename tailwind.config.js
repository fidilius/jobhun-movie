/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx,vue}"],
  theme: {
    extend: {
      gridTemplateColumns: {
        movies: "repeat(auto-fit, minmax(261px, 1fr))",
      },
      keyframes: {
        "slide-in": {
          "0%": {
            opacity: "0",
          },
          "100%": {
            opacity: "1",
          },
        },
      },
      animation: {
        "slide-in": "slide-in 0.5s ease-out",
      },
    },
  },
  darkMode: "class",
  plugins: [],
}
