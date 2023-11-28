/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./main.js",
    "./*.{js,ts,jsx,tsx,css}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0f1520",
        primaryHover: "#0e131d",
        primaryLight: "#e7e8e9",
        primaryDark: "#0b1018",
        primaryLightHover: "#dbdcde",
        primaryActive: "#0c111a",
        primaryLightActive: "#b5b6ba",

        secondary: "#b28a5b",
        secondaryHover: "#a07c52",
        secondaryLight: "#f7f3ef",
        secondaryDark: "##866844",
        secondaryLightHover: "#f3ede6",
        secondaryActive: "#8e6e49",
        secondaryLightActive: "#e7dbcc",

        tertiary: "#ecece9",
        tertiaryHover: "#d4d4d2",
        tertiaryLight: "#fdfdfd",
        tertiaryDark: "#b1b1af",
        tertiaryLightHover: "#fcfcfc",
        tertiaryActive: "#bdbdba",
        tertiaryLightActive: "#f9f9f8",
      },
      gridTemplateColumns: {
        cards: "repeat(auto-fit, minimax(230px, 1fr))",
      },
      fontFamily: {
        BLKCHCRY: ["BLKCHCRY"],
      },
    },
  },
  plugins: [],
};
