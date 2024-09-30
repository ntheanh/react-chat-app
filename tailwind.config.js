/** @type {import('tailwindcss').Config} */
export default {
  mode: "jit", // Enable JIT mode
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./index.html"],
  theme: {
    colors: {
      blue_blur: "rgba(17,25,40,0.75)",
      white: "#ffffff",
      black: "rgba(17, 25, 40, 0.92)",
      transparent: "transparent",
      purple: "#3f3cbb",
      blue: "#025fd1",
      red: "#ff0000"
    },
    extend: {}
  },
  plugins: []
}
