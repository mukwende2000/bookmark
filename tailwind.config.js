/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "index.html",
    "src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: 'hsl(var(--primary-color))',
        secondary: 'hsl(var(--secondary-color))',
        gray_blue: 'hsl(var(--grayish-blue))',
        dark_blue: 'hsl(var(--dark-blue))',
      },
      // screens: {
      //   sm: '640px'
      // }
    },
  },
  plugins: [],
}

