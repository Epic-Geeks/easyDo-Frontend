module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
      extend: {
        screens: {
          xs: "410px",
        },
        backgroundImage: {
          homefrontbg: "url(./assets/home/front3.jpeg)",
          signupImg: "url(./assets/signup/signup2.jpg)",
          signinImg: "url(./assets/signin/signin4.jpg)"
        },
        colors: {
          "button-primary": "#D9CAB3",
          "button-primary-hover": "#B9CAB8",
          "dark-purple": "#212121",
          "light-white": "rgba(255,255,255,0.17)",
          "light-yellow": "#ffe590",
          "Myrtle-Green": "#2B6777",
          "Columbia-Blue": "#C8D8E4",
          "Anti-Flash-White": "#F2F2F2",
          "Polished-Pine": "#52AB98"
        },
      },
    },
    plugins: [],
  };
  