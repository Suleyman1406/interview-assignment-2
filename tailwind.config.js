module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        wiggle: {
          "0%": {
            opacity: 0,
            transform: "translateY(-200%)",
          },
          "100%": {
            opacity: 1,
            transform: "translateY(0)",
          },
        },
      },
      animation: {
        wiggle: "wiggle 0.7s ease-out",
      },
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
        "body-back": "url('/public/images/bg_body.jpg')",
      },
    },
  },
  plugins: [],
};
