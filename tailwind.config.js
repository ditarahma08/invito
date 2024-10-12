/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.html", "./src/**/*.{js,jsx,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        "black-overlay": "rgba(0, 0, 0, 0.7)",
      },
    },
  },
  plugins: [],
};
