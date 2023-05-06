module.exports = {
  purge: [
    './src/**/*.html',
    './src/**/*.js',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors:{
        'marine':'#00ADDB',
        'gray-transparent':"#B2B2B2",
          'blue-beauty':"#2872FA",
      },
      width: {
        'w-80': '355px',
      },
      screens: {
        'xs': '300px'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/line-clamp')
  ],
}
