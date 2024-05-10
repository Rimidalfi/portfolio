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
      "mona-lisa":["MonoLisa-Regular","mono"]
  },
    extend: {
      spacing: {
        '88': '87px',
        '64': '63px',
      },
      scale:{
        '103':'1.03',
        '101':'1.01'
      },
      colors:{
        'skeleton':'#ebebeb'
      }
    },
  
  },
  future:{hoverOnlyWhenSupported: true},
  plugins: [],
}

