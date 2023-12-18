/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      'mini':'525px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'wb':'1100px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {
      colors: {
        primary : '#ed500a',
        background : '#1a1717',
        accent : '#a02f16',
        secondary :  '#e6e6e5',
        text : '#f0e3e3',
        e14eca : "#e14eca",
        282828 : "#282828",
        262626 : "#262626"
        
      },
      fontFamily: {
        'poppins':['Poppins', 'sans-serif']
      }
    },
  },
  plugins: [],
};
