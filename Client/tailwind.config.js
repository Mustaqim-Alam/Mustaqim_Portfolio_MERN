/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        fontf1: ["Rajdhani", "sans-serif"],
        fontf2: ["Exo 2", "sans-serif"],
        fontf3: ["Manrope", "sans-serif"],
      },
      backgroundColor: {
        // bgColor1: "#212529", // Custom background color
        bgColor1: "#1E2029", // Custom background color
        bgColor2: "#f2f4f3",
        bgColor3:"#9a348e",
      },
      colors: {
        whiteColor: "#f7fff7",
        blackColor: "#212529",
        hoverColor: "#affc41",
      },
      borderColor: {
        borderColor1: "#affc41",
        borderColor2: "#212529",
        borderColor3:"#9a348e"
      },
    },
  },
  plugins: [],
};
