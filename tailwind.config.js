module.exports = {
  mode: 'jit',
  // These paths are just examples, customize them to match your project structure
  purge: [
    './public/**/*.html',
    './src/**/*.{js,jsx,ts,tsx,vue}',
  ],
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        hoverColor:'#3dc6c6',
        mainTextColor:'#e5e5e5',
        mainBackGround:"#111",
        overlayColor:'rgba(2, 13, 24, 0.7)'
      },
      keyframes: {
        wiggle: {
          '0%': {
            transform: 'scale(0)'
          },
        
          '100%': {
            transform: 'scale(1)'
          }
        },
        fadeIn:{
          '0%':{
            opacity:0
          },
          '100%':{
            opacity:1
          }
        },
        fadeInOut:{
          '0%':{
            opacity:1
          },
          '100%':{
            opacity:0
          }
        },
        translateIn:{
          '0%':{
            transform:'translateX(0)'
          },
          '100%':{
            transform:'translateX(100%)'
          }
        }
      },
      animation: {
        wiggle: 'wiggle 0.25s ease-in',
        fadeIn:'fadeIn 0.25s ease-in',
        fadeOut:'fadeOut 0.25s ease-in',
        translateIn:'translateIn 0.25s ease-in'
    }
    },
  },
  plugins: [],
}
