module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        barlow: "Barlow",
        barlowCondensed: '"Barlow Condensed"',
        bellefair: "bellefair",
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
