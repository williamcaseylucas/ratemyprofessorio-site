/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      maxWidth: {
        "8xl": "95rem",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
