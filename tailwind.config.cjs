/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary": {
          DEFAULT: "#13bfae",
          1: "#16d7c3",
          2: "#1de9d5",
          3: "#34ebd9",
          4: "#4beedd"
        },
        "secondary": {
          DEFAULT: "#ff8787",
          1: "#ffa1a1",
          2: "#ffbaba",
          3: "#ffd4d4",
          4: "#ffeded"
        },
        "foreground": {
          DEFAULT: "#2d1e1e",
          1: "#3d2929",
          2: "#4c3333",
          3: "#5b3d3d",
          4: "#6b4747"
        },
        "background": {
          DEFAULT: "#ff9678",
          1: "#ffaa92",
          2: "#ffbeac",
          3: "#ffd2c5",
          4: "#ffe6de"
        },
        "info": "#5affff",
        "success": "#c3ff5a",
        "danger": "#e18778",
        "warning": "#ffd25a"
      }
    }
  },
  plugins: []
};
