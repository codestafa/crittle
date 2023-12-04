// Import the required type
import type { Config } from "tailwindcss";
/** @type {import('tailwindcss').Config} */

// Export a function that returns the configuration object
const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    background: "linear-gradient(341deg, #2E192E 27.37%, #48213B 107.43%)",
    colors: {
      magenta: "#2E192E",
      "lighter-magenta": "#48213B",
      pink: "#A22875",
      white: "#FBF7F7",
      black: "#141B1D",
    },
    fontFamily: {
      Mate: ["Mate, Inter"],
    },
    extend: {
      backgroundImage: {
        gradientImage:
          "linear-gradient(0deg, rgba(0, 0, 0, 0.30) 0%, rgba(0, 0, 0, 0.30) 100%), url(<path-to-image>), lightgray -6.084px -180.04px / 98.833% 188.258% no-repeat)",
      },
    },
  },
  plugins: [],
};

export default config;
