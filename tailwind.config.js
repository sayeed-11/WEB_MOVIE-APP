/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily : {
      header : ["Righteous"],
      text : ["Nunito"],
      main : ["Roboto"],
      bree : ["Bree Serif", "serif"],
      teko : ["Teko", "sans-serif"],
      oswald : ["Oswald", "sans-serif"]
    }
  },
  plugins: [],
}