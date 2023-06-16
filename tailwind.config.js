/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        michroma: ['Michroma', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
      },
      colors: {
        
      }
    }
  },
  plugins: [],
  // purge: {
  //   enabled: true,
  //   content: ['./**/*.html']
  // }
}



// Primary Color:

// Gradient Background: From purple-900 to blue-900 transitioning to black (as mentioned earlier)
// Complementary Colors:

// Accent Color 1: teal-500
// Accent Color 2: indigo-500
// Accent Color 3: pink-500
// Text Color:

// Primary Text: gray-900
// Secondary Text: gray-600
// Accent Text: white
// Button Styles:

// Primary Button: Background - teal-500, Text - white
// Secondary Button: Background - indigo-500, Text - white
// Tertiary Button: Background - pink-500, Text - white