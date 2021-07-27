module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      gold: '#F9A826',
      green: '#60BF88',
      navy: '#2F527B',
      purple: '#9094DF',
      red: '#EA8282',
      white: '#FFFFFF',
    },
    extend: {
      boxShadow: {
        flag: '0 4px 24px rgba(0, 0, 0, 0.1)',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
