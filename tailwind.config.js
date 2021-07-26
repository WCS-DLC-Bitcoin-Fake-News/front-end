module.exports = {
  plugins: [
    require('tailwindcss-neumorphism'),
    require("@tailwindcss/forms")
  ],
  theme: {
    fontFamily: {
      poppins: ["Poppins"],
      noto: ["Noto Sans"],
      cabin: ["Cabin"],
      raleway: ["Raleway"],
      montserrat: ["Montserrat"],
    },
    extend: {
      // backgroundImage: theme => ({
      //   'bunker-blur-bg': "url('/images/logos/deBunker_bg_fullscreen.svg')"
      // }),
      colors: {
        yellowBunker: "#E4F705",
        primary: "",
        secondary: "gray",
      },
      transformOrigin: {
        0: "0%",
      },
      zIndex: {
        "-1": "-1",
      },
    },
  },
  variants: {
    extend: {
      borderColor: ["responsive", "hover", "focus", "focus-within"],
    },
  },
};