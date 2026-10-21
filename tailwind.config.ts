import type { Config } from 'tailwindcss'

export default <Config>{
  darkMode: 'class',
  content: [
    './app/components/**/*.{vue,ts}',
    './app/layouts/**/*.vue',
    './app/pages/**/*.vue',
    './app/app.vue',
  ],
  theme: {
    extend: {
      colors: {
        gh: {
          canvas: 'var(--gh-canvas)',
          subtle: 'var(--gh-subtle)',
          panel: 'var(--gh-panel)',
          border: 'var(--gh-border)',
          'border-muted': 'var(--gh-border-muted)',
          fg: 'var(--gh-fg)',
          muted: 'var(--gh-muted)',
          blue: 'var(--gh-blue)',
          'blue-subtle': 'var(--gh-blue-subtle)',
          green: 'var(--gh-green)',
          'green-subtle': 'var(--gh-green-subtle)',
          purple: 'var(--gh-purple)',
          orange: 'var(--gh-orange)',
        },
      },
      fontFamily: {
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', 'monospace'],
      },
      borderRadius: {
        md: '6px',
        lg: '8px',
      },
      boxShadow: {
        xs: '0 1px 0 rgba(27, 31, 36, 0.04)',
        sm: '0 1px 2px rgba(27, 31, 36, 0.08)',
        md: '0 3px 6px rgba(140, 149, 159, 0.15)',
        modal: '0 8px 24px rgba(140, 149, 159, 0.2)',
        'modal-dark': '0 8px 24px rgba(1, 4, 9, 0.8)',
      },
    },
  },
  plugins: [],
}
