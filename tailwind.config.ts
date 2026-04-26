import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './apps/**/*.{js,ts,jsx,tsx}',
    './packages/**/*.{js,ts,jsx,tsx}',
    './templates/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        background: '#0d0d0d',
        surface: '#14141f',
        teal: '#9fe1cb',
        purple: '#534AB7',
        slate: '#8b92a9',
        gold: '#d1b14b'
      },
      boxShadow: {
        glow: '0 0 40px rgba(159, 225, 203, 0.14)'
      },
      fontFamily: {
        mono: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', 'monospace']
      }
    }
  },
  plugins: []
}

export default config
