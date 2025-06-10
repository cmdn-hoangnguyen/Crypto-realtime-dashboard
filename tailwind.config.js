/** @type {import('tailwindcss').Config} */

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      width: {
        'full-minus-16': 'calc(100vw - 16px)',
      },
      fontFamily: {
        sans: ['Open Sans', 'sans-serif'],
      },
      animation: {
        loader: 'first-loader 0.8s infinite linear alternate, second-loader 1.6s infinite linear',
      },
      keyframes: {
        'first-loader': {
          '0%': {
            'clip-path': 'polygon(50% 50%, 0 0, 50% 0%, 50% 0%, 50% 0%, 50% 0%, 50% 0%)',
          },
          '12.5%': {
            'clip-path': 'polygon(50% 50%, 0 0, 50% 0%, 100% 0%, 100% 0%, 100% 0%, 100% 0%)',
          },
          '25%': {
            'clip-path': 'polygon(50% 50%, 0 0, 50% 0%, 100% 0%, 100% 100%, 100% 100%, 100% 100%)',
          },
          '50%': {
            'clip-path': 'polygon(50% 50%, 0 0, 50% 0%, 100% 0%, 100% 100%, 50% 100%, 0% 100%)',
          },
          '62.5%': {
            'clip-path': 'polygon(50% 50%, 100% 0, 100% 0%, 100% 0%, 100% 100%, 50% 100%, 0% 100%)',
          },
          '75%': {
            'clip-path':
              'polygon(50% 50%, 100% 100%, 100% 100%, 100% 100%, 100% 100%, 50% 100%, 0% 100%)',
          },
          '100%': {
            'clip-path':
              'polygon(50% 50%, 50% 100%, 50% 100%, 50% 100%, 50% 100%, 50% 100%, 0% 100%)',
          },
        },
        'second-loader': {
          '0%': { transform: 'scaleY(1) rotate(0deg)' },
          '49.99%': { transform: 'scaleY(1) rotate(135deg)' },
          '50%': { transform: 'scaleY(-1) rotate(0deg)' },
          '100%': { transform: 'scaleY(-1) rotate(-135deg)' },
        },
      },
    },
  },
  plugins: [],
  safelist: [
    'btn-base',
    'btn-variant-default',
    'btn-variant-default-active',
    'btn-variant-accent',
    'btn-variant-accent-active',
  ],
};
