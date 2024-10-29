import type { Config } from 'tailwindcss'
import plugin from 'tailwindcss/plugin'

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '900px',
      xl: '1280px',
    },
    container: {
      screens: {
        sm: '640px',
        md: '640px',
        lg: '768px',
        xl: '1114px',
      },
    },
    fontSize: {
      base: '1rem',
      lg: '1.5rem',
      xl: '3rem',
    },
    keyframes: {
      'fade-in-up': {
        '0%': {
          opacity: '0',
          transform: 'translate3d(0, 25%, 0)',
        },
        '100%': {
          opacity: '1',
          transform: 'translate3d(0, 0, 0)',
        },
      },
    },
    animation: {
      fadeinup: 'fade-in-up 1s ease-in-out 0.25s forwards',
    },
  },
  plugins: [
    plugin(function ({ addComponents }) {
      addComponents({
        '.container': {
          maxWidth: '100%',
          '@screen sm': {
            maxWidth: '640px',
          },
          '@screen md': {
            maxWidth: '640px',
          },
          '@screen lg': {
            maxWidth: '768px',
          },
          '@screen xl': {
            maxWidth: '900px',
          },
        },
      })
    }),
  ],
}
export default config
