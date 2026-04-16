/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#0d1b2a',
          light: '#162032',
          medium: '#1e3448',
          50: '#e8ecf0',
          100: '#c5d0db',
        },
        gold: {
          DEFAULT: '#c9a84c',
          hover: '#b8973b',
          light: '#f5edda',
          50: '#fdf8ee',
        },
        // Backwards-compat aliases so existing blog/service pages keep working
        primary: {
          50: '#e8ecf0',
          100: '#c5d0db',
          500: '#0d1b2a',
          600: '#0d1b2a',
          700: '#162032',
          800: '#1e3448',
          900: '#0a1520',
        },
        accent: {
          50: '#fdf8ee',
          100: '#f5edda',
          500: '#c9a84c',
          600: '#b8973b',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        serif: ['var(--font-playfair)', 'Georgia', 'serif'],
      },
    },
  },
  plugins: [],
}
