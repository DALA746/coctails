module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    animation: {
      scrollingText: ''
    },
    keyframes: {
      wiggle: {
        '0%, 100%': { transform: 'rotate(-3deg)' },
        '50%': { transform: 'rotate(3deg)' }
      }
    },
    fontFamily: {
      primary: 'Poppins',
      secondary: 'Reenie Beanie'
    },
    boxShadow: {
      md: '5px 5px 0px #E12490',
      none: '0 0 #0000'
    },
    borderWidth: {
      0: '5px',
      1: '1px'
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
        secondary: '#F5E6E0',
        palePink: '#E12490',
        vividOrange: '#ff6900',
        vividYellow: '#fcb900',
        cyanBlue: '#8ed1fc'
      },
      backgroundImage: {
        hero: "url('./img/drink.jpg')",
        background: "url('./img/confetti-doodles.svg')"
      }
    }
  },
  plugins: []
};