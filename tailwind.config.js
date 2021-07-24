module.exports = {
  plugins: [require('tailwindcss-neumorphism')],
  theme: {
    fontFamily: {
      poppins: ["Poppins"],
      noto: ["Noto Sans"],
      cabin: ["Cabin"],
      raleway: ["Raleway"],
      montserrat: ["Montserrat"],
    },
    extend: {
      colors: {
        yellowBunker: "#E4F705",
        primary: "",
        secondary: "gray",
      },
     

      // backgroundImage: (theme) => ({
      //   banner: "url('/images/banner.jpg')",
      //   logo:"url('/images/logos/tweeter-small.svg')"
      // }),
    },
  },
};