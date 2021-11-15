module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      screens: {
        "3xl": "1950px",
      },
      fontFamily: {
        barlow: "Barlow",
        barlowCondensed: "Barlow Condensed",
        bellafair: "Bellafair",
      },
      textColor: {
        primary: "#D5D7EF",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
