/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        link: "#216ce7",
      },
      backgroundImage: {
        login: "url('../assets/img/login/login.png')",
      },
      keyframes: {
        pan: {
          "100%": { backgroundPosition: "15% 50%" },
        },
      },
      animation: {
        "background-pan": "pan 6s infinite alternate linear",
      },
      fontFamily: {
        dsc: "Diplomata SC",
        nko: "Nerko One"
      }
    },
  },
  plugins: [],
};
