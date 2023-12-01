/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customGreen: '#8fbc8f',
        primary: "#010214",
        secondary: "#aaa6c3",
        tertiary: "#151030",
        "black-100": "#100d25",
        "black-200": "#090325",
        "white-100": "#f3f3f3",
        dark: "#1b1b1b",
        light: "#f5f5f5",
        primary: "#B63E96",
        primaryDark: "#58E6D9",
      },
      backgroundImage: {
        "tennisBack": "url('/src/assets/Novak3.jpg')",
        "tennisChild": "url('/src/assets/tennisChild.jpg')"
      },
      fontFamily: {
        Roboto: ['Roboto', 'sans-serif']
      },
    },

  },
  plugins: [],
}

