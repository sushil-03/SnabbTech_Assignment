/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "kyivType": ["KyivType", "sans-serif"],
        "jost": ["Jost", "sans-serif"],
        "biz": ["BIZ UDPGothic", "sans-serif"]
      },
      colors: {
        gray: "#ACB5BD",
        "light-gray": "#E0E0E0",
        black: "#1F1F1F",
        active: "#A95454",
        yellow: "#E0B51D"
      }
    },
  },
  plugins: [],
}
