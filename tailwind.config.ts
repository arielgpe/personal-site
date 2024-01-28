import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        green: '#024900',
        pink: '#900048',
        grey: '#333335',
      },
      keyframes: {
        'fade-in': {
          '0%': {
            opacity: '0'
          },
          '100%': {
            opacity: '1',
          }
        },
        rotate90: {
          'to': {'--angle': '90deg'}
        },
        rotate180: {
          'from': {'--angle': '90deg'},
          'to': {'--angle': '180deg'}
        },
        rotate270: {
          'from': {'--angle': '180deg'},
          'to': {'--angle': '270deg'}
        },
        rotate360: {
          'from': {'--angle': '270deg'},
          'to': {'--angle': '360deg'}
        }
      },
      animation: {
        'fade-in': 'fade-in 1s linear',
        'border90': 'rotate90 2s forwards',
        'border180': 'rotate180 2s forwards',
        'border270': 'rotate270 2s forwards',
        'border360': 'rotate360 2s forwards',
      },
    },
  },
  plugins: [],
};
export default config;
