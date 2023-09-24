import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: ['class', '[data-mode="light"]'],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    'node_modules/preline/dist/*.js',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      backgroundColor: {
        'green-light': '#9DC88D', //
        'green-dark' : '#1D3C34',
        'off-white' : '#F1F1F1'
      }
    },
  },
  plugins: [require('preline/plugin'), ['import', { libraryName: 'antd', libraryDirectory: 'es', style: true }]],
}
export default config
