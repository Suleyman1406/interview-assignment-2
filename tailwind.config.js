module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Open Sans", "sans-serif"],
      },
      colors: {
        primary: "#E3E3E3",
        secondary: "#F6F6F8",
        tertiary: "#C60021",
      },
      backgroundImage: {
        "home-back": "url('/public/images/bg_home.jpg')",
      },
    },
  },
  plugins: [],
};
