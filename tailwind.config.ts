import type { Config } from 'tailwindcss'

export default <Config>{
  content: [
    './app/components/**/*.{vue,ts}',
    './app/layouts/**/*.vue',
    './app/pages/**/*.vue',
    './app/app.vue',
  ],
  theme: {
    extend: {
      colors: {
        void: {
          DEFAULT: '#050505',
          50: '#0d0d0d',
          100: '#141414',
          200: '#1c1c1c',
          300: '#262626',
          400: '#383838',
        },
        retro: {
          black: '#000000',
          void: '#050505',
          dark: '#0e0e0e',
          surface: '#171717',
          panel: '#1f1f1f',
          border: '#333333',
          'border-light': '#555555',
          dim: '#777777',
          muted: '#999999',
          light: '#dcdcdc',
          white: '#ffffff',
        },
        silver: {
          DEFAULT: '#dcdcdc',
          dim: '#777777',
          muted: '#999999',
          bright: '#ffffff',
        },
        accent: {
          DEFAULT: '#ffffff',
          glow: '#ffffff',
          dim: '#aaaaaa',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', '"Space Mono"', 'Courier New', 'monospace'],
      },
      animation: {
        'flicker': 'flicker 0.15s infinite',
        'blink': 'blink 1s step-start infinite',
        'scanline': 'scanline 8s linear infinite',
      },
      keyframes: {
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
        flicker: {
          '0%, 100%': { opacity: '0.98' },
          '50%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
