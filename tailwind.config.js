module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      primary: 'Poppins',
      secondary: 'Reenie Beanie'
    },
    boxShadow: {
      md: '5px 5px 0px #E12490',
      none: '0 0 #0000'
    },
    container: {
      padding: {
        DEFAULT: '30px',
        lg: '0'
      }
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1440px'
    },
    extend: {
      colors: {
        primary: '#222222',
        secondary: '#ffebe0',
        palePink: '#ac0729',
        vividOrange: '#e5903b',
        vividYellow: '#ffbe47',
        cyanBlue: '#01c6f5'
      },
      backgroundImage: {
        hero: "url('./img/coctail.jpg')",
        background: "url('./img/confetti-doodles.svg')",
        backgroundSingleCoctail: "url('./img/confetti-doodles (1).svg')"
      }
    }
  },
  plugins: []
};
