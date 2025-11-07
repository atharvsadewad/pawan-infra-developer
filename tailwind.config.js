/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#c9a350ff", // Gold
        background: "#FAFAFA",
        foreground: "#1E1E1E",
        muted: "#F2F2F2",
        divider: "#E5E5E5",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
      },
      boxShadow: {
        soft: "0 4px 30px rgba(0,0,0,0.05)",
        deep: "0 8px 30px rgba(0,0,0,0.1)",
      },
    },
  },
  plugins: [],
}
