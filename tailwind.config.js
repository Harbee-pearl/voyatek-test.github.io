/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#FFFFFF",
        dark: "#0A1014",
        blue: {
          main: "#0D6EFD",
          light: "#4A84D6",
          faint: "#F1F7FF",
        },
        text: {
          main: "#000000",
          muted: "#5E5E5E",
        },
        gray: {
          2: "#8F8F8F",
          3: "#828282",
          4: "#9B9B9B",
          5: "#8B8B8B",
        },
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
