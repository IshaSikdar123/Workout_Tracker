/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
    darkMode: 'class', // Enable dark mode using a class
    theme: {
      extend: {
        colors: {
          primary: '#1f2937', // Dark background color
          secondary: '#fbbf24', // Contrasting secondary color
          accent: '#f59e0b', // Accent color
          textPrimary: '#ffffff', // Primary text color
          textSecondary: '#e5e7eb', // Secondary text color
        },
      },
    },
    variants: {
      extend: {
        backgroundColor: ['dark'],
        textColor: ['dark'], 
      },
    },
    plugins: [],
  };
  

