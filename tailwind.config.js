/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#111827',    // Custom color for primary (blue)
        secondary: '#ffed4a',  // Custom color for secondary (yellow)
        danger: '#e3342f',     // Custom color for danger (red)
        // You can define any other custom colors
      },
      screens: {
        'xs': '520px', // Adding a custom breakpoint for screens smaller than 520px
      },
    },
  },
  plugins: [],
}