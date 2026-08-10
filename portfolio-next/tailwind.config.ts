import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: ['class'],
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: 'var(--bg)',
        'bg-elev': 'var(--bg-elev)',
        surface: 'var(--surface)',
        'surface-2': 'var(--surface-2)',
        border: 'var(--border)',
        'border-soft': 'var(--border-soft)',
        text: 'var(--text)',
        'text-dim': 'var(--text-dim)',
        'text-faint': 'var(--text-faint)',
        amber: 'var(--amber)',
        teal: 'var(--teal)',
        violet: 'var(--violet)',
      },
      fontFamily: {
        display: ['var(--font-display)'],
        body: ['var(--font-body)'],
        mono: ['var(--font-mono)'],
      },
      maxWidth: { wrap: '1180px' },
      borderRadius: { xl2: '14px' },
      keyframes: {
        'pulse-dot': { '0%,100%': { opacity: '1' }, '50%': { opacity: '.3' } },
        blink: { '50%': { opacity: '0' } },
      },
      animation: {
        'pulse-dot': 'pulse-dot 2s infinite',
        blink: 'blink 1s step-end infinite',
      },
    },
  },
  plugins: [],
};

export default config;
