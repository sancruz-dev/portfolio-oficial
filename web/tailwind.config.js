module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      colors: {
        brand: {
          300: '#144bb8',
          500: '#477eeb',
        },
        firstColor: {
          500: 'var(--first-color)',
        },
        auxColor: {
          500: 'var(--aux-color)',
        },
      },
      borderRadius: {
        md: '4px'
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('tailwind-scrollbar'),
  ],
}
