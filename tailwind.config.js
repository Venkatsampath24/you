module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      keyframes: {
        blink: {
          '0%, 100%': { borderColor: 'transparent' },
          '50%': { borderColor: 'white' },
        },
      },
      animation: {
        blink: 'blink 1s step-end infinite',
      },
    },
  },
  plugins: [],
};
