/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    fontFamily:{
      sans: ["Montserrat-Regular","sans-serif"],
      "montserrat-italic":["Montserrat-Italic","sans-serif"],
      "montserrat-bold":["Montserrat-Bold","sans-serif"],
      "montserrat-bold-italic":["Montserrat-BoldItalic","sans-serif"],
      "montserrat-thin":["Montserrat-Thin","sans-serif"],
      "montserrat-thin-italic":["Montserrat-ThinItalic","sans-serif"],
      "shrikhand":["Shrikhand","serif"],
  },
    extend: {},
  },
  plugins: [],
}

