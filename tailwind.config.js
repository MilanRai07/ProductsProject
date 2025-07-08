/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'Golden': '#CD8E58',
        'DarkGolden': '#BF7F4D',
        'CustomGrey': '#404040',
        'CommonBg': '#161717',
        'Black70%': 'rgba(0,0,0,0.7)'
      },
      letterSpacing: {
        '2%': '0.02em',
        '4%': '0.04em',
        '6%': '0.06em',
        '7%': '0.07em'
      },
      //custom screen sizes
      screens: {
        '3xl': { 'max': '1352px' },
        '2xl': { 'max': '1312px' },
        '2x-l': { 'max': '1156px' },
        'xl': { 'max': '1041px' },
        'x-l': { 'max': '817px' },
        'lg': { 'max': '720px' },
        'l-g': { 'max': '912px' },
        'mlg': { 'max': '855px' },
        'md': { 'max': '767px' },
        'm-d': { 'max': '731px' },
        'sm': { 'max': '639px' },
        'sm-d': { 'max': '571px' },
        'xs': { 'max': '464px' },
        '1xs': { 'max': '426px' },
        '2xs': { 'max': '388px' },
        // for slider in home
        'sl1': { 'max': '619px' },
        'sl2': { 'max': '515px' },
        'sl3': { 'max': '427px' },
        'sl4': { 'max': '382px' },
        // for home gallery
        'gl2': { 'max': '1191px' },
        'gl3': { 'max': '1062px' },
        'gl4': { 'max': '793px' },
        'gl5': { 'max': '686px' },
        'gl6': { 'max': '966px' },
        'm1': { 'max': '966px' },

        //designer slider
        'd1': { 'max': '1195px' },

        //award and certificates
        'a1': { 'max': '1208px' },

        //news
        'n1': { 'max': '1266px' },
        'n2': { 'max': '772px' },
        'n3': { 'max': '600px' },
        'n4': { 'max': '417px' },

        //assets card
        'as1': { 'max': '582px' }
      }
    },
  },
  plugins: [],
}