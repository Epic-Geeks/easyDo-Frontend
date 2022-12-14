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
          signinImg: "url(./assets/signin/signin4.jpg)",
          trendbg: "url(./assets/home/trending/trend8.jpg)"
        },
        colors: {
          "button-primary": "#D9CAB3",
          "button-primary-hover": "#B9CAB8",
          "dark-purple": "#212121",
          "light-white": "rgba(255,255,255,0.17)",
          "light-yellow": "#ffe590",
        },
      },
    },
    plugins: [],
  };
  