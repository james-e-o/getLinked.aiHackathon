/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}",".html"],
  // corePlugins:{
  //   preflight:false,
  // },
  theme: {
    extend: {
      colors: {
        'getlink':'#100B20',
        'getlinklight':'#150E28',
        'getlinklight2':'#110B20',
        'getlink2':'#903AFF',
        'getlink3':'#D434FE',
        'gradient1':'#FE34B9',
        'gradient2':'#903AFF',
        line1:"rgba(255, 255, 255, 0.18);"
      },
      fontSize:{
        '01':'0.063rem',
        '02':'0.13rem',
        '03':'0.19rem',
        '04':'0.25rem',
        '05':'0.31rem',
        '06':'0.38rem',
        '07':'0.44rem',
        '08':'0.5rem',
        '09':'0.565rem',
        '010':'0.625rem',
        '011':'0.691rem',
        '013':'0.81rem',
        '014':'0.88rem',
        '015':'0.94rem',
      },
      fontFamily: {
       'Clash': ['ClashDisplay', 'serif'],
       'Montserrat': ['Montserrat', 'sans'],
       'Unica': ['Unica', 'mono'],
       'Voces': ['Voces', 'sans'],
       'Typohoop': ['Typohoop', 'sans'],
       'Madetommy': ['Madetommy', 'sans'],
       'Inter': ['Inter', 'sans'],
      },
      backgroundImage: {
        'purpleLens': "url('/blurry.png')",
        'mobilepurpleLens': "url('/Purple-Lens-Flare-PNG-mobile.png')",
        'leftMobilepurpleLens': "url('/left-mobileLens-flare.png')",
        'rightMobilepurpleLens': "url('/right-mobileLens-flare.png')",
        skillGradient : "linear-gradient(to left top,rgb(239, 245, 249),rgb(228, 232, 233),white)",
        
      }

    },
  },
  plugins: [],
}

