/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    //pour que tailwind fonctionne dans tous les fichiers du dossier app avec les extensions js,jsx,ts,tsx
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
