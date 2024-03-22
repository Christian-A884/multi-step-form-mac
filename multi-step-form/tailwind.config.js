/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
  "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'body_bg_color': '#EFF5FF',
        'card_bg': 'white',
        'border_color': '#D6D9E6',
        'denim':'#022959',
        'grey': '#9699AA',
        'light_blue': '#ABBCFF',
        'light_grey': '#D6D9E6',
        'orange': '#FFAF7E',
        'pink': '#F9818E',
        'purple': '#483EFF',
        'red_errors': '#EE374A',
        'sky_blue': '#BEE2FD',
        'very_light_grey': '#F8F9FF',
      },
      fontFamily: {
        ubuntu: ["Ubuntu",  "sans-serif"]
      }
    },
    
  },
  plugins: [],
}

