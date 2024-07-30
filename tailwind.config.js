/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}",".html"],
  // corePlugins:{
  //   preflight:false,
  // },
  theme: {
    extend: {
      colors: {
        'getlink':'#150E28',
        'getlink2':'#903AFF',
        'getlink3':'#D434FE',
        'gradient1':'#FE34B9',
        'gradient2':'#903AFF',
        line1:"rgba(255, 255, 255, 0.18);"
      },
      fontFamily: {
       'Clash': ['ClashDisplay', 'serif'],
       'Montserrat': ['Montserrat', 'sans'],
       'Unica': ['Unica', 'mono'],
      },
      backgroundImage: {
        'purpleLens': "url('./src/assets/images/blurry.png')",
        'mobilepurpleLens': "url('./src/assets/images/Purple-Lens-Flare-PNG-mobile.png')",

        
      }

    },
  },
  plugins: [],
}

