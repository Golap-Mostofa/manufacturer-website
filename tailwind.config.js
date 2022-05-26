module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  //--coustom theem---
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#3BACB6",
          secondary: "#f6d860",
          accent: "#6BCB77",
          neutral: "#4D77FF",
          "base-100": "#ffffff",
        },
      },
      
      "cupcake",
    ],
  },
  //-------------------//
  plugins: [require("daisyui")],
}
