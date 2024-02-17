function withOpacity(variableName: any) {
  return ({opacityValue}: { opacityValue: any }) => {
    if (opacityValue !== undefined) {
      return `rgba(var(${variableName}), ${opacityValue})`;
    }
    return `rgb(var(${variableName}))`;
  };
}
const colors = ['#F8E9E9', '#EDF9FE', '#F5E1E3', '#F4E9F0', '#E4EFD6', '#F8D3F3', '#E9E3E0', '#F7F7D7'];

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  safelist: [
    ...colors.map((color) => `bg-[${color}]`)
  ],
  theme: {
    // Remove the following screen breakpoint or add other breakpoints
    // if one breakpoint is not enough for you
    screens: {
      sm: '640px',
    },

    extend: {
      textColor: {
        skin: {
          base: withOpacity('--color-text-base'),
          accent: withOpacity('--color-accent'),
          inverted: withOpacity('--color-fill'),
        },
      },
      textDecorationColor: {
        skin: {
          base: withOpacity('--color-text-base'),
          accent: withOpacity('--color-accent'),
          inverted: withOpacity('--color-fill'),
        }
      },
      backgroundColor: {
        skin: {
          fill: withOpacity('--color-fill'),
          accent: withOpacity('--color-accent'),
          inverted: withOpacity('--color-text-base'),
          card: withOpacity('--color-card'),
          'card-muted': withOpacity('--color-card-muted'),
        },
      },
      outlineColor: {
        skin: {
          fill: withOpacity('--color-accent'),
        },
      },
      borderColor: {
        skin: {
          line: withOpacity('--color-border'),
          fill: withOpacity('--color-text-base'),
          accent: withOpacity('--color-accent'),
        },
      },
      fill: {
        skin: {
          base: withOpacity('--color-text-base'),
          accent: withOpacity('--color-accent'),
        },
        transparent: 'transparent',
      },
      fontFamily: {
        mono: ['var(--font-ibm-plex-mono)', 'monospace'],
      },

      typography: {
        DEFAULT: {
          css: {
            pre: {
              color: false,
            },
            code: {
              color: false,
            },
          },
        },
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
