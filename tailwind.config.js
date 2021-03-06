module.exports = {
  mode: 'jit',
  // These paths are just examples, customize them to match your project structure
  content: [
    './public/**/*.html',
    './src/**/*.{js,jsx,ts,tsx,vue}',
    "./src/**/*.{js,jsx,ts,tsx}",
    
      "./src/**/*.{js,jsx,ts,tsx}",
    
  ],
 
  theme: {
    
    extend: {

      colors:{
        hoverColor:'#3dc6c6',
        mainTextColor:'#e5e5e5',
        secondTextColor:'#8E95A5',
        mainBackGround:"#111",
        overlayColor:'rgba(2, 13, 24, 0.7)',
        colorMenu:'rgb(31, 29, 29)',
        colorFacebook:'#3b5999',
        secondBg:'#343946'
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
        },
        marginHeader:{
          '0%':{
             marginTop:'60px'
          },
          '100%':{
            marginTop:'130px'          }
        },
      },
      animation: {
        wiggle: 'wiggle 0.25s ease-in',
        fadeIn:'fadeIn 0.25s ease-in',
        fadeOut:'fadeOut 0.25s ease-in',
        translateIn:'translateIn 0.25s ease-in',
        marginHeader:'marginHeader 0.25s ease-in'
        
    }
    },
  },
  plugins: []
}
