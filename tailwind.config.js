/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      colors: {
        'custom-blue': '#29A9E0',
        'fgcolor':'#48494B',
        'bgcolor': '#071D32',
        'custom-grey':'#808080'
        
      },
    },
  },
  plugins: [],
}

