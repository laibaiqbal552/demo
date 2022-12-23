/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "0.75rem",
        "2xl": "2rem",
        sm: "1.25rem",
      },
    },
    extend: {},
  },
  plugins: [],
};
