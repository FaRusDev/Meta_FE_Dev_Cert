/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-color": { first: "#495E57", second: "#F4CE14" },
        "secondary-color": { first: "#EE9972", second: "#FBDABB" },
        "highlight-color": { first: "#EDEFEE", second: "#333333" },
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
}
