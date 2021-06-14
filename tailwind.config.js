module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        mulish: ["Mulish", "sans-serif"],
      },
      spacing: {
        22: "88px",
        23: "91px",
      },
      letterSpacing: {
        wide: "0.2px",
        wide2: "0.3px",
      },
      textColor: {
        primary: "#373F41",
        secondary: "#3C64B1",
        white: "#FFFFFF",
      },
      backgroundColor: {
        primary: "#3C64B1",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
