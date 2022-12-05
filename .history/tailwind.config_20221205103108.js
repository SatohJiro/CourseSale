/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframs: {
        pan: {
          "100%": { backgroundPosition: "15% 50%" },
        },
      },
      animation: {
        "background-pan": "pan 6s infinite alternate linear",
      },
    },
  },
  plugins: [],
};
