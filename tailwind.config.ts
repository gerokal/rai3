import type { Config } from 'tailwindcss'
import typography from '@tailwindcss/typography'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#ff6600',
        'primary-dark': '#e65c00',
        
        'dark-bg': '#212529',
        'dark-bg-light': '#343a40',
        'dark-bg-medium': '#495057',
        
        'light-bg': '#fff',
        'light-bg-gray': '#f8f9fa',

        'text-main': '#212529',
        'text-muted': '#5a6268',
        'text-on-dark': '#f8f9fa',

        border: '#e9ecef',
        'border-dark': '#dee2e6',
      },
      fontFamily: {
        primary: ['Montserrat', 'sans-serif'],
        secondary: ['Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [typography],
}
export default config