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
        25: "108px",
        40: "204px",
        100: "560px",
        115: "730px"
        
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
        navbarbg: "#F3F6FA",
        white: "#FFFFFF",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
