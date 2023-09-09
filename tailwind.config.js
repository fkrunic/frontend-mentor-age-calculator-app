/** @type {import('tailwindcss').Config} */
export default {
  mode: 'jit',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,vue}",
  ],
  theme: {
    screens: {
      desktop: '1440px'
    },
    colors: {
      purple: 'hsl(259, 100%, 65%)',
      'light-red': 'hsl(0, 100%, 67%)',
      white: 'hsl(0, 0%, 100%)',
      'off-white': 'hsl(0, 0%, 94%)',
      'light-gray': 'hsl(0, 0%, 86%)',
      'smokey-gray': 'hsl(0, 1%, 44%)',
      'off-black': 'hsl(0, 0%, 8%)',
      'soft-red': 'hsl(5, 100%, 65%)'
    },
    fontFamily: {
      poppins: 'Poppins, sans-serif'
    },
    extend: {},
  },
  plugins: [],
}

