/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#131312ff",
        secondary: '#2F2E2Eff',
        unchecked: '#919090ff',
        offwhite: '#FFFFFFff',
        button: '#B88000ff',
      },
      boxShadow: {
        'custom': 'rgba(0, 0, 0, 0.1) 0px 0px 5px 0px, rgba(0, 0, 0, 0.1) 0px 0px 1px 0px',
      },
      fontFamily: {
        Poppins: ['Poppins', 'sans-serif'],
        Montserrat: ['Montserrat', 'sans-serif'],
        Inter: ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}