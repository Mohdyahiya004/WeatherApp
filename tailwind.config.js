/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
       boxShadow: {
        "custom-cyan": "0px 4px 10px 0 rgba(0, 251, 255, 0.8)",
      },
    },
  },
  plugins: [],
}
