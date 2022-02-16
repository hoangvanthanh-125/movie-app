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
        mainBackGround:"#111"
      },
      keyframes: {
        wiggle: {
          '0%': {
            transform: 'scale(0)'
          },
        
          '100%': {
            transform: 'scale(1)'
          }
          
        }
      },
      animation: {
        wiggle: 'wiggle 0.25s ease-in-out',
    }
    },
  },
  plugins: [],
}
