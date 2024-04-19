/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'primary' :'#1F1F1F',
        'secondary' :'#020202'
      },
      fontFamily:{
        'sans': ['Poppins'],
        'mono': ['"Google sans"']
      }
    },
  },
  plugins: [],
}