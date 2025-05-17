// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   // NOTE: Update this to include the paths to all of your component files.
//   content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
//   presets: [require("nativewind/preset")],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }

/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      fontFamily: {
        rubik: ["Rubik-Regular", "sans-serif"],
        "rubik-bold": ["Rubik-Bold", "sans-serif"],
        "rubik-medium": ["Rubik-Medium", "sans-serif"],
        "rubik-light": ["Rubik-Light", "sans-serif"],
        "rubik-semibold": ["Rubik-SemiBold", "sans-serif"],
      }
    },
    // colors: {
    //   "primary": {
    //     100: "#F7F7F7",
    //     200: "#EDEDED",
    //     300: "#D3D3D3",
    //     400: "#C0C0C0",
    //     500: "#A9A9A9",
    //   },
    //   accent: {
    //     100: "FBFBFD",

    //   },
    //   danger: {
    //     100: "#FF0000",
    //     200: "#FF4C4C",
    //     300: "#FF7F7F",
    //     400: "#FFB2B2",
    //     500: "#FFE5E5",
    //   },
    //   secondary: "#F7F7F7",
    //   tertiary: "#EDEDED",
    //   quaternary: "#000000",
    //   white: "#FFFFFF",
    //   black: "#000000",
    //   gray: "#808080",
    //   lightGray: "#D3D3D3",
    // },
  },
  plugins: [],
}