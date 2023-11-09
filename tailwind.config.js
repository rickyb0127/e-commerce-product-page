/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'mobile': {'min': '500px', 'max': '749px'},
      'tablet': {'min': '750px', 'max': '999px'},
      'desktop': {'min': '1000px'}
    },
    colors: {
      'orange': 'var(--orange)',
      'pale-orange': 'var(--pale-orange)',
      'very-dark-blue': 'var(--very-dark-blue)',
      'dark-grayish-blue': 'var(--dark-grayish-blue)',
      'grayish-blue': 'var(--grayish-blue)',
      'light-grayish-blue': 'var(--light-grayish-blue)',
      'white': 'var(--white)',
      'black': 'var(--black)'
    },
    extend: {
      boxShadow: {
        'orange': '0 25px 60px -15px orange'
      }
    },
  },
  plugins: [],
}