/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#8ABA51",
        secondary: "#758888",
        base: "#0C0C0C",
        gray: "#232323"
      },
      backgroundImage:{
        bg_hero:  "url('/images/BG Export.png')",
      }
    },
    container: {
      center: true,
      screens: {
        "2xl": "1100px"
      }
    }
  },
  plugins: [],
}

