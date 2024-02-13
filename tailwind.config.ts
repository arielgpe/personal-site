function withOpacity(variableName: any) {
  return ({opacityValue}: { opacityValue: any }) => {
    if (opacityValue !== undefined) {
      return `rgba(var(${variableName}), ${opacityValue})`;
    }
    return `rgb(var(${variableName}))`;
  };
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    // Remove the following screen breakpoint or add other breakpoints
    // if one breakpoint is not enough for you
    screens: {
      sm: '640px',
    },

    extend: {
      colors: {
        green: '#024900',
        pink: '#900048',
        grey: '#333335',
      },
      textColor: {
        skin: {
          base: withOpacity('--color-text-base'),
          accent: withOpacity('--color-accent'),
          inverted: withOpacity('--color-fill'),
        },
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
