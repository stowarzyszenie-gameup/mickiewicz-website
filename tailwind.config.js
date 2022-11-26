const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Lato", ...defaultTheme.fontFamily.sans],
        serif: ["Petrona", ...defaultTheme.fontFamily.serif],
      },
      colors: {
        primary: "#cfbaa4",
        secondary: "#FFFAF4",
        accent: "#F5E7D8",
        primaryDark: "#000000",
        secondaryDark: "#7F7E7E",
        accentDark: "#464646",
      },
      backgroundImage: {
        "paper-1": "url('/images/paper_light_1.png')",
        "paper-1-dark": "url('/images/paper_dark_1.png')",
        "mickiewicz-left": "url('/images/mickiewicz_lewy_color.png')",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
  darkMode: "class",
};
