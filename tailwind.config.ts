// Import the required type
import type { Config } from "tailwindcss";
/** @type {import('tailwindcss').Config} */

// Export a function that returns the configuration object
const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    background: {
      header: "linear-gradient(341deg, #2E192E 27.37%, #48213B 107.43%)",
    },
    colors: {
      magenta: "#2E192E",
      "lighter-magenta": "#48213B",
      customPink: "#A22875",
      white: "#FBF7F7",
      black: "#141B1D",
    },
    fontFamily: {
      Mate: ["Mate, Inter"],
    },
    extend: {
      backgroundImage: {
        my_bg_image_styling:
          "linear-gradient(181deg, rgba(0, 0, 0, 0.90) 1.75%, rgba(0, 0, 0, 0.00) 69.92%), linear-gradient(270deg, rgba(8, 15, 15, 0.20) 0.3%, rgba(8, 10, 10, 0.20) 1.58%), url(<path-to-image>), lightgray -5.032px -178.744px / 100.77% 188.258% no-repeat",
      },
    },
  },
  plugins: [],
};

export default config;
