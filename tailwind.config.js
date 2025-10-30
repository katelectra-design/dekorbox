/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        christmas: "#C0392B",
        halloween: "#E67E22",
        midsummer: "#27AE60",
        easter: "#F1C40F"
      }
    },
  },
  plugins: [],
}