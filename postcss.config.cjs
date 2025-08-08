module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};

module.exports.tailwindConfig = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        wine: '#722F37',
        lightgrey: '#D1D5DB',
        charcoal: '#1F1F1F'
      },
      fontFamily: {
        heading: ['Oswald', 'sans-serif'],
        body: ['Inter', 'sans-serif']
      }
    }
  },
  plugins: []
};