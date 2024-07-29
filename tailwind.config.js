const flowbite = require("flowbite-react/tailwind");
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    flowbite.content(),
  ],
  theme: {
    screens: {
      'sm': '640px',

      'md': '768px',

      'lg': '1024px',

      'xl': '1280px',

      '2xl': '1530px'
    },
    container: {
      padding: '50px',
      center: true
    },
    extend: {
      borderColor: {
        nav: 'rgba(255, 255, 255, 0.1)',
        navMedia: '#a8a29e44',
      },
      backgroundImage: {
        a: 'linear-gradient(145deg, #1e2024, #23272b)',
        photo: "url('src/assets/bg-image-1.jpg')",
        cardLi: 'linear-gradient(to right bottom, #212428, #16181c)',
        fixedImage: "url('src/assets/FixedImage.jpeg')"
      },
      boxShadow: {
        a: '10px 10px 19px #1c1e22, -10px -10px 19px #262a2e',
        icons: '5px 5px 10px #26282d, -5px -10px 19px #34393d'

      },
      fontFamily: {
        primary: ['Poppins', 'sans-serif'],
        secondary: ['Montserrat', 'sans-serif']
      },
      colors: {
        primary: '#ff014f',
        heading: '#c4cfde',
        p: '#757B85',
        p_card: '#928585'
      },
      backgroundColor: {
        nav: '#212428de',
        card: '#202327',
        check: '#3EB75E',
        navbg_light: '#252529 ',
        icons: 'rgba(0, 0, 0, 0.209)',
        section: '#212428'
      },
      linear: {
        dark1: ' rgba(255, 255, 255, 0.05)',
      },
    },
  },
  plugins: [
    flowbite.plugin(),
  ],
}