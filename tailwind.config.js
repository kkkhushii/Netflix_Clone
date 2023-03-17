/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily:{
        'cursive': 'Cursive',
        'verdana': 'Georgia ',
      },
      colors: {
        'bgcolor': '#13131F',
         'color': '#161623',
         'bgcolor2':'#161623',
      },
      maxWidth:{
        'maxw' : '800px',
      },
      spacing: {
        '1.6': '1.6rem',
      },
      boxShadow: {
        '3xl': ' inset 8px 8px 10px hsla(0,0%,100%,.2),inset -10px -10px 15px rgba(0,0,0,.9)',
      }
    },
  },
  plugins: [],
}
