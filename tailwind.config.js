/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#335f32",
      },
      backgroundImage: {
        'parallax': 'url("./public/we-serve.png")'
      }
    },
  },
  plugins: [],
}

