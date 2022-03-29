module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        welcome: {
          "0%": {
            transform: "scale(0)",
          },

          "100%": {
            transform: "scale(1)",
          },
        },
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
        comeFromTop: {
          "0%": {
            opacity: 0,
            transform: "translateY(-100px)",
          },
          "100%": {
            opacity: 1,
            transform: "translateY(0)",
          },
        },
        comeFromLeft: {
          "0%": {
            opacity: 0,
            transform: "translateX(-20%)",
          },
          "100%": {
            opacity: 1,
            transform: "translateX(0)",
          },
        },
        comeFromRight: {
          "0%": {
            opacity: 0,
            transform: "translateX(20%)",
          },
          "100%": {
            opacity: 1,
            transform: "translateX(0)",
          },
        },
        rotate: {
          "0%": {
            opacity: 0,
            transform: "rotate(90deg)",
          },
          "100%": {
            opacity: 1,
            transform: "rotate(0)",
          },
        },
      },
      animation: {
        welcome: "welcome 1.5s ease-out",
        comeFromTop: "comeFromTop 0.7s ease-out",
        comeFromLeft: "comeFromLeft 1s ease-in-out ",
        comeFromRight: "comeFromRight 1s ease-in-out ",
        rotate: "rotate 1s ease-in-out ",
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
