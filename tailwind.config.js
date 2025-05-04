/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./pages/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: 'media', // Use 'class' if you want manual dark mode toggle
    theme: {
      extend: {
        colors: {
          primary: '#4caf50',
          secondary: '#3e8e41',
          light: '#f9f9f9',
          dark: '#1e1e1e',
        },
        container: {
          center: true,
          padding: '1rem',
        },
      },
    },
    plugins: [
      require('@tailwindcss/forms'), // Optional: nice form styling
      require('@tailwindcss/typography'), // Optional: prose classes
    ],
  };
  