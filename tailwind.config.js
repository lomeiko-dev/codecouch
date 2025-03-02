/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'figma-green': '#108A00',
        'light-green': '#D5E0D5',
        'text': '#001E00',

      },
      screens: {
        tablet: '768px',
        laptop: '1440px',
        desktop: '1920px',
        phone: '390px'
      }
    },
  },
  plugins: [],
}

