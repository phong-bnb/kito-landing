/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontSize: {
        "15px": "15px",
        "54px": "54px",
      },
      screens: {
        xs: "380px",
        tb: "768px",
        xl: "1024px",
      },
      backgroundColor: {
        bluer: "#E5F8FD",
        gray: '#f9fafa'
      },
      text:{
        ping:'#EC80A0',
      }
    },
  },
  plugins: [],
};
