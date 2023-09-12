/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    
    fontFamily: {
      'poppins': ['Poppins', 'sans-serif']
    },
   
    colors: {
      white: "#fff",
      lightblack: "#333",
      black:"#000",
      blue:"#4661F0",
      aquaGreen:"#007494",
      lavender:"#F1F4F9",
    },
    extend: {
      maxWidth: {
        maxContent: "1260px",
        maxContentTab: "650px"
      },
    },
  },
  plugins: [],
};