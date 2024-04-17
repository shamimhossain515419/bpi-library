/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/keep-react/**/*.{js,jsx,ts,tsx}",
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#4F46E5",
        secondary: "#38BDF8",
        tertiary: "#EDECFC",
      },
      backgroundColor: {
        primary: "#4F46E5",
        secondary: "#38BDF8",
        tertiary: "#EDECFC",
      },
    },
  },
  plugins: [],
  presets: [require("keep-react/preset")],
};
