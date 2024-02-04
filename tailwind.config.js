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
        primary: "#B6561A", // Use your custom primary color
        secondary: "#00000", // Use your custom secondary color
      },
      backgroundColor: {
        primary: "#B6561A", // Use your custom primary background color
        secondary: "#00000", // Use your custom secondary background color
      },
    },
  },
  plugins: [],
  presets: [require("keep-react/preset")],
};

// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [
//     "./app/**/*.{js,ts,jsx,tsx,mdx}",
//     "./pages/**/*.{js,ts,jsx,tsx,mdx}",
//     "./components/**/*.{js,ts,jsx,tsx,mdx}",
//     "./node_modules/keep-react/**/*.{js,jsx,ts,tsx}",
//   ],
//   presets: [require("keep-react/preset")],
//   theme: {
//     extend: {
//       colors: {
//         primary: "#B6561A", // Use your custom primary color
//         secondary: "#00000", // Use your custom secondary color
//       },
//       backgroundColor: {
//         primary: "#B6561A", // Use your custom primary background color
//         secondary: "#00000", // Use your custom secondary background color
//       },
//     },
//   },
//   plugins: [],
// };
