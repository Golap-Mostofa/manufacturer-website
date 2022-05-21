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
          primary: "#A85CF9",
          secondary: "#00FFC6",
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
