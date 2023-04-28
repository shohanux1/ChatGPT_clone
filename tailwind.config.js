/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      white: "#FFFFFF",
      "dark-blue-gray": "#111826",
      "light-blue-gray": "#212936",
      "teal-green": "#1FC77E",
      "teal-green-light": "#6BE3B0",
      "teal-green-dark": "#03A65F",
      "teal-soft": " rgba(5, 226, 131, 0.1)",
      red: "#FF525A",
      "red-light": "#FF858A",
      "gray-dark": "#273444",
      gray: "#8F9FB2 ",
      "gray-light": "#CCD6DE",
      "gray-text-light": "#D0D4D7",
      "gray-soft-light": "#F7F7F8",
      transparent: "transparent",
    },
    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      backgroundColor: {
        softTeal: "rgba(5, 226, 131, 0.1)",
      },
      boxShadow: {
        theme: "0px 4px 8px rgba(215, 217, 225, 0.7)",
        navbar: "box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1)",
      },
    },
  },
  plugins: [],
};
