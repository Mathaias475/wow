/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts,}",
    { raw: '<div class="hover:shadow-[#D45509]">', extension: 'html' },
    { raw: '<div class="hover:shadow-[#7F2ABB]">', extension: 'html' },
    { raw: '<div class="hover:shadow-[#0159B2]">', extension: 'html' },
    { raw: '<div class="hover:shadow-[#19F003]">', extension: 'html' },
    { raw: '<div class="hover:shadow-[#FAFAFB]">', extension: 'html' },
  ],
  theme: {
    extend: {},
  },
  plugins: [],

   

  
}

