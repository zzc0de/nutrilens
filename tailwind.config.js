/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-blue": "#1D4ED8",
      },
      fontFamily: {
        Poppins: "Poppins",
        Inter: "Inter",
      },
    },
  },
  plugins: [],
};
