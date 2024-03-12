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
      "montserrat-semibold":["Montserrat-SemiBold","sans-serif"],
      "montserrat-semibold-italic":["Montserrat-SemiBoldItalic","sans-serif"],
      "montserrat-bold-italic":["Montserrat-BoldItalic","sans-serif"],
      "montserrat-thin":["Montserrat-Thin","sans-serif"],
      "montserrat-thin-italic":["Montserrat-ThinItalic","sans-serif"],
      "shrikhand":["Shrikhand","serif"],
      "mona-lisa":["MonoLisa-Regular","sans-serif"]
  },
    extend: {
      spacing: {
        '88': '88px',
        '64': '64px',
      },
    },
  },
  plugins: [],
}

