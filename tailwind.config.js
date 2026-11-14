/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './support/**/*.html', './privacy/**/*.html', './terms/**/*.html', './apps/**/*.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: { ink: '#0a1222', muted: '#586579', blue: '#3869eb', canvas: '#f7f9fd' },
      fontFamily: { sans: ['Pretendard', 'Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'] },
      boxShadow: { soft: '0 20px 70px rgba(25,48,88,.09)' },
    },
  },
  plugins: [],
};
