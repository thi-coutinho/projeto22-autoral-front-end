/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
         colors: {
          primary: "#f43474",
          secondary: "#f7e8c0",
          'text': '#fafaf5',
          'paper': '#fafaf505',
          'background': '#111108',
          'primary-button': '#f43474',
          'secondary-button': '#f7e8c0',
          'accent': '#3463e5',
        },
        animation:{
          blob1: "blob 7s 3.5s infinite",
          blob2: "blob 7s infinite",
        },
        keyframes: {
          blob: {
            "0%": {
              transform: "translate(0px,0px) scale(1)"
            },
            "33%": {
              transform: "translate(20px,-50px) scale(1.1)"
            },
            "66%": {
              transform: "translate(-20px,20px) scale(0.9)"
            },
            "100%": {
              transform: "translate(0px,0px) scale(1)"
            }
          }
        }
    },
  },
  plugins: [],
};
