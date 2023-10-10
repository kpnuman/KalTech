/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        brown: "#bc263a",
        gray: {
          "100": "#20282b",
          "200": "rgba(255, 255, 255, 0.85)",
          "300": "rgba(255, 255, 255, 0.3)",
          "400": "rgba(255, 255, 255, 0.1)",
        },
        silver: "#c7c9ca",
        darkslategray: "#494949",
        gainsboro: "#ddd",
      },
      spacing: {},
      fontFamily: {
        outfit: "Outfit",
        "paragraph-bold-body-16": "Poppins",
        poppins: ['Poppins', 'sans'],
      },
      borderRadius: {
        "11xl": "30px",
      },
    },
    fontSize: {
      base: "1rem",
      "18xl-5": "2.34rem",
      "3xl": "1.38rem",
      "13xl": "2rem",
      "3xl-1": "1.38rem",
      "46xl": "4.06rem",
      "31xl": "3.13rem",
      lg: "1.13rem",
      xl: "1.25rem",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
