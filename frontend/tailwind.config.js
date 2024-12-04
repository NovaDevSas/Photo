module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Asegúrate de incluir tus archivos
  ],
  theme: {
    extend: {
      keyframes: {
        slowZoom: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.1)' },
        },
      },
      animation: {
        slowZoom: 'slowZoom 10s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
