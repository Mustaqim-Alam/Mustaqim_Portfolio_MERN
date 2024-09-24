/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bgMain: "#eff0f3",
        bgSecondary: "#fffffe",
        headlineColor: "#0d0d0d",
        paragraphColor: "#2a2a2a",
        buttonBg: "#ff8e3c",
        buttonText: "#0d0d0d",
        borderColor: "#d9376e",
      },
    },
  },
  plugins: [],
};
