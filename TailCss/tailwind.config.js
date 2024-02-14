/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.html"],
  theme: {
    extend: {
      backgroundImage: { 
        'hero-pattern': "url('./dist/img/Group 1.png')",
        'hero-pattern1': "url('.dist/img/pattern.png')",
      }
    },
  },
  plugins: [],
}

