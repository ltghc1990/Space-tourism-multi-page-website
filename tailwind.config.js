module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        barlow: "Barlow",
        barlowCondensed: '"Barlow Condensed"',
        bellefair: "Bellefair",
      },
      textColor: {
        primary: "#d6d0f9",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
